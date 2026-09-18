import React from 'react';
import { MessageSquareText, ClipboardCheck, Settings, LifeBuoy, ArrowRight } from 'lucide-react';
import { WORK_PROCESS } from '../data/companyData';

export const HowWeWork: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquareText':
        return <MessageSquareText className="w-6 h-6 text-emerald-600" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-emerald-600" />;
      case 'Settings':
        return <Settings className="w-6 h-6 text-emerald-600" />;
      case 'LifeBuoy':
      default:
        return <LifeBuoy className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Work
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A methodical 4-step workflow ensuring every installation meets your exact functional and safety standards.
          </p>
        </div>

        {/* 4-Step Connected Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {WORK_PROCESS.map((item, index) => (
            <div key={item.step} className="relative flex flex-col items-start bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              
              {/* Step indicator header */}
              <div className="w-full flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                  {getStepIcon(item.icon)}
                </div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-700/80">
                  {item.step}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Step connector arrow for desktop */}
              {index < WORK_PROCESS.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
