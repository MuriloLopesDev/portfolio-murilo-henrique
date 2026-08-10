import React from 'react';
import { personalInfo, professionalLinks, professionalPhoto } from '../data/portfolioData';
import { ArrowRight, Mail, Linkedin, Github, MapPin, CheckCircle2, Smartphone, Monitor, Globe } from 'lucide-react';
import { getPreferredScrollBehavior } from '../utils/motion';

export const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: getPreferredScrollBehavior() });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalInfo.availability}</span>
              </span>

              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/80 border border-slate-700/60 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold tracking-wide text-cyan-400 uppercase">
                {personalInfo.name}
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.role}
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl font-semibold text-slate-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "{personalInfo.heroSubtitle}"
            </p>

            {/* Short Description */}
            <p className="text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Multiplatform Capabilities Chips */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-medium text-slate-300">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span>Mobile (Flutter / Ionic)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Web (React / Angular / Laravel)</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                <Monitor className="w-4 h-4 text-sky-400" />
                <span>Desktop (Windows)</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-projects-btn"
                href="#projetos"
                onClick={(e) => handleScrollTo(e, 'projetos')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-950/40 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>Conheça meus projetos</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-contact-btn"
                href="#contato"
                onClick={(e) => handleScrollTo(e, 'contato')}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700/80 rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Entrar em contato</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-4">
              <a
                href={professionalLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-slate-800"
                aria-label="Perfil do LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={professionalLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-slate-800"
                aria-label="Perfil do GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={professionalLinks.email.url}
                className="inline-flex min-h-11 min-w-11 items-center justify-center p-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-slate-800"
                aria-label="Enviar e-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Profile Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Outer decorative card frame */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20 blur-lg opacity-70" />
              
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 space-y-6">
                
                {/* Professional photo card */}
                <div className="relative aspect-square max-w-[240px] mx-auto overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700/60 text-center shadow-inner group">
                  <img
                    src={professionalPhoto.src}
                    alt={professionalPhoto.alt}
                    width={professionalPhoto.width}
                    height={professionalPhoto.height}
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/75 to-transparent px-5 pb-5 pt-12">
                    <h3 className="text-white font-bold text-lg">{personalInfo.name}</h3>
                    <p className="text-slate-300 text-xs mt-0.5">{personalInfo.role}</p>
                  </div>
                </div>

                {/* Quick Highlights Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <span className="block text-xl font-extrabold text-cyan-400">{personalInfo.experienceLabel}</span>
                    <span className="text-[12px] text-slate-400 font-medium">Experiência Real</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                    <span className="block text-xl font-extrabold text-indigo-400">Full Stack</span>
                    <span className="text-[12px] text-slate-400 font-medium">Front, Back & Mobile</span>
                  </div>
                </div>

                {/* Core Strengths Bullet List */}
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Aplicações Web, Mobile e Desktop</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Manutenção e evolução de código legado</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Investigação analítica de causa raiz de bugs</span>
                  </li>
                </ul>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
