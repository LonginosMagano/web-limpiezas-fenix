/*
 * BlogIndex — /blog/
 * v3 "Editorial Cálido" — Playfair Display + Lato, crema/terracota/pizarra
 */

import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/data/blogPosts";

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://limpiezaincendiosfenix.es/" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://limpiezaincendiosfenix.es/blog/" },
  ],
};

const CATEGORY_COLORS: Record<string, string> = {
  "Guías": "var(--terra)",
  "Técnicas": "var(--slate2)",
  "Tecnología": "var(--green)",
  "Seguros": "var(--slate)",
  "Industrial": "var(--terra-dark)",
};

export default function BlogIndex() {
  return (
    <>
      <SEOHead
        title="Blog sobre Limpieza por Incendio | Guías y Consejos — Limpiezas Fénix"
        description="Blog especializado en limpieza por incendio. Guías prácticas, consejos técnicos y todo lo que necesitas saber sobre la recuperación de inmuebles tras un siniestro."
        canonical="https://limpiezaincendiosfenix.es/blog/"
        schema={[schemaBreadcrumb]}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <span style={{ color: "var(--terra)" }}>Blog</span>
          </nav>
          <span className="section-label">Conocimiento especializado</span>
          <h1 className="page-hero-title">Blog de <em>Limpiezas Fénix</em></h1>
          <p className="page-hero-sub">
            Guías prácticas, consejos de expertos y todo lo que necesitas saber sobre la limpieza y restauración tras un incendio.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="section-white">
        <div className="container">
          <div className="blog-grid">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="blog-card">
                <div className="blog-card-img">
                  <img
                    src={`https://picsum.photos/seed/${post.slug}/600/300`}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>
                <div className="blog-card-body">
                  <div
                    className="blog-card-cat"
                    style={{ color: CATEGORY_COLORS[post.category] || "var(--terra)" }}
                  >
                    {post.category}
                  </div>
                  <div className="blog-card-title">{post.title}</div>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    {post.date} · {post.readTime} de lectura
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="cta-title">¿Necesitas ayuda <em>ahora mismo</em>?</h2>
              <p className="cta-sub">Nuestro equipo está disponible 24h/365 para atenderte.</p>
            </div>
            <div className="cta-actions">
              <a href="tel:900XXXXXX" className="btn-terra">☎ 900 XXX XXX</a>
              <a href="https://wa.me/34900XXXXXX" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none" }}>
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
