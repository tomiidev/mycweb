'use client';

import { useRef, useState, type FormEvent } from 'react';
import { commercialInterests, validate, type Contact } from '@/lib/config';
import styles from './home.module.css';

export default function ContactForm({ enabled }: { enabled: boolean }) {
  const startedAt = useRef<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!enabled || busy) return;

    const form = new FormData(event.currentTarget);
    const data: Contact = {
      name: String(form.get('name')),
      company: String(form.get('company')),
      email: String(form.get('email')),
      interest: String(form.get('interest')),
      description: String(form.get('description')),
      website: String(form.get('website')),
      startedAt: startedAt.current ?? Date.now(),
    };
    const error = validate(data);
    if (error) {
      setStatus(error);
      return;
    }

    setBusy(true);
    setStatus('Enviando tu consulta…');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setStatus(response.ok ? 'Recibimos tu consulta. Gracias por escribirnos.' : result.error || 'No pudimos confirmar el envío.');
    } catch {
      setStatus('No pudimos conectar. Tu texto sigue acá para reintentar.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className={styles.form} onFocus={() => { startedAt.current ??= Date.now(); }} onSubmit={submit}>
      <div className={styles.fields}>
        <label>Nombre<input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
        <label>Negocio o actividad<input name="company" autoComplete="organization" required maxLength={150} /></label>
      </div>
      <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>¿Qué te interesa?
        <select name="interest" defaultValue="Todavía no lo sé">
          {commercialInterests.map(interest => <option key={interest}>{interest}</option>)}
        </select>
      </label>
      <label>Contanos tu idea<textarea name="description" required minLength={15} maxLength={4000} rows={4} /></label>
      <div className="honeypot" aria-hidden="true">
        <label>Sitio web<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      {!enabled && <p>El formulario todavía no está disponible para enviar consultas.</p>}
      <button className={styles.button} disabled={!enabled || busy}>{busy ? 'Enviando…' : 'Enviar consulta'}</button>
      <p role="status">{status}</p>
    </form>
  );
}
