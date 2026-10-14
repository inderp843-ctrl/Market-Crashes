import React from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingDown,
  Zap,
  TrendingUp,
  Percent,
  Cpu,
  ShieldAlert,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { causesData } from '../data/causes';
import { Breadcrumb } from '../components/Breadcrumb';

export const CausesPage: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-rose-500" />;
      case 'Percent': return <Percent className="w-5 h-5 text-blue-500" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-purple-500" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-red-500" />;
      default: return <AlertTriangle className="w-5 h-5 text-amber-600" />;
    }
  };

  return (
    <>
      <SEO
        title="Causes of Stock Market Crashes – Leverage, Liquidity & Bubbles"
        description="Comprehensive historical research into the six root causes of stock market crashes: leverage spirals, valuation euphoria, rate hikes, algorithmic cascades, and black swans."
        canonicalPath="/causes"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumb items={[{ label: 'Causes of Crashes' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
            <span>Foundational Financial Mechanics</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            The Fundamental Causes of Market Crashes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
            While each market crash arrives with unique headlines and novel technologies, the underlying mechanical triggers conform to recurring structural patterns. Here is the forensic breakdown of the six primary forces that produce financial panics.
          </p>
        </div>

        {/* Causes Deep Dive Grid */}
        <div className="space-y-10">
          {causesData.map((cause, idx) => (
            <article
              key={cause.id}
              id={cause.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs scroll-mt-24 space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl shrink-0">
                    {getIcon(cause.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Cause 0{idx + 1} • {cause.tag}
                    </span>
                    <h2 className="font-serif-title text-2xl font-bold text-slate-900 mt-0.5">
                      {cause.title}
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
                      {cause.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {cause.description}
              </p>

              {/* Historical Case Examples */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Documented Historical Precedents:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {cause.historicalExamples.map((ex, exIdx) => (
                    <div key={exIdx} className="bg-white p-3.5 rounded-lg border border-slate-200 flex flex-col justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block font-serif-title">{ex.event} ({ex.year})</span>
                        <p className="text-slate-600 mt-1 line-clamp-3">{ex.mechanism}</p>
                      </div>
                      <Link
                        to={`/crashes/${ex.slug}`}
                        className="text-blue-900 hover:text-blue-700 font-semibold mt-3 inline-flex items-center gap-1 text-[11px]"
                      >
                        Read Dossier <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mechanics & Early Warning Signals Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Structural Mechanics */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Structural Transmission Mechanics
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {cause.structuralMechanics.map((mech, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                        <span className="text-rose-500 font-bold">•</span>
                        <span>{mech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Early Warning Signals */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 font-mono flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
                    Early Warning Indicators
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {cause.earlyWarningSignals.map((signal, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 bg-amber-50/40 p-2.5 rounded-lg border border-amber-100/60">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{signal}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Investor Mitigation */}
              <div className="p-4 bg-emerald-50/50 border border-emerald-200/60 rounded-xl text-xs space-y-1">
                <span className="font-bold text-emerald-900 uppercase tracking-wider text-[11px] block">
                  Empirical Investor Defense:
                </span>
                <ul className="space-y-1 text-slate-700">
                  {cause.investorMitigations.map((mit, mitIdx) => (
                    <li key={mitIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{mit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>

      </div>
    </>
  );
};
