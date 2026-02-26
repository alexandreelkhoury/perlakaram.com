# SEO Audit — perlakaram.com

**Date:** 26 February 2026
**Site:** Perla Karam — Psychologue Clinicienne
**Stack:** React 19 + Vite 7 (SPA, client-side rendering)
**Languages:** FR (default), EN, AR

---

## Executive Summary

The site has a solid visual foundation, good heading structure, and excellent performance metrics (LCP 423ms, CLS 0.00). However, **it is nearly invisible to search engines** due to its SPA architecture with no pre-rendering, missing meta tags, no structured data, and no sitemap. The issues below are ordered by impact.

### Top 5 Critical Issues
1. **No per-page meta tags** — All pages share the same `<title>` and `<meta description>`
2. **No structured data (Schema.org)** — Google cannot identify the business type, services, or practitioner
3. **No robots.txt or sitemap.xml** — Crawlers have no guidance
4. **No Open Graph / Twitter Card tags** — Social sharing shows generic info
5. **SPA without pre-rendering** — Crawlers see an empty `<div id="root"></div>`

---

## 1. Crawlability & Indexation

### 1.1 SPA Architecture (CRITICAL)

**Issue:** The entire site is a single-page app. The HTML served to crawlers contains only `<div id="root"></div>` with no content. While Googlebot can render JavaScript, it is slower, less reliable, and other search engines (Bing, DuckDuckGo) handle it poorly.

**Impact:** HIGH — Content may not be indexed at all by non-Google engines.

**Recommendation:**
- Install `vite-plugin-prerender` or `vite-ssg` to generate static HTML for each route at build time
- Alternatively, migrate to a framework like **Astro** or **Next.js** that supports SSG/SSR natively
- At minimum, use a pre-rendering service (Prerender.io) as a stopgap

### 1.2 Missing robots.txt

**Issue:** No `public/robots.txt` file exists.

**Impact:** MEDIUM — Search engines use defaults, but explicit directives help control crawling.

**Recommendation:** Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://perlakaram.com/sitemap.xml
```

### 1.3 Missing sitemap.xml

**Issue:** No XML sitemap exists.

**Impact:** MEDIUM — Search engines cannot discover all pages efficiently.

**Recommendation:** Create `public/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://perlakaram.com/</loc><priority>1.0</priority></url>
  <url><loc>https://perlakaram.com/about</loc><priority>0.8</priority></url>
  <url><loc>https://perlakaram.com/services</loc><priority>0.8</priority></url>
  <url><loc>https://perlakaram.com/contact</loc><priority>0.7</priority></url>
</urlset>
```

### 1.4 No Canonical Tags

**Issue:** No `<link rel="canonical">` on any page.

**Impact:** MEDIUM — Risk of duplicate content, especially with language switching via client-side state (no URL differentiation).

**Recommendation:** Add `<link rel="canonical" href="https://perlakaram.com/">` in `index.html`, and dynamically update per route if pre-rendering is implemented.

---

## 2. Meta Tags & On-Page SEO

### 2.1 Static Title Tag (CRITICAL)

**Issue:** Every page shows `Perla — Psychologue Clinicienne`. The title doesn't reflect the current page content.

**Impact:** HIGH — Google uses titles as a primary ranking signal. Same title on all pages = missed keyword targeting.

**Current:** `<title>Perla — Psychologue Clinicienne</title>`

**Recommendation:** Update dynamically per page:
| Page | Suggested Title |
|------|----------------|
| Home | `Perla Karam — Psychologue Clinicienne en Ligne` |
| About | `Mon Parcours — Perla Karam, Psychologue Clinicienne` |
| Services | `Comment se Déroule une Thérapie — Perla Karam` |
| Contact | `Prendre Rendez-vous — Perla Karam, Psychologue en Ligne` |

**Implementation:** Install `react-helmet-async` and add `<Helmet>` in each page component:
```bash
npm install react-helmet-async
```

### 2.2 Static Meta Description (CRITICAL)

**Issue:** One description for all pages. Content mentions "thérapie de couple" and "trauma" which are not services offered.

**Current:** `"Perla, psychologue clinicienne. Accompagnement individuel, thérapie de couple, anxiété, dépression et trauma. Un espace de confiance pour votre bien-être."`

**Impact:** HIGH — Inaccurate description misleads users and search engines.

**Recommendation:** Unique, accurate descriptions per page (150-160 characters):
| Page | Suggested Description |
|------|----------------------|
| Home | `Perla Karam, psychologue clinicienne. Consultations en ligne par visioconférence. Accompagnement des adolescents et adultes dans un cadre confidentiel et bienveillant.` |
| About | `Diplômée d'un Master en psychopathologie clinique (Paris Cité), Perla Karam accompagne adolescents et adultes avec une approche psychanalytique et humaniste.` |
| Services | `Découvrez le déroulement d'une thérapie en ligne avec Perla Karam : premier entretien, cadre des séances, visioconférence sécurisée.` |
| Contact | `Prenez rendez-vous avec Perla Karam, psychologue clinicienne. Consultations 100% en ligne. Réponse sous 48h.` |

