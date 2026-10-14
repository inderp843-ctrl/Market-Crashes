import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  structuredData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  publishedTime,
  structuredData
}) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = `${title} | Market Crash Archive`;
    document.title = fullTitle;

    // 2. Helper to set or update meta tags
    const setMeta = (attrName: string, attrVal: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    // 3. Update canonical URL
    const canonicalUrl = `${window.location.origin}${canonicalPath || window.location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);
    setMeta('property', 'og:url', canonicalUrl);

    // 4. Update JSON-LD structured data
    let scriptJsonLd = document.querySelector('script#dynamic-jsonld') as HTMLScriptElement | null;
    if (structuredData) {
      if (!scriptJsonLd) {
        scriptJsonLd = document.createElement('script');
        scriptJsonLd.id = 'dynamic-jsonld';
        scriptJsonLd.type = 'application/ld+json';
        document.head.appendChild(scriptJsonLd);
      }
      scriptJsonLd.textContent = JSON.stringify(structuredData);
    } else if (scriptJsonLd) {
      scriptJsonLd.remove();
    }

    // Scroll to top upon route change
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, canonicalPath, type, publishedTime, structuredData]);

  return null;
};
