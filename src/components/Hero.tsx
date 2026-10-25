import React from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Sparkles, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Database, 
  BrainCircuit,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, stats } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 75,
      origin: { y: 0.6, x: 0.5 },
      colors: ['#8b5cf6', '#3b82f6', '#06b6d4', '#10b981']
    });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-24 lg:pt-16 pb-16 lg:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-dark-850/90 border border-electric-purple/30 text-xs text-slate-300 shadow-lg shadow-electric-purple/10 mb-6 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-200 font-medium tracking-wide">
            {personalInfo.status}
          </span>
          <span className="text-slate-400">|</span>
          <span className="text-electric-violet font-mono text-[11px] font-semibold">
            CGPA: 8.75/10
          </span>
        </div>

        {/* Main Grid: Headline & Interactive Pipeline Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h2 className="text-sm uppercase tracking-widest font-mono text-electric-cyan font-semibold">
                Portfolio & Engineering Architecture
              </h2>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-electric-violet">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300 leading-snug">
                Computer Science (Data Science) Undergraduate @{' '}
                <span className="text-white font-semibold underline decoration-electric-purple/50 underline-offset-4">
                  VIT Vellore
                </span>
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Second-year Computer Science (Data Science) student with an academic record of{' '}
              <strong className="text-white font-semibold">8.75/10 CGPA</strong>. Focused on engineering end-to-end data analytics solutions, star schema BI architectures, and predictive machine learning models with Python, Scikit-learn, SQL, and Power BI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={scrollToProjects}
                className="flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-electric-purple via-electric-indigo to-electric-blue hover:from-electric-violet hover:to-electric-indigo text-white text-sm font-semibold shadow-lg shadow-electric-purple/30 hover:shadow-electric-purple/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalInfo.resumeDownloadUrl}
                download={personalInfo.resumeFileName}
                onClick={handleDownload}
                className="flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/[0.12] hover:border-electric-purple/50 text-white text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-electric-cyan" />
                <span>Download Resume</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.08] text-slate-300">
                  PDF
                </span>
              </a>

              <button
                onClick={scrollToContact}
                className="flex items-center space-x-1.5 px-4 py-3.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] text-sm font-medium transition-colors"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Micro verification pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Resume Details</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Active GitHub & LinkedIn</span>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>3 Google Cloud Badges</span>
              </div>
            </div>
          </div>

          {/* Right Column: Subtle Animated Technology-Inspired Visual */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-electric-purple/30 via-electric-blue/30 to-electric-cyan/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Interactive Code / ML Pipeline Card */}
              <div className="relative rounded-2xl bg-dark-900/90 border border-white/[0.12] shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Window header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.08] bg-dark-950/60">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-electric-cyan" />
                    <span>viraj_pipeline.py</span>
                  </div>
                  <div className="w-10"></div>
                </div>

                {/* Simulated IDE / Model Training Feed */}
                <div className="p-4 sm:p-5 font-mono text-xs space-y-3 leading-relaxed text-slate-300">
                  <div className="text-slate-500">// Machine Learning & Relational Analytics Pipeline</div>
                  
                  <div className="space-y-1">
                    <p className="text-purple-400">
                      import <span className="text-white">pandas</span> as <span className="text-cyan-300">pd</span>
                    </p>
                    <p className="text-purple-400">
                      from <span className="text-white">sklearn.ensemble</span> import <span className="text-amber-300">RandomForestRegressor</span>
                    </p>
                  </div>

                  <div className="py-1 px-3 rounded-lg bg-dark-950/80 border border-white/[0.06] text-[11px] text-slate-400">
                    <span className="text-emerald-400">✓</span> Database: <span className="text-slate-200 font-semibold">MySQL Star Schema</span> (Connected)
                  </div>

                  <div className="space-y-1 text-slate-400">
                    <p>
                      <span className="text-blue-400">model</span> = <span className="text-amber-300">RandomForestRegressor</span>(n_estimators=100)
                    </p>
                    <p>
                      <span className="text-blue-400">model</span>.fit(X_train, y_train)
                    </p>
                  </div>

                  {/* Model Results Block */}
                  <div className="rounded-xl bg-dark-950/90 border border-electric-purple/20 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400">Validation Performance:</span>
                      <span className="text-emerald-400 font-bold">Converged</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="bg-dark-850 p-1.5 rounded-lg border border-white/[0.04]">
                        <span className="block text-[10px] text-slate-500">CGPA</span>
                        <span className="text-xs font-bold text-white">8.75</span>
                      </div>
                      <div className="bg-dark-850 p-1.5 rounded-lg border border-white/[0.04]">
                        <span className="block text-[10px] text-slate-500">RMSE / MAE</span>
                        <span className="text-xs font-bold text-electric-cyan">Optimal</span>
                      </div>
                      <div className="bg-dark-850 p-1.5 rounded-lg border border-white/[0.04]">
                        <span className="block text-[10px] text-slate-500">DAX KPI</span>
                        <span className="text-xs font-bold text-electric-violet">Live</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                    <span className="flex items-center space-x-1.5 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Target: SDE / Data Science Intern</span>
                    </span>
                    <span className="text-slate-500">VIT Vellore</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/[0.08]">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-4 rounded-xl bg-dark-900/60 border border-white/[0.06] hover:border-electric-purple/30 transition-colors backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-violet font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
