/*
 * Footer — Limpiezas Fénix v3 "Editorial Cálido"
 * Fondo charcoal, logo cuadrado, columnas de nav, contacto y legal
 * SIN: Láser, Hielo Seco (eliminados)
 */

import { Link } from "wouter";

const LOGO_SQ = "/manus-storage/logo_01_emblema_escudo_fenix_transparent_2fd6c62b.png";

const CITIES_FOOTER = [
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
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Columna marca */}
          <div>
            <div className="footer-logo">
              <Link href="/">
                <img src={LOGO_SQ} alt="Limpiezas de Incendios Fénix" />
              </Link>
            </div>
            <p className="footer-desc">
              Especialistas en limpieza y restauración tras incendios en toda España. Hollín, humo, olores y daños estructurales. Servicio urgente 24h/365 días.
            </p>
            <div className="footer-contact-item">
              <span>☎</span>
              <a href="tel:900XXXXXX">900 XXX XXX</a>
            </div>
            <div className="footer-contact-item">
              <span>💬</span>
              <a href="https://wa.me/34900XXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp urgente</a>
            </div>
            <div className="footer-contact-item">
              <span>✉</span>
              <a href="mailto:info@limpiezasincendiosfenix.es">info@limpiezasincendiosfenix.es</a>
            </div>
          </div>

          {/* Columna servicios */}
          <div className="footer-col">
            <h4>Servicios</h4>
            <ul>
              <li><Link href="/limpieza-por-incendio/">Limpieza por Incendio</Link></li>
              <li><Link href="/limpieza-por-incendio/#hollin">Eliminación de Hollín</Link></li>
              <li><Link href="/limpieza-por-incendio/#humo">Eliminación de Humo</Link></li>
              <li><Link href="/limpieza-por-incendio/#olores">Eliminación de Olores</Link></li>
              <li><Link href="/limpieza-por-incendio/#seguros">Gestión con Seguros</Link></li>
            </ul>
          </div>

          {/* Columna ciudades */}
          <div className="footer-col">
            <h4>Ciudades</h4>
            <ul>
              {CITIES_FOOTER.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Columna info */}
          <div className="footer-col">
            <h4>Información</h4>
            <ul>
              <li><Link href="/blog/">Blog</Link></li>
              <li><Link href="/preguntas-frecuentes-limpieza-incendio/">Preguntas Frecuentes</Link></li>
              <li><Link href="/privacidad/">Política de Privacidad</Link></li>
              <li><Link href="/cookies/">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Limpiezas de Incendios Fénix. Todos los derechos reservados.</span>
          <span>
            <Link href="/privacidad/">Privacidad</Link>
            {" · "}
            <Link href="/cookies/">Cookies</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
