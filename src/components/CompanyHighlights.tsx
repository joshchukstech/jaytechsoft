import React from 'react';
import { SunMedium, Zap, Cpu, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { COMPANY_HIGHLIGHTS } from '../data/companyData';

interface CompanyHighlightsProps {
  onHighlightClick?: (highlightId: string) => void;
}

export const CompanyHighlights: React.FC<CompanyHighlightsProps> = ({ onHighlightClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SunMedium':
        return <SunMedium className="w-6 h-6 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-emerald-600" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {COMPANY_HIGHLIGHTS.map((highlight) => (
          <div
            key={highlight.id}
            onClick={() => onHighlightClick && onHighlightClick(highlight.id)}
            className={`bg-white rounded-xl p-6 shadow-lg shadow-slate-200/50 border transition-all duration-200 hover:-translate-y-1 ${
              highlight.id === 'solar'
                ? 'border-emerald-300 ring-1 ring-emerald-500/20'
                : 'border-slate-200/80 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                {getIcon(highlight.icon)}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                {highlight.badge}
              </span>
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
              {highlight.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {highlight.description}
            </p>

            {onHighlightClick && (
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-800 cursor-pointer">
                <span>Learn more</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
