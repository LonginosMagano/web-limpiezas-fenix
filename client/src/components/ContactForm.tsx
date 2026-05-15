/*
 * ContactForm — Limpiezas Fénix v3 "Editorial Cálido"
 * Campos: nombre, teléfono, ciudad, descripción. Botón terracota.
 */

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export default function ContactForm({ title, subtitle }: ContactFormProps) {
  const [form, setForm] = useState({ nombre: "", telefono: "", ciudad: "", descripcion: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // En producción: fetch("/contact.php", { method: "POST", body: ... })
      await new Promise((r) => setTimeout(r, 900));
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✅</div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--charcoal)", marginBottom: "0.5rem" }}>
          ¡Solicitud recibida!
        </h3>
        <p style={{ color: "var(--slate2)", fontSize: "0.95rem" }}>
          Te contactaremos en menos de 24 horas con tu valoración gratuita.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {title && (
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", color: "var(--charcoal)", marginBottom: "0.25rem" }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ fontSize: "0.82rem", color: "var(--slate-light)", marginBottom: "0.5rem" }}>{subtitle}</p>
      )}

      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre completo *"
        value={form.nombre}
        onChange={handleChange}
        required
        autoComplete="name"
      />
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono de contacto *"
        value={form.telefono}
        onChange={handleChange}
        required
        autoComplete="tel"
      />
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad o localidad"
        value={form.ciudad}
        onChange={handleChange}
        autoComplete="address-level2"
      />
      <textarea
        name="descripcion"
        placeholder="Describe brevemente el siniestro (opcional)"
        value={form.descripcion}
        onChange={handleChange}
        rows={4}
        style={{ resize: "vertical" }}
      />

      {status === "error" && (
        <p style={{ color: "var(--destructive)", fontSize: "0.85rem" }}>
          Ha ocurrido un error. Por favor llámanos directamente al 900 XXX XXX.
        </p>
      )}

      <button
        type="submit"
        className="btn-terra"
        disabled={status === "sending"}
        style={{ width: "100%", justifyContent: "center", fontSize: "1rem", padding: "0.9rem" }}
      >
        {status === "sending" ? "Enviando..." : "Solicitar valoración gratuita →"}
      </button>

      <p style={{ fontSize: "0.75rem", color: "var(--slate-light)", textAlign: "center" }}>
        Al enviar aceptas nuestra{" "}
        <a href="/privacidad/" style={{ color: "var(--terra)" }}>política de privacidad</a>.
        Sin compromiso.
      </p>
    </form>
  );
}
