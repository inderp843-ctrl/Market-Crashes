export interface CauseCategory {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  iconName: string;
  description: string;
  historicalExamples: {
    event: string;
    mechanism: string;
    year: number;
    slug: string;
  }[];
  structuralMechanics: string[];
  earlyWarningSignals: string[];
  investorMitigations: string[];
}

export const causesData: CauseCategory[] = [
  {
    id: 'excessive-leverage',
    title: 'Excessive Leverage & Margin Debt',
    subtitle: 'The ultimate accelerator that turns ordinary market pullbacks into catastrophic forced-liquidation spirals.',
    tag: 'Credit Dynamics',
    iconName: 'Zap',
    description: 'When asset purchases are financed with borrowed money—whether retail margin accounts, broker call loans, hedge fund repo borrowing, or corporate share buyback debt—any decline in collateral value triggers margin calls. If borrowers cannot meet these demands, lenders execute automatic fire-sales, depressing prices further and creating a vicious cascade.',
    historicalExamples: [
      { event: 'Wall Street Crash of 1929', mechanism: '10% cash down payments allowed 9x leverage across retail and institutional participants.', year: 1929, slug: '1929-wall-street-crash' },
      { event: 'Global Financial Crisis of 2008', mechanism: 'Wall Street investment banks operated at 35:1 to 40:1 leverage funded via overnight repo borrowing.', year: 2008, slug: '2008-global-financial-crisis' },
      { event: 'China Stock Market Crash of 2015', mechanism: 'Informal shadow margin umbrella trusts provided retail traders with 5x to 10x leverage.', year: 2015, slug: '2015-china-stock-market-crash' }
    ],
    structuralMechanics: [
      'Borrowing short-term to fund long-term illiquid assets (maturity mismatch).',
      'Sudden increase in haircut or margin maintenance requirements by lenders.',
      'Positive feedback loop: liquidation pushes prices down, triggering the next tranche of margin calls.',
      'Evaporation of counterparty trust in interbank overnight credit markets.'
    ],
    earlyWarningSignals: [
      'Broker margin debt rising significantly faster than nominal GDP or equity market capitalization.',
      'Proliferation of complex synthetic derivative instruments that hide debt off-balance-sheet.',
      'Inversion of the yield curve indicating tightening bank funding conditions.'
    ],
    investorMitigations: [
      'Avoid personal margin borrowing; cash accounts can experience drawdown without forced liquidation.',
      'Monitor corporate interest coverage ratios and debt-to-equity metrics before purchasing individual equities.',
      'Maintain an unencumbered cash buffer to capitalize on forced-selling dislocations.'
    ]
  },
  {
    id: 'valuation-bubbles',
    title: 'Speculative Euphoria & Valuation Detachment',
    subtitle: 'When "New Era" narratives convince the public that traditional cash-flow mathematics no longer apply.',
    tag: 'Behavioral & Asset Pricing',
    iconName: 'TrendingUp',
    description: 'Speculative bubbles develop when rising prices attract new buyers whose sole motivation is the expectation of selling to someone else at a higher price (the "greater fool theory"). Fundamental valuation metrics like price-to-earnings (P/E), discounted free cash flows, and book value are dismissed as obsolete artifacts of an old economic paradigm.',
    historicalExamples: [
      { event: 'Dot-Com Bubble of 2000', mechanism: 'Startups with zero revenues and negative cash flows were valued in billions based on "eyeballs" and clicks.', year: 2000, slug: '2000-dot-com-bubble' },
      { event: '1992 Harshad Mehta Crisis', mechanism: 'Mehta promoted the "replacement cost theory" to justify ACC trading at over ₹9,000 per share.', year: 1992, slug: '1992-harshad-mehta-scam' },
      { event: 'South Sea Bubble of 1720', mechanism: 'Shares in an unproven South American trading monopoly surged 700% on wild speculation.', year: 1720, slug: 'crashes' }
    ],
    structuralMechanics: [
      'Narrative contagion: appealing story of revolutionary economic transformation.',
      'Retail FOMO (Fear Of Missing Out) amplified by media coverage and peer anecdotes.',
      'Analyst conflict of interest and institutional incentives to validate bubble valuations.',
      'Exhaustion of marginal buyers: once everyone has bought, the bid cannot be sustained.'
    ],
    earlyWarningSignals: [
      'CAPE (Shiller P/E) ratio moving more than two standard deviations above its 50-year historical mean.',
      'Flood of low-quality IPOs doubling on their first day of trading.',
      'Ubiquitous popular culture saturation where taxi drivers and casual acquaintances give unsolicited stock tips.'
    ],
    investorMitigations: [
      'Ground portfolio decisions in tangible free cash flow generation and dividend yield.',
      'Rebalance systematically: trim outperforming overvalued sectors into defensive or value assets.',
      'Recognize that revolutionary technology does not guarantee individual equity profitability.'
    ]
  },
  {
    id: 'monetary-tightening',
    title: 'Monetary Policy Shocks & Interest Rate Hikes',
    subtitle: 'When central banks raise the cost of capital to fight inflation or cool speculative excess.',
    tag: 'Macroeconomic Policy',
    iconName: 'Percent',
    description: 'Interest rates represent the gravity of the financial universe. When central banks rapidly raise benchmark rates or shrink their balance sheets, two things happen simultaneously: the risk-free discount rate applied to future corporate earnings rises (lowering present equity values), and borrowing costs for consumers and businesses increase, cooling economic demand.',
    historicalExamples: [
      { event: 'Global Bear Market of 2022', mechanism: 'The Fed hiked rates by 425 bps in 9 months to fight 9.1% inflation, crushing high-duration tech equities.', year: 2022, slug: '2022-bear-market' },
      { event: 'Global Market Sell-Off of 2018', mechanism: 'Simultaneous quantitative tightening (QT) and four rate hikes triggered a Q4 Christmas Eve plunge.', year: 2018, slug: '2018-market-selloff' },
      { event: 'Federal Reserve 1928–1929 Rate Hikes', mechanism: 'Fed raised discount rate from 3.5% to 6.0% to curb stock market speculation, inadvertently precipitating the crash.', year: 1929, slug: '1929-wall-street-crash' }
    ],
    structuralMechanics: [
      'Present-value discounting: high-growth companies with profits far in the future suffer the steepest valuation de-ratings.',
      'Higher yields on sovereign bonds and cash instruments offer a viable, safe alternative to risky equities (TINA is replaced).',
      'Corporate refinancing friction as cheap debt matures into much higher interest expense.',
      'Housing and capital expenditure contractions slowing macroeconomic earnings.'
    ],
    earlyWarningSignals: [
      'Persistent inflation above central bank targets forcing hawkish forward guidance.',
      'Inversion of the 2-year / 10-year Treasury yield curve.',
      'Rapid contraction in global broad money supply (M2).'
    ],
    investorMitigations: [
      'Favor companies with low net debt, high interest coverage, and strong pricing power.',
      'Shorten portfolio duration and maintain allocations to cash or short-dated yield assets during tightening cycles.',
      'Do not rely on the "central bank put" when inflation is significantly elevated.'
    ]
  },
  {
    id: 'market-microstructure',
    title: 'Algorithmic Execution & Microstructure Failures',
    subtitle: 'When computerized trading models, automated stop-losses, and liquidity vacuums cause instantaneous flash drops.',
    tag: 'Technological & Structure',
    iconName: 'Cpu',
    description: 'Modern stock markets rely on electronic order matching, high-frequency algorithms, and quantitative dynamic hedging models. While these systems provide narrow spreads and high efficiency in quiet markets, they can abruptly pull liquidity or trigger coordinated selling loops during stress, creating violent intraday air pockets.',
    historicalExamples: [
      { event: 'Black Monday 1987', mechanism: 'Automated portfolio insurance algorithms continuously sold futures as prices dropped, overwhelming floor specialists.', year: 1987, slug: '1987-black-monday' },
      { event: 'Flash Crash of May 6, 2010', mechanism: 'HFT algorithms withdrew quotes upon detecting large algorithmic sell orders, dropping the Dow 998 points in 20 minutes.', year: 2010, slug: '2010-flash-crash' },
      { event: 'Volmageddon (February 2018)', mechanism: 'Inverse VIX products imploded overnight due to mechanical end-of-day rebalancing requirements.', year: 2018, slug: '2018-market-selloff' }
    ],
    structuralMechanics: [
      'Phantom liquidity: apparent order-book depth disappears the instant volatility surges.',
      'Dynamic hedging feedback loops: falling prices force systematic models to sell more to maintain target risk.',
      'Latency arbitrage and fragmentation across dozens of competing electronic exchanges and dark pools.',
      'Execution delays and data feed lags causing participants to trade blind.'
    ],
    earlyWarningSignals: [
      'Extreme crowding into low-volatility or short-volatility quantitative strategies.',
      'Widening divergence between spot equity prices and index futures or ETFs.',
      'Microstructure warning signs such as repeated mini-flash crashes in individual single stocks.'
    ],
    investorMitigations: [
      'Never use unconstrained market orders or unconstrained stop-loss market orders during high volatility.',
      'Use stop-limit orders or option collars to hedge downside risk.',
      'Avoid complex exchange-traded products with daily compounding or inverse leverage.'
    ]
  },
  {
    id: 'exogenous-shocks',
    title: 'Exogenous Black Swans: Pandemics & Geopolitics',
    subtitle: 'Sudden, unforecastable real-world events that shock international trade, human mobility, and energy supply.',
    tag: 'External Disruptions',
    iconName: 'ShieldAlert',
    description: 'Unlike internal financial imbalances, exogenous shocks originate outside the financial system: global pandemics, unexpected wars, energy embargoes, and major natural disasters. These events fundamentally disrupt the physical supply chains and commercial activities that generate corporate revenues.',
    historicalExamples: [
      { event: 'COVID-19 Market Crash of 2020', mechanism: 'Global lockdowns halted economic mobility, triggering the fastest 30% drop in market history.', year: 2020, slug: '2020-covid-market-crash' },
      { event: '1973 OPEC Oil Embargo', mechanism: 'Quadrupling of oil prices ignited global stagflation and a severe 48% bear market in the S&P 500.', year: 1973, slug: 'causes' },
      { event: 'Russian Invasion of Ukraine (2022)', mechanism: 'Severed European energy flows and agricultural supply, cementing generational inflation.', year: 2022, slug: '2022-bear-market' }
    ],
    structuralMechanics: [
      'Instantaneous revision of corporate revenue and earnings forecasts downward.',
      'Extreme dash for cash: market participants sell liquid assets regardless of fundamental value.',
      'Physical supply-side bottlenecks that cannot be resolved quickly by monetary stimulus alone.',
      'Heightened geopolitical uncertainty risk premiums priced into global asset valuations.'
    ],
    earlyWarningSignals: [
      'By definition, true black swan events offer little advance warning in financial data.',
      'Early epidemiological warnings or geopolitical troop build-ups that the market initially brushes off.'
    ],
    investorMitigations: [
      'Maintain an all-weather asset allocation with non-correlated assets (cash, gold, sovereign bonds).',
      'Keep an emergency liquidity fund to prevent forced selling during societal lockdowns or disruptions.',
      'Recognize that markets bottom when the worst-case scenario is bounded, well before reality fully normalizes.'
    ]
  },
  {
    id: 'fraud-regulatory-collapse',
    title: 'Systemic Fraud & Institutional Regulatory Failure',
    subtitle: 'When corruption, deceptive financial engineering, and regulatory loopholes poison market trust.',
    tag: 'Governance & Integrity',
    iconName: 'AlertTriangle',
    description: 'Markets function on trust: trust that reported financial statements reflect corporate reality, that exchange settlement guarantees deliver shares, and that clearinghouses are solvent. When structural fraud or regulatory blindness is unmasked at scale, trust evaporates and market pricing mechanisms seize up.',
    historicalExamples: [
      { event: '1992 Harshad Mehta Securities Scam', mechanism: 'Used fake Bank Receipts and diverted interbank credit to artificially rig Bombay Stock Exchange shares.', year: 1992, slug: '1992-harshad-mehta-scam' },
      { event: 'Enron & WorldCom Scandals (2001–2002)', mechanism: 'Off-balance-sheet special purpose vehicles and capitalized operating expenses hid massive insolvencies.', year: 2000, slug: '2000-dot-com-bubble' },
      { event: '2008 Credit Rating Agencies Failure', mechanism: 'Conflicted rating agencies granted triple-A ratings to defective subprime mortgage pools.', year: 2008, slug: '2008-global-financial-crisis' }
    ],
    structuralMechanics: [
      'Regulatory arbitrage: exploiting blind spots between different supervisory agencies.',
      'Self-regulatory organization (SRO) capture where brokers oversee their own trading rules.',
      'Deceptive accounting practices that delay recognition of bad debts or liabilities.',
      'Sudden loss of market confidence resulting in a buyer strike.'
    ],
    earlyWarningSignals: [
      'Unusual divergence between reported net income and actual operating cash flow.',
      'Frequent auditor resignations or complex, opaque corporate subsidiary structures.',
      'Promoters or executives heavily pledging personal shares to secure outside loans.'
    ],
    investorMitigations: [
      'Perform forensic balance sheet analysis: prioritize operating cash flow over GAAP or pro-forma earnings.',
      'Avoid companies with complex related-party transactions or unverified corporate governance structures.',
      'Diversify across multiple institutions, custodians, and exchanges to mitigate counterparty risk.'
    ]
  }
];
