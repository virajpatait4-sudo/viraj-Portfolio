import React from 'react';
import { 
  Award, 
  Cloud, 
  BrainCircuit, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  Trophy
} from 'lucide-react';
import { certificationItems, achievementItems } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
            <Award className="w-4 h-4" />
            <span>Honors & Professional Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Strictly verified credentials from Google Cloud, Udemy, and academic milestones achieved at VIT Vellore.
          </p>
        </div>

        {/* Top: Verified Achievements Grid */}
        <div className="mb-12 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-amber-400" />
            <span>Academic & Campus Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {achievementItems.map((ach) => (
              <div
                key={ach.id}
                className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-amber-400/30 transition-all duration-300 backdrop-blur-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {ach.category}
                    </span>
                    {ach.metric && (
                      <span className="text-xs font-bold font-mono text-emerald-400">
                        {ach.metric}
                      </span>
                    )}
                  </div>

                  <h4 className="text-sm font-bold text-white leading-snug">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                  {ach.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: Certifications Grid */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-electric-cyan" />
            <span>Verified Certifications & Skill Badges</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationItems.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-electric-purple/30 transition-all duration-300 backdrop-blur-sm space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-dark-850 border border-white/[0.08] text-electric-cyan">
                      {cert.issuer.includes('Google') ? (
                        <Cloud className="w-5 h-5 text-cyan-400" />
                      ) : (
                        <BrainCircuit className="w-5 h-5 text-electric-violet" />
                      )}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-electric-cyan font-medium">
                        {cert.issuer} • {cert.year}
                      </span>
                      <h4 className="text-base font-bold text-white tracking-tight leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {cert.verificationNote && (
                  <p className="text-xs text-slate-300 leading-relaxed bg-dark-950/60 p-3 rounded-xl border border-white/[0.04]">
                    {cert.verificationNote}
                  </p>
                )}

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.05]"
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
