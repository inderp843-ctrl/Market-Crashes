import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, TrendingDown, MapPin, Activity } from 'lucide-react';
import { CrashArticle } from '../types';

interface ArticleCardProps {
  crash: CrashArticle;
  featured?: boolean;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ crash, featured = false }) => {
  return (
    <article
      className={`group bg-white rounded-xl border border-slate-200/90 hover:border-slate-400/80 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
        featured ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      {/* Article Image Banner */}
      {crash.featuredImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <Link to={crash.routePath} tabIndex={-1} aria-hidden="true" className="block w-full h-full">
            <img
              src={crash.featuredImage}
              alt={crash.imageAlt}
              title={crash.imageTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
              loading="lazy"
            />
          </Link>
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-rose-600/95 text-white shadow-md backdrop-blur-xs">
              <TrendingDown className="w-3.5 h-3.5" />
              {crash.declinePercentage}%
            </span>
          </div>

          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md font-mono text-[11px]">
              <MapPin className="w-3 h-3 text-rose-400" />
              {crash.country} • {crash.year}
            </span>
            <span className="text-[11px] font-mono text-slate-300 bg-black/50 px-2 py-0.5 rounded backdrop-blur-md">
              {crash.indexName.split(' ')[0]}
            </span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Top Badges (Fallback if no image or secondary tag) */}
        {!crash.featuredImage && (
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                <MapPin className="w-3 h-3 text-slate-400" />
                {crash.country}
              </span>
              <span className="text-xs font-mono text-slate-500 font-medium">
                {crash.year}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-bold font-mono bg-rose-50 text-rose-700 border border-rose-200">
                <TrendingDown className="w-3 h-3 text-rose-600" />
                {crash.declinePercentage}%
              </span>
            </div>
          </div>
        )}

        {/* Title & Subtitle */}
        <h3 className="font-serif-title font-bold text-slate-900 group-hover:text-blue-900 transition-colors text-lg sm:text-xl leading-snug mb-2">
          <Link to={crash.routePath} className="hover:underline focus:outline-hidden">
            {crash.title}
          </Link>
        </h3>

        <p className="text-xs font-medium text-slate-500 mb-3 italic">
          {crash.categoryLabel}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {crash.summary}
        </p>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-2 gap-2 py-3 px-3.5 bg-slate-50 rounded-lg border border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Primary Index</span>
            <span className="font-medium text-slate-800 truncate block">{crash.indexName}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Recovery Span</span>
            <span className="font-medium text-slate-800">
              {typeof crash.recoveryMonths === 'number'
                ? `${crash.recoveryMonths} months`
                : crash.recoveryMonths}
            </span>
          </div>
        </div>
      </div>

      {/* Footer / Read Link */}
      <div className="px-6 py-3.5 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {crash.dateRange}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {crash.readingTimeMinutes} min read
          </span>
        </div>

        <Link
          to={crash.routePath}
          className="inline-flex items-center gap-1 font-semibold text-blue-900 group-hover:translate-x-0.5 transition-transform"
        >
          Read Analysis
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
