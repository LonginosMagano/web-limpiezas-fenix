/*
 * CookieBanner — Limpiezas Fénix
 * Banner de cookies LGPD/LSSI con cookie de consentimiento
 */

import { useEffect, useState } from "react";
import { Link } from "wouter";

function getCookie(name: string) {
  return document.cookie.split(";").some((c) => c.trim().startsWith(name + "="));
}

function setCookie(name: string, value: string, days: number) {
  const maxAge = days * 24 * 60 * 60;
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookie("cookie_consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    setCookie("cookie_consent", "1", 365);
    setVisible(false);
  }

  function necessary() {
    setCookie("cookie_consent", "necessary", 365);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies">
      <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--gray)", flex: 1 }}>
        Usamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico.{" "}
        <Link href="/cookies/" style={{ color: "var(--ember)", textDecoration: "underline" }}>
          Más información
        </Link>
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button
          onClick={necessary}
          style={{
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "var(--gray)",
            borderRadius: "0.375rem",
            padding: "0.5rem 1rem",
            fontSize: "0.85rem",
            cursor: "pointer",
          }}
        >
          Solo necesarias
        </button>
        <button
          id="cookieOk"
          onClick={accept}
          className="btn-fire"
          style={{ padding: "0.5rem 1.25rem", fontSize: "0.85rem" }}
        >
          Aceptar todas
        </button>
      </div>
    </div>
  );
}
