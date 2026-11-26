import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mate y Código | Desarrollo web e IA en Uruguay',
  description: 'Desarrollo web para negocios en Uruguay. Explorá pilotos de visibilidad en IA y automatización, y estrategias de contenido a medida.',
  openGraph: { locale: 'es_UY', type: 'website' },
  icons: { icon: { url: '/mate-y-codigo-logo.png', type: 'image/png', sizes: '160x160' } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es-UY"><body>{children}</body></html>;
}
