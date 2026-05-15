/*
 * Footer — Limpiezas Fénix v2 "Tecnología y Confianza"
 * Paleta: Azul petróleo (#0D1B2A) + Cian eléctrico (#00D4FF) + Blanco (#F8FAFC)
 */

import { Link } from "wouter";

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
    <footer style={{ background: "var(--navy)", borderTop: "1px solid var(--border-subtle)", paddingTop: "3.5rem", paddingBottom: "2rem" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "2.5rem",
          marginBottom: "2.5rem"
        }}>
          {/* Columna marca */}
          <div>
            <Link href="/">
              <img
                src="/manus-storage/logo-fenix-horizontal_76dfd12f.png"
                alt="Limpiezas Fénix"
                height={48}
                style={{ height: "48px", width: "auto", marginBottom: "1rem" }}
              />
            </Link>
            <p style={{ color: "var(--mist)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem", fontFamily: "'Outfit', sans-serif" }}>
              Empresa especializada en limpieza por incendio y rehabilitación tras siniestros en España. Servicio urgente 24h / 365 días.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a href="tel:900XXXXXX" style={{ color: "var(--cyan)", fontWeight: 700, fontSize: "1.05rem", fontFamily: "'Outfit', sans-serif" }}>
                ☎ 900 XXX XXX
              </a>
              <a href="mailto:info@limpiezaincendiosfenix.es" style={{ color: "var(--mist)", fontSize: "0.9rem", fontFamily: "'Outfit', sans-serif" }}>
                info@limpiezaincendiosfenix.es
              </a>
              <a
                href="https://wa.me/34900XXXXXX?text=Hola%2C%20necesito%20ayuda%20urgente%20tras%20un%20incendio"
                style={{ color: "var(--green)", fontWeight: 600, fontSize: "0.9rem", fontFamily: "'Outfit', sans-serif" }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Columna servicios */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 800, color: "var(--white)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Servicios
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["/limpieza-por-incendio/", "Limpieza por Incendio"],
                ["/limpieza-laser/", "Limpieza Láser"],
                ["/limpieza-hielo-seco/", "Limpieza Hielo Seco"],
                ["/preguntas-frecuentes-limpieza-incendio/", "Preguntas Frecuentes"],
                ["/blog/", "Blog"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "var(--mist)", fontSize: "0.9rem", transition: "color 160ms", fontFamily: "'Outfit', sans-serif" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--cyan)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--mist)"; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna ciudades */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 800, color: "var(--white)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Ciudades
            </h4>
            <ul style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.4rem 1rem"
            }}>
              {CITIES_FOOTER.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "var(--mist)", fontSize: "0.85rem", transition: "color 160ms", fontFamily: "'Outfit', sans-serif" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--cyan)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--mist)"; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna legal */}
          <div>
            <h4 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1rem", fontWeight: 800, color: "var(--white)", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["/privacidad/", "Política de Privacidad"],
                ["/cookies/", "Política de Cookies"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: "var(--mist)", fontSize: "0.9rem", transition: "color 160ms", fontFamily: "'Outfit', sans-serif" }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--cyan)"; }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "var(--mist)"; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "1.5rem" }}>
              <span className="badge-green">✓ Tu seguro puede cubrir el 100%</span>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
          <p style={{ color: "var(--ghost)", fontSize: "0.82rem", margin: 0, fontFamily: "'Outfit', sans-serif" }}>
            © {new Date().getFullYear()} Limpiezas Fénix · limpiezaincendiosfenix.es · Todos los derechos reservados
          </p>
          <p style={{ color: "var(--ghost)", fontSize: "0.82rem", margin: 0, fontFamily: "'Outfit', sans-serif" }}>
            Servicio urgente 24h / 365 días · España
          </p>
        </div>
      </div>
    </footer>
  );
}
