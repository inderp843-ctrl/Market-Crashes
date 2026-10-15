# Market Crash Archive

> **"Every Crash Has a Story. Every Cycle Has a Lesson."**

An authoritative, open-access historical research and editorial archive documenting major global and Indian stock market crashes, their causes, macroeconomic consequences, recovery cycles, and timeless investor lessons.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Folder Structure](#folder-structure)
4. [Installation & Local Development](#installation--local-development)
5. [Production Build](#production-build)
6. [Deployment Guide (Vercel & Netlify)](#deployment-guide-vercel--netlify)
7. [Route Documentation](#route-documentation)
8. [Data Architecture & Adding New Crash Articles](#data-architecture--adding-new-crash-articles)
9. [Research Methodology & Citations](#research-methodology--citations)
10. [SEO & Structured Data](#seo--structured-data)
11. [Disclaimer](#disclaimer)

---

## 1. Project Overview

The **Market Crash Archive** is an independent financial history resource designed for investors, students, financial historians, and researchers. It provides forensic, evidence-grounded case studies of every major market panic from 1929 through 2022, alongside early speculative precursors (Tulip Mania 1637, South Sea Bubble 1720) and a dedicated Indian stock market archive (Harshad Mehta 1992, Ketan Parekh 2001, Sensex 2008, and March 2020).

### Key Features
- **All 15 Editorial Dimensions:** Every crash article covers overview context, exact dates, affected markets, peak/trough levels, chronological milestones, macroeconomic background, root causes, investor psychology, leverage and liquidity, policy responses, recovery timelines, economic consequences, investor lessons, what history tells vs. does not tell us, and verified citations.
- **Interactive Recharts Visualizations:** Normalized peak-to-trough drawdown curves and multi-crash bar comparisons.
- **Global Search & Filter System:** Filter by country, category, severity, and year; instant keyboard search (`⌘K` / `Ctrl+K`).
- **Interactive Crash Comparator:** Side-by-side comparison of 2 to 4 crashes with synchronized metrics and policy contrast.
- **Dedicated Indian Market Section:** Documents the transition from open-outcry badla systems to modern electronic screen trading, SEBI statutory powers, and domestic mutual fund SIP resilience.
- **Empirical Recovery Studies:** Distinguishes V-shaped liquidity panics from multi-decade L-shaped debt-deflation balance-sheet recessions.

---

## 2. Technology Stack

- **Framework:** React 19 (SPA)
- **Language:** TypeScript 5.7+
- **Bundler & Dev Server:** Vite 6 / 8
- **Styling:** Tailwind CSS v4 (Typography classes, customized financial palette)
- **Routing:** React Router DOM v7
- **Charts:** Recharts
- **Icons:** Lucide React

---

## 3. Folder Structure

```
market-crash-archive/
├── public/
│   ├── robots.txt            # Search engine crawler permissions
│   └── sitemap.xml           # XML sitemap covering all canonical URLs
├── src/
│   ├── components/
│   │   ├── ArticleCard.tsx   # Reusable crash card with badge & metrics
│   │   ├── Breadcrumb.tsx    # Accessible semantic breadcrumb navigation
│   │   ├── ComparisonChart.tsx # Recharts comparative bar chart
│   │   ├── DrawdownChart.tsx # Recharts interactive drawdown area chart
│   │   ├── Footer.tsx        # Institutional footer with all archive links
│   │   ├── Navbar.tsx        # Top ticker, logo, nav links, search trigger
│   │   ├── NewsletterSection.tsx # Validated research dispatch subscription
│   │   ├── SearchModal.tsx   # Fast keyboard modal search (Cmd+K)
│   │   └── SEO.tsx           # Dynamic head tags, OpenGraph & JSON-LD
│   ├── data/
│   │   ├── causes.ts         # 6 fundamental pillars of crash mechanics
│   │   ├── crashes.ts        # Comprehensive crash article database
│   │   ├── glossary.ts       # A–Z financial terminology dictionary
│   │   ├── lessons.ts        # 6 timeless investor lessons from 100+ years
│   │   ├── recoveryStudies.ts # Empirical recovery durations & breakeven data
│   │   └── sources.ts        # Institutional bibliography (Fed, RBI, SEC)
│   ├── pages/
│   │   ├── AboutPage.tsx     # Mission and research principles
│   │   ├── CausesPage.tsx    # Deep dive into crash triggers
│   │   ├── ComparePage.tsx   # Side-by-side interactive comparator
│   │   ├── ContactPage.tsx   # Inquiries & archival citation corrections
│   │   ├── CrashDetail.tsx   # Master reusable 15-point crash article template
│   │   ├── CrashesList.tsx   # Full catalog with search, filters & sort
│   │   ├── DisclaimerPage.tsx# Mandatory regulatory & financial disclaimer
│   │   ├── GlossaryPage.tsx  # Searchable financial glossary
│   │   ├── Home.tsx          # Editorial homepage
│   │   ├── IndiaCrashes.tsx  # Indian stock market history hub
│   │   ├── LessonsPage.tsx   # Synthesized investor lessons
│   │   ├── MethodologyPage.tsx# Mathematical drawdown & recovery definitions
│   │   ├── PrivacyPolicyPage.tsx # Data privacy & transparency
│   │   ├── RecoveryPage.tsx  # Recovery shapes & breakeven studies
│   │   ├── SourcesPage.tsx   # Primary sources & bibliography
│   │   └── TimelinePage.tsx  # Interactive multi-century timeline
│   ├── types/
│   │   └── index.ts          # Strong TypeScript interfaces
│   ├── App.tsx               # Client router definitions
│   ├── index.css             # Tailwind CSS & typography definitions
│   └── main.tsx              # Application entry point
├── index.html                # HTML entry point with meta tags & Google fonts
├── metadata.json             # AI Studio app metadata
├── package.json              # NPM dependencies & scripts
├── tsconfig.json             # TypeScript compiler configuration
└── vite.config.ts            # Vite configuration
```

---

## 4. Installation & Local Development

### Prerequisites
- Node.js 18.0.0 or higher
- npm (or yarn / pnpm)

### Steps
1. Clone the repository and navigate into the root directory:
   ```bash
   cd market-crash-archive
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server on port 3000:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:3000`.

---

## 5. Production Build

To test and compile the production build:

```bash
npm run build
```

This creates an optimized, minified bundle in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

To run type checking and linting:
```bash
npm run lint
```

---

## 6. Deployment Guide (Vercel & Netlify)

Because this is a Single Page Application (SPA) using React Router, direct visits and browser refreshes on nested URLs (e.g., `/crashes/1929-wall-street-crash` or `/crashes/india`) must be routed to `index.html`.

### Deploying on Vercel
Create a `vercel.json` file in the root directory (or Vercel will detect Vite automatically):
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Deploying on Netlify
Add a `public/_redirects` file with the following line:
```
/*    /index.html   200
```

---

## 7. Route Documentation

| Route | Page | Description |
|---|---|---|
| `/` | `Home` | Editorial homepage, stats strip, featured crashes, mini-timeline |
| `/crashes` | `CrashesList` | Complete catalog with keyword search, region/severity filters, sorting |
| `/crashes/1929-wall-street-crash` | `CrashDetail` | Wall Street Crash of 1929 (-89.2% DJIA) |
| `/crashes/1987-black-monday` | `CrashDetail` | Black Monday 1987 (-22.6% in 1 day, portfolio insurance) |
| `/crashes/1997-asian-financial-crisis` | `CrashDetail` | Asian Financial Crisis 1997–98 (Thai Baht, currency contagion) |
| `/crashes/2000-dot-com-bubble` | `CrashDetail` | Dot-Com Bubble Crash (-77.9% NASDAQ) |
| `/crashes/2008-global-financial-crisis` | `CrashDetail` | Global Financial Crisis of 2008 (-56.8% S&P 500) |
| `/crashes/2010-flash-crash` | `CrashDetail` | May 6, 2010 Flash Crash (-998 pts in 20 min, HFT retreat) |
| `/crashes/2015-china-stock-market-crash` | `CrashDetail` | China Stock Market Crash 2015 (-43.3% Shanghai Composite) |
| `/crashes/2018-market-selloff` | `CrashDetail` | 2018 Sell-Off (Volmageddon & Q4 Fed Quantitative Tightening) |
| `/crashes/2020-covid-market-crash` | `CrashDetail` | COVID-19 Market Crash (-33.9% in 33 days) |
| `/crashes/2022-bear-market` | `CrashDetail` | Global Bear Market of 2022 (40-year inflation & rate shock) |
| `/crashes/india` | `IndiaCrashes` | Indian Stock Market History Hub & Regulatory Evolution |
| `/crashes/india/1992-harshad-mehta-scam` | `CrashDetail` | 1992 Harshad Mehta Securities Scam (-54.4% Sensex) |
| `/crashes/india/2008-sensex-crash` | `CrashDetail` | Indian Market Crash of 2008 (-63.7% Sensex, FII flight) |
| `/crashes/india/2020-sensex-crash` | `CrashDetail` | March 2020 Sensex Crash (-38.1% Sensex, circuit breakers) |
| `/timeline` | `TimelinePage` | Multi-century chronological interactive timeline |
| `/compare` | `ComparePage` | Interactive side-by-side comparator for 2–4 crashes |
| `/causes` | `CausesPage` | Deep dive into the 6 fundamental causes of market panics |
| `/recovery` | `RecoveryPage` | Recovery studies, V vs. L shapes, and breakeven horizons |
| `/lessons` | `LessonsPage` | Timeless investor principles from 100+ years of crashes |
| `/about` | `AboutPage` | Project mission, governance, and editorial standards |
| `/methodology` | `MethodologyPage` | Quantitative drawdown and recovery calculation formulas |
| `/sources` | `SourcesPage` | Academic and regulatory source bibliography |
| `/glossary` | `GlossaryPage` | A–Z financial crash terminology dictionary |
| `/contact` | `ContactPage` | Inquiries & archival citation corrections |
| `/privacy-policy` | `PrivacyPolicyPage` | Data transparency and privacy policy |
| `/disclaimer` | `DisclaimerPage` | Financial & legal research disclaimer |
| `/seo-report` | `SEOReportPage` | Dedicated College SEO Assignment Report, Keyword Research Tables & AEO Audit |

---

## 8. Data Architecture & Adding New Crash Articles

All crash case studies are modular and decoupled from the UI. To add a new crash:

1. Open `src/data/crashes.ts`.
2. Add a new object conforming to the `CrashArticle` interface (defined in `src/types/index.ts`):
   ```typescript
   {
     id: '2025-example-crash',
     slug: '2025-example-crash',
     routePath: '/crashes/2025-example-crash',
     title: 'Title of the Event',
     shortTitle: 'Short Name',
     subtitle: 'Summary subtitle',
     year: 2025,
     dateRange: 'Dates',
     country: 'Country',
     region: 'Global',
     isIndia: false,
     category: 'liquidity_flash',
     categoryLabel: 'Category Description',
     indexName: 'S&P 500',
     currency: 'USD',
     peakDate: 'Month Day, Year',
     peakValue: '5,000',
     troughDate: 'Month Day, Year',
     troughValue: '4,000',
     declinePercentage: -20.0,
     durationDays: 45,
     recoveryMonths: 6,
     // 15 required editorial dimensions:
     summary: '...',
     historicalContext: '...',
     affectedMarkets: [...],
     timeline: [...],
     economicBackground: '...',
     mainCauses: [...],
     investorPsychology: '...',
     leverageAndLiquidity: '...',
     policyResponse: '...',
     recoveryAnalysis: '...',
     economicConsequences: [...],
     lessonsForInvestors: [...],
     whatHistoryTellsUs: '...',
     whatHistoryDoesNotTellUs: '...',
     methodologyNotes: '...',
     chartData: [...],
     chartBaselineDesc: '...',
     readingTimeMinutes: 10,
     featured: false,
     relatedSlugs: ['2020-covid-market-crash'],
     sources: [...]
   }
   ```
3. The dynamic article template at `/crashes/:slug` will automatically render the new case study, its interactive drawdown chart, SEO metadata, breadcrumbs, and cross-references without requiring any edits to components!

---

## 9. Research Methodology & Citations

All data points follow strict evidentiary standards:
- **Maximum Closing Drawdown:** Calculated from peak closing price to trough closing price.
- **Intraday Extremes:** Explicitly labeled when applicable (e.g. October 19, 1987 or May 6, 2010).
- **Sources Hierarchy:** Federal Reserve Board, Reserve Bank of India, U.S. SEC, SEBI, Bank for International Settlements (BIS), International Monetary Fund (IMF), and peer-reviewed NBER research papers.

---

## 10. SEO & Structured Data

The application dynamically updates metadata on every route via `src/components/SEO.tsx`:
- Distinct `<title>` (under 60 characters) and `<meta name="description">` (120–160 characters).
- OpenGraph (`og:title`, `og:description`, `og:url`, `og:type`) and Twitter Cards.
- Canonical `<link rel="canonical">` resolution.
- Embedded JSON-LD Schema.org structured data (`ScholarlyArticle`, `WebSite`, `Periodical`).
- Static `sitemap.xml` and `robots.txt` in the `public/` directory.

---

## 11. Disclaimer

*The Market Crash Archive is an independent historical, academic, and journalistic research publication. Content published on this website is strictly for educational, historical analysis, and archival purposes and does not constitute financial, investment, legal, or tax advice. Past performance and historical market recovery patterns are no guarantee of future results.*
