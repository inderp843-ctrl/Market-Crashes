import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  BookOpen,
  Users,
  Target,
  Landmark,
  ArrowRight
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About the Project – Independent Financial History Initiative"
        description="Learn about Market Crash Archive: our research philosophy, archival standards, non-commercial educational mission, and academic methodology."
        canonicalPath="/about"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'About the Project' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-blue-900" />
            <span>Institutional Overview</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            About Market Crash Archive
          </h1>
          <p className="font-brand text-rose-800 text-base sm:text-lg font-semibold tracking-wide mt-1">
            Every Crash Has a Story. Every Cycle Has a Lesson.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-slate-700 text-base leading-relaxed">
          
          <section className="space-y-4">
            <h2 className="font-serif-title text-2xl font-bold text-slate-900">
              Our Mission
            </h2>
            <p>
              The <strong>Market Crash Archive</strong> is an open-access, independent financial history and research initiative dedicated to the systematic preservation, empirical analysis, and objective documentation of major stock market panics, systemic credit freezes, and macroeconomic crashes.
            </p>
            <p>
              Financial crises are frequently treated by popular commentary as incomprehensible "black swans" or sensationalized media spectacles. Our mission is to restore empirical historical rigor to financial education. By grounding every historical event in verifiable primary data—central bank balance sheets, regulatory post-mortems, closing index series, and academic economic literature—we provide investors, students, and researchers with the context necessary to understand risk before it materializes.
            </p>
          </section>

          <section className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-4">
            <h3 className="font-serif-title text-xl font-bold text-slate-900">
              Core Editorial & Research Principles
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>
                  <strong>Strict Non-Commercial Independence:</strong> We accept no brokerage sponsorships, sell no trading signals, and promote no speculative financial products.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>
                  <strong>Primary Sourced Research:</strong> Every percentage drawdown, trading halt, and recovery timeline is verified against official repository documents (Federal Reserve, RBI, SEC, SEBI, IMF, BIS).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                <span>
                  <strong>Epistemological Humility:</strong> We explicitly distinguish between facts that can be statistically proven and narratives that remain subject to historical debate. We state what history tells us and what it does <em>not</em> tell us.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif-title text-2xl font-bold text-slate-900">
              Who This Project Is For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-slate-900 block font-serif-title text-base mb-1">Investors & Traders</strong>
                <p className="text-slate-600">
                  Seeking historical perspective on drawdown frequencies, leverage hazards, and the psychological discipline required during liquidity panics.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-slate-900 block font-serif-title text-base mb-1">Students & Academics</strong>
                <p className="text-slate-600">
                  Conducting research into market microstructure, monetary policy transmission, financial regulation, and economic history.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">
                <strong className="text-slate-900 block font-serif-title text-base mb-1">Financial Historians</strong>
                <p className="text-slate-600">
                  Preserving primary sources, regulatory committee findings (such as the 1988 Brady Report and the 1993 Indian JPC report), and institutional memory.
                </p>
              </div>
            </div>
          </section>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-semibold">
            <Link to="/methodology" className="text-blue-900 hover:underline flex items-center gap-1">
              Read our Research Methodology <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/sources" className="text-blue-900 hover:underline flex items-center gap-1">
              Browse Sources & References <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-slate-300">•</span>
            <Link to="/disclaimer" className="text-rose-700 hover:underline flex items-center gap-1">
              Financial Disclaimer <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};
