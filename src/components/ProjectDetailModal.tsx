import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ShieldAlert, Cpu, Award, Globe, Github, Monitor, Layers, Image as ImageIcon, ArrowLeft } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0e1526] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d1322]/95 border-b border-slate-800 backdrop-blur-md">
          <div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              {project.category}
            </span>
            <h2 id="modal-project-title" className="text-lg sm:text-xl font-bold text-white tracking-tight mt-1">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto flex-1 text-slate-300 text-sm leading-relaxed">
          
          {/* Main Hero Cover Placeholder */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 mb-3 shadow-inner">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-white">{project.name}</h3>
            <p className="text-xs text-slate-400 mt-1 font-medium">Capa Principal da Aplicação</p>
            <span className="mt-2 text-[11px] px-3 py-1 rounded-full bg-slate-800/90 text-slate-400 border border-slate-700/60">
              Imagem do projeto será adicionada
            </span>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Status do Projeto</span>
              <p className="text-sm font-semibold text-emerald-400 flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{project.status}</span>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Categoria</span>
              <p className="text-sm font-semibold text-cyan-400">{project.category}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-1">
              <span className="text-xs text-slate-400 font-medium">Responsabilidade</span>
              <p className="text-sm font-semibold text-indigo-300">Desenvolvedor Principal</p>
            </div>
          </div>

          {/* Context & Short Description */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>Contexto do Projeto</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-base">{project.context}</p>
          </div>

          {/* My Role / Participation */}
          <div className="p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Minha Participação</span>
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed">{project.participation}</p>
          </div>

          {/* Problem Solved */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Problema Resolvido</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.problemSolved.map((prob, idx) => (
                <li key={idx} className="flex items-start space-x-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Funcionalidades Principais</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.mainFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Challenges */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Desafios Técnicos Enfrentados</span>
            </h3>
            <ul className="space-y-2">
              {project.technicalChallenges.map((ch, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-300 text-xs sm:text-sm">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
            <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Resultado da Solução</span>
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed">{project.result}</p>
          </div>

          {/* Technologies Stack */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Tecnologias Utilizadas</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-cyan-300 border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Gallery with Placeholders */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center space-x-2">
                <ImageIcon className="w-4 h-4 text-cyan-400" />
                <span>Galeria de Telas do Projeto</span>
              </h3>
              <span className="text-xs text-slate-400">{project.gallery.length} telas mapeadas</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((screen, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 flex flex-col justify-between"
                >
                  <div className="aspect-video w-full rounded-lg bg-slate-950 border border-slate-800/80 flex flex-col items-center justify-center p-3 text-center">
                    <ImageIcon className="w-6 h-6 text-slate-600 mb-1" />
                    <span className="text-xs font-semibold text-slate-300">{screen.screenTitle}</span>
                    <span className="text-[10px] text-slate-500 mt-1">Imagem do projeto será adicionada</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{screen.screenTitle}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{screen.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d1322] border-t border-slate-800">
          <button
            onClick={onClose}
            className="inline-flex items-center space-x-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 hover:text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <span className="text-xs text-slate-400 hidden sm:inline">
            Pressione Esc para fechar
          </span>
        </div>

      </div>
    </div>
  );
};
