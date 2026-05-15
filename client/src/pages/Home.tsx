/*
 * Homepage — Limpiezas Fénix
 * Filosofía: Resurgimiento Emocional
 * Secciones: Topbar (en Header) · Hero · Trust bar · Módulo distintivo · Alerta 72h ·
 *            Galería · Servicios · Seguro · Proceso · Testimoniales · Ciudades · FAQ · CTA final
 */

import { useState, useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";

// ── Datos ──────────────────────────────────────────────────────────────────

const TRUST_BADGES = [
  { icon: "🏆", num: "+15", label: "Años de experiencia" },
  { icon: "🔥", num: "+2.500", label: "Siniestros resueltos" },
  { icon: "⏱️", num: "24h", label: "Servicio urgente" },
  { icon: "🛡️", num: "100%", label: "Asegurado y certificado" },
  { icon: "⚙️", num: "3", label: "Tecnologías especializadas" },
];

const SERVICES = [
  { icon: "🔥", title: "Limpieza de hollín y humo", desc: "Eliminación completa de hollín, humo y residuos de combustión en paredes, techos, suelos y mobiliario.", href: "/limpieza-por-incendio/" },
  { icon: "💨", title: "Eliminación de olores", desc: "Tratamiento de ozono y nebulización para eliminar el olor a humo de forma definitiva en toda la estancia.", href: "/limpieza-por-incendio/" },
  { icon: "🔬", title: "Limpieza láser", desc: "Tecnología láser de alta precisión para superficies delicadas: piedra, ladrillo, madera, metal y patrimonio histórico.", href: "/limpieza-laser/" },
  { icon: "❄️", title: "Limpieza con hielo seco", desc: "Sin agua, sin residuos. Ideal para maquinaria industrial, cuadros eléctricos y equipos en producción.", href: "/limpieza-hielo-seco/" },
  { icon: "🏠", title: "Rehabilitación de inmuebles", desc: "Restauración integral de viviendas, locales y edificios afectados por incendio, desde la limpieza hasta la pintura.", href: "/limpieza-por-incendio/" },
  { icon: "📋", title: "Gestión con aseguradoras", desc: "Nos encargamos de hablar con tu aseguradora y elaborar el informe pericial para agilizar la cobertura del siniestro.", href: "/limpieza-por-incendio/" },
  { icon: "🏭", title: "Incendios industriales", desc: "Limpieza y recuperación de naves industriales, almacenes y plantas de producción tras incendios de gran escala.", href: "/limpieza-por-incendio/" },
  { icon: "🏥", title: "Centros sanitarios y residencias", desc: "Protocolo especial para hospitales, residencias y centros de salud con mínima interrupción de la actividad.", href: "/limpieza-por-incendio/" },
  { icon: "🚗", title: "Vehículos e incendios de garaje", desc: "Limpieza de vehículos quemados y garajes afectados por incendio, incluyendo eliminación de residuos tóxicos.", href: "/limpieza-por-incendio/" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Contacto urgente", desc: "Llámanos o escríbenos. Respondemos en minutos, 24h/365 días." },
  { num: "02", title: "Valoración gratuita", desc: "Un técnico visita el inmueble y elabora un informe detallado sin coste." },
  { num: "03", title: "Coordinación con el seguro", desc: "Gestionamos la documentación y hablamos directamente con tu aseguradora." },
  { num: "04", title: "Limpieza especializada", desc: "Aplicamos la tecnología más adecuada: química, láser o hielo seco." },
  { num: "05", title: "Eliminación de olores", desc: "Tratamiento de ozono y nebulización para erradicar el olor a humo." },
  { num: "06", title: "Entrega y garantía", desc: "Revisión final contigo y garantía por escrito de los trabajos realizados." },
];

const TESTIMONIALS = [
  {
    name: "María G.",
    city: "Madrid",
    stars: 5,
    text: "Tras el incendio en nuestra cocina, Fénix llegó en menos de 3 horas. El resultado fue increíble: ni rastro de hollín ni olor. Además gestionaron todo con el seguro. Totalmente recomendables.",
  },
  {
    name: "Carlos M.",
    city: "Barcelona",
    stars: 5,
    text: "Incendio en el local de mi negocio. Pensé que lo había perdido todo. El equipo de Fénix trabajó durante dos días y lo dejaron impecable. El seguro cubrió el 100% gracias a su informe.",
  },
  {
    name: "Ana R.",
    city: "Valencia",
    stars: 5,
    text: "Profesionales de verdad. Vinieron el mismo día que llamé, a las 11 de la noche. La limpieza láser en las paredes de piedra de mi casa antigua fue perfecta, sin dañar nada.",
  },
];

const CITIES = [
  { href: "/limpieza-por-incendio-madrid/", label: "Madrid", img: "https://picsum.photos/seed/madrid-fenix/600/450" },
  { href: "/limpieza-por-incendio-barcelona/", label: "Barcelona", img: "https://picsum.photos/seed/barcelona-fenix/600/450" },
  { href: "/limpieza-por-incendio-valencia/", label: "Valencia", img: "https://picsum.photos/seed/valencia-fenix/600/450" },
  { href: "/limpieza-por-incendio-sevilla/", label: "Sevilla", img: "https://picsum.photos/seed/sevilla-fenix/600/450" },
  { href: "/limpieza-por-incendio-malaga/", label: "Málaga", img: "https://picsum.photos/seed/malaga-fenix/600/450" },
  { href: "/limpieza-por-incendio-zaragoza/", label: "Zaragoza", img: "https://picsum.photos/seed/zaragoza-fenix/600/450" },
  { href: "/limpieza-por-incendio-murcia/", label: "Murcia", img: "https://picsum.photos/seed/murcia-fenix/600/450" },
  { href: "/limpieza-por-incendio-alicante/", label: "Alicante", img: "https://picsum.photos/seed/alicante-fenix/600/450" },
];

const FAQS = [
  {
    q: "¿Cuánto tarda en llegar un equipo tras un incendio?",
    a: "Nuestro tiempo de respuesta habitual es de 2 a 4 horas en las principales ciudades. Operamos 24 horas al día, 365 días al año, incluyendo festivos y fines de semana.",
  },
  {
    q: "¿El seguro del hogar cubre la limpieza por incendio?",
    a: "En la mayoría de los casos, sí. Las pólizas de hogar suelen cubrir los daños por incendio, incluyendo la limpieza y rehabilitación. Nosotros elaboramos el informe pericial y coordinamos directamente con tu aseguradora para agilizar el proceso.",
  },
  {
    q: "¿Qué pasa si no actúo rápido tras el incendio?",
    a: "Las primeras 72 horas son críticas. El hollín y el humo son altamente corrosivos: en ese tiempo pueden oxidar metales, manchar permanentemente superficies porosas y penetrar en materiales que después son imposibles de recuperar. Actuar rápido reduce el daño y el coste.",
  },
  {
    q: "¿Podemos seguir viviendo en casa durante la limpieza?",
    a: "Depende del nivel de afectación. En siniestros parciales (una habitación o cocina), es posible continuar en el inmueble. En siniestros graves, recomendamos alojamiento alternativo por seguridad e higiene. Lo evaluamos en la visita gratuita.",
  },
  {
    q: "¿Qué es la limpieza láser y para qué se usa?",
    a: "La limpieza láser utiliza pulsos de luz de alta energía para vaporizar el hollín y los residuos de combustión sin dañar la superficie subyacente. Es ideal para piedra, ladrillo, madera, metal y elementos de patrimonio histórico donde los métodos químicos podrían causar daños.",
  },
  {
    q: "¿Qué ventajas tiene la limpieza con hielo seco?",
    a: "El hielo seco (CO₂ en pellets) impacta sobre la superficie y se sublima al instante, sin dejar residuos ni humedad. Es el método ideal para maquinaria industrial, cuadros eléctricos y equipos que no pueden mojarse ni desmontarse.",
  },
  {
    q: "¿Pueden eliminar el olor a humo completamente?",
    a: "Sí. Utilizamos tratamientos de ozono y nebulización de productos neutralizantes que eliminan el olor a humo de forma definitiva, no solo lo enmascaran. El proceso puede requerir de 24 a 48 horas según la intensidad del siniestro.",
  },
  {
    q: "¿Trabajan con todo tipo de inmuebles?",
    a: "Sí: viviendas, locales comerciales, naves industriales, oficinas, residencias, hospitales, hoteles y cualquier tipo de inmueble. También tratamos vehículos e incendios de garaje.",
  },
];

// ── Componente FAQ ─────────────────────────────────────────────────────────

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

// ── Componente FadeUp ──────────────────────────────────────────────────────

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-up${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ── Schema ─────────────────────────────────────────────────────────────────

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const schemaLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Limpiezas Fénix",
  description: "Empresa especializada en limpieza por incendio y rehabilitación tras siniestros en España.",
  url: "https://limpiezaincendiosfenix.es/",
  telephone: "900 XXX XXX",
  areaServed: "España",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
  },
};

// ── Homepage ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <SEOHead
        title="Limpiezas Fénix | Limpieza por Incendio Urgente 24h en España"
        description="Empresa especializada en limpieza por incendio en España. Servicio urgente 24h/365. Valoración gratuita. Tu seguro puede cubrir el 100%. Hollín, humo, olores. ☎ 900 XXX XXX"
        canonical="https://limpiezaincendiosfenix.es/"
        schema={[schemaLocalBusiness, schemaFAQ]}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "var(--coal)",
        }}
      >
        {/* Imagen de fondo */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/hero-incendio-fenix-oFe3zKfySyUYi7opkg9BMC.webp"
            alt="Equipo de Limpiezas Fénix trabajando en un inmueble afectado por incendio"
            width={1280}
            height={520}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "4rem", paddingBottom: "4rem" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "3rem", alignItems: "center" }}>
            {/* Texto */}
            <div>
              <div style={{ marginBottom: "1.25rem" }}>
                <span className="badge-fire">⚡ Servicio urgente 24h / 365 días</span>
              </div>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "var(--light)", lineHeight: 1.05, marginBottom: "1.25rem" }}>
                Limpieza por<br />
                <span style={{ color: "var(--fire)" }}>Incendio</span><br />
                Urgente
              </h1>
              <p style={{ fontSize: "1.15rem", color: "rgba(242,237,228,0.85)", lineHeight: 1.7, marginBottom: "1.75rem", maxWidth: "520px" }}>
                Recuperamos tu hogar o negocio tras un incendio. Hollín, humo, olores y daños estructurales. <strong style={{ color: "var(--light)" }}>Tu seguro puede cubrir el 100% del coste.</strong>
              </p>
              {/* Trust badges mini */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2rem" }}>
                {["✓ Valoración gratuita", "✓ Respuesta en 2-4h", "✓ Gestionamos tu seguro", "✓ +2.500 siniestros resueltos"].map((t) => (
                  <span key={t} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "999px", padding: "0.3rem 0.85rem", fontSize: "0.85rem", color: "var(--light)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:900XXXXXX" className="btn-fire" style={{ fontSize: "1.05rem" }}>
                  ☎ Llamar ahora
                </a>
                <a
                  href="https://wa.me/34900XXXXXX?text=Hola%2C%20necesito%20ayuda%20urgente%20tras%20un%20incendio"
                  className="btn-wa"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "1.05rem" }}
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Formulario */}
            <div style={{
              background: "rgba(22,22,22,0.92)",
              border: "1px solid rgba(255,69,0,0.2)",
              borderRadius: "0.75rem",
              padding: "2rem",
              backdropFilter: "blur(8px)",
            }}>
              <ContactForm
                title="Solicita valoración gratuita"
                subtitle="Sin compromiso · Respuesta en menos de 24h"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--ash)", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0" }}>
            {TRUST_BADGES.map((b, i) => (
              <div
                key={b.label}
                className="trust-badge"
                style={{ borderRight: i < 4 ? "1px solid var(--border-subtle)" : "none", padding: "1.5rem 1rem" }}
              >
                <div className="trust-badge-icon">{b.icon}</div>
                <div className="trust-badge-num">{b.num}</div>
                <div className="trust-badge-label">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. MÓDULO DISTINTIVO — "El método Fénix" ────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--coal)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge-fire" style={{ marginBottom: "1rem", display: "inline-flex" }}>Nuestra diferencia</span>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--light)", marginBottom: "1rem" }}>
                El Método <span style={{ color: "var(--fire)" }}>Fénix</span>
              </h2>
              <p style={{ color: "var(--gray)", maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem", lineHeight: 1.7 }}>
                No somos una empresa de limpieza general. Somos especialistas exclusivos en siniestros por incendio con tres tecnologías que ningún competidor combina.
              </p>
            </div>
          </FadeUp>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {[
              {
                icon: "🔬",
                title: "Diagnóstico técnico",
                desc: "Antes de limpiar, analizamos el tipo de hollín, la penetración del humo y los materiales afectados. Cada siniestro es único y requiere un protocolo a medida.",
                color: "var(--fire)",
              },
              {
                icon: "⚙️",
                title: "Triple tecnología",
                desc: "Química especializada, láser de alta precisión e hielo seco. Seleccionamos la combinación óptima para cada superficie y nivel de afectación.",
                color: "var(--gold)",
              },
              {
                icon: "📋",
                title: "Gestión integral",
                desc: "Elaboramos el informe pericial, coordinamos con tu aseguradora y te acompañamos en todo el proceso hasta la entrega final con garantía por escrito.",
                color: "var(--green)",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="service-card" style={{ textAlign: "center", padding: "2.5rem 2rem" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", color: item.color, marginBottom: "0.75rem", letterSpacing: "0.03em" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ALERTA 72 HORAS ──────────────────────────────────────────── */}
      <section style={{ background: "#1a0800", borderTop: "2px solid var(--fire)", borderBottom: "2px solid var(--fire)", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ fontSize: "3rem", flexShrink: 0 }}>⚠️</div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--ember)", marginBottom: "0.4rem", letterSpacing: "0.03em" }}>
                Las primeras 72 horas son críticas
              </h2>
              <p style={{ color: "rgba(242,237,228,0.8)", fontSize: "1rem", lineHeight: 1.6, margin: 0 }}>
                El hollín y el humo son altamente corrosivos. En 72 horas pueden oxidar metales, manchar permanentemente superficies porosas y penetrar en materiales que después son imposibles de recuperar. <strong style={{ color: "var(--light)" }}>Cada hora cuenta.</strong>
              </p>
            </div>
            <a href="tel:900XXXXXX" className="btn-fire" style={{ flexShrink: 0 }}>
              ☎ Llamar ahora
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. GALERÍA DE TRABAJOS ──────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--ash)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
                Trabajos <span style={{ color: "var(--fire)" }}>Realizados</span>
              </h2>
              <p style={{ color: "var(--gray)", fontSize: "1rem" }}>Resultados reales en siniestros de todo tipo y escala</p>
            </div>
          </FadeUp>
          <div className="gallery-grid">
            {[
              { seed: "fenix-cocina", caption: "Limpieza de cocina tras incendio eléctrico — Madrid" },
              { seed: "fenix-salon", caption: "Rehabilitación de salón con hollín profundo — Barcelona" },
              { seed: "fenix-nave", caption: "Nave industrial tras incendio de maquinaria — Valencia" },
              { seed: "fenix-techo", caption: "Limpieza láser en techo de piedra — Sevilla" },
              { seed: "fenix-garaje", caption: "Incendio de vehículo en garaje comunitario — Madrid" },
              { seed: "fenix-oficina", caption: "Oficinas recuperadas tras incendio eléctrico — Zaragoza" },
            ].map((item) => (
              <div key={item.seed} className="gallery-item">
                <img
                  src={`https://picsum.photos/seed/${item.seed}/900/400`}
                  alt={item.caption}
                  width={900}
                  height={400}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.seed}/900/400`; }}
                />
                <div className="gallery-caption">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GRID DE SERVICIOS ────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--coal)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
                Nuestros <span style={{ color: "var(--fire)" }}>Servicios</span>
              </h2>
              <p style={{ color: "var(--gray)", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
                Soluciones especializadas para cada tipo de siniestro por incendio
              </p>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.25rem" }}>
            {SERVICES.map((s, i) => (
              <FadeUp key={s.title} delay={i * 60}>
                <Link href={s.href}>
                  <div className="service-card" style={{ height: "100%", cursor: "pointer" }}>
                    <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--light)", marginBottom: "0.5rem" }}>
                      {s.title}
                    </h3>
                    <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. SECCIÓN SEGURO ───────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--ash)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <FadeUp>
              <div>
                <span className="badge-green" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>💰 Cobertura del seguro</span>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "1rem" }}>
                  Tu seguro puede cubrir<br />
                  <span style={{ color: "var(--green)" }}>el 100% del coste</span>
                </h2>
                <p style={{ color: "var(--gray)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                  La mayoría de las pólizas de hogar, comercio e industria incluyen cobertura por daños de incendio. Nosotros elaboramos el informe pericial completo y nos encargamos de hablar con tu aseguradora para que no tengas que preocuparte por la burocracia.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {[
                    "Elaboramos el informe pericial sin coste adicional",
                    "Coordinamos directamente con tu aseguradora",
                    "Agilizamos los plazos de resolución del siniestro",
                    "Experiencia con todas las aseguradoras del mercado",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", color: "var(--gray)", fontSize: "0.95rem" }}>
                      <span style={{ color: "var(--green)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:900XXXXXX" className="btn-fire">
                  ☎ Consultar sin compromiso
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/seguro-incendio-cobertura-ZHv9ZVUc2Rvg77P4P3YCE4.webp"
                  alt="Gestión del seguro de incendio con Limpiezas Fénix"
                  width={700}
                  height={420}
                  loading="lazy"
                  style={{ width: "100%", borderRadius: "0.75rem", display: "block" }}
                />
                <div style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-1.5rem",
                  background: "var(--ash2)",
                  border: "1px solid rgba(40,199,111,0.3)",
                  borderRadius: "0.5rem",
                  padding: "1rem 1.5rem",
                }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--green)" }}>+2.500</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--gray)", textTransform: "uppercase", letterSpacing: "0.06em" }}>Siniestros gestionados</div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 8. NUESTRO PROCESO ──────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--coal)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
                Nuestro <span style={{ color: "var(--fire)" }}>Proceso</span>
              </h2>
              <p style={{ color: "var(--gray)", fontSize: "1rem" }}>6 pasos para devolverte la normalidad</p>
            </div>
          </FadeUp>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <FadeUp key={step.num} delay={i * 80}>
                <div style={{ position: "relative", padding: "1.5rem", background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "0.5rem" }}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "4rem",
                    color: "rgba(255,69,0,0.1)",
                    position: "absolute",
                    top: "0.5rem",
                    right: "1rem",
                    lineHeight: 1,
                    userSelect: "none",
                  }}>
                    {step.num}
                  </div>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "var(--fire)", marginBottom: "0.5rem", letterSpacing: "0.04em" }}>
                    Paso {step.num}
                  </div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "var(--light)", marginBottom: "0.5rem" }}>
                    {step.title}
                  </h3>
                  <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALES ────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--ash)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
                Lo que dicen <span style={{ color: "var(--fire)" }}>nuestros clientes</span>
              </h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                <span style={{ color: "var(--gold)", fontSize: "1.2rem" }}>★★★★★</span>
                <span style={{ color: "var(--gray)", fontSize: "0.95rem" }}>4.9/5 · Más de 127 valoraciones</span>
              </div>
            </div>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 100}>
                <div className="testimonial-card">
                  <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem", marginTop: "1.5rem" }}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <span key={j} style={{ color: "var(--gold)" }}>★</span>
                    ))}
                  </div>
                  <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "var(--fire)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.1rem",
                      color: "#fff",
                      flexShrink: 0,
                    }}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--light)" }}>{t.name}</div>
                      <div style={{ fontSize: "0.8rem", color: "var(--gray)" }}>{t.city}</div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. GRID DE CIUDADES ────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--coal)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
                Servicio en toda <span style={{ color: "var(--fire)" }}>España</span>
              </h2>
              <p style={{ color: "var(--gray)", fontSize: "1rem" }}>Presencia en las principales ciudades con equipos locales</p>
            </div>
          </FadeUp>
          <div className="cities-grid">
            {CITIES.map((city) => (
              <Link key={city.href} href={city.href} className="city-card">
                <img
                  src={city.img}
                  alt={`Limpieza por incendio en ${city.label}`}
                  width={600}
                  height={450}
                  loading="lazy"
                />
                <div className="city-card-label">{city.label}</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/limpieza-por-incendio/" className="btn-outline-fire">
              Ver todas las ciudades →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 11. FAQ ─────────────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--ash)" }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 3.5vw, 3rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
                Preguntas <span style={{ color: "var(--fire)" }}>Frecuentes</span>
              </h2>
            </div>
          </FadeUp>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            {FAQS.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/preguntas-frecuentes-limpieza-incendio/" className="btn-outline-fire">
              Ver todas las preguntas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 12. CTA FINAL ───────────────────────────────────────────────── */}
      <section style={{ padding: "5rem 0", background: "var(--coal)", position: "relative", overflow: "hidden" }}>
        {/* Fondo decorativo */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, rgba(255,69,0,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div className="container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <FadeUp>
              <div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--light)", marginBottom: "1rem" }}>
                  ¿Has sufrido un<br />
                  <span style={{ color: "var(--fire)" }}>incendio?</span>
                </h2>
                <p style={{ color: "var(--gray)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: "2rem" }}>
                  No esperes. Cada hora que pasa, el daño aumenta. Contacta ahora con nuestro equipo de urgencias y recibe una valoración gratuita sin compromiso.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a href="tel:900XXXXXX" className="btn-fire" style={{ justifyContent: "center", fontSize: "1.1rem", padding: "1rem 2rem" }}>
                    ☎ 900 XXX XXX — Llamar ahora
                  </a>
                  <a
                    href="https://wa.me/34900XXXXXX?text=Hola%2C%20necesito%20ayuda%20urgente%20tras%20un%20incendio"
                    className="btn-wa"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ justifyContent: "center", fontSize: "1.1rem", padding: "1rem 2rem" }}
                  >
                    💬 WhatsApp urgente
                  </a>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <div style={{
                background: "var(--ash)",
                border: "1px solid rgba(255,69,0,0.2)",
                borderRadius: "0.75rem",
                padding: "2.5rem",
              }}>
                <ContactForm
                  title="Solicita valoración gratuita"
                  subtitle="Respuesta en menos de 24h · Sin compromiso"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
