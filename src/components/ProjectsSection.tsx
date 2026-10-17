import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { Play, ArrowUpRight, Cpu, Radio, LineChart, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'ai' | 'ml'>('all');

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              02. Selected Works
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Software & AI Engineering Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Each project features an interactive live simulation modal, architectural diagrams, and deep technical breakdowns.
            </p>
          </div>

          {/* Interactive filter tabs (clean segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-[#0d121c] border border-white/10 rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'ai', label: 'Applied AI' },
              { id: 'ml', label: 'Data & ML' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  filter === tab.id
                    ? 'bg-emerald-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            const isLarge = idx === 0;

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer rounded-2xl bg-[#0a0d14] border border-white/10 p-6 sm:p-8 hover:border-emerald-500/50 hover:bg-[#0e131d] transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-emerald-500/10 ${
                  isLarge ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5'
                }`}
              >
                {/* Subtle background glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />

                <div className="space-y-4 relative z-10">
                  {/* Top line metadata */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-emerald-400 font-medium">
                      {project.categoryLabel}
                    </span>
                    <span className="text-slate-500">{project.date}</span>
                  </div>

                  {/* Title */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/5">
                    {project.highlights.map((h) => (
                      <div key={h.label} className="space-y-0.5">
                        <div className="text-[10px] font-mono text-slate-400 uppercase truncate">
                          {h.label}
                        </div>
                        <div className="text-xs font-mono font-bold text-white">
                          {h.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Bottom tech badges & action */}
                <div className="pt-6 relative z-10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-white/5 border border-white/5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 text-[11px] font-mono text-slate-400 bg-white/5 rounded">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-emerald-400 group-hover:underline flex items-center gap-1.5 shrink-0">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Launch Live Demo</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
