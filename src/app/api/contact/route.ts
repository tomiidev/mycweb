import { getEmailConfig, sendContactEmail } from '@/lib/email';
import { validate, type Contact } from '@/lib/config';
const attempts = new Map<string, {count:number;until:number}>();
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return Response.json({error:'Origen no permitido.'},{status:403});
  if (!request.headers.get('content-type')?.includes('application/json')) return Response.json({error:'Formato no válido.'},{status:415});
  let data:Contact;
  try { const raw = await request.text(); if(raw.length > 12000) return Response.json({error:'Consulta demasiado extensa.'},{status:413}); data = JSON.parse(raw); } catch {return Response.json({error:'No pudimos leer la consulta.'},{status:400});}
  const error = validate(data);
  if(error) return Response.json({error},{status:400});
  if(data.website || !Number.isFinite(data.startedAt) || Date.now()-data.startedAt < 2500) return Response.json({error:'No pudimos validar el envío. Esperá unos segundos e intentá nuevamente.'},{status:400});
  const now = Date.now();
  for(const [key,value] of attempts) if(value.until < now) attempts.delete(key);
  const key = data.email.trim().toLowerCase();
  const entry = attempts.get(key) || {count:0,until:now+600000};
  if(entry.count >= 4 || attempts.size > 10000) return Response.json({error:'Demasiados intentos. Probá nuevamente en unos minutos.'},{status:429});
  entry.count++; attempts.set(key,entry);
  if(!getEmailConfig().enabled) return Response.json({error:'El formulario todavía no está disponible. Tu consulta no fue enviada.'},{status:503});
  try {
    await sendContactEmail(data);
    return Response.json({ok:true});
  } catch {return Response.json({error:'No pudimos confirmar el envío. Conservamos el texto en el formulario para que puedas reintentar.'},{status:502});}
}
