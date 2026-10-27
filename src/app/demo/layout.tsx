import type { Metadata } from 'next';
import Shell from '@/components/demo/Shell';
import './demo.css';
export const metadata: Metadata = { title: 'Demo | Mate y Código', description: 'Entorno de demostración con datos ficticios.', robots: { index: false, follow: false }, openGraph: { title: 'Demo | Mate y Código', description: 'Entorno de demostración con datos ficticios.' } };
export default function DemoLayout({ children }: { children: React.ReactNode }) { return <Shell>{children}</Shell>; }
