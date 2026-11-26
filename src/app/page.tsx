import { AudioLines, Download, Globe2, MessageCircle, Search, Workflow } from 'lucide-react';
import Image from 'next/image';
import { brand } from '@/lib/config';
import { getEmailConfig } from '@/lib/email';
import ContactForm from './ContactForm';
import '@fontsource-variable/dm-sans';
import styles from './home.module.css';

export const dynamic = 'force-dynamic';

const services = [
  {
    name: 'Visibilidad en IA', tag: 'Piloto GEO', icon: Search,
    proposalId: '1pMuAM6yg0U6lnNcPvwykaceju3qB8veP',
    description: 'Revisamos cómo están descritos tus servicios, tu zona de atención y tus datos de contacto para que los buscadores con IA puedan entender mejor tu negocio.',
    detail: 'Diagnóstico, mejoras priorizadas y consultas de prueba para comparar observaciones.',
  },
  {
    name: 'Automatización con IA', tag: 'Piloto', icon: Workflow,
    proposalId: '1qBARTUtzawIrJ4dcZcXSb2ejj8gzenYa',
    description: 'Elegimos una tarea que te ocupa tiempo, como organizar consultas o registrar reservas, y probamos un flujo con las herramientas que ya usás.',
    detail: 'Pruebas con casos habituales, derivación a una persona y una guía para medir el tiempo ahorrado.',
  },
  {
    name: 'Estrategia de contenido', tag: 'Complemento', icon: AudioLines,
    proposalId: '1B0Ihg0FvuVGc9Ln292yvxEsi-rSysjqQ',
    description: 'Convertimos las preguntas de tus clientes en ideas que tu equipo pueda llevar a posts, carruseles y videos.',
    detail: 'Pilares de contenido, calendario inicial y ejemplos de textos o guiones.',
  },
];

function ProposalDownload({ service, fileId }: { service: string; fileId: string }) {
  return (
    <a
      className={styles.proposalDownload}
      href={`https://drive.google.com/uc?export=download&id=${fileId}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Descargar propuesta de ${service} (PDF, abre en una pestaña nueva)`}
    >
      <Download size={17} aria-hidden="true" />
      Descargar propuesta
    </a>
  );
}

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
                <ProposalDownload service="Desarrollo web" fileId="1tDHdT2FqgS6wmepX41LjEPW37Xz-Mb5z" />
              </div>
              <ul>
                <li>Estructura y diseño según tu objetivo</li>
                <li>Formulario o integración con WhatsApp</li>
                <li>Publicación, pruebas y guía de uso</li>
              </ul>
            </article>
            <div className={styles.cards}>
              {services.map(({ name, tag, icon: Icon, description, detail, proposalId }) => (
                <article key={name}>
                  <Icon size={26} strokeWidth={1.5} aria-hidden="true" />
                  <p className={styles.kicker}>{tag}</p>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p className={styles.serviceDetail}>{detail}</p>
                  <ProposalDownload service={name} fileId={proposalId} />
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
              <p>Contanos a qué se dedica tu negocio y qué querés mejorar. A partir de eso vemos por dónde empezar.</p>
              {brand.booking && <p><a href={brand.booking}>Agendá una conversación</a></p>}
            </div>
            <ContactForm enabled={contact.enabled} />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.footerGrid}>
            <div className={styles.footerIntro}>
              <a className={styles.brand} href="#" aria-label="Mate y Código, inicio">
                <Image src="/mate-y-codigo-logo.png" alt="" width={42} height={42} unoptimized />
                Mate y Código
              </a>
              <p>Desarrollo web, automatización y visibilidad en IA para negocios.</p>
            </div>
            <nav className={styles.footerGroup} aria-labelledby="footer-navigation">
              <h2 id="footer-navigation">Explorá el sitio</h2>
              <ul>
                <li><a href="#servicios">Servicios y propuestas</a></li>
                <li><a href="#proceso">Cómo trabajamos</a></li>
              </ul>
            </nav>
            <div className={styles.footerGroup}>
              <h2>Contacto</h2>
              <ul>
                {contact.to && <li><a href={`mailto:${contact.to}`}>{contact.to}</a></li>}
                {brand.whatsapp && (
                  <li><a href={brand.whatsapp} target="_blank" rel="noopener noreferrer">Escribinos por WhatsApp</a></li>
                )}
                <li><a href="#contacto">Formulario de contacto</a></li>
              </ul>
            </div>
          </div>
          <p className={styles.footerCredit}>Tomás Ruglio <span aria-hidden="true">·</span> Desarrollador full-stack en Uruguay</p>
        </div>
      </footer>
      <a className={styles.whatsapp} href={brand.whatsapp || '#contacto'}
        aria-label={brand.whatsapp ? 'Escribinos por WhatsApp' : 'WhatsApp y opciones de contacto'}>
        <MessageCircle size={25} aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
