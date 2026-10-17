import React from 'react';
import { NeuralCanvas } from './NeuralCanvas';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Sparkles, FolderCode, Mail, FileText, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onViewResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onContactClick,
  onViewResume,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-emerald-950/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed clean metadata kicker (no pills) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <span>{personalInfo.title}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Bhilai, Chhattisgarh</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">Rungta College (2022–2025)</span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">Scalable AI</span> & Modern Digital Systems
            </h1>

            {/* Summary description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.summary}
            </p>

            {/* Availability highlight & current focus */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_#34d399]" />
              <span className="font-medium text-slate-300">Available for Full-Time & Internship Roles in Software Development, Web Development & AI/ML</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onExploreProjects}
                className="px-6 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center gap-2"
              >
                <FolderCode className="w-4 h-4" />
                <span>Explore Featured Works</span>
              </button>

              <button
                onClick={onViewResume}
                className="px-5 py-3 text-sm font-medium text-slate-200 bg-[#0f131a] border border-white/10 rounded-lg hover:bg-[#161c26] hover:border-emerald-500/40 transition-all duration-200 active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Resume Highlights</span>
              </button>

              <button
                onClick={onContactClick}
                className="px-5 py-3 text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Interactive Centerpiece */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-white/10 bg-[#0a0d13]/80 p-2 overflow-hidden shadow-2xl shadow-black/80">
              {/* Corner tech accents */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-emerald-400/70 uppercase tracking-widest pointer-events-none">
                WebGL 3D Engine
              </div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500 pointer-events-none">
                Neural Synapse Mesh
              </div>

              {/* 3D Canvas */}
              <NeuralCanvas className="h-[380px] sm:h-[440px] w-full" />
            </div>
          </div>
        </div>

        {/* Full-width KPI Summary Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
              2022–2025
            </div>
            <div className="text-xs text-slate-400">
              AIML Diploma · Rungta College
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">
              3+ Systems
            </div>
            <div className="text-xs text-slate-400">
              AI Summarizer, WiFi Sensing, Churn ML
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
              2 Internships
            </div>
            <div className="text-xs text-slate-400">
              BS Digital Technology & Techonet
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-emerald-400 tabular-nums">
              3 Credentials
            </div>
            <div className="text-xs text-slate-400">
              AWS, JPMorgan Chase & Goldman Sachs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
