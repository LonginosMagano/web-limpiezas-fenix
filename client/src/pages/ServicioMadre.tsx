/*
 * ServicioMadre — /limpieza-por-incendio/
 * Página madre del servicio principal con SEO completo, módulo distintivo y landings locales
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
        <span style={{ color: "var(--fire)", fontSize: "1.2rem", flexShrink: 0, transition: "transform 250ms", transform: open ? "rotate(45deg)" : "rotate(0)" }}>+</span>
      </button>
      <div className={`faq-answer${open ? " open" : ""}`}>
        <div className="faq-answer-inner">{a}</div>
      </div>
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

      {/* Hero */}
      <section style={{ background: "var(--ash)", padding: "4rem 0 3rem", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>Limpieza por Incendio</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem", alignItems: "start" }}>
            <div>
              <span className="badge-fire" style={{ marginBottom: "1rem", display: "inline-flex" }}>Servicio principal</span>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.8rem, 5vw, 4.5rem)", color: "var(--light)", marginBottom: "1.25rem" }}>
                Limpieza por<br />
                <span style={{ color: "var(--fire)" }}>Incendio</span> en España
              </h1>
              <p style={{ fontSize: "1.1rem", color: "var(--gray)", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: "580px" }}>
                Recuperamos tu hogar, local o nave industrial tras un incendio. Eliminamos hollín, humo y olores con tecnología especializada. Gestionamos tu seguro y te acompañamos en todo el proceso.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:900XXXXXX" className="btn-fire">☎ Llamar ahora</a>
                <a href="https://wa.me/34900XXXXXX" className="btn-wa" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            </div>
            <div style={{ background: "var(--ash2)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.75rem", padding: "2rem" }}>
              <ContactForm title="Valoración gratuita" subtitle="Sin compromiso · Respuesta en 24h" />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <section style={{ padding: "4rem 0", background: "var(--coal)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1rem" }}>
                ¿Qué es la limpieza por incendio?
              </h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                La limpieza por incendio es un proceso especializado que va mucho más allá de una limpieza convencional. Cuando un inmueble sufre un incendio, los residuos de combustión —hollín, humo, gases tóxicos y partículas en suspensión— se depositan en todas las superficies y penetran en los materiales porosos. Sin un tratamiento adecuado, estos residuos continúan deteriorando el inmueble durante semanas o meses.
              </p>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                En Limpiezas Fénix aplicamos un protocolo de intervención en tres fases: diagnóstico técnico, limpieza especializada y desodorización. Cada fase utiliza los productos y la tecnología más adecuados para el tipo de superficie y el nivel de afectación, garantizando resultados duraderos.
              </p>

              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1rem", marginTop: "2rem" }}>
                Tipos de siniestros que tratamos
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  "Incendios de cocina (el más frecuente en viviendas)",
                  "Incendios eléctricos (cortocircuitos, sobrecalentamiento)",
                  "Incendios de garaje y vehículos",
                  "Incendios en locales comerciales y oficinas",
                  "Incendios industriales en naves y almacenes",
                  "Incendios en residencias, hoteles y hospitales",
                  "Incendios forestales con afectación a inmuebles",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.6rem", color: "var(--gray)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--fire)", flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1rem", marginTop: "2rem" }}>
                Preguntas frecuentes
              </h2>
              {FAQS_MADRE.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

            {/* Sidebar */}
            <div className="aside-sticky" style={{ position: "sticky", top: "90px" }}>
              <div style={{ background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "0.5rem", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "var(--light)", marginBottom: "1rem" }}>
                  Servicios relacionados
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><Link href="/limpieza-laser/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Limpieza Láser</Link></li>
                  <li><Link href="/limpieza-hielo-seco/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Limpieza Hielo Seco</Link></li>
                  <li><Link href="/preguntas-frecuentes-limpieza-incendio/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Preguntas Frecuentes</Link></li>
                  <li><Link href="/blog/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Blog</Link></li>
                </ul>
              </div>
              <div style={{ background: "rgba(255,69,0,0.08)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.5rem", padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "var(--fire)", marginBottom: "0.5rem" }}>24h / 365</div>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem", marginBottom: "1rem" }}>Servicio urgente disponible todos los días del año</p>
                <a href="tel:900XXXXXX" className="btn-fire" style={{ width: "100%", justifyContent: "center" }}>
                  ☎ 900 XXX XXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de ciudades */}
      <section style={{ padding: "4rem 0", background: "var(--ash)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "0.5rem" }}>
            Limpieza por incendio por <span style={{ color: "var(--fire)" }}>ciudad</span>
          </h2>
          <p style={{ color: "var(--gray)", marginBottom: "2rem" }}>Selecciona tu ciudad para ver información específica</p>
          <div className="provinces-grid">
            {ALL_CITIES.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  display: "block",
                  background: "var(--ash2)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "0.375rem",
                  padding: "0.85rem 1rem",
                  color: "var(--light)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "border-color 160ms, color 160ms, background 160ms",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(255,69,0,0.4)";
                  el.style.color = "var(--ember)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border-subtle)";
                  el.style.color = "var(--light)";
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
