import { Suspense } from 'react';
import BusinessSearch from '@/components/demo/BusinessSearch';
export default function Page() { return <Suspense fallback={<p>Cargando buscador…</p>}><BusinessSearch/></Suspense>; }
