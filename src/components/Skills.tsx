import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Brain, 
  BarChart3, 
  Layout, 
  Wrench, 
  Cloud,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 text-electric-cyan" />;
      case 'Brain': return <Brain className="w-5 h-5 text-electric-violet" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-electric-blue" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      default: return <Cpu className="w-5 h-5 text-electric-purple" />;
    }
  };

  const displayedGroups = activeTab === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.id === activeTab);

  return (
    <section id="skills" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
              <Cpu className="w-4 h-4" />
              <span>Competencies & Tooling</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Curated and verified skills from my academic coursework at VIT, project implementations, and professional certifications.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-electric-purple text-white shadow-lg shadow-electric-purple/20 border border-electric-purple'
                  : 'bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              All Categories
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveTab(group.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === group.id
                    ? 'bg-electric-purple text-white shadow-lg shadow-electric-purple/20 border border-electric-purple'
                    : 'bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {group.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-electric-purple/30 shadow-lg transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3 pb-3 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-dark-850 border border-white/[0.08]">
                    {getIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5 pt-1">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-dark-950/60 border border-white/[0.04] hover:border-white/[0.12] transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-cyan"></span>
                        <span className="text-xs font-semibold text-slate-200">
                          {skill.name}
                        </span>
                      </div>

                      {skill.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                          {skill.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Verified in Resume</span>
                <span className="text-emerald-400">VIT Vellore</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
