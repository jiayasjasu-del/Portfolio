import React from 'react';
import { Award, CheckCircle, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section
      id="certifications"
      aria-label="Certifications & Learning"
      className="py-20 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Verified Knowledge</span>
          </div>
          <h2
            id="certifications-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Certifications & Learning
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Coursework, certifications, and industry simulations completed to reinforce practical data science and machine learning skills.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              id={`cert-card-${idx}`}
              className="group bg-[#0c121e] border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/20">
                    {cert.provider}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {cert.year}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">
                  {cert.tag}
                </span>
                <span className="inline-flex items-center space-x-1 text-slate-400 text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Credential Completed</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
