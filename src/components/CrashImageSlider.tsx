import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  TrendingDown,
  Calendar,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';

import img1929 from '../assets/images/wall_street_1929_1791947977625.jpg';
import img1987 from '../assets/images/black_monday_1987_1791948002332.jpg';
import img1992 from '../assets/images/harshad_mehta_1992_1791948063715.jpg';
import img2000 from '../assets/images/dot_com_bubble_2000_1791948123765.jpg';
import img2008 from '../assets/images/financial_crisis_2008_1791948029011.jpg';
import img2020 from '../assets/images/covid_market_crash_2020_1791948090410.jpg';

interface SlideItem {
  id: string;
  image: string;
  year: number;
  title: string;
  shortTitle: string;
  country: string;
  decline: string;
  dateRange: string;
  indexName: string;
  categoryLabel: string;
  tagline: string;
  routePath: string;
  keyStat: string;
}

const slides: SlideItem[] = [
  {
    id: '1929',
    image: img1929,
    year: 1929,
    title: 'The Wall Street Crash of 1929 & The Great Contraction',
    shortTitle: 'Wall Street Crash 1929',
    country: 'United States',
    decline: '-89.2%',
    dateRange: '1929 – 1932',
    indexName: 'Dow Jones (DJIA)',
    categoryLabel: 'Speculative Euphoria & Banking Collapse',
    tagline: 'When 90% margin speculation and unbacked credit ushered in the Great Depression.',
    routePath: '/crashes/1929-wall-street-crash',
    keyStat: '25.2 Years Nominal Breakeven'
  },
  {
    id: '1987',
    image: img1987,
    year: 1987,
    title: 'Black Monday 1987: Algorithmic Cascade',
    shortTitle: 'Black Monday 1987',
    country: 'United States & Global',
    decline: '-22.6% (1 Day)',
    dateRange: 'October 19, 1987',
    indexName: 'Dow Jones (DJIA)',
    categoryLabel: 'Automated Portfolio Insurance & Liquidity Void',
    tagline: 'The largest single-day drop in history, where automated computer programs crashed price discovery in hours.',
    routePath: '/crashes/1987-black-monday',
    keyStat: '508 Points Dropped in 6 Hours'
  },
  {
    id: '1992',
    image: img1992,
    year: 1992,
    title: '1992 Indian Stock Market Crisis: Harshad Mehta Scam',
    shortTitle: 'Harshad Mehta Crisis 1992',
    country: 'India',
    decline: '-54.4%',
    dateRange: 'April 1992 – April 1993',
    indexName: 'BSE Sensex',
    categoryLabel: 'Securities Fraud, Bank Manipulation & SEBI Evolution',
    tagline: 'How fraudulent Bank Receipts pumped the Sensex fourfold before transforming Indian market regulation forever.',
    routePath: '/crashes/india/1992-harshad-mehta-scam',
    keyStat: 'Catalyzed SEBI & NSE Creation'
  },
  {
    id: '2000',
    image: img2000,
    year: 2000,
    title: 'The Dot-Com Bubble Crash: Speculation at the Dawn of the Internet',
    shortTitle: 'Dot-Com Crash 2000',
    country: 'United States & Global',
    decline: '-77.9%',
    dateRange: '2000 – 2002',
    indexName: 'NASDAQ Composite',
    categoryLabel: 'Technological Euphoria & Eyeball Valuations',
    tagline: 'When zero-revenue startups claimed multi-billion valuations until the cost of capital returned to gravity.',
    routePath: '/crashes/2000-dot-com-bubble',
    keyStat: '15 Years to Regain 5,048 Peak'
  },
  {
    id: '2008',
    image: img2008,
    year: 2008,
    title: 'The Global Financial Crisis of 2008: Subprime Freeze',
    shortTitle: 'Global Financial Crisis 2008',
    country: 'Global',
    decline: '-56.8%',
    dateRange: '2007 – 2009',
    indexName: 'S&P 500 Index',
    categoryLabel: 'Shadow Banking Runs & Securitized Mortgage Debt',
    tagline: 'Lehman Brothers bankruptcy froze global credit, forcing trillions in central bank emergency bailouts.',
    routePath: '/crashes/2008-global-financial-crisis',
    keyStat: 'TED Spread Hit Record 464 bps'
  },
  {
    id: '2020',
    image: img2020,
    year: 2020,
    title: 'COVID-19 Market Crash of 2020: The Fastest Bear Market',
    shortTitle: 'COVID-19 Plunge 2020',
    country: 'Global',
    decline: '-33.9%',
    dateRange: 'Feb 19 – Mar 23, 2020',
    indexName: 'S&P 500 & Global',
    categoryLabel: 'Exogenous Biological Shock & Global Dash for Cash',
    tagline: 'The fastest 30% collapse in financial history, followed by unlimited QE and a historic 5-month V-shaped recovery.',
    routePath: '/crashes/2020-covid-market-crash',
    keyStat: 'Level 1 Breakers Tripped 4 Times'
  }
];

export const CrashImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, 6000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#070d1e] select-none group"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Visual Image Background with Crossfade Transition */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[580px] w-full overflow-hidden">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transitionProperty: 'opacity, transform' }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-[#070d1e]/60 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070d1e]/90 via-[#070d1e]/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Slide Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-12 z-10 pointer-events-none">
        
        {/* Top Badges Bar */}
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-rose-400 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Historical Archive Gallery</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-200 text-xs font-semibold">
              <MapPin className="w-3 h-3 inline mr-1 text-slate-400" />
              {currentSlide.country}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-sm sm:text-base font-bold bg-rose-600/90 backdrop-blur-md text-white px-3 py-1 rounded-lg border border-rose-400 shadow-md">
              <TrendingDown className="w-4 h-4 inline mr-1" />
              {currentSlide.decline}
            </span>
          </div>
        </div>

        {/* Bottom Slide Info & Call to Action */}
        <div className="max-w-3xl space-y-3 pointer-events-auto">
          <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
            <span className="px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-800 text-blue-300 font-bold">
              {currentSlide.year}
            </span>
            <span>•</span>
            <span className="text-amber-300 font-semibold">{currentSlide.categoryLabel}</span>
            <span>•</span>
            <span className="text-slate-400">{currentSlide.indexName}</span>
          </div>

          <h2 className="font-serif-title text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight drop-shadow-md">
            {currentSlide.title}
          </h2>

          <p className="text-slate-200 text-xs sm:text-base leading-relaxed drop-shadow-sm max-w-2xl font-light">
            {currentSlide.tagline}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to={currentSlide.routePath}
              className="px-6 py-2.5 sm:py-3 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Complete Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 backdrop-blur-md border border-slate-700 text-slate-300 text-xs font-mono">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentSlide.keyStat}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation Controls: Arrows, Progress, & Thumbnail Indicators */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 flex items-center gap-2">
        {/* Play / Pause Toggle */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          className="p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous crash image"
          className="p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next crash image"
          className="p-2 sm:p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Thumbnails & Dot Indicators */}
      <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-10 z-20 flex items-center gap-1.5 sm:gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Jump to ${s.shortTitle}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentIndex
                ? 'w-8 sm:w-10 h-2 bg-rose-500 shadow-sm'
                : 'w-2 h-2 bg-white/50 hover:bg-white/90'
            }`}
          />
        ))}
      </div>

    </div>
  );
};
