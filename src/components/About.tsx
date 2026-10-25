import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Mail,
  Calendar,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
            Background
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Academic background, core technical focus areas, and internship objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/[0.08] space-y-4">
              <h3 className="text-base font-bold text-white">
                Undergraduate in Computer Science & Data Science
              </h3>

              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx} className="text-sm text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 font-medium">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Vellore Institute of Technology, Vellore</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>B.Tech CSE (Data Science)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Vellore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Jul 2024 – May 2028 (Class of 2028)</span>
                </div>
              </div>
            </div>

            {/* Core Competency Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-dark-900 border border-white/[0.06] space-y-1">
                <h4 className="text-xs font-bold text-white">Data Analysis</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Relational SQL querying, Star Schema modeling, and Power BI dashboards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/[0.06] space-y-1">
                <h4 className="text-xs font-bold text-white">Machine Learning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Scikit-learn regressors and decision-tree classifiers evaluated with statistical rigor.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900 border border-white/[0.06] space-y-1">
                <h4 className="text-xs font-bold text-white">Team Operations</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Proven reliability and logistical coordination in large-scale university events.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Academic Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-dark-900 border border-white/[0.08] space-y-4">
              <h3 className="text-sm font-bold text-white pb-2 border-b border-white/[0.06]">
                Academic Summary
              </h3>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">NAME</span>
                  <span className="font-semibold text-white text-sm">{personalInfo.name}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">INSTITUTION</span>
                  <span className="font-semibold text-white">{personalInfo.institution}</span>
                </div>

                <div>
                  <span className="text-slate-400 block font-mono text-[11px]">DEGREE</span>
                  <span className="font-semibold text-white">{personalInfo.degree} — {personalInfo.specialization}</span>
                </div>

                <div className="p-3 rounded-xl bg-dark-950 border border-white/[0.06]">
                  <span className="text-slate-400 text-[10px] uppercase font-mono block">Current CGPA</span>
                  <span className="text-xl font-bold font-mono text-cyan-400">
                    {personalInfo.cgpa} <span className="text-xs text-slate-500">/ {personalInfo.cgpaMax}</span>
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block mb-1 font-mono text-[11px]">VERIFIED LANGUAGES</span>
                  <div className="flex flex-wrap gap-1">
                    {['Python', 'Java', 'C', 'C++', 'JavaScript', 'R', 'SQL'].map((lang, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-dark-950 font-mono text-[11px] text-slate-300 border border-white/[0.06]">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-dark-900 border border-purple-500/20 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">Ready for Internships</span>
                <span className="text-slate-400">Available for technical software & data roles.</span>
              </div>
              <a
                href="#contact"
                className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs transition-colors shrink-0 ml-3"
              >
                Reach Out
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
