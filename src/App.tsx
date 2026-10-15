/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { CrashesList } from './pages/CrashesList';
import { CrashDetail } from './pages/CrashDetail';
import { IndiaCrashes } from './pages/IndiaCrashes';
import { TimelinePage } from './pages/TimelinePage';
import { ComparePage } from './pages/ComparePage';
import { CausesPage } from './pages/CausesPage';
import { RecoveryPage } from './pages/RecoveryPage';
import { LessonsPage } from './pages/LessonsPage';
import { AboutPage } from './pages/AboutPage';
import { MethodologyPage } from './pages/MethodologyPage';
import { SourcesPage } from './pages/SourcesPage';
import { GlossaryPage } from './pages/GlossaryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { SEOReportPage } from './pages/SEOReportPage';
import { AlertTriangle, Home as HomeIcon } from 'lucide-react';

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 border border-rose-200">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <h1 className="font-serif-title text-3xl font-bold text-slate-900 mb-2">
        404 – Historical Record Not Found
      </h1>
      <p className="text-slate-600 text-sm mb-6 leading-relaxed">
        The URL you navigated to does not correspond to an existing archival dossier or page.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          to="/"
          className="px-5 py-2.5 bg-blue-950 text-white rounded-lg text-xs font-semibold hover:bg-blue-900 transition-colors inline-flex items-center gap-1.5"
        >
          <HomeIcon className="w-3.5 h-3.5" /> Return Home
        </Link>
        <Link
          to="/crashes"
          className="px-5 py-2.5 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold hover:bg-slate-200 transition-colors"
        >
          View All Crashes
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#fafbfc] text-[#0f172a]">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Crashes catalog */}
            <Route path="/crashes" element={<CrashesList />} />
            
            {/* India specific hub & article routes */}
            <Route path="/crashes/india" element={<IndiaCrashes />} />
            <Route path="/crashes/india/:slug" element={<CrashDetail />} />

            {/* Individual crash dossiers (reusable dynamic template) */}
            <Route path="/crashes/:slug" element={<CrashDetail />} />

            {/* Analytical Tools & Frameworks */}
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/recovery" element={<RecoveryPage />} />
            <Route path="/lessons" element={<LessonsPage />} />

            {/* Institutional & Legal Pages */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/sources" element={<SourcesPage />} />
            <Route path="/glossary" element={<GlossaryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            
            {/* Academic SEO Assignment Report */}
            <Route path="/seo-report" element={<SEOReportPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
