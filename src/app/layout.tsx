import type { Metadata } from 'next';
import { brand } from '@/lib/config';
import './globals.css';
export const metadata: Metadata = { title: `${brand.name} | Menos trabajo manual`, description:'Software, IA y automatización para simplificar los procesos de tu empresa. Desarrollo a medida con Tomás Ruglio, desde Uruguay.', openGraph:{title:`${brand.name} — Menos trabajo manual.`,description:'Más tiempo para tu negocio. Evaluemos un primer piloto.',locale:'es_UY',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="es-UY"><body>{children}</body></html>}
