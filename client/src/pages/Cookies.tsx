/*
 * Cookies — /cookies/
 * v3 "Editorial Cálido" — Playfair Display + Lato, crema/terracota/pizarra
 */

import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

const tdStyle = { padding: "0.6rem 0.75rem", color: "var(--slate2)", fontSize: "0.85rem", border: "1px solid var(--beige)", fontFamily: "'Lato', sans-serif" };
const thStyle = { padding: "0.6rem 0.75rem", textAlign: "left" as const, color: "var(--charcoal)", fontSize: "0.85rem", border: "1px solid var(--beige)", fontFamily: "'Lato', sans-serif", fontWeight: 700, background: "var(--cream2)" };

export default function Cookies() {
  return (
    <>
      <SEOHead
        title="Política de Cookies — Limpiezas Fénix"
        description="Política de cookies de Limpiezas Fénix conforme a la LSSI y el RGPD. Información sobre los tipos de cookies utilizadas y cómo gestionarlas."
        canonical="https://limpiezadeincendiosfenix.es/cookies/"
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--terra)" }}>Política de Cookies</span>
          </nav>
          <h1 className="page-hero-title">Política de <em>Cookies</em></h1>
          <p style={{ color: "var(--slate-light)", fontSize: "0.85rem", fontFamily: "'Lato', sans-serif" }}>Última actualización: enero de 2025</p>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="prose-fenix" style={{ maxWidth: "760px" }}>
            <h2>¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar tus preferencias, analizar el tráfico del sitio y mejorar la experiencia de usuario.</p>

            <h2>Tipos de cookies que utilizamos</h2>

            <h3>Cookies técnicas (necesarias)</h3>
            <p>Son imprescindibles para el funcionamiento del sitio web. Permiten navegar por la web y utilizar sus funcionalidades básicas. No requieren consentimiento.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Cookie</th>
                  <th style={thStyle}>Finalidad</th>
                  <th style={thStyle}>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>fenix_cookies</td>
                  <td style={tdStyle}>Guarda la preferencia de aceptación de cookies</td>
                  <td style={tdStyle}>1 año</td>
                </tr>
              </tbody>
            </table>

            <h3>Cookies analíticas</h3>
            <p>Nos permiten conocer el comportamiento de los usuarios en el sitio web para mejorar su funcionamiento. Requieren consentimiento.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Cookie</th>
                  <th style={thStyle}>Proveedor</th>
                  <th style={thStyle}>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>_ga, _gid</td>
                  <td style={tdStyle}>Google Analytics</td>
                  <td style={tdStyle}>2 años / 24h</td>
                </tr>
              </tbody>
            </table>

            <h2>Cómo gestionar las cookies</h2>
            <p>Puedes gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar algunas cookies puede afectar al funcionamiento del sitio web.</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            </ul>

            <h2>Más información</h2>
            <p>Para más información sobre el tratamiento de tus datos, consulta nuestra <Link href="/privacidad/">Política de Privacidad</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
