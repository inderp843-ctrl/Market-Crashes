export interface PageSeoConfig {
  pageName: string;
  canonicalPath: string;
  primaryKeyword: string;
  relatedKeyword1: string;
  relatedKeyword2: string;
  seoTitle: string;
  metaDescription: string;
  targetAudience: string;
  searchIntent: string;
}

export const centralizedSeoConfig: Record<string, PageSeoConfig> = {
  home: {
    pageName: 'Homepage',
    canonicalPath: '/',
    primaryKeyword: 'stock market crash history',
    relatedKeyword1: 'biggest stock market crashes in history',
    relatedKeyword2: 'historical market crashes',
    seoTitle: 'Stock Market Crash History: Causes, Data & Lessons',
    metaDescription: 'Explore stock market crash history from 1929 to 2022. Analyze the biggest stock market crashes in history with verified drawdowns, causes, and investor lessons.',
    targetAudience: 'Finance students, retail investors, economic historians, and market researchers',
    searchIntent: 'Informational & Educational'
  },
  crash1929: {
    pageName: 'Wall Street Crash of 1929',
    canonicalPath: '/crashes/1929-wall-street-crash',
    primaryKeyword: 'Wall Street Crash of 1929',
    relatedKeyword1: 'causes of the 1929 stock market crash',
    relatedKeyword2: 'Great Depression stock market crash',
    seoTitle: 'Wall Street Crash of 1929: Causes, Facts & Timeline',
    metaDescription: 'Comprehensive history of the Wall Street Crash of 1929. Discover the true causes of the 1929 stock market crash and its link to the Great Depression.',
    targetAudience: 'University economics students, financial history researchers, and portfolio managers',
    searchIntent: 'Informational & In-depth Academic Research'
  },
  crash2008: {
    pageName: 'Global Financial Crisis of 2008',
    canonicalPath: '/crashes/2008-global-financial-crisis',
    primaryKeyword: 'Global Financial Crisis of 2008',
    relatedKeyword1: 'causes of the 2008 financial crisis',
    relatedKeyword2: '2008 stock market crash and recovery',
    seoTitle: 'Global Financial Crisis of 2008: Causes & Recovery',
    metaDescription: 'Examine the Global Financial Crisis of 2008, subprime debt collapse, key causes of the 2008 financial crisis, and the 49-month stock market crash recovery.',
    targetAudience: 'Finance professionals, business students, traders, and institutional researchers',
    searchIntent: 'Informational & Case Study Investigation'
  },
  crash2020: {
    pageName: 'COVID-19 Stock Market Crash of 2020',
    canonicalPath: '/crashes/2020-covid-market-crash',
    primaryKeyword: '2020 stock market crash',
    relatedKeyword1: 'COVID-19 stock market crash',
    relatedKeyword2: '2020 stock market crash recovery',
    seoTitle: '2020 Stock Market Crash: COVID-19 Plunge & Recovery',
    metaDescription: 'Analyze the 2020 stock market crash, the rapid COVID-19 stock market crash decline in 33 days, circuit breakers, and the historic 5-month V-shaped recovery.',
    targetAudience: 'Retail investors, macro analysts, economics students, and wealth managers',
    searchIntent: 'Informational & Contemporary Event Analysis'
  },
  crashesCatalog: {
    pageName: 'All Stock Market Crashes Catalog',
    canonicalPath: '/crashes',
    primaryKeyword: 'list of stock market crashes',
    relatedKeyword1: 'historical financial panics',
    relatedKeyword2: 'market crash percentage declines',
    seoTitle: 'Complete List of Stock Market Crashes: 1929–2022',
    metaDescription: 'Explore our complete list of stock market crashes. Compare historical financial panics, verified peak-to-trough drawdowns, and recovery periods worldwide.',
    targetAudience: 'Investors seeking historical drawdown benchmarks across cycles',
    searchIntent: 'Commercial Investigation & Reference'
  },
  indiaHub: {
    pageName: 'Indian Stock Market Crashes',
    canonicalPath: '/crashes/india',
    primaryKeyword: 'Indian stock market crashes',
    relatedKeyword1: 'Harshad Mehta 1992 scam crash',
    relatedKeyword2: 'Sensex crash history',
    seoTitle: 'Indian Stock Market Crashes: Harshad Mehta to 2020',
    metaDescription: 'Complete archive of Indian stock market crashes from the 1992 Harshad Mehta scam to March 2020. Discover Sensex crash history and SEBI regulatory reforms.',
    targetAudience: 'Indian retail equity investors, Dalal Street analysts, and finance students',
    searchIntent: 'Informational & Regional Financial History'
  },
  timeline: {
    pageName: 'Historical Market Crash Timeline',
    canonicalPath: '/timeline',
    primaryKeyword: 'stock market crash timeline',
    relatedKeyword1: 'chronological financial crises',
    relatedKeyword2: 'history of market drawdowns',
    seoTitle: 'Stock Market Crash Timeline: 1637 to Modern Era',
    metaDescription: 'Chronological stock market crash timeline documenting speculative bubbles and financial crises from 17th-century Tulip Mania to the 2022 bear market.',
    targetAudience: 'Students and educators needing visual chronological event tracking',
    searchIntent: 'Informational & Educational'
  },
  compare: {
    pageName: 'Compare Market Crashes Tool',
    canonicalPath: '/compare',
    primaryKeyword: 'compare stock market crashes',
    relatedKeyword1: 'market crash drawdown comparison',
    relatedKeyword2: 'crash recovery duration chart',
    seoTitle: 'Compare Stock Market Crashes: Drawdowns & Data',
    metaDescription: 'Compare stock market crashes side-by-side. Analyze market crash drawdown comparisons, recovery duration charts, and policy responses across crises.',
    targetAudience: 'Quantitative analysts, researchers, and portfolio managers',
    searchIntent: 'Comparative Research & Interactive Analysis'
  },
  causes: {
    pageName: 'Causes of Market Crashes',
    canonicalPath: '/causes',
    primaryKeyword: 'causes of stock market crashes',
    relatedKeyword1: 'what triggers a stock market crash',
    relatedKeyword2: 'market crash warning signs',
    seoTitle: 'Causes of Stock Market Crashes: 6 Root Triggers',
    metaDescription: 'Understand the fundamental causes of stock market crashes. Discover what triggers a stock market crash, from excessive leverage to liquidity black holes.',
    targetAudience: 'Risk managers, retail investors, and financial advisors',
    searchIntent: 'Educational & Risk Management'
  },
  recovery: {
    pageName: 'Market Recovery Studies',
    canonicalPath: '/recovery',
    primaryKeyword: 'stock market recovery time',
    relatedKeyword1: 'how long do bear markets last',
    relatedKeyword2: 'average market crash recovery',
    seoTitle: 'Stock Market Recovery Time: How Long Crashes Last',
    metaDescription: 'Empirical research into stock market recovery time. Learn how long bear markets last, average recovery lengths, and dividend reinvestment impacts.',
    targetAudience: 'Long-term equity investors, retirement planners, and wealth advisors',
    searchIntent: 'Informational & Investment Strategy'
  },
  lessons: {
    pageName: 'Lessons for Investors',
    canonicalPath: '/lessons',
    primaryKeyword: 'stock market crash lessons',
    relatedKeyword1: 'how to survive a market crash',
    relatedKeyword2: 'investing during market downturns',
    seoTitle: 'Stock Market Crash Lessons: 6 Rules for Investors',
    metaDescription: 'Timeless stock market crash lessons synthesized from 100+ years of history. Discover how to survive a market crash and invest during market downturns.',
    targetAudience: 'Value investors, retail traders, and financial planners',
    searchIntent: 'Educational & Practical Guidance'
  },
  seoReport: {
    pageName: 'SEO Assignment Report',
    canonicalPath: '/seo-report',
    primaryKeyword: 'college SEO assignment report',
    relatedKeyword1: 'market crash archive SEO audit',
    relatedKeyword2: 'technical SEO and AEO strategy',
    seoTitle: 'SEO Report: Keyword Research, AEO & Technical Audit',
    metaDescription: 'Comprehensive College SEO Assignment Report for Market Crash Archive. Features keyword research tables, AEO Q&A mappings, technical SEO audit, and Vercel setup.',
    targetAudience: 'College professor, course evaluator, and digital marketing presentation audience',
    searchIntent: 'Academic & Educational Evaluation'
  }
};
