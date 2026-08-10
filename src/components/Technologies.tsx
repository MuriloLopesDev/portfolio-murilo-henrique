import React from 'react';
import { techCategories } from '../data/portfolioData';
import { Cpu, Smartphone, Layout, Server, Database, Monitor, Wrench, CheckCircle } from 'lucide-react';

export const Technologies: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'mobile':
        return Smartphone;
      case 'frontend':
        return Layout;
      case 'backend':
        return Server;
      case 'banco de dados & serviços':
        return Database;
      case 'desktop':
        return Monitor;
      default:
        return Wrench;
    }
  };

  return (
    <section id="tecnologias" className="py-20 relative bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Ecossistema Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tecnologias & Ferramentas
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tecnologias utilizadas no desenvolvimento de soluções web, mobile e desktop no dia a dia profissional.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat, idx) => {
            const IconComp = getCategoryIcon(cat.title);
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 text-slate-200 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                      >
                        <CheckCircle className="w-3 h-3 text-cyan-400" />
                        <span>{item.name}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
