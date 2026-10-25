import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  GraduationCap, 
  Database,
  Mail,
  Network
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4']
    });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-20 lg:pt-16 pb-16 lg:pb-24 overflow-hidden border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-dark-900 border border-purple-500/30 text-xs text-slate-300 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-200">
            {personalInfo.status}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-cyan-400 font-mono text-[11px] font-semibold">
            CGPA: 8.75/10
          </span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
                Portfolio & Academic Work
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-200 leading-snug">
                Computer Science (Data Science) Undergraduate @{' '}
                <span className="text-purple-300 font-semibold">VIT Vellore</span>
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Second-year Computer Science (Data Science) undergraduate at Vellore Institute of Technology with an academic record of{' '}
              <strong className="text-white font-semibold">8.75/10 CGPA</strong>. Seeking internship opportunities to apply technical skills in machine learning, data engineering, business intelligence, and software development to solve real-world problems.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold shadow-lg shadow-purple-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeDownloadUrl}
                download="Viraj_Rajkumar_Patait_Resume.pdf"
                onClick={handleDownload}
                className="flex items-center space-x-2 px-5 py-3 rounded-xl bg-dark-900 hover:bg-dark-850 border border-white/[0.12] hover:border-purple-500/40 text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.08] text-slate-300">
                  PDF
                </span>
              </a>

              <button
                onClick={() => scrollTo('contact')}
                className="flex items-center space-x-1.5 px-4 py-3 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Key Verified Stats */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs text-slate-400 border-t border-white/[0.06]">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>B.Tech CSE (Data Science) • 2024–2028</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-cyan-400" />
                <span>MySQL, Python, Power BI & Scikit-learn</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visually attractive & subtle network / globe graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
              {/* Soft glow background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/15 via-blue-600/10 to-cyan-500/15 blur-2xl pointer-events-none" />

              {/* Decorative SVG Globe / Network Mesh */}
              <svg 
                viewBox="0 0 320 320" 
                className="w-full h-full relative z-10 drop-shadow-[0_0_25px_rgba(139,92,246,0.2)]"
              >
                <defs>
                  <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.7" />
                  </linearGradient>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#05070d" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Outer concentric orbital rings */}
                <circle cx="160" cy="160" r="140" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="160" cy="160" r="115" fill="none" stroke="url(#orbitGrad)" strokeWidth="1.2" opacity="0.6" />
                <circle cx="160" cy="160" r="85" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="160" cy="160" r="60" fill="url(#centerGlow)" />

                {/* Network Latitude & Longitude Geometrics */}
                <ellipse cx="160" cy="160" rx="115" ry="45" fill="none" stroke="rgba(139,92,246,0.3)" strokeWidth="1" transform="rotate(-25 160 160)" />
                <ellipse cx="160" cy="160" rx="115" ry="45" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1" transform="rotate(35 160 160)" />
                <ellipse cx="160" cy="160" rx="85" ry="30" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

                {/* Interconnected Node Links */}
                <line x1="85" y1="120" x2="160" y2="90" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
                <line x1="160" y1="90" x2="235" y2="135" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
                <line x1="235" y1="135" x2="210" y2="210" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
                <line x1="210" y1="210" x2="130" y2="225" stroke="rgba(139,92,246,0.4)" strokeWidth="1" />
                <line x1="130" y1="225" x2="85" y2="120" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
                <line x1="160" y1="90" x2="160" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="160" y1="160" x2="210" y2="210" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="160" y1="160" x2="85" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

                {/* Network Nodes */}
                <circle cx="160" cy="90" r="5" fill="#8b5cf6" />
                <circle cx="85" cy="120" r="4.5" fill="#06b6d4" />
                <circle cx="235" cy="135" r="4.5" fill="#3b82f6" />
                <circle cx="210" cy="210" r="4" fill="#a855f7" />
                <circle cx="130" cy="225" r="4.5" fill="#06b6d4" />
                <circle cx="160" cy="160" r="6" fill="#ffffff" />
                <circle cx="160" cy="160" r="10" fill="none" stroke="#8b5cf6" strokeWidth="1.5" opacity="0.8" />

                {/* Satellite Nodes on Outer Orbit */}
                <circle cx="295" cy="130" r="3" fill="#8b5cf6" />
                <circle cx="35" cy="190" r="3" fill="#06b6d4" />
              </svg>

              {/* Data Science Badge in center overlay */}
              <div className="absolute -bottom-3 px-3.5 py-1.5 rounded-xl bg-dark-900 border border-white/[0.1] text-center shadow-xl backdrop-blur-md">
                <span className="text-[11px] font-mono text-slate-300 font-medium">
                  Data Science & Machine Learning
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
