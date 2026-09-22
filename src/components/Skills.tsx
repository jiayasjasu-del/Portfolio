import React from 'react';
import { Terminal, Cpu, Sparkles, Network, Database, Wrench, Cloud } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming & Data': <Terminal className="w-4 h-4 text-cyan-400" />,
  'Machine Learning': <Cpu className="w-4 h-4 text-indigo-400" />,
  'AI & NLP': <Sparkles className="w-4 h-4 text-amber-400" />,
  'Deep Learning': <Network className="w-4 h-4 text-emerald-400" />,
  'Data Engineering': <Database className="w-4 h-4 text-sky-400" />,
  'Development & Tools': <Wrench className="w-4 h-4 text-rose-400" />,
  'Cloud & Deployment': <Cloud className="w-4 h-4 text-violet-400" />,
};

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-20 border-t border-slate-800/80 bg-[#070b12]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Core Competencies</span>
          </div>
          <h2
            id="skills-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Technical Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical competencies developed through hands-on project implementations, diploma training, and continuous experimentation.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.category}
              id={`skill-category-${idx}`}
              className="bg-[#0c121e] border border-slate-800/90 rounded-xl p-5 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2.5 pb-3 mb-4 border-b border-slate-800/80">
                  <div className="p-1.5 rounded-md bg-slate-900 border border-slate-800">
                    {categoryIcons[cat.category] || <Terminal className="w-4 h-4 text-cyan-400" />}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-200 tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill Chips / Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-slate-800/80 transition-all cursor-default select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-800/40 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{cat.skills.length} competencies</span>
                <span className="text-slate-400">• Practical</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
