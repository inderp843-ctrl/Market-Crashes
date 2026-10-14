export interface InvestorLesson {
  id: string;
  number: string;
  title: string;
  quote: string;
  quoteAuthor: string;
  summary: string;
  historicalContext: string;
  practicalAction: string[];
  crashReferences: { name: string; slug: string }[];
}

export const investorLessonsData: InvestorLesson[] = [
  {
    id: 'lesson-1',
    number: '01',
    title: 'Leverage Turns Volatility Into Instant Wipeout',
    quote: 'When you combine ignorance and leverage, you get some pretty interesting results.',
    quoteAuthor: 'Warren Buffett',
    summary: 'In an unleveraged cash account, a 50% market decline is a painful paper loss that can recover given time. In a leveraged margin account, a 50% decline triggers automatic liquidation at the exact bottom, locking in total ruin with zero recovery opportunity.',
    historicalContext: 'Whether retail investors in 1929 using 10% cash deposits, Long-Term Capital Management in 1998, Wall Street banks in 2008 with 40:1 leverage, or Chinese retail margin borrowers in 2015, excessive leverage is the common denominator of every catastrophic insolvency.',
    practicalAction: [
      'Never use borrowed money to speculate in equity markets.',
      'Audit your portfolio for hidden embedded leverage (leveraged ETFs, complex options, debt-heavy corporations).',
      'Invest only capital you can leave untouched for a minimum of 5 to 10 years.'
    ],
    crashReferences: [
      { name: 'Wall Street Crash of 1929', slug: '1929-wall-street-crash' },
      { name: 'China Stock Market Crash 2015', slug: '2015-china-stock-market-crash' },
      { name: 'Global Financial Crisis 2008', slug: '2008-global-financial-crisis' }
    ]
  },
  {
    id: 'lesson-2',
    number: '02',
    title: 'The Stock Market Is Not the Current Economy',
    quote: 'The market is a forward-looking discounting machine, not a rear-view mirror of today’s employment report.',
    quoteAuthor: 'Barton Biggs',
    summary: 'Stock markets discount future earnings 6 to 18 months ahead. Historically, markets consistently bottom when economic data, unemployment figures, and public headlines are at their absolute worst.',
    historicalContext: 'In March 2009, unemployment was surging toward 10% and GDP was contracting, yet the market staged its generational bottom. In March 2020, the market bottomed on the very day the US declared national lockdowns and COVID case curves were steepening exponentially.',
    practicalAction: [
      'Do not wait for economic headlines to turn positive before investing; by then, the market has already rallied 30% to 50%.',
      'Distinguish between cyclical economic contraction and irreversible business failure.',
      'Focus on leading indicators (credit spreads, liquidity injections, rate expectations) rather than lagging indicators (GDP, unemployment).'
    ],
    crashReferences: [
      { name: 'COVID-19 Market Crash of 2020', slug: '2020-covid-market-crash' },
      { name: 'Global Financial Crisis of 2008', slug: '2008-global-financial-crisis' },
      { name: 'Indian Market Crash of March 2020', slug: 'india/2020-sensex-crash' }
    ]
  },
  {
    id: 'lesson-3',
    number: '03',
    title: 'Cash and Liquidity Buy Optionality at Maximum Pessimism',
    quote: 'Cash combined with courage in a time of crisis is priceless.',
    quoteAuthor: 'Warren Buffett',
    summary: 'A cash reserve provides dual utility: it prevents you from being forced to liquidate equities to cover living expenses during economic downturns, and it provides the dry powder needed to purchase premier assets at generational fire-sale discounts.',
    historicalContext: 'During the 2008 crisis and March 2020 "dash for cash", institutions with cash reserves acquired prized assets at fractions of their book value. Those without cash were forced to accept dilutive recapitalizations.',
    practicalAction: [
      'Maintain an uncompromised 6-to-12-month emergency fund in cash equivalents outside your investment portfolio.',
      'Hold a tactical 5% to 15% cash allocation to deploy dynamically during verified bear-market drawdowns exceeding -20% or -30%.',
      'Never view cash solely as a drag on yield; view it as an insurance policy and call option on future bargains.'
    ],
    crashReferences: [
      { name: 'Global Financial Crisis 2008', slug: '2008-global-financial-crisis' },
      { name: 'Black Monday 1987', slug: '1987-black-monday' }
    ]
  },
  {
    id: 'lesson-4',
    number: '04',
    title: 'Systematic Dollar-Cost Averaging Beats Market Timing',
    quote: 'Far more money has been lost by investors preparing for corrections, or trying to anticipate corrections, than has been lost in corrections themselves.',
    quoteAuthor: 'Peter Lynch',
    summary: 'Attempting to predict the exact peak to exit and the exact trough to re-enter is statistically nearly impossible. Missing just the 10 best trading days across a 20-year period cuts long-term equity returns by more than half.',
    historicalContext: 'In India, investors who steadily maintained their monthly Systematic Investment Plans (SIPs) throughout the 64% crash of 2008 or the 38% drop in 2020 accumulated units at rock-bottom valuations, resulting in multi-bagger compound returns over subsequent years.',
    practicalAction: [
      'Automate your monthly investments so emotion and fear do not interfere with execution.',
      'Adopt a simple rule: if market drawdown exceeds -25%, consider modestly increasing monthly contributions.',
      'Accept that you will never buy at the exact tick of the bottom, nor sell at the exact tick of the top.'
    ],
    crashReferences: [
      { name: 'Indian Market Crash of 2008', slug: 'india/2008-sensex-crash' },
      { name: 'Indian Market Crash of March 2020', slug: 'india/2020-sensex-crash' },
      { name: 'Global Bear Market of 2022', slug: '2022-bear-market' }
    ]
  },
  {
    id: 'lesson-5',
    number: '05',
    title: 'Valuation Always Matters: The Law of Gravity',
    quote: 'In the short run, the market is a voting machine, but in the long run, it is a weighing machine.',
    quoteAuthor: 'Benjamin Graham',
    summary: 'During bull market manias, market participants invent novel metrics to justify absurd prices. Yet in every historical instance, prices eventually re-anchor to the discounted value of hard cash flows delivered to shareholders.',
    historicalContext: 'The 2000 Dot-Com bust wiped out hundreds of companies valued at hundreds of times non-existent earnings. In 2022, unprofitable tech stocks fell 70% to 90% as the cost of capital returned to historic norms.',
    practicalAction: [
      'Insist on understanding how a business generates real free cash flow before allocating capital.',
      'Beware of fashionable "new metrics" like price-to-eyeballs or non-GAAP adjusted EBITDA.',
      'Remember that great companies can be terrible investments if purchased at irrational prices.'
    ],
    crashReferences: [
      { name: 'Dot-Com Bubble Crash', slug: '2000-dot-com-bubble' },
      { name: '1992 Harshad Mehta Crisis', slug: 'india/1992-harshad-mehta-scam' },
      { name: 'Global Bear Market of 2022', slug: '2022-bear-market' }
    ]
  },
  {
    id: 'lesson-6',
    number: '06',
    title: 'Diversification Fails in Liquidity Crises, But Protects in Recovery',
    quote: 'The only thing that goes up in a panic is correlation.',
    quoteAuthor: 'Wall Street Market Maxim',
    summary: 'During a sudden "dash for cash", asset correlations spike toward 1.0 as market participants sell whatever is liquid to meet margin calls. However, as the liquidity shock subsides, sound diversification ensures your portfolio holds the specific asset classes that lead the recovery.',
    historicalContext: 'In October 2008 and March 2020, equities, commodities, high-yield corporate bonds, and even gold fell concurrently. Yet over the 24 months that followed, diversified portfolios rebounded sharply while concentrated single-sector bets faced severe lag.',
    practicalAction: [
      'Do not abandon diversification simply because assets drop simultaneously during the acute panic phase.',
      'Diversify across asset classes (equities, sovereign debt, cash, precious metals) and geographies.',
      'Avoid concentrated single-stock exposure exceeding 10% to 15% of your total net worth.'
    ],
    crashReferences: [
      { name: 'COVID-19 Market Crash of 2020', slug: '2020-covid-market-crash' },
      { name: 'Global Financial Crisis of 2008', slug: '2008-global-financial-crisis' },
      { name: 'Global Market Sell-Off of 2018', slug: '2018-market-selloff' }
    ]
  }
];
