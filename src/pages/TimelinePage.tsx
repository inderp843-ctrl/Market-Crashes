import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  TrendingDown,
  ArrowRight,
  Filter,
  History,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { crashesData, historicalBubblesAndContext } from '../data/crashes';
import { Breadcrumb } from '../components/Breadcrumb';

export const TimelinePage: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<'all' | 'early' | 'twentieth' | 'twentyfirst'>('all');

  // Combined timeline items: modern crashes + early bubbles
  const allEvents = [
    // Precursors
    {
      year: 1637,
      date: '1636–1637',
      title: 'Tulip Mania',
      subtitle: 'Early Speculative Commodity Futures Mania',
      country: 'Dutch Republic',
      decline: '~90% (Contracts)',
      isPrecursor: true,
      path: '/crashes#bubbles',
      summary: 'Speculative futures contracts in exotic tulip bulbs detached from real agricultural value. Notable as an early commercial bubble, clearly distinct from modern corporate equity markets.'
    },
    {
      year: 1720,
      date: '1720',
      title: 'The South Sea Bubble',
      subtitle: 'Joint-Stock Debt Conversion Euphoria',
      country: 'Great Britain',
      decline: '-87.6%',
      isPrecursor: true,
      path: '/crashes#bubbles',
      summary: 'The South Sea Company assumed national sovereign debt in exchange for a speculative monopoly in South American trade, precipitating the Bubble Act of 1720.'
    },
    {
      year: 1873,
      date: '1873–1879',
      title: 'The Panic of 1873',
      subtitle: 'Post-Civil War Railroad Expansion Bust',
      country: 'United States & Europe',
      decline: 'NYSE Closed 10 Days',
      isPrecursor: true,
      path: '/crashes#bubbles',
      summary: 'Failure of Jay Cooke & Company triggered bank runs and the first 10-day shutdown of the New York Stock Exchange in history.'
    },
    {
      year: 1907,
      date: 'October 1907',
      title: 'The Panic of 1907',
      subtitle: 'Knickerbocker Trust Collapse',
      country: 'United States',
      decline: '-50% (NYSE)',
      isPrecursor: true,
      path: '/crashes#bubbles',
      summary: 'Failed copper corner led to trust company runs and private intervention by J.P. Morgan, catalyzing the creation of the Federal Reserve in 1913.'
    },
    // Modern crashes
    ...crashesData.map(c => ({
      year: c.year,
      date: c.dateRange,
      title: c.title,
      subtitle: c.categoryLabel,
      country: c.country,
      decline: `${c.declinePercentage}%`,
      isPrecursor: false,
      path: c.routePath,
      summary: c.summary,
      index: c.indexName,
      recovery: c.recoveryMonths
    }))
  ].sort((a, b) => a.year - b.year);

  const filteredEvents = allEvents.filter(ev => {
    if (selectedEra === 'early') return ev.year < 1920;
    if (selectedEra === 'twentieth') return ev.year >= 1920 && ev.year < 2000;
    if (selectedEra === 'twentyfirst') return ev.year >= 2000;
    return true;
  });

  return (
    <>
      <SEO
        title="Historical Market Crash Timeline (1637 – Present)"
        description="Explore the chronological history of market crashes and bubbles from Tulip Mania and 1929 through Black Monday, 2008 GFC, and the 2020 COVID crash."
        canonicalPath="/timeline"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Historical Timeline' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Chronological Architecture</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Historical Market Crash Timeline
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Traverse nearly four centuries of speculative bubbles, systemic liquidity freezes, and banking panics. Filter by era to examine how crisis transmission evolved over time.
          </p>

          {/* Era Filter */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[
              { id: 'all', label: 'All Historical Events (1637–Present)' },
              { id: 'early', label: '17th–19th Century Precursors' },
              { id: 'twentieth', label: '20th Century (1920–1999)' },
              { id: 'twentyfirst', label: '21st Century (2000–Present)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedEra(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedEra === tab.id
                    ? 'bg-blue-950 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Vertical Track */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 space-y-10">
          {filteredEvents.map((ev, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-blue-950 group-hover:border-rose-600 transition-colors"></div>

              <div className="bg-white border border-slate-200/90 hover:border-slate-400 rounded-xl p-6 shadow-xs transition-all space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base font-bold text-blue-950">
                      {ev.year}
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium">
                      {ev.country}
                    </span>
                    {ev.isPrecursor && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold uppercase">
                        Speculative Precursor
                      </span>
                    )}
                  </div>

                  <span className="font-mono text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                    Peak Drop: {ev.decline}
                  </span>
                </div>

                <h3 className="font-serif-title text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  <Link to={ev.path}>
                    {ev.title}
                  </Link>
                </h3>

                <p className="text-xs font-medium text-slate-500 italic">
                  {ev.subtitle}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {ev.summary}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {ev.date}
                  </span>

                  <Link
                    to={ev.path}
                    className="inline-flex items-center gap-1 font-semibold text-blue-900 group-hover:translate-x-1 transition-transform"
                  >
                    View Historical Dossier <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};
