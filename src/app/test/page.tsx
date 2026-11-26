import Landing from '@/components/Landing';
import { getEmailConfig } from '@/lib/email';
export default function Page() {
  const config = getEmailConfig();
  return <Landing contactEnabled={config.enabled} contactEmail={config.to} />;
}
export const dynamic = 'force-dynamic';

export const metadata: import('next').Metadata = { title: `Mate y Código | Menos trabajo manual`, description:'Software, IA y automatización para simplificar los procesos de tu empresa. Desarrollo a medida con Tomás Ruglio, desde Uruguay.', openGraph:{title:`Mate y Código — Menos trabajo manual.`,description:'Más tiempo para tu negocio. Evaluemos un primer piloto.',locale:'es_UY',type:'website'}};
