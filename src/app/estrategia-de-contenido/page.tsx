import ServicePage, { serviceMetadata, type ServiceDetails } from '../ServicePage';

const service: ServiceDetails = {
  path: "/estrategia-de-contenido",
  heading: "Estrategia de contenido para empresas en Uruguay",
  kicker: "Planificación de contenidos para redes sociales",
  description: "Armamos una estrategia de contenido a partir de las preguntas reales de tus clientes, con calendario editorial y ejemplos de publicaciones y guiones.",
  proposalId: "1B0Ihg0FvuVGc9Ln292yvxEsi-rSysjqQ",
  features: [
    ["Pilares de contenido","Agrupamos dudas, objeciones y casos frecuentes para elegir temas que ayuden a entender el servicio, comparar opciones o preparar una consulta."],
    ["Calendario editorial","Definimos qué publicar, en qué formato y con qué objetivo. Acordamos canales y frecuencia según lo que tu equipo pueda producir."],
    ["Textos y guiones para adaptar","Preparamos ejemplos de carruseles, publicaciones o videos cortos. Cada pieza tiene un llamado a la acción acorde al objetivo."],
  ],
  example: ["Una semana sobre cómo pedir presupuesto","Un carrusel explica qué datos enviar, un video muestra cómo mejora una consulta al sumar esa información y una publicación ofrece un mensaje de ejemplo para copiar y adaptar."],
  question: ["¿Qué incluye la propuesta de contenido?","Incluye pilares, un calendario inicial y ejemplos de textos o guiones. La cantidad de piezas, los canales y el período se acuerdan al definir el alcance."],
  nextStep: "Compartinos tus canales, los servicios que querés impulsar y las dudas que más se repiten entre tus clientes.",
};

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
