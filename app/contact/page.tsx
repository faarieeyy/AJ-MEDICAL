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
      {/* Top Header matching Picture 1 (Dark Transparent Header with active Contact link) */}
      <Header theme="dark" active="contact" transparent={true} />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-[#02182f] text-white -mt-20">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block">
            {/* Background Graphic from User (Picture 2 with technician hands and endoscopy apparatus) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/contact-hero-bg.webp"
                alt="AJ Medical Contact Us Hero Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Left Content Area matching Picture 1 */}
            <div className="absolute left-[6.45%] top-[20.5%] w-[45%] z-10 space-y-4">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] lg:text-xs xl:text-sm font-bold tracking-widest text-[#38bdf8] uppercase">
                  CONTACT US
                </span>
                <span className="w-10 lg:w-12 h-0.5 bg-slate-400/60 rounded-full inline-block" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                Get in Touch <br />
                <span className="text-[#38bdf8]">We&apos;re Here to Help</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-[430px] pt-1">
                Contact our team for service inquiries, product information, maintenance support, or a custom solution.
              </p>

              {/* Button */}
              <div className="pt-2">
                <a
                  href="#contact-form-section"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 lg:px-9 lg:py-4 rounded-full bg-white text-[#06162d] font-bold text-xs sm:text-sm lg:text-base hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-0.5"
                >
                  <span>Send a Message</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 pt-28 pb-16 space-y-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                CONTACT US
              </span>
              <span className="w-10 h-0.5 bg-slate-400/60 rounded-full inline-block" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-[1.12]">
              Get in Touch <br />
              <span className="text-[#38bdf8]">We&apos;re Here to Help</span>
            </h1>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Contact our team for service inquiries, product information, maintenance support, or a custom solution.
            </p>

            <div className="pt-2">
              <a
                href="#contact-form-section"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#06162d] font-bold text-sm hover:bg-slate-100 transition-all shadow-lg"
              >
                <span>Send a Message</span>
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: CONTACT INFORMATION CARDS (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-[#f0f6fc] text-[#06162d]" id="contact-info">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block">
            {/* Background Graphic from User (Picture 2 with 4 cards and circular icon badges) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/contact-info-bg.webp"
                alt="AJ Medical Contact Information Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Top Left Content Area */}
            {/* Eyebrow */}
            <div className="absolute left-[6.25%] top-[13.28%] z-10">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] lg:text-xs xl:text-sm font-bold tracking-widest text-[#38bdf8] uppercase">
                  CONTACT INFORMATION
                </span>
                <span className="w-10 lg:w-12 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
            </div>

            {/* Headline */}
            <div className="absolute left-[6.25%] top-[19.53%] z-10 max-w-[48%]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[46px] font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                Let&apos;s Connect <br />
                <span className="text-[#38bdf8]">With Our Team</span>
              </h2>
            </div>

            {/* Subtitle */}
            <div className="absolute left-[6.25%] top-[32.22%] z-10 max-w-[480px]">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                We&apos;re always ready to assist you. Reach out through any of the below channels.
              </p>
            </div>

            {/* 4 Cards Text (Positioned directly under the 4 baked circular icon badges) */}
            {/* Card 1: Call Us */}
            <div className="absolute left-[16.33%] top-[67.58%] -translate-x-1/2 z-10 text-center w-[21%]">
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#06162d] mb-1.5">
                Call Us
              </h3>
              <div className="space-y-0.5 text-xs sm:text-sm lg:text-base text-slate-600">
                <a href="tel:+971501234567" className="block hover:text-[#38bdf8] transition-colors">
                  +971 50 123 4567
                </a>
                <a href="tel:+97141234567" className="block hover:text-[#38bdf8] transition-colors">
                  +971 4 123 4567
                </a>
              </div>
            </div>

            {/* Card 2: Email Us */}
            <div className="absolute left-[39.05%] top-[67.58%] -translate-x-1/2 z-10 text-center w-[21%]">
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#06162d] mb-1.5">
                Email Us
              </h3>
              <div className="space-y-0.5 text-xs sm:text-sm lg:text-base text-slate-600">
                <a href="mailto:info@ajmedical.ae" className="block hover:text-[#38bdf8] transition-colors">
                  info@ajmedical.ae
                </a>
                <a href="mailto:sales@ajmedical.ae" className="block hover:text-[#38bdf8] transition-colors">
                  sales@ajmedical.ae
                </a>
              </div>
            </div>

            {/* Card 3: Our Location */}
            <div className="absolute left-[61.91%] top-[67.58%] -translate-x-1/2 z-10 text-center w-[21%]">
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#06162d] mb-1.5">
                Our Location
              </h3>
              <div className="space-y-0.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-snug">
                <span className="block">Warehouse No. 5,</span>
                <span className="block">Al Quoz Industrial Area,</span>
                <span className="block">Dubai, UAE</span>
              </div>
            </div>

            {/* Card 4: Working Hours */}
            <div className="absolute left-[83.96%] top-[67.58%] -translate-x-1/2 z-10 text-center w-[21%]">
              <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-[#06162d] mb-1.5">
                Working Hours
              </h3>
              <div className="space-y-0.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-snug">
                <span className="block">Mon - Sat</span>
                <span className="block">9:00 AM - 6:00 PM</span>
                <span className="block text-slate-400 text-[11px] lg:text-xs mt-0.5">(UAE Time)</span>
              </div>
            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 py-16 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  CONTACT INFORMATION
                </span>
                <span className="w-10 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#06162d] leading-[1.15]">
                Let&apos;s Connect <br />
                <span className="text-[#38bdf8]">With Our Team</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                We&apos;re always ready to assist you. Reach out through any of the below channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 Mobile */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2">
                  <Phone size={24} />
                </div>
                <h3 className="text-base font-bold text-[#06162d]">Call Us</h3>
                <div className="text-xs text-slate-600 space-y-1">
                  <a href="tel:+971501234567" className="block hover:text-[#38bdf8]">+971 50 123 4567</a>
                  <a href="tel:+97141234567" className="block hover:text-[#38bdf8]">+971 4 123 4567</a>
                </div>
              </div>

              {/* Card 2 Mobile */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2">
                  <Mail size={24} />
                </div>
                <h3 className="text-base font-bold text-[#06162d]">Email Us</h3>
                <div className="text-xs text-slate-600 space-y-1">
                  <a href="mailto:info@ajmedical.ae" className="block hover:text-[#38bdf8]">info@ajmedical.ae</a>
                  <a href="mailto:sales@ajmedical.ae" className="block hover:text-[#38bdf8]">sales@ajmedical.ae</a>
                </div>
              </div>

              {/* Card 3 Mobile */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2">
                  <MapPin size={24} />
                </div>
                <h3 className="text-base font-bold text-[#06162d]">Our Location</h3>
                <div className="text-xs text-slate-600">
                  <span className="block">Warehouse No. 5,</span>
                  <span className="block">Al Quoz Industrial Area,</span>
                  <span className="block">Dubai, UAE</span>
                </div>
              </div>

              {/* Card 4 Mobile */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-2">
                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mb-2">
                  <Clock size={24} />
                </div>
                <h3 className="text-base font-bold text-[#06162d]">Working Hours</h3>
                <div className="text-xs text-slate-600">
                  <span className="block">Mon - Sat</span>
                  <span className="block">9:00 AM - 6:00 PM</span>
                  <span className="block text-slate-400 text-[10px] mt-0.5">(UAE Time)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: SERVICE INQUIRY & INTERACTIVE MAP (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section id="contact-form-section" className="relative overflow-hidden w-full bg-[#f0f6fc] text-[#06162d] scroll-mt-20">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block select-none">
            {/* Background Graphic from User (Picture 2 with form card outline and satellite Dubai map) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/contact-form-bg.webp"
                alt="AJ Medical Service Inquiry and Dubai Map Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Success Notification Toast Overlay */}
            {submitSuccess && (
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 z-30 px-6 py-3 rounded-full bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2 animate-bounce">
                <CheckCircle2 size={18} />
                <span>Thank you! Your inquiry has been sent to our biomedical engineering desk.</span>
              </div>
            )}

            {/* Error Notification Toast Overlay */}
            {errorMessage && (
              <div className="absolute top-[2%] left-1/2 -translate-x-1/2 z-30 px-6 py-3 rounded-full bg-rose-600 text-white font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2">
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* -------------------------------------------------------------
                LEFT CARD: FORM (Matching Picture 1)
            ------------------------------------------------------------- */}
            {/* Form Eyebrow */}
            <div className="absolute left-[9.57%] top-[6.84%] z-10">
              <div className="flex items-center gap-2">
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold tracking-wider text-[#1e355c] uppercase">
                  SEND US A MESSAGE
                </span>
                <span className="w-8 lg:w-10 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
            </div>

            {/* Form Headline */}
            <div className="absolute left-[9.57%] top-[10.94%] z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[38px] font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                Service Inquiry <br />
                <span className="text-[#38bdf8]">or Get a Quote</span>
              </h2>
            </div>

            {/* Form Subtitle */}
            <div className="absolute left-[9.57%] top-[23.05%] z-10 max-w-[39%]">
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 leading-snug">
                Fill out the form and our team will get back to you as soon as possible.
              </p>
            </div>

            {/* Form Container with Real Interactive Controls */}
            <form onSubmit={handleSubmit} className="select-text">
              {/* Field 1: Full Name */}
              <label
                htmlFor="input-fullname"
                className="absolute left-[9.57%] top-[32.6%] z-10 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-semibold text-slate-700 cursor-pointer"
              >
                Full Name *
              </label>
              <div className="absolute left-[9.47%] top-[35.35%] w-[19.53%] h-[5.86%] z-10">
                <input
                  id="input-fullname"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent px-3.5 text-[11px] sm:text-xs lg:text-sm text-slate-800 placeholder:text-slate-400 font-normal focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Field 2: Company Name */}
              <label
                htmlFor="input-company"
                className="absolute left-[30.96%] top-[32.6%] z-10 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-semibold text-slate-700 cursor-pointer"
              >
                Company Name
              </label>
              <div className="absolute left-[30.86%] top-[35.35%] w-[19.04%] h-[5.86%] z-10">
                <input
                  id="input-company"
                  type="text"
                  name="company"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent px-3.5 text-[11px] sm:text-xs lg:text-sm text-slate-800 placeholder:text-slate-400 font-normal focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Field 3: Email Address */}
              <label
                htmlFor="input-email"
                className="absolute left-[9.57%] top-[43.9%] z-10 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-semibold text-slate-700 cursor-pointer"
              >
                Email Address *
              </label>
              <div className="absolute left-[9.47%] top-[46.68%] w-[19.53%] h-[5.86%] z-10">
                <input
                  id="input-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent px-3.5 text-[11px] sm:text-xs lg:text-sm text-slate-800 placeholder:text-slate-400 font-normal focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Field 4: Phone Number */}
              <label
                htmlFor="input-phone"
                className="absolute left-[30.96%] top-[43.9%] z-10 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-semibold text-slate-700 cursor-pointer"
              >
                Phone Number *
              </label>
              <div className="absolute left-[30.86%] top-[46.68%] w-[19.04%] h-[5.86%] z-10">
                <input
                  id="input-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent px-3.5 text-[11px] sm:text-xs lg:text-sm text-slate-800 placeholder:text-slate-400 font-normal focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-xl transition-all"
                />
              </div>

              {/* Field 5: Subject */}
              <label
                htmlFor="input-subject"
                className="absolute left-[9.57%] top-[55.5%] z-10 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-semibold text-slate-700 cursor-pointer"
              >
                Subject *
              </label>
              <div className="absolute left-[9.47%] top-[58.20%] w-[40.43%] h-[5.86%] z-10">
                <select
                  id="input-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent px-3.5 pr-8 text-[11px] sm:text-xs lg:text-sm text-slate-800 font-normal focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-xl cursor-pointer appearance-none transition-all"
                >
                  <option value="Flexible Endoscope Repair">Flexible Endoscope Repair</option>
                  <option value="Rigid Endoscope Repair">Rigid Endoscope Repair</option>
                  <option value="Karl Storz Camera & Light Source Repair">Karl Storz Camera & Light Source Repair</option>
                  <option value="Ultrasound Probe Repair">Ultrasound Probe Repair</option>
                  <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                  <option value="Equipment Pricing & Quote">Equipment Pricing & Quote</option>
                  <option value="General Technical Inquiry">General Technical Inquiry</option>
                </select>
              </div>

              {/* Field 6: Message */}
              <label
                htmlFor="input-message"
                className="absolute left-[9.57%] top-[66.6%] z-10 text-[10px] sm:text-[11px] lg:text-xs xl:text-sm font-semibold text-slate-700 cursor-pointer"
              >
                Message *
              </label>
              <div className="absolute left-[9.47%] top-[68.95%] w-[40.43%] h-[12.11%] z-10">
                <textarea
                  id="input-message"
                  name="message"
                  required
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-full bg-transparent px-3.5 py-2 text-[11px] sm:text-xs lg:text-sm text-slate-800 placeholder:text-slate-400 font-normal focus:outline-none focus:ring-2 focus:ring-sky-500/50 rounded-xl resize-none transition-all"
                />
              </div>

              {/* Submit Button (Covers the baked navy button completely) */}
              <div className="absolute left-[9.47%] top-[83.59%] w-[40.43%] h-[8.01%] z-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-full rounded-full bg-[#031733] hover:bg-[#072450] text-white font-bold text-xs sm:text-sm lg:text-base flex items-center justify-center gap-2 sm:gap-3 transition-all shadow-md group disabled:opacity-75 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* -------------------------------------------------------------
                RIGHT CARD: MAP (Matching Picture 1)
            ------------------------------------------------------------- */}
            {/* Map Eyebrow */}
            <div className="absolute left-[54.88%] top-[17.58%] z-10 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="text-[10px] lg:text-xs xl:text-sm font-bold tracking-widest text-slate-200 uppercase">
                  OUR LOCATION
                </span>
                <span className="w-8 lg:w-10 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
            </div>

            {/* Map Headline */}
            <div className="absolute left-[54.88%] top-[21.68%] z-10 pointer-events-none">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-[38px] font-extrabold tracking-tight text-white leading-[1.12]">
                Find Us <span className="text-[#38bdf8]">Here</span>
              </h2>
            </div>

            {/* Map Expand Button Trigger (Over the baked expand icon) */}
            <div className="absolute left-[89.65%] top-[17.19%] w-[3.42%] h-[6.84%] z-20">
              <a
                href="https://maps.google.com/?q=AJ+Medical+Equipment+Trading+Al+Quoz+Dubai"
                target="_blank"
                rel="noreferrer"
                title="Open location in Google Maps"
                className="w-full h-full rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
              />
            </div>

            {/* Road Label: Sheikh Zayed Rd */}
            <div className="absolute left-[60.45%] top-[41.5%] z-10 pointer-events-none">
              <span className="text-slate-300 font-medium text-[9px] sm:text-[10px] lg:text-xs tracking-wide -rotate-[33deg] select-none inline-block origin-center drop-shadow-sm">
                Sheikh Zayed Rd
              </span>
            </div>

            {/* Location Pin Badge: AJ Medical Equipment Trading */}
            <div className="absolute left-[74.61%] top-[47.2%] z-10 pointer-events-none">
              <div className="text-white leading-tight select-none">
                <span className="font-extrabold text-[10px] sm:text-xs lg:text-sm xl:text-[15px] block drop-shadow-sm">
                  AJ Medical
                </span>
                <span className="font-medium text-[9px] sm:text-[10px] lg:text-xs xl:text-sm text-slate-200 block drop-shadow-sm">
                  Equipment Trading
                </span>
              </div>
            </div>

            {/* Area Label below Pin: Al Quoz Industrial Area */}
            <div className="absolute left-[66.99%] top-[59.77%] z-10 pointer-events-none">
              <span className="text-slate-100 font-bold text-[10px] sm:text-xs lg:text-sm xl:text-base select-none drop-shadow-sm">
                Al Quoz Industrial Area
              </span>
            </div>

            {/* Road Label: Al Khail Rd */}
            <div className="absolute left-[82.03%] top-[67.97%] z-10 pointer-events-none">
              <span className="text-slate-300 font-medium text-[9px] sm:text-[10px] lg:text-xs tracking-wide -rotate-[61deg] select-none inline-block origin-center drop-shadow-sm">
                Al Khail Rd
              </span>
            </div>

            {/* City Label: Dubai */}
            <div className="absolute left-[88.09%] top-[73.63%] z-10 pointer-events-none">
              <span className="text-[#7dd3fc] font-extrabold text-xs sm:text-sm lg:text-lg xl:text-xl tracking-wider select-none drop-shadow-sm">
                Dubai
              </span>
            </div>
          </div>

          {/* =============================================================
              MOBILE FALLBACK CONTAINER (< md)
          ============================================================= */}
          <div className="md:hidden px-4 py-12 space-y-8">
            {/* Mobile Form Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-wider text-[#1e355c] uppercase">
                    SEND US A MESSAGE
                  </span>
                  <span className="w-8 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#06162d] leading-tight">
                  Service Inquiry <br />
                  <span className="text-[#38bdf8]">or Get a Quote</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pt-1">
                  Fill out the form and our team will get back to you as soon as possible.
                </p>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>Thank you! Your inquiry has been sent to our biomedical engineering desk.</span>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2">
                  <AlertCircle size={18} className="text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50"
                  >
                    <option value="Flexible Endoscope Repair">Flexible Endoscope Repair</option>
                    <option value="Rigid Endoscope Repair">Rigid Endoscope Repair</option>
                    <option value="Karl Storz Camera & Light Source Repair">Karl Storz Camera & Light Source Repair</option>
                    <option value="Ultrasound Probe Repair">Ultrasound Probe Repair</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    <option value="Equipment Pricing & Quote">Equipment Pricing & Quote</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#031733] hover:bg-[#072450] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={18} strokeWidth={2.5} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Mobile Location Card */}
            <div className="bg-[#031733] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
                      OUR LOCATION
                    </span>
                    <span className="w-8 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mt-1">
                    Find Us <span className="text-[#38bdf8]">Here</span>
                  </h3>
                </div>
                <a
                  href="https://maps.google.com/?q=AJ+Medical+Equipment+Trading+Al+Quoz+Dubai"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                  title="Open in Google Maps"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="font-bold text-white text-base">AJ Medical Equipment Trading</div>
                <p>Al Quoz Industrial Area, Dubai, United Arab Emirates</p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=AJ+Medical+Equipment+Trading+Al+Quoz+Dubai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#38bdf8] text-[#031733] font-bold text-xs hover:bg-[#60a5fa] transition-all"
                  >
                    <MapPin size={14} />
                    <span>View on Google Maps</span>
                  </a>
                  <a
                    href="https://wa.me/971501234567"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition-all"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: NEED IMMEDIATE ASSISTANCE? (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-[#f0f6fc] text-[#06162d]">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block select-none overflow-hidden">
            {/* Background Graphic from User (Picture 2 with headset on office desk) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/contact-cta-bg.webp"
                alt="Need Immediate Assistance AJ Medical"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Left Content Area matching Picture 1 coordinates */}
            <div className="absolute left-[6.54%] top-[20.31%] w-[42%] z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-3 lg:mb-4">
                <span className="text-[11px] lg:text-xs xl:text-sm font-bold tracking-widest text-[#38bdf8] uppercase">
                  NEED IMMEDIATE ASSISTANCE?
                </span>
                <span className="w-10 lg:w-12 h-0.5 bg-[#93c5fd] rounded-full inline-block" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#06162d] leading-[1.08] mb-3 lg:mb-4">
                Need Immediate <br />
                <span className="text-[#38bdf8]">Assistance?</span>
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm lg:text-base text-slate-500 leading-relaxed max-w-[380px] mb-6 lg:mb-8">
                For urgent service support or technical inquiries, contact our support team directly.
              </p>

              {/* Button */}
              <div>
                <a
                  href="tel:+97142285650"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 lg:px-10 lg:py-4 rounded-full bg-[#03173c] text-white font-bold text-xs sm:text-sm lg:text-base hover:bg-[#082860] transition-all shadow-xl hover:-translate-y-0.5 group"
                >
                  <span>Call Now</span>
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 py-16 space-y-6 relative z-10 bg-gradient-to-b from-white to-[#f0f6fc]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                NEED IMMEDIATE ASSISTANCE?
              </span>
              <span className="w-10 h-0.5 bg-[#93c5fd] rounded-full inline-block" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
              Need Immediate <br />
              <span className="text-[#38bdf8]">Assistance?</span>
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed max-w-md">
              For urgent service support or technical inquiries, contact our support team directly.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="tel:+97142285650"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#03173c] text-white font-bold text-sm hover:bg-[#082860] transition-all shadow-lg"
              >
                <PhoneCall size={17} />
                <span>Call Now: +971 4 228 5650</span>
              </a>

              <a
                href="https://wa.me/971501234567"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition-all shadow-md"
              >
                <MessageCircle size={17} />
                <span>WhatsApp</span>
              </a>
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
