import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  ArrowRight,
  TrendingDown,
  MapPin,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { crashesData } from '../data/crashes';

export const CrashImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides = crashesData.map(c => ({
    id: c.id,
    image: c.featuredImage,
    imageAlt: c.imageAlt,
    imageTitle: c.imageTitle,
    imageCaption: c.imageCaption,
    imageDescription: c.imageDescription,
    year: c.year,
    title: c.title,
    shortTitle: c.shortTitle,
    country: c.country,
    decline: `${c.declinePercentage}%`,
    dateRange: c.dateRange,
    indexName: c.indexName,
    categoryLabel: c.categoryLabel,
    tagline: c.subtitle,
    routePath: c.routePath,
    keyStat: typeof c.recoveryMonths === 'number' ? `${c.recoveryMonths} Mos Breakeven` : c.recoveryMonths
  }));

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
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
              alt={slide.imageAlt}
              title={slide.imageTitle}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
              loading={idx === 0 ? 'eager' : 'lazy'}
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

          {/* Visual Caption Tag for Historical Context */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-slate-700/80 text-slate-300 text-xs font-mono">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span className="line-clamp-1">{currentSlide.imageCaption}</span>
          </div>

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
            aria-label={`Jump to slide ${idx + 1}: ${s.shortTitle}`}
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
