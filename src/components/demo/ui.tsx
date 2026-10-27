'use client';
import { useEffect, useRef, type ReactNode } from 'react';
import { Search, X, Inbox } from 'lucide-react';

export function Badge({ children, tone = '' }: { children: ReactNode; tone?: string }) { return <span className={`d-badge ${tone}`}>{children}</span>; }
export function PageHeading({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) { return <div className="d-heading"><div><div className="d-eyebrow">ESPACIO DE TRABAJO</div><h1>{title}</h1><p>{subtitle}</p></div>{action}</div>; }
export function SearchField({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) { return <label className="d-search"><Search size={18}/><input aria-label={placeholder} placeholder={placeholder} value={value} onChange={e => onChange(e.target.value)}/>{value && <button className="d-icon" aria-label="Limpiar búsqueda" onClick={() => onChange('')}><X size={15}/></button>}</label>; }
export function Filters({ options, value, onChange }: { options: string[]; value: string; onChange: (value: string) => void }) { return <div className="d-filters" aria-label="Filtros">{options.map(option => <button key={option} aria-pressed={value === option} className={value === option ? 'active' : ''} onClick={() => onChange(option)}>{option}</button>)}</div>; }
export function Empty({ text = 'No encontramos resultados. Probá con otra búsqueda.' }: { text?: string }) { return <div className="d-empty"><Inbox size={30}/><p>{text}</p></div>; }
export function Drawer({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const dialog = ref.current; const previous = document.activeElement as HTMLElement | null; dialog?.showModal(); return () => { dialog?.close(); previous?.focus(); }; }, []);
  return <dialog ref={ref} className="d-drawer" aria-label={title} onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}><div className="d-drawer-inner"><header><h2>{title}</h2><button className="d-icon" aria-label="Cerrar panel" onClick={onClose}><X size={21}/></button></header>{children}</div></dialog>;
}
export function Details({ values }: { values: Record<string, string | undefined> }) { return <dl className="d-details">{Object.entries(values).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>; }
