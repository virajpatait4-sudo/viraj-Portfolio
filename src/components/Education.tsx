import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  BookOpen
} from 'lucide-react';
import { educationItems } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
            Academic Background
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Education
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Formal degrees, academic performance records, and core curriculum details.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-5">
          {educationItems.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-7 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 shadow-lg space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/[0.06]">
                <div>
                  <span className="text-[11px] font-mono text-cyan-400 font-medium px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20 inline-block">
                    {edu.status}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight mt-1.5">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {edu.degree} {edu.stream ? `— ${edu.stream}` : ''}
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col sm:items-end justify-between items-center gap-1.5">
                  <div className="px-3 py-1.5 rounded-xl bg-dark-950 border border-white/[0.08]">
                    <span className="text-[10px] uppercase font-mono text-slate-400 mr-2">{edu.scoreType}:</span>
                    <span className="text-sm font-bold font-mono text-cyan-400">{edu.score}</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{edu.period}</span>
                  </span>
                </div>
              </div>

              {edu.coursework && (
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center space-x-1.5 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>Key Coursework:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-dark-950 text-slate-300 border border-white/[0.04]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
