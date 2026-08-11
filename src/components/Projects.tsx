import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { FolderGit2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selection, setSelection] = useState<{
    project: Project;
    trigger: HTMLButtonElement;
  } | null>(null);

  return (
    <section id="projetos" className="py-20 relative bg-[#0d1322]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Projetos em Destaque</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projetos Selecionados
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aplicações desenvolvidas para atender necessidades reais de usuários e clientes, com foco em estabilidade, design e usabilidade.
          </p>
        </div>

        {/* Projects Grid (Exclusively 2 Projects) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Project Cover */}
                <div className="relative aspect-video w-full bg-slate-900 border-b border-slate-800/80 overflow-hidden">
                  <img
                    src={proj.coverImage.src}
                    alt={proj.coverImage.alt}
                    width={proj.coverImage.width}
                    height={proj.coverImage.height}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cyan-950/90 text-cyan-400 border border-cyan-500/30">
                    {proj.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {proj.shortDescription}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Principais Destaques
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {proj.caseStudy.features.slice(0, 3).map((feat) => (
                        <li key={feat} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 bg-slate-900/40">
                <button
                  id={`project-details-btn-${proj.id}`}
                  onClick={(event) => setSelection({ project: proj, trigger: event.currentTarget })}
                  className="w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <span>Ver detalhes do projeto</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selection?.project ?? null}
        onClose={() => setSelection(null)}
        returnFocusTo={selection?.trigger ?? null}
      />
    </section>
  );
};
