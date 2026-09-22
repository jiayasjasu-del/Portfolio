import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Education History"
      className="py-20 border-t border-slate-800/80 bg-[#070b12]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Academic Journey</span>
          </div>
          <h2
            id="education-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Formal foundations in computer science, machine learning theory, data engineering systems, and mathematics.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
          {educationList.map((item, idx) => (
            <div
              key={idx}
              id={`education-item-${idx}`}
              className={`relative group ${item.current ? 'mb-4' : ''}`}
            >
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.current
                    ? 'bg-cyan-500 border-cyan-300 ring-4 ring-cyan-500/20 shadow-md shadow-cyan-500/50'
                    : 'bg-slate-900 border-slate-600 group-hover:border-cyan-400'
                }`}
              >
                {item.current && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
              </div>

              {/* Education Card Content */}
              <div
                className={`rounded-xl p-6 transition-all duration-200 border ${
                  item.current
                    ? 'bg-[#0e1626] border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                    : 'bg-[#0c121e] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
                        item.current
                          ? 'bg-cyan-950 text-cyan-300 border-cyan-500/40 font-semibold'
                          : 'bg-slate-900 text-slate-300 border-slate-700'
                      }`}
                    >
                      {item.status}
                    </span>
                    {item.current && (
                      <span className="text-[11px] font-mono text-cyan-400 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        First-Year B.Tech
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <h3
                  className={`text-lg sm:text-xl font-bold tracking-tight mb-1 ${
                    item.current ? 'text-white' : 'text-slate-100'
                  }`}
                >
                  {item.degree}
                </h3>

                <h4 className="text-sm font-semibold text-cyan-300/90 mb-3">
                  {item.institution}
                </h4>

                {item.focus && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-3xl">
                    {item.focus}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
