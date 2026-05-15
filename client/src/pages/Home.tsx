/*
 * Home — Limpiezas Fénix v3 "Editorial Cálido"
 * Fondo crema, tipografía Playfair Display + Lato, acento terracota
 * Layout asimétrico, diferenciado de toda la competencia
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import ContactForm from "../components/ContactForm";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/hero-fenix-editorial-A2pc4cSxRXZRhBv6mSsHHm.webp";
const ANTES_DESPUES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/antes-despues-incendio-TfnGkCRofsnSd7YDzL5qUC.webp";
const PROCESO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/proceso-restauracion-editorial-oEbdrJESapXs9XfcjbZcSk.webp";
const EQUIPO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/equipo-fenix-profesional-RDwKVRyH6aPkBmjTC5Y7vt.webp";

const SERVICES = [
  { icon: "🔥", title: "Limpieza de Hollín", desc: "Eliminación completa de depósitos de hollín en paredes, techos, muebles y superficies porosas con técnicas especializadas." },
  { icon: "💨", title: "Eliminación de Humo", desc: "Tratamiento profesional de manchas de humo y partículas suspendidas en el aire. Recuperamos el aspecto original." },
  { icon: "👃", title: "Neutralización de Olores", desc: "Ozono, nebulización y tratamientos enzimáticos para eliminar el olor a quemado de forma permanente." },
  { icon: "🏗️", title: "Daños Estructurales", desc: "Evaluación y limpieza de vigas, forjados y estructuras afectadas por el calor y el fuego." },
  { icon: "📋", title: "Gestión con Seguros", desc: "Coordinamos directamente con tu compañía de seguros. En muchos casos el servicio queda cubierto al 100%." },
  { icon: "⚡", title: "Servicio Urgente 24h", desc: "Disponibles todos los días del año, incluidos festivos. Respuesta en menos de 2 horas en toda España." },
];

const STEPS = [
  { num: "01", title: "Llamada urgente", desc: "Contacta con nosotros y te atendemos de inmediato. Disponibles 24h/365 días." },
  { num: "02", title: "Valoración gratuita", desc: "Nuestro equipo evalúa los daños y elabora un presupuesto detallado sin coste." },
  { num: "03", title: "Gestión del seguro", desc: "Coordinamos con tu aseguradora para que el servicio quede cubierto." },
  { num: "04", title: "Restauración completa", desc: "Ejecutamos la limpieza y restauración con los más altos estándares de calidad." },
];

const TESTIMONIALS = [
  { text: "Llamé a las 3 de la madrugada y en 90 minutos ya estaban en mi casa. El trabajo fue impecable y el seguro lo cubrió todo.", author: "María G.", city: "Madrid", stars: 5 },
  { text: "Después del incendio en mi local pensé que lo había perdido todo. Fénix lo dejó como nuevo en 4 días. Profesionales de verdad.", author: "Carlos M.", city: "Barcelona", stars: 5 },
  { text: "Muy satisfecha con el resultado. Eliminaron el olor a humo completamente y gestionaron todo con el seguro sin complicaciones.", author: "Ana R.", city: "Valencia", stars: 5 },
];

const CITIES = [
  { href: "/limpieza-por-incendio-madrid/", label: "Madrid" },
  { href: "/limpieza-por-incendio-barcelona/", label: "Barcelona" },
  { href: "/limpieza-por-incendio-valencia/", label: "Valencia" },
  { href: "/limpieza-por-incendio-sevilla/", label: "Sevilla" },
  { href: "/limpieza-por-incendio-malaga/", label: "Málaga" },
  { href: "/limpieza-por-incendio-zaragoza/", label: "Zaragoza" },
  { href: "/limpieza-por-incendio-bilbao/", label: "Bilbao" },
  { href: "/limpieza-por-incendio-murcia/", label: "Murcia" },
  { href: "/limpieza-por-incendio-alicante/", label: "Alicante" },
  { href: "/limpieza-por-incendio-cordoba/", label: "Córdoba" },
  { href: "/limpieza-por-incendio-valladolid/", label: "Valladolid" },
  { href: "/limpieza-por-incendio-toledo/", label: "Toledo" },
  { href: "/limpieza-por-incendio-granada/", label: "Granada" },
  { href: "/limpieza-por-incendio-burgos/", label: "Burgos" },
  { href: "/limpieza-por-incendio-salamanca/", label: "Salamanca" },
  { href: "/limpieza-por-incendio-santander/", label: "Santander" },
];

const INSURANCES = [
  "Mapfre", "AXA", "Allianz", "Zurich", "Generali",
  "Mutua Madrileña", "Caser", "Helvetia", "Reale", "Pelayo",
];

// Hook para animaciones fade-up
function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return <div ref={ref} className="fade-up">{children}</div>;
}

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            {/* Texto */}
            <div>
              <div className="hero-badge">⚡ Servicio urgente 24h / 365 días</div>
              <h1 className="hero-title">
                Limpieza por<br />
                <em>Incendio</em><br />
                Profesional
              </h1>
              <p className="hero-subtitle">
                Recuperamos tu hogar o negocio tras un incendio. Hollín, humo, olores y daños estructurales. <strong>Tu seguro puede cubrir el 100% del coste.</strong>
              </p>
              <div className="hero-chips">
                <span className="hero-chip"><span>✓</span> Valoración gratuita</span>
                <span className="hero-chip"><span>✓</span> Respuesta en 2h</span>
                <span className="hero-chip"><span>✓</span> Gestionamos tu seguro</span>
                <span className="hero-chip"><span>✓</span> +2.500 siniestros</span>
              </div>
              <div className="hero-actions">
                <a href="tel:900XXXXXX" className="btn-terra">☎ Llamar ahora</a>
                <a
                  href="https://wa.me/34900XXXXXX?text=Hola%2C%20necesito%20ayuda%20urgente%20tras%20un%20incendio"
                  className="btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Imagen + badge flotante */}
            <div className="hero-image-wrap">
              <img src={HERO_IMG} alt="Equipo de Limpiezas Fénix restaurando una vivienda tras incendio" />
              <div className="hero-badge-float">
                <span className="num">24h</span>
                <span className="label">Servicio urgente<br />todos los días</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== STATS BAR ===================== */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><span className="num">+2.500</span><span className="label">Siniestros resueltos</span></div>
            <div className="stat-item"><span className="num">15+</span><span className="label">Años de experiencia</span></div>
            <div className="stat-item"><span className="num">24h</span><span className="label">Servicio urgente</span></div>
            <div className="stat-item"><span className="num">100%</span><span className="label">Cubierto por seguro</span></div>
          </div>
        </div>
      </div>

      {/* ===================== SERVICIOS ===================== */}
      <section className="section-white">
        <div className="container">
          <FadeUp>
            <span className="section-label">Nuestros servicios</span>
            <h2 className="section-title">Todo lo que necesitas tras<br /><em>un incendio</em></h2>
            <p className="section-subtitle" style={{ marginBottom: "3rem" }}>
              Cubrimos todos los aspectos de la limpieza y restauración post-incendio con equipos especializados y técnicas certificadas.
            </p>
          </FadeUp>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <Link href="/limpieza-por-incendio/" className="service-link">
                    Más información →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ANTES / DESPUÉS ===================== */}
      <section className="section-cream2">
        <div className="container">
          <div className="before-after-wrap">
            <FadeUp>
              <div className="before-after-img">
                <img src={ANTES_DESPUES} alt="Antes y después de limpieza por incendio" />
                <span className="before-after-label">Antes → Después</span>
              </div>
            </FadeUp>
            <FadeUp delay={150}>
              <span className="section-label">Resultados reales</span>
              <h2 className="section-title">De la devastación<br />a la <em>normalidad</em></h2>
              <p style={{ color: "var(--slate2)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                Nuestro equipo especializado trabaja con técnicas y equipos de última generación para devolver tu propiedad a su estado original, o incluso mejor.
              </p>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                {["Eliminación completa de hollín y humo", "Neutralización permanente de olores", "Restauración de superficies y materiales", "Desinfección y saneamiento total", "Documentación para el seguro"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.95rem", color: "var(--slate2)" }}>
                    <span style={{ color: "var(--terra)", fontWeight: 700 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/limpieza-por-incendio/" className="btn-terra">Ver todos los servicios</Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===================== PROCESO ===================== */}
      <section className="section-white">
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-label">Cómo trabajamos</span>
              <h2 className="section-title">Un proceso claro<br />y <em>sin complicaciones</em></h2>
            </div>
          </FadeUp>
          <div className="process-grid">
            {STEPS.map((step, i) => (
              <FadeUp key={step.num} delay={i * 100}>
                <div className="process-step">
                  <div className="process-num">{step.num}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EQUIPO + FORMULARIO ===================== */}
      <section className="section-cream2">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <FadeUp>
              <img
                src={EQUIPO_IMG}
                alt="Equipo profesional de Limpiezas Fénix"
                style={{ width: "100%", borderRadius: "8px", boxShadow: "0 16px 50px rgba(44,62,80,0.12)" }}
              />
            </FadeUp>
            <FadeUp delay={150}>
              <span className="section-label">Solicita valoración</span>
              <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
                Cuéntanos tu caso.<br /><em>Te llamamos hoy.</em>
              </h2>
              <p style={{ color: "var(--slate2)", marginBottom: "1.75rem", lineHeight: 1.7 }}>
                Rellena el formulario y uno de nuestros especialistas te contactará en menos de 24 horas con una valoración gratuita y sin compromiso.
              </p>
              <div style={{ background: "var(--white)", border: "1.5px solid var(--beige)", borderRadius: "8px", padding: "2rem" }}>
                <ContactForm
                  title="Solicita valoración gratuita"
                  subtitle="Sin compromiso · Respuesta en menos de 24h"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIOS ===================== */}
      <section className="section-white">
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-label">Lo que dicen nuestros clientes</span>
              <h2 className="section-title">Más de 2.500 familias<br />han <em>confiado en nosotros</em></h2>
            </div>
          </FadeUp>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.author} delay={i * 100}>
                <div className="testimonial-card">
                  <div className="testimonial-stars">{"★".repeat(t.stars)}</div>
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-city">{t.city}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SEGUROS ===================== */}
      <div className="insurance-section">
        <div className="container">
          <FadeUp>
            <p style={{ textAlign: "center", fontFamily: "'Lato', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--slate-light)", marginBottom: "1.25rem" }}>
              Trabajamos con todas las aseguradoras
            </p>
            <div className="insurance-logos">
              {INSURANCES.map((ins) => (
                <div key={ins} className="insurance-logo-item">{ins}</div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ===================== CIUDADES ===================== */}
      <section className="section-cream">
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="section-label">Cobertura nacional</span>
              <h2 className="section-title">Servicio en toda <em>España</em></h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Disponemos de equipos en las principales ciudades para garantizar una respuesta rápida donde lo necesites.
              </p>
            </div>
          </FadeUp>
          <div className="cities-grid">
            {CITIES.map((city) => (
              <Link key={city.href} href={city.href} className="city-chip">
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="cta-title">¿Has sufrido un incendio?<br /><em>Llámanos ahora.</em></h2>
              <p className="cta-sub">Servicio urgente 24h · Tu seguro puede cubrir el 100% · Valoración gratuita</p>
            </div>
            <div className="cta-actions">
              <a href="tel:900XXXXXX" className="btn-terra" style={{ fontSize: "1.05rem", padding: "0.9rem 2rem" }}>
                ☎ 900 XXX XXX
              </a>
              <a
                href="https://wa.me/34900XXXXXX"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.85) !important" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
