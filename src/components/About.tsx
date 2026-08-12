import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, Code2, Wrench, Database, Cpu, CheckCircle, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Web, mobile e desktop',
      description: 'Experiência no desenvolvimento e na manutenção de aplicações para diferentes plataformas.',
    },
    {
      icon: Wrench,
      title: 'Sistemas existentes',
      description: 'Leitura de código, correção de problemas e implementação de melhorias em projetos em andamento.',
    },
    {
      icon: Database,
      title: 'Frontend, backend e dados',
      description: 'Trabalho com interfaces, APIs, regras de negócio e bancos de dados.',
    },
    {
      icon: Cpu,
      title: 'Adaptação ao projeto',
      description: 'Uso diferentes tecnologias conforme a necessidade do sistema e do time.',
    },
  ];

  return (
    <section id="sobre" className="py-20 relative bg-[#0d1322]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Sobre Mim</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Uma trajetória entre suporte e desenvolvimento
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Minha experiência começou perto dos usuários e dos problemas do dia a dia antes de avançar para o desenvolvimento de aplicações.
          </p>
        </div>

        {/* Text & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800">
              <p>
                Comecei na área de tecnologia em <strong className="text-white">{personalInfo.careerStartYear}</strong>, trabalhando com suporte e infraestrutura. Esse período me deu contato direto com clientes, servidores, sistemas e problemas operacionais que precisavam ser acompanhados até a solução.
              </p>
              <p>
                Depois, passei a atuar profissionalmente com desenvolvimento de software. Desde então, trabalho com aplicações <strong className="text-cyan-400">web, mobile e desktop</strong>, criando funcionalidades e lidando com APIs, regras de negócio, bancos de dados e sistemas em produção.
              </p>
              <p>
                Hoje, boa parte do meu trabalho envolve entender código existente, investigar problemas e implementar mudanças com cuidado. Atuo no <strong className="text-white">frontend e no backend</strong> quando necessário, escolhendo as ferramentas de acordo com o contexto do projeto.
              </p>
            </div>

            {/* Practical commitments */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Como trabalho</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 pt-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Clareza na implementação</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Cuidado com sistemas em produção</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Comunicação sobre problemas e decisões</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Atenção à experiência de uso</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Focus Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800/80 flex items-start space-x-4"
                >
                  <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 flex-shrink-0 mt-0.5">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-white font-bold text-base">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
