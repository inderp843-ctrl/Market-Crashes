import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, BookOpen, AlertCircle, FileText, Globe } from 'lucide-react';
import { crashesData, historicalBubblesAndContext } from '../data/crashes';
import { glossaryTerms } from '../data/glossary';
import { causesData } from '../data/causes';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    // 1. Search crashes
    const crashMatches = crashesData
      .filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.shortTitle.toLowerCase().includes(q) ||
          c.year.toString().includes(q) ||
          c.country.toLowerCase().includes(q) ||
          c.indexName.toLowerCase().includes(q) ||
          c.summary.toLowerCase().includes(q) ||
          c.mainCauses.some(m => m.toLowerCase().includes(q))
      )
      .map(c => ({
        type: 'crash',
        title: c.title,
        subtitle: `${c.year} • ${c.country} • ${c.indexName} (${c.declinePercentage}%)`,
        path: c.routePath,
        badge: c.isIndia ? 'Indian Market' : 'Global Crash'
      }));

    // 2. Search causes
    const causeMatches = causesData
      .filter(
        c =>
          c.title.toLowerCase().includes(q) ||
          c.subtitle.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      )
      .map(c => ({
        type: 'cause',
        title: c.title,
        subtitle: c.subtitle,
        path: `/causes#${c.id}`,
        badge: 'Crash Factor'
      }));

    // 3. Search glossary
    const glossaryMatches = glossaryTerms
      .filter(
        g =>
          g.term.toLowerCase().includes(q) ||
          g.definition.toLowerCase().includes(q) ||
          (g.historicalExample && g.historicalExample.toLowerCase().includes(q))
      )
      .map(g => ({
        type: 'glossary',
        title: g.term,
        subtitle: g.definition.slice(0, 100) + '...',
        path: `/glossary?q=${encodeURIComponent(g.term)}`,
        badge: g.category
      }));

    // 4. Historical Bubbles
    const bubbleMatches = historicalBubblesAndContext
      .filter(
        b =>
          b.title.toLowerCase().includes(q) ||
          b.nature.toLowerCase().includes(q) ||
          b.location.toLowerCase().includes(q)
      )
      .map(b => ({
        type: 'bubble',
        title: b.title,
        subtitle: `${b.location} • ${b.period}`,
        path: `/crashes#bubbles`,
        badge: 'Historical Bubble'
      }));

    // 5. Analytical Tools & Platform Pages
    const staticPages = [
      { title: 'Academic SEO & Keyword Research Report', subtitle: 'Keyword research tables, on-page matrix, and AEO strategy for college assignment', path: '/seo-report', badge: 'Assignment Report', keywords: ['seo', 'keyword', 'report', 'assignment', 'research', 'table', 'presentation', 'audit'] },
      { title: 'Interactive Multi-Crash Comparator', subtitle: 'Contrast drawdowns, duration, and central bank liquidity side-by-side', path: '/compare', badge: 'Analytical Tool', keywords: ['compare', 'comparator', 'contrast', 'metrics'] },
      { title: 'Historical Market Crash Timeline', subtitle: 'Chronological roadmap of crashes from 1929 to present day', path: '/timeline', badge: 'Chronology', keywords: ['timeline', 'chronology', 'dates', 'history'] },
      { title: 'Empirical Market Recovery Studies', subtitle: 'Analysis of V-shaped vs L-shaped recoveries and breakeven horizons', path: '/recovery', badge: 'Recovery Research', keywords: ['recovery', 'rebound', 'breakeven', 'v-shape', 'duration'] },
      { title: '6 Fundamental Causes of Market Panics', subtitle: 'Deep dive into leverage, liquidity runs, monetary shocks, and bubbles', path: '/causes', badge: 'Research Study', keywords: ['causes', 'why', 'triggers', 'factors', 'leverage'] },
      { title: 'Timeless Lessons for Modern Investors', subtitle: 'Synthesized asset allocation rules across a century of crashes', path: '/lessons', badge: 'Investor Guide', keywords: ['lessons', 'investing', 'rules', 'principles', 'advice'] }
    ];

    const pageMatches = staticPages
      .filter(p => p.title.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q) || p.keywords.some(k => k.includes(q)))
      .map(p => ({
        type: 'page',
        title: p.title,
        subtitle: p.subtitle,
        path: p.path,
        badge: p.badge
      }));

    return [...pageMatches, ...crashMatches, ...causeMatches, ...glossaryMatches, ...bubbleMatches].slice(0, 8);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 mr-3" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search crashes, years, indices, causes, or glossary terms... (e.g. 1929, Lehman, Harshad, Circuit Breaker)"
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden text-sm sm:text-base font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 mr-2">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-100 border border-slate-200 rounded-md">
            ESC
          </kbd>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="py-8 px-4 text-center">
              <p className="text-sm text-slate-500 font-medium">Quick Suggestions</p>
              <div className="flex flex-wrap justify-center gap-2 mt-3">
                {[
                  '1929 Wall Street',
                  '1987 Black Monday',
                  '2008 Lehman',
                  'Harshad Mehta 1992',
                  'COVID March 2020',
                  'Circuit Breaker',
                  'Portfolio Insurance',
                  'Margin Call'
                ].map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  className="w-full text-left px-3.5 py-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-start justify-between group border border-transparent hover:border-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-slate-400 group-hover:text-slate-700 transition-colors">
                      {item.type === 'crash' && <AlertCircle className="w-4 h-4 text-rose-500" />}
                      {item.type === 'cause' && <FileText className="w-4 h-4 text-amber-500" />}
                      {item.type === 'glossary' && <BookOpen className="w-4 h-4 text-blue-500" />}
                      {item.type === 'bubble' && <Globe className="w-4 h-4 text-emerald-500" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium uppercase tracking-wider">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-600 transition-colors mt-1 opacity-0 group-hover:opacity-100" />
                </button>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-slate-500 text-sm">
              No results found for "<span className="text-slate-900 font-semibold">{query}</span>".
              <br />
              <span className="text-xs text-slate-400 mt-1 block">Try searching by year (e.g. 1987), company name, index, or country.</span>
            </div>
          )}
        </div>

        <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <span>Press <kbd className="font-mono bg-white border border-slate-200 px-1 rounded">ESC</kbd> to close</span>
        </div>
      </div>
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
};
