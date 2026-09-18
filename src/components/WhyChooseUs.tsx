import React from 'react';
import { CheckCircle2, Shield, Zap, Boxes, HeartHandshake, MapPin } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-emerald-600" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake':
      default:
        return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose JayTechSoft?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We focus on technical precision, practical engineering, and dependable service delivery across Plateau State and beyond.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                index === 2
                  ? 'bg-slate-900 text-white border-slate-800 shadow-lg md:col-span-2 lg:col-span-1'
                  : 'bg-slate-50/70 border-slate-200/80 text-slate-900 hover:bg-white hover:shadow-md'
              }`}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                    index === 2
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  }`}
                >
                  {getIcon(item.icon)}
                </div>

                <h3
                  className={`text-lg font-bold mb-2.5 ${
                    index === 2 ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    index === 2 ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/30 text-xs font-medium text-slate-400">
                <span>Value Pillar 0{index + 1}</span>
              </div>
            </div>
          ))}

          {/* Location & Support Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-5 text-white">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Accessible Local Presence
              </h3>
              <p className="text-sm text-emerald-50 leading-relaxed">
                Directly accessible in Jos, Plateau State for rapid site consultations, inspections, routine system maintenance, and prompt technical support.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 text-xs font-medium text-emerald-100">
              {COMPANY_INFO.address}, Jos
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
