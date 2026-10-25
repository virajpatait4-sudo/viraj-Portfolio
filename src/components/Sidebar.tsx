import React, { useState, useEffect } from 'react';
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
  Copy,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

interface SidebarProps {
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Overview', icon: Home },
    { id: 'projects', label: 'Featured Projects', icon: FolderGit2, count: '4' },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Technical Skills', icon: Cpu },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 60,
      spread: 70,
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
    <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-screen w-72 xl:w-80 bg-dark-900/90 backdrop-blur-xl border-r border-white/[0.08] z-30 overflow-y-auto px-6 py-7 justify-between shadow-2xl">
      {/* Top Branding & Profile */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3.5">
          <div className="relative group">
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-electric-purple via-electric-indigo to-electric-blue p-[2px] shadow-lg shadow-electric-purple/20 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-dark-950 rounded-[14px] flex items-center justify-center overflow-hidden">
                <span className="font-mono font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
                  VP
                </span>
              </div>
            </div>
            {/* Status dot */}
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-dark-950"></span>
            </span>
          </div>

          <div>
            <h1 className="font-bold text-base text-white tracking-tight leading-snug">
              {personalInfo.name}
            </h1>
            <p className="text-xs text-slate-400 font-mono">
              VIT Vellore • DS '28
            </p>
          </div>
        </div>

        {/* Status Chip */}
        <div className="bg-dark-850/80 border border-emerald-500/20 rounded-xl px-3 py-2 flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[11px] font-medium text-emerald-300 tracking-wide">
            Open for 2025/2026 Internships
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1.5 pt-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-electric-purple/20 to-electric-blue/10 text-white border border-electric-purple/40 shadow-sm shadow-electric-purple/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04] border border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-electric-violet' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                  <span>{link.label}</span>
                </div>

                {link.count && (
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                    isActive ? 'bg-electric-purple/30 text-electric-violet' : 'bg-white/[0.06] text-slate-400'
                  }`}>
                    {link.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Actions & Socials */}
      <div className="space-y-4 pt-6 border-t border-white/[0.08]">
        {/* Direct Resume Download */}
        <a
          href={personalInfo.resumeDownloadUrl}
          download={personalInfo.resumeFileName}
          onClick={handleDownloadResume}
          className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-violet hover:to-electric-indigo text-white text-xs font-semibold shadow-lg shadow-electric-purple/25 transition-all duration-300 hover:shadow-electric-purple/40 hover:-translate-y-0.5 active:translate-y-0"
        >
          <FileDown className="w-4 h-4" />
          <span>Download Resume (PDF)</span>
        </a>

        {/* Quick Email Copy Pill */}
        <button
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/[0.06] text-slate-300 text-xs transition-colors group"
          title="Click to copy email address"
        >
          <div className="flex items-center space-x-2 truncate">
            <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-electric-cyan" />
            <span className="truncate font-mono text-[11px]">{personalInfo.email}</span>
          </div>
          {copiedEmail ? (
            <span className="flex items-center text-emerald-400 text-[10px] font-mono">
              <Check className="w-3 h-3 mr-1" /> Copied!
            </span>
          ) : (
            <Copy className="w-3 h-3 text-slate-400 group-hover:text-white" />
          )}
        </button>

        {/* Social Icons */}
        <div className="flex items-center justify-between pt-1 text-slate-400 px-1">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg hover:text-white hover:bg-white/[0.06] transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg hover:text-electric-blue hover:bg-white/[0.06] transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg hover:text-electric-cyan hover:bg-white/[0.06] transition-colors"
            title="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume in New Tab"
            className="p-2 rounded-lg hover:text-electric-violet hover:bg-white/[0.06] transition-colors"
            title="Open Resume"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
};
