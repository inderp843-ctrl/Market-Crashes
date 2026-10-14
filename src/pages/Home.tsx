import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingDown,
  ArrowRight,
  ShieldAlert,
  BarChart3,
  Calendar,
  Layers,
  Sparkles,
  BookOpen,
  Award,
  Globe2,
  CheckCircle2,
  Clock,
  Compass
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { crashesData, historicalBubblesAndContext } from '../data/crashes';
import { ArticleCard } from '../components/ArticleCard';
import { NewsletterSection } from '../components/NewsletterSection';
import { CrashImageSlider } from '../components/CrashImageSlider';

export const Home: React.FC = () => {
  const [selectedTimelineEra, setSelectedTimelineEra] = useState<'all' | 'early' | 'modern' | 'recent'>('all');

  const featuredCrashes = crashesData.filter(c => c.featured);
  const indiaCrashes = crashesData.filter(c => c.isIndia);
  const recentResearch = crashesData.slice(0, 4);

  const filteredTimelineEvents = crashesData.filter(c => {
    if (selectedTimelineEra === 'early') return c.year < 1990;
    if (selectedTimelineEra === 'modern') return c.year >= 1990 && c.year < 2015;
    if (selectedTimelineEra === 'recent') return c.year >= 2015;
    return true;
  });

  return (
    <>
      <SEO
        title="Market Crash Archive – Historical Stock Market Crashes, Recovery & Lessons"
        description="An authoritative historical research and editorial archive documenting major global and Indian stock market crashes, their causes, economic consequences, recovery cycles, and timeless investor lessons."
        canonicalPath="/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          'name': 'Market Crash Archive',
          'url': window.location.origin,
          'headline': 'Understanding Every Major Stock Market Crash in History',
          'description': 'Every Crash Has a Story. Every Cycle Has a Lesson.'
        }}
      />

      <div className="space-y-16 sm:space-y-24 pb-16">
        
        {/* 1. Hero Section */}
        <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-white">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
              <span>Independent Historical & Academic Research</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Understanding Every Major Stock Market Crash in History.
            </h1>

            <p className="font-brand text-rose-800 text-sm sm:text-lg font-semibold tracking-wide">
              Every Crash Has a Story. Every Cycle Has a Lesson.
            </p>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
              Market crashes are not random anomalies; they are the recurring culmination of credit expansion, psychological euphoria, regulatory loopholes, and sudden liquidity shocks. By studying the empirical mechanics of past panics—from the Wall Street Crash of 1929 and Black Monday to the Indian Harshad Mehta Crisis and the COVID-19 plunge—investors can replace panic with historical perspective.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                to="/crashes"
                className="px-6 py-3 rounded-lg bg-blue-950 hover:bg-blue-900 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Explore All Crashes
              </Link>
              <Link
                to="/compare"
                className="px-6 py-3 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all shadow-xs inline-flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4 text-slate-500" />
                Compare Drawdowns
              </Link>
              <Link
                to="/crashes/india"
                className="px-6 py-3 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-semibold text-sm transition-all inline-flex items-center gap-2"
              >
                <span>🇮🇳</span>
                Indian Market Archive
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Historical Image Slider */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-rose-600 uppercase tracking-wider mb-1">
                <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
                <span>Visual Historical Archive Gallery</span>
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                Iconic Moments in Financial Crash History
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Autoplay active • Hover to pause • Click to explore dossiers
            </span>
          </div>
          <CrashImageSlider />
        </section>

        {/* 2. Key Statistics Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Deepest Decline</span>
              <span className="font-mono-numbers text-3xl font-bold text-rose-600 mt-1 block">-89.2%</span>
              <p className="text-xs text-slate-500 mt-1">1929 Wall Street Crash (DJIA)</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Fastest Bear Market</span>
              <span className="font-mono-numbers text-3xl font-bold text-blue-900 mt-1 block">33 Days</span>
              <p className="text-xs text-slate-500 mt-1">COVID-19 Plunge (S&P 500)</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Single-Day Record</span>
              <span className="font-mono-numbers text-3xl font-bold text-rose-600 mt-1 block">-22.6%</span>
              <p className="text-xs text-slate-500 mt-1">Black Monday (Oct 19, 1987)</p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Longest Breakeven</span>
              <span className="font-mono-numbers text-3xl font-bold text-slate-800 mt-1 block">25.2 Yrs</span>
              <p className="text-xs text-slate-500 mt-1">1929 Peak to Nov 1954 Close</p>
            </div>
          </div>
        </section>

        {/* 3. Featured Historical Crashes */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Editorial In-Depth Case Studies</span>
              </div>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Featured Historical Crashes
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Forensic analyses of the world’s most consequential financial crises, complete with verifiable data.
              </p>
            </div>

            <Link
              to="/crashes"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-700 transition-colors shrink-0"
            >
              View all {crashesData.length} crash dossiers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCrashes.map(crash => (
              <ArticleCard key={crash.id} crash={crash} />
            ))}
          </div>
        </section>

        {/* 4. Interactive Chronological Timeline Strip */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold block">
                  Chronological Architecture
                </span>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white mt-1">
                  Historical Crash Timeline
                </h2>
                <p className="text-slate-400 text-sm mt-1">
                  Trace market convulsions across nearly a century of financial evolution.
                </p>
              </div>

              {/* Era Selector Filter */}
              <div className="flex items-center bg-slate-800/90 rounded-lg p-1 border border-slate-700 text-xs font-medium">
                {(['all', 'early', 'modern', 'recent'] as const).map(era => (
                  <button
                    key={era}
                    onClick={() => setSelectedTimelineEra(era)}
                    className={`px-3 py-1.5 rounded-md capitalize transition-colors ${
                      selectedTimelineEra === era
                        ? 'bg-rose-600 text-white font-semibold'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {era === 'all' ? 'All Eras' : era === 'early' ? 'Pre-1990' : era === 'modern' ? '1990–2014' : '2015–Present'}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline Horizontal / Grid Track */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredTimelineEvents.map(event => (
                <Link
                  key={event.id}
                  to={event.routePath}
                  className="group bg-slate-800/60 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl p-4 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono text-rose-400 font-bold">{event.year}</span>
                      <span className="text-slate-400 text-[11px]">{event.country}</span>
                    </div>
                    <h3 className="font-bold text-white group-hover:text-rose-300 transition-colors text-sm line-clamp-2">
                      {event.shortTitle}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                      {event.categoryLabel}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="font-mono text-rose-400 font-semibold">{event.declinePercentage}%</span>
                    <span className="text-slate-400 group-hover:text-white inline-flex items-center gap-1 font-medium">
                      Dossier <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center pt-4 border-t border-slate-800">
              <Link
                to="/timeline"
                className="text-xs font-semibold text-rose-400 hover:text-rose-300 inline-flex items-center gap-1.5"
              >
                Open Full Interactive Timeline with Multi-Century Context →
              </Link>
            </div>
          </div>
        </section>

        {/* 5. India-Focused Market History Spotlight */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-6 sm:p-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🇮🇳</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 font-mono">
                    Special Focus Archive
                  </span>
                </div>
                <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
                  Indian Stock Market History & Regulatory Evolution
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  From the manual open-outcry trading ring and the 1992 Harshad Mehta banking scam to the modern electronic NSE, SEBI statutory oversight, and today’s resilient domestic mutual fund SIP culture.
                </p>
              </div>

              <Link
                to="/crashes/india"
                className="px-5 py-2.5 rounded-lg bg-amber-900 hover:bg-amber-800 text-white font-semibold text-xs sm:text-sm transition-colors shrink-0 self-start lg:self-center"
              >
                Explore Indian Market Hub →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {indiaCrashes.map(crash => (
                <div
                  key={crash.id}
                  className="bg-white rounded-xl border border-amber-200/90 p-5 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono font-bold text-amber-800">{crash.year}</span>
                      <span className="font-mono text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        {crash.declinePercentage}%
                      </span>
                    </div>
                    <h3 className="font-serif-title font-bold text-slate-900 text-base mb-1">
                      <Link to={crash.routePath} className="hover:text-amber-900">
                        {crash.shortTitle}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">{crash.indexName}</p>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {crash.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Recovery: {crash.recoveryMonths} mos</span>
                    <Link
                      to={crash.routePath}
                      className="font-semibold text-amber-900 hover:underline flex items-center gap-1"
                    >
                      Read Study <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Educational Framework: Causes, Recovery & Investor Lessons */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              Research Foundations
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              The Anatomy of Market Panics
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Beyond individual event chronologies, explore the empirical science of why crashes happen, how markets recover, and what history teaches long-term investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Causes Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-slate-900 text-lg mb-2">
                  Causes of Market Crashes
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Examine the six primary drivers of market panics: excessive leverage and margin debt, speculative valuation detachment, central bank interest rate hikes, algorithmic execution breakdowns, and exogenous black swans.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 mb-6">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Leverage & margin call cascades
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Valuation bubbles & narrative fever
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-500" /> Liquidity black holes & HFT retreats
                  </li>
                </ul>
              </div>
              <Link
                to="/causes"
                className="text-xs font-bold text-blue-900 hover:text-blue-700 inline-flex items-center gap-1"
              >
                Read Causes Analysis <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Recovery Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-slate-900 text-lg mb-2">
                  Market Recovery Studies
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Empirical data on how long markets take to break even. Analyze the difference between V-shaped liquidity rebounds and secular L-shaped balance sheet recessions, and why dividends reduce recovery time by 30%.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 mb-6">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Average recovery: 28 months (median)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Nominal vs. inflation-adjusted breakevens
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" /> Role of central bank emergency facilities
                  </li>
                </ul>
              </div>
              <Link
                to="/recovery"
                className="text-xs font-bold text-blue-900 hover:text-blue-700 inline-flex items-center gap-1"
              >
                Read Recovery Studies <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Lessons Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-title font-bold text-slate-900 text-lg mb-2">
                  Timeless Investor Lessons
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Empirical principles distilled from a century of drawdowns. Learn why the stock market bottoms on the worst news, how cash reserves buy optionality, and why dollar-cost averaging beats market timing.
                </p>
                <ul className="text-xs text-slate-500 space-y-1.5 mb-6">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> The stock market is not the economy
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Zero leverage prevents forced liquidations
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Systematic SIPs compound through troughs
                  </li>
                </ul>
              </div>
              <Link
                to="/lessons"
                className="text-xs font-bold text-blue-900 hover:text-blue-700 inline-flex items-center gap-1"
              >
                Explore Investor Lessons <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* 7. Institutional Newsletter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSection />
        </div>

      </div>
    </>
  );
};
