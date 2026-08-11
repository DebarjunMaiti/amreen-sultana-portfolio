import React from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Building, 
  Calendar, 
  FileText,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { educationList, certifications, publications } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Background & Publications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education, Certifications & Research
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Graduate studies at Trine University combined with industry certifications and published computer science research.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Education & Certifications */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Education Cards */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Academic Degrees
              </h3>

              <div className="space-y-4">
                {educationList.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/30 rounded-3xl p-6 space-y-4 shadow-sm dark:shadow-lg bento-card"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800/80 pb-3">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                        <div className="text-xs font-mono text-blue-600 dark:text-blue-400">{edu.field}</div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <Building className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      <span>{edu.institution}</span>
                      <span className="text-slate-400 dark:text-slate-500">• {edu.location}</span>
                    </div>

                    <ul className="space-y-1.5 pt-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Cards */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Professional Certifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500/30 rounded-2xl p-4 space-y-3 flex flex-col justify-between bento-card shadow-sm dark:shadow-md"
                  >
                    <div className="space-y-1.5">
                      <span className={`inline-block text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                        Verified {cert.year}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white pt-1 leading-snug">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono pt-2 border-t border-slate-200 dark:border-slate-800/80">
                      {cert.issuer}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Research Publications */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              Published Research & Papers
            </h3>

            <div className="space-y-4">
              {publications.map((pub, idx) => (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/30 rounded-3xl p-6 space-y-4 shadow-sm dark:shadow-lg bento-card"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      {pub.journalOrConference} ({pub.year})
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white pt-2 leading-snug">
                      {pub.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {pub.description}
                  </p>

                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span>Authors: {pub.authors.join(", ")}</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
