import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { NetworkVisual } from './NetworkVisual';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden"
    >
      {/* Subtle radial ambient highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow badge */}
            <div
              id="hero-eyebrow-badge"
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-cyan-300 text-xs font-mono tracking-wide shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1
                id="hero-main-name"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans"
              >
                {personalInfo.name}
              </h1>
              <h2
                id="hero-secondary-title"
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 tracking-tight"
              >
                {personalInfo.role}
              </h2>
            </div>

            {/* Short Description */}
            <p
              id="hero-short-description"
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              {personalInfo.shortDescription}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-cta-projects"
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-sm hover:bg-cyan-400 active:scale-[0.98] transition-all shadow-md shadow-cyan-950/40"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-cta-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/80 transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                id="hero-cta-connect"
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-slate-900/60 text-slate-300 hover:text-cyan-300 font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Direct Contact Metadata Chips */}
            <div
              id="hero-contact-metadata-chips"
              className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800/80 w-full"
            >
              <div className="inline-flex items-center space-x-1.5 text-xs text-slate-400 bg-slate-900/70 border border-slate-800 px-2.5 py-1 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-cyan-300 bg-slate-900/70 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-md transition-colors"
                title="Send email"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono">{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-cyan-300 bg-slate-900/70 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-md transition-colors"
                title="Call direct"
              >
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-mono">{personalInfo.phone}</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-cyan-300 bg-slate-900/70 border border-slate-800 hover:border-slate-700 px-2.5 py-1 rounded-md transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Technical Visual */}
          <div className="lg:col-span-5 w-full">
            <NetworkVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
