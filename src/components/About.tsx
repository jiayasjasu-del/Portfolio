import React from 'react';
import { Cpu, Database, Sparkles, Code2 } from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Database: Database,
  Sparkles: Sparkles,
  Code2: Code2,
};

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Muhammad Jiyas M"
      className="py-20 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Background</span>
          </div>
          <h2
            id="about-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            About Me
          </h2>
        </div>

        {/* Narrative & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-8 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p id="about-intro-paragraph" className="text-slate-200 font-medium">
              {personalInfo.aboutText1}
            </p>
            <p id="about-interests-paragraph" className="text-slate-400">
              {personalInfo.aboutText2}
            </p>
            <p id="about-goal-paragraph" className="text-slate-300 font-normal border-l-2 border-cyan-500/60 pl-4 py-0.5 italic text-sm sm:text-base">
              "{personalInfo.aboutText3}"
            </p>
          </div>

          {/* Quick Context Card */}
          <div className="lg:col-span-4 bg-[#0d1422] border border-slate-800 rounded-xl p-6 flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                Student Profile
              </span>
              <h3 className="text-lg font-semibold text-white">Joy University (NIAT)</h3>
              <p className="text-xs text-slate-400 mt-1">
                B.Tech Computer Science & Engineering with specialization in AI & Machine Learning.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs font-mono">
              <div className="flex justify-between items-center text-slate-400">
                <span>Location:</span>
                <span className="text-slate-200">Kerala, India</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Approach:</span>
                <span className="text-cyan-300 font-medium">Project-First Builder</span>
              </div>
              <div className="flex justify-between items-center text-slate-400">
                <span>Current Stage:</span>
                <span className="text-emerald-400">First-Year Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutHighlights.map((highlight) => {
            const Icon = iconMap[highlight.iconName];
            return (
              <div
                key={highlight.id}
                id={`about-highlight-${highlight.id}`}
                className="group p-5 rounded-xl bg-[#0c121e] border border-slate-800/90 hover:border-cyan-500/40 hover:bg-[#0f1728] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/70 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 mb-4 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                    {highlight.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
