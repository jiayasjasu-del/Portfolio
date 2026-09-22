import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Update URL hash smoothly without jump
      window.history.pushState(null, '', href);
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#090d16]/50 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            id="nav-brand-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center space-x-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 transition-colors">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                MUHAMMAD JIYAS M
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                CSE (AI & ML)
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  id={`nav-link-${link.href.substring(1)}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              id="nav-github-link"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md border border-slate-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="nav-linkedin-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md border border-slate-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="nav-connect-button"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              id="mobile-nav-github-shortcut"
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md border border-slate-800"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-dropdown-menu"
          className="lg:hidden bg-[#0a0e18] border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  id={`mobile-nav-link-${link.href.substring(1)}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-md border border-slate-800"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-md border border-slate-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 text-slate-300 hover:text-white bg-slate-900 rounded-md border border-slate-800"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 rounded-lg hover:bg-cyan-900/40"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
