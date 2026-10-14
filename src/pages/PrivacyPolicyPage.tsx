import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy – Market Crash Archive"
        description="Privacy policy and data transparency statement for Market Crash Archive. We respect reader privacy and do not sell personal data."
        canonicalPath="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Lock className="w-3.5 h-3.5 text-blue-900" />
            <span>Transparency & Compliance</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 mt-2 font-mono">
            Last Updated & Verified: October 2026
          </p>
        </div>

        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              1. Non-Commercial Academic Commitment
            </h2>
            <p>
              Market Crash Archive operates as an independent historical and academic reference database. We do not sell, rent, monetize, or trade any personal data, email addresses, or reader analytics with advertising brokers or commercial marketing networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              2. Newsletter Subscription Data
            </h2>
            <p>
              When you voluntarily subscribe to our Research Dispatch, we collect only your submitted email address and preferred dispatch frequency. This data is utilized solely to deliver our monthly or quarterly historical case studies. You may unsubscribe at any time via the single-click opt-out link included in every dispatch.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              3. Local Browser Storage & Cookies
            </h2>
            <p>
              We prioritize minimal client-side state. We do not employ third-party tracking pixels or behavioral cross-site trackers. Any local storage used by the website is strictly functional (e.g. remembering your comparison selections or search preferences).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-title text-lg font-bold text-slate-900">
              4. External Links & Third-Party Repositories
            </h2>
            <p>
              Our historical case studies contain outbound hyperlinks to primary source documents hosted on external government and institutional websites (such as SEC.gov, RBI.org.in, and FederalReserveHistory.org). We bear no responsibility for the independent privacy practices of third-party domains.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};
