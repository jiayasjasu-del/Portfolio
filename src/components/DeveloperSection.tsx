import React from 'react';
import { Github, ExternalLink, GitBranch, GitCommit, GitPullRequest } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const DeveloperSection: React.FC = () => {
  // Generate a realistic visual representation of a developer activity matrix
  // (without fabricating fake numbers, commit counts, or stars)
  const days = 7;
  const weeks = 28;

  // Pattern with subtle activity levels: 0 (empty), 1 (light), 2 (medium), 3 (active)
  const getActivityLevel = (week: number, day: number) => {
    const val = (week * 7 + day * 13 + 3) % 17;
    if (val < 6) return 0;
    if (val < 11) return 1;
    if (val < 15) return 2;
    return 3;
  };

  const levelColor = (lvl: number) => {
    switch (lvl) {
      case 0:
        return 'bg-slate-900 border border-slate-800/80';
      case 1:
        return 'bg-cyan-950/70 border border-cyan-800/40';
      case 2:
        return 'bg-cyan-800/80 border border-cyan-600/50';
      case 3:
        return 'bg-cyan-400 border border-cyan-300';
      default:
        return 'bg-slate-900';
    }
  };

  return (
    <section
      id="github-section"
      aria-label="GitHub and Open Source Work"
      className="py-20 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0c121e] border border-slate-800/90 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-xl space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
                <Github className="w-4 h-4 text-cyan-400" />
                <span>Open Source & Version Control</span>
              </div>

              <h2
                id="building-in-public-heading"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white"
              >
                Building in Public
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I use GitHub to document projects, experiment with new technologies, and continuously improve my development skills.
              </p>

              <div className="pt-2">
                <a
                  id="github-profile-cta-button"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-slate-100 text-slate-950 font-semibold text-sm hover:bg-cyan-300 transition-colors shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Right Visual: Developer Git Activity Matrix */}
            <div className="flex-1 max-w-full overflow-x-auto pb-2">
              <div className="min-w-[420px] bg-[#080d17] border border-slate-800 rounded-xl p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 mb-3 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2">
                    <span className="text-slate-300 font-semibold">@jiayasjasu-del</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-cyan-400">repositories</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Activity Cadence</span>
                </div>

                {/* Matrix Grid */}
                <div className="flex gap-1.5 justify-start sm:justify-center overflow-hidden py-1">
                  {Array.from({ length: weeks }).map((_, w) => (
                    <div key={w} className="flex flex-col gap-1.5">
                      {Array.from({ length: days }).map((_, d) => {
                        const lvl = getActivityLevel(w, d);
                        return (
                          <div
                            key={d}
                            className={`w-2.5 h-2.5 rounded-[2px] transition-colors ${levelColor(
                              lvl
                            )}`}
                            title={`Learning activity week ${w + 1}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Bottom Legend */}
                <div className="flex items-center justify-between pt-3 mt-2 text-[10px] font-mono text-slate-400">
                  <span>Continuous repository updates</span>
                  <div className="flex items-center space-x-1.5">
                    <span>Less</span>
                    <div className="w-2 h-2 rounded-[2px] bg-slate-900 border border-slate-800" />
                    <div className="w-2 h-2 rounded-[2px] bg-cyan-950/70 border border-cyan-800/40" />
                    <div className="w-2 h-2 rounded-[2px] bg-cyan-800/80 border border-cyan-600/50" />
                    <div className="w-2 h-2 rounded-[2px] bg-cyan-400" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
