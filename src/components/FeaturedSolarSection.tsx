import React from 'react';
import { Sun, Layers, Hammer, BatteryCharging, ShieldCheck, ArrowRight, PhoneCall, CheckCircle, Calculator } from 'lucide-react';
import { SOLAR_SPECIALTIES, COMPANY_INFO } from '../data/companyData';

interface FeaturedSolarSectionProps {
  onTalkToExpert: () => void;
  onOpenEstimator?: () => void;
}

export const FeaturedSolarSection: React.FC<FeaturedSolarSectionProps> = ({
  onTalkToExpert,
  onOpenEstimator,
}) => {
  const getSpecialtyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-emerald-400" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-emerald-400" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="solar" className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
            <Sun className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dedicated Solar Energy Practice</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional Solar Energy Solutions
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From system assessment and design to installation and maintenance, JayTechSoft provides practical solar energy solutions tailored to the energy needs of homes, businesses and organizations.
          </p>
        </div>

        {/* 4 Visual Solar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {SOLAR_SPECIALTIES.map((spec, index) => (
            <div
              key={index}
              className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-5 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-colors">
                  {getSpecialtyIcon(spec.icon)}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {spec.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {spec.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-xs text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {spec.details}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout & Action Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border border-slate-700/80 p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Planning a Solar or Inverter Setup for Your Property?
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              Get an accurate load assessment based on your appliances, required backup hours, and budget. Our technicians serve Jos, Plateau State, and surrounding areas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {onOpenEstimator && (
              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 hover:text-emerald-300 font-semibold text-sm border border-slate-700 transition-colors cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Load Sizing</span>
              </button>
            )}

            <button
              onClick={onTalkToExpert}
              id="talk-to-solar-expert-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer active:scale-98"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to a Solar Expert</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
