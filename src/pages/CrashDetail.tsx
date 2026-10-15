import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  TrendingDown,
  Activity,
  AlertTriangle,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  Share2,
  Printer,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { crashesData } from '../data/crashes';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';
import { DrawdownChart } from '../components/DrawdownChart';

export const CrashDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find crash by slug
  const crash = crashesData.find(c => c.slug === slug);

  if (!crash) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <AlertTriangle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
        <h1 className="font-serif-title text-3xl font-bold text-slate-900 mb-2">
          Historical Dossier Not Found
        </h1>
        <p className="text-slate-600 mb-6 text-sm">
          The requested crash dossier (<code className="bg-slate-100 px-2 py-1 rounded">{slug}</code>) does not exist in our historical archive.
        </p>
        <Link
          to="/crashes"
          className="px-6 py-2.5 bg-blue-950 text-white rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors inline-flex items-center gap-2"
        >
          Return to All Crashes Catalog
        </Link>
      </div>
    );
  }

  // Related crashes
  const relatedCrashes = crashesData.filter(c =>
    crash.relatedSlugs?.includes(c.slug)
  );

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: crash.title,
        text: crash.subtitle,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const breadcrumbItems = [
    { label: crash.isIndia ? 'Indian Market Archive' : 'Crashes Catalog', path: crash.isIndia ? '/crashes/india' : '/crashes' },
    { label: crash.shortTitle }
  ];

  return (
    <>
      <SEO
        title={crash.seoTitle || `${crash.title} (${crash.year}) – Causes, Drawdown & Recovery`}
        description={crash.metaDescription || crash.summary}
        canonicalPath={crash.routePath}
        type="article"
        publishedTime={`${crash.year}-01-01`}
        imageUrl={crash.featuredImage}
        imageAlt={crash.imageAlt}
        aeoQuestions={crash.aeoQuestions}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: crash.isIndia ? 'Indian Market Archive' : 'Crashes Catalog', url: crash.isIndia ? '/crashes/india' : '/crashes' },
          { name: crash.shortTitle, url: crash.routePath }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ScholarlyArticle',
          'headline': crash.title,
          'name': crash.seoTitle,
          'description': crash.metaDescription || crash.summary,
          'image': crash.featuredImage,
          'keywords': [crash.primaryKeyword, ...crash.relatedKeywords].join(', '),
          'author': {
            '@type': 'Organization',
            'name': 'Market Crash Archive Research Initiative'
          },
          'publisher': {
            '@type': 'Organization',
            'name': 'Market Crash Archive'
          },
          'about': [
            crash.indexName,
            'Stock Market Crash',
            crash.country,
            crash.categoryLabel
          ]
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* Breadcrumb & Utility Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-slate-500">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" /> Share
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" /> Print Dossier
            </button>
          </div>
        </div>

        {/* 1. Article Header & Metadata */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md font-semibold bg-blue-900 text-white">
              <MapPin className="w-3 h-3" />
              {crash.country}
            </span>
            <span className="px-2.5 py-0.5 rounded-md font-mono font-semibold bg-slate-100 text-slate-800">
              {crash.year}
            </span>
            <span className="px-2.5 py-0.5 rounded-md font-semibold bg-rose-50 text-rose-700 border border-rose-200">
              {crash.categoryLabel}
            </span>
          </div>

          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {crash.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-serif leading-relaxed">
            {crash.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <strong>Period:</strong> {crash.dateRange}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <strong>Reading time:</strong> {crash.readingTimeMinutes} min
            </span>
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-slate-400" />
              <strong>Primary Index:</strong> {crash.indexName}
            </span>
          </div>

          {/* Academic & Evaluator On-Page SEO Mapping Strip */}
          <div className="p-3 bg-amber-50/70 border border-amber-200/90 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-200/80 text-amber-950 font-mono font-bold text-[11px]">
                <HelpCircle className="w-3 h-3 text-amber-800" />
                <span>Target Primary Keyword:</span>
              </span>
              <strong className="text-slate-900 font-semibold underline decoration-amber-400">"{crash.primaryKeyword}"</strong>
            </div>
            <div className="text-[11px] text-slate-600 font-mono">
              Secondary: {crash.relatedKeywords.map((kw, i) => (
                <span key={i} className="inline-block bg-white px-2 py-0.5 rounded border border-amber-200/60 ml-1.5 text-slate-700">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Archival Photograph & Visual Record */}
        {crash.featuredImage && (
          <figure id="photo-record" className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-900 group">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] max-h-[460px] overflow-hidden">
              <img
                src={crash.featuredImage}
                alt={crash.imageAlt}
                title={crash.imageTitle}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e]/90 via-black/25 to-transparent pointer-events-none" />
              <figcaption className="absolute bottom-3 left-4 right-4 text-xs sm:text-sm text-white font-medium drop-shadow-md">
                {crash.imageCaption}
              </figcaption>
            </div>
            <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
              <div className="space-y-0.5">
                <span className="font-semibold text-slate-900 block font-serif-title">
                  {crash.imageTitle}
                </span>
                <p className="text-[11px] text-slate-600 leading-relaxed max-w-3xl">
                  {crash.imageDescription}
                </p>
              </div>
              <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 bg-white px-2.5 py-1 rounded border border-slate-200">
                <span className="text-slate-400">Alt:</span>
                <span className="text-slate-700 font-medium">"{crash.imageAlt}"</span>
              </div>
            </div>
          </figure>
        )}

        {/* Key Quantitative Data Matrix Box */}
        <section aria-label="Key quantitative metrics" className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            
            <div className="border-r border-slate-800 last:border-none pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Peak-to-Trough</span>
              <span className="font-mono-numbers text-2xl sm:text-3xl font-bold text-rose-400 block mt-1">
                {crash.declinePercentage}%
              </span>
              <span className="text-[11px] text-slate-400">Total Closing Drop</span>
            </div>

            <div className="border-r border-slate-800 last:border-none pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Cycle Peak</span>
              <span className="font-mono-numbers text-lg sm:text-xl font-bold text-white block mt-1">
                {crash.peakValue}
              </span>
              <span className="text-[11px] text-slate-400">{crash.peakDate}</span>
            </div>

            <div className="border-r border-slate-800 last:border-none pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Cycle Trough</span>
              <span className="font-mono-numbers text-lg sm:text-xl font-bold text-rose-300 block mt-1">
                {crash.troughValue}
              </span>
              <span className="text-[11px] text-slate-400">{crash.troughDate}</span>
            </div>

            <div className="border-r border-slate-800 last:border-none pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Drop Duration</span>
              <span className="font-mono-numbers text-xl font-bold text-white block mt-1">
                {crash.durationDays} Days
              </span>
              <span className="text-[11px] text-slate-400">Peak to trough</span>
            </div>

            <div className="border-r border-slate-800 last:border-none pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Recovery Time</span>
              <span className="font-mono-numbers text-xl font-bold text-emerald-400 block mt-1">
                {typeof crash.recoveryMonths === 'number' ? `${crash.recoveryMonths} Mos` : crash.recoveryMonths}
              </span>
              <span className="text-[11px] text-slate-400">To previous peak</span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">Intraday Max</span>
              <span className="font-mono-numbers text-xs font-bold text-amber-300 block mt-1 line-clamp-2">
                {crash.intradayMaxDecline || 'N/A (Daily close data)'}
              </span>
            </div>

          </div>
        </section>

        {/* Interactive Drawdown Chart */}
        <section aria-label="Interactive drawdown visualization">
          <DrawdownChart
            data={crash.chartData}
            title={`${crash.shortTitle}: Drawdown Trajectory`}
            subtitle={`Closing price normalization (100 = ${crash.peakDate} peak)`}
            baselineDescription={crash.chartBaselineDesc}
            currency={crash.currency}
          />
        </section>

        {/* Main Editorial Body (Two Column Layout with Sticky Nav) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Main Article Content (15 Required Dimensions) */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Answer Engine Optimization (AEO) Executive Q&A Block */}
            {crash.aeoQuestions && crash.aeoQuestions.length > 0 && (
              <section id="aeo-answers" className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-900/60 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-800/60 pb-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                      <HelpCircle className="w-3.5 h-3.5 text-blue-400" />
                      <span>Answer Engine Optimization (AEO) • Executive Direct Answers</span>
                    </div>
                    <h2 className="font-serif-title text-xl sm:text-2xl font-bold text-white">
                      High-Intent Questions & Authoritative Answers
                    </h2>
                  </div>
                  <span className="text-xs text-slate-300 bg-blue-900/40 px-3 py-1.5 rounded-lg border border-blue-700/50 self-start sm:self-auto font-mono">
                    Target: AI Overviews & Featured Snippets
                  </span>
                </div>

                <div className="space-y-5">
                  {crash.aeoQuestions.map((item, idx) => (
                    <div key={idx} className="bg-slate-900/90 border border-blue-900/50 rounded-xl p-5 space-y-3">
                      <h3 className="font-serif-title text-base sm:text-lg font-bold text-amber-300 flex items-start gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 shrink-0 mt-0.5">Q{idx+1}</span>
                        <span>{item.question}</span>
                      </h3>
                      <div className="p-3.5 rounded-lg bg-blue-950/70 border-l-4 border-amber-400 text-sm text-slate-100 font-medium leading-relaxed">
                        <strong className="text-amber-200 block text-xs uppercase tracking-wider mb-1">Direct Answer:</strong>
                        {item.directAnswer}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-1">
                        {item.supportingDetails}
                      </p>
                      {item.sources && (
                        <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 flex items-center gap-1.5 font-mono">
                          <BookOpen className="w-3 h-3 text-slate-400" />
                          <span>Primary Source: {item.sources}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 1. Overview and Historical Context */}
            <section id="context" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                1. Overview & Historical Context
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {crash.summary}
              </p>
              <p className="text-slate-700 leading-relaxed text-base">
                {crash.historicalContext}
              </p>
            </section>

            {/* 2 & 3. Affected Markets & Date Ranges */}
            <section id="markets" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                2. Markets, Indices & Assets Affected
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                The crisis was concentrated in the <strong>{crash.indexName}</strong>, but transmitted rapidly across domestic and international financial channels:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {crash.affectedMarkets.map((market, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200/80">
                    <span className="w-2 h-2 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
                    <span>{market}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Timeline of Important Events */}
            <section id="timeline" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                3. Chronology of Critical Milestones
              </h2>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 space-y-6 pt-2">
                {crash.timeline.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-white border-2 border-blue-900 group-hover:bg-blue-900 transition-colors"></div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-blue-900">{item.date}</span>
                        <span className="text-sm font-bold text-slate-900 font-serif-title">{item.title}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Economic & Political Background */}
            <section id="background" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                4. Macroeconomic & Political Background
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {crash.economicBackground}
              </p>
            </section>

            {/* 6. Main Causes and Contributing Factors */}
            <section id="causes" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                5. Root Causes & Contributing Catalysts
              </h2>
              <div className="space-y-3">
                {crash.mainCauses.map((cause, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-medium">
                      {cause}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Investor Psychology and Panic Selling */}
            <section id="psychology" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                6. Investor Psychology & Behavioral Contagion
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {crash.investorPsychology}
              </p>
            </section>

            {/* 8. Role of Leverage, Liquidity, and Systemic Risk */}
            <section id="leverage" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                7. Leverage, Liquidity Squeeze & Systemic Fragility
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {crash.leverageAndLiquidity}
              </p>
            </section>

            {/* 9. Policy, Central Bank, and Regulatory Responses */}
            <section id="policy" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                8. Central Bank & Regulatory Interventions
              </h2>
              <div className="bg-blue-50/50 border border-blue-200/80 rounded-xl p-5">
                <p className="text-slate-800 leading-relaxed text-sm">
                  {crash.policyResponse}
                </p>
              </div>
            </section>

            {/* 10. Recovery Analysis & Timelines */}
            <section id="recovery" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                9. Market Recovery Mechanics & Breakeven Horizon
              </h2>
              <p className="text-slate-700 leading-relaxed text-base">
                {crash.recoveryAnalysis}
              </p>
              {crash.recoveryDate && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    <strong>Official Breakeven Date:</strong> {crash.recoveryDate} ({crash.recoveryMonths} calendar months from peak).
                  </span>
                </div>
              )}
            </section>

            {/* 11. Economic & Social Consequences */}
            <section id="consequences" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                10. Economic & Social Consequences
              </h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {crash.economicConsequences.map((consequence, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>
                    <span>{consequence}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 12. Lessons for Investors and Traders */}
            <section id="lessons" className="space-y-4 bg-emerald-50/40 border border-emerald-200/80 rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-emerald-900">
                <Award className="w-5 h-5 text-emerald-700" />
                <h2 className="font-serif-title text-xl sm:text-2xl font-bold">
                  11. Practical Lessons for Investors & Traders
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-3 pt-2">
                {crash.lessonsForInvestors.map((lesson, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-emerald-200/60 shadow-2xs flex items-start gap-3">
                    <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-sm font-medium text-slate-800 leading-relaxed">
                      {lesson}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 13. What History Does and Does Not Tell Us */}
            <section id="epistemology" className="space-y-4">
              <h2 className="font-serif-title text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                12. Historical Limits: What This Teaches Us vs. What It Does Not
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    What History Does Tell Us
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {crash.whatHistoryTellsUs}
                  </p>
                </div>

                <div className="bg-rose-50/50 border border-rose-200 p-5 rounded-xl">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-rose-600" />
                    What History Does Not Tell Us
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {crash.whatHistoryDoesNotTellUs}
                  </p>
                </div>
              </div>
            </section>

            {/* 14. Quantitative Methodology Notes */}
            <section id="methodology" className="space-y-2 bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600">
              <h3 className="font-bold uppercase tracking-wider text-slate-500 font-mono text-[11px]">
                13. Research Methodology & Data Integrity Notes
              </h3>
              <p className="leading-relaxed">
                {crash.methodologyNotes}
              </p>
            </section>

            {/* 15. Verified Sources & Academic References */}
            <section id="sources" className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-slate-700" />
                <h2 className="font-serif-title text-xl font-bold text-slate-900">
                  14. Primary Sources & Institutional References
                </h2>
              </div>
              <ul className="space-y-2.5">
                {crash.sources.map((src, idx) => (
                  <li key={idx} className="bg-white p-3.5 rounded-lg border border-slate-200 flex items-start justify-between gap-4 text-xs">
                    <div>
                      <strong className="text-slate-900 text-sm block font-serif-title">{src.title}</strong>
                      <span className="text-slate-500">{src.institution} ({src.year})</span>
                      <span className="ml-2 inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 uppercase text-[9px] font-semibold">
                        {src.type.replace('_', ' ')}
                      </span>
                    </div>
                    {src.url && (
                      <a
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 hover:text-blue-700 font-semibold inline-flex items-center gap-1 shrink-0"
                      >
                        Official Document <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Sticky Sidebar Navigation & Quick Jump */}
          <aside aria-label="Article navigation and related research" className="space-y-6">
            <div className="sticky top-24 space-y-6">
              
              {/* Table of Contents */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  In This Dossier
                </h4>
                <nav className="space-y-1 text-xs">
                  {[
                    ...(crash.featuredImage ? [{ id: 'photo-record', label: '📸 Archival Photograph' }] : []),
                    ...(crash.aeoQuestions && crash.aeoQuestions.length > 0 ? [{ id: 'aeo-answers', label: '⚡ AEO Executive Answers' }] : []),
                    { id: 'context', label: '1. Overview & Context' },
                    { id: 'markets', label: '2. Affected Markets' },
                    { id: 'timeline', label: '3. Critical Chronology' },
                    { id: 'background', label: '4. Macro Background' },
                    { id: 'causes', label: '5. Root Causes' },
                    { id: 'psychology', label: '6. Investor Psychology' },
                    { id: 'leverage', label: '7. Leverage & Liquidity' },
                    { id: 'policy', label: '8. Policy Response' },
                    { id: 'recovery', label: '9. Recovery Analysis' },
                    { id: 'consequences', label: '10. Consequences' },
                    { id: 'lessons', label: '11. Practical Lessons' },
                    { id: 'sources', label: '12. Primary Sources' }
                  ].map(sec => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block py-1 text-slate-600 hover:text-blue-900 hover:underline transition-colors"
                    >
                      {sec.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Compare Quick Action */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-600 space-y-3">
                <h4 className="font-bold text-slate-900">Compare With Another Event</h4>
                <p>Contrast this event’s drop velocity, recovery time, and monetary interventions side-by-side.</p>
                <Link
                  to={`/compare?c1=${crash.slug}`}
                  className="block text-center py-2 px-3 rounded-lg bg-blue-950 hover:bg-blue-900 text-white font-semibold transition-colors"
                >
                  Launch Comparison Tool →
                </Link>
              </div>

              {/* Related Crashes */}
              {relatedCrashes.length > 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Related Historical Analyses
                  </h4>
                  <div className="space-y-2">
                    {relatedCrashes.map(rel => (
                      <Link
                        key={rel.id}
                        to={rel.routePath}
                        className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-900 group-hover:text-blue-900 transition-colors">
                            {rel.shortTitle}
                          </span>
                          <span className="font-mono text-rose-600 font-bold">{rel.declinePercentage}%</span>
                        </div>
                        <span className="text-[11px] text-slate-400 block">{rel.year} • {rel.country}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </aside>

        </div>

      </div>
    </>
  );
};
