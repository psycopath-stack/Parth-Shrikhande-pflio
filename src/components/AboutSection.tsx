import React from 'react';
import { educationData, personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Mail, Phone, Compass, Terminal, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            01. Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Engineering Philosophy
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Summary & Bio */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0a0e14] border border-white/10 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Engineering at the Intersection of AI, ML & Full-Stack Systems
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {personalInfo.bio}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                Whether deploying responsive web applications with React.js and Tailwind CSS, extracting Channel State Information (CSI) for camera-free sensing in Python, or tuning predictive customer retention algorithms, I approach software challenges with rigorous problem-solving and an appetite for scalable architecture.
              </p>

              {/* Contact and Location details */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>React · Python · Node · AWS</span>
                </div>
              </div>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-semibold text-emerald-400">Scalable Code</div>
                <p className="text-xs text-slate-400">
                  Clean modular components with predictable state flow and deterministic APIs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-semibold text-emerald-400">Applied Intelligence</div>
                <p className="text-xs text-slate-400">
                  Grounding machine learning theory in pragmatic, low-latency production applications.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="text-xs font-semibold text-emerald-400">Fast Execution</div>
                <p className="text-xs text-slate-400">
                  Proven track record of turning business requirements into operational software.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Education Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0d121c] border border-white/10 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-emerald-400">Education</div>
                    <div className="text-sm font-bold text-white">Academic Foundation</div>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400">{educationData.period}</span>
              </div>

              <div className="space-y-1">
                <h4 className="text-base font-semibold text-white">
                  {educationData.degree}
                </h4>
                <div className="text-xs font-medium text-emerald-300">
                  {educationData.institution}
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  {educationData.location}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {educationData.description}
              </p>

              {/* Coursework list */}
              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Core Focus Areas
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  {educationData.coursework.map((course) => (
                    <div key={course} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
