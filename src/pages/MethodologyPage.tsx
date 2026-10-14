import React from 'react';
import { Link } from 'react-router-dom';
import {
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingDown,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export const MethodologyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Research Methodology & Data Verification Standards"
        description="Comprehensive technical documentation explaining how Market Crash Archive calculates peak-to-trough drawdowns, handles intraday extremes vs. closing prices, and verifies recovery periods."
        canonicalPath="/methodology"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Research Methodology' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5 text-blue-900" />
            <span>Technical Documentation</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Research & Quantitative Methodology
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Financial figures are only as reliable as the mathematical formulas and archival standards used to calculate them. Below is our formal methodology governing price series, drawdown definitions, recovery criteria, and index choices.
          </p>
        </div>

        {/* Methodology Sections */}
        <div className="space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          
          {/* 1. Peak-to-Trough Drawdown Calculation */}
          <section className="space-y-3 bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
            <h2 className="font-serif-title text-xl font-bold text-slate-900">
              1. Peak-to-Trough Drawdown Formula
            </h2>
            <p>
              In our historical analyses, maximum cycle drawdown is defined as the percentage change from the highest preceding closing peak to the subsequent lowest closing trough of that specific cycle:
            </p>
            <div className="p-4 bg-slate-900 text-white rounded-lg font-mono text-center text-xs sm:text-sm my-3">
              Drawdown (%) = [(Trough Closing Value - Peak Closing Value) / Peak Closing Value] × 100
            </div>
            <p className="text-xs text-slate-500">
              Where both Peak and Trough are determined from official end-of-day closing index levels provided by official exchange records.
            </p>
          </section>

          {/* 2. Closing Prices vs. Intraday Extremes */}
          <section className="space-y-3 bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
            <h2 className="font-serif-title text-xl font-bold text-slate-900">
              2. Closing Prices vs. Intraday Extremes
            </h2>
            <p>
              Unless explicitly labeled as an "intraday decline", all primary percentage figures represent closing-price to closing-price changes. While intraday extremes can produce dramatic headlines (such as the S&P 500 touching 666.79 on March 6, 2009, or the Dow plummeting nearly 1,000 points on May 6, 2010), closing prices reflect final settled clearing balances and institutional reconciliation.
            </p>
            <p>
              When an event features a historically significant intraday deviation (e.g. October 19, 1987 or May 6, 2010), the intraday tick is explicitly highlighted in the dossier's quantitative matrix.
            </p>
          </section>

          {/* 3. Recovery Definition & Breakeven Horizons */}
          <section className="space-y-3 bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
            <h2 className="font-serif-title text-xl font-bold text-slate-900">
              3. Recovery Period Definition
            </h2>
            <p>
              The recovery period is calculated as the number of calendar months (or days) from the date of the cycle trough (or peak, where explicitly stated) until the index first records an official closing price equal to or exceeding its previous all-time peak closing level.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900">
              <strong>Academic Nuance: Nominal vs. Total Return:</strong> Standard price-only indices ignore dividend reinvestment. For historical crises like 1929, dividend yields of 6% to 10% combined with 30% price deflation meant that an investor reinvesting cash flows recovered on a real purchasing-power basis substantially faster than the 25-year nominal price series suggests. We document this distinction in every case study.
            </div>
          </section>

          {/* 4. Selection of Benchmark Indices */}
          <section className="space-y-3 bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
            <h2 className="font-serif-title text-xl font-bold text-slate-900">
              4. Selection of Benchmark Indices
            </h2>
            <p>
              We prioritize the most liquid, broad-based, and historically continuous benchmark available for each market:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span><strong>United States (General):</strong> S&P 500 Index (or Dow Jones Industrial Average for events prior to the 1957 modernization of the S&P 500).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span><strong>Technology Sector:</strong> NASDAQ Composite Index for tech-concentrated episodes (2000 Dot-Com Bubble).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span><strong>India:</strong> BSE Sensex (S&P BSE SENSEX, base year 1978–79) and NSE Nifty 50 for modern eras.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                <span><strong>East Asia & China:</strong> Stock Exchange of Thailand (SET), Hang Seng Index, and Shanghai Composite Index (A-Shares).</span>
              </li>
            </ul>
          </section>

          {/* 5. Archival Source Hierarchy */}
          <section className="space-y-3 bg-white border border-slate-200 p-6 rounded-xl shadow-xs">
            <h2 className="font-serif-title text-xl font-bold text-slate-900">
              5. Archival Verification Hierarchy
            </h2>
            <p>
              Our researchers follow a strict 4-tier evidentiary hierarchy:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li><strong>Tier 1 (Statutory & Regulatory Records):</strong> SEC, SEBI, JPC Reports, CFTC, and official government commissions (e.g. Brady Commission 1988, FCIC 2011).</li>
              <li><strong>Tier 2 (Central Bank Publications):</strong> Federal Reserve, Reserve Bank of India, Bank for International Settlements (BIS), International Monetary Fund (IMF).</li>
              <li><strong>Tier 3 (Official Exchange Archives):</strong> NYSE Fact Books, BSE India Historical Archives, NSE India Bhavcopy data.</li>
              <li><strong>Tier 4 (Peer-Reviewed Academic Literature):</strong> National Bureau of Economic Research (NBER), Journal of Finance, and seminal economic texts.</li>
            </ol>
          </section>

        </div>
      </div>
    </>
  );
};
