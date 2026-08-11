import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIRecruiterDrawer } from './components/AIRecruiterDrawer';
import { JobFitModal } from './components/JobFitModal';
import { ResumeModal } from './components/ResumeModal';
import { Bot, Sparkles } from 'lucide-react';

export default function App() {
  const [aiRecruiterOpen, setAiRecruiterOpen] = useState(false);
  const [jobFitOpen, setJobFitOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen dark bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenAIRecruiter={() => setAiRecruiterOpen(true)}
        onOpenJobFit={() => setJobFitOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenAIRecruiter={() => setAiRecruiterOpen(true)}
          onOpenJobFit={() => setJobFitOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
        />

        {/* Experience Section */}
        <Experience />

        {/* Technical Skills Matrix */}
        <Skills />

        {/* Projects & Research Case Studies */}
        <Projects />

        {/* Education, Certifications & Publications */}
        <EducationCertifications />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <AIRecruiterDrawer
        isOpen={aiRecruiterOpen}
        onClose={() => setAiRecruiterOpen(false)}
      />

      <JobFitModal
        isOpen={jobFitOpen}
        onClose={() => setJobFitOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Floating Action Badge - Ask AI Recruiter */}
      <button
        onClick={() => setAiRecruiterOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-2xl shadow-blue-600/50 hover:scale-105 transition-all duration-300 border border-blue-400/40 group"
        id="floating-btn-ai-recruiter"
      >
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
        </div>
        <span className="hidden sm:inline">Ask AI Recruiter</span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
      </button>

    </div>
  );
}
