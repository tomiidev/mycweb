import Landing from '@/components/Landing';
import { getEmailConfig } from '@/lib/email';
export default function Page() {
  const config = getEmailConfig();
  return <Landing contactEnabled={config.enabled} contactEmail={config.to} />;
}
export const dynamic = 'force-dynamic';
