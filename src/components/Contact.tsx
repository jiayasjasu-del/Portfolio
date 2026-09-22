import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFrontendSend = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${senderName || 'Developer/Collaborator'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello Muhammad Jiyas,\n\n${message}\n\nBest regards,\n${senderName}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information"
      className="py-20 border-t border-slate-800/80 bg-[#070b12]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Get in Touch</span>
          </div>
          <h2
            id="contact-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white"
          >
            Let's Build Something
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Have an idea, project, collaboration opportunity, or simply want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-6 space-y-4">
            {/* Email Card */}
            <div className="bg-[#0c121e] border border-slate-800 rounded-xl p-5 flex items-center justify-between group hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0c121e] border border-slate-800 rounded-xl p-5 flex items-center justify-between group hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-medium text-white hover:text-cyan-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                title="Copy phone to clipboard"
                aria-label="Copy phone number"
              >
                {copiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-[#0c121e] border border-slate-800 rounded-xl p-5 flex items-center justify-between group hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    LinkedIn Network
                  </span>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    linkedin.com/in/muhammad-jiyas-m
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                aria-label="Visit LinkedIn"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="bg-[#0c121e] border border-slate-800 rounded-xl p-5 flex items-center justify-between group hover:border-slate-700 transition-colors">
              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0 pr-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    GitHub Code Repository
                  </span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-white hover:text-cyan-300 transition-colors truncate block"
                  >
                    github.com/jiayasjasu-del
                  </a>
                </div>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                aria-label="Visit GitHub"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Action Buttons Row */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              <a
                id="contact-btn-email"
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm hover:bg-cyan-400 transition-colors shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                id="contact-btn-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-xs sm:text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                id="contact-btn-github"
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-medium text-xs sm:text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Frontend Message Composer */}
          <div className="lg:col-span-6 bg-[#0c121e] border border-slate-800 rounded-xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-medium flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Direct Email Launcher
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  Prepares client mailto
                </span>
              </div>

              <form onSubmit={handleFrontendSend} className="space-y-4">
                <div>
                  <label htmlFor="contact-sender-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 placeholder:text-slate-400 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project inquiry, collaboration, or question"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 placeholder:text-slate-400 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write a brief note..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-slate-100 placeholder:text-slate-400 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-send-button"
                  type="submit"
                  className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Open in Mail Client</span>
                </button>
              </form>
            </div>

            <p className="text-[11px] font-mono text-slate-400 text-center pt-4 border-t border-slate-800/60 mt-4">
              Direct connection to jiayasjasu@gmail.com • No automated third-party tracking
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
