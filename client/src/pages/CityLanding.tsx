/*
 * CityLanding — /limpieza-por-incendio-{ciudad}/
 * Landing local dinámica generada desde datos por ciudad
 * Cada ciudad tiene contenido único para SEO local
 */

import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Link } from "wouter";

// ── Datos por ciudad ───────────────────────────────────────────────────────

interface CityData {
  name: string;
  province: string;
  region: string;
  population: string;
  intro: string;
  neighborhoods: string[];
  nearbyTowns: string[];
  localFact: string;
  responseTime: string;
  testimonial: { name: string; text: string };
}

const CITIES: Record<string, CityData> = {
  madrid: {
    name: "Madrid",
    province: "Madrid",
    region: "Comunidad de Madrid",
    population: "3,3 millones",
    intro: "Madrid es la ciudad con mayor densidad de siniestros por incendio de España. Nuestro equipo en Madrid responde en menos de 2 horas en cualquier punto de la capital y municipios del área metropolitana.",
    neighborhoods: ["Salamanca", "Chamberí", "Retiro", "Carabanchel", "Vallecas", "Hortaleza", "Fuencarral", "Latina", "Arganzuela", "Tetuán"],
    nearbyTowns: ["Alcalá de Henares", "Getafe", "Leganés", "Alcorcón", "Móstoles", "Fuenlabrada", "Torrejón de Ardoz"],
    localFact: "Madrid concentra el 18% de todos los siniestros por incendio doméstico de España según los últimos datos del Consorcio de Compensación de Seguros.",
    responseTime: "menos de 2 horas",
    testimonial: {
      name: "María G. — Salamanca, Madrid",
      text: "Tras el incendio en nuestra cocina, Fénix llegó en menos de 2 horas. El resultado fue increíble: ni rastro de hollín ni olor. Gestionaron todo con el seguro. Totalmente recomendables.",
    },
  },
  barcelona: {
    name: "Barcelona",
    province: "Barcelona",
    region: "Cataluña",
    population: "1,6 millones",
    intro: "Barcelona y su área metropolitana cuentan con un equipo de Limpiezas Fénix disponible 24h. Intervenimos en toda la ciudad y los municipios del Barcelonès, Baix Llobregat y Vallès Occidental.",
    neighborhoods: ["Eixample", "Gràcia", "Sant Martí", "Sants-Montjuïc", "Nou Barris", "Sarrià-Sant Gervasi", "Horta-Guinardó", "Ciutat Vella"],
    nearbyTowns: ["L'Hospitalet de Llobregat", "Badalona", "Terrassa", "Sabadell", "Cornellà", "Sant Cugat del Vallès"],
    localFact: "El Eixample concentra el mayor número de incendios en viviendas antiguas de Barcelona, muchas de ellas con instalaciones eléctricas obsoletas.",
    responseTime: "menos de 2 horas",
    testimonial: {
      name: "Carlos M. — Eixample, Barcelona",
      text: "Incendio en el local de mi negocio. Pensé que lo había perdido todo. El equipo de Fénix trabajó durante dos días y lo dejaron impecable. El seguro cubrió el 100% gracias a su informe.",
    },
  },
  valencia: {
    name: "Valencia",
    province: "Valencia",
    region: "Comunitat Valenciana",
    population: "800.000",
    intro: "Valencia y su área metropolitana cuentan con un equipo de Limpiezas Fénix especializado en siniestros por incendio. Cubrimos toda la ciudad y los municipios de l'Horta.",
    neighborhoods: ["Ciutat Vella", "Eixample", "Extramurs", "Campanar", "La Saïdia", "El Pla del Real", "L'Olivereta", "Patraix", "Jesús", "Quatre Carreres"],
    nearbyTowns: ["Torrent", "Gandia", "Sagunto", "Paterna", "Mislata", "Burjassot", "Manises"],
    localFact: "Valencia registra un aumento del 12% en siniestros por incendio en los últimos 5 años, especialmente en el casco histórico con edificios de construcción antigua.",
    responseTime: "2-3 horas",
    testimonial: {
      name: "Ana R. — Ciutat Vella, Valencia",
      text: "Profesionales de verdad. Vinieron el mismo día que llamé, a las 11 de la noche. La limpieza láser en las paredes de piedra de mi casa antigua fue perfecta, sin dañar nada.",
    },
  },
  sevilla: {
    name: "Sevilla",
    province: "Sevilla",
    region: "Andalucía",
    population: "690.000",
    intro: "Sevilla y su área metropolitana cuentan con equipo de Limpiezas Fénix disponible 24h. Atendemos toda la provincia con especial cobertura en el Aljarafe y el área metropolitana.",
    neighborhoods: ["Triana", "Los Remedios", "Nervión", "Macarena", "Casco Antiguo", "Bellavista", "Heliópolis", "Palmete"],
    nearbyTowns: ["Dos Hermanas", "Alcalá de Guadaíra", "Mairena del Aljarafe", "San Juan de Aznalfarache", "Camas", "Bormujos"],
    localFact: "El casco histórico de Sevilla, con numerosos edificios del siglo XVIII y XIX, presenta un riesgo especial de propagación de incendios por sus estructuras de madera.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Javier L. — Triana, Sevilla",
      text: "Incendio en mi taller en el barrio de Triana. Fénix llegó rápido y el trabajo fue impecable. Muy profesionales y el trato fue excelente en un momento muy difícil.",
    },
  },
  malaga: {
    name: "Málaga",
    province: "Málaga",
    region: "Andalucía",
    population: "580.000",
    intro: "Málaga capital y la Costa del Sol cuentan con cobertura de Limpiezas Fénix 24h. Atendemos desde Marbella hasta Nerja, incluyendo toda la provincia.",
    neighborhoods: ["Centro Histórico", "El Palo", "Pedregalejo", "Teatinos", "Cruz de Humilladero", "Carretera de Cádiz", "Churriana"],
    nearbyTowns: ["Marbella", "Fuengirola", "Torremolinos", "Benalmádena", "Estepona", "Vélez-Málaga", "Nerja"],
    localFact: "La alta densidad turística de Málaga y la Costa del Sol genera una demanda especial de servicios de limpieza por incendio en hoteles, apartamentos y restaurantes.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Rosa P. — Centro, Málaga",
      text: "Incendio en el restaurante familiar. Fénix nos salvó el negocio. Limpiaron todo en un fin de semana y pudimos abrir el lunes. Increíble trabajo.",
    },
  },
  zaragoza: {
    name: "Zaragoza",
    province: "Zaragoza",
    region: "Aragón",
    population: "680.000",
    intro: "Zaragoza y su área metropolitana cuentan con equipo de Limpiezas Fénix disponible 24h. Cubrimos toda la provincia de Zaragoza y las provincias limítrofes de Huesca y Teruel.",
    neighborhoods: ["Casco Histórico", "Delicias", "Las Fuentes", "Torrero", "Oliver", "Miralbueno", "Casablanca", "Actur"],
    nearbyTowns: ["Utebo", "Cuarte de Huerva", "La Muela", "Ejea de los Caballeros", "Calatayud", "Huesca"],
    localFact: "Zaragoza es un importante nodo logístico e industrial de España, lo que genera una demanda significativa de servicios de limpieza por incendio en naves y almacenes.",
    responseTime: "2-3 horas",
    testimonial: {
      name: "Miguel A. — Delicias, Zaragoza",
      text: "Incendio eléctrico en nuestra oficina. Fénix llegó en pocas horas y el trabajo fue excelente. Muy recomendables para empresas que necesitan rapidez.",
    },
  },
  murcia: {
    name: "Murcia",
    province: "Murcia",
    region: "Región de Murcia",
    population: "460.000",
    intro: "Murcia y la Región de Murcia cuentan con cobertura de Limpiezas Fénix 24h. Atendemos toda la región, incluyendo Cartagena, Lorca y el Mar Menor.",
    neighborhoods: ["Centro", "El Carmen", "La Flota", "Espinardo", "El Palmar", "Beniaján", "Torreagüera"],
    nearbyTowns: ["Cartagena", "Lorca", "Molina de Segura", "Alcantarilla", "Yecla", "Jumilla", "Cieza"],
    localFact: "La Región de Murcia tiene una importante actividad agroindustrial que genera riesgos específicos de incendio en instalaciones de almacenamiento y procesado.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Laura S. — Centro, Murcia",
      text: "Muy profesionales. El incendio en nuestra nave fue devastador pero Fénix lo recuperó todo. El seguro cubrió los trabajos gracias a su informe detallado.",
    },
  },
  alicante: {
    name: "Alicante",
    province: "Alicante",
    region: "Comunitat Valenciana",
    population: "330.000",
    intro: "Alicante y la Costa Blanca cuentan con cobertura de Limpiezas Fénix 24h. Atendemos toda la provincia, desde Benidorm hasta Torrevieja.",
    neighborhoods: ["Centro", "Carolinas", "San Blas", "Benalúa", "Playa de San Juan", "El Cabo", "Vistahermosa"],
    nearbyTowns: ["Elche", "Benidorm", "Torrevieja", "Orihuela", "Villena", "Alcoy", "Denia"],
    localFact: "La alta concentración de apartamentos turísticos en la Costa Blanca genera una demanda especial de servicios de limpieza por incendio con plazos muy ajustados.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Pedro M. — Playa de San Juan, Alicante",
      text: "Incendio en el apartamento de alquiler. Fénix lo dejó como nuevo en 48 horas. Pudimos seguir con los alquileres sin perder la temporada. Excelente servicio.",
    },
  },
  valladolid: {
    name: "Valladolid",
    province: "Valladolid",
    region: "Castilla y León",
    population: "300.000",
    intro: "Valladolid y su área metropolitana cuentan con cobertura de Limpiezas Fénix. Atendemos toda la provincia y las provincias limítrofes de Castilla y León.",
    neighborhoods: ["Centro", "Parquesol", "Huerta del Rey", "Arturo Eyries", "La Victoria", "Delicias", "San Juan"],
    nearbyTowns: ["Laguna de Duero", "Arroyo de la Encomienda", "Medina del Campo", "Tordesillas", "Palencia"],
    localFact: "Valladolid alberga importantes instalaciones industriales del sector del automóvil que requieren servicios especializados de limpieza por incendio.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Carmen F. — Centro, Valladolid",
      text: "El incendio en nuestra vivienda fue muy duro. Fénix llegó rápido y nos acompañaron en todo el proceso. Muy profesionales y humanos.",
    },
  },
  toledo: {
    name: "Toledo",
    province: "Toledo",
    region: "Castilla-La Mancha",
    population: "85.000",
    intro: "Toledo y su provincia cuentan con cobertura de Limpiezas Fénix 24h. Especialistas en inmuebles históricos del casco antiguo de Toledo, Patrimonio de la Humanidad.",
    neighborhoods: ["Casco Histórico", "Santa Bárbara", "Palomarejos", "Buenavista", "La Legua"],
    nearbyTowns: ["Talavera de la Reina", "Illescas", "Seseña", "Consuegra", "Ocaña", "Madridejos"],
    localFact: "Toledo, Patrimonio de la Humanidad, requiere técnicas especializadas de limpieza láser para sus edificios históricos, donde los métodos convencionales podrían causar daños irreparables.",
    responseTime: "2-3 horas",
    testimonial: {
      name: "Antonio R. — Casco Histórico, Toledo",
      text: "Incendio en un edificio del siglo XVI. Fénix fue la única empresa que supo cómo tratar las paredes de piedra sin dañarlas. Trabajo excelente.",
    },
  },
  granada: {
    name: "Granada",
    province: "Granada",
    region: "Andalucía",
    population: "230.000",
    intro: "Granada y su área metropolitana cuentan con cobertura de Limpiezas Fénix 24h. Especialistas en el tratamiento de inmuebles históricos del Albaicín y el casco antiguo.",
    neighborhoods: ["Albaicín", "Centro", "Zaidín", "Genil", "Chana", "Ronda", "Beiro", "Norte"],
    nearbyTowns: ["Armilla", "Albolote", "Maracena", "Motril", "Guadix", "Baza"],
    localFact: "El barrio del Albaicín, Patrimonio de la Humanidad, concentra edificios históricos de gran valor que requieren técnicas especializadas de limpieza láser tras incendios.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Isabel M. — Albaicín, Granada",
      text: "Incendio en una casa del Albaicín. Fénix trató las paredes de adobe y madera con una delicadeza increíble. El resultado fue perfecto. Muy recomendables.",
    },
  },
  cordoba: {
    name: "Córdoba",
    province: "Córdoba",
    region: "Andalucía",
    population: "325.000",
    intro: "Córdoba y su provincia cuentan con cobertura de Limpiezas Fénix 24h. Especialistas en el tratamiento de inmuebles históricos del casco antiguo, Patrimonio de la Humanidad.",
    neighborhoods: ["Casco Histórico", "El Brillante", "Ciudad Jardín", "Sector Sur", "Poniente Norte", "Levante"],
    nearbyTowns: ["Lucena", "Montilla", "Puente Genil", "Priego de Córdoba", "Peñarroya-Pueblonuevo"],
    localFact: "Córdoba, con su casco histórico declarado Patrimonio de la Humanidad, requiere un tratamiento especialmente delicado en la limpieza de inmuebles afectados por incendio.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Francisco J. — Casco Histórico, Córdoba",
      text: "Incendio en un patio andaluz histórico. Fénix respetó todos los materiales originales y el resultado fue impresionante. Profesionalidad total.",
    },
  },
  bilbao: {
    name: "Bilbao",
    province: "Vizcaya",
    region: "País Vasco",
    population: "350.000",
    intro: "Bilbao y el Gran Bilbao cuentan con cobertura de Limpiezas Fénix 24h. Atendemos toda Vizcaya y el área metropolitana de Bilbao.",
    neighborhoods: ["Casco Viejo", "Ensanche", "Deusto", "Begoña", "Recaldeberri", "Basurto", "Uribarri", "Txurdinaga"],
    nearbyTowns: ["Barakaldo", "Getxo", "Santurtzi", "Basauri", "Leioa", "Erandio", "Sestao"],
    localFact: "El Gran Bilbao concentra importantes instalaciones industriales y portuarias que requieren servicios especializados de limpieza por incendio con protocolos de seguridad específicos.",
    responseTime: "2-3 horas",
    testimonial: {
      name: "Iker Z. — Ensanche, Bilbao",
      text: "Incendio en un edificio de oficinas del Ensanche. Fénix coordinó perfectamente con el seguro y los trabajos fueron impecables. Muy profesionales.",
    },
  },
  "san-sebastian": {
    name: "San Sebastián",
    province: "Guipúzcoa",
    region: "País Vasco",
    population: "190.000",
    intro: "San Sebastián y Guipúzcoa cuentan con cobertura de Limpiezas Fénix 24h. Atendemos toda la provincia y el área de influencia de la capital guipuzcoana.",
    neighborhoods: ["Parte Vieja", "Centro", "Gros", "Amara", "Egia", "Intxaurrondo", "Aiete", "Igeldo"],
    nearbyTowns: ["Irún", "Rentería", "Hernani", "Andoain", "Tolosa", "Zarautz", "Eibar"],
    localFact: "San Sebastián, con su importante actividad hostelera y turística, requiere servicios de limpieza por incendio con plazos muy ajustados para minimizar el impacto en el negocio.",
    responseTime: "2-3 horas",
    testimonial: {
      name: "Amaia E. — Gros, San Sebastián",
      text: "Incendio en nuestro restaurante. Fénix llegó en pocas horas y pudimos reabrir en tiempo récord. Excelente trabajo y muy buena coordinación con el seguro.",
    },
  },
  pamplona: {
    name: "Pamplona",
    province: "Navarra",
    region: "Comunidad Foral de Navarra",
    population: "210.000",
    intro: "Pamplona y la Comunidad Foral de Navarra cuentan con cobertura de Limpiezas Fénix 24h. Atendemos toda Navarra con equipo propio.",
    neighborhoods: ["Casco Antiguo", "Ensanche", "Iturrama", "San Juan", "Rochapea", "Txantrea", "Milagrosa"],
    nearbyTowns: ["Tudela", "Estella", "Tafalla", "Barañáin", "Burlada", "Villava", "Zizur Mayor"],
    localFact: "Navarra tiene una importante actividad industrial y agroalimentaria que genera riesgos específicos de incendio en instalaciones de producción y almacenamiento.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Jon A. — Ensanche, Pamplona",
      text: "Incendio en nuestra nave de producción. Fénix utilizó hielo seco para limpiar la maquinaria sin desmontarla. Volvimos a producir en 48 horas. Increíble.",
    },
  },
  logrono: {
    name: "Logroño",
    province: "La Rioja",
    region: "La Rioja",
    population: "155.000",
    intro: "Logroño y La Rioja cuentan con cobertura de Limpiezas Fénix 24h. Atendemos toda la comunidad autónoma, incluyendo las bodegas y explotaciones agrícolas de la región.",
    neighborhoods: ["Casco Antiguo", "Ensanche", "Siete Infantes", "El Cubo", "Madre de Dios", "Yagüe"],
    nearbyTowns: ["Calahorra", "Arnedo", "Haro", "Nájera", "Alfaro", "Santo Domingo de la Calzada"],
    localFact: "La Rioja, con su importante industria vitivinícola, requiere servicios especializados de limpieza por incendio en bodegas y naves de almacenamiento de vino.",
    responseTime: "2-4 horas",
    testimonial: {
      name: "Beatriz N. — Casco Antiguo, Logroño",
      text: "Incendio en nuestra bodega. Fénix salvó parte de la cosecha y limpió las instalaciones con un cuidado especial. Muy recomendables para el sector vitivinícola.",
    },
  },
};

