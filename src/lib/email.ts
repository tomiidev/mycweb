import { createHash } from 'node:crypto';
import { brand, type Contact } from './config';

// Import this module only from server components and route handlers.
export function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() || '';
  const to = process.env.CONTACT_EMAIL?.trim() || '';
  const from = process.env.RESEND_FROM?.trim() || `${brand.name} <onboarding@resend.dev>`;
  return { apiKey, to, from, enabled: Boolean(apiKey && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(to)) };
}

export async function sendContactEmail(data: Contact) {
  const config = getEmailConfig();
  if (!config.enabled) throw new Error('Email is not configured');
  const payload = {
    from: config.from,
    to: [config.to],
    reply_to: data.email.trim().toLowerCase(),
    subject: `${brand.name} · ${data.interest}`,
    text: [
      'Nueva consulta desde la web', '',
      `Nombre: ${data.name.trim()}`,
      `Empresa: ${data.company.trim()}`,
      `Email: ${data.email.trim()}`,
      `Solución de interés: ${data.interest}`, '',
      'Descripción del proceso:', data.description.trim(),
    ].join('\n'),
  };
  // Retrying the same form keeps the same key, including after a timeout.
  const idempotencyKey = createHash('sha256')
    .update(JSON.stringify({ payload, startedAt: data.startedAt })).digest('hex');
  const result = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
      'Idempotency-Key': `contact-${idempotencyKey}`,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(10000),
    redirect: 'error',
  });
  if (!result.ok) {
    // Never log credentials, form contents, or provider response bodies.
    console.error('Resend rejected contact email', { status: result.status });
    throw new Error('Email provider rejected the request');
  }
  const receipt: unknown = await result.json();
  if (!receipt || typeof receipt !== 'object' || !('id' in receipt) ||
      typeof receipt.id !== 'string' || !receipt.id.trim()) {
    throw new Error('Missing email acceptance receipt');
  }
}
