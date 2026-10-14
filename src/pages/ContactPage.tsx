import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, ShieldCheck, HelpCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Breadcrumb } from '../components/Breadcrumb';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('correction');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('Please enter your full name.');
      setStatus('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrorMsg('Please enter a valid academic or professional email address.');
      setStatus('error');
      return;
    }

    if (!message.trim() || message.length < 20) {
      setErrorMsg('Please provide a message with at least 20 characters detailing your inquiry or citation correction.');
      setStatus('error');
      return;
    }

    setStatus('submitting');

    // Simulate backend delivery with local storage archiving
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('mca_inquiries') || '[]');
        stored.push({ name, email, topic, message, date: new Date().toISOString() });
        localStorage.setItem('mca_inquiries', JSON.stringify(stored));
      } catch {
        // ignore
      }
      setStatus('success');
    }, 600);
  };

  return (
    <>
      <SEO
        title="Contact & Archival Corrections – Market Crash Archive"
        description="Submit historical citation corrections, academic research submissions, or institutional inquiries to the Market Crash Archive team."
        canonicalPath="/contact"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumb items={[{ label: 'Contact & Corrections' }]} />

        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-blue-900" />
            <span>Editorial Inquiries</span>
          </div>
          <h1 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Contact & Archival Corrections
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Historical accuracy is our highest priority. If you represent an academic institution, identify an archival data discrepancy, or wish to submit a peer-reviewed correction with primary sources, please submit your feedback below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Info Column */}
          <div className="space-y-6 text-xs sm:text-sm text-slate-600">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-3">
              <h3 className="font-bold text-slate-900 font-serif-title text-base">
                Editorial Review Standards
              </h3>
              <p className="leading-relaxed">
                All proposed corrections to peak/trough closing numbers, trading dates, or regulatory actions must be accompanied by a verifiable primary source URL (e.g. SEC.gov, RBI.org.in, FedHistory, or official exchange records).
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-slate-900">Direct Inquiries</h4>
              <p className="text-slate-500 text-xs">
                For academic licensing or syndication:
              </p>
              <a
                href="mailto:research@marketcrasharchive.org"
                className="text-blue-900 font-semibold hover:underline block font-mono text-xs"
              >
                research@marketcrasharchive.org
              </a>
            </div>

            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl text-xs text-blue-950 space-y-1">
              <span className="font-bold block">Backend Architecture Note:</span>
              <p>
                In production, inquiries route via Express server (<code>/api/contact</code>) to a secure queue. Submissions are temporarily archived locally in client storage during preview.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="md:col-span-2">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs">
              {status === 'success' ? (
                <div className="text-center py-8 space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="font-serif-title font-bold text-slate-900 text-xl">
                    Inquiry Received & Logged
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{name}</strong>. Your archival inquiry regarding <strong className="text-slate-900">{topic}</strong> has been received by our editorial research committee.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Dr. Eleanor Vance or John Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-900 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Institutional / Professional Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="e.vance@university.edu"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-900 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Topic of Inquiry *
                    </label>
                    <select
                      value={topic}
                      onChange={e => setTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-900 text-slate-900 cursor-pointer"
                    >
                      <option value="correction">Archival Citation / Data Correction</option>
                      <option value="research">Academic Research Collaboration</option>
                      <option value="general">General Feedback or Inquiries</option>
                      <option value="press">Press & Media Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                      Message & Supporting Citation Links *
                    </label>
                    <textarea
                      rows={5}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Please specify the article title, exact paragraph or table row, and the primary citation source..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-hidden focus:border-blue-900 text-slate-900 leading-relaxed"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 bg-blue-950 hover:bg-blue-900 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Submitting to Archive...' : 'Send Inquiry to Editorial Board'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
