/*
 * FloatingCTAs — Limpiezas Fénix
 * Botones flotantes en escritorio, barra fija en móvil
 */

export default function FloatingCTAs() {
  return (
    <>
      {/* Botones flotantes — solo escritorio */}
      <div className="float-buttons">
        <a
          href="tel:900XXXXXX"
          className="float-btn float-btn-call"
          title="Llamar ahora"
          aria-label="Llamar a Limpiezas Fénix"
        >
          🔥
        </a>
        <a
          href="https://wa.me/34900XXXXXX?text=Hola%2C%20necesito%20ayuda%20urgente%20tras%20un%20incendio"
          className="float-btn float-btn-wa"
          title="WhatsApp"
          aria-label="Contactar por WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬
        </a>
      </div>

      {/* Barra CTA — solo móvil */}
      <div className="mobile-cta-bar" role="navigation" aria-label="Acciones rápidas">
        <a href="tel:900XXXXXX" className="mobile-cta-call">
          📞 Llamar ahora
        </a>
        <a
          href="https://wa.me/34900XXXXXX?text=Hola%2C%20necesito%20ayuda%20urgente%20tras%20un%20incendio"
          className="mobile-cta-wa"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
