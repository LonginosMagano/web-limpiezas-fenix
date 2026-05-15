/*
 * Header — Limpiezas Fénix v3 "Editorial Cálido"
 * Fondo blanco, nav pizarra, acento terracota, logo horizontal
 * SIN: Láser, Hielo Seco (eliminados por petición del cliente)
 */

import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const LOGO_H = "/manus-storage/logo_fenix_horizontal_header_8f6aef89.png";
const LOGO_SQ = "/manus-storage/logo_01_emblema_escudo_fenix_transparent_2fd6c62b.png";

const NAV_LINKS = [
  { href: "/limpieza-por-incendio/", label: "Servicio" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes-limpieza-incendio/", label: "FAQ" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location]);

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setMenuOpen(false); document.body.style.overflow = ""; }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Topbar */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner">
            <span>⚡ Servicio urgente 24h / 365 días — Valoración gratuita sin compromiso</span>
            <a href="tel:900XXXXXX">☎ 900 XXX XXX</a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className="site-header">
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <Link href="/" className="header-logo" aria-label="Inicio">
              <img
                src={LOGO_H}
                alt="Limpiezas de Incendios Fénix"
                onError={(e) => { (e.target as HTMLImageElement).src = LOGO_SQ; }}
              />
            </Link>

            {/* Nav escritorio */}
            <nav aria-label="Navegación principal">
              <ul className={`header-nav${menuOpen ? " open" : ""}`}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ color: location === link.href ? "var(--terra)" : undefined }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href="tel:900XXXXXX" className="btn-terra" style={{ padding: "0.55rem 1.25rem", fontSize: "0.82rem" }}>
                    ☎ Llamar ahora
                  </a>
                </li>
              </ul>
            </nav>

            {/* Hamburguesa */}
            <button
              className="hamburger"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
