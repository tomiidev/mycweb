import { AudioLines, Globe2, MessageCircle, Search, Workflow } from 'lucide-react';
import Image from 'next/image';
import { brand } from '@/lib/config';
import { getEmailConfig } from '@/lib/email';
import ContactForm from './ContactForm';
import styles from './home.module.css';

export const dynamic = 'force-dynamic';

const services = [
  {
    name: 'Visibilidad en IA', tag: 'Piloto GEO', icon: Search,
    description: 'Revisamos cómo están descritos tus servicios, tu zona de atención y tus datos de contacto para que los buscadores con IA puedan entender mejor tu negocio.',
    detail: 'Diagnóstico, mejoras priorizadas y consultas de prueba para comparar observaciones.',
  },
  {
    name: 'Automatización con IA', tag: 'Piloto', icon: Workflow,
    description: 'Elegimos una tarea que te ocupa tiempo, como organizar consultas o registrar reservas, y probamos un flujo con las herramientas que ya usás.',
    detail: 'Pruebas con casos habituales, derivación a una persona y una guía para medir el tiempo ahorrado.',
  },
  {
    name: 'Estrategia de contenido', tag: 'Complemento', icon: AudioLines,
    description: 'Convertimos las preguntas de tus clientes en ideas que tu equipo pueda llevar a posts, carruseles y videos.',
    detail: 'Pilares de contenido, calendario inicial y ejemplos de textos o guiones.',
  },
];

export default function Page() {
  const contact = getEmailConfig();

  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#contenido">Saltar al contenido</a>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <a className={styles.brand} href="#" aria-label="Mate y Código, inicio">
            <Image src="/mate-y-codigo-logo.png" alt="" width={42} height={42} unoptimized />
            Mate y Código
          </a>
          <nav aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Cómo trabajamos</a>
            <a className={styles.outline} href="#contacto">Hablemos</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className={`${styles.wrap} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Desarrollo web e IA · Uruguay</p>
            <h1>Tu negocio, <em>mejor conectado.</em></h1>
            <p className={styles.intro}>Creamos webs que convierten visitas en consultas y usamos IA para mejorar tu visibilidad y simplificar tareas repetitivas.</p>
            <div className={styles.actions}>
              <a className={styles.button} href="#contacto">Contanos tu idea</a>
              <a className={styles.secondary} href="#servicios">Ver servicios</a>
            </div>
          </div>
          <figure className={styles.cover}>
            <Image src="/mate-y-codigo-hero.webp" alt="Mate con bombilla junto a una laptop con código" fill sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1296px) 55vw, 660px" preload />
          </figure>
        </section>

        <section id="servicios" className={styles.services}>
          <div className={styles.wrap}>
            <p className={styles.kicker}>Servicios</p>
            <h2>¿Qué necesita tu negocio?</h2>
            <article className={styles.feature}>
              <div>
                <Globe2 size={30} strokeWidth={1.5} aria-hidden="true" />
                <h3>Desarrollo web</h3>
                <p>Diseñamos y desarrollamos landings, webs comerciales y catálogos adaptados a celulares. Definimos qué querés que haga un cliente al entrar y le damos un camino claro para hacerlo.</p>
              </div>
              <ul>
                <li>Estructura y diseño según tu objetivo</li>
                <li>Formulario o integración con WhatsApp</li>
                <li>Publicación, pruebas y guía de uso</li>
              </ul>
            </article>
            <div className={styles.cards}>
              {services.map(({ name, tag, icon: Icon, description, detail }) => (
                <article key={name}>
                  <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  <p className={styles.kicker}>{tag}</p>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
            <div className={styles.evaluation}>
              <h3>ChatGPT Ads <span>En evaluación</span></h3>
              <p>Estamos evaluando la viabilidad de incorporar este canal de publicidad paga para negocios en Uruguay.</p>
            </div>
          </div>
        </section>

        <section id="proceso" className={`${styles.wrap} ${styles.process}`}>
          <div>
            <p className={styles.kicker}>Cómo trabajamos</p>
            <h2>Empezamos por un objetivo concreto.</h2>
            <p>Trabajás directamente con Tomás Ruglio, desarrollador full-stack en Uruguay.</p>
          </div>
          <ol>
            <li><h3>Entendemos tu situación</h3><p>Vemos qué querés mejorar, qué herramientas usás y con qué contenido contás.</p></li>
            <li><h3>Acordamos el alcance</h3><p>Definimos los entregables y cómo vamos a probar la web o el piloto.</p></li>
            <li><h3>Probamos y entregamos</h3><p>Revisamos el resultado contigo y te dejamos una guía para usarlo.</p></li>
          </ol>
        </section>

        <section id="contacto" className={styles.contact}>
          <div className={styles.wrap}>
            <div>
              <p className={styles.kicker}>Contacto</p>
              <h2>¿Qué te gustaría resolver?</h2>
              {!brand.whatsapp && (
                <p id="contacto-whatsapp" className={styles.whatsappNotice}>
                  WhatsApp todavía no está disponible. Podés escribirnos por los canales de esta sección.
                </p>
              )}
              <p>Contanos a qué se dedica tu negocio y qué querés mejorar. A partir de eso vemos por dónde empezar.</p>
              {contact.to && <p><a href={`mailto:${contact.to}`}>{contact.to}</a></p>}
              {brand.whatsapp && <p><a target='_blank' href={brand.whatsapp}>Escribinos por WhatsApp</a></p>}
              {brand.booking && <p><a href={brand.booking}>Agendá una conversación</a></p>}
            </div>
            <ContactForm enabled={contact.enabled} />
          </div>
        </section>
      </main>

      <footer className={`${styles.wrap} ${styles.footer}`}>
        <a className={styles.brand} href="#">
          <Image src="/mate-y-codigo-logo.png" alt="" width={42} height={42} unoptimized />
          Mate y Código
        </a>
        <p>Desarrollo web e IA desde Uruguay</p>
      </footer>
      <a className={styles.whatsapp} href={brand.whatsapp || '#contacto-whatsapp'}
        aria-label={brand.whatsapp ? 'Escribinos por WhatsApp' : 'WhatsApp y opciones de contacto'}>
        <MessageCircle size={25} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
