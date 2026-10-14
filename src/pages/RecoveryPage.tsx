import React from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  AlertCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { recoveryStudiesData, recoveryStudyInsights } from '../data/recoveryStudies';
import { Breadcrumb } from '../components/Breadcrumb';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

export const RecoveryPage: React.FC = () => {
  const chartData = recoveryStudiesData.map(r => ({
    name: r.crashName,
    shortName: `${r.year} ${r.index.split(' ')[0]}`,
    recoveryMonths: r.recoveryMonths,
    drawdown: Math.abs(r.drawdown)
  }));

  return (
    <>
      <SEO
        title="Market Recovery Studies – How Long Do Crashes Take to Break Even?"
        description="Empirical research into stock market recovery periods, V-shaped vs. L-shaped secular regimes, dividend reinvestment effects, and inflation-adjusted breakevens."
        canonicalPath="/recovery"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumb items={[{ label: 'Recovery Studies' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-blue-900" />
            <span>Empirical Quantitative Research</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Market Recovery Studies
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            How long does it take for a market to recover after a crash? An empirical analysis of recovery timelines across a century of crashes, contrasting nominal price indices against dividend-reinvested real purchasing power.
          </p>
        </div>

        {/* High-Level Statistical Aggregates */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Average Drawdown</span>
            <span className="font-mono-numbers text-2xl sm:text-3xl font-bold text-rose-600 mt-1 block">
              {recoveryStudyInsights.averageDrawdownPercent}%
            </span>
            <span className="text-xs text-slate-500 mt-1">Across 9 major historical crashes</span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Average Drop Duration</span>
            <span className="font-mono-numbers text-2xl sm:text-3xl font-bold text-slate-800 mt-1 block">
              {recoveryStudyInsights.averageDurationMonths} Mos
            </span>
            <span className="text-xs text-slate-500 mt-1">From cycle peak to cycle trough</span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Median Recovery</span>
            <span className="font-mono-numbers text-2xl sm:text-3xl font-bold text-emerald-600 mt-1 block">
              {recoveryStudyInsights.medianRecoveryMonths} Mos
            </span>
            <span className="text-xs text-slate-500 mt-1">To re-attain previous cycle high</span>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">Fastest 30%+ Recovery</span>
            <span className="font-mono-numbers text-2xl sm:text-3xl font-bold text-blue-900 mt-1 block">
              5 Months
            </span>
            <span className="text-xs text-slate-500 mt-1">COVID-19 Crash (S&P 500 in 2020)</span>
          </div>
        </div>

        {/* Recovery Duration Bar Chart */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-serif-title font-bold text-slate-900 text-lg">
              Historical Recovery Time to Previous High (Months)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Notice the extreme skew caused by the 1929 Great Contraction (302 months) and 2000 Dot-Com Tech crash (181 months) versus post-1980 liquidity panics.
            </p>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 35 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="shortName" stroke="#64748b" fontSize={11} angle={-25} textAnchor="end" />
                <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}m`} />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const item = payload[0].payload;
                      return (
                        <div className="bg-slate-900 text-white text-xs p-3 rounded-lg shadow-xl border border-slate-700">
                          <p className="font-bold text-slate-200">{item.name}</p>
                          <p className="text-emerald-400 font-mono-numbers mt-1">
                            Recovery Duration: <span className="font-bold">{item.recoveryMonths} months</span>
                          </p>
                          <p className="text-rose-400 font-mono-numbers">
                            Drawdown: <span className="font-bold">-{item.drawdown}%</span>
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="recoveryMonths" name="Recovery (Months)" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.recoveryMonths > 100 ? '#be123c' : '#0284c7'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 4 Core Recovery Insights */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl font-bold text-slate-900">
            Four Core Recovery Findings From Historical Data
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {recoveryStudyInsights.keyFindings.map((finding, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-900">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif-title font-bold text-slate-900 text-base">
                    {finding.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {finding.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recovery Shapes: V vs U vs L */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="font-serif-title text-2xl font-bold text-slate-900">
              Anatomy of Recovery Shapes
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Why do some crashes rebound in months while others linger for decades?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <span className="inline-block px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold uppercase font-mono">
                V-Shaped Recovery
              </span>
              <h3 className="font-serif-title font-bold text-slate-900 text-base">
                Liquidity & Exogenous Shocks
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Occurs when the financial banking system remains fundamentally solvent and the trigger was an external panic (COVID-19 2020) or algorithmic liquidity failure (Black Monday 1987). Central bank liquidity directly halts the decline, and production rebounds swiftly.
              </p>
              <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono">
                Typical Span: 4 to 20 Months
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <span className="inline-block px-2.5 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold uppercase font-mono">
                U-Shaped Recovery
              </span>
              <h3 className="font-serif-title font-bold text-slate-900 text-base">
                Cyclical Recessions & Multiple Compression
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Occurs during broad economic contractions or severe central bank rate-hiking cycles (2022 Bear Market, 2008 GFC). Corporations require several quarters to clear excess inventories and rebuild balance sheets before earnings resume sustained growth.
              </p>
              <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono">
                Typical Span: 2 to 4 Years
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <span className="inline-block px-2.5 py-1 rounded bg-rose-100 text-rose-800 text-xs font-bold uppercase font-mono">
                L-Shaped / Secular
              </span>
              <h3 className="font-serif-title font-bold text-slate-900 text-base">
                Debt Deflation & Balance Sheet Panics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The most severe regime (1929 Great Contraction, Japan 1990). Characterized by private sector debt-deflation, mass bank failures, and multi-decade deleveraging where private corporations use all profits to pay off legacy liabilities rather than invest.
              </p>
              <div className="text-[11px] text-slate-500 border-t border-slate-100 pt-2 font-mono">
                Typical Span: 10 to 25 Years
              </div>
            </div>

          </div>
        </section>

        {/* Complete Recovery Table */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-2xl font-bold text-slate-900">
            Empirical Crash Recovery Chronologies
          </h2>

          <div className="bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-500">Event & Year</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-500">Index</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-500">Drawdown</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-500">Recovery Span</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-500">Shape</th>
                  <th className="p-3.5 font-bold uppercase tracking-wider text-[11px] text-slate-500">Nominal Breakeven</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {recoveryStudiesData.map((study, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="p-3.5 font-bold text-slate-900 font-serif-title">
                      {study.crashName} ({study.year})
                    </td>
                    <td className="p-3.5 font-medium text-slate-600">{study.index}</td>
                    <td className="p-3.5 font-mono font-bold text-rose-600">{study.drawdown}%</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-700">{study.recoveryMonths} months</td>
                    <td className="p-3.5">
                      <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium font-mono">
                        {study.shape}
                      </span>
                    </td>
                    <td className="p-3.5 text-xs text-slate-600">{study.nominalBreakeven}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  );
};
