import { GlossaryItem } from '../types';

export const glossaryTerms: GlossaryItem[] = [
  {
    term: 'Circuit Breaker',
    category: 'Market Microstructure',
    definition: 'An automated regulatory mechanism that temporarily halts or shuts down trading on an entire exchange or in individual securities when prices decline past pre-set thresholds (e.g., Level 1 at 7%, Level 2 at 13%, and Level 3 at 20% in the US). Designed to curb panic selling and allow price discovery to resume rationally.',
    historicalExample: 'First adopted after Black Monday 1987. Triggered four times in March 2020 on the NYSE, and twice in March 2020 on the BSE/NSE in India.',
    relatedTerms: ['Limit-Up/Limit-Down (LULD)', 'Trading Halt', 'Volatility Interruption']
  },
  {
    term: 'Margin Call',
    category: 'Leverage & Credit',
    definition: 'A broker\'s formal demand that an investor deposit additional cash or unencumbered securities into their account to bring the account equity back up to the maintenance margin requirement following a decline in the value of leveraged securities.',
    historicalExample: 'In October 1929, brokers demanded that investors provide immediate cash for 90% leveraged accounts; inability to pay led to automatic forced market sales, intensifying the crash.',
    relatedTerms: ['Deleveraging', 'Forced Liquidation', 'Maintenance Margin']
  },
  {
    term: 'Drawdown (Peak-to-Trough)',
    category: 'Quantitative Finance',
    definition: 'The percentage decline from the highest peak value of an index, portfolio, or asset to its subsequent lowest trough before a new peak is achieved. Measures the magnitude of capital loss an investor would endure at the worst entry point.',
    historicalExample: 'The S&P 500 suffered a -56.8% closing drawdown between October 9, 2007 and March 9, 2009.',
    relatedTerms: ['Bear Market', 'Correction', 'Recovery Period']
  },
  {
    term: 'Bear Market vs. Correction',
    category: 'Market Cycles',
    definition: 'A market correction is traditionally defined as a decline of between 10% and 19.9% from recent highs. A bear market is defined as a cumulative closing decline of 20% or greater. Bear markets are typically associated with recessions or substantial monetary tightening.',
    historicalExample: 'The 2018 market sell-off (-19.8% on S&P 500) narrowly avoided the technical 20% threshold, whereas 2022 was an official bear market (-25.4%).',
    relatedTerms: ['Drawdown', 'Bull Market', 'Recession']
  },
  {
    term: 'Portfolio Insurance',
    category: 'Quantitative Strategies',
    definition: 'A computerized dynamic hedging strategy popular in the 1980s that systematically sold equity index futures contracts whenever underlying stock prices fell, attempting to synthetically replicate a put option to protect portfolio floor value.',
    historicalExample: 'A primary mechanical driver of the Black Monday 1987 crash, where billions of dollars in automated sell orders overwhelmed market bids in Chicago and New York.',
    relatedTerms: ['Dynamic Hedging', 'Algorithmic Trading', 'Index Arbitrage']
  },
  {
    term: 'Liquidity Black Hole / Freeze',
    category: 'Liquidity & Solvency',
    definition: 'A market condition where participants withdraw all buy bids simultaneously, causing bid-ask spreads to blow out and market transactions to grind to a halt even for high-grade assets.',
    historicalExample: 'During the 2008 Lehman collapse and the March 2020 "dash for cash", even US Treasuries experienced temporary illiquidity before central bank purchases.',
    relatedTerms: ['Bid-Ask Spread', 'Repo Freeze', 'Lender of Last Resort']
  },
  {
    term: 'High-Frequency Trading (HFT)',
    category: 'Market Microstructure',
    definition: 'Algorithmic trading characterized by high speeds, sophisticated software, high turnover rates, and ultra-low latency co-located server connections to exchanges.',
    historicalExample: 'During the May 6, 2010 Flash Crash, HFT market-making algorithms simultaneously pulled their quotes upon detecting unusual order volume, leading to instantaneous price drops.',
    relatedTerms: ['Spoofing', 'Flash Crash', 'Order Book Depth']
  },
  {
    term: 'Quantitative Easing (QE)',
    category: 'Monetary Policy',
    definition: 'An unconventional monetary policy tool used by central banks where they purchase long-term government bonds and other financial assets from the open market to lower long-term interest rates and flood the banking system with reserves.',
    historicalExample: 'Employed by the Federal Reserve, ECB, and Bank of England in 2008, and expanded in unprecedented scale ("unlimited QE") in March 2020.',
    relatedTerms: ['Quantitative Tightening (QT)', 'Balance Sheet Expansion', 'Zero Lower Bound']
  },
  {
    term: 'Quantitative Tightening (QT)',
    category: 'Monetary Policy',
    definition: 'The contraction of a central bank’s balance sheet by allowing maturing bonds to roll off without reinvestment or by actively selling bonds, draining liquidity from financial markets.',
    historicalExample: 'Fed QT in 2018 drained $50B/month, contributing to the Q4 2018 market plunge; resumed in 2022–2023 to combat 40-year-high inflation.',
    relatedTerms: ['Quantitative Easing (QE)', 'Federal Funds Rate', 'Money Supply (M2)']
  },
  {
    term: 'Badla System',
    category: 'Indian Market History',
    definition: 'A traditional indigenous carry-forward settlement mechanism utilized on the Bombay Stock Exchange (BSE) where settlement of trades could be postponed from one settlement cycle to the next upon payment of interest (badla charges).',
    historicalExample: 'Heavily abused during the 1992 Harshad Mehta scam and the 2001 Ketan Parekh crisis; permanently banned by SEBI in 2001 in favor of modern exchange-traded derivatives.',
    relatedTerms: ['Settlement Cycle (T+1)', 'SEBI', 'Harshad Mehta']
  },
  {
    term: 'Foreign Institutional Investor (FII / FPI)',
    category: 'Capital Flows',
    definition: 'Foreign pension funds, mutual funds, sovereign wealth funds, and hedge funds registered to invest directly in domestic securities of another nation.',
    historicalExample: 'During both 2008 and March 2020, massive FII capital outflows were the dominant catalyst behind deep percentage drops in the BSE Sensex and Nifty 50.',
    relatedTerms: ['Capital Flight', 'Domestic Institutional Investor (DII)', 'Systematic Investment Plan (SIP)']
  },
  {
    term: 'Systemic Risk',
    category: 'Macroeconomics',
    definition: 'The possibility that an event at the micro level of an individual firm, sector, or financial institution could trigger severe instability or collapse of the entire financial system.',
    historicalExample: 'The failure of Lehman Brothers in September 2008 triggered systemic risk across interbank lending, commercial paper, and money market funds globally.',
    relatedTerms: ['Contagion', 'Too Big to Fail', 'Interconnectedness']
  },
  {
    term: 'VIX (Volatility Index)',
    category: 'Market Metrics',
    definition: 'The Cboe Volatility Index, often called the market\'s "fear gauge", which measures the market\'s expectation of 30-day forward-looking volatility implied by S&P 500 index options.',
    historicalExample: 'The VIX reached all-time historical peaks of 80.86 in November 2008 and 82.69 on March 16, 2020.',
    relatedTerms: ['Implied Volatility', 'Option Pricing', 'Hedging']
  },
  {
    term: 'Moral Hazard',
    category: 'Economic Theory',
    definition: 'A situation in which one party gets involved in a risky event knowing that it is protected against the risk and the other party will incur the cost (e.g., expecting a government bailout).',
    historicalExample: 'Investment banks took excessive subprime leverage prior to 2008 expecting that government or central bank rescues would prevent bankruptcy.',
    relatedTerms: ['Greenspan Put', 'Bailout', 'TARP']
  }
];
