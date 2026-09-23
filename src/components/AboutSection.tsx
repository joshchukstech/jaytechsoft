import React from 'react';
import { Building2, ShieldCheck, MapPin, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onLearnMoreServices?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreServices }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>About Our Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Committed to Practical Energy & Technology Solutions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dedicated engineering services based in Jos, Plateau State, Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual with Engineer / Solar Array */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <img
                src="/public/jaytechsoft3.webp"
                alt="Technical and Solar Engineering Inspection"
                className="w-full h-80 sm:h-96 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/90 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{COMPANY_INFO.legalName}</h3>
                    <p className="text-xs text-slate-600">
                      West of Mines, Jos • RC: {COMPANY_INFO.rcNumber}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative background glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Copy and Formal Company Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-slate-900 font-semibold">JayTechSoft Energy Solution Ltd</strong> is a technology and energy solutions company based in Jos, Plateau State, Nigeria. We provide professional solutions across solar energy, electrical services, technology, networking and security systems.
              </p>
              <p>
                Our goal is to provide reliable, practical and efficient solutions that help homes, businesses and organizations access dependable energy and modern technology.
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">Solar Power System Design & Setup</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">Inverter & Battery Storage Banks</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">Commercial & Home Electrical Wiring</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-800">Network Cabling & CCTV Surveillance</span>
              </div>
            </div>

            {/* Official Company Information Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-2">
                Official Company Verification
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-xs text-slate-500 block">Company Name</span>
                  <span className="font-bold text-slate-900">{COMPANY_INFO.legalName}</span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 block">Corporate Affairs (RC)</span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    RC: {COMPANY_INFO.rcNumber}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 block">Location</span>
                  <span className="font-semibold text-slate-900">
                    West of Mines, Jos, Plateau State, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {onLearnMoreServices && (
              <div className="pt-2">
                <button
                  onClick={onLearnMoreServices}
                  className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm group cursor-pointer"
                >
                  <span>Explore our specialized service offerings</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
