import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';
import '@fontsource-variable/dm-sans';
import styles from './home.module.css';

export type ServiceDetails = {
  path: string;
  heading: string;
  kicker: string;
  description: string;
  proposalId: string;
  features: [string, string][];
  example: [string, string];
  question: [string, string];
  nextStep: string;
};

export function serviceMetadata(service: ServiceDetails): Metadata {
  const title = `${service.heading} | Mate y Código`;
  const description = service.description;
  const canonical = `https://mateycodigo.vercel.app${service.path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, locale: 'es_UY', type: 'website', siteName: 'Mate y Código' },
  };
}

export default function ServicePage({ service }: { service: ServiceDetails }) {
  return (
    <div className={styles.site}>
      <a className={styles.skip} href="#contenido">Saltar al contenido</a>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <Link className={styles.brand} href="/" aria-label="Mate y Código, inicio">
            <Image src="/mate-y-codigo-logo.png" alt="" width={42} height={42} unoptimized />
            Mate y Código
          </Link>
          <nav aria-label="Navegación principal">
            <Link href="/#servicios">Servicios</Link>
            <Link className={styles.outline} href="/#contacto">Hablemos</Link>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className={`${styles.wrap} ${styles.storeHero}`}>
          <p className={styles.kicker}>{service.kicker}</p>
          <h1>{service.heading}</h1>
          <p className={styles.intro}>{service.description}</p>
          <div className={styles.actions}>
            <Link className={styles.button} href="/#contacto">Consultá por el servicio</Link>
            <a
              className={styles.secondary}
              href={`https://drive.google.com/uc?export=download&id=${service.proposalId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={17} aria-hidden="true" /> Descargar propuesta (PDF)
            </a>
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.wrap}>
            <h2>Qué incluye el servicio</h2>
            <div className={styles.cards}>
              {service.features.map(([title, description]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className={`${styles.wrap} ${styles.process}`}>
          <section>
            <p className={styles.kicker}>Ejemplo ilustrativo</p>
            <h2>{service.example[0]}</h2>
            <p>{service.example[1]}</p>
          </section>
          <section>
            <p className={styles.kicker}>Preguntas frecuentes</p>
            <h2>{service.question[0]}</h2>
            <p>{service.question[1]}</p>
          </section>
        </div>

        <section className={styles.contact}>
          <div className={styles.wrap}>
            <div>
              <h2>Qué necesitamos para empezar</h2>
              <p>{service.nextStep}</p>
            </div>
            <div className={styles.actions}>
              <Link className={styles.button} href="/#contacto">Contanos tu caso</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <Link className={styles.brand} href="/">Mate y Código</Link>
          <p className={styles.footerCredit}>Tomás Ruglio <span aria-hidden="true">·</span> Desarrollador full-stack en Uruguay</p>
        </div>
      </footer>
    </div>
  );
}
