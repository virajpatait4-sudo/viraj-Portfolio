import React from 'react';
import { 
  User, 
  GraduationCap, 
  Code, 
  Database, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
            <User className="w-4 h-4" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            A comprehensive look at my academic journey, engineering focus areas, and technical philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/[0.08] space-y-4 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-electric-violet" />
                <span>Academic & Technical Profile</span>
              </h3>

              {personalInfo.aboutText.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center space-x-2.5">
                  <GraduationCap className="w-4 h-4 text-electric-cyan shrink-0" />
                  <span>VIT Vellore (Jul 2024 – May 2028)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Database className="w-4 h-4 text-electric-violet shrink-0" />
                  <span>B.Tech in Computer Science (Data Science)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vellore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Class of 2028 • Currently 2nd Year</span>
                </div>
              </div>
            </div>

            {/* Core Values / Engineering Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-dark-850/70 border border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-electric-purple/20 flex items-center justify-center text-electric-violet font-bold text-xs">
                  01
                </div>
                <h4 className="text-sm font-bold text-white">Statistical Rigor</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Evaluating machine learning models with MAE, RMSE, R², and F1-score rather than superficial metrics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-850/70 border border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-electric-blue/20 flex items-center justify-center text-electric-blue font-bold text-xs">
                  02
                </div>
                <h4 className="text-sm font-bold text-white">Star Schema Modeling</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Structuring normalized transactional databases into dimensional fact tables for high-performance Power BI reporting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-850/70 border border-white/[0.06] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-xs">
                  03
                </div>
                <h4 className="text-sm font-bold text-white">Team Adaptability</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Demonstrated operational execution and calm collaboration during VIT's high-turnout flagship events.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Snapshot Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-white/[0.08] shadow-xl space-y-5">
              <h3 className="text-base font-bold text-white flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span>Candidate Snapshot</span>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">Verified Profile</span>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono text-[11px]">FULL LEGAL NAME</span>
                  <span className="font-semibold text-white text-sm">{personalInfo.name}</span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono text-[11px]">DEGREE PROGRAM</span>
                  <span className="font-semibold text-white">
                    {personalInfo.degree} in {personalInfo.specialization}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5 font-mono text-[11px]">INSTITUTION</span>
                  <span className="font-semibold text-white">{personalInfo.institution}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Current CGPA</span>
                    <span className="text-xl font-bold font-mono text-electric-cyan">
                      {personalInfo.cgpa} <span className="text-xs text-slate-500">/ 10</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-dark-950/70 border border-white/[0.06]">
                    <span className="text-slate-400 text-[10px] uppercase font-mono block">Target Roles</span>
                    <span className="text-xs font-bold text-electric-violet block mt-1">
                      Data Science, ML & SWE Intern
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-slate-400 block mb-1 font-mono text-[11px]">KEY PROGRAMMING LANGUAGES</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Java', 'C++', 'C', 'SQL', 'JavaScript', 'R'].map((lang, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/[0.06] font-mono text-[11px] text-slate-200">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Quick Pill */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-electric-purple/10 to-electric-blue/10 border border-electric-purple/30 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">Looking for an intern?</span>
                <span className="text-[11px] text-slate-400">Available for Summer / Fall technical internships.</span>
              </div>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-lg bg-electric-purple hover:bg-electric-violet text-white font-semibold text-[11px] transition-colors shrink-0 ml-2"
              >
                Hire Viraj
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
