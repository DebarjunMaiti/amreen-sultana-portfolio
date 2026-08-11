import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  TrendingUp, 
  ArrowUpRight,
  ShieldCheck,
  Server,
  FileCode
} from 'lucide-react';
import { projects, publications } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Voice & Accent', 'Corporate Training', 'Communications & L&D', 'Quality & Auditing'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Key Initiatives & Training Modules
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Training Projects & Programs
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Key training initiatives, voice neutralization frameworks, and communication development programs executed across enterprise teams.
          </p>

          {/* Category Filters */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md dark:shadow-xl transition-all duration-300 bento-card flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Title */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                    {project.category}
                  </span>

                  {project.isFeatured && (
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs text-blue-600 dark:text-blue-300 font-mono mt-1">
                    {project.subtitle}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Impact Metrics Bento Box */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/90 space-y-2">
                  <div className="text-xs font-mono text-slate-600 dark:text-slate-400 font-semibold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Quantified Impact Metrics:
                  </div>
                  <ul className="space-y-1">
                    {project.impactMetrics.map((metric, idx) => (
                      <li key={idx} className="text-xs text-emerald-700 dark:text-emerald-300 font-mono flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                    Key Methodology & Modules:
                  </div>
                  <ul className="space-y-1.5">
                    {project.architectureDetails.map((detail, idx) => (
                      <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies Used Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Modal Drawer */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-slate-900 dark:text-slate-100 shadow-2xl">
              
              <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 dark:text-blue-300 mt-0.5">
                    {selectedProject.subtitle}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">Program Curriculum & Methodology:</h4>
                  <ul className="space-y-2">
                    {selectedProject.architectureDetails.map((detail, idx) => (
                      <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">Measured Business Impact:</h4>
                  <ul className="space-y-1">
                    {selectedProject.impactMetrics.map((metric, idx) => (
                      <li key={idx} className="text-xs text-emerald-700 dark:text-emerald-300 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold">Key Competencies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
