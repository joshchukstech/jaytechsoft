import React from 'react';
import { Sun, Phone, Mail, MapPin, ShieldCheck, ArrowUp, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavClick: (href: string) => void;
  onServiceClick: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onServiceClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    'Solar Energy',
    'Electrical Services',
    'ICT Solutions',
    'Network Solutions',
    'CCTV & Security',
    'Renewable Energy',
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Corporate Overview (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                <Sun className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  JAYTECHSOFT
                </span>
                <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase mt-0.5">
                  ENERGY SOLUTION LTD
                </span>
              </div>
            </div>

            <p className="text-emerald-400 font-semibold text-xs tracking-wider uppercase">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Professional solar energy, electrical, technology, networking and security surveillance solutions tailored for homes, commercial setups, and organizations.
            </p>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-emerald-400 font-semibold text-xs border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>RC: {COMPANY_INFO.rcNumber}</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href);
                    }}
                    className="hover:text-emerald-400 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onServiceClick(s)}
                    className="hover:text-emerald-400 transition-colors text-left block py-0.5 text-slate-400 hover:underline cursor-pointer"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}, {COMPANY_INFO.state}, {COMPANY_INFO.country}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-400 text-slate-300 font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-400 text-slate-300">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/2347039710652`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Quick WhatsApp Inquiry</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Subfooter */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 flex-wrap text-slate-500">
            <span>© 2026 JayTechSoft Energy Solution Ltd. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>RC: {COMPANY_INFO.rcNumber}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500">Professional Business Presentation</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
