import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Terminal, 
  TrendingUp, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';
import { ProjectPreview } from './ProjectPreviews';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-dark-900 border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-dark-950/70">
          <div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-electric-cyan">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Visual Preview */}
          <ProjectPreview type={project.previewType} />

          {/* Subtitle & Problem Statement */}
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-slate-200">Problem Statement & Objective</h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-dark-950/50 p-4 rounded-xl border border-white/[0.06]">
              {project.problemStatement}
            </p>
          </div>

          {/* Key Contributions & Engineering Steps (Direct from Resume) */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-electric-violet" />
              <span>Key Technical Contributions & Implementation</span>
            </h4>
            <ul className="space-y-2.5">
              {project.contributions.map((bullet, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                  <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-electric-cyan" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Genuine Results & Impact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Results & Measurable Outcomes</span>
            </h4>
            <ul className="space-y-2">
              {project.resultsAndImpact.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-sm font-semibold text-slate-200">Technologies & Methodologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-dark-850 text-electric-cyan border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-dark-950/60 border border-white/[0.06] text-center">
                <span className="block text-[10px] text-slate-400 uppercase font-mono">{metric.label}</span>
                <span className="text-sm font-bold text-white font-mono">{metric.value}</span>
                <span className="block text-[10px] text-slate-500 truncate">{metric.description}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/[0.08] bg-dark-950/80">
          <span className="text-xs text-slate-500 font-mono">
            Candidate: Viraj Rajkumar Patait (VIT)
          </span>

          <div className="flex items-center space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-white text-xs font-semibold border border-white/[0.1] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
