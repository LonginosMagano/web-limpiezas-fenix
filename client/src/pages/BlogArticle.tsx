/*
 * BlogArticle — /blog/:slug/
 * Artículo individual del blog con renderizado de Markdown
 */

import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/data/blogPosts";
import NotFound from "./NotFound";

// Renderizador simple de Markdown a HTML
function renderMarkdown(md: string): string {
  return md
    .trim()
    // Headings
    .replace(/^## (.+)$/gm, '<h2 class="blog-h2">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="blog-h3">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="blog-h4">$1</h4>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Table rows (simple)
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split("|").filter(Boolean).map(c => c.trim());
      if (cells.every(c => c.match(/^[-:]+$/))) {
        return ""; // separator row
      }
      return `<tr>${cells.map(c => `<td>${c}</td>`).join("")}</tr>`;
    })
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    // Wrap consecutive <li> in <ul>
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul class="blog-ul">${match}</ul>`)
    // Paragraphs (lines not starting with HTML tags)
    .replace(/^(?!<[hult])(.+)$/gm, '<p>$1</p>')
    // Clean up empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    // Clean up double newlines
    .replace(/\n{3,}/g, '\n\n');
}

export default function BlogArticle({ slug }: { slug: string }) {
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <NotFound />;

  const schemaArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDesc,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Limpiezas Fénix" },
    publisher: { "@type": "Organization", name: "Limpiezas Fénix", url: "https://limpiezaincendiosfenix.es/" },
    url: `https://limpiezaincendiosfenix.es/blog/${post.slug}/`,
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://limpiezaincendiosfenix.es/" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://limpiezaincendiosfenix.es/blog/" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://limpiezaincendiosfenix.es/blog/${post.slug}/` },
    ],
  };

  const otherPosts = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDesc}
        canonical={`https://limpiezaincendiosfenix.es/blog/${post.slug}/`}
        schema={[schemaArticle, schemaBreadcrumb]}
      />

      <section style={{ background: "var(--ash)", padding: "3rem 0 2rem" }}>
        <div className="container">
          <nav className="breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <Link href="/">Inicio</Link>
            <span className="breadcrumb-sep">›</span>
            <Link href="/blog/">Blog</Link>
            <span className="breadcrumb-sep">›</span>
            <span style={{ color: "var(--ember)", maxWidth: "300px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post.title}</span>
          </nav>
          <div style={{ maxWidth: "760px" }}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", fontSize: "0.85rem", color: "var(--muted-text)", flexWrap: "wrap" }}>
              <span style={{ background: "rgba(255,69,0,0.15)", color: "var(--ember)", padding: "0.2rem 0.6rem", borderRadius: "999px", fontWeight: 600 }}>
                {post.category}
              </span>
              <span>{new Date(post.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>·</span>
              <span>{post.readTime} de lectura</span>
            </div>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--light)", lineHeight: 1.15, marginBottom: "1rem" }}>
              {post.title}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--gray)", lineHeight: 1.7 }}>{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 0 5rem", background: "var(--coal)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "3rem", alignItems: "start" }}>
            {/* Contenido del artículo */}
            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
            />

            {/* Sidebar */}
            <aside className="blog-sidebar" style={{ position: "sticky", top: "90px" }}>
              {/* CTA */}
              <div style={{ background: "rgba(255,69,0,0.08)", border: "1px solid rgba(255,69,0,0.2)", borderRadius: "0.5rem", padding: "1.5rem", marginBottom: "1.5rem" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.3rem", color: "var(--fire)", marginBottom: "0.5rem" }}>
                  ¿Necesitas ayuda urgente?
                </div>
                <p style={{ color: "var(--gray)", fontSize: "0.88rem", marginBottom: "1rem", lineHeight: 1.6 }}>
                  Servicio de limpieza por incendio 24h/365. Valoración gratuita.
                </p>
                <a href="tel:900XXXXXX" className="btn-fire" style={{ width: "100%", justifyContent: "center", marginBottom: "0.5rem" }}>
                  ☎ Llamar ahora
                </a>
                <a href="https://wa.me/34900XXXXXX" className="btn-wa" style={{ width: "100%", justifyContent: "center" }} target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </div>

              {/* Artículos relacionados */}
              <div style={{ background: "var(--ash)", border: "1px solid var(--border-subtle)", borderRadius: "0.5rem", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", color: "var(--light)", marginBottom: "1rem" }}>
                  Artículos relacionados
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {otherPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}/`}>
                      <div style={{ cursor: "pointer" }}>
                        <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--light)", lineHeight: 1.4, marginBottom: "0.25rem" }}>{p.title}</div>
                        <div style={{ fontSize: "0.78rem", color: "var(--muted-text)" }}>{p.readTime} de lectura</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
