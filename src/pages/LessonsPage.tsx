import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Quote,
  TrendingDown,
  ShieldCheck,
  Lightbulb
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { investorLessonsData } from '../data/lessons';
import { Breadcrumb } from '../components/Breadcrumb';

export const LessonsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Lessons for Investors – Timeless Insights from Market History"
        description="Six foundational investment principles synthesized from over a century of stock market crashes, liquidity panics, and economic contractions."
        canonicalPath="/lessons"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumb items={[{ label: 'Lessons for Investors' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200">
            <Lightbulb className="w-3.5 h-3.5 text-emerald-600" />
            <span>Empirical Wisdom for Disciplined Capital</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Timeless Lessons From 100+ Years of Market Crashes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Markets change technologies, regulations evolve, and indices rebalance—but human nature, greed, fear, and debt mathematics remain constant. Here are the core axioms every serious investor must internalize to survive and compound wealth across full market cycles.
          </p>
        </div>

        {/* Lessons List */}
        <div className="space-y-10">
          {investorLessonsData.map(lesson => (
            <article
              key={lesson.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5"
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <span className="font-mono text-2xl font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1.5 rounded-xl shrink-0">
                  {lesson.number}
                </span>
                <div>
                  <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-slate-900">
                    {lesson.title}
                  </h2>
                </div>
              </div>

              {/* Quote Block */}
              <div className="bg-slate-50 border-l-4 border-emerald-600 p-4 rounded-r-xl italic text-slate-700 text-sm flex items-start gap-3">
                <Quote className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif leading-relaxed">"{lesson.quote}"</p>
                  <p className="text-xs font-sans font-bold text-slate-500 mt-1 not-italic">
                    — {lesson.quoteAuthor}
                  </p>
                </div>
              </div>

              {/* Core Summary */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {lesson.summary}
              </p>

              {/* Historical Context */}
              <div className="text-xs sm:text-sm text-slate-600 bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                <strong className="text-slate-900 block mb-1">Historical Precedent:</strong>
                {lesson.historicalContext}
              </div>

              {/* Actionable Rules */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono block">
                  Actionable Rules for Investors:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {lesson.practicalAction.map((action, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Crashes Tagged */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-slate-400 font-semibold">Exemplified In:</span>
                {lesson.crashReferences.map(ref => (
                  <Link
                    key={ref.slug}
                    to={`/crashes/${ref.slug}`}
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium transition-colors"
                  >
                    {ref.name} →
                  </Link>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </>
  );
};
