import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  ArrowUpDown,
  TrendingDown,
  Info,
  RotateCcw,
  Sparkles,
  MapPin,
  Calendar,
  AlertTriangle,
  History
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { crashesData, historicalBubblesAndContext } from '../data/crashes';
import { ArticleCard } from '../components/ArticleCard';
import { CrashCategory, Region } from '../types';

export const CrashesList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'year-desc' | 'year-asc' | 'decline-desc' | 'duration-asc'>('year-desc');

  // Filter & Sort Logic
  const filteredCrashes = useMemo(() => {
    return crashesData.filter(crash => {
      // Search
      if (searchTerm.trim()) {
        const q = searchTerm.toLowerCase();
        const matches =
          crash.title.toLowerCase().includes(q) ||
          crash.shortTitle.toLowerCase().includes(q) ||
          crash.country.toLowerCase().includes(q) ||
          crash.indexName.toLowerCase().includes(q) ||
          crash.year.toString().includes(q) ||
          crash.summary.toLowerCase().includes(q) ||
          crash.mainCauses.some(c => c.toLowerCase().includes(q));
        if (!matches) return false;
      }

      // Region
      if (selectedRegion !== 'all') {
        if (selectedRegion === 'India' && !crash.isIndia) return false;
        if (selectedRegion !== 'India' && crash.region !== selectedRegion) return false;
      }

      // Category
      if (selectedCategory !== 'all') {
        if (crash.category !== selectedCategory) return false;
      }

      // Severity
      if (selectedSeverity !== 'all') {
        const drop = Math.abs(crash.declinePercentage);
        if (selectedSeverity === 'extreme' && drop < 50) return false;
        if (selectedSeverity === 'severe' && (drop < 30 || drop >= 50)) return false;
        if (selectedSeverity === 'moderate' && drop >= 30) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'year-asc') return a.year - b.year;
      if (sortBy === 'decline-desc') return Math.abs(b.declinePercentage) - Math.abs(a.declinePercentage);
      if (sortBy === 'duration-asc') return a.durationDays - b.durationDays;
      return 0;
    });
  }, [searchTerm, selectedRegion, selectedCategory, selectedSeverity, sortBy]);

  const hasActiveFilters =
    searchTerm !== '' ||
    selectedRegion !== 'all' ||
    selectedCategory !== 'all' ||
    selectedSeverity !== 'all' ||
    sortBy !== 'year-desc';

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedRegion('all');
    setSelectedCategory('all');
    setSelectedSeverity('all');
    setSortBy('year-desc');
  };

  return (
    <>
      <SEO
        title="All Stock Market Crashes – Historical Crises Catalog"
        description="Search, filter, and compare all documented major stock market crashes, from 1929 through 2022, with verified peak-to-trough drawdowns and recovery periods."
        canonicalPath="/crashes"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
            <span>Complete Empirical Catalog</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            All Stock Market Crashes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Every major documented market crisis since 1929, meticulously researched with verified peak and trough closing dates, index metrics, recovery timelines, and economic post-mortems.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
          
          <div className="flex flex-col md:flex-row gap-3">
            {/* Search Input */}
            <div className="relative grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search by crash name, year (e.g. 1987), index (S&P 500, Sensex), or keyword..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-blue-900 focus:bg-white transition-all text-slate-900 placeholder:text-slate-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort selector */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-slate-400" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                aria-label="Sort crashes by"
                className="py-2 px-3 text-xs sm:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium focus:outline-hidden cursor-pointer"
              >
                <option value="year-desc">Newest First</option>
                <option value="year-asc">Oldest First (Chronological)</option>
                <option value="decline-desc">Largest Decline (% Drawdown)</option>
                <option value="duration-asc">Fastest Drop Duration</option>
              </select>
            </div>
          </div>

          {/* Filter Pills / Dropdowns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-100">
            {/* Region */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Region / Market
              </label>
              <select
                value={selectedRegion}
                onChange={e => setSelectedRegion(e.target.value)}
                aria-label="Filter by region"
                className="w-full py-1.5 px-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium cursor-pointer"
              >
                <option value="all">All Regions</option>
                <option value="United States">United States</option>
                <option value="India">India (BSE / NSE)</option>
                <option value="Global">Global / Multi-Market</option>
                <option value="Asia">Asia</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Primary Category
              </label>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                aria-label="Filter by primary category"
                className="w-full py-1.5 px-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium cursor-pointer"
              >
                <option value="all">All Categories</option>
                <option value="speculative_bubble">Speculative Euphoria & Bubbles</option>
                <option value="credit_crisis">Credit & Banking Solvency</option>
                <option value="liquidity_flash">Liquidity & Algorithmic Flash</option>
                <option value="pandemic_shock">Pandemic & Exogenous Shocks</option>
                <option value="inflation_rate_hike">Inflation & Interest Rate Hikes</option>
                <option value="fraud_structural">Fraud & Structural Breakdown</option>
              </select>
            </div>

            {/* Severity */}
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                Severity (Peak-to-Trough)
              </label>
              <select
                value={selectedSeverity}
                onChange={e => setSelectedSeverity(e.target.value)}
                aria-label="Filter by severity"
                className="w-full py-1.5 px-2.5 text-xs rounded-md bg-slate-50 border border-slate-200 text-slate-700 font-medium cursor-pointer"
              >
                <option value="all">All Severities</option>
                <option value="extreme">Extreme Drawdown (&gt; 50%)</option>
                <option value="severe">Severe Drawdown (30% to 50%)</option>
                <option value="moderate">Moderate Correction / Bear (&lt; 30%)</option>
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
              <span className="text-slate-500">
                Showing <strong>{filteredCrashes.length}</strong> of {crashesData.length} crashes
              </span>
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 text-rose-600 hover:text-rose-800 font-semibold cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" /> Reset all filters
              </button>
            </div>
          )}
        </div>

        {/* Results Grid */}
        {filteredCrashes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrashes.map(crash => (
              <ArticleCard key={crash.id} crash={crash} />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl p-12 text-center">
            <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto mb-3" />
            <h3 className="font-serif-title font-bold text-slate-900 text-lg">No Crashes Match Your Criteria</h3>
            <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
              Try broadening your search query or resetting filters to view all historical crises.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Historical Bubbles & Precursor Epoches Section */}
        <section id="bubbles" className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>Historical Speculative Bubbles & Precursors</span>
            </div>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-slate-900">
              Speculative Asset Manias vs. Modern Stock Market Crashes
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Historical rigor requires distinguishing between speculative commodity manias or early unchartered joint-stock promotions (such as Tulip Mania in 1637 and the South Sea Bubble in 1720) and modern equity market crashes. The latter operate within formal, regulated stock exchanges with continuous price discovery, corporate earnings, central banking backstops, and modern settlement mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            {historicalBubblesAndContext.map(bubble => (
              <div
                key={bubble.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-slate-900 font-serif-title text-base">{bubble.title}</span>
                    <span className="font-mono text-xs text-slate-500">{bubble.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {bubble.location}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    <strong className="text-slate-800">Nature:</strong> {bubble.nature}
                  </p>
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs mb-3">
                    <span className="text-[11px] font-semibold text-rose-700 block uppercase">Peak Loss:</span>
                    <span className="text-slate-700">{bubble.peakLoss}</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    <strong className="text-blue-900">Academic Distinction:</strong> {bubble.keyDistinction}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 italic">
                  <strong>Key Lesson:</strong> {bubble.lesson}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};
