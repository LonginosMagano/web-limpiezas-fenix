/*
 * Home — Limpiezas Fénix v4 "Editorial Cálido"
 * Fondo crema, tipografía Playfair Display + Lato, acento terracota
 * Layout asimétrico, diferenciado de toda la competencia
 * v4: nueva imagen hero con logos en uniformes, sin referencias a seguros
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import ContactForm from "../components/ContactForm";

const HERO_IMG = "/manus-storage/hero-fenix-uniformes_f01d6c0b.png";
const ANTES_DESPUES = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/antes-despues-incendio-TfnGkCRofsnSd7YDzL5qUC.webp";
const PROCESO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/proceso-restauracion-editorial-oEbdrJESapXs9XfcjbZcSk.webp";
const EQUIPO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663206170810/SXwRDVVqVKvRb2B5V538od/equipo-fenix-profesional-RDwKVRyH6aPkBmjTC5Y7vt.webp";

const SERVICES = [
  { icon: "🔥", title: "Limpieza de Hollín", desc: "Eliminación completa de depósitos de hollín en paredes, techos, muebles y superficies porosas con técnicas especializadas." },
  { icon: "💨", title: "Eliminación de Humo", desc: "Tratamiento profesional de manchas de humo y partículas suspendidas en el aire. Recuperamos el aspecto original." },
  { icon: "👃", title: "Neutralización de Olores", desc: "Ozono, nebulización y tratamientos enzimáticos para eliminar el olor a quemado de forma permanente." },
  { icon: "🏗️", title: "Daños Estructurales", desc: "Evaluación y limpieza de vigas, forjados y estructuras afectadas por el calor y el fuego." },
  { icon: "🏢", title: "Locales y Comunidades", desc: "Atendemos viviendas, locales comerciales, naves industriales y zonas comunes de comunidades de vecinos." },
  { icon: "⚡", title: "Servicio Urgente 24h", desc: "Disponibles todos los días del año, incluidos festivos. Respuesta en menos de 2 horas en toda España." },
];

const STEPS = [
  { num: "01", title: "Llamada urgente", desc: "Contacta con nosotros y te atendemos de inmediato. Disponibles 24h/365 días." },
  { num: "02", title: "Valoración gratuita", desc: "Nuestro equipo evalúa los daños y elabora un presupuesto detallado sin coste." },
  { num: "03", title: "Inicio de trabajos", desc: "Comenzamos la restauración con los equipos y técnicas adecuadas para cada tipo de daño." },
  { num: "04", title: "Restauración completa", desc: "Ejecutamos la limpieza y restauración con los más altos estándares de calidad." },
];

const TESTIMONIALS = [
  { text: "Llamé a las 3 de la madrugada y en 90 minutos ya estaban en mi casa. El trabajo fue impecable, resultados visibles desde el primer día.", author: "María G.", city: "Madrid", stars: 5 },
  { text: "Después del incendio en mi local pensé que lo había perdido todo. Fénix lo dejó como nuevo en 4 días. Profesionales de verdad.", author: "Carlos M.", city: "Barcelona", stars: 5 },
  { text: "Muy satisfecha con el resultado. Eliminaron el olor a humo completamente. Trato cercano y resultados excelentes.", author: "Ana R.", city: "Valencia", stars: 5 },
];

// Todas las ciudades del megaprompt organizadas por comunidad
const CITIES = [
  // Madrid
  { href: "/limpieza-por-incendio-madrid/", label: "Madrid" },
  { href: "/limpieza-por-incendio-alcala-de-henares/", label: "Alcalá de Henares" },
  { href: "/limpieza-por-incendio-leganes/", label: "Leganés" },
  { href: "/limpieza-por-incendio-getafe/", label: "Getafe" },
  { href: "/limpieza-por-incendio-alcorcon/", label: "Alcorcón" },
  { href: "/limpieza-por-incendio-mostoles/", label: "Móstoles" },
  { href: "/limpieza-por-incendio-fuenlabrada/", label: "Fuenlabrada" },
  { href: "/limpieza-por-incendio-pozuelo-de-alarcon/", label: "Pozuelo de Alarcón" },
  { href: "/limpieza-por-incendio-torrejon-de-ardoz/", label: "Torrejón de Ardoz" },
  { href: "/limpieza-por-incendio-parla/", label: "Parla" },
  { href: "/limpieza-por-incendio-alcobendas/", label: "Alcobendas" },
  { href: "/limpieza-por-incendio-san-sebastian-de-los-reyes/", label: "San Sebastián de los Reyes" },
  { href: "/limpieza-por-incendio-colmenar-viejo/", label: "Colmenar Viejo" },
  { href: "/limpieza-por-incendio-rivas-vaciamadrid/", label: "Rivas-Vaciamadrid" },
  { href: "/limpieza-por-incendio-arganda-del-rey/", label: "Arganda del Rey" },
  { href: "/limpieza-por-incendio-majadahonda/", label: "Majadahonda" },
  { href: "/limpieza-por-incendio-las-rozas/", label: "Las Rozas" },
  { href: "/limpieza-por-incendio-boadilla-del-monte/", label: "Boadilla del Monte" },
  { href: "/limpieza-por-incendio-villaviciosa-de-odon/", label: "Villaviciosa de Odón" },
  { href: "/limpieza-por-incendio-navalcarnero/", label: "Navalcarnero" },
  // Comunidad Valenciana
  { href: "/limpieza-por-incendio-valencia/", label: "Valencia" },
  { href: "/limpieza-por-incendio-alicante/", label: "Alicante" },
  { href: "/limpieza-por-incendio-castellon/", label: "Castellón" },
  { href: "/limpieza-por-incendio-elche/", label: "Elche" },
  { href: "/limpieza-por-incendio-torrent/", label: "Torrent" },
  { href: "/limpieza-por-incendio-gandia/", label: "Gandia" },
  { href: "/limpieza-por-incendio-sagunto/", label: "Sagunto" },
  { href: "/limpieza-por-incendio-paterna/", label: "Paterna" },
  { href: "/limpieza-por-incendio-benidorm/", label: "Benidorm" },
  { href: "/limpieza-por-incendio-orihuela/", label: "Orihuela" },
  { href: "/limpieza-por-incendio-denia/", label: "Dénia" },
  { href: "/limpieza-por-incendio-xativa/", label: "Xàtiva" },
  { href: "/limpieza-por-incendio-alzira/", label: "Alzira" },
  { href: "/limpieza-por-incendio-vila-real/", label: "Vila-real" },
  { href: "/limpieza-por-incendio-mislata/", label: "Mislata" },
  // Murcia
  { href: "/limpieza-por-incendio-murcia/", label: "Murcia" },
  { href: "/limpieza-por-incendio-cartagena/", label: "Cartagena" },
  { href: "/limpieza-por-incendio-lorca/", label: "Lorca" },
  { href: "/limpieza-por-incendio-molina-de-segura/", label: "Molina de Segura" },
  { href: "/limpieza-por-incendio-alcantarilla/", label: "Alcantarilla" },
  { href: "/limpieza-por-incendio-yecla/", label: "Yecla" },
  { href: "/limpieza-por-incendio-jumilla/", label: "Jumilla" },
  { href: "/limpieza-por-incendio-caravaca-de-la-cruz/", label: "Caravaca de la Cruz" },
  { href: "/limpieza-por-incendio-cieza/", label: "Cieza" },
  { href: "/limpieza-por-incendio-mazarron/", label: "Mazarrón" },
  // Castilla-La Mancha
  { href: "/limpieza-por-incendio-toledo/", label: "Toledo" },
  { href: "/limpieza-por-incendio-albacete/", label: "Albacete" },
  { href: "/limpieza-por-incendio-ciudad-real/", label: "Ciudad Real" },
  { href: "/limpieza-por-incendio-guadalajara/", label: "Guadalajara" },
  { href: "/limpieza-por-incendio-cuenca/", label: "Cuenca" },
  { href: "/limpieza-por-incendio-talavera-de-la-reina/", label: "Talavera de la Reina" },
  { href: "/limpieza-por-incendio-puertollano/", label: "Puertollano" },
  { href: "/limpieza-por-incendio-almansa/", label: "Almansa" },
  { href: "/limpieza-por-incendio-hellin/", label: "Hellín" },
  { href: "/limpieza-por-incendio-azuqueca-de-henares/", label: "Azuqueca de Henares" },
  // Andalucía
  { href: "/limpieza-por-incendio-sevilla/", label: "Sevilla" },
  { href: "/limpieza-por-incendio-malaga/", label: "Málaga" },
  { href: "/limpieza-por-incendio-granada/", label: "Granada" },
  { href: "/limpieza-por-incendio-cordoba/", label: "Córdoba" },
  { href: "/limpieza-por-incendio-almeria/", label: "Almería" },
  { href: "/limpieza-por-incendio-cadiz/", label: "Cádiz" },
  { href: "/limpieza-por-incendio-huelva/", label: "Huelva" },
  { href: "/limpieza-por-incendio-jaen/", label: "Jaén" },
  { href: "/limpieza-por-incendio-jerez-de-la-frontera/", label: "Jerez de la Frontera" },
  { href: "/limpieza-por-incendio-marbella/", label: "Marbella" },
  { href: "/limpieza-por-incendio-linares/", label: "Linares" },
  { href: "/limpieza-por-incendio-motril/", label: "Motril" },
  { href: "/limpieza-por-incendio-algeciras/", label: "Algeciras" },
  { href: "/limpieza-por-incendio-el-ejido/", label: "El Ejido" },
  { href: "/limpieza-por-incendio-dos-hermanas/", label: "Dos Hermanas" },
  { href: "/limpieza-por-incendio-alcala-de-guadaira/", label: "Alcalá de Guadaíra" },
  // Castilla y León
  { href: "/limpieza-por-incendio-valladolid/", label: "Valladolid" },
  { href: "/limpieza-por-incendio-salamanca/", label: "Salamanca" },
  { href: "/limpieza-por-incendio-burgos/", label: "Burgos" },
  { href: "/limpieza-por-incendio-leon/", label: "León" },
  { href: "/limpieza-por-incendio-palencia/", label: "Palencia" },
  { href: "/limpieza-por-incendio-zamora/", label: "Zamora" },
  { href: "/limpieza-por-incendio-segovia/", label: "Segovia" },
  { href: "/limpieza-por-incendio-avila/", label: "Ávila" },
  { href: "/limpieza-por-incendio-soria/", label: "Soria" },
  { href: "/limpieza-por-incendio-ponferrada/", label: "Ponferrada" },
  { href: "/limpieza-por-incendio-miranda-de-ebro/", label: "Miranda de Ebro" },
  // Aragón
  { href: "/limpieza-por-incendio-zaragoza/", label: "Zaragoza" },
  { href: "/limpieza-por-incendio-huesca/", label: "Huesca" },
  { href: "/limpieza-por-incendio-teruel/", label: "Teruel" },
  { href: "/limpieza-por-incendio-calatayud/", label: "Calatayud" },
  { href: "/limpieza-por-incendio-monzon/", label: "Monzón" },
  { href: "/limpieza-por-incendio-barbastro/", label: "Barbastro" },
  // Cataluña
  { href: "/limpieza-por-incendio-barcelona/", label: "Barcelona" },
  { href: "/limpieza-por-incendio-hospitalet-de-llobregat/", label: "L'Hospitalet de Llobregat" },
  { href: "/limpieza-por-incendio-badalona/", label: "Badalona" },
  { href: "/limpieza-por-incendio-terrassa/", label: "Terrassa" },
  { href: "/limpieza-por-incendio-sabadell/", label: "Sabadell" },
  { href: "/limpieza-por-incendio-lleida/", label: "Lleida" },
  { href: "/limpieza-por-incendio-tarragona/", label: "Tarragona" },
  { href: "/limpieza-por-incendio-girona/", label: "Girona" },
  { href: "/limpieza-por-incendio-mataro/", label: "Mataró" },
  { href: "/limpieza-por-incendio-santa-coloma-de-gramenet/", label: "Santa Coloma de Gramenet" },
  { href: "/limpieza-por-incendio-reus/", label: "Reus" },
  { href: "/limpieza-por-incendio-manresa/", label: "Manresa" },
];

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
                Recuperamos tu hogar o negocio tras un incendio. Hollín, humo, olores y daños estructurales. <strong>Valoración gratuita sin compromiso.</strong>
              </p>
              <div className="hero-chips">
                <span className="hero-chip"><span>✓</span> Valoración gratuita</span>
                <span className="hero-chip"><span>✓</span> Respuesta en 2h</span>
                <span className="hero-chip"><span>✓</span> Equipo especializado</span>
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
              <img
                src={HERO_IMG}
                alt="Equipo de Limpiezas Fénix restaurando una vivienda tras incendio"
                width="800"
                height="533"
                loading="eager"
              />
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
            <div className="stat-item"><span className="num">72h</span><span className="label">Actúa antes de que sea tarde</span></div>
          </div>
        </div>
      </div>

      {/* ===================== ALERTA 72H ===================== */}
      <div style={{ background: "var(--terra)", padding: "1.5rem 0" }}>
        <div className="container">
          <p style={{ textAlign: "center", color: "var(--white)", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "1.05rem", margin: 0 }}>
            ⚠️ <strong>Las primeras 72 horas son críticas.</strong> El hollín se fija en superficies y el olor a humo se vuelve permanente. Actúa ahora.
          </p>
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
                <img src={ANTES_DESPUES} alt="Antes y después de limpieza por incendio — resultado real de Limpiezas Fénix" width="700" height="420" loading="lazy" />
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
                {[
                  "Eliminación completa de hollín y humo",
                  "Neutralización permanente de olores",
                  "Restauración de superficies y materiales",
                  "Desinfección y saneamiento total",
                  "Informe técnico detallado del trabajo realizado",
                ].map((item) => (
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
                width="600"
                height="400"
                loading="lazy"
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
              <p className="cta-sub">Servicio urgente 24h · Valoración gratuita · Resultados visibles</p>
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
