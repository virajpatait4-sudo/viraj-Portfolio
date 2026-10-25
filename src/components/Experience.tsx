import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Users
} from 'lucide-react';
import { experienceItems } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
            Activities & Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Experience & Volunteering
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Campus leadership, event management operations, and collaborative team responsibilities at VIT Vellore.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 shadow-lg space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-cyan-400 font-medium px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20 inline-block">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-slate-300">
                    {item.organization} {item.division ? `(${item.division})` : ''}
                  </p>
                </div>

                <div className="flex flex-row sm:flex-col sm:items-end justify-between items-center text-xs text-slate-400 font-mono gap-1">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                  </span>
                  <span className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                  Key Responsibilities:
                </span>
                <ul className="space-y-1.5">
                  {item.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
