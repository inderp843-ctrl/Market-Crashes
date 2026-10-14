import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  BookOpen,
  Search,
  Filter,
  Tag,
  ArrowRight,
  ExternalLink,
  History
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { glossaryTerms } from '../data/glossary';
import { Breadcrumb } from '../components/Breadcrumb';

export const GlossaryPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const set = new Set<string>();
    glossaryTerms.forEach(t => set.add(t.category));
    return Array.from(set);
  }, []);

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(t => {
      if (selectedCategory !== 'all' && t.category !== selectedCategory) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        return (
          t.term.toLowerCase().includes(q) ||
          t.definition.toLowerCase().includes(q) ||
          (t.historicalExample && t.historicalExample.toLowerCase().includes(q))
        );
      }
      return true;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [query, selectedCategory]);

  return (
    <>
      <SEO
        title="Financial Glossary – Stock Market Crash Terminology"
        description="Authoritative definitions of financial market crash concepts: Circuit Breakers, Margin Calls, Drawdowns, Portfolio Insurance, Quantitative Tightening, Badla, and HFT."
        canonicalPath="/glossary"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Financial Glossary' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-900" />
            <span>Market Vocabulary</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Financial Crash Glossary
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Essential concepts in market microstructure, monetary intervention, credit leverage, and trading mechanics explained with clear historical examples.
          </p>

          {/* Search & Category Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="relative grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search glossary terms (e.g., Circuit Breaker, Margin Call, FII, VIX)..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-blue-900 text-slate-900 placeholder:text-slate-400"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              aria-label="Filter glossary terms by category"
              className="py-2 px-3 text-xs sm:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium cursor-pointer"
            >
              <option value="all">All Categories ({glossaryTerms.length})</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Glossary Terms List */}
        <div className="space-y-4">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-serif-title font-bold text-slate-900 text-lg sm:text-xl">
                    {item.term}
                  </h2>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                    {item.category}
                  </span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed">
                  {item.definition}
                </p>

                {item.historicalExample && (
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-600 flex items-start gap-2">
                    <History className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Historical Precedent:</strong>{' '}
                      {item.historicalExample}
                    </div>
                  </div>
                )}

                {item.relatedTerms && item.relatedTerms.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs">
                    <span className="text-slate-400 font-medium">Related:</span>
                    {item.relatedTerms.map((rt, rIdx) => (
                      <button
                        key={rIdx}
                        onClick={() => setQuery(rt)}
                        className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors cursor-pointer"
                      >
                        {rt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-10 text-center text-slate-500 text-sm">
              No glossary terms match your search query. Try another term or reset filters.
            </div>
          )}
        </div>

      </div>
    </>
  );
};
