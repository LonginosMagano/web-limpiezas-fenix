/*
 * LimpiezaLaser — /limpieza-laser/
 * Página de servicio especial de limpieza láser
 */

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";

const FAQS = [
  { q: "¿Qué superficies se pueden limpiar con láser?", a: "Piedra natural (mármol, granito, pizarra), ladrillo, hormigón, madera, metal, cerámica y elementos de patrimonio histórico. El láser es especialmente eficaz en superficies porosas donde los métodos químicos podrían causar daños." },
  { q: "¿Es seguro el láser para superficies delicadas?", a: "Sí. El láser de limpieza utiliza pulsos de energía controlados que eliminan solo la capa superficial de contaminación sin dañar el material subyacente. Es el método más preciso disponible actualmente." },
  { q: "¿Cuánto tiempo dura el proceso?", a: "Depende de la superficie y el nivel de afectación. Una pared de 10m² puede tratarse en 2-4 horas. Damos un presupuesto detallado tras la valoración gratuita." },
  { q: "¿Se puede usar en patrimonio histórico?", a: "Sí. La limpieza láser es el método preferido por restauradores de patrimonio histórico precisamente por su precisión y ausencia de productos químicos. Hemos trabajado en edificios catalogados y elementos de valor artístico." },
];

const schemaService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Limpieza Láser por Incendio",
  provider: { "@type": "LocalBusiness", name: "Limpiezas Fénix" },
  description: "Limpieza láser especializada para eliminar hollín y daños por incendio en piedra, ladrillo, madera, metal y patrimonio histórico.",
  url: "https://limpiezaincendiosfenix.es/limpieza-laser/",
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

export default function LimpiezaLaser() {
  return (
    <>
      <SEOHead
        title="Limpieza Láser por Incendio | Hollín en Piedra, Madera y Metal — Limpiezas Fénix"
        description="Limpieza láser especializada para eliminar hollín y daños por incendio en piedra, ladrillo, madera, metal y patrimonio histórico. Sin productos químicos. ☎ 900 XXX XXX"
        canonical="https://limpiezaincendiosfenix.es/limpieza-laser/"
        schema={[schemaService, schemaFAQ]}
      />

      <section style={{ background: "var(--ash)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/limpieza-por-incendio/">Limpieza por Incendio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>Limpieza Láser</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem", alignItems: "start" }}>
            <div>
              <span className="badge-fire" style={{ marginBottom: "1rem", display: "inline-flex" }}>🔬 Tecnología avanzada</span>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4.5vw, 4rem)", color: "var(--light)", marginBottom: "1.25rem" }}>
                Limpieza <span style={{ color: "var(--fire)" }}>Láser</span><br />por Incendio
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--gray)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                La tecnología láser permite eliminar hollín y residuos de combustión con una precisión milimétrica, sin dañar la superficie subyacente y sin necesidad de productos químicos. Ideal para piedra, ladrillo, madera, metal y patrimonio histórico.
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
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1rem" }}>
                ¿Cómo funciona la limpieza láser?
              </h2>
              <p style={{ color: "var(--gray)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                El láser de limpieza emite pulsos de luz de alta energía que son absorbidos por la capa de hollín y residuos de combustión. Esta energía vaporiza instantáneamente los contaminantes sin afectar al material subyacente, que refleja la energía láser.
              </p>
              <p style={{ color: "var(--gray)", lineHeight: 1.8 }}>
                El proceso es completamente en seco, sin agua ni productos químicos, lo que lo hace ideal para superficies sensibles a la humedad y para entornos donde no se puede generar residuos líquidos.
              </p>
            </div>
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/limpieza-laser-incendio-oDQqnRSLjXm8fxZDNniBm9.webp"
                alt="Limpieza láser de hollín en piedra tras incendio"
                width={700}
                height={420}
                loading="lazy"
                style={{ width: "100%", borderRadius: "0.75rem" }}
              />
            </div>
          </div>

          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.2rem", color: "var(--light)", marginBottom: "1.5rem" }}>
            Casos de uso
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem", marginBottom: "3rem" }}>
            {[
              { icon: "🏛️", title: "Patrimonio histórico", desc: "Fachadas, columnas, relieves y elementos decorativos en edificios catalogados." },
              { icon: "🧱", title: "Piedra y ladrillo", desc: "Paredes exteriores e interiores con hollín profundo incrustado." },
              { icon: "🪵", title: "Madera", desc: "Vigas, suelos, carpintería y elementos decorativos de madera." },
              { icon: "⚙️", title: "Metal y maquinaria", desc: "Estructuras metálicas, maquinaria y equipos industriales." },
              { icon: "🏠", title: "Chimeneas y hogares", desc: "Interior de chimeneas y hogares con acumulación de hollín." },
              { icon: "🎨", title: "Arte y restauración", desc: "Esculturas, pinturas murales y elementos artísticos de valor." },
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
