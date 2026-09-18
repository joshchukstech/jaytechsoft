import React from 'react';
import { Sun, Wrench, Laptop, Network, Camera, Leaf, Check, ArrowRight, Star } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sun':
        return <Sun className="w-6 h-6 text-emerald-600" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-emerald-600" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-emerald-600" />;
      case 'Network':
        return <Network className="w-6 h-6 text-emerald-600" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-emerald-600" />;
      case 'Leaf':
      default:
        return <Leaf className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Comprehensive solar energy, electrical engineering, technology, network, and security services tailored for homes, businesses, and institutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service: ServiceItem) => {
            const isSolar = service.isFeatured;

            return (
              <div
                key={service.id}
                className={`relative flex flex-col rounded-2xl transition-all duration-300 overflow-hidden ${
                  isSolar
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white shadow-xl ring-2 ring-emerald-500/80 -translate-y-1'
                    : 'bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300'
                }`}
              >
                {/* Visual Header Banner */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isSolar
                        ? 'bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent'
                        : 'bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent'
                    }`}
                  />
                  
                  {isSolar && (
                    <div className="absolute top-3 left-3 bg-emerald-500 text-slate-950 px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Star className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Primary Business Focus</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-md ${
                        isSolar
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-white text-emerald-600'
                      }`}
                    >
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3
                      className={`text-xl font-bold tracking-tight ${
                        isSolar ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {service.title}
                    </h3>
                    
                    <p
                      className={`text-sm leading-relaxed ${
                        isSolar ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="pt-3 border-t border-slate-100/10 space-y-2">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider block ${
                          isSolar ? 'text-emerald-400' : 'text-slate-500'
                        }`}
                      >
                        Included Services:
                      </span>
                      <ul className="space-y-1.5">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isSolar ? 'text-emerald-400' : 'text-emerald-600'
                              }`}
                            />
                            <span className={isSolar ? 'text-slate-200' : 'text-slate-700'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectServiceForQuote(service.title)}
                      className={`w-full py-2.5 px-4 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isSolar
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold shadow-md'
                          : 'bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200'
                      }`}
                    >
                      <span>Request Quote for {service.title.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
