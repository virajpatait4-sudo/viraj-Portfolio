import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Heart,
  Code
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-dark-950/90 py-12 relative z-10 text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Left Brand info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-bold text-white text-sm">
                {personalInfo.name}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-electric-cyan font-mono text-[11px]">
                VIT Vellore '28
              </span>
            </div>
            <p className="text-slate-300 text-xs">
              Computer Science (Data Science) Undergraduate • B.Tech
            </p>
          </div>

          {/* Center Socials */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/[0.06] hover:text-white hover:border-white/[0.15] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-900 border border-white/[0.06] hover:text-blue-400 hover:border-blue-500/30 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-dark-900 border border-white/[0.06] hover:text-electric-cyan hover:border-cyan-500/30 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-dark-900 hover:bg-dark-850 border border-white/[0.06] hover:border-electric-purple/40 text-slate-300 hover:text-white transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-electric-cyan group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-300">
          <p>© {new Date().getFullYear()} Viraj Rajkumar Patait. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Engineered with</span>
            <span className="text-slate-200 font-mono">React 19, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
