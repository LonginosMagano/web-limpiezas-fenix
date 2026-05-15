/*
 * Header — Limpiezas Fénix
 * Filosofía: Resurgimiento Emocional — fondo carbón, logo horizontal, CTA naranja fuego
 * Sticky con blur, topbar de urgencia, menú hamburguesa fullscreen con blur
 */

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { href: "/limpieza-por-incendio/", label: "Servicio" },
  { href: "/limpieza-laser/", label: "Láser" },
  { href: "/limpieza-hielo-seco/", label: "Hielo Seco" },
  { href: "/blog/", label: "Blog" },
  { href: "/preguntas-frecuentes-limpieza-incendio/", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  function closeMobileMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? "hidden" : "";
  }

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Topbar urgencia */}
      <div className="topbar">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: "var(--fire)" }}>🔥</span>
              <strong>Servicio urgente 24h / 365 días</strong>
              <span style={{ color: "var(--gray)" }}>— Valoración gratuita sin compromiso</span>
            </span>
            <a
              href="tel:900XXXXXX"
              style={{ color: "var(--ember)", fontWeight: 700, letterSpacing: "0.04em" }}
            >
              ☎ 900 XXX XXX
            </a>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px", gap: "1rem" }}>
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/manus-storage/logo-fenix-horizontal_76dfd12f.png"
                alt="Limpiezas Fénix — Limpieza por Incendio"
                height={52}
                style={{ height: "52px", width: "auto", maxWidth: "220px" }}
              />
            </Link>

            {/* Navegación escritorio */}
            <nav className="nav-links" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "0.5rem 0.85rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: location === link.href ? "var(--ember)" : "var(--light)",
                    transition: "color 160ms, background 160ms",
                    background: location === link.href ? "rgba(255,69,0,0.1)" : "transparent",
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "var(--ember)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = location === link.href ? "var(--ember)" : "var(--light)"; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA escritorio */}
            <a
              href="tel:900XXXXXX"
              className="btn-fire"
              style={{ flexShrink: 0, fontSize: "0.9rem", padding: "0.65rem 1.25rem" }}
            >
              ☎ 900 XXX XXX
            </a>

            {/* Hamburguesa */}
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Abrir menú"
              style={{ display: "none" }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil fullscreen */}
      <div
        ref={menuRef}
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <button
          onClick={closeMobileMenu}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            background: "none",
            border: "none",
            color: "var(--light)",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          aria-label="Cerrar menú"
        >
          ✕
        </button>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
            {link.label}
          </Link>
        ))}
        <a
          href="tel:900XXXXXX"
          className="btn-fire"
          onClick={closeMobileMenu}
          style={{ marginTop: "1rem" }}
        >
          ☎ 900 XXX XXX
        </a>
      </div>
    </>
  );
}
