import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly'>('monthly');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Strict email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid academic or professional email address.');
      return;
    }

    setStatus('loading');

    // Simulate persistent dispatch enrollment with realistic latency
    setTimeout(() => {
      // In this client environment, store subscription locally to simulate active subscription
      try {
        const existing = JSON.parse(localStorage.getItem('mca_subscribers') || '[]');
        if (!existing.includes(email)) {
          existing.push({ email, frequency, date: new Date().toISOString() });
          localStorage.setItem('mca_subscribers', JSON.stringify(existing));
        }
      } catch {
        // ignore storage errors
      }

      setStatus('success');
    }, 700);
  };

  return (
    <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl relative overflow-hidden my-12">
      {/* Subtle decorative background ring */}
      <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-rose-500/5 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-medium mb-4">
          <Mail className="w-3.5 h-3.5 text-rose-400" />
          <span>The Historical Research Dispatch</span>
        </div>

        <h2 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          Deep Financial History Delivered to Your Inbox
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl mx-auto">
          Join over 18,000 portfolio managers, institutional researchers, and finance students who receive our monthly forensic case studies on market crashes, liquidity dynamics, and historical recovery data.
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-xl p-6 text-center animate-in fade-in duration-300">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold text-base">Subscription Confirmed</h4>
            <p className="text-emerald-200/90 text-xs sm:text-sm mt-1 max-w-md mx-auto">
              We have enrolled <strong className="text-white">{email}</strong> in our {frequency === 'monthly' ? 'Monthly Historical Digest' : 'Quarterly Research Paper'}. Your first historical breakdown will arrive shortly.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                setEmail('');
              }}
              className="mt-4 text-xs text-slate-400 hover:text-white underline"
            >
              Subscribe another email address
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative grow">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@institution.edu or name@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder:text-slate-400 focus:outline-hidden focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-sm font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-6 py-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm transition-colors shrink-0 disabled:opacity-60 cursor-pointer shadow-md"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Frequency selection */}
            <div className="flex items-center justify-center gap-6 text-xs text-slate-300 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="freq"
                  checked={frequency === 'monthly'}
                  onChange={() => setFrequency('monthly')}
                  className="text-rose-600 focus:ring-rose-500"
                />
                <span>Monthly Digest (Case studies)</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="freq"
                  checked={frequency === 'quarterly'}
                  onChange={() => setFrequency('quarterly')}
                  className="text-rose-600 focus:ring-rose-500"
                />
                <span>Quarterly Research Paper (Comprehensive)</span>
              </label>
            </div>

            {status === 'error' && (
              <div className="flex items-center justify-center gap-2 text-rose-400 text-xs pt-1">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-400" />
              <span>Strictly educational research. No spam. One-click unsubscribe anytime.</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
