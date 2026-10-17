import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Terminal, Database, BrainCircuit, Cloud, Cpu } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
              04. Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Core Skills & Engineering Toolkit
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Languages, frameworks, machine learning tooling, and backend databases applied in production systems.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#0d121c] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-400 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-2xl bg-[#090d14] border border-white/10 hover:border-emerald-500/30 transition-all space-y-4 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{group.title}</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-500">
                    {group.skills.length} Competencies
                  </span>
                </div>

                <div className="space-y-3.5">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <span className="font-mono text-emerald-400 text-[11px]">{skill.level}%</span>
                      </div>

                      {/* Level Bar */}
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <div className="text-[10px] text-slate-400 font-mono">
                        {skill.note}
                      </div>
                    </div>
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
