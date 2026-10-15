import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, TrendingDown, BookOpen, Clock, GitCompare, Landmark, Lightbulb, Compass, Award } from 'lucide-react';
import { SearchModal } from './SearchModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Crashes', path: '/crashes' },
    { label: 'Timeline', path: '/timeline' },
    { label: 'Compare', path: '/compare' },
    { label: 'India', path: '/crashes/india' },
    { label: 'Causes', path: '/causes' },
    { label: 'Recovery', path: '/recovery' },
    { label: 'Lessons', path: '/lessons' },
    { label: 'SEO Report', path: '/seo-report' },
    { label: 'About', path: '/about' }
  ];

  return (
    <>
      {/* Top Research Header Ticker */}
      <aside aria-label="Historical market statistics ticker" className="bg-[#0b1329] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-2 text-[11px] font-medium tracking-wide">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
            <span className="text-slate-400 uppercase tracking-widest font-semibold text-[10px]">Historical Archive:</span>
            <span className="hidden sm:inline text-slate-200">1929: <span className="text-rose-400 font-mono-numbers">-89.2%</span></span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-200">1987: <span className="text-rose-400 font-mono-numbers">-22.6% (1 Day)</span></span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-200">2000: <span className="text-rose-400 font-mono-numbers">-77.9% (Tech)</span></span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="text-slate-200">2008: <span className="text-rose-400 font-mono-numbers">-56.8%</span></span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="text-slate-200">2020: <span className="text-emerald-400 font-mono-numbers">5 Mo. Rebound</span></span>
            <span className="hidden xl:inline text-slate-500">|</span>
            <span className="hidden xl:inline text-slate-200">Sensex 1992: <span className="text-rose-400 font-mono-numbers">-54.4%</span></span>
          </div>

          <div className="flex items-center space-x-3 text-[11px] text-slate-400">
            <Link to="/seo-report" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-400" />
              <span>SEO Report</span>
            </Link>
            <span className="text-slate-600">•</span>
            <Link to="/methodology" className="hover:text-slate-200 transition-colors">Methodology</Link>
            <span className="text-slate-600">•</span>
            <Link to="/sources" className="hover:text-slate-200 transition-colors">Sources</Link>
            <span className="text-slate-600">•</span>
            <Link to="/glossary" className="hover:text-slate-200 transition-colors">Glossary</Link>
          </div>
        </div>
      </aside>

      {/* Main Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-[#0b1329] text-white flex items-center justify-center shadow-md group-hover:bg-slate-800 transition-colors">
                <TrendingDown className="w-5 h-5 text-rose-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-brand text-xl font-bold tracking-tight text-[#0b1329] group-hover:text-blue-950 transition-colors leading-tight">
                  MARKET CRASH ARCHIVE
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 uppercase font-semibold">
                  Every Crash Has a Story • Every Cycle Has a Lesson
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-slate-700">
              {navLinks.map(link => {
                const isActive = link.path === '/' 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(link.path);
                
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={`px-3 py-2 rounded-md transition-all text-xs xl:text-sm font-semibold tracking-wide ${
                      isActive
                        ? 'text-blue-900 bg-slate-100 font-bold border-b-2 border-blue-900'
                        : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Right Action: Search Trigger & Mobile Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-all text-xs font-medium cursor-pointer"
                title="Search archive (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Search Archive</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono bg-white border border-slate-200 rounded text-slate-400">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="pt-2 pb-3 border-b border-slate-100 mb-2">
              <p className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Historical Archive</p>
            </div>
            {navLinks.map(link => {
              const isActive = link.path === '/' 
                ? location.pathname === '/' 
                : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 border-l-4 border-blue-900 pl-4'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs font-medium text-slate-600">
              <Link
                to="/methodology"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-slate-50 hover:bg-slate-100 text-center"
              >
                Methodology
              </Link>
              <Link
                to="/sources"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-slate-50 hover:bg-slate-100 text-center"
              >
                Sources & References
              </Link>
              <Link
                to="/glossary"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-slate-50 hover:bg-slate-100 text-center"
              >
                Financial Glossary
              </Link>
              <Link
                to="/disclaimer"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded bg-slate-50 hover:bg-slate-100 text-center"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};
