export interface RecoveryStat {
  crashName: string;
  year: number;
  index: string;
  drawdown: number;
  durationMonths: number;
  recoveryMonths: number;
  shape: 'V-Shaped' | 'U-Shaped' | 'L-Shaped / Secular' | 'W-Shaped (Double Dip)';
  nominalBreakeven: string;
  realBreakevenNotes: string;
}

export const recoveryStudiesData: RecoveryStat[] = [
  {
    crashName: 'Wall Street Crash of 1929',
    year: 1929,
    index: 'Dow Jones (DJIA)',
    drawdown: -89.2,
    durationMonths: 34,
    recoveryMonths: 302,
    shape: 'L-Shaped / Secular',
    nominalBreakeven: 'November 1954 (25.2 years)',
    realBreakevenNotes: 'Nominal took 25 years. However, due to severe 30% deflation and high dividend yields (which averaged 6-10%), a dividend-reinvested real purchasing power investor broke even in 1936–1944.'
  },
  {
    crashName: 'Black Monday 1987',
    year: 1987,
    index: 'Dow Jones (DJIA)',
    drawdown: -35.1,
    durationMonths: 3.5,
    recoveryMonths: 20,
    shape: 'V-Shaped',
    nominalBreakeven: 'August 1989 (1.7 years)',
    realBreakevenNotes: 'Rapid recovery as the underlying economy never entered a recession; GDP expanded over 4% in 1988.'
  },
  {
    crashName: 'Dot-Com Bubble Crash',
    year: 2000,
    index: 'NASDAQ Composite',
    drawdown: -77.9,
    durationMonths: 31,
    recoveryMonths: 181,
    shape: 'U-Shaped',
    nominalBreakeven: 'April 2015 (15.1 years)',
    realBreakevenNotes: 'Broad S&P 500 recovered by 2007, but pure tech index took 15 years to rebuild genuine corporate earnings fundamentals.'
  },
  {
    crashName: 'Global Financial Crisis',
    year: 2008,
    index: 'S&P 500',
    drawdown: -56.8,
    durationMonths: 17,
    recoveryMonths: 49,
    shape: 'U-Shaped',
    nominalBreakeven: 'March 2013 (4.1 years)',
    realBreakevenNotes: 'Total return with dividends reinvested reached all-time highs by late 2012, 6 months ahead of the price-only index.'
  },
  {
    crashName: 'India Harshad Mehta Crash',
    year: 1992,
    index: 'BSE Sensex',
    drawdown: -54.4,
    durationMonths: 12,
    recoveryMonths: 28,
    shape: 'V-Shaped',
    nominalBreakeven: 'August 1994 (2.3 years)',
    realBreakevenNotes: 'Economic liberalization and FII opening drove a swift macro turnaround despite the regulatory shock.'
  },
  {
    crashName: 'India Sensex Crash 2008',
    year: 2008,
    index: 'BSE Sensex',
    drawdown: -63.7,
    durationMonths: 10,
    recoveryMonths: 34,
    shape: 'V-Shaped',
    nominalBreakeven: 'November 2010 (2.8 years)',
    realBreakevenNotes: 'Spurred by a decisive 2009 election and domestic fiscal and monetary support, the Sensex recovered faster than developed Western markets.'
  },
  {
    crashName: 'COVID-19 Market Crash',
    year: 2020,
    index: 'S&P 500',
    drawdown: -33.9,
    durationMonths: 1.1,
    recoveryMonths: 5,
    shape: 'V-Shaped',
    nominalBreakeven: 'August 2020 (0.4 years)',
    realBreakevenNotes: 'Fastest 30% drop and subsequent fastest recovery in modern market history, driven by unlimited monetary and fiscal backstops.'
  },
  {
    crashName: 'India Sensex COVID Crash',
    year: 2020,
    index: 'BSE Sensex',
    drawdown: -38.1,
    durationMonths: 2.1,
    recoveryMonths: 8,
    shape: 'V-Shaped',
    nominalBreakeven: 'November 2020 (0.7 years)',
    realBreakevenNotes: 'Fueled by an explosion of domestic retail Demat accounts and persistent monthly SIP mutual fund inflows.'
  },
  {
    crashName: 'Global Bear Market of 2022',
    year: 2022,
    index: 'S&P 500',
    drawdown: -25.4,
    durationMonths: 9.3,
    recoveryMonths: 24,
    shape: 'U-Shaped',
    nominalBreakeven: 'January 2024 (2.0 years)',
    realBreakevenNotes: 'Multiple compression reversed as inflation fell from 9% to 3% and artificial intelligence enterprise spending took off.'
  }
];

export const recoveryStudyInsights = {
  averageDrawdownPercent: -49.4,
  averageDurationMonths: 13.3,
  averageRecoveryMonths: 72.8,
  medianRecoveryMonths: 28.0,
  keyFindings: [
    {
      title: 'The Liquidity vs. Solvency Dichotomy',
      description: 'Crashes triggered by mechanical liquidity shortages (1987, 2010, 2018) or exogenous shocks (2020) recover within 4 to 20 months. Crashes rooted in systemic banking insolvency and debt-deflation (1929, 2008) require 4 to 25 years.'
    },
    {
      title: 'Dividend Reinvestment Shortens Real Recovery by 30-50%',
      description: 'Historical studies consistently reveal that price-only indices exaggerate the duration of investor suffering. Reinvesting high dividend yields at depressed market lows dramatically accelerates the breakeven date.'
    },
    {
      title: 'The Power of Systematic Dollar-Cost Averaging',
      description: 'An investor who continues purchasing through a crash doesn’t need the market to return to previous peaks to reach portfolio profitability; the average cost per share drops precipitously during the trough.'
    },
    {
      title: 'Inflation-Adjusted Real Returns vs. Nominal Illusion',
      description: 'In 1929, deflation actually enhanced the purchasing power of surviving dollars. Conversely, during 1973–1974 and 2022, high inflation meant nominal breakeven dates masked ongoing real purchasing power degradation.'
    }
  ]
};
