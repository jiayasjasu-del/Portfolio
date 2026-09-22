import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-slate-800/80 bg-[#060910] py-12 text-slate-400 text-xs sm:text-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-bold text-white tracking-wider text-base">
              {personalInfo.name}
            </span>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md">
              {personalInfo.eyebrow} • Aspiring Data Engineer & AI Practitioner
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              id="footer-github"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white text-slate-300 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white text-slate-300 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email"
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white text-slate-300 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="ml-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-slate-400 gap-3">
          <p>© 2026 Muhammad Jiyas M. All rights reserved.</p>
          <div className="flex items-center space-x-4 font-mono text-[11px]">
            <span>Kerala, India</span>
            <span>•</span>
            <span className="text-cyan-400/80">Joy University (NIAT)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
