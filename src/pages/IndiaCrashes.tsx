import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingDown,
  Shield,
  Landmark,
  ArrowRight,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Award,
  Layers,
  History
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { crashesData, historicalBubblesAndContext } from '../data/crashes';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumb } from '../components/Breadcrumb';

export const IndiaCrashes: React.FC = () => {
  const indiaCrashes = crashesData.filter(c => c.isIndia);
  const ketanParekh = historicalBubblesAndContext.find(b => b.id === '2001-india-ketan-parekh');
  const demonetisation = historicalBubblesAndContext.find(b => b.id === '2016-india-demonetisation');

  return (
    <>
      <SEO
        title="Indian Stock Market Crashes – History, Scams & SEBI Evolution"
        description="Comprehensive historical archive of Indian stock market crashes: 1992 Harshad Mehta Scam, 2001 Ketan Parekh downturn, 2008 Global Contagion, and March 2020 Pandemic Circuit Breakers."
        canonicalPath="/crashes/india"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumb items={[{ label: 'Indian Market Archive' }]} />

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-amber-900/40 relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold uppercase tracking-wider">
              <span>🇮🇳</span>
              <span>Dalal Street Historical Research</span>
            </div>

            <h1 className="font-serif-title text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Indian Stock Market Crashes & Regulatory Transformation
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              India’s capital markets have undergone a profound evolution over the last four decades. From the physical paper rings of the Bombay Stock Exchange (BSE) and the 1992 Harshad Mehta banking scam to the ultra-modern National Stock Exchange (NSE) and a robust domestic mutual fund SIP culture, every domestic crisis catalyzed major structural reforms.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-amber-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Statutory SEBI Powers (1992)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Electronic Screen Trading (1994)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Dematerialisation via NSDL (1996)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> T+1 Settlement Cycle (Global Pioneer)
              </span>
            </div>
          </div>
        </div>

        {/* Featured Dedicated India Crash Dossiers */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
              Major Indian Market Crashes (Dedicated Case Studies)
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Select any major crash to view its comprehensive 15-point historical analysis, charts, and regulatory legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {indiaCrashes.map(crash => (
              <ArticleCard key={crash.id} crash={crash} />
            ))}
          </div>
        </section>

        {/* The Great Institutional Shift: FII Flight vs. DII Domestic Power */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider block">
              Market Structure Evolution
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
              From Vulnerable FII Dependency to Domestic SIP Armor
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              In 2008, foreign portfolio investors pulled out $13 billion, causing the Sensex to plunge 64% because domestic retail and institutional capital was virtually non-existent. By 2020–2024, the structural landscape had transformed:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/90">
              <span className="text-xs font-mono font-bold text-slate-500 block mb-1">Phase 1: 1991–2000</span>
              <h3 className="font-serif-title font-bold text-slate-900 text-base mb-2">
                Open Outcry & Early Scams
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Physical share transfers, badla financing, and weak capital market disclosure allowed brokers to siphon banking liquidity. SEBI’s creation and the establishment of the NSE in 1992–1994 ended floor-based price manipulation.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/90">
              <span className="text-xs font-mono font-bold text-slate-500 block mb-1">Phase 2: 2001–2014</span>
              <h3 className="font-serif-title font-bold text-slate-900 text-base mb-2">
                The FII Rollercoaster & 2008 Crash
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Following the 2001 Ketan Parekh crash, SEBI abolished badla and introduced exchange-traded index and stock futures. However, rapid growth attracted volatile foreign capital; when Lehman collapsed, FII flight created severe domestic liquidity freezes.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/90">
              <span className="text-xs font-mono font-bold text-emerald-700 block mb-1">Phase 3: 2015–Present</span>
              <h3 className="font-serif-title font-bold text-slate-900 text-base mb-2">
                The Rise of Domestic SIP Inflows
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active Demat accounts expanded from 4 crore in early 2020 to over 15 crore. Monthly Systematic Investment Plan (SIP) contributions surpassed ₹20,000 crore, creating a structural domestic bid that reliably absorbs foreign selling during global panics.
              </p>
            </div>

          </div>
        </section>

        {/* Additional Historical Indian Downturns (Context & Nuance) */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
              Additional Indian Market Downturns & Non-Crash Shocks
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Historical precision requires distinguishing true market crashes from sector downturns and short-term liquidity shocks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 2001 Ketan Parekh */}
            {ketanParekh && (
              <div id="ketan-parekh" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-900 font-serif-title text-lg">{ketanParekh.title}</span>
                    <span className="font-mono text-slate-500">{ketanParekh.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    <strong>Event Dynamics:</strong> {ketanParekh.nature}
                  </p>
                  <div className="p-3 bg-rose-50 rounded-lg border border-rose-100 text-xs mb-3">
                    <span className="font-semibold text-rose-800 block">Peak-to-Trough Impact:</span>
                    <span className="text-rose-900">{ketanParekh.peakLoss}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Regulatory Legacy:</strong> {ketanParekh.keyDistinction}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
                  <strong>Investor Takeaway:</strong> {ketanParekh.lesson}
                </div>
              </div>
            )}

            {/* 2016 Demonetisation Shock */}
            {demonetisation && (
              <div id="demonetisation" className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-900 font-serif-title text-lg">{demonetisation.title}</span>
                    <span className="font-mono text-slate-500">{demonetisation.period}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    <strong>Event Dynamics:</strong> {demonetisation.nature}
                  </p>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 text-xs mb-3">
                    <span className="font-semibold text-amber-800 block">Market Reaction:</span>
                    <span className="text-amber-900">{demonetisation.peakLoss}</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong>Why It Was Not a Stock Market Crash:</strong> {demonetisation.keyDistinction}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
                  <strong>Investor Takeaway:</strong> {demonetisation.lesson}
                </div>
              </div>
            )}

          </div>
        </section>

      </div>
    </>
  );
};
