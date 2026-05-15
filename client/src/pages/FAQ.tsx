/*
 * FAQ — /preguntas-frecuentes-limpieza-incendio/
 * v3 "Editorial Cálido" — Playfair Display + Lato, crema/terracota/pizarra
 */

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

const FAQ_SECTIONS = [
  {
    title: "Servicio y respuesta",
    faqs: [
      { q: "¿Cuánto tarda en llegar un equipo tras un incendio?", a: "Nuestro tiempo de respuesta habitual es de 2 a 4 horas en las principales ciudades. Operamos 24 horas al día, 365 días al año, incluyendo festivos y fines de semana. En Madrid y Barcelona, el tiempo de respuesta puede ser inferior a 2 horas." },
      { q: "¿Trabajan los fines de semana y festivos?", a: "Sí. Nuestro servicio de urgencias está disponible 24 horas al día, 365 días al año, incluyendo todos los festivos. Los incendios no tienen horario y nosotros tampoco." },
      { q: "¿Hacen valoraciones gratuitas?", a: "Sí. La valoración inicial es completamente gratuita y sin compromiso. Un técnico visita el inmueble, evalúa los daños y elabora un presupuesto detallado." },
      { q: "¿En qué zonas de España operan?", a: "Operamos en toda España, con equipos propios en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Murcia, Alicante, Valladolid, Toledo, Granada, Córdoba, Bilbao, San Sebastián, Pamplona y Logroño." },
    ],
  },
  {
    title: "El proceso de limpieza",
    faqs: [
      { q: "¿Qué incluye la limpieza por incendio?", a: "La limpieza por incendio incluye: eliminación de hollín y residuos de combustión, tratamiento de superficies afectadas por el humo, desodorización completa del inmueble (tratamiento de ozono y nebulización), retirada de materiales irrecuperables y elaboración del informe pericial para el seguro." },
      { q: "¿Cuánto tiempo dura la limpieza?", a: "Depende del tamaño del inmueble y del nivel de afectación. Una cocina puede limpiarse en 1-2 días; una vivienda completa puede requerir 3-7 días; una nave industrial puede necesitar semanas. Damos un plazo estimado en la valoración gratuita." },
      { q: "¿Podemos seguir viviendo en casa durante la limpieza?", a: "Depende del nivel de afectación. En siniestros parciales (una habitación o cocina), es posible continuar en el inmueble. En siniestros graves, recomendamos alojamiento alternativo por seguridad e higiene." },
      { q: "¿Qué ocurre con los muebles y enseres?", a: "Evaluamos cada pieza. Los muebles recuperables se limpian con técnicas especializadas. Los irrecuperables se retiran con gestión de residuos homologada. Los objetos de valor personal se tratan con especial cuidado." },
    ],
  },
  {
    title: "Técnicas y métodos",
    faqs: [
      { q: "¿Pueden eliminar el olor a humo completamente?", a: "Sí. Utilizamos tratamientos de ozono y nebulización de productos neutralizantes que eliminan el olor a humo de forma definitiva, no solo lo enmascaran. El proceso puede requerir de 24 a 48 horas según la intensidad del siniestro." },
      { q: "¿Qué técnicas usan para el hollín?", a: "Empleamos técnicas de limpieza química especializada, aspiración industrial de alta eficiencia y tratamientos de neutralización. Cada superficie recibe el tratamiento más adecuado según el material y el nivel de afectación." },
      { q: "¿Pueden limpiar inmuebles con daños estructurales?", a: "Sí. Trabajamos en coordinación con empresas de rehabilitación estructural. Nos encargamos de la limpieza y descontaminación mientras los especialistas en obra se ocupan de la parte estructural." },
    ],
  },
  {
    title: "Seguros y cobertura",
    faqs: [
      { q: "¿El seguro del hogar cubre la limpieza por incendio?", a: "En la mayoría de los casos, sí. Las pólizas de hogar suelen cubrir los daños por incendio, incluyendo la limpieza y rehabilitación. Nosotros elaboramos el informe pericial y coordinamos directamente con tu aseguradora." },
      { q: "¿Qué es el informe pericial y por qué es importante?", a: "El informe pericial es un documento técnico que detalla todos los daños causados por el incendio y su valoración económica. Es fundamental para que el seguro cubra el máximo posible. En Limpiezas Fénix lo elaboramos de forma gratuita." },
      { q: "¿Trabajan con todas las aseguradoras?", a: "Sí. Tenemos experiencia con todas las aseguradoras del mercado español. Conocemos sus procedimientos y requisitos, lo que nos permite agilizar el proceso de reclamación." },
      { q: "¿Qué pasa si el seguro no cubre todos los daños?", a: "Si la oferta del seguro es inferior a los daños reales, tienes derecho a impugnarla. Nuestro informe pericial es la herramienta más eficaz para justificar el importe reclamado." },
    ],
  },
  {
    title: "Tipos de inmuebles",
    faqs: [
      { q: "¿Trabajan con todo tipo de inmuebles?", a: "Sí: viviendas, locales comerciales, naves industriales, oficinas, residencias, hospitales, hoteles y cualquier tipo de inmueble. También tratamos vehículos e incendios de garaje." },
      { q: "¿Tienen experiencia con incendios industriales?", a: "Sí. Los incendios industriales requieren protocolos específicos por la presencia de materiales industriales, maquinaria de alto valor y la necesidad de minimizar el tiempo de parada de producción." },
      { q: "¿Pueden limpiar centros sanitarios y residencias?", a: "Sí. Tenemos un protocolo especial para hospitales, residencias y centros de salud que garantiza la mínima interrupción de la actividad y el cumplimiento de todos los requisitos sanitarios." },
      { q: "¿Limpian vehículos afectados por incendio?", a: "Sí. Limpiamos vehículos quemados y garajes afectados por incendio, incluyendo la eliminación de residuos tóxicos y la desodorización completa." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon" style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </button>
      {open && (
        <div className="faq-answer">{a}</div>
      )}
    </div>
  );
}

const allFaqs = FAQ_SECTIONS.flatMap(s => s.faqs);

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="Preguntas Frecuentes sobre Limpieza por Incendio — Limpiezas Fénix"
        description="Respuestas a las preguntas más frecuentes sobre limpieza por incendio: proceso, técnicas, seguros, tipos de inmuebles y tiempos de respuesta."
        canonical="https://limpiezaincendiosfenix.es/preguntas-frecuentes-limpieza-incendio/"
        schema={[schemaFAQ]}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--terra)" }}>Preguntas Frecuentes</span>
          </nav>
          <span className="section-label">Todo lo que necesitas saber</span>
          <h1 className="page-hero-title">Preguntas <em>Frecuentes</em></h1>
          <p className="page-hero-sub">
            Resolvemos todas tus dudas sobre la limpieza por incendio, nuestros servicios y cómo gestionar el seguro.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-white">
        <div className="container">
          <div className="content-sidebar-layout">
            <div>
              {FAQ_SECTIONS.map((section) => (
                <div key={section.title} style={{ marginBottom: "3rem" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", color: "var(--charcoal)", marginBottom: "1.25rem", borderBottom: "2px solid var(--beige)", paddingBottom: "0.5rem" }}>
                    {section.title}
                  </h2>
                  {section.faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <aside>
              <div className="sidebar-card" style={{ marginBottom: "1.5rem" }}>
                <h3>Contacto urgente</h3>
                <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 900, color: "var(--terra)", marginBottom: "0.25rem" }}>24h / 365</div>
                  <p style={{ fontSize: "0.83rem", color: "var(--slate2)", marginBottom: "1rem" }}>Servicio urgente todos los días del año</p>
                  <a href="tel:900XXXXXX" className="btn-terra" style={{ width: "100%", justifyContent: "center", display: "flex" }}>☎ 900 XXX XXX</a>
                  <a href="https://wa.me/34900XXXXXX" target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginTop: "0.6rem", background: "#25D366", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "0.88rem", padding: "0.7rem 1rem", borderRadius: "4px", textDecoration: "none" }}>
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Páginas relacionadas</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <li><Link href="/limpieza-por-incendio/" style={{ color: "var(--terra)", fontSize: "0.9rem", fontFamily: "'Lato', sans-serif", fontWeight: 600 }}>→ Limpieza por Incendio</Link></li>
                  <li><Link href="/blog/" style={{ color: "var(--terra)", fontSize: "0.9rem", fontFamily: "'Lato', sans-serif", fontWeight: 600 }}>→ Blog especializado</Link></li>
                  <li><Link href="/#contacto" style={{ color: "var(--terra)", fontSize: "0.9rem", fontFamily: "'Lato', sans-serif", fontWeight: 600 }}>→ Solicitar presupuesto</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
