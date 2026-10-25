import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { experienceItems } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
            <Briefcase className="w-4 h-4" />
            <span>Field Experience & Operations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Hands-on operational execution, event coordination, and cross-functional teamwork in high-tempo university environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-electric-purple/30 ml-4 sm:ml-6 space-y-10 pl-6 sm:pl-8">
          {experienceItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Icon */}
              <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-dark-950 border-2 border-electric-purple flex items-center justify-center shadow-lg shadow-electric-purple/30 group-hover:scale-110 transition-transform">
                <Users className="w-3.5 h-3.5 text-electric-cyan" />
              </div>

              {/* Main Content Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-electric-purple/40 shadow-xl space-y-5 backdrop-blur-sm transition-all duration-300">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06]">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-electric-cyan px-2.5 py-0.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/20">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {item.organization}
                    </p>
                    {item.division && (
                      <p className="text-xs text-electric-violet font-medium mt-0.5">
                        {item.division}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:items-end space-y-1 text-xs text-slate-400 font-mono">
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

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Core Operational Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {item.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-dark-950/60 border border-white/[0.04] text-xs text-slate-300 flex items-start space-x-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-electric-violet shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Future Opportunities Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">
              Seeking Summer / Fall 2025–2026 Technical Internships
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Prepared to contribute across Machine Learning, Data Analytics, Backend ETL, and Full-Stack Engineering teams.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-electric-purple to-electric-blue hover:from-electric-violet hover:to-electric-indigo text-white text-xs font-semibold shadow-lg shadow-electric-purple/20 transition-all shrink-0"
          >
            Connect for Roles
          </a>
        </div>

      </div>
    </section>
  );
};
