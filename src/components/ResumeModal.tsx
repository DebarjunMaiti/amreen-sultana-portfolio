import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  X, 
  Copy, 
  Check, 
  Building2, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Linkedin,
  CheckCircle2
} from 'lucide-react';
import { personalInfo, experiences, skillCategories, educationList, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyPlainText = () => {
    const text = `
${personalInfo.name} - ${personalInfo.title}
${personalInfo.location} | ${personalInfo.email} | LinkedIn: ${personalInfo.linkedin}

SUMMARY:
${personalInfo.summary}

EXPERIENCE:
${experiences.map(e => `
* ${e.role} at ${e.company} (${e.period}) - ${e.location}
  ${e.achievements.map(a => `  - ${a}`).join('\n')}
  Tech: ${e.skills.join(', ')}
`).join('\n')}

EDUCATION:
${educationList.map(e => `* ${e.degree} - ${e.institution} (${e.period})`).join('\n')}

CERTIFICATIONS:
${certifications.map(c => `* ${c.title} (${c.issuer}, ${c.year})`).join('\n')}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl transition-colors duration-300">
        
        {/* Header Actions */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 no-print">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Amreen Sultana - Professional Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied" : "Copy Text"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="bg-white text-slate-900 rounded-2xl p-8 space-y-6 shadow-inner font-sans text-xs sm:text-sm print:p-0 print:shadow-none">
          
          {/* Candidate Name & Header */}
          <div className="border-b border-slate-200 pb-4 text-center sm:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-sm font-bold text-blue-700">
              {personalInfo.title} @ Infinx
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.email}</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5 text-slate-500" /> {personalInfo.linkedin}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-slate-700 leading-relaxed text-xs">
              {personalInfo.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
              Work Experience
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex items-center justify-between font-bold text-slate-900">
                  <span>{exp.role} — {exp.company}</span>
                  <span className="text-slate-500 font-mono text-xs">{exp.period}</span>
                </div>
                <div className="text-slate-600 text-[11px] font-medium">{exp.domain} | {exp.location}</div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs pl-1">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="leading-tight">{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1">
              Core Professional & Training Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
              {skillCategories.map((cat, idx) => (
                <div key={idx}>
                  <strong>{cat.categoryName}:</strong> {cat.skills.map(s => s.name).join(', ')}
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              {educationList.map((edu, idx) => (
                <div key={idx} className="mb-2">
                  <div className="font-bold text-slate-900">{edu.degree}</div>
                  <div className="text-slate-600 text-[11px]">{edu.institution} ({edu.period})</div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-800">
                {certifications.map((cert, idx) => (
                  <li key={idx}>{cert.title} ({cert.year})</li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
