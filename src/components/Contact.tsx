import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, Info } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-cyan-400 font-semibold truncate block transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                    title="Copiar e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
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
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-sky-950 border border-sky-500/30 text-sky-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">LinkedIn</span>
                    <span className="text-white group-hover:text-cyan-400 font-semibold transition-colors">
                      in/murilo-henrique
                    </span>
                  </div>
                </a>

                {/* GitHub Item */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">GitHub</span>
                    <span className="text-white group-hover:text-cyan-400 font-semibold transition-colors">
                      github.com/murilopes007
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
                  Preencha os campos abaixo para iniciar uma conversa diretamente com Murilo Henrique.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-center space-y-3 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Mensagem Registrada!</h4>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Obrigado pelo contato! Nesta versão demonstrativa do portfólio, o formulário é visual.
                  </p>
                  <p className="text-xs text-cyan-300 pt-2 border-t border-cyan-900/60">
                    A funcionalidade de envio automático de e-mails será configurada posteriormente no servidor. Para um contato imediato, envie um e-mail para <strong className="text-white">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
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
                    <span>A funcionalidade de envio direto por formulário será integrada ao serviço de e-mail posteriormente.</span>
                  </div>

                  <button
                    id="submit-contact-btn"
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
