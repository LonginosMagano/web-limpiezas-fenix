/*
 * BlogArticle — /blog/:slug/
 * v3 "Editorial Cálido" — Playfair Display + Lato, crema/terracota/pizarra
 */

import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { BLOG_POSTS } from "@/data/blogPosts";
import NotFound from "./NotFound";

function renderMarkdown(md: string): string {
  return md
    .trim()
    .replace(/^## (.+)$/gm, '<h2 class="prose-h2">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^\|(.+)\|$/gm, (match) => {
      const cells = match.split("|").filter(Boolean).map(c => c.trim());
      if (cells.every(c => c.match(/^[-:]+$/))) return "";
      return `<tr>${cells.map(c => `<td>${c}</td>`).join("")}</tr>`;
    })
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*?<\/li>\n?)+/g, (match) => `<ul class="prose-list">${match}</ul>`)
    .replace(/^(?!<[hultb])(.+)$/gm, '<p>$1</p>')
    .replace(/<p>\s*<\/p>/g, '')
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

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Inicio</Link>
            <span>›</span>
            <Link href="/blog/">Blog</Link>
            <span>›</span>
            <span style={{ color: "var(--terra)" }}>{post.category}</span>
          </nav>
          <div style={{ maxWidth: "760px" }}>
            <span className="section-label">{post.category}</span>
            <h1 className="page-hero-title">{post.title}</h1>
            <p style={{ fontSize: "0.88rem", color: "var(--slate-light)", fontFamily: "'Lato', sans-serif" }}>
              {post.date} · {post.readTime} de lectura
            </p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-white">
        <div className="container">
          <div className="content-sidebar-layout">
            <article className="prose-fenix" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }} />

            <aside>
              <div className="sidebar-card" style={{ marginBottom: "1.5rem" }}>
                <h3>¿Necesitas ayuda urgente?</h3>
                <div style={{ textAlign: "center", paddingTop: "0.5rem" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 900, color: "var(--terra)", marginBottom: "0.25rem" }}>24h / 365</div>
                  <p style={{ fontSize: "0.83rem", color: "var(--slate2)", marginBottom: "1rem" }}>Servicio urgente todos los días del año</p>
                  <a href="tel:900XXXXXX" className="btn-terra" style={{ width: "100%", justifyContent: "center", display: "flex" }}>☎ 900 XXX XXX</a>
                  <a href="https://wa.me/34900XXXXXX" target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginTop: "0.6rem", background: "#25D366", color: "#fff", fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: "0.88rem", padding: "0.7rem 1rem", borderRadius: "4px", textDecoration: "none" }}>
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Artículos relacionados</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {otherPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}/`} style={{ textDecoration: "none" }}>
                      <div style={{ borderBottom: "1px solid var(--beige)", paddingBottom: "0.75rem" }}>
                        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "var(--charcoal)", marginBottom: "0.2rem", lineHeight: 1.35 }}>{p.title}</div>
                        <div style={{ fontSize: "0.75rem", color: "var(--slate-light)", fontFamily: "'Lato', sans-serif" }}>{p.readTime} de lectura</div>
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
