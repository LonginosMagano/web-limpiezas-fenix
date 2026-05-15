/*
 * ServicioMadre — /limpieza-por-incendio/
 * Página madre del servicio principal con SEO completo
 * v3 "Editorial Cálido" — Playfair Display + Lato, crema/terracota/pizarra
 */

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";

const ALL_CITIES = [
  { href: "/limpieza-por-incendio-madrid/", label: "Madrid" },
  { href: "/limpieza-por-incendio-barcelona/", label: "Barcelona" },
  { href: "/limpieza-por-incendio-valencia/", label: "Valencia" },
  { href: "/limpieza-por-incendio-sevilla/", label: "Sevilla" },
  { href: "/limpieza-por-incendio-malaga/", label: "Málaga" },
  { href: "/limpieza-por-incendio-zaragoza/", label: "Zaragoza" },
  { href: "/limpieza-por-incendio-murcia/", label: "Murcia" },
  { href: "/limpieza-por-incendio-alicante/", label: "Alicante" },
  { href: "/limpieza-por-incendio-valladolid/", label: "Valladolid" },
  { href: "/limpieza-por-incendio-toledo/", label: "Toledo" },
  { href: "/limpieza-por-incendio-granada/", label: "Granada" },
  { href: "/limpieza-por-incendio-cordoba/", label: "Córdoba" },
  { href: "/limpieza-por-incendio-bilbao/", label: "Bilbao" },
  { href: "/limpieza-por-incendio-san-sebastian/", label: "San Sebastián" },
  { href: "/limpieza-por-incendio-pamplona/", label: "Pamplona" },
  { href: "/limpieza-por-incendio-logrono/", label: "Logroño" },
];

const FAQS_MADRE = [
  { q: "¿Qué incluye la limpieza por incendio?", a: "La limpieza por incendio incluye la eliminación de hollín y residuos de combustión, el tratamiento de superficies afectadas por el humo, la desodorización completa del inmueble y, si es necesario, la retirada de materiales irrecuperables. También elaboramos el informe pericial para el seguro." },
  { q: "¿Cuánto tiempo dura la limpieza?", a: "Depende del tamaño del inmueble y del nivel de afectación. Una cocina puede limpiarse en 1-2 días; una vivienda completa puede requerir 3-7 días; una nave industrial puede necesitar semanas. Damos un plazo estimado en la valoración gratuita." },
  { q: "¿Pueden limpiar inmuebles con daños estructurales?", a: "Sí. Trabajamos en coordinación con empresas de rehabilitación estructural. Nos encargamos de la limpieza y descontaminación mientras los especialistas en obra se ocupan de la parte estructural." },
  { q: "¿Qué ocurre con los muebles y enseres?", a: "Evaluamos cada pieza. Los muebles recuperables se limpian con técnicas especializadas. Los irrecuperables se retiran con gestión de residuos homologada. Los objetos de valor personal se tratan con especial cuidado." },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Limpieza por Incendio",
  provider: { "@type": "LocalBusiness", name: "Limpiezas Fénix" },
  description: "Servicio especializado de limpieza y rehabilitación de inmuebles afectados por incendio en España. Hollín, humo, olores. Urgente 24h.",
  areaServed: "España",
  url: "https://limpiezaincendiosfenix.es/limpieza-por-incendio/",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS_MADRE.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://limpiezaincendiosfenix.es/" },
    { "@type": "ListItem", position: 2, name: "Limpieza por Incendio", item: "https://limpiezaincendiosfenix.es/limpieza-por-incendio/" },
  ],
};

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon" style={{ transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

