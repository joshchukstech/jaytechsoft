import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ArrowRight, Sun, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onQuoteClick: (service?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section for nav highlighting
      const sections = ['home', 'about', 'services', 'solar', 'projects', 'why-us', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Solar Solutions', href: '#solar' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Bar */}
      <div className={`bg-slate-900 text-slate-300 text-xs transition-all duration-300 border-b border-slate-800 ${
        isScrolled ? 'hidden md:block py-1.5 opacity-95' : 'py-2.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{COMPANY_INFO.address}, {COMPANY_INFO.state}</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-semibold border border-slate-700">
              <ShieldCheck className="w-3 h-3" />
              RC: {COMPANY_INFO.rcNumber}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium">{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-brand-link"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center shadow-md border border-slate-700 group-hover:border-emerald-500 transition-colors">
              <div className="relative">
                <Sun className="w-6 h-6 text-emerald-400 animate-pulse" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-slate-900" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-none">
                JAYTECHSOFT
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-widest text-emerald-600 uppercase mt-0.5">
                ENERGY SOLUTION LTD
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-semibold transition-colors relative py-1 ${
                    isActive
                      ? 'text-emerald-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onQuoteClick()}
              id="header-quote-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-sm hover:shadow transition-all duration-200 cursor-pointer active:scale-98"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onQuoteClick()}
              className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-xs font-semibold shadow-xs"
            >
              Get Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-semibold ${
                      isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 text-white font-semibold text-sm shadow-md"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-2 px-1">
                <span>RC: {COMPANY_INFO.rcNumber}</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 font-bold">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
