import ServicePage, { serviceMetadata, type ServiceDetails } from '../ServicePage';

const service: ServiceDetails = {
  path: "/visibilidad-en-ia",
  heading: "Visibilidad en buscadores con IA en Uruguay",
  kicker: "Diagnóstico de visibilidad en IA para empresas",
  description: "Revisamos cómo aparece tu negocio en búsquedas con IA, registramos las fuentes y priorizamos mejoras para que tu sitio explique mejor qué ofrecés.",
  proposalId: "1pMuAM6yg0U6lnNcPvwykaceju3qB8veP",
  features: [
    ["Consultas que harían tus clientes","Probamos búsquedas abiertas por servicio y zona, y consultas que nombran tu negocio. Así distinguimos si aparece cuando alguien busca proveedores y si su descripción es precisa."],
    ["Fuentes y contenido del sitio","Revisamos qué páginas se citan cuando hay fuentes y comprobamos si el sitio explica servicios, cobertura y contacto con claridad."],
    ["Diagnóstico y mejoras priorizadas","Entregamos un registro de consultas y una lista de cambios por página. Si acordamos aplicar mejoras, repetimos la muestra para comparar observaciones."],
  ],
  example: ["Un servicio técnico en Montevideo","Probamos «¿Quién repara cafeteras comerciales en Montevideo?» y, por separado, una consulta que nombra el negocio. Si la respuesta omite los equipos comerciales, revisamos si la página de reparaciones aclara qué modelos atiende y en qué zonas."],
  question: ["¿Pueden garantizar que mi empresa aparezca en ChatGPT?","Las menciones y citas dependen de la consulta, el buscador y el momento de la prueba. El servicio entrega un diagnóstico con evidencia y mejoras concretas para tu sitio."],
  nextStep: "Compartinos la URL de tu sitio, los servicios que querés destacar y las zonas que atendés.",
};

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
