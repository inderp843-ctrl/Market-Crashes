export interface ArchiveSource {
  id: string;
  title: string;
  authorOrInstitution: string;
  year: string;
  category: 'Central Banking' | 'Securities Regulation' | 'Academic Research' | 'Government Reports' | 'Historical Archives';
  url?: string;
  description: string;
  associatedEvents: string[];
}

export const archiveSources: ArchiveSource[] = [
  {
    id: 'fed-1929',
    title: 'The Stock Market Crash of 1929',
    authorOrInstitution: 'Federal Reserve Bank of Richmond / Federal Reserve History',
    year: '2013',
    category: 'Central Banking',
    url: 'https://www.federalreservehistory.org/essays/stock-market-crash-of-1929',
    description: 'Detailed analysis of the monetary policy dynamics, broker call loans, and reserve bank responses during the 1929 crash.',
    associatedEvents: ['1929-wall-street-crash']
  },
  {
    id: 'friedman-schwartz',
    title: 'A Monetary History of the United States, 1867–1960',
    authorOrInstitution: 'Milton Friedman & Anna J. Schwartz (NBER / Princeton University Press)',
    year: '1963',
    category: 'Academic Research',
    description: 'Seminal macroeconomic treatise detailing how the Federal Reserve permitted a one-third contraction in money supply between 1929 and 1933.',
    associatedEvents: ['1929-wall-street-crash', '1873-panic-of-1873', '1907-bankers-panic']
  },
  {
    id: 'brady-report',
    title: 'Report of the Presidential Task Force on Market Mechanisms (The Brady Report)',
    authorOrInstitution: 'Presidential Task Force / Nicholas F. Brady, Chairman',
    year: '1988',
    category: 'Government Reports',
    url: 'https://www.treasury.gov',
    description: 'The definitive post-mortem on the 1987 crash, documenting the mechanics of portfolio insurance, index arbitrage, and specialist capital depletion.',
    associatedEvents: ['1987-black-monday']
  },
  {
    id: 'sec-cftc-flash-crash',
    title: 'Findings Regarding the Market Events of May 6, 2010',
    authorOrInstitution: 'U.S. Securities and Exchange Commission & Commodity Futures Trading Commission',
    year: '2010',
    category: 'Securities Regulation',
    url: 'https://www.sec.gov/news/studies/2010/marketevents-report.pdf',
    description: 'Official joint regulatory investigation into algorithmic execution algorithms, order book depth evaporation, and spoofing.',
    associatedEvents: ['2010-flash-crash']
  },
  {
    id: 'fcic-report',
    title: 'The Financial Crisis Inquiry Report',
    authorOrInstitution: 'Financial Crisis Inquiry Commission (U.S. Congress)',
    year: '2011',
    category: 'Government Reports',
    url: 'https://www.govinfo.gov/app/details/GPO-FCIC',
    description: '662-page statutory congressional investigation into the causes of the 2008 subprime mortgage securitization collapse and shadow banking run.',
    associatedEvents: ['2008-global-financial-crisis']
  },
  {
    id: 'jpc-1992-scam',
    title: 'Report of the Joint Committee to Enquire into Irregularities in Securities and Banking Transactions',
    authorOrInstitution: 'Parliament of India (Joint Parliamentary Committee)',
    year: '1993',
    category: 'Government Reports',
    description: 'Official Indian parliamentary inquiry into the misuse of Bank Receipts (BRs), interbank transactions, and the Harshad Mehta market manipulations.',
    associatedEvents: ['1992-harshad-mehta-scam']
  },
  {
    id: 'rbi-annual-2008',
    title: 'Managing Global Financial Turmoil: Macroeconomic and Monetary Developments',
    authorOrInstitution: 'Reserve Bank of India (RBI)',
    year: '2009',
    category: 'Central Banking',
    url: 'https://www.rbi.org.in',
    description: 'Official assessment of FII capital flight, liquidity backstops, CRR cuts, and domestic financial stability during the 2008 crisis.',
    associatedEvents: ['2008-sensex-crash']
  },
  {
    id: 'rbi-covid-2020',
    title: 'Monetary Policy Report & COVID-19 Liquidity Facilities',
    authorOrInstitution: 'Reserve Bank of India (RBI Monetary Policy Committee)',
    year: '2020',
    category: 'Central Banking',
    url: 'https://www.rbi.org.in',
    description: 'Documentation of emergency rate cuts, Targeted Long-Term Repo Operations (TLTRO), and loan moratorium frameworks implemented in March 2020.',
    associatedEvents: ['2020-sensex-crash']
  },
  {
    id: 'bis-china-2015',
    title: 'The 2015 Chinese Stock Market Turmoil and Currency Pressures',
    authorOrInstitution: 'Bank for International Settlements (BIS Quarterly Review)',
    year: '2015',
    category: 'Central Banking',
    url: 'https://www.bis.org',
    description: 'Exploration of umbrella trusts, shadow margin financing, and the subsequent depreciation pressures on the Chinese yuan.',
    associatedEvents: ['2015-china-stock-market-crash']
  },
  {
    id: 'imf-asian-crisis',
    title: 'The Asian Financial Crisis: Origins, Contagion, and Policy Responses',
    authorOrInstitution: 'International Monetary Fund (IMF)',
    year: '1998',
    category: 'Academic Research',
    url: 'https://www.imf.org',
    description: 'Detailed analysis of short-term unhedged foreign currency debt, fixed exchange rate vulnerabilities, and East Asian capital flight.',
    associatedEvents: ['1997-asian-financial-crisis']
  },
  {
    id: 'shiller-irrational',
    title: 'Irrational Exuberance (3rd Edition)',
    authorOrInstitution: 'Robert J. Shiller (Princeton University Press)',
    year: '2015',
    category: 'Academic Research',
    description: 'Nobel laureate Robert Shiller’s canonical study on psychological feedback loops, the CAPE ratio, and structural stock market bubbles.',
    associatedEvents: ['2000-dot-com-bubble', '1929-wall-street-crash']
  },
  {
    id: 'reinhart-rogoff',
    title: 'This Time Is Different: Eight Centuries of Financial Folly',
    authorOrInstitution: 'Carmen M. Reinhart & Kenneth S. Rogoff (Princeton University Press)',
    year: '2009',
    category: 'Academic Research',
    description: 'Comprehensive historical database tracking sovereign defaults, banking panics, and currency collapses across 66 countries over 800 years.',
    associatedEvents: ['1929-wall-street-crash', '2008-global-financial-crisis', '1997-asian-financial-crisis']
  }
];
