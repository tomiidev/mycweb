export const brand = {
  name: 'Mate y Código', descriptor: 'Software, IA y automatización',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || '',
  booking: process.env.NEXT_PUBLIC_BOOKING_URL || '',
};
export const interests = ['Asistente de documentos', 'Conciliación bancaria', 'Consultas comerciales', 'Búsqueda de productos', 'Desarrollo a medida', 'Todavía no lo sé'];
export type Contact = {name:string;company:string;email:string;interest:string;description:string;website:string;startedAt:number};
export function validate(data: Contact) {
  if (!data || typeof data !== 'object') return 'Revisá los datos de la consulta.';
  for (const key of ['name','company','email','interest','description','website'] as const) if(typeof data[key] !== 'string') return 'Revisá los campos del formulario.';
  if (data.name.trim().length < 2 || data.name.length > 100) return 'Ingresá tu nombre (entre 2 y 100 caracteres).';
  if (!data.company.trim() || data.company.length > 150) return 'Ingresá tu empresa (hasta 150 caracteres).';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254) return 'Ingresá un email válido.';
  if (!interests.includes(data.interest)) return 'Elegí una solución de interés.';
  if (data.description.trim().length < 15 || data.description.length > 4000) return 'Describí el proceso con entre 15 y 4000 caracteres.';
  return '';
}

