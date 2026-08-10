import React from 'react';
import { differentiators } from '../data/portfolioData';
import { Award, Layout, GitBranch, Bug, Workflow, Server, Cpu, CheckCircle2 } from 'lucide-react';

export const Differentiators: React.FC = () => {
  const getDifferentiatorIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return Layout;
      case 'GitBranch':
        return GitBranch;
      case 'Bug':
        return Bug;
      case 'Workflow':
        return Workflow;
      case 'ServerHandshake':
      case 'Server':
        return Server;
      case 'Cpu':
        return Cpu;
      default:
        return Award;
    }
  };

  return (
    <section id="diferenciais" className="py-20 relative bg-[#0d1322]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Perfil Atitudinal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diferenciais Profissionais
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Postura técnica, comprometimento com o negócio e práticas de desenvolvimento refinadas no mercado.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => {
            const IconComp = getDifferentiatorIcon(diff.iconName);
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-500/20 text-cyan-400 w-fit">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {diff.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-cyan-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>Atuação prática comprovada</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