export default function ServicioMadre() {
  return (
    <>
      <SEOHead
        title="Limpieza por Incendio en España | Urgente 24h — Limpiezas Fénix"
        description="Servicio especializado de limpieza por incendio en España. Hollín, humo, olores. Urgente 24h/365. Valoración gratuita. Tu seguro puede cubrir el 100%. ☎ 900 XXX XXX"
        canonical="https://limpiezaincendiosfenix.es/limpieza-por-incendio/"
        schema={[schemaService, schemaFAQ, schemaBreadcrumb]}
      />

      {/* Hero de página */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--terra)" }}>Limpieza por Incendio</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "3rem", alignItems: "start" }}>
            <div>
              <span className="section-label">Servicio principal</span>
              <h1 className="page-hero-title">
                Limpieza por <em>Incendio</em><br />en España
              </h1>
              <p className="page-hero-sub">
                Recuperamos tu hogar, local o nave industrial tras un incendio. Eliminamos hollín, humo y olores. Gestionamos tu seguro y te acompañamos en todo el proceso.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                <a href="tel:900XXXXXX" className="btn-terra">☎ Llamar ahora</a>
                <a href="https://wa.me/34900XXXXXX" className="btn-outline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            </div>
            <div style={{ background: "var(--white)", border: "1.5px solid var(--beige)", borderRadius: "8px", padding: "1.75rem" }}>
              <ContactForm title="Valoración gratuita" subtitle="Sin compromiso · Respuesta en 24h" />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section className="section-white">
        <div className="container">
          <div className="content-sidebar-layout">
            {/* Contenido */}
            <div className="prose-fenix">
              <h2>¿Qué es la limpieza por incendio?</h2>
              <p>
                La limpieza por incendio es un proceso especializado que va mucho más allá de una limpieza convencional. Cuando un inmueble sufre un incendio, los residuos de combustión —hollín, humo, gases tóxicos y partículas en suspensión— se depositan en todas las superficies y penetran en los materiales porosos. Sin un tratamiento adecuado, estos residuos continúan deteriorando el inmueble durante semanas o meses.
              </p>
              <p>
                En Limpiezas Fénix aplicamos un protocolo de intervención en tres fases: diagnóstico técnico, limpieza especializada y desodorización. Cada fase utiliza los productos y la tecnología más adecuados para el tipo de superficie y el nivel de afectación, garantizando resultados duraderos.
              </p>

              <h2>Tipos de siniestros que tratamos</h2>
              <ul>
                {[
                  "Incendios de cocina (el más frecuente en viviendas)",
                  "Incendios eléctricos (cortocircuitos, sobrecalentamiento)",
                  "Incendios de garaje y vehículos",
                  "Incendios en locales comerciales y oficinas",
                  "Incendios industriales en naves y almacenes",
                  "Incendios en residencias, hoteles y hospitales",
                  "Incendios forestales con afectación a inmuebles",
                ].map((item) => <li key={item}>{item}</li>)}
              </ul>

              <h2>Nuestro proceso de trabajo</h2>
              <p>
                Cuando nos llamas, enviamos un equipo de valoración en el menor tiempo posible. Evaluamos los daños, elaboramos un informe técnico y te presentamos un presupuesto detallado. Si tienes seguro, coordinamos directamente con la aseguradora para que el proceso sea lo más sencillo posible para ti.
              </p>
              <p>
                La intervención comienza con la protección de las zonas no afectadas, seguida de la limpieza mecánica de residuos sólidos, el tratamiento químico de superficies y la desodorización con ozono o nebulización según el caso. Finalizamos con una inspección de calidad y entregamos un certificado de limpieza.
              </p>

              <h2>Preguntas frecuentes</h2>
              {FAQS_MADRE.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sidebar-card" style={{ marginBottom: "1.5rem" }}>
                <h3>Contacto urgente</h3>
                <div style={{ textAlign: "center", padding: "0.5rem 0 1rem" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, color: "var(--terra)", marginBottom: "0.25rem" }}>24h / 365</div>
                  <p style={{ fontSize: "0.85rem", color: "var(--slate2)", marginBottom: "1.25rem" }}>Servicio urgente todos los días del año</p>
                  <a href="tel:900XXXXXX" className="btn-terra" style={{ width: "100%", justifyContent: "center" }}>☎ 900 XXX XXX</a>
                </div>
              </div>
              <div className="sidebar-card">
                <h3>Más información</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <li><Link href="/preguntas-frecuentes-limpieza-incendio/" className="service-link">→ Preguntas Frecuentes</Link></li>
                  <li><Link href="/blog/" className="service-link">→ Blog</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de ciudades */}
      <section className="section-cream2">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Cobertura nacional</span>
            <h2 className="section-title">Limpieza por incendio por <em>ciudad</em></h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>Selecciona tu ciudad para ver información específica</p>
          </div>
          <div className="cities-grid">
            {ALL_CITIES.map(({ href, label }) => (
              <Link key={href} href={href} className="city-chip">{label}</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
