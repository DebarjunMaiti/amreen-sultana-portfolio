import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  FileText, 
  Bot, 
  Menu, 
  X, 
  Linkedin, 
  Briefcase,
  Layers,
  GraduationCap,
  Mail,
  UserCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenAIRecruiter: () => void;
  onOpenJobFit: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAIRecruiter,
  onOpenJobFit,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: UserCheck },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Layers },
    { name: 'Projects', href: '#projects', icon: Sparkles },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md shadow-slate-900/5 dark:shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, '#about')}
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-[2px] shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <span className="text-white font-bold tracking-tight text-base font-mono">AS</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 dark:text-slate-100 font-semibold tracking-tight text-base font-sans group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Amreen Sultana
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-mono font-medium flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                Communications Trainer @ Infinx
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/50 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/50 backdrop-blur-sm" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/80 dark:hover:bg-slate-700/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5" id="nav-actions">
            
            {/* AI Recruiter Assistant button */}
            <button
              onClick={onOpenAIRecruiter}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/40 hover:border-blue-400 hover:bg-blue-100 dark:hover:bg-blue-600/40 transition-all duration-200 shadow-sm"
              id="btn-nav-ai-recruiter"
            >
              <Bot className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>Ask AI Recruiter</span>
            </button>

            {/* Job Match Evaluator */}
            <button
              onClick={onOpenJobFit}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-all duration-200"
              id="btn-nav-job-match"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Match Job</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-200 transform hover:-translate-y-0.5"
              id="btn-nav-resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-white"
                >
                  <Icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAIRecruiter(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600/20 text-blue-300 border border-blue-500/40"
            >
              <Bot className="w-4 h-4 text-blue-400" />
              <span>Ask AI Recruiter Assistant</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJobFit(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-200 border border-slate-700"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Evaluate Job Match Score</span>
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
