import React, { useState } from 'react';
import { 
  Home, 
  FolderGit2, 
  User, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  FileDown, 
  Check, 
  Copy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8, x: 0.15 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4']
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-64 xl:w-72 bg-dark-900 border-r border-white/[0.08] z-30 px-5 py-6 justify-between overflow-y-auto">
      {/* Top Branding */}
      <div className="space-y-5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center font-mono font-bold text-white text-base shadow-md shadow-purple-600/30">
            VP
          </div>
          <div>
            <h1 className="font-bold text-sm text-white tracking-tight leading-snug">
              {personalInfo.name}
            </h1>
            <p className="text-[11px] text-slate-400 font-mono">
              VIT Vellore • DS '28
            </p>
          </div>
        </div>

        {/* Status Pill */}
        <div className="bg-dark-950 border border-emerald-500/20 rounded-xl px-3 py-2 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-medium text-emerald-300">
            Open for Internships
          </span>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1" aria-label="Desktop Navigation">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="space-y-3 pt-4 border-t border-white/[0.06]">
        {/* Resume Download Button */}
        <a
          href={personalInfo.resumeDownloadUrl}
          download="Viraj_Rajkumar_Patait_Resume.pdf"
          onClick={handleDownload}
          className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md transition-colors"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>Resume (PDF)</span>
        </a>

        {/* Copy Email Button */}
        <button
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-dark-950 hover:bg-dark-850 border border-white/[0.06] text-slate-300 text-xs transition-colors cursor-pointer"
          title="Click to copy email address"
        >
          <span className="truncate font-mono text-[11px]">{personalInfo.email}</span>
          {copiedEmail ? (
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
          )}
        </button>

        {/* Social Links */}
        <div className="flex items-center justify-around pt-1 text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-1.5 rounded-lg hover:text-white hover:bg-white/[0.04] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-1.5 rounded-lg hover:text-blue-400 hover:bg-white/[0.04] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-1.5 rounded-lg hover:text-cyan-400 hover:bg-white/[0.04] transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};
