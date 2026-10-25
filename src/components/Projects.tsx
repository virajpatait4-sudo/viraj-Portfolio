import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowUpRight, 
  Layers, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectPreview } from './ProjectPreviews';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Data Analytics & BI', 'Machine Learning', 'Full-Stack & Web'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-electric-cyan font-semibold">
              <FolderGit2 className="w-4 h-4" />
              <span>Verified Project Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Real engineering solutions built with statistical modeling, relational star schemas, and production frontend code—derived directly from my verified resume.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-electric-purple text-white shadow-lg shadow-electric-purple/25 border border-electric-purple'
                    : 'bg-dark-850 hover:bg-dark-800 text-slate-400 hover:text-white border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-electric-purple/40 shadow-xl hover:shadow-2xl hover:shadow-electric-purple/10 transition-all duration-300 flex flex-col justify-between overflow-hidden backdrop-blur-sm"
            >
              {/* Card Body */}
              <div className="p-6 space-y-5">
                
                {/* Visual Preview Graphic */}
                <div className="relative">
                  <ProjectPreview type={project.previewType} />
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-dark-950/80 hover:bg-electric-purple text-slate-300 hover:text-white border border-white/[0.1] backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200"
                    title="View Deep Dive"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Title & Category Badge */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-electric-cyan px-2.5 py-0.5 rounded-full bg-electric-cyan/10 border border-electric-cyan/20">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.technologies[0]} • {project.technologies[1]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-electric-violet transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Problem Statement Snippet */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-dark-950/50 p-3 rounded-xl border border-white/[0.04]">
                  <strong className="text-slate-200 font-semibold block text-[11px] uppercase tracking-wide mb-1 font-mono text-electric-cyan">
                    Objective & Scope:
                  </strong>
                  {project.problemStatement}
                </p>

                {/* Resume Bullets Highlights */}
                <div className="space-y-2">
                  <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                    Contributions (from Resume):
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.contributions.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-electric-purple shrink-0" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Badge Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-dark-850 text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer: Metrics & Actions */}
              <div className="px-6 py-4 bg-dark-950/70 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center space-x-1.5 text-xs font-semibold text-electric-cyan hover:text-white transition-colors group/btn"
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 hover:text-white text-xs font-medium border border-white/[0.08] transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep-dive details modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
