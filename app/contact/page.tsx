'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  PhoneCall,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function ContactPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: 'Flexible Endoscope Repair',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: 'Flexible Endoscope Repair',
      message: ''
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  const contactCards = [
    {
      title: 'Call Us Directly',
      desc: 'Toll-free hospital hotline & emergency on-call',
      icon: Phone,
      primaryAction: {
        label: '+971 4 228 5650',
        href: 'tel:+97142285650'
      },
      secondaryAction: {
        label: '+971 50 123 4567',
        href: 'tel:+971501234567'
      }
    },
    {
      title: 'Email Us',
      desc: 'Official inquiries & technical quote requests',
      icon: Mail,
      primaryAction: {
        label: 'info@ajmedicaltrading.com',
        href: 'mailto:info@ajmedicaltrading.com'
      },
      secondaryAction: {
        label: 'service@ajmedicaltrading.com',
        href: 'mailto:service@ajmedicaltrading.com'
      }
    },
    {
      title: 'Our Location',
      desc: 'Biomedical Service Center & Warehouse',
      icon: MapPin,
      primaryAction: {
        label: 'Al Quoz Industrial Area 3, Dubai, UAE',
        href: '#map-container'
      },
      secondaryAction: {
        label: 'P.O. Box 48721, Dubai, United Arab Emirates',
        href: '#map-container'
      }
    },
    {
      title: 'Working Hours',
      desc: 'Dedicated technical team schedule',
      icon: Clock,
      primaryAction: {
        label: 'Mon - Sat: 8:30 AM - 6:30 PM',
        href: '#contact-form-section'
      },
      secondaryAction: {
        label: '24/7 Emergency Hospital On-Call',
        href: 'tel:+971501234567'
      }
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      {/* Real Top Header (Light Theme) */}
      <Header theme="light" active="contact" />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO (Dark Navy)
        ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:py-28 bg-[#06162d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    GET IN TOUCH
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                  Get in Touch <br />
                  <span className="text-sky-400">We&apos;re Here to Help</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                  Have questions about our medical equipment servicing, endoscope repairs, or equipment procurement? Our biomedical support team is ready to assist your healthcare facility.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="#contact-form-section"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Send a Message</span>
                    <ArrowRight size={17} />
                  </a>

                  <a
                    href="tel:+97142285650"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/15 hover:bg-white/15 transition-all"
                  >
                    <PhoneCall size={16} className="text-sky-400" />
                    <span>+971 4 228 5650</span>
                  </a>
                </div>
              </div>

              {/* Right: Contact Support Specialist Photograph */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-tr from-[#091e3d] to-[#040e1e]">
                  <Image
                    src="/images/contact-headset.webp"
                    alt="AJ Medical Customer Support Specialist"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                  {/* Subtle inner overlay highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 CONTACT INFORMATION CARDS (White Rounded Top)
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d] rounded-t-[3rem] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mb-5 group-hover:bg-[#06162d] group-hover:text-white transition-colors">
                        <IconComponent size={22} />
                      </div>

                      <h3 className="text-lg font-bold text-[#06162d] mb-1">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-500 mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-4 border-t border-slate-200/60 text-xs sm:text-sm font-semibold">
                      <div>
                        <a
                          href={card.primaryAction.href}
                          className="text-sky-700 hover:text-sky-900 block truncate transition-colors"
                        >
                          {card.primaryAction.label}
                        </a>
                      </div>
                      <div>
                        <a
                          href={card.secondaryAction.href}
                          className="text-slate-600 hover:text-slate-900 block truncate transition-colors font-normal text-xs"
                        >
                          {card.secondaryAction.label}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: CONTACT FORM & INTERACTIVE MAP (Soft Gray Background)
        ========================================================================= */}
        <section id="contact-form-section" className="py-20 bg-slate-50 text-[#06162d] scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Real Interactive Form */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-2">
                    SEND AN INQUIRY
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06162d]">
                    Service Inquiry or Get a Quote
                  </h2>
                  <p className="text-slate-600 text-sm mt-1">
                    Fill out the form below. Our biomedical engineering desk will respond within 2-4 business hours.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-sm">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Thank you for your message!</span>
                      <p className="text-xs text-emerald-700 mt-0.5">
                        Your inquiry has been received. Our senior biomedical service specialist will contact you shortly.
                      </p>
                    </div>
                  </div>
                )}

                {errorMessage && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-sm">
                    <AlertCircle size={20} className="text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">Error</span>
                      <p className="text-xs text-rose-700 mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Ahmed Al-Mansoor"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm placeholder:text-slate-400 bg-white"
                      />
                    </div>

                    {/* Company / Hospital Name */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        Hospital / Company <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Emirates Hospital / Clinic"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm placeholder:text-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ahmed@hospital.ae"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm placeholder:text-slate-400 bg-white"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+971 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm placeholder:text-slate-400 bg-white"
                      />
                    </div>
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Service Category
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm bg-white"
                    >
                      <option value="Flexible Endoscope Repair">Flexible Endoscope Repair (Colonoscope / Gastroscope)</option>
                      <option value="Rigid Endoscope Repair">Rigid Endoscope Repair (Laparoscope / Arthroscope)</option>
                      <option value="Karl Storz Equipment Servicing">Karl Storz CCU, Light Source & Camera Repair</option>
                      <option value="Ultrasound Probe Repair">Ultrasound Probe & Transducer Repair</option>
                      <option value="Medical Equipment Supply">Medical Equipment Supply & Consumables</option>
                      <option value="Annual Maintenance Contract">Annual Maintenance Contract (AMC)</option>
                      <option value="General Inquiry">General Technical Inquiry</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                      Message / Equipment Model Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please specify equipment model, failure symptoms, or service requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 text-sm placeholder:text-slate-400 bg-white"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#06162d] text-white font-bold text-base hover:bg-sky-600 transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 pt-2">
                    Direct routing to AJ Medical Biomedical Desk &bull; Confidential & ISO-aligned
                  </p>
                </form>
              </div>

              {/* Right Column: Interactive Dubai Map & Quick Info */}
              <div id="map-container" className="lg:col-span-5 space-y-6">
                
                {/* Map Card */}
                <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-lg border border-slate-200 overflow-hidden">
                  <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-sky-600" />
                      <span className="text-sm font-bold text-[#06162d]">Dubai Service Facility</span>
                    </div>
                    <a
                      href="https://maps.google.com/?q=Al+Quoz+Industrial+Area+3+Dubai+UAE"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1"
                    >
                      <span>Google Maps</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Real Interactive Google Maps Embed */}
                  <div className="mt-3 relative w-full h-[320px] rounded-2xl overflow-hidden border border-slate-100">
                    <iframe
                      title="AJ Medical Location - Al Quoz Industrial Area 3, Dubai"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115624.45326553857!2d55.15878474246001!3d25.13284795909875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bb8bb8d070b%3A0xb35a3f1207e3ca03!2sAl%20Quoz%20Industrial%20Area%203%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="font-bold text-[#06162d] text-sm">Equipment Drop-Off & Pickup:</div>
                    <p>
                      Hospitals and clinics can courier or drop off endoscopes directly at our cleanroom reception counter. Same-day pickup is available throughout Dubai and Sharjah.
                    </p>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Card */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-6 shadow-md flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold">Fast WhatsApp Response</h3>
                    <p className="text-xs text-emerald-100 mt-1">
                      Direct chat with our duty biomedical engineer.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white text-emerald-800 font-bold text-xs hover:bg-emerald-50 transition-all shrink-0 flex items-center gap-1.5 shadow"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: IMMEDIATE ASSISTANCE CTA BANNER
        ========================================================================= */}
        <section className="py-20 bg-[#06162d] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-white/15 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="max-w-2xl space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  24/7 EMERGENCY ON-CALL
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Immediate Assistance
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  For critical operating theater breakdowns or emergency loaner scopes across the UAE, call our senior biomedical emergency hotline directly.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <a
                  href="tel:+97142285650"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <PhoneCall size={18} className="text-[#06162d]" />
                  <span>Call Now: +971 4 228 5650</span>
                </a>

                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all"
                >
                  <MessageCircle size={18} className="text-emerald-400" />
                  <span>WhatsApp Duty Desk</span>
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Real Shared Footer */}
      <Footer showNewsletter={false} />

      {/* Real Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService="General Contact Inquiry"
      />
    </div>
  );
}
