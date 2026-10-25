import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950 py-10 relative z-10 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
          
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-bold text-white text-sm">
                {personalInfo.name}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono text-[11px]">
                VIT Vellore '28
              </span>
            </div>
            <p className="text-slate-400 text-xs">
              Computer Science (Data Science) Undergraduate • B.Tech
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/[0.06] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/[0.06] hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-dark-900 border border-white/[0.06] hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-dark-850 border border-white/[0.06] text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Viraj Rajkumar Patait. All rights reserved.</p>
          <p className="font-mono text-slate-400">
            VIT Vellore • Computer Science (Data Science)
          </p>
        </div>
      </div>
    </footer>
  );
};
