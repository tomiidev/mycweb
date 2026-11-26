import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Boxes, CreditCard, Truck } from 'lucide-react';
import '@fontsource-variable/dm-sans';
import styles from '../home.module.css';

const title = 'Creación de tiendas online en Uruguay | Mate y Código';
const description = 'Diseñamos tiendas online para negocios en Uruguay. Armamos el catálogo, carrito, medios de pago y opciones de envío o retiro según cómo vendés.';
const canonical = 'https://mateycodigo.vercel.app/tiendas-online';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, locale: 'es_UY', type: 'website', siteName: 'Mate y Código' },
};

const features = [
  {
    icon: Boxes,
    title: 'Catálogo y stock',
    description: 'Organizamos productos por categorías y armamos fichas con fotos, precios y variantes como talle o color. Definimos cómo vas a actualizar el stock.',
  },
  {
    icon: CreditCard,
    title: 'Carrito y medios de pago',
    description: 'Diseñamos el recorrido desde el carrito hasta la confirmación. Evaluamos los medios de pago según tu operativa y las integraciones disponibles.',
  },
  {
    icon: Truck,
    title: 'Envíos, retiros y pedidos',
    description: 'Definimos las zonas de entrega, los costos y las opciones de retiro. Acordamos cómo se notifica cada compra y cómo la gestionás.',
  },
];

export default function TiendasOnlinePage() {
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
          <p className={styles.kicker}>Ecommerce para negocios</p>
          <h1>Creación de tiendas online <em>en Uruguay</em></h1>
          <p className={styles.intro}>Armamos tu tienda para que tus clientes puedan elegir un producto, pagar y coordinar la entrega desde el celular.</p>
          <div className={styles.actions}>
            <Link className={styles.button} href="/#contacto">Consultá por tu tienda</Link>
          </div>
        </section>

        <section className={styles.services}>
          <div className={styles.wrap}>
            <h2>Qué puede incluir tu tienda</h2>
            <div className={styles.cards}>
              {features.map(({ icon: Icon, title, description }) => (
                <article className={styles.storeCard} key={title}>
                  <Icon size={26} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.wrap} ${styles.process}`}>
          <div>
            <p className={styles.kicker}>Ejemplo ilustrativo</p>
            <h2>De la ficha del producto al pedido</h2>
            <p>En una tienda de ropa, una persona puede elegir talle y color, confirmar si hay stock y decidir si retira la compra o la recibe en su casa.</p>
          </div>
          <ol>
            <li><h3>Definimos el alcance</h3><p>Revisamos qué vendés, cuántos productos querés publicar y cómo cobrás y entregás hoy.</p></li>
            <li><h3>Probamos una compra completa</h3><p>Revisamos el carrito, el pago, la opción de entrega y la confirmación del pedido desde el celular.</p></li>
            <li><h3>Publicamos y te mostramos cómo usarla</h3><p>Te dejamos una guía para actualizar productos y gestionar los pedidos según la configuración acordada.</p></li>
          </ol>
        </section>

        <section className={styles.contact}>
          <div className={styles.wrap}>
            <div>
              <h2>¿Qué querés vender online?</h2>
              <p>Contanos qué productos ofrecés, si ya tenés catálogo y cómo preferís cobrar y entregar. Con eso podemos definir el alcance y preparar un presupuesto.</p>
            </div>
            <div className={styles.actions}>
              <Link className={styles.button} href="/#contacto">Contanos tu idea</Link>
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
