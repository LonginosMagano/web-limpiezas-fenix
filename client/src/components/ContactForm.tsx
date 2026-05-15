/*
 * ContactForm — Limpiezas Fénix
 * Formulario de contacto con fetch() sin recarga, validación inline
 */

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function ContactForm({ title, subtitle, dark = true }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [form, setForm] = useState({ nombre: "", poblacion: "", telefono: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(form).toString(),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", poblacion: "", telefono: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const bg = dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const borderColor = dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)";
  const textColor = dark ? "var(--light)" : "#1a1a1a";
  const placeholderStyle = dark ? "rgba(242,237,228,0.35)" : "rgba(0,0,0,0.35)";

  return (
    <div>
      {title && (
        <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", color: dark ? "var(--light)" : "#1a1a1a", marginBottom: "0.25rem", letterSpacing: "0.03em" }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ color: dark ? "var(--gray)" : "rgba(0,0,0,0.55)", fontSize: "0.95rem", marginBottom: "1.25rem" }}>
          {subtitle}
        </p>
      )}

      {status === "ok" ? (
        <div style={{
          background: "rgba(40,199,111,0.12)",
          border: "1px solid rgba(40,199,111,0.3)",
          borderRadius: "0.5rem",
          padding: "1.5rem",
          textAlign: "center",
          color: "var(--green)"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✓</div>
          <strong>¡Solicitud recibida!</strong>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.95rem", color: dark ? "var(--gray)" : "rgba(0,0,0,0.6)" }}>
            Nos pondremos en contacto contigo en menos de 24 horas para valorar tu caso sin compromiso.
          </p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            autoComplete="name"
            value={form.nombre}
            onChange={handleChange}
            style={{ background: bg, borderColor, color: textColor }}
          />
          <input
            type="text"
            name="poblacion"
            placeholder="Municipio del siniestro"
            required
            autoComplete="address-level2"
            value={form.poblacion}
            onChange={handleChange}
            style={{ background: bg, borderColor, color: textColor }}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Tu teléfono"
            required
            autoComplete="tel"
            value={form.telefono}
            onChange={handleChange}
            style={{ background: bg, borderColor, color: textColor }}
          />

          {status === "error" && (
            <p style={{ color: "var(--fire)", fontSize: "0.9rem", margin: 0 }}>
              Ha ocurrido un error. Por favor, llámanos directamente al <strong>900 XXX XXX</strong>.
            </p>
          )}

          <button
            type="submit"
            className="btn-fire"
            disabled={status === "loading"}
            style={{ justifyContent: "center", opacity: status === "loading" ? 0.7 : 1 }}
          >
            {status === "loading" ? "Enviando..." : "SOLICITAR VALORACIÓN GRATUITA"}
          </button>

          <p style={{ fontSize: "0.78rem", color: dark ? "var(--gray)" : "rgba(0,0,0,0.45)", textAlign: "center", margin: 0 }}>
            Sin compromiso · Respuesta en menos de 24h · Tu seguro puede cubrir el 100%
          </p>
        </form>
      )}
    </div>
  );
}
