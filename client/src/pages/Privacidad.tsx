/*
 * Privacidad — /privacidad/
 * v3 "Editorial Cálido" — Playfair Display + Lato, crema/terracota/pizarra
 */

import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

export default function Privacidad() {
  return (
    <>
      <SEOHead
        title="Política de Privacidad — Limpiezas Fénix"
        description="Política de privacidad de Limpiezas Fénix conforme al RGPD y la LOPDGDD. Información sobre el tratamiento de datos personales."
        canonical="https://limpiezaincendiosfenix.es/privacidad/"
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--terra)" }}>Política de Privacidad</span>
          </nav>
          <h1 className="page-hero-title">Política de <em>Privacidad</em></h1>
          <p style={{ color: "var(--slate-light)", fontSize: "0.85rem", fontFamily: "'Lato', sans-serif" }}>Última actualización: enero de 2025</p>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="prose-fenix" style={{ maxWidth: "760px" }}>
            <h2>1. Responsable del tratamiento</h2>
            <p>El responsable del tratamiento de los datos personales recogidos a través de este sitio web es <strong>Limpiezas de Incendios Fénix</strong>, con domicilio en España. Contacto: <a href="mailto:info@limpiezaincendiosfenix.es">info@limpiezaincendiosfenix.es</a></p>

            <h2>2. Datos que recogemos</h2>
            <p>A través de los formularios de contacto de este sitio web, podemos recoger los siguientes datos personales:</p>
            <ul>
              <li>Nombre y apellidos</li>
              <li>Número de teléfono</li>
              <li>Dirección de correo electrónico</li>
              <li>Mensaje o consulta</li>
              <li>Localidad o provincia</li>
            </ul>

            <h2>3. Finalidad del tratamiento</h2>
            <p>Los datos personales recogidos se utilizan exclusivamente para:</p>
            <ul>
              <li>Responder a las consultas y solicitudes de presupuesto</li>
              <li>Gestionar la relación comercial con clientes</li>
              <li>Enviar comunicaciones relacionadas con los servicios solicitados</li>
            </ul>

            <h2>4. Base legal</h2>
            <p>El tratamiento de datos se basa en el consentimiento del interesado (art. 6.1.a RGPD) para el envío de comunicaciones comerciales, y en la ejecución de un contrato o medidas precontractuales (art. 6.1.b RGPD) para la gestión de solicitudes de presupuesto.</p>

            <h2>5. Conservación de datos</h2>
            <p>Los datos se conservarán durante el tiempo necesario para la prestación del servicio y, posteriormente, durante los plazos legalmente establecidos para atender posibles responsabilidades.</p>

            <h2>6. Derechos del interesado</h2>
            <p>El interesado tiene derecho a acceder, rectificar, suprimir, limitar el tratamiento, portabilidad y oposición al tratamiento de sus datos personales. Para ejercer estos derechos, puede contactar con nosotros en <a href="mailto:info@limpiezaincendiosfenix.es">info@limpiezaincendiosfenix.es</a>.</p>
            <p>Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).</p>

            <h2>7. Cookies</h2>
            <p>Este sitio web utiliza cookies. Para más información, consulta nuestra <Link href="/cookies/">Política de Cookies</Link>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
