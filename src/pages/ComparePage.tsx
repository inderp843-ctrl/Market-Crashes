import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  GitCompare,
  TrendingDown,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  X,
  ExternalLink,
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { crashesData } from '../data/crashes';
import { Breadcrumb } from '../components/Breadcrumb';
import { ComparisonChart } from '../components/ComparisonChart';
import { CrashArticle } from '../types';

export const ComparePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Initial selection from params or default to 1929 vs 2008 vs 2020
  const [selectedSlugs, setSelectedSlugs] = useState<string[]>(() => {
    const c1 = searchParams.get('c1');
    const c2 = searchParams.get('c2');
    const c3 = searchParams.get('c3');
    const initial = [c1, c2, c3].filter(Boolean) as string[];
    if (initial.length >= 2) return initial;
    return ['1929-wall-street-crash', '2008-global-financial-crisis', '2020-covid-market-crash'];
  });

  const [activeMetric, setActiveMetric] = useState<'decline' | 'recovery' | 'both'>('decline');

  // Sync to URL params
  useEffect(() => {
    const params = new URLSearchParams();
    selectedSlugs.forEach((s, idx) => params.set(`c${idx + 1}`, s));
    setSearchParams(params, { replace: true });
  }, [selectedSlugs, setSearchParams]);

  const selectedCrashes: CrashArticle[] = selectedSlugs
    .map(slug => crashesData.find(c => c.slug === slug))
    .filter(Boolean) as CrashArticle[];

  const availableCrashes = crashesData.filter(c => !selectedSlugs.includes(c.slug));

  const addCrash = (slug: string) => {
    if (selectedSlugs.length < 4 && !selectedSlugs.includes(slug)) {
      setSelectedSlugs([...selectedSlugs, slug]);
    }
  };

  const removeCrash = (slug: string) => {
    if (selectedSlugs.length > 2) {
      setSelectedSlugs(selectedSlugs.filter(s => s !== slug));
    }
  };

  const chartData = selectedCrashes.map(c => ({
    name: c.title,
    shortName: `${c.shortTitle} (${c.year})`,
    decline: Math.abs(c.declinePercentage),
    recoveryMonths: typeof c.recoveryMonths === 'number' ? c.recoveryMonths : 60,
    durationMonths: Math.round(c.durationDays / 30)
  }));

  return (
    <>
      <SEO
        title="Compare Market Crashes – Empirical Drawdowns & Recoveries"
        description="Side-by-side comparison of historical stock market crashes: decline severity, duration, recovery periods, and policy interventions."
        canonicalPath="/compare"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Compare Crashes' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <GitCompare className="w-3.5 h-3.5 text-blue-900" />
            <span>Interactive Historical Comparator</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Compare Market Crashes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Select 2 to 4 major crashes to analyze drawdown magnitude, duration of decline, time required to break even, and government policy responses side-by-side.
          </p>

          {/* Active Crash Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 mt-6">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Comparing:</span>
            {selectedCrashes.map(crash => (
              <span
                key={crash.id}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-900 text-white text-xs font-semibold shadow-2xs"
              >
                <span>{crash.shortTitle} ({crash.year})</span>
                {selectedSlugs.length > 2 && (
                  <button
                    onClick={() => removeCrash(crash.slug)}
                    className="p-0.5 hover:bg-blue-800 rounded-full transition-colors cursor-pointer"
                    title="Remove from comparison"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </span>
            ))}

            {/* Add Dropdown if under 4 */}
            {selectedSlugs.length < 4 && availableCrashes.length > 0 && (
              <div className="relative inline-block">
                <select
                  onChange={e => {
                    if (e.target.value) {
                      addCrash(e.target.value);
                      e.target.value = '';
                    }
                  }}
                  defaultValue=""
                  aria-label="Add crash to comparison"
                  className="py-1 px-3 text-xs rounded-lg border border-dashed border-slate-300 bg-white text-slate-700 font-semibold hover:border-slate-400 cursor-pointer focus:outline-hidden"
                >
                  <option value="" disabled>+ Add Another Crash...</option>
                  {availableCrashes.map(c => (
                    <option key={c.id} value={c.slug}>
                      {c.shortTitle} ({c.year})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Chart Visualization Section */}
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
              Comparative Metrics Visualization
            </h2>

            <div className="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-medium">
              <button
                onClick={() => setActiveMetric('decline')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeMetric === 'decline' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Decline (%)
              </button>
              <button
                onClick={() => setActiveMetric('recovery')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeMetric === 'recovery' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Recovery (Months)
              </button>
              <button
                onClick={() => setActiveMetric('both')}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                  activeMetric === 'both' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Both Metrics
              </button>
            </div>
          </div>

          <ComparisonChart data={chartData} metric={activeMetric} />
        </section>

        {/* Side-by-Side Comparison Matrix Table */}
        <section className="space-y-4">
          <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
            Side-by-Side Historical Matrix
          </h2>

          <div className="bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold uppercase tracking-wider text-[11px] text-slate-500 w-44">
                    Dimension
                  </th>
                  {selectedCrashes.map(crash => (
                    <th key={crash.id} className="p-4 font-bold font-serif-title text-slate-900 text-base min-w-[240px]">
                      <div className="flex items-center justify-between">
                        <span>{crash.shortTitle}</span>
                        <Link to={crash.routePath} className="text-blue-900 hover:text-blue-700">
                          <ExternalLink className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                      <span className="text-xs font-normal text-slate-500 block font-sans">
                        {crash.year} • {crash.country}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                
                {/* Benchmark Index */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Benchmark Index</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4 font-medium">{c.indexName} ({c.currency})</td>
                  ))}
                </tr>

                {/* Peak-to-Trough Decline */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Peak-to-Trough Drop</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4">
                      <span className="font-mono-numbers text-base font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        {c.declinePercentage}%
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Cycle Peak & Trough */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Peak Date & Level</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4">
                      <span className="font-medium text-slate-900 block">{c.peakValue}</span>
                      <span className="text-xs text-slate-500 font-mono">{c.peakDate}</span>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Trough Date & Level</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4">
                      <span className="font-medium text-rose-700 block">{c.troughValue}</span>
                      <span className="text-xs text-slate-500 font-mono">{c.troughDate}</span>
                    </td>
                  ))}
                </tr>

                {/* Duration of Drop */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Drop Duration</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4 font-mono-numbers font-medium">
                      {c.durationDays} Days (~{Math.round(c.durationDays / 30)} months)
                    </td>
                  ))}
                </tr>

                {/* Recovery to Prior Peak */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Recovery to Peak</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4">
                      <span className="font-mono-numbers font-bold text-emerald-700 block">
                        {typeof c.recoveryMonths === 'number' ? `${c.recoveryMonths} Months` : c.recoveryMonths}
                      </span>
                      {c.recoveryDate && <span className="text-xs text-slate-500">{c.recoveryDate}</span>}
                    </td>
                  ))}
                </tr>

                {/* Primary Causes */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Primary Contributing Factors</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4">
                      <ul className="space-y-1 text-xs">
                        {c.mainCauses.slice(0, 2).map((cause, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-rose-500 font-bold">•</span>
                            <span>{cause}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Policy Response */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Central Bank / Policy Action</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4 text-xs leading-relaxed">
                      {c.policyResponse.slice(0, 160)}...
                    </td>
                  ))}
                </tr>

                {/* Data Limitations */}
                <tr>
                  <td className="p-4 font-semibold text-slate-500 bg-slate-50/50">Data Limitations & Notes</td>
                  {selectedCrashes.map(c => (
                    <td key={c.id} className="p-4 text-xs text-slate-500 italic">
                      {c.methodologyNotes}
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>
          </div>
        </section>

      </div>
    </>
  );
};
