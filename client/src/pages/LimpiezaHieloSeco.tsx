/*
 * LimpiezaHieloSeco — /limpieza-hielo-seco/
 * Página de servicio especial de limpieza con hielo seco (CO₂)
 */

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";

const FAQS = [
  { q: "¿Qué es la limpieza con hielo seco?", a: "La limpieza con hielo seco utiliza pellets de CO₂ a -78°C que se proyectan a alta velocidad sobre la superficie. Al impactar, el hielo seco se sublima (pasa directamente de sólido a gas) sin dejar residuos líquidos ni sólidos, llevándose consigo la suciedad." },
  { q: "¿Es seguro para maquinaria y equipos eléctricos?", a: "Sí. Al no generar humedad ni residuos, es el método más seguro para limpiar maquinaria industrial, cuadros eléctricos, motores y equipos electrónicos que no pueden mojarse ni desmontarse." },
  { q: "¿Puede usarse mientras la maquinaria está en funcionamiento?", a: "En muchos casos sí, aunque depende del tipo de equipo y el nivel de afectación. Lo evaluamos en la visita técnica previa. Esto permite minimizar el tiempo de parada de producción." },
  { q: "¿Qué superficies admite este método?", a: "Metal, plástico, goma, madera, hormigón, ladrillo y la mayoría de materiales industriales. No es adecuado para materiales muy frágiles o sensibles a cambios bruscos de temperatura." },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Limpieza con Hielo Seco por Incendio",
  provider: { "@type": "LocalBusiness", name: "Limpiezas Fénix" },
  description: "Limpieza con hielo seco (CO₂) para maquinaria industrial, cuadros eléctricos y equipos afectados por incendio. Sin agua, sin residuos.",
  url: "https://limpiezaincendiosfenix.es/limpieza-hielo-seco/",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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

export default function LimpiezaHieloSeco() {
  return (
    <>
      <SEOHead
        title="Limpieza con Hielo Seco por Incendio | Maquinaria Industrial — Limpiezas Fénix"
        description="Limpieza con hielo seco (CO₂) para maquinaria industrial y equipos afectados por incendio. Sin agua, sin residuos. Ideal para cuadros eléctricos y producción. ☎ 900 XXX XXX"
        canonical="https://limpiezaincendiosfenix.es/limpieza-hielo-seco/"
        schema={[schemaService, schemaFAQ]}
      />

      <section style={{ background: "var(--ash)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/limpieza-por-incendio/">Limpieza por Incendio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>Limpieza con Hielo Seco</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem", alignItems: "start" }}>
            <div>
              <span className="badge-fire" style={{ marginBottom: "1rem", display: "inline-flex" }}>❄️ Tecnología criogénica</span>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4.5vw, 4rem)", color: "var(--light)", marginBottom: "1.25rem" }}>
                Limpieza con<br />
                <span style={{ color: "var(--fire)" }}>Hielo Seco</span><br />
                por Incendio
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--gray)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Sin agua. Sin residuos. Sin parar la producción. La limpieza con hielo seco (CO₂) es la solución ideal para maquinaria industrial, cuadros eléctricos y equipos que no pueden mojarse ni desmontarse.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:900XXXXXX" className="btn-fire">☎ Llamar ahora</a>
                <a href="https://wa.me/34900XXXXXX" className="btn-wa" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            </div>
            <div style={{ background: "var(--ash2)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.75rem", padding: "2rem" }}>
              <ContactForm title="Solicitar presupuesto" subtitle="Valoración gratuita sin compromiso" />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", background: "var(--coal)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/hielo-seco-limpieza-fFPmKVRHDYdNpKpnZyqCqZ.webp"
                alt="Limpieza con hielo seco en maquinaria industrial tras incendio"
                width={700}
                height={420}
                loading="lazy"
                style={{ width: "100%", borderRadius: "0.75rem" }}
              />
            </div>
            <div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1rem" }}>
                Ventajas del hielo seco
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {[
                  { icon: "💧", text: "Sin agua: no genera humedad ni riesgo de corrosión" },
                  { icon: "♻️", text: "Sin residuos: el CO₂ se sublima al instante" },
                  { icon: "⚡", text: "Sin desmontaje: limpieza in situ de equipos en producción" },
                  { icon: "🔬", text: "No abrasivo: no daña superficies ni componentes delicados" },
                  { icon: "🌿", text: "Ecológico: no utiliza productos químicos" },
                  { icon: "⏱️", text: "Rápido: reduce el tiempo de parada al mínimo" },
                ].map((item) => (
                  <li key={item.text} style={{ display: "flex", gap: "0.75rem", color: "var(--gray)", fontSize: "0.95rem", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1.5rem" }}>
            Aplicaciones industriales
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "3rem" }}>
            {[
              { icon: "🏭", title: "Naves industriales", desc: "Limpieza de estructuras, techos y suelos de naves afectadas por incendio." },
              { icon: "⚡", title: "Cuadros eléctricos", desc: "Descontaminación de cuadros eléctricos sin riesgo de cortocircuito." },
              { icon: "🔧", title: "Maquinaria CNC", desc: "Limpieza de centros de mecanizado y maquinaria de precisión." },
              { icon: "🚗", title: "Líneas de producción", desc: "Limpieza de cintas transportadoras y líneas de montaje sin parada." },
              { icon: "🍽️", title: "Industria alimentaria", desc: "Limpieza homologada para instalaciones de producción alimentaria." },
              { icon: "💊", title: "Industria farmacéutica", desc: "Limpieza en entornos de sala blanca y producción farmacéutica." },
            ].map((item) => (
              <div key={item.title} className="service-card">
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--light)", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ color: "var(--gray)", fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1.5rem" }}>
            Preguntas frecuentes
          </h2>
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>
    </>
  );
}
