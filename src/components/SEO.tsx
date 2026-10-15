import React, { useEffect } from 'react';
import { AeoQnaItem } from '../types';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  imageUrl?: string;
  imageAlt?: string;
  structuredData?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbItem[];
  aeoQuestions?: AeoQnaItem[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  publishedTime,
  imageUrl,
  imageAlt,
  structuredData,
  breadcrumbs,
  aeoQuestions
}) => {
  useEffect(() => {
    // 1. Update Document Title
    // Enforce 50-60 character target where practical
    const fullTitle = title.includes('Market Crash Archive')
      ? title
      : `${title} | Market Crash Archive`;
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
    setMeta('property', 'og:site_name', 'Market Crash Archive');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);

    // Dynamic URL Resolution
    const canonicalUrl = `${window.location.origin}${canonicalPath || window.location.pathname}`;
    setMeta('property', 'og:url', canonicalUrl);

    // OpenGraph & Twitter Images
    if (imageUrl) {
      const fullImgUrl = imageUrl.startsWith('http')
        ? imageUrl
        : `${window.location.origin}${imageUrl}`;
      setMeta('property', 'og:image', fullImgUrl);
      setMeta('name', 'twitter:image', fullImgUrl);
      if (imageAlt) {
        setMeta('property', 'og:image:alt', imageAlt);
        setMeta('name', 'twitter:image:alt', imageAlt);
      }
    }

    // 3. Update canonical URL tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 4. Structured Data (JSON-LD)
    const jsonLdScripts: Record<string, unknown>[] = [];

    // Main schema (WebSite or Article)
    if (structuredData) {
      jsonLdScripts.push(structuredData);
    }

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: bc.name,
          item: bc.url.startsWith('http') ? bc.url : `${window.location.origin}${bc.url}`
        }))
      });
    }

    // AEO FAQPage Schema (for Answer Engines and Rich Results)
    if (aeoQuestions && aeoQuestions.length > 0) {
      jsonLdScripts.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: aeoQuestions.map(q => ({
          '@type': 'Question',
          name: q.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `${q.directAnswer} ${q.supportingDetails}`
          }
        }))
      });
    }

    // Inject JSON-LD tag
    let scriptJsonLd = document.querySelector('script#dynamic-jsonld') as HTMLScriptElement | null;
    if (jsonLdScripts.length > 0) {
      if (!scriptJsonLd) {
        scriptJsonLd = document.createElement('script');
        scriptJsonLd.id = 'dynamic-jsonld';
        scriptJsonLd.type = 'application/ld+json';
        document.head.appendChild(scriptJsonLd);
      }
      scriptJsonLd.textContent = JSON.stringify(
        jsonLdScripts.length === 1 ? jsonLdScripts[0] : jsonLdScripts
      );
    } else if (scriptJsonLd) {
      scriptJsonLd.remove();
    }

    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, canonicalPath, type, publishedTime, imageUrl, imageAlt, structuredData, breadcrumbs, aeoQuestions]);

  return null;
};
