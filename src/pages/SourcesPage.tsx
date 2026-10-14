import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ExternalLink,
  Search,
  Filter,
  Landmark,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { archiveSources } from '../data/sources';
import { Breadcrumb } from '../components/Breadcrumb';

export const SourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredSources = archiveSources.filter(src => {
    if (categoryFilter !== 'all' && src.category !== categoryFilter) return false;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        src.title.toLowerCase().includes(q) ||
        src.authorOrInstitution.toLowerCase().includes(q) ||
        src.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <>
      <SEO
        title="Primary Sources & Academic References Bibliography"
        description="Searchable catalog of institutional archives, regulatory reports, central bank publications, and academic treatises cited in the Market Crash Archive."
        canonicalPath="/sources"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Sources & References' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-blue-900" />
            <span>Academic Bibliography</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Sources & Institutional References
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            Every analysis on Market Crash Archive is grounded in verifiable historical literature, official statutory commission findings, and central bank records. Never invented, never unverified.
          </p>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <div className="relative grow">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search bibliography by title, author, institution (e.g. Federal Reserve, SEBI, Shiller)..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-slate-50 border border-slate-200 focus:outline-hidden focus:border-blue-900 text-slate-900 placeholder:text-slate-400"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={e => setCategoryFilter(e.target.value)}
              aria-label="Filter sources by category"
              className="py-2 px-3 text-xs sm:text-sm rounded-lg bg-slate-50 border border-slate-200 text-slate-700 font-medium cursor-pointer"
            >
              <option value="all">All Source Categories</option>
              <option value="Central Banking">Central Banking (Fed, RBI, BIS, IMF)</option>
              <option value="Government Reports">Government Inquiries (Brady, JPC, FCIC)</option>
              <option value="Securities Regulation">Securities Regulation (SEC, SEBI)</option>
              <option value="Academic Research">Academic Research & NBER Papers</option>
            </select>
          </div>
        </div>

        {/* Source Cards */}
        <div className="space-y-4">
          {filteredSources.map(src => (
            <div
              key={src.id}
              className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs hover:border-slate-300 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 uppercase">
                    {src.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Published: {src.year}
                  </span>
                </div>

                <h2 className="font-serif-title font-bold text-slate-900 text-base sm:text-lg">
                  {src.title}
                </h2>

                <p className="text-xs font-semibold text-blue-900">
                  {src.authorOrInstitution}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {src.description}
                </p>

                {src.associatedEvents.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 text-[11px] text-slate-500">
                    <span>Cited in:</span>
                    {src.associatedEvents.map(slug => (
                      <Link
                        key={slug}
                        to={`/crashes/${slug}`}
                        className="underline hover:text-slate-800"
                      >
                        {slug}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-blue-900 text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
                >
                  <span>Official Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </>
  );
};
