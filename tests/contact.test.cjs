const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve, dirname } = require('node:path');
const ts = require('typescript');
const vm = require('node:vm');

function app(env, fetch) {
  const cache = new Map();
  function load(path) {
    path = resolve(path);
    if (cache.has(path)) return cache.get(path);
    const loaded = { exports: {} };
    cache.set(path, loaded.exports);
    const source = ts.transpileModule(readFileSync(path, 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    vm.runInNewContext(source, {
      module: loaded, exports: loaded.exports, process: { env }, fetch,
      Request, Response, URL, AbortSignal, console: { error() {} },
      require(id) {
        if (id.startsWith('node:')) return require(id);
        return load(id.startsWith('@/') ? resolve('src', id.slice(2) + '.ts') : resolve(dirname(path), id + '.ts'));
      },
    });
    return loaded.exports;
  }
  return load('src/app/api/contact/route.ts');
}
const env = { RESEND_API_KEY: 'fake-test-key', CONTACT_EMAIL: 'owner@example.com' };
const data = {name:'Persona de prueba',company:'Empresa ficticia',email:'visitor@example.com',interest:'Asistente de documentos',description:'Necesitamos ordenar los documentos internos.',website:'',startedAt:Date.now()-10000};
const request = (body=data) => new Request('http://localhost:3001/api/contact', {method:'POST', headers:{'Content-Type':'application/json', Origin:'http://localhost:3001'},body:JSON.stringify(body)});

test('acceptance: fixed recipient, reply-to, text and stable retry key', async () => {
  const sent=[];
  const api=app(env, async (url,init)=>{sent.push({url,...init});return Response.json({id:'email-id'});});
  assert.equal((await api.POST(request())).status,200);
  assert.equal((await api.POST(request())).status,200);
  const body=JSON.parse(sent[0].body);
  assert.equal(sent[0].url,'https://api.resend.com/emails');
  assert.deepEqual(body.to,['owner@example.com']);
  assert.equal(body.reply_to,'visitor@example.com');
  assert.equal(body.from,'Mate y Código <onboarding@resend.dev>');
  assert.ok(body.text.includes(data.description));
  assert.equal(sent[0].headers['Idempotency-Key'],sent[1].headers['Idempotency-Key']);
  assert.equal(sent[0].headers.Authorization,'Bearer fake-test-key');
  await api.POST(request({...data,description:'Un proceso diferente para esta consulta.'}));
  assert.notEqual(sent[0].headers['Idempotency-Key'],sent[2].headers['Idempotency-Key']);
});
test('configured sender overrides test sender', async()=>{
  const api=app({...env,RESEND_FROM:'Web <web@example.com>'},async (_,init)=>{
    assert.equal(JSON.parse(init.body).from,'Web <web@example.com>');
    return Response.json({id:'accepted'});
  });
  assert.equal((await api.POST(request())).status,200);
});
test('missing or invalid configuration does not call provider',async()=>{
  for(const config of [{},{...env,RESEND_API_KEY:''},{...env,CONTACT_EMAIL:'invalid'}]){
    const api=app(config,()=>{throw new Error('must not call provider');});
    assert.equal((await api.POST(request())).status,503);
  }
});
test('provider failures never report success or expose provider details',async()=>{
  for(const provider of [async()=>Response.json({message:'private-provider-detail'},{status:403}),async()=>Response.json({},{status:429}),async()=>Response.json({},{status:500}),async()=>Response.json({}),async()=>{throw new Error('timeout');}]){
    const api=app(env,provider);
    const result=await api.POST(request());
    assert.equal(result.status,502);
    const body=await result.json();
    assert.equal(body.ok,undefined);
    assert.ok(body.error.includes('reintentar'));
    assert.ok(!body.error.includes('private-provider-detail'));
  }
});
test('validation and honeypot reject before sending',async()=>{
  let calls=0;
  const api=app(env,async()=>{calls++;return Response.json({id:'accepted'});});
  for(const body of [{},null,{...data,email:'bad'},{...data,website:'bot'},{...data,startedAt:Date.now()}]){
    assert.equal((await api.POST(request(body))).status,400);
  }
  assert.equal(calls,0);
});

