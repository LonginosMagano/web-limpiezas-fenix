/*
 * SEOHead — Limpiezas Fénix
 * Componente para gestionar metadatos SEO de cada página dinámicamente
 */

import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object | object[];
}

export default function SEOHead({ title, description, canonical, ogImage, schema }: SEOHeadProps) {
  const image = ogImage || "https://picsum.photos/seed/fenix-og/1200/630";

  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Canonical
    let canonical_el = document.querySelector('link[rel="canonical"]');
    if (!canonical_el) {
      canonical_el = document.createElement("link");
      canonical_el.setAttribute("rel", "canonical");
      document.head.appendChild(canonical_el);
    }
    canonical_el.setAttribute("href", canonical);

    // OG tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:url": canonical,
      "og:image": image,
      "og:type": "website",
      "og:locale": "es_ES",
    };
    Object.entries(ogTags).forEach(([prop, content]) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });

    // Twitter
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": image,
    };
    Object.entries(twitterTags).forEach(([name, content]) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });

    // Schema JSON-LD
    if (schema) {
      // Eliminar schemas previos de esta página
      document.querySelectorAll('script[data-fenix-schema]').forEach((el) => el.remove());
      const schemas = Array.isArray(schema) ? schema : [schema];
      schemas.forEach((s) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-fenix-schema", "true");
        script.textContent = JSON.stringify(s);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, image, schema]);

  return null;
}
