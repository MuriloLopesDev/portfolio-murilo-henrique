import React, { useCallback, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import { Differentiators } from './components/Differentiators';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [resumeTrigger, setResumeTrigger] = useState<HTMLButtonElement | null>(null);

  const openResumeModal = useCallback((trigger: HTMLButtonElement) => {
    setResumeTrigger(trigger);
    setIsResumeModalOpen(true);
  }, []);

  const closeResumeModal = useCallback(() => {
    setIsResumeModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-cyan-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Pular para o conteúdo
      </a>

      {/* Fixed Navigation Header */}
      <Header onOpenResumeModal={openResumeModal} />

      {/* Main Sections */}
      <main id="main-content" tabIndex={-1} className="flex-1">
        {/* 1. Hero / Apresentação Principal */}
        <Hero />

        {/* 2. Sobre Mim */}
        <About />

        {/* 3. Experiência Profissional */}
        <Experience />

        {/* 4. Projetos (Exclusivamente 2 Projetos) */}
        <Projects />

        {/* 5. Tecnologias */}
        <Technologies />

        {/* 6. Diferenciais Profissionais */}
        <Differentiators />

        {/* 7. Contato */}
        <Contact />
      </main>

      {/* Footer / Rodapé */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={closeResumeModal}
        returnFocusTo={resumeTrigger}
      />
    </div>
  );
}
