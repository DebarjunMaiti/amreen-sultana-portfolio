import React from 'react';
import { Linkedin, ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 text-slate-400 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-xs font-mono font-bold text-white">AS</span>
              <span>Amreen Sultana</span>
            </div>
            <p className="text-xs text-slate-400">
              Trainer - Communications • Voice & Accent Specialist • Infinx
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-800 dark:bg-slate-900 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 border border-slate-700 dark:border-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 dark:border-slate-800 transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-800 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Amreen Sultana. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with React, TypeScript, Tailwind CSS & Gemini AI</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
