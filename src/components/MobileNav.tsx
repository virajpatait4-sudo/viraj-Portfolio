import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  FileDown, 
  Mail, 
  FolderGit2, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award,
  Home
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface MobileNavProps {
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Featured Projects', icon: FolderGit2 },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Technical Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.5 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4']
    });
  };

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-dark-950/85 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="flex items-center justify-between px-4 sm:px-6 h-16">
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center space-x-3 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-purple to-electric-blue p-[2px]">
            <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-sm text-electric-cyan">
              VP
            </div>
          </div>
          <div>
            <span className="font-bold text-sm text-white tracking-tight block">
              {personalInfo.preferredName}
            </span>
            <span className="text-[10px] text-emerald-400 font-medium block">
              Open to Internships
            </span>
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <a
            href={personalInfo.resumeDownloadUrl}
            download={personalInfo.resumeFileName}
            onClick={handleDownload}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-electric-purple/20 border border-electric-purple/30 text-electric-violet text-xs font-semibold hover:bg-electric-purple/30 transition-colors"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6 text-electric-cyan" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-white/[0.08] bg-dark-900/98 px-5 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <nav className="grid grid-cols-2 gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center space-x-2.5 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-colors ${
                    isActive
                      ? 'bg-electric-purple/20 text-electric-violet border border-electric-purple/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  <Icon className="w-4 h-4 text-electric-cyan shrink-0" />
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px] truncate">{personalInfo.email}</span>
            <div className="flex space-x-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-electric-blue"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="hover:text-electric-cyan"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
