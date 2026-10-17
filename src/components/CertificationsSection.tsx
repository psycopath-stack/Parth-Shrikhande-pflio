import React, { useState } from 'react';
import { certificationsData } from '../data/portfolioData';
import { Certification } from '../types/portfolio';
import { Award, ShieldCheck, CheckCircle2, ExternalLink, X, FileCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-24 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            05. Credentials & Certifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry Accreditations & Rigorous Programs
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Certified technical competencies in full-stack engineering, cloud infrastructure, and backend security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#090d14] border border-white/10 hover:border-emerald-500/40 hover:bg-[#0c121c] transition-all duration-300 flex flex-col justify-between space-y-5 shadow-lg group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="space-y-4">
                {/* Header with badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    {cert.credentialBadge}
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                    {cert.issuer}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {cert.highlights.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                <span>View Verification Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verification Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-[#0a0e16] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="text-xs font-mono text-emerald-400 uppercase">
                  {selectedCert.issuer}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-xs text-slate-300 leading-relaxed">
              {selectedCert.verificationNote}
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400 font-semibold">
                Competencies Mastered
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skillsCovered.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors font-semibold"
              >
                Close Certificate View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
