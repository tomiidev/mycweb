import ServicePage, { serviceMetadata, type ServiceDetails } from '../ServicePage';

const service: ServiceDetails = {
  path: "/automatizacion-con-ia",
  heading: "Automatización con IA para empresas en Uruguay",
  kicker: "Piloto de automatización de procesos",
  description: "Probamos cómo automatizar una tarea repetitiva, como clasificar consultas, preparar borradores o registrar solicitudes de reserva, con revisión del equipo.",
  proposalId: "1qBARTUtzawIrJ4dcZcXSb2ejj8gzenYa",
  features: [
    ["Elegimos una tarea medible","Registramos los pasos y el tiempo que hoy lleva ordenar mensajes, cargar datos o preparar respuestas."],
    ["Probamos con tus herramientas","Evaluamos las integraciones disponibles y usamos ejemplos representativos, incluidos mensajes incompletos y casos fuera de alcance."],
    ["Revisión humana y medición","Tu equipo puede revisar borradores, corregir datos o retomar la tarea manualmente. Comparamos tiempo por caso, correcciones y derivaciones."],
  ],
  example: ["De un pedido de presupuesto a un borrador","Si llega un pedido por seis escritorios, el flujo identifica el producto y la cantidad. Si faltan medidas o localidad, deja un borrador que pide esos datos y deriva la consulta a una persona para revisarla."],
  question: ["¿Se puede integrar con WhatsApp, correo o formularios?","Evaluamos el canal que ya usás, los accesos y las integraciones disponibles antes de acordar el alcance del piloto."],
  nextStep: "Contanos qué tarea repetís, en qué herramienta empieza y quién revisa el resultado.",
};

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
