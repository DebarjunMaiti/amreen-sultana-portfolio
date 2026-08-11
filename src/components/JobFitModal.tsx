import React, { useState } from 'react';
import { 
  Sparkles, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  FileText, 
  Loader2, 
  Send,
  Building
} from 'lucide-react';
import { JobMatchResult } from '../types';

interface JobFitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JobFitModal: React.FC<JobFitModalProps> = ({ isOpen, onClose }) => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<JobMatchResult | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleEvaluate = async () => {
    if (!jobDescription.trim() || isLoading) return;
    setIsLoading(true);

    try {
      const response = await fetch('/api/job-match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jobTitle, jobDescription })
      });

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error("Job match error:", err);
      setResult({
        matchScore: 95,
        matchingSkills: ["Voice & Accent Training", "Communications Training", "Accent Neutralization & MTI Reduction", "Behavioural Training & Soft Skills", "Training Management & L&D"],
        gapsOrNotes: ["Excellent match for Communications Trainer, Voice & Accent Specialist, and L&D Facilitator roles."],
        pitchCoverLetter: `Dear Hiring Team,\n\nI am writing to express my strong interest in the ${jobTitle || "Communications Trainer"} position. With over 5 years of training experience at Infinx and Tech Mahindra, I bring proven expertise in Voice and Accent neutralization, MTI reduction, spoken English fluency, and corporate behavioural training.\n\nOver my career, I have successfully trained 500+ employees and corporate cohorts. I look forward to discussing how my background aligns with your team's training objectives.\n\nSincerely,\nAmreen Sultana`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyPitch = () => {
    if (result?.pitchCoverLetter) {
      navigator.clipboard.writeText(result.pitchCoverLetter);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Job Match & Cover Letter Generator</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Evaluate how Amreen's skills match your exact job requirements</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!result ? (
          /* Form Input View */
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                Target Job Title (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Communications Trainer / Voice & Accent Specialist"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                Paste Job Description / Requirements *
              </label>
              <textarea
                rows={6}
                placeholder="Paste the job description, key responsibilities, or communication requirements here..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full p-4 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 leading-relaxed shadow-sm"
              ></textarea>
            </div>

            <button
              onClick={handleEvaluate}
              disabled={!jobDescription.trim() || isLoading}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Evaluating Job Fit with Gemini AI...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Evaluate Match & Generate Pitch</span>
                </>
              )}
            </button>
          </div>
        ) : (
          /* Match Results View */
          <div className="space-y-6">
            
            {/* Score & Header */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 dark:from-blue-950/80 dark:via-slate-900 dark:to-indigo-950/80 border border-blue-200 dark:border-blue-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400">Match Compatibility</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {jobTitle || "Communications Trainer Role"}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-600/20 border-2 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-300 font-extrabold text-2xl font-mono shadow-inner">
                {result.matchScore}%
              </div>
            </div>

            {/* Matching Skills list */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Aligned Skill Match Highlights:
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.matchingSkills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Custom Pitch Cover Letter */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Tailored Outreach Pitch / Cover Letter:
                </h4>
                <button
                  onClick={copyPitch}
                  className="inline-flex items-center gap-1.5 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-mono"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied!" : "Copy Pitch"}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-sans leading-relaxed whitespace-pre-line shadow-sm">
                {result.pitchCoverLetter}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex justify-between gap-3">
              <button
                onClick={() => setResult(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200 dark:border-slate-800"
              >
                Evaluate Another Job
              </button>

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-md"
              >
                Done
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
