import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { educationItems } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Rigorous academic foundation in Computer Science, Data Science, and Mathematics with proven scholastic consistency.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="space-y-6">
          {educationItems.map((edu) => (
            <div
              key={edu.id}
              className={`p-6 sm:p-8 rounded-2xl bg-dark-900/80 border transition-all duration-300 backdrop-blur-sm ${
                edu.id === 'vit-btech'
                  ? 'border-electric-purple/40 shadow-xl shadow-electric-purple/5 bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900'
                  : 'border-white/[0.08] hover:border-white/[0.15]'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/20">
                      {edu.status}
                    </span>
                    {edu.id === 'vit-btech' && (
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-electric-purple/20 text-electric-violet border border-electric-purple/30">
                        Primary Degree
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-slate-200">
                    {edu.degree} {edu.stream ? `— ${edu.stream}` : ''}
                  </p>
                </div>

                {/* Score Pill & Meta */}
                <div className="flex flex-row lg:flex-col lg:items-end justify-between items-center gap-2">
                  <div className="px-4 py-2 rounded-xl bg-dark-950 border border-white/[0.08] text-right">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      {edu.scoreType}
                    </span>
                    <span className="text-lg font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyan">
                      {edu.score} <span className="text-xs text-slate-500">/ {edu.scoreMax}</span>
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>

              {/* Coursework & Highlights */}
              <div className="pt-4 space-y-4">
                {edu.keyCourses && (
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center space-x-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-electric-violet" />
                      <span>Key Curriculum & Coursework:</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {edu.keyCourses.map((course, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium px-3 py-1 rounded-lg bg-dark-950/70 text-slate-300 border border-white/[0.06]"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {edu.highlights && (
                  <div className="space-y-1.5">
                    {edu.highlights.map((h, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
