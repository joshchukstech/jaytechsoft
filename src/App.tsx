/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyHighlights } from './components/CompanyHighlights';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedSolarSection } from './components/FeaturedSolarSection';
import { HowWeWork } from './components/HowWeWork';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SolarEstimatorModal } from './components/SolarEstimatorModal';
import { ProjectModal } from './components/ProjectModal';
import { ProjectItem } from './types';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Solar Energy');
  const [quoteMessagePreset, setQuoteMessagePreset] = useState<string>('');
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const scrollToContact = (service?: string, customMessage?: string) => {
    if (service) {
      setSelectedServiceForQuote(service);
    }
    if (customMessage) {
      setQuoteMessagePreset(customMessage);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceSelectFromCards = (serviceTitle: string) => {
    scrollToContact(serviceTitle);
  };

  const handleApplyEstimate = (service: string, summary: string) => {
    setSelectedServiceForQuote(service);
    setQuoteMessagePreset(summary);
    scrollToContact(service, summary);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
      {/* Top sticky navigation bar */}
      <Header onQuoteClick={() => scrollToContact()} />

      {/* Main content body */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onRequestQuote={() => scrollToContact('Solar Energy')}
          onExploreServices={scrollToServices}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 2. Trust / Company Highlights */}
        <CompanyHighlights
          onHighlightClick={(id) => {
            if (id === 'solar') {
              const el = document.getElementById('solar');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            } else {
              scrollToServices();
            }
          }}
        />

        {/* 3. About JayTechSoft */}
        <AboutSection onLearnMoreServices={scrollToServices} />

        {/* 4. Services Section ("Our Solutions") */}
        <ServicesSection onSelectServiceForQuote={handleServiceSelectFromCards} />

        {/* 5. Featured Solar Energy Section */}
        <FeaturedSolarSection
          onTalkToExpert={() => scrollToContact('Solar Energy')}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* 6. How We Work (4-step process) */}
        <HowWeWork />

        {/* 7. Featured Projects Section */}
        <ProjectsSection
          onSelectProjectForQuote={(category) => scrollToContact(category)}
          onOpenProjectModal={(project) => setActiveProjectModal(project)}
        />

        {/* 8. Why Choose JayTechSoft */}
        <WhyChooseUs />

        {/* 9. Full-width Call to Action */}
        <CtaBanner onRequestQuote={() => scrollToContact()} />

        {/* 10. Contact & Request a Quote Form */}
        <ContactSection
          initialService={selectedServiceForQuote}
          initialMessage={quoteMessagePreset}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavClick={handleNavClick}
        onServiceClick={(serviceName) => scrollToContact(serviceName)}
      />

      {/* Floating Fast WhatsApp / Phone Quick-Action for Nigerian Mobile Users */}
      <aside aria-label="Quick contact" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`https://wa.me/2347039710652?text=Hello%20JayTechSoft,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl shadow-emerald-950/20 hover:scale-105 transition-all duration-200"
          title="Direct WhatsApp Inquiry"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">WhatsApp JayTechSoft</span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex sm:hidden items-center justify-center w-11 h-11 rounded-full bg-slate-900 text-white shadow-xl shadow-slate-950/20 hover:scale-105 transition-all"
          title="Call JayTechSoft"
        >
          <Phone className="w-5 h-5 text-emerald-400" />
        </a>
      </aside>

      {/* Interactive Solar Load Sizing Modal */}
      <SolarEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProjectModal}
        onClose={() => setActiveProjectModal(null)}
        onRequestSimilar={(category) => scrollToContact(category)}
      />
    </div>
  );
}
