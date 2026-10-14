import React from 'react';
import { ShieldAlert, AlertTriangle, Scale, FileText, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export const DisclaimerPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Financial & Legal Disclaimer – Market Crash Archive"
        description="Official financial and legal disclaimer for Market Crash Archive. Educational and historical research only; does not constitute financial, investment, or legal advice."
        canonicalPath="/disclaimer"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Breadcrumb items={[{ label: 'Financial Disclaimer' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-rose-200">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
            <span>Statutory Disclosure</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900">
            Financial & Research Disclaimer
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Mandatory Reading for All Readers & Researchers
          </p>
        </div>

        {/* Warning Callout Box */}
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 text-amber-950 text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>NOT FINANCIAL ADVICE:</span>
          </div>
          <p>
            The information, charts, timelines, drawdown statistics, and case studies published on <strong>Market Crash Archive</strong> are provided exclusively for <strong>educational, academic, historical, and archival research purposes</strong>. Under no circumstances should any analysis on this website be construed as investment advice, financial planning, portfolio recommendations, or a solicitation to purchase or liquidate any security, index, derivative, or financial product.
          </p>
        </div>

        {/* Disclaimers Details */}
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              1. Past Performance Does Not Predict Future Outcomes
            </h2>
            <p>
              Historical market drawdowns, duration of contractions, and time required to re-attain prior peaks (such as the 5-month recovery of 2020 or the 25-year recovery of 1929) represent specific macroeconomic conditions and policy backstops that occurred in the past. Economic environments, monetary regimes, debt burdens, and geopolitical circumstances differ fundamentally in every market cycle. Past performance is no guarantee of future results.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              2. Jurisdictional & Regulatory Disclosures
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <p>
                <strong>United States:</strong> The authors and publishers of this website are not registered investment advisers (RIAs) or broker-dealers with the U.S. Securities and Exchange Commission (SEC) or the Financial Industry Regulatory Authority (FINRA).
              </p>
              <p>
                <strong>India:</strong> Market Crash Archive is an independent research publication and is not registered as a Research Analyst or Investment Adviser under the Securities and Exchange Board of India (SEBI) Regulations. Mention of specific stocks (e.g. Associated Cement Companies in 1992, Reliance Power in 2008) is strictly historical contextual commentary and does not constitute stock recommendations.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              3. Data Accuracy & Evidentiary Limitations
            </h2>
            <p>
              While every effort is made to cross-reference historical index closes, percentage drawdowns, and trading volumes with official central bank and exchange documents, historical financial records from earlier eras (such as 1929 or 1873) may involve differing index calculation methodologies, missing intraday ticks, or historical revisions. Market Crash Archive provides all information on an "as-is" basis without warranties of completeness or fitness for any particular trading purpose.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              4. Consult Licensed Professionals
            </h2>
            <p>
              Always consult a qualified, licensed certified financial planner (CFP), registered investment advisor, tax specialist, or legal counsel regarding your specific personal circumstances before implementing any investment strategy or financial risk allocation.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
