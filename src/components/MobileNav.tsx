import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  FileDown, 
  Home, 
  FolderGit2, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface MobileNavProps {
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
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
      particleCount: 40,
      spread: 60,
      origin: { y: 0.1, x: 0.5 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4']
    });
  };

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-dark-900/95 backdrop-blur-md border-b border-white/[0.08]">
      <div className="flex items-center justify-between px-4 sm:px-6 h-14">
        {/* Brand */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="flex items-center space-x-2.5 text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center font-mono font-bold text-xs text-white">
            VP
          </div>
          <div>
            <span className="font-bold text-xs text-white block">
              {personalInfo.preferredName}
            </span>
            <span className="text-[10px] text-emerald-400 block font-medium">
              Open to Internships
            </span>
          </div>
        </button>

        {/* Right Actions */}
        <div className="flex items-center space-x-2">
          <a
            href={personalInfo.resumeDownloadUrl}
            download="Viraj_Rajkumar_Patait_Resume.pdf"
            onClick={handleDownload}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-purple-600 text-white text-xs font-semibold"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="text-[11px]">Resume</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Slide-down Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/[0.08] bg-dark-950 px-4 py-4 space-y-3">
          <nav className="grid grid-cols-2 gap-1.5" aria-label="Mobile Navigation Menu">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-medium text-left cursor-pointer ${
                    isActive
                      ? 'bg-purple-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{link.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono text-[11px] truncate">{personalInfo.email}</span>
            <div className="flex space-x-3">
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="hover:text-cyan-400"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
