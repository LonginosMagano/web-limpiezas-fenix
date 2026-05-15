/*
 * Cookies — /cookies/
 * Política de cookies conforme a LSSI y RGPD
 */

import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

export default function Cookies() {
  return (
    <>
      <SEOHead
        title="Política de Cookies — Limpiezas Fénix"
        description="Política de cookies de Limpiezas Fénix conforme a la LSSI y el RGPD. Información sobre los tipos de cookies utilizadas y cómo gestionarlas."
        canonical="https://limpiezaincendiosfenix.es/cookies/"
      />
      <section style={{ background: "var(--ash)", padding: "3rem 0 2rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>Política de Cookies</span>
          </nav>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2.5rem", color: "var(--light)", marginBottom: "0.5rem" }}>
            Política de <span style={{ color: "var(--fire)" }}>Cookies</span>
          </h1>
          <p style={{ color: "var(--muted-text)", fontSize: "0.85rem" }}>Última actualización: enero de 2025</p>
        </div>
      </section>
      <section style={{ padding: "3rem 0 5rem", background: "var(--coal)" }}>
        <div className="container">
          <div className="legal-content" style={{ maxWidth: "760px" }}>
            <h2>¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan para recordar tus preferencias, analizar el tráfico del sitio y mejorar la experiencia de usuario.</p>

            <h2>Tipos de cookies que utilizamos</h2>

            <h3>Cookies técnicas (necesarias)</h3>
            <p>Son imprescindibles para el funcionamiento del sitio web. Permiten navegar por la web y utilizar sus funcionalidades básicas. No requieren consentimiento.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
              <thead>
                <tr style={{ background: "var(--ash2)" }}>
                  <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "var(--light)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Cookie</th>
                  <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "var(--light)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Finalidad</th>
                  <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "var(--light)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.6rem 0.75rem", color: "var(--gray)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>fenix_cookies</td>
                  <td style={{ padding: "0.6rem 0.75rem", color: "var(--gray)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Guarda la preferencia de aceptación de cookies</td>
                  <td style={{ padding: "0.6rem 0.75rem", color: "var(--gray)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>1 año</td>
                </tr>
              </tbody>
            </table>

            <h3>Cookies analíticas</h3>
            <p>Nos permiten conocer el comportamiento de los usuarios en el sitio web para mejorar su funcionamiento. Requieren consentimiento.</p>
            <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "1.5rem" }}>
              <thead>
                <tr style={{ background: "var(--ash2)" }}>
                  <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "var(--light)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Cookie</th>
                  <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "var(--light)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Proveedor</th>
                  <th style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "var(--light)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Duración</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.6rem 0.75rem", color: "var(--gray)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>_ga, _gid</td>
                  <td style={{ padding: "0.6rem 0.75rem", color: "var(--gray)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>Google Analytics</td>
                  <td style={{ padding: "0.6rem 0.75rem", color: "var(--gray)", fontSize: "0.85rem", border: "1px solid var(--border-subtle)" }}>2 años / 24h</td>
                </tr>
              </tbody>
            </table>

            <h2>Cómo gestionar las cookies</h2>
            <p>Puedes gestionar las cookies a través de la configuración de tu navegador. Ten en cuenta que deshabilitar algunas cookies puede afectar al funcionamiento del sitio web.</p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ember)" }}>Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ember)" }}>Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: "var(--ember)" }}>Safari</a></li>
            </ul>

            <h2>Más información</h2>
            <p>Para más información sobre el tratamiento de tus datos, consulta nuestra <Link href="/privacidad/">Política de Privacidad</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
