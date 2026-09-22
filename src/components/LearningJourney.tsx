import React from 'react';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';
import { currentlyExploring } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  return (
    <section
      id="exploring"
      aria-label="Currently Exploring"
      className="py-16 border-t border-slate-800/80 bg-[#070b12]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c121e] border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Continuous Growth</span>
            </div>

            <h2
              id="exploring-heading"
              className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3"
            >
              Currently Exploring
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              As a first-year student and builder, I spend active hours each week reading research papers, benchmarking models, experimenting with neural architectures, and deploying end-to-end data systems.
            </p>

            {/* Exploring Tags Grid */}
            <div className="flex flex-wrap gap-2.5">
              {currentlyExploring.map((topic, i) => (
                <div
                  key={i}
                  className="group flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-slate-800/80 transition-all select-none text-xs sm:text-sm font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
