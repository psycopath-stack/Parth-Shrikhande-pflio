import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#040608] py-12 text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-white font-bold text-sm tracking-tight font-sans">
            {personalInfo.name}
          </span>
          <span className="hidden sm:inline text-slate-700">/</span>
          <span>AIML Diploma Graduate (2022–2025)</span>
          <span className="hidden sm:inline text-slate-700">/</span>
          <span>Bhilai, Chhattisgarh</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-emerald-400 transition-colors"
          >
            {personalInfo.email}
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