// Ciudad por defecto si no se encuentra en el mapa
const DEFAULT_CITY: CityData = {
  name: "España",
  province: "España",
  region: "España",
  population: "47 millones",
  intro: "Limpiezas Fénix opera en toda España con equipos locales en las principales ciudades. Servicio urgente 24h/365 para cualquier tipo de siniestro por incendio.",
  neighborhoods: [],
  nearbyTowns: [],
  localFact: "España registra más de 100.000 incendios domésticos al año según los datos del Consorcio de Compensación de Seguros.",
  responseTime: "2-4 horas",
  testimonial: {
    name: "Cliente satisfecho",
    text: "Servicio excelente. Llegaron rápido y el resultado fue perfecto. Muy recomendables.",
  },
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

export default function CityLanding({ ciudad }: { ciudad: string }) {
  const cityKey = ciudad.toLowerCase().replace(/-/g, "-");
  const city = CITIES[cityKey] || { ...DEFAULT_CITY, name: ciudad.charAt(0).toUpperCase() + ciudad.slice(1).replace(/-/g, " ") };

  const faqs = [
    {
      q: `¿Cuánto tarda Limpiezas Fénix en llegar a ${city.name}?`,
      a: `Nuestro tiempo de respuesta habitual en ${city.name} es de ${city.responseTime}. Operamos 24 horas al día, 365 días al año, incluyendo festivos y fines de semana.`,
    },
    {
      q: `¿Trabajan en todos los barrios de ${city.name}?`,
      a: `Sí, cubrimos todos los barrios de ${city.name}${city.neighborhoods.length > 0 ? `, incluyendo ${city.neighborhoods.slice(0, 4).join(", ")} y muchos más` : ""}. También atendemos los municipios del área metropolitana.`,
    },
    {
      q: `¿El seguro cubre la limpieza por incendio en ${city.name}?`,
      a: `En la mayoría de los casos, sí. Trabajamos con todas las aseguradoras que operan en ${city.region}. Elaboramos el informe pericial y coordinamos directamente con tu aseguradora.`,
    },
    {
      q: `¿Tienen experiencia con edificios históricos en ${city.name}?`,
      a: `Sí. Contamos con técnicas especializadas, incluyendo limpieza láser, para edificios históricos y patrimonio cultural. Hemos trabajado en numerosos inmuebles catalogados en ${city.name} y ${city.province}.`,
    },
  ];

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Limpiezas Fénix ${city.name}`,
    description: `Empresa especializada en limpieza por incendio en ${city.name}. Servicio urgente 24h/365.`,
    url: `https://limpiezaincendiosfenix.es/limpieza-por-incendio-${ciudad}/`,
    areaServed: city.name,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
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
      { "@type": "ListItem", position: 3, name: `Limpieza por Incendio en ${city.name}`, item: `https://limpiezaincendiosfenix.es/limpieza-por-incendio-${ciudad}/` },
    ],
  };

  return (
    <>
      <SEOHead
        title={`Limpieza por Incendio en ${city.name} | Urgente 24h — Limpiezas Fénix`}
        description={`Limpieza por incendio en ${city.name}. Servicio urgente 24h/365. Hollín, humo, olores. Valoración gratuita. Tu seguro puede cubrir el 100%. ☎ 900 XXX XXX`}
        canonical={`https://limpiezaincendiosfenix.es/limpieza-por-incendio-${ciudad}/`}
        schema={[schemaLocalBusiness, schemaFAQ, schemaBreadcrumb]}
      />

      {/* Hero */}
      <section style={{ background: "var(--ash)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/limpieza-por-incendio/">Limpieza por Incendio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>{city.name}</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: "3rem", alignItems: "start" }}>
            <div>
              <span className="badge-fire" style={{ marginBottom: "1rem", display: "inline-flex" }}>📍 {city.name}, {city.province}</span>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4.5vw, 4rem)", color: "var(--light)", marginBottom: "1.25rem" }}>
                Limpieza por Incendio<br />
                en <span style={{ color: "var(--fire)" }}>{city.name}</span>
              </h1>
              <p style={{ fontSize: "1.05rem", color: "var(--gray)", lineHeight: 1.75, marginBottom: "1rem" }}>
                {city.intro}
              </p>
              <div style={{ background: "rgba(255,69,0,0.08)", border: "1px solid rgba(255,69,0,0.15)", borderRadius: "0.5rem", padding: "1rem 1.25rem", marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--fire)", fontSize: "1.1rem" }}>⏱️</span>
                  <span style={{ color: "var(--light)", fontSize: "0.95rem" }}>
                    <strong>Tiempo de respuesta en {city.name}:</strong> {city.responseTime}
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="tel:900XXXXXX" className="btn-fire">☎ Llamar ahora</a>
                <a href="https://wa.me/34900XXXXXX" className="btn-wa" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            </div>
            <div style={{ background: "var(--ash2)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.75rem", padding: "2rem" }}>
              <ContactForm title={`Valoración gratuita en ${city.name}`} subtitle="Sin compromiso · Respuesta en 24h" />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido local */}
      <section style={{ padding: "4rem 0", background: "var(--coal)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }}>
            <div>
              {/* Dato local */}
              <div style={{ background: "rgba(255,69,0,0.06)", border: "1px solid rgba(255,69,0,0.15)", borderRadius: "0.5rem", padding: "1.25rem 1.5rem", marginBottom: "2rem" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", color: "var(--fire)", marginBottom: "0.4rem" }}>
                  📊 Dato local
                </div>
                <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{city.localFact}</p>
              </div>

              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--light)", marginBottom: "1rem" }}>
                Nuestros servicios en {city.name}
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  `Limpieza de hollín y humo en viviendas de ${city.name}`,
                  `Eliminación de olores a humo en ${city.name}`,
                  `Limpieza láser en edificios históricos de ${city.name}`,
                  `Limpieza con hielo seco en industrias de ${city.province}`,
                  `Rehabilitación de inmuebles tras incendio en ${city.name}`,
                  `Gestión del seguro de incendio en ${city.region}`,
                  `Incendios industriales en naves de ${city.province}`,
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.6rem", color: "var(--gray)", fontSize: "0.95rem" }}>
                    <span style={{ color: "var(--fire)", flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Barrios */}
              {city.neighborhoods.length > 0 && (
                <>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--light)", marginBottom: "1rem" }}>
                    Barrios de {city.name} donde operamos
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                    {city.neighborhoods.map((n) => (
                      <span key={n} style={{ background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "999px", padding: "0.3rem 0.85rem", fontSize: "0.85rem", color: "var(--gray)" }}>
                        {n}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Municipios cercanos */}
              {city.nearbyTowns.length > 0 && (
                <>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--light)", marginBottom: "1rem" }}>
                    También cubrimos
                  </h2>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                    {city.nearbyTowns.map((t) => (
                      <span key={t} style={{ background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "999px", padding: "0.3rem 0.85rem", fontSize: "0.85rem", color: "var(--gray)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {/* Testimonial */}
              <div className="testimonial-card" style={{ marginBottom: "2rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} style={{ color: "var(--gold)" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1rem" }}>
                  "{city.testimonial.text}"
                </p>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "var(--light)" }}>{city.testimonial.name}</div>
              </div>

              {/* FAQ */}
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "var(--light)", marginBottom: "1.25rem" }}>
                Preguntas frecuentes sobre limpieza por incendio en {city.name}
              </h2>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: "90px", alignSelf: "start" }}>
              <div style={{ background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "0.5rem", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", color: "var(--light)", marginBottom: "1rem" }}>
                  Servicios en {city.name}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li><Link href="/limpieza-por-incendio/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Limpieza por Incendio</Link></li>
                  <li><Link href="/limpieza-laser/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Limpieza Láser</Link></li>
                  <li><Link href="/limpieza-hielo-seco/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Limpieza Hielo Seco</Link></li>
                  <li><Link href="/preguntas-frecuentes-limpieza-incendio/" style={{ color: "var(--ember)", fontSize: "0.95rem" }}>→ Preguntas Frecuentes</Link></li>
                </ul>
              </div>
              <div style={{ background: "rgba(255,69,0,0.08)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.5rem", padding: "1.5rem" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: "var(--fire)", marginBottom: "0.5rem" }}>24h / 365</div>
                <p style={{ color: "var(--gray)", fontSize: "0.9rem", marginBottom: "1rem" }}>Servicio urgente en {city.name}</p>
                <a href="tel:900XXXXXX" className="btn-fire" style={{ width: "100%", justifyContent: "center" }}>
                  ☎ 900 XXX XXX
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
