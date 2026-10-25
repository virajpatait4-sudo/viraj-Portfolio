import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectPreview } from './ProjectPreviews';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Data Analytics & BI', 'Machine Learning'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block">
              Featured Work
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Projects & Engineering Work
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
              Real academic and personal implementations across machine learning and dimensional BI modeling.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                    : 'bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Consistent Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg group"
            >
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Visual Preview Graphic */}
                <ProjectPreview type={project.previewType} />

                {/* Category & Title */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-cyan-400 font-medium px-2 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Problem Statement & Summary */}
                <p className="text-xs text-slate-300 leading-relaxed bg-dark-950/60 p-3 rounded-xl border border-white/[0.04]">
                  {project.summary}
                </p>

                {/* Bullet Points from Resume */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                    Contributions:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {project.contributions.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark-950 text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Real Repository Link */}
              <div className="px-6 py-3.5 bg-dark-950/80 border-t border-white/[0.06] flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px]">
                  Source Code & Documentation
                </span>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-200 hover:text-white border border-white/[0.08] transition-colors font-medium text-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>View on GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
