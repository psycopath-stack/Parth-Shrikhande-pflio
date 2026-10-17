import React, { useEffect } from 'react';
import { personalInfo, educationData, experienceData, projectsData, certificationsData } from '../data/portfolioData';
import { X, Download, Mail, Phone, MapPin, CheckCircle2, GraduationCap, Briefcase, Award, Code2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#090d14] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d121c]">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-mono text-sm font-bold">[CURRICULUM VITAE]</span>
            <span className="text-white text-sm font-semibold">Parth Shrikhande</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#090d14] text-slate-200 font-sans">
          {/* Header Block */}
          <div className="text-center space-y-2 border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>{personalInfo.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-emerald-400" />
                <span>{personalInfo.email}</span>
              </span>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Professional Summary</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* EDUCATION */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white">
                <span>{educationData.degree}</span>
                <span className="text-xs font-mono text-slate-400 font-normal">{educationData.period}</span>
              </div>
              <div className="text-xs text-emerald-300 font-medium">
                {educationData.institution}
              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </h2>
            <div className="space-y-3">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white">
                    <span>{exp.role} – {exp.company}</span>
                    <span className="text-xs font-mono text-slate-400 font-normal">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECTS */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Key Projects</span>
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold text-white">
                    <span>{proj.title}</span>
                    <span className="text-xs font-mono text-emerald-400 font-normal">
                      ({proj.techStack.join(', ')})
                    </span>
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {proj.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* TECHNICAL SKILLS */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Technical Skills</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 font-mono leading-relaxed">
              Python • JavaScript • React.js • Node.js • MongoDB • MySQL • Machine Learning • REST APIs • Git & GitHub • AWS Basics
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications</span>
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1 text-xs text-slate-300">
              {certificationsData.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span className="font-semibold text-white">{c.issuer}</span>
                  <span className="text-slate-400">– {c.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
