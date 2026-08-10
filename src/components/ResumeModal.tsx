import React, { useEffect, useState } from 'react';
import { coreTechnologies, personalInfo, professionalLinks, resumeDocument } from '../data/portfolioData';
import { X, FileText, Download, Copy, Check, Briefcase, Award, MapPin, Mail } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `
${personalInfo.name} — ${personalInfo.experienceStatement}
Localização: ${personalInfo.location} (${personalInfo.availability})
E-mail: ${professionalLinks.email.address}
LinkedIn: ${professionalLinks.linkedin.url}
GitHub: ${professionalLinks.github.url}

Resumo Profissional:
${personalInfo.bio}

Principais Tecnologias:
${coreTechnologies.join(', ')}.
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0e1526] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d1322] border-b border-slate-800">
          <div className="flex items-center space-x-2.5 text-cyan-400 font-bold">
            <FileText className="w-5 h-5" />
            <h2 id="resume-modal-title" className="text-lg font-bold text-white">
              Currículo Profissional — {personalInfo.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1 text-slate-300 text-sm leading-relaxed">
          
          {/* Candidate Card */}
          <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-lg font-bold text-white">{personalInfo.name}</h3>
                <p className="text-xs text-cyan-400 font-semibold">{personalInfo.role} (desde {personalInfo.careerStartYear})</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-medium">
                {personalInfo.availability}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{professionalLinks.email.address}</span>
              </div>
            </div>
          </div>

          {/* Bio Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resumo de Atuação</span>
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              {personalInfo.bio}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span>Principais Competências Técnicas</span>
            </h4>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {coreTechnologies.map((item) => (
                <span key={item} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 text-cyan-300 border border-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-4 bg-[#0d1322] border-t border-slate-800">
          <button
            onClick={handleCopySummary}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
            <span>{copied ? 'Copiado para a área de transferência!' : 'Copiar Resumo'}</span>
          </button>

          <a
            href={resumeDocument.url}
            download={resumeDocument.filename}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-lg shadow-md transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Baixar Currículo em PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
};