### 2.3 Title Tag Content

**Issue:** Title uses "Perla" only, not the full professional name "Perla Karam".

**Impact:** LOW — Missed branding opportunity for name-based searches.

**Recommendation:** Use "Perla Karam" consistently in the title.

### 2.4 Missing Open Graph Tags

**Issue:** No OG tags. When the site is shared on social media, platforms pull generic or random content.

**Impact:** MEDIUM — Poor social sharing appearance = fewer clicks from social channels.

**Recommendation:** Add to `index.html` (and dynamically per page if pre-rendering):
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Perla Karam — Psychologue Clinicienne en Ligne" />
<meta property="og:description" content="Consultations en ligne par visioconférence. Accompagnement des adolescents et adultes." />
<meta property="og:image" content="https://perlakaram.com/og-image.jpg" />
<meta property="og:url" content="https://perlakaram.com/" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="Perla Karam — Psychologue Clinicienne" />
```

**Action:** Create an OG image (1200x630px) with Perla's photo, name, and title on a branded background.

### 2.5 Missing Twitter Card Tags

**Issue:** No Twitter/X card meta tags.

**Impact:** LOW-MEDIUM

**Recommendation:**
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Perla Karam — Psychologue Clinicienne en Ligne" />
<meta name="twitter:description" content="Consultations en ligne par visioconférence." />
<meta name="twitter:image" content="https://perlakaram.com/og-image.jpg" />
```

---

## 3. Structured Data (Schema.org)

### 3.1 No Structured Data (CRITICAL)

**Issue:** No JSON-LD structured data anywhere. Google cannot identify this as a healthcare professional's website.

**Impact:** HIGH — Missing rich results (knowledge panel, FAQ snippets, practice details).

**Recommendation:** Add the following JSON-LD blocks to `index.html`:

#### ProfessionalService + Person Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Perla Karam — Psychologue Clinicienne",
  "url": "https://perlakaram.com",
  "description": "Consultations de psychologie clinique en ligne par visioconférence.",
  "telephone": "+33617211673",
  "email": "perlakaram.psy@gmail.com",
  "priceRange": "$$",
  "availableLanguage": ["French", "English", "Arabic"],
  "areaServed": ["FR", "LB"],
  "serviceType": "Psychologie clinique",
  "provider": {
    "@type": "Person",
    "name": "Perla Karam",
    "jobTitle": "Psychologue Clinicienne",
    "url": "https://perlakaram.com/about",
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Université Paris Cité" },
      { "@type": "CollegeOrUniversity", "name": "Université Saint-Esprit de Kaslik" }
    ]
  }
}
</script>
```

#### FAQ Schema (for Contact page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Comment se déroulent les séances en ligne ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les séances ont lieu par visioconférence (Zoom ou plateforme sécurisée)..."
      }
    }
  ]
}
</script>
```

---

## 4. Performance (Good)

### Lab Results (localhost)
| Metric | Value | Status |
|--------|-------|--------|
| LCP | 423ms | Excellent (< 2.5s) |
| CLS | 0.00 | Excellent (< 0.1) |
| TTFB | 7ms | Excellent (localhost) |

### 4.1 Render-Blocking Resources

**Issue:** Two render-blocking CSS requests add ~267ms to FCP:
1. `Calendly widget.css` (278ms, external CDN)
2. `Google Fonts CSS` (11ms)

**Impact:** MEDIUM — Delays first contentful paint.

**Recommendation:**
- Load Calendly CSS only on the Contact page (lazy load or dynamic import)
- Add `media="print" onload="this.media='all'"` to defer non-critical CSS
- Consider self-hosting Google Fonts for better caching control

### 4.2 LCP Image Not Optimized for Discovery

**Issue:** The LCP element (profile_picture.jpeg) is:
- Not discoverable in initial HTML (loaded via React, not in static HTML)
- Missing `fetchpriority="high"`
- Initial priority: Low (upgraded to High)

**Impact:** MEDIUM — LCP could be faster if the image were preloaded.

**Recommendation:**
- Add `<link rel="preload" as="image" href="/profile_picture.jpeg">` in `index.html`
- Add `fetchPriority="high"` to the `<img>` tag in Home.jsx
- Convert to WebP format for smaller file size

