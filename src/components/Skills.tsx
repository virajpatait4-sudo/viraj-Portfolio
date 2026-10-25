import React, { useState } from 'react';
import { 
  Code2, 
  Brain, 
  BarChart3, 
  Wrench, 
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'Code2': return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-purple-400" />;
      case 'BarChart3': return <BarChart3 className="w-5 h-5 text-amber-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      default: return <Code2 className="w-5 h-5 text-purple-400" />;
    }
  };

  const displayed = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <section id="skills" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
              Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Curated programming languages, databases, machine learning libraries, and tools from my coursework and project implementations.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : 'bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              All Skills
            </button>
            {skillGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveCategory(group.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeCategory === group.id
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {group.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 pb-3 border-b border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-dark-950 border border-white/[0.06]">
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

                <div className="space-y-2 pt-1">
                  {group.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-dark-950 border border-white/[0.04] flex items-center justify-between"
                    >
                      <span className="text-xs font-semibold text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/[0.03] px-2 py-0.5 rounded">
                        {skill.category}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
