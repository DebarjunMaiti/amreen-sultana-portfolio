import React from 'react';
import { 
  Bot, 
  Sparkles, 
  Linkedin, 
  MapPin, 
  Building2, 
  GraduationCap, 
  ArrowRight, 
  Download,
  ShieldCheck,
  Zap,
  Server,
  Layers,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenAIRecruiter: () => void;
  onOpenJobFit: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAIRecruiter,
  onOpenJobFit,
  onOpenResume
}) => {
  return (
    <section 
      id="about" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Grid Header Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Hero Bento Card (Large) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 sm:p-8 sm:p-10 shadow-xl dark:shadow-2xl flex flex-col justify-between space-y-6 bento-card relative overflow-hidden group">
            
            <div className="space-y-6">
              {/* Status Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
                  Available for Corporate & L&D Training Roles
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80">
                  <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  Infinx
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                  BPharm - Shadan Inst.
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Empowering Professionals to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 dark:from-blue-400 dark:via-indigo-300 dark:to-sky-300">Speak with Confidence</span> & Clarity.
                </h1>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                  Hi, I'm <strong className="text-slate-900 dark:text-white font-semibold">Amreen Sultana</strong> — Communications Trainer at <span className="text-blue-600 dark:text-blue-300 font-medium">Infinx</span> & former <span className="text-blue-600 dark:text-blue-300 font-medium">Tech Mahindra</span> L&D Facilitator. Experienced Voice & Accent Specialist dedicated to speech articulation, MTI reduction, and corporate training.
                </p>
              </div>

              {/* Quick Tech Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2">
                {["Voice & Accent Training", "Accent Neutralization", "MTI Reduction", "Pronunciation & Intonation", "Corporate Communications", "L&D Behavioural Training"].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Action Bar inside Bento Box */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAIRecruiter}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 transform hover:-translate-y-0.5"
                id="hero-btn-ai-chat"
              >
                <Bot className="w-4 h-4 text-sky-200" />
                <span>Ask AI About Amreen</span>
                <ArrowRight className="w-4 h-4 text-blue-200" />
              </button>

              <button
                onClick={onOpenJobFit}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 transition-all duration-200"
                id="hero-btn-job-fit"
              >
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Check Job Fit</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-2xl font-medium text-xs sm:text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 transition-all duration-200"
                id="hero-btn-resume"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Resume PDF</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-2xl bg-slate-100 hover:bg-blue-50 dark:bg-slate-800/80 dark:hover:bg-blue-600/20 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-300 dark:border-slate-700/80 hover:border-blue-400 transition-colors"
                title="View LinkedIn Profile"
                id="hero-link-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Bento Card: Profile & Interactive Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Top Bento Box: Photo & Quick Stats */}
            <div className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 rounded-3xl p-6 shadow-xl dark:shadow-2xl space-y-5 bento-card relative overflow-hidden">
              <div className="relative group">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                  <img 
                    src={personalInfo.avatarUrl}
                    alt="Amreen Sultana - Trainer Communications & Voice Specialist"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      Hyderabad, India
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-blue-900/80 text-blue-200 backdrop-blur-md border border-blue-700/80 font-mono font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Verified Resume Profile
                    </span>
                  </div>
                </div>
              </div>

              {/* Bento Mini Cards inside Profile Block */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Current Role</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Trainer Communications</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Specialization</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Voice & Accent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bento Box: AI Interactive Banner */}
            <div 
              onClick={onOpenAIRecruiter}
              className="p-4 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-100 dark:from-blue-950/80 dark:via-indigo-950/80 dark:to-slate-900 border border-blue-200 dark:border-blue-500/30 hover:border-blue-400 cursor-pointer transition-all duration-200 flex items-center justify-between group bento-card shadow-md dark:shadow-lg"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/30">
                  <Bot className="w-5 h-5 animate-bounce" />
                </div>
                <div>
                  <div className="text-xs font-bold text-blue-900 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors">
                    Ask AI Recruiter Assistant
                  </div>
                  <div className="text-[11px] text-slate-600 dark:text-slate-400">
                    Query Amreen's training experience & L&D background
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform mr-1" />
            </div>

          </div>

        </div>

        {/* Key Metrics Row Bento Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 bento-card flex items-center justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider font-mono">Experience</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mt-0.5">5+ Years</div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono text-right max-w-[110px]">
              Corporate Training & L&D Functions
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 bento-card flex items-center justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider font-mono">Impact</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono mt-0.5">500+</div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono text-right max-w-[110px]">
              Professionals & Employees Trained
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/80 bento-card flex items-center justify-between shadow-sm dark:shadow-none">
            <div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider font-mono">Specialization</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono mt-0.5">Voice & Accent</div>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono text-right max-w-[110px]">
              Neutralization & MTI Reduction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
