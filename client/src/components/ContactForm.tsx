/*
 * ContactForm — Limpiezas Fénix v2 "Tecnología y Confianza"
 * Paleta: Azul petróleo + Cian eléctrico + Verde esmeralda
 */

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ title, subtitle }: ContactFormProps) {
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

  return (
    <div>
      {title && (
        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.3rem", fontWeight: 800, color: "var(--white)", marginBottom: "0.25rem" }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ color: "var(--ghost)", fontSize: "0.85rem", marginBottom: "1.25rem", fontFamily: "'Outfit', sans-serif" }}>
          {subtitle}
        </p>
      )}

      {status === "ok" ? (
        <div style={{
          background: "rgba(0,230,118,0.08)",
          border: "1px solid rgba(0,230,118,0.3)",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>✅</div>
          <strong style={{ color: "var(--green)", fontFamily: "'Syne', sans-serif" }}>¡Solicitud recibida!</strong>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.9rem", color: "var(--mist)", fontFamily: "'Outfit', sans-serif" }}>
            Nos pondremos en contacto contigo en menos de 24 horas.
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
          />
          <input
            type="text"
            name="poblacion"
            placeholder="Municipio del siniestro"
            required
            autoComplete="address-level2"
            value={form.poblacion}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Tu teléfono"
            required
            autoComplete="tel"
            value={form.telefono}
            onChange={handleChange}
          />

          {status === "error" && (
            <p style={{ color: "#FF6B6B", fontSize: "0.85rem", margin: 0, fontFamily: "'Outfit', sans-serif" }}>
              Ha ocurrido un error. Por favor, llámanos directamente al <strong>900 XXX XXX</strong>.
            </p>
          )}

          <button
            type="submit"
            className="btn-cyan"
            disabled={status === "loading"}
            style={{ justifyContent: "center", width: "100%", opacity: status === "loading" ? 0.7 : 1 }}
          >
            {status === "loading" ? "Enviando..." : "Solicitar valoración gratuita →"}
          </button>

          <p style={{ fontSize: "0.78rem", color: "var(--ghost)", textAlign: "center", margin: 0, fontFamily: "'Outfit', sans-serif" }}>
            Sin compromiso · Tu seguro puede cubrir el 100%
          </p>
        </form>
      )}
    </div>
  );
}
