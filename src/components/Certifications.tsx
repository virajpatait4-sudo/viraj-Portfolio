import React from 'react';
import { 
  Award, 
  Cloud, 
  BrainCircuit, 
  Trophy
} from 'lucide-react';
import { certificationItems, achievementItems } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
            Credentials & Honors
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Academic achievements from VIT Vellore and certified foundational coursework in AI and Google Cloud.
          </p>
        </div>

        {/* Academic Achievements */}
        <div className="mb-10 space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2 font-mono uppercase tracking-wider">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Academic Milestones</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievementItems.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">
                    {ach.title}
                  </h4>
                  <span className="text-[11px] font-mono text-amber-400">VIT Vellore</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
                <span className="text-[11px] text-slate-500 font-mono block pt-1">
                  Issuer: {ach.issuer}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center space-x-2 font-mono uppercase tracking-wider">
            <Award className="w-4 h-4 text-cyan-400" />
            <span>Course Certifications & Cloud Badges</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificationItems.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 space-y-3"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2.5 rounded-xl bg-dark-950 border border-white/[0.06] text-cyan-400 shrink-0">
                    {cert.issuer.includes('Google') ? (
                      <Cloud className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <BrainCircuit className="w-5 h-5 text-purple-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 block">
                      {cert.issuer} {cert.year ? `• ${cert.year}` : ''}
                    </span>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {cert.title}
                    </h4>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-400 border border-white/[0.04]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
