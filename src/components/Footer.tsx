import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, ShieldAlert, BookOpen, ExternalLink, Mail, Award, CheckCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1329] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800 text-sm">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="font-brand text-xl font-bold tracking-tight text-white">
                MARKET CRASH ARCHIVE
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              An authoritative historical research and editorial archive documenting major global and Indian stock market crashes, their causes, macroeconomic consequences, recovery cycles, and timeless investor lessons.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Grounded in Federal Reserve, RBI, SEC & SEBI archives
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Sourced quantitative peak-to-trough methodologies
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" /> Non-commercial academic research initiative
              </p>
            </div>
          </div>

          {/* Major Global Crashes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Global Crashes
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/crashes/1929-wall-street-crash" className="hover:text-white transition-colors">
                  1929 Wall Street Crash (-89.2%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/1987-black-monday" className="hover:text-white transition-colors">
                  1987 Black Monday (-35.1%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/1997-asian-financial-crisis" className="hover:text-white transition-colors">
                  1997 Asian Financial Crisis (-85.4%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2000-dot-com-bubble" className="hover:text-white transition-colors">
                  2000 Dot-Com Bubble (-77.9%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2008-global-financial-crisis" className="hover:text-white transition-colors">
                  2008 Global Financial Crisis (-56.8%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2010-flash-crash" className="hover:text-white transition-colors">
                  2010 Flash Crash (Intraday -9.2%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2015-china-stock-market-crash" className="hover:text-white transition-colors">
                  2015 China Stock Crash (-43.3%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2018-market-selloff" className="hover:text-white transition-colors">
                  2018 Market Sell-Off (-19.8%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2020-covid-market-crash" className="hover:text-white transition-colors">
                  2020 COVID-19 Crash (-33.9%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/2022-bear-market" className="hover:text-white transition-colors">
                  2022 Global Bear Market (-25.4%)
                </Link>
              </li>
            </ul>
          </div>

          {/* Indian Market Crashes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Indian Market Archive
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/crashes/india" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                  Indian Market Hub →
                </Link>
              </li>
              <li>
                <Link to="/crashes/india/1992-harshad-mehta-scam" className="hover:text-white transition-colors">
                  1992 Harshad Mehta Scam (-54.4%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/india/2008-sensex-crash" className="hover:text-white transition-colors">
                  2008 Sensex Crash (-63.7%)
                </Link>
              </li>
              <li>
                <Link to="/crashes/india/2020-sensex-crash" className="hover:text-white transition-colors">
                  2020 COVID Sensex Crash (-38.1%)
                </Link>
              </li>
              <li className="pt-2 text-slate-500">Historical Context:</li>
              <li>
                <Link to="/crashes/india#ketan-parekh" className="hover:text-slate-300 transition-colors">
                  2001 Ketan Parekh & K-10 Bust
                </Link>
              </li>
              <li>
                <Link to="/crashes/india#demonetisation" className="hover:text-slate-300 transition-colors">
                  2016 Demonetisation Reaction
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Institutional */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Research & Institutional
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/timeline" className="hover:text-white transition-colors">Historical Timeline</Link>
              </li>
              <li>
                <Link to="/compare" className="hover:text-white transition-colors">Compare Crashes Tool</Link>
              </li>
              <li>
                <Link to="/causes" className="hover:text-white transition-colors">Root Causes of Crashes</Link>
              </li>
              <li>
                <Link to="/recovery" className="hover:text-white transition-colors">Recovery Period Studies</Link>
              </li>
              <li>
                <Link to="/lessons" className="hover:text-white transition-colors">Timeless Investor Lessons</Link>
              </li>
              <li className="pt-1">
                <Link to="/seo-report" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1">
                  <span>★ Academic SEO Report</span>
                </Link>
              </li>
              <li className="pt-2 text-slate-500">Editorial & Legal:</li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About the Project</Link>
              </li>
              <li>
                <Link to="/methodology" className="hover:text-white transition-colors">Research Methodology</Link>
              </li>
              <li>
                <Link to="/sources" className="hover:text-white transition-colors">Sources & References</Link>
              </li>
              <li>
                <Link to="/glossary" className="hover:text-white transition-colors">Financial Glossary</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Corrections</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-rose-400 hover:text-rose-300 transition-colors">Financial Disclaimer</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Historical & Educational Research Disclaimer:</strong> The Market Crash Archive is an independent historical, academic, and journalistic research publication. Content published on this website is strictly for educational, historical analysis, and archival purposes and does not constitute financial, investment, legal, or tax advice. Market indexes, historical percentages, and drawdown chronologies are derived from official public records and regulatory filings. Past performance and historical market recovery patterns are no guarantee of future results. Always consult a licensed financial advisor before making investment decisions.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Market Crash Archive. Built for financial historians, students, and disciplined investors worldwide.</p>
          <div className="flex items-center space-x-4">
            <Link to="/disclaimer" className="hover:text-slate-400">Disclaimer</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-slate-400">Privacy</Link>
            <span>•</span>
            <Link to="/methodology" className="hover:text-slate-400">Methodology</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-400">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
