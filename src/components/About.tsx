import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { User, Code2, Wrench, Database, Cpu, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Desenvolvimento Multiplataforma',
      description: 'Criação e manutenção de soluções para Web, Mobile (iOS e Android) e Desktop (Windows).',
    },
    {
      icon: Wrench,
      title: 'Evolução de Sistemas Reais',
      description: 'Atuação constante na correção de inconsistências, refatoração e implementação de novas regras de negócio.',
    },
    {
      icon: Database,
      title: 'Frontend, Backend e Dados',
      description: 'Compreensão completa do fluxo de software: interface, comunicação com APIs REST e persistência em banco de dados.',
    },
    {
      icon: Cpu,
      title: 'IA como Apoio Estratégico',
      description: 'Utilização responsável de ferramentas de inteligência artificial para otimizar pesquisas, refinamento e documentação.',
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
            Desenvolvedor focado em soluções práticas e confiáveis
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Conheça minha trajetória profissional, modo de trabalho e compromisso técnico com a entrega de software de qualidade.
          </p>
        </div>

        {/* Text & Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border border-slate-800">
              <p>
                Atuo profissionalmente há <strong className="text-white">aproximadamente quatro anos</strong> no desenvolvimento, suporte e manutenção de sistemas de software. Durante esse período, adquiri experiência prática na construção de aplicações <strong className="text-cyan-400">mobile, web e desktop</strong>, lidando diretamente com desafios reais de negócios e fluxos de trabalho do dia a dia.
              </p>
              <p>
                Minha atuação engloba tanto o <strong className="text-white">frontend</strong> quanto o <strong className="text-white">backend</strong>, cobrindo desde a estruturação visual e navegação do usuário até a integração com APIs RESTful, tratamento de regras de negócio e persistência em bancos de dados relacionais e serviços como Supabase.
              </p>
              <p>
                Tenho facilidade e disciplina para me adaptar a bases de código existentes, atuando na <strong className="text-white">investigação analítica de causa raiz de bugs</strong> para resolver falhas na origem e implementar melhorias sem interromper o funcionamento das operações existentes.
              </p>
              <p>
                Acredito que o verdadeiro valor da tecnologia está em criar soluções simples, estáveis e fáceis de usar. Para isso, utilizo <strong className="text-white">inteligência artificial como ferramenta de apoio</strong> para acelerar refinamentos e produtividade, mantendo sempre o rigor técnico, o controle sobre a arquitetura e a segurança do código.
              </p>
            </div>

            {/* Practical commitments */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 space-y-3">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Atuação Profissional Pautada Em</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300 pt-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Código limpo e sustentável</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Investigação rigorosa de causas raiz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pontualidade e responsabilidade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Foco no usuário final</span>
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
