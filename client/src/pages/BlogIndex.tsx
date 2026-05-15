/*
 * BlogIndex — /blog/
 * Listado de artículos del blog
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
  Guías: "var(--fire)",
  Técnicas: "var(--gold)",
  Tecnología: "#4fc3f7",
  Seguros: "var(--green)",
  Industrial: "#ce93d8",
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

      <section style={{ background: "var(--ash)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)" }}>Blog</span>
          </nav>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: "var(--light)", marginBottom: "0.75rem" }}>
            Blog sobre <span style={{ color: "var(--fire)" }}>Limpieza por Incendio</span>
          </h1>
          <p style={{ color: "var(--gray)", fontSize: "1.05rem", maxWidth: "600px" }}>
            Guías prácticas, consejos técnicos y todo lo que necesitas saber sobre la recuperación de inmuebles tras un siniestro por incendio.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0", background: "var(--coal)" }}>
        <div className="container">
          <div className="blog-grid-2col" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2rem" }}>
            {BLOG_POSTS.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`}>
                <article
                  style={{
                    background: "var(--ash)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    transition: "border-color 200ms, transform 200ms",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(255,69,0,0.35)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-subtle)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {/* Imagen placeholder */}
                  <div style={{ height: "180px", background: `linear-gradient(135deg, rgba(255,69,0,0.15) 0%, rgba(10,10,10,0.8) 100%)`, position: "relative", overflow: "hidden" }}>
                    <img
                      src={`https://picsum.photos/seed/blog-fenix-${i}/800/360`}
                      alt={post.title}
                      width={800}
                      height={360}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
                    />
                    <div style={{ position: "absolute", top: "1rem", left: "1rem" }}>
                      <span style={{
                        background: CATEGORY_COLORS[post.category] || "var(--fire)",
                        color: "#000",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.6rem",
                        borderRadius: "999px",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", fontSize: "0.8rem", color: "var(--muted-text)" }}>
                      <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span>·</span>
                      <span>{post.readTime} de lectura</span>
                    </div>
                    <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--light)", marginBottom: "0.75rem", lineHeight: 1.4 }}>
                      {post.title}
                    </h2>
                    <p style={{ color: "var(--gray)", fontSize: "0.9rem", lineHeight: 1.65, flex: 1 }}>
                      {post.excerpt}
                    </p>
                    <div style={{ marginTop: "1.25rem", color: "var(--ember)", fontSize: "0.9rem", fontWeight: 600 }}>
                      Leer artículo →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
