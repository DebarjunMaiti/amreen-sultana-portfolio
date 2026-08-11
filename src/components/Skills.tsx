import React, { useState } from 'react';
import { 
  Layers, 
  Code2, 
  Network, 
  Cloud, 
  Database, 
  Layout, 
  Search, 
  Sparkles,
  CheckCircle2,
  Cpu
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-4 h-4 text-blue-400" />;
      case 'Network': return <Network className="w-4 h-4 text-indigo-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'Database': return <Database className="w-4 h-4 text-emerald-400" />;
      case 'Layout': return <Layout className="w-4 h-4 text-amber-400" />;
      default: return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  const categories = ['All', ...skillCategories.map(c => c.categoryName)];

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.categoryName !== selectedCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
            <Cpu className="w-3.5 h-3.5" />
            Training Capabilities & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Competencies & Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Specialized in Voice and Accent neutralization, MTI reduction, corporate communications, and Learning & Development behavioural coaching.
          </p>

          {/* Search & Category Filter Controls */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            
            {/* Search Bar */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search skills (e.g. Voice, Accent)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>

            {/* Category Select Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-800'
                  }`}
                >
                  {cat.replace(' & ', ' ')}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Top Core Skills Bento Banner */}
        <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-100 to-indigo-50 dark:from-blue-950/70 dark:via-slate-900 dark:to-indigo-950/70 border border-blue-200 dark:border-blue-500/30 bento-card shadow-md dark:shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Training Pillars</h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                Core competencies delivered across corporate training cohorts at Infinx and Tech Mahindra.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Voice & Accent Neutralization", "MTI Reduction & Pronunciation", "Corporate Communications", "Spoken English Fluency", "Behavioural Training", "Training Needs Analysis (TNA)"].map((pillar) => (
                <span key={pillar} className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-blue-100 dark:bg-blue-600/25 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-400/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  {pillar}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Category Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => category && (
            <div 
              key={category.categoryName}
              className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/30 rounded-3xl p-6 space-y-5 shadow-sm dark:shadow-lg bento-card flex flex-col justify-between"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {category.categoryName}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        {skill.name}
                        {skill.isTopSkill && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30">
                            Core
                          </span>
                        )}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                        {skill.experience}
                      </span>
                    </div>

                    {/* Proficiency Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-200 dark:border-slate-800">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.level >= 90 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500' 
                            : 'bg-gradient-to-r from-sky-500 to-blue-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
