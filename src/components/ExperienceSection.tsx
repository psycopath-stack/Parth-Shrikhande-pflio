import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            03. Career Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Internships & Practical Experience
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Hands-on software development workflows, technical problem-solving, and deployment pipelines.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-0.5 before:bg-white/10">
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 group">
              {/* Timeline marker node */}
              <div className="absolute left-1.5 sm:left-3.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050507] border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-[#090d14] border border-white/10 hover:border-emerald-500/40 hover:bg-[#0c121c] transition-all space-y-4 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono uppercase text-emerald-400 tracking-wider">
                      {exp.type}
                    </div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      <span className="text-slate-600 font-light">·</span>
                      <span className="text-emerald-300">{exp.company}</span>
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="pt-3 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-500 uppercase mr-1">
                    Skills Applied:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/5 border border-white/5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
