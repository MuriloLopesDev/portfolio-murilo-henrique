import React from 'react';
import { personalInfo, professionalLinks } from '../data/portfolioData';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { navigationLinks } from '../config/navigation';
import { getPreferredScrollBehavior } from '../utils/motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getPreferredScrollBehavior() });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: getPreferredScrollBehavior() });
    }
  };

  return (
    <footer className="bg-[#080c14] border-t border-slate-800/80 pt-12 pb-8 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              {personalInfo.name}
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              {personalInfo.role} — {personalInfo.locationShort}
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Navegação do rodapé" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium">
            {navigationLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Top Scroll */}
          <div className="flex items-center space-x-3">
            <a
              href={professionalLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={professionalLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={professionalLinks.email.url}
              className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              aria-label="E-mail"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg transition-all ml-2"
              aria-label="Voltar ao topo"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <p>© {currentYear} {personalInfo.name}. Todos os direitos reservados.</p>
          <p>Feito com React e TypeScript.</p>
        </div>

      </div>
    </footer>
  );
};
