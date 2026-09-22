import React, { useState } from 'react';
import { ExternalLink, Github, CheckCircle2, Clock, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { projects, personalInfo } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Completed' | 'In Progress'>('All');

  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === 'All') return true;
    return project.status === selectedFilter;
  });

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="py-20 border-t border-slate-800/80 bg-[#090d16]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Technical Builds</span>
            </div>
            <h2
              id="projects-section-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
            >
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Concrete implementations built with Python, machine learning models, Streamlit, and NLP pipelines.
            </p>
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-1.5 p-1 bg-[#0c121e] border border-slate-800 rounded-lg self-start md:self-auto">
            {(['All', 'Completed', 'In Progress'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  selectedFilter === filter
                    ? 'bg-slate-800 text-cyan-300 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const isLive = project.badge === 'Live';
            const isInProgress = project.status === 'In Progress';

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col justify-between bg-[#0c121e] border border-slate-800/90 hover:border-cyan-500/40 rounded-xl p-6 sm:p-7 transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Top Metadata & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-slate-400">
                      {project.year}
                    </span>

                    <div className="flex items-center space-x-2">
                      {isLive && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Live</span>
                        </span>
                      )}
                      {isInProgress ? (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-950/80 text-amber-300 border border-amber-500/30">
                          <Clock className="w-3 h-3 text-amber-300" />
                          <span>In Progress</span>
                        </span>
                      ) : !isLive && (
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-900 text-slate-300 border border-slate-700">
                          <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                          <span>Completed</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Capabilities / Features */}
                  <div className="mb-6 bg-slate-900/60 rounded-lg p-3.5 border border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-medium">
                      Core Features & Capabilities
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300">
                      {project.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-cyan-400 mt-0.5 text-[10px]">▹</span>
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions Bar (Honest representation: no fake links) */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center space-x-1.5 text-slate-400 font-mono py-1 px-2 rounded bg-slate-900 border border-slate-800/80">
                        <Github className="w-3.5 h-3.5 text-slate-400" />
                        <span>Code coming soon</span>
                      </span>
                    )}

                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    ) : null}
                  </div>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-200 transition-colors font-mono text-[11px] flex items-center gap-1"
                    title="View developer GitHub profile"
                  >
                    <span>Developer GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
