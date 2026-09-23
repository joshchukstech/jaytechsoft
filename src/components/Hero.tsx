import React from 'react';
import { ArrowRight, Sun, Zap, ShieldCheck, MapPin, CheckCircle, Calculator } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreServices: () => void;
  onOpenEstimator?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onRequestQuote,
  onExploreServices,
  onOpenEstimator,
}) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900 text-white">
      {/* Background Layer with Subtle Grid & High Quality Solar Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
          alt="Professional Solar Energy Installation"
          className="w-full h-full object-cover object-center opacity-25"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Indicator / Location Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-xs">
              <span className="flex items-center gap-1">
                <Sun className="w-4 h-4 text-emerald-400 animate-spin-slow" />
                <strong className="text-white font-semibold">Professional Solar Energy Services</strong>
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Serving Jos, Plateau State & Beyond
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Powering a Smarter, <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Connected Future.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
              Professional solar energy, electrical, technology and network solutions designed to power homes, businesses and organizations.
            </p>

            {/* Primary & Secondary Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestQuote}
                id="hero-request-quote-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-base shadow-lg shadow-emerald-900/30 transition-all duration-200 cursor-pointer active:scale-98"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                id="hero-explore-services-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Incorporation</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">RC: {COMPANY_INFO.rcNumber}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Primary Focus</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">Solar Power Systems</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Head Office</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">West of Mines, Jos</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-800/80 border border-slate-700/80 p-5 shadow-2xl backdrop-blur-md overflow-hidden group">
              
              {/* Image Frame */}
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden mb-5">
                <img
                  src="/public/jaytechsoft logo.webp"
                  alt="High Efficiency Solar Panels Under Direct Sun"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Floating badge inside image */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700 text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    Clean & Reliable Power
                  </span>
                  <span className="text-emerald-400 font-bold">Plateau State, Nigeria</span>
                </div>
              </div>

              {/* Engineering Scope Pills */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold uppercase tracking-wider text-slate-300">Engineering Capabilities</span>
                  <span className="text-emerald-400 font-medium">Integrated Solutions</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-medium">Solar PV Installations</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-slate-200 font-medium">Inverter & Battery Banks</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                    <span className="text-slate-200 font-medium">Electrical Distribution</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-700/60 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                    <span className="text-slate-200 font-medium">Network & CCTV Security</span>
                  </div>
                </div>

                {/* Quick Estimator Tool Trigger Button */}
                {onOpenEstimator && (
                  <button
                    onClick={onOpenEstimator}
                    className="w-full mt-2 py-2.5 px-3 rounded-lg bg-slate-900/90 hover:bg-slate-700/90 border border-emerald-500/40 text-emerald-300 hover:text-emerald-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calculator className="w-4 h-4 text-emerald-400" />
                    <span>Quick Solar Load Sizing Helper</span>
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
