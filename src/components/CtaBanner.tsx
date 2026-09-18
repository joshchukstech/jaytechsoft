import React from 'react';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface CtaBannerProps {
  onRequestQuote: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onRequestQuote }) => {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
            Get Started Today
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Ready to Power Your Future?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your energy, technology, networking or security needs.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onRequestQuote}
            id="cta-request-quote-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-950/40 transition-all duration-200 cursor-pointer active:scale-98"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            id="cta-call-phone-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-5 h-5 text-emerald-400" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

        <div className="text-xs text-slate-400 pt-2">
          <span>Office: {COMPANY_INFO.address}, Jos, Plateau State • Registered: RC {COMPANY_INFO.rcNumber}</span>
        </div>

      </div>
    </section>
  );
};
