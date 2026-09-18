import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Send, CheckCircle2, MessageSquare, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  initialService?: string;
  initialMessage?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = 'Solar Energy',
  initialMessage = '',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: initialService,
    message: initialMessage,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Synchronize when initialService or initialMessage change externally
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message ? `${prev.message}\n\n${initialMessage}` : initialMessage,
      }));
    }
  }, [initialMessage]);

  const serviceOptions = [
    'Solar Energy',
    'Electrical Services',
    'ICT/Technology',
    'Networking',
    'CCTV & Security',
    'Renewable Energy',
    'Other',
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter a valid phone number (e.g., 07039710652)';
    } else if (formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid contact number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your property, requirement or project';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable frontend response for demo
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomCode = Math.floor(1000 + Math.random() * 9000);
      setReferenceId(`JTS-${randomCode}`);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      serviceRequired: 'Solar Energy',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Reach out directly for project inquiries, system assessments, or technical consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Card & Direct Reach */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Company Contact Information
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Direct Phone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500 block">Available for calls & site consultation scheduling</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-slate-500 block">Official communications & RFQs</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Office Address
                    </span>
                    <address className="not-italic text-base font-bold text-slate-900 leading-snug">
                      West of Mines, Jos 930105,<br />
                      Plateau State, Nigeria
                    </address>
                  </div>
                </div>

                {/* RC Registration Number */}
                <div className="flex items-start gap-4 pt-2 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      Corporate Registration
                    </span>
                    <span className="text-sm font-extrabold text-slate-900">
                      RC: {COMPANY_INFO.rcNumber}
                    </span>
                    <span className="text-xs text-slate-500 block">Incorporated Under Nigerian Law</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action for Fast Communication */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/2347039710652?text=Hello%20JayTechSoft,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp ({COMPANY_INFO.phone})</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Notice */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Monday – Saturday: 8:00 AM – 6:00 PM • Prompt technical response across Jos</span>
            </div>

          </div>

          {/* Right Column: Request a Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              
              {isSubmitted ? (
                <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                      Request Logged: {referenceId}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Thank You, {formData.fullName.split(' ')[0]}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Your request for <strong>{formData.serviceRequired}</strong> has been received by our engineering desk. A JayTechSoft specialist will review your requirements and reach out via phone or email shortly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-1.5 max-w-md mx-auto">
                    <div><strong>Contact:</strong> {formData.phoneNumber} ({formData.email})</div>
                    <div><strong>Service:</strong> {formData.serviceRequired}</div>
                    <div className="truncate"><strong>Message:</strong> {formData.message}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm inline-flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Direct Call to Expedite</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Request a Quote or Consultation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below and our team will get back to you with solution advice.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="e.g. John Doe / Engr. Musa"
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.fullName
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData({ ...formData, phoneNumber: e.target.value });
                          if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: undefined });
                        }}
                        placeholder="e.g. 07039710652"
                        className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.phoneNumber
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                            : 'border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service Required <span className="text-emerald-600">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm bg-white focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 appearance-none font-medium text-slate-800"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Project Details <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Describe your property type, load requirements (e.g., inverters, fans, fridges, computers), or specific technical scope..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none transition-colors ${
                        errors.message
                          ? 'border-red-400 bg-red-50/30 focus:border-red-500'
                          : 'border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="contact-submit-btn"
                      className="w-full py-3.5 px-6 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processing Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-2">
                      Serving Jos, Plateau State and nearby territories • RC: {COMPANY_INFO.rcNumber}
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
