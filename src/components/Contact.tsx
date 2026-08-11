import React, { useState } from 'react';
import { personalInfo, professionalLinks } from '../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, Info } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copyEmailFeedback, setCopyEmailFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail para retorno: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `${professionalLinks.email.url}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    setCopiedEmail(false);

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error('Clipboard API indisponível');
      }

      await navigator.clipboard.writeText(professionalLinks.email.address);
      setCopiedEmail(true);
      setCopyEmailFeedback('E-mail copiado para a área de transferência.');
    } catch {
      setCopyEmailFeedback(
        'Não foi possível copiar o e-mail. Selecione o endereço e copie manualmente.',
      );
    }

    setTimeout(() => {
      setCopiedEmail(false);
      setCopyEmailFeedback('');
    }, 2500);
  };

  return (
    <section id="contato" className="py-20 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Vamos Conversar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Entre em Contato
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Estou aberto a novas oportunidades, projetos e conversas sobre tecnologia. Entre em contato para conhecer melhor meu trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Informações de Contato
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                {/* Email Item */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-slate-400 block font-medium">E-mail Profissional</span>
                    <a
                      href={professionalLinks.email.url}
                      className="text-white hover:text-cyan-400 font-semibold truncate block transition-colors"
                    >
                      {professionalLinks.email.address}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                    aria-label={copiedEmail ? 'E-mail copiado' : 'Copiar e-mail'}
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <span className="sr-only" aria-live="polite">
                    {copyEmailFeedback}
                  </span>
                </div>

                {/* Location Item */}
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-950 border border-indigo-500/30 text-indigo-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Localização</span>
                    <p className="text-white font-semibold">{personalInfo.location}</p>
                    <p className="text-xs text-emerald-400 mt-0.5 font-medium">{personalInfo.availability}</p>
                  </div>
                </div>

                {/* LinkedIn Item */}
                <a
                  href={professionalLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-sky-950 border border-sky-500/30 text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-400 block font-medium">LinkedIn</span>
                    <span className="block break-all sm:break-normal text-white group-hover:text-cyan-400 font-semibold transition-colors">
                      {professionalLinks.linkedin.label}
                    </span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={professionalLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="flex-shrink-0 p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-slate-400 block font-medium">GitHub</span>
                    <span className="block break-all sm:break-normal text-white group-hover:text-cyan-400 font-semibold transition-colors">
                      {professionalLinks.github.label}
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Visual Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Enviar Mensagem
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Preencha os campos abaixo para iniciar uma conversa diretamente com {personalInfo.name}.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300">
                        Seu Nome *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Maria Silva"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300">
                        Seu E-mail *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Ex: maria@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-300">
                      Assunto *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Oportunidade de Desenvolvedor Mobile / Web"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300">
                      Sua Mensagem *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva sua mensagem ou detalhes sobre a oportunidade..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Informational badge */}
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <Info className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>Ao continuar, seu cliente de e-mail será aberto com a mensagem preenchida. Nenhum dado é enviado diretamente pelo site.</span>
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Abrir no cliente de e-mail</span>
                  </button>
                </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
