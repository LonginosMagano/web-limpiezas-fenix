/*
 * FAQ — /preguntas-frecuentes-limpieza-incendio/
 * Página completa de preguntas frecuentes con Schema FAQPage
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
      { q: "¿En qué zonas de España operan?", a: "Operamos en toda España, con equipos propios en Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Murcia, Alicante, Valladolid, Toledo, Granada, Córdoba, Bilbao, San Sebastián, Pamplona y Logroño. Para otras zonas, nos desplazamos desde el equipo más cercano." },
    ],
  },
  {
    title: "El proceso de limpieza",
    faqs: [
      { q: "¿Qué incluye la limpieza por incendio?", a: "La limpieza por incendio incluye: eliminación de hollín y residuos de combustión, tratamiento de superficies afectadas por el humo, desodorización completa del inmueble (tratamiento de ozono y nebulización), retirada de materiales irrecuperables y elaboración del informe pericial para el seguro." },
      { q: "¿Cuánto tiempo dura la limpieza?", a: "Depende del tamaño del inmueble y del nivel de afectación. Una cocina puede limpiarse en 1-2 días; una vivienda completa puede requerir 3-7 días; una nave industrial puede necesitar semanas. Damos un plazo estimado en la valoración gratuita." },
      { q: "¿Podemos seguir viviendo en casa durante la limpieza?", a: "Depende del nivel de afectación. En siniestros parciales (una habitación o cocina), es posible continuar en el inmueble. En siniestros graves, recomendamos alojamiento alternativo por seguridad e higiene. Lo evaluamos en la visita gratuita." },
      { q: "¿Pueden limpiar inmuebles con daños estructurales?", a: "Sí. Trabajamos en coordinación con empresas de rehabilitación estructural. Nos encargamos de la limpieza y descontaminación mientras los especialistas en obra se ocupan de la parte estructural." },
      { q: "¿Qué ocurre con los muebles y enseres?", a: "Evaluamos cada pieza. Los muebles recuperables se limpian con técnicas especializadas. Los irrecuperables se retiran con gestión de residuos homologada. Los objetos de valor personal se tratan con especial cuidado." },
    ],
  },
  {
    title: "Tecnologías y métodos",
    faqs: [
      { q: "¿Qué es la limpieza láser y para qué se usa?", a: "La limpieza láser utiliza pulsos de luz de alta energía para vaporizar el hollín y los residuos de combustión sin dañar la superficie subyacente. Es ideal para piedra, ladrillo, madera, metal y elementos de patrimonio histórico donde los métodos químicos podrían causar daños." },
      { q: "¿Qué ventajas tiene la limpieza con hielo seco?", a: "El hielo seco (CO₂ en pellets) impacta sobre la superficie y se sublima al instante, sin dejar residuos ni humedad. Es el método ideal para maquinaria industrial, cuadros eléctricos y equipos que no pueden mojarse ni desmontarse." },
      { q: "¿Pueden eliminar el olor a humo completamente?", a: "Sí. Utilizamos tratamientos de ozono y nebulización de productos neutralizantes que eliminan el olor a humo de forma definitiva, no solo lo enmascaran. El proceso puede requerir de 24 a 48 horas según la intensidad del siniestro." },
      { q: "¿Qué método es mejor para edificios históricos?", a: "Para edificios históricos y patrimonio cultural, la limpieza láser es el método preferido. Permite eliminar el hollín con precisión milimétrica sin dañar los materiales originales. Hemos trabajado en numerosos edificios catalogados y elementos de valor artístico." },
    ],
  },
  {
    title: "Seguros y cobertura",
    faqs: [
      { q: "¿El seguro del hogar cubre la limpieza por incendio?", a: "En la mayoría de los casos, sí. Las pólizas de hogar suelen cubrir los daños por incendio, incluyendo la limpieza y rehabilitación. Nosotros elaboramos el informe pericial y coordinamos directamente con tu aseguradora para agilizar el proceso." },
      { q: "¿Qué es el informe pericial y por qué es importante?", a: "El informe pericial es un documento técnico que detalla todos los daños causados por el incendio y su valoración económica. Es fundamental para que el seguro cubra el máximo posible y para evitar discrepancias con la aseguradora. En Limpiezas Fénix lo elaboramos de forma gratuita." },
      { q: "¿Trabajan con todas las aseguradoras?", a: "Sí. Tenemos experiencia con todas las aseguradoras del mercado español. Conocemos sus procedimientos y requisitos, lo que nos permite agilizar el proceso de reclamación." },
      { q: "¿Qué pasa si el seguro no cubre todos los daños?", a: "Si la oferta del seguro es inferior a los daños reales, tienes derecho a impugnarla. Nuestro informe pericial es la herramienta más eficaz para justificar el importe reclamado. Si es necesario, te asesoramos en el proceso de reclamación." },
    ],
  },
  {
    title: "Tipos de inmuebles",
    faqs: [
      { q: "¿Trabajan con todo tipo de inmuebles?", a: "Sí: viviendas, locales comerciales, naves industriales, oficinas, residencias, hospitales, hoteles y cualquier tipo de inmueble. También tratamos vehículos e incendios de garaje." },
      { q: "¿Tienen experiencia con incendios industriales?", a: "Sí. Los incendios industriales requieren protocolos específicos por la presencia de materiales industriales, maquinaria de alto valor y la necesidad de minimizar el tiempo de parada de producción. Contamos con equipos especializados y experiencia en todo tipo de instalaciones industriales." },
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
        <span style={{ color: "var(--fire)", fontSize: "1.2rem", flexShrink: 0, transition: "transform 250ms", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </button>
      <div className={`faq-answer${open ? " open" : ""}`}>
        <div className="faq-answer-inner">{a}</div>
      </div>
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
        description="Respuestas a las preguntas más frecuentes sobre limpieza por incendio: proceso, tecnologías, seguros, tipos de inmuebles y tiempos de respuesta."
        canonical="https://limpiezaincendiosfenix.es/preguntas-frecuentes-limpieza-incendio/"
        schema={[schemaFAQ]}
      />

      <section style={{ background: "var(--ash)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>Preguntas Frecuentes</span>
          </nav>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
            Preguntas <span style={{ color: "var(--fire)" }}>Frecuentes</span>
          </h1>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", maxWidth: "600px" }}>
            Todo lo que necesitas saber sobre la limpieza por incendio, nuestros servicios y cómo gestionar el seguro.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0", background: "var(--coal)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "3rem", alignItems: "start" }}>
            <div>
              {FAQ_SECTIONS.map((section) => (
                <div key={section.title} style={{ marginBottom: "3rem" }}>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "var(--fire)", marginBottom: "1.25rem", letterSpacing: "0.03em" }}>
                    {section.title}
                  </h2>
                  {section.faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: "90px" }}>
              <div style={{ background: "rgba(255,69,0,0.08)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.5rem", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "var(--fire)", marginBottom: "0.5rem" }}>24h / 365</div>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem", marginBottom: "1rem" }}>Servicio urgente disponible todos los días del año</p>
                <a href="tel:900XXXXXX" className="btn-fire" style={{ width: "100%", justifyContent: "center", marginBottom: "0.5rem" }}>
                  ☎ 900 XXX XXX
                </a>
                <a href="https://wa.me/34900XXXXXX" className="btn-wa" style={{ width: "100%", justifyContent: "center" }} target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </div>
              <div style={{ background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "0.5rem", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "var(--light)", marginBottom: "1rem" }}>
                  Páginas relacionadas
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><Link href="/limpieza-por-incendio/" style={{ color: "var(--ember)", fontSize: "0.9rem" }}>→ Limpieza por Incendio</Link></li>
                  <li><Link href="/limpieza-laser/" style={{ color: "var(--ember)", fontSize: "0.9rem" }}>→ Limpieza Láser</Link></li>
                  <li><Link href="/limpieza-hielo-seco/" style={{ color: "var(--ember)", fontSize: "0.9rem" }}>→ Limpieza Hielo Seco</Link></li>
                  <li><Link href="/blog/" style={{ color: "var(--ember)", fontSize: "0.9rem" }}>→ Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
