import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Trajetória Profissional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência Profissional
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Histórico de atuação com desenvolvimento de software, manutenção de ecossistemas e entrega de soluções em empresas de tecnologia.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-slate-800" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0">
                
                {/* Timeline Node Badge (Desktop) */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-lg text-cyan-400 z-10 flex-shrink-0 mr-6">
                  <Briefcase className="w-6 h-6" />
                </div>

                {/* Experience Card */}
                <div className="w-full glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-slate-700 transition-colors shadow-lg">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center space-x-3">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                            Atual
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-semibold text-sm mt-0.5">
                        {exp.role}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="pt-5 space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Responsabilidades e Atividades</span>
                    </h4>
                    
                    <ul className="grid grid-cols-1 gap-2.5">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="pt-6 border-t border-slate-800/80 mt-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-slate-400 mr-2 flex items-center space-x-1">
                        <Layers className="w-3.5 h-3.5 text-slate-400" />
                        <span>Tecnologias:</span>
                      </span>
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
