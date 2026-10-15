export type CrashCategory = 
  | 'speculative_bubble'
  | 'credit_crisis'
  | 'liquidity_flash'
  | 'macro_geopolitical'
  | 'fraud_structural'
  | 'pandemic_shock'
  | 'inflation_rate_hike'
  | 'early_precursor';

export type Region = 'United States' | 'Global' | 'Asia' | 'India' | 'Europe' | 'Latin America';

export interface SourceCitation {
  title: string;
  institution: string;
  year: string;
  url?: string;
  type: 'central_bank' | 'regulatory' | 'academic' | 'exchange' | 'historical_record';
}

export interface TimelineEventItem {
  date: string;
  title: string;
  description: string;
  impact?: string;
}

export interface ChartDataPoint {
  date: string;
  value: number; // Normalized index level or drawdown percentage
  actualValue?: number; // Actual index value if known
  label?: string;
}

export interface AeoQnaItem {
  question: string;
  directAnswer: string;
  supportingDetails: string;
  sources?: string;
}

export interface CrashArticle {
  id: string;
  slug: string; // e.g. "1929-wall-street-crash"
  routePath: string; // e.g. "/crashes/1929-wall-street-crash" or "/crashes/india/1992-harshad-mehta-scam"
  title: string;
  shortTitle: string;
  subtitle: string;
  year: number;
  dateRange: string;
  country: string;
  region: Region;
  isIndia: boolean;
  category: CrashCategory;
  categoryLabel: string;
  
  // SEO & Keyword Strategy (College Assignment)
  primaryKeyword: string;
  relatedKeywords: [string, string];
  seoTitle: string;
  metaDescription: string;
  featuredImage: string;
  imageAlt: string;
  imageCaption: string;

  // AEO - Answer Engine Optimization
  aeoQuestions: AeoQnaItem[];
  
  // Quantitative Data
  indexName: string;
  indexTicker?: string;
  currency: string;
  peakDate: string;
  peakValue: string;
  troughDate: string;
  troughValue: string;
  declinePercentage: number; // e.g. -89.2
  intradayMaxDecline?: string; // e.g. "-22.6% on Oct 19, 1987"
  durationDays: number;
  recoveryMonths: number | string; // e.g. 302 or "25 years" or "2 months"
  recoveryDate?: string;
  
  // Editorial Content Sections (15 required dimensions)
  summary: string;
  historicalContext: string;
  affectedMarkets: string[];
  timeline: TimelineEventItem[];
  economicBackground: string;
  mainCauses: string[];
  investorPsychology: string;
  leverageAndLiquidity: string;
  policyResponse: string;
  recoveryAnalysis: string;
  economicConsequences: string[];
  lessonsForInvestors: string[];
  whatHistoryTellsUs: string;
  whatHistoryDoesNotTellUs: string;
  methodologyNotes: string;
  longFormAnalysis?: string[]; // Detailed long-form narrative
  
  // Visualization
  chartData: ChartDataPoint[];
  chartBaselineDesc: string;

  // Metadata & Relations
  readingTimeMinutes: number;
  wordCountEstimate?: number;
  featured: boolean;
  relatedSlugs: string[];
  sources: SourceCitation[];
}

export interface GlossaryItem {
  term: string;
  category: string;
  definition: string;
  historicalExample?: string;
  relatedTerms?: string[];
}

export interface KeywordResearchRow {
  pageName: string;
  url: string;
  primaryKeyword: string;
  relatedKeyword1: string;
  relatedKeyword2: string;
  searchIntent: 'Informational' | 'Educational / Academic' | 'Navigational' | 'Commercial Investigation';
  estMonthlySearchVolume: string;
  keywordDifficulty: string;
  targetAudience: string;
  rationale: string;
  verificationSource: string;
  verifiedStatus: 'Verified (Industry Benchmark)' | 'Verified (GKP / Ahrefs Global)' | 'Qualitative Assessment (Not verified live)';
}

export interface AuditChecklistItem {
  id: number;
  requirement: string;
  expectedImplementation: string;
  actualStatus: 'Verified Complete' | 'Implemented & Tested' | 'Pending Production Verification';
  pageOrUrlChecked: string;
  evidenceNotes: string;
}