### 4.3 Image Optimization

**Issue:** `profile_picture.jpeg` is 1024x942px but displayed at ~300px wide. No responsive sizes.

**Impact:** LOW — File is 64KB (acceptable), but could be smaller.

**Recommendation:**
- Generate a 600px-wide variant for the displayed size
- Convert to WebP (estimated ~30-40KB savings)
- Add `loading="eager"` for above-fold, `loading="lazy"` for About page instance

---

## 5. Multilingual SEO

### 5.1 No hreflang Tags

**Issue:** Site supports 3 languages but has no `hreflang` annotations. Language switching is client-side only (localStorage), not URL-based.

**Impact:** MEDIUM — Search engines cannot serve the correct language version to users.

**Recommendation (long-term):** Implement URL-based language routing:
- `perlakaram.com/` (FR)
- `perlakaram.com/en/` (EN)
- `perlakaram.com/ar/` (AR)

Then add hreflang tags:
```html
<link rel="alternate" hreflang="fr" href="https://perlakaram.com/" />
<link rel="alternate" hreflang="en" href="https://perlakaram.com/en/" />
<link rel="alternate" hreflang="ar" href="https://perlakaram.com/ar/" />
<link rel="alternate" hreflang="x-default" href="https://perlakaram.com/" />
```

**Quick win:** If URL-based routing is too complex now, at minimum ensure the `<html lang="fr">` tag is correct for the default language and add hreflang for the default.

---

## 6. Content & Heading Structure (Good)

### Positive Findings
- 1 H1 per page on all pages
- Proper heading hierarchy (H1 > H2 > H3)
- All images have alt text
- No broken links (0 `href="#"` anchors)
- FAQ uses native `<details>/<summary>` elements
- Good content depth on all pages

### 6.1 Heading Content Optimization

**Issue:** H1 tags use poetic/abstract language rather than keyword-rich content.

**Examples:**
- Home H1: *"Un lieu pour déposer ce qui pèse et retrouver du sens"*
- About H1: *"Une thérapeute à votre écoute, avec tout son cœur"*

**Impact:** LOW — Beautiful for users, but doesn't contain target keywords.

**Recommendation:** Keep the poetic H1 but consider adding a more keyword-rich H2 or subtitle near the top, like: *"Psychologue clinicienne en ligne — Consultations par visioconférence"*

---

## 7. Technical Quick Wins

### 7.1 Favicon

**Issue:** Using the default Vite SVG favicon.

**Impact:** LOW — Unprofessional in browser tabs and bookmarks.

**Recommendation:** Create a branded favicon (initials "PK" in sage green). Provide multiple formats:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

### 7.2 No Web App Manifest

**Issue:** No `manifest.json` for PWA / mobile home screen.

**Impact:** LOW

**Recommendation:** Create `public/manifest.json` with site name, colors, and icons.

### 7.3 Missing 404 Page

**Issue:** No custom 404 page for invalid routes.

**Impact:** LOW — Users hitting wrong URLs see a blank page or the home page.

**Recommendation:** Add a catch-all route in React Router:
```jsx
<Route path="*" element={<NotFound />} />
```

---

## Prioritized Action Plan

### Phase 1 — Critical (Do First)
1. Install `react-helmet-async` and add unique `<title>` + `<meta description>` per page
2. Fix meta description content (remove inaccurate services)
3. Add JSON-LD structured data (ProfessionalService + Person)
4. Create `robots.txt` and `sitemap.xml`
5. Add Open Graph tags in `index.html`

### Phase 2 — High Impact
6. Add `<link rel="preload">` for profile_picture.jpeg
7. Add `fetchPriority="high"` to hero image
8. Defer Calendly CSS loading (only load on Contact page)
9. Add FAQ structured data (JSON-LD) for Contact page
10. Create branded favicon

### Phase 3 — Medium Impact
11. Implement pre-rendering with `vite-plugin-prerender` for all 4 routes
12. Add canonical tags
13. Convert images to WebP
14. Create an OG image (1200x630) for social sharing
15. Add a custom 404 page

### Phase 4 — Long-term
16. Implement URL-based language routing (`/en/`, `/ar/`)
17. Add hreflang tags
18. Register with Google Search Console and Bing Webmaster Tools
19. Submit sitemap to both
20. Consider migrating to Astro or Next.js for built-in SSG/SSR

---

## Tools to Set Up After Launch
- **Google Search Console** — Monitor indexation, submit sitemap
- **Google Business Profile** — Even for online-only, create a profile for visibility
- **Bing Webmaster Tools** — Submit sitemap, monitor Bing indexation
- **PageSpeed Insights** — Monitor real-user Core Web Vitals after deployment
