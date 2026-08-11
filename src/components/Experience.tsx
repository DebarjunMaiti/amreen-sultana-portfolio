import React, { useState } from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ChevronRight, 
  ExternalLink,
  Layers,
  Sparkles,
  TrendingUp
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('all');

  const filteredExperiences = selectedCompanyId === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.id === selectedCompanyId);

  return (
    <section id="experience" className="py-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      {/* Background Section Glow */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            Career History & Enterprise Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Proven track record in corporate communications, Voice & Accent neutralization, MTI reduction, and L&D training across leading enterprise organizations.
          </p>

          {/* Company Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCompanyId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                selectedCompanyId === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700'
              }`}
            >
              All Roles (3)
            </button>
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setSelectedCompanyId(exp.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  selectedCompanyId === exp.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>{exp.company}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Experience Timeline Bento Grid Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredExperiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-md dark:shadow-xl transition-all duration-300 bento-card group"
            >
              {/* Header Info Bar */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                      {exp.domain}
                    </span>
                    <span className="text-xs font-mono text-slate-600 dark:text-slate-400 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      {exp.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pt-1">
                    {exp.role} <span className="text-blue-600 dark:text-blue-400 font-normal">@ {exp.company}</span>
                  </h3>
                </div>

                <div className="flex flex-col md:items-end gap-1 text-slate-500 dark:text-slate-400 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200 font-semibold text-sm bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                    <Calendar className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 pt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Impact Metric Highlight Bento Box */}
              {exp.featuredMetrics && (
                <div className="my-5 p-4 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 dark:from-blue-950/60 dark:via-slate-900 dark:to-indigo-950/60 border border-blue-200 dark:border-blue-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">Key Metric Impact:</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-950/90 px-3 py-1 rounded-xl border border-blue-300 dark:border-blue-800">
                    {exp.featuredMetrics}
                  </span>
                </div>
              )}

              {/* High Level Description */}
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed my-4">
                {exp.description}
              </p>

              {/* Detailed Achievements Checklist */}
              <div className="space-y-3 my-5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                  Key Accomplishments & Responsibilities:
                </div>
                <ul className="space-y-2.5">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono mr-1">Skills & Tools:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
