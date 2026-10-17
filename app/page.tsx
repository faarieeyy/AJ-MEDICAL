'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import {
  ShieldCheck,
  Wrench,
  Users,
  ArrowRight,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Headphones,
  CheckCircle2,
  Tv,
  Activity,
  Layers,
  Gem,
  Building2,
  Globe2
} from 'lucide-react';

export default function HomePage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Get a Free Consultation');
  const [serviceOffset, setServiceOffset] = useState(0);

  const openConsult = (title = 'Get a Free Consultation') => {
    setModalTitle(title);
    setIsConsultOpen(true);
  };

  const services = [
    {
      title: 'Flexible Endoscope Repair',
      href: '/services/endoscopy-repair',
      image: '/images/flexible-endoscope.webp',
      badgeIcon: Layers,
      desc: 'Precision repair for video and fiber colonoscopes and gastroscopes.'
    },
    {
      title: 'Rigid Endoscope Repair',
      href: '/services/endoscopy-repair',
      image: '/images/rigid-endoscope.webp',
      badgeIcon: Activity,
      desc: 'Optical realignment, rod lens restoration and seal integrity checks.'
    },
    {
      title: 'Karl Storz Equipment Servicing',
      href: '/services',
      image: '/images/storz-equipment.webp',
      badgeIcon: Tv,
      desc: 'Maintenance and diagnostics for Storz light sources, CCUs and camera heads.'
    },
    {
      title: 'Ultrasound Probe Repair',
      href: '/services',
      image: '/images/ultrasound-probe.webp',
      badgeIcon: Wrench,
      desc: 'Transducer crystal repair, lens recoating and acoustic test calibration.'
    }
  ];

  const hospitalLogos = [
    { name: 'Zulekha Hospital', src: '/images/hospital-zulekha.webp' },
    { name: 'Mediclinic', src: '/images/hospital-mediclinic.webp' },
    { name: 'Kanad Hospital', src: '/images/hospital-kanad.webp' },
    { name: 'NMC Healthcare', src: '/images/hospital-nmc.webp' },
    { name: 'Aster Hospital', src: '/images/hospital-aster.webp' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Real Top Header */}
      <Header theme="light" active="home" />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO (With Custom Hero Background Picture)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[580px] lg:min-h-[660px] flex items-center bg-white">
          {/* Background Hero Picture */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/home-hero-bg.webp"
              alt="Medical Equipment Servicing Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
            {/* Soft gradient blend for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 space-y-6 max-w-2xl">
                <div className="inline-block">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    MEDICAL EQUIPMENT SERVICING & SOLUTIONS
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#06162d] tracking-tight leading-[1.12]">
                  Keeping <br />
                  <span className="text-sky-500">Healthcare</span> <br />
                  Running
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                  Reliable servicing, repairs, and supply solutions for hospitals and clinics across the UAE and beyond.
                </p>

                {/* Hero CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => openConsult('Get a Free Consultation')}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#06162d] text-white font-semibold text-sm sm:text-base hover:bg-[#0c2b57] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Get a Free Consultation</span>
                    <ArrowRight size={17} />
                  </button>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 text-[#06162d] font-semibold text-sm sm:text-base hover:bg-white hover:border-slate-300 transition-all shadow-sm hover:shadow"
                  >
                    <span>Explore Services</span>
                    <ArrowRight size={17} />
                  </Link>
                </div>

                {/* Trust Badges */}
                <div className="pt-8 border-t border-slate-200/60 flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-full bg-sky-50 text-sky-600">
                      <ShieldCheck size={18} />
                    </div>
                    <span>Trusted by Hospitals</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-full bg-sky-50 text-sky-600">
                      <Wrench size={18} />
                    </div>
                    <span>Expert Technicians</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-full bg-sky-50 text-sky-600">
                      <Users size={18} />
                    </div>
                    <span>UAE • GCC • Global Support</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Empty spacer so the background artwork shines through */}
              <div className="hidden lg:block lg:col-span-5" />

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SERVICES OVERVIEW
        ========================================================================= */}
        <section className="py-20 bg-white" id="services-overview">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                  OUR SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06162d] mt-2">
                  Expert Care <span className="text-sky-500">for Critical Equipment</span>
                </h2>
              </div>

              {/* Carousel Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setServiceOffset((prev) => (prev > 0 ? prev - 1 : 1))}
                  className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                  aria-label="Previous service"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setServiceOffset((prev) => (prev < 1 ? prev + 1 : 0))}
                  className="w-11 h-11 rounded-full bg-[#06162d] text-white flex items-center justify-center hover:bg-[#0c2b57] transition-colors shadow-sm"
                  aria-label="Next service"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((item, idx) => {
                const IconComponent = item.badgeIcon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group flex flex-col bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    {/* Photographic Card Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {/* Floating Icon Circle */}
                      <div className="absolute bottom-3 left-4 w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-sky-600 border border-slate-50 group-hover:bg-sky-50 transition-colors">
                        <IconComponent size={20} />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-base font-bold text-[#06162d] group-hover:text-sky-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-4 flex items-center justify-end text-[#06162d] group-hover:text-sky-500 transition-colors">
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHY CHOOSE AJ MEDICAL (A Partner You Can Trust)
        ========================================================================= */}
        <section className="relative overflow-hidden py-24 bg-white" id="why-choose-us">
          {/* Background Image: Soft Flowing Wave Ribbons in Exact Quality WebP */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/why-choose-bg.webp"
              alt="Medical abstract wave background"
              fill
              priority
              className="object-cover object-bottom w-full h-full"
              sizes="100vw"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header: Left Headline and Right Description */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-16">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                  WHY CHOOSE AJ MEDICAL
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06162d] mt-3 tracking-tight">
                  A Partner <span className="text-sky-500">You Can Trust</span>
                </h2>
              </div>

              <div className="max-w-md lg:text-left">
                <div className="w-12 h-0.5 bg-sky-400 mb-3" />
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  We are committed to delivering reliable solutions, expert support, and long-term value for healthcare providers.
                </p>
              </div>
            </div>

            {/* 4 Feature Columns with Vertical Dividers */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
              
              {/* Feature 1: Quality Service */}
              <div className="flex flex-col items-center text-center p-6 lg:py-4 lg:px-6 lg:border-r border-slate-200/80 group">
                <div className="w-20 h-20 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Gem size={32} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#06162d] mb-3">
                  Quality Service
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[230px] mx-auto">
                  High-quality servicing and genuine parts for longer equipment life.
                </p>
              </div>

              {/* Feature 2: Reliable Solutions */}
              <div className="flex flex-col items-center text-center p-6 lg:py-4 lg:px-6 lg:border-r border-slate-200/80 group">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck size={32} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#06162d] mb-3">
                  Reliable Solutions
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[230px] mx-auto">
                  End-to-end solutions tailored for hospitals and clinics.
                </p>
              </div>

              {/* Feature 3: Expert Team */}
              <div className="flex flex-col items-center text-center p-6 lg:py-4 lg:px-6 lg:border-r border-slate-200/80 group">
                <div className="w-20 h-20 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Users size={32} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#06162d] mb-3">
                  Expert Team
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[230px] mx-auto">
                  Trained and certified technicians with industry experience.
                </p>
              </div>

              {/* Feature 4: Ongoing Support */}
              <div className="flex flex-col items-center text-center p-6 lg:py-4 lg:px-6 group">
                <div className="w-20 h-20 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Headphones size={32} strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold text-[#06162d] mb-3">
                  Ongoing Support
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-[230px] mx-auto">
                  Dedicated support whenever you need assistance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: TRUSTED BY LEADING HEALTHCARE FACILITIES
        ========================================================================= */}
        <section className="relative overflow-hidden py-24 bg-white" id="clients">
          {/* Background Image: Soft Flowing Wave Ribbons in Exact Quality WebP */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/hospitals-trust-bg.webp"
              alt="Medical background wave texture"
              fill
              priority
              className="object-cover object-bottom w-full h-full"
              sizes="100vw"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header: Title and Navigation Arrows */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                  TRUSTED BY LEADING HEALTHCARE FACILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06162d] mt-2 tracking-tight">
                  Hospitals That <span className="text-sky-500">Trust Us</span>
                </h2>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  className="w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all shadow-sm"
                  aria-label="Previous hospital partners"
                >
                  <ArrowLeft size={18} strokeWidth={2.2} />
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-[#06162d] hover:bg-[#0c2b57] text-white flex items-center justify-center transition-all shadow-md"
                  aria-label="Next hospital partners"
                >
                  <ArrowRight size={18} strokeWidth={2.2} />
                </button>
              </div>
            </div>

            {/* Hospital Logos 5-Card Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7">
              {hospitalLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="h-28 sm:h-32 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 flex items-center justify-center p-6 relative group hover:-translate-y-1"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={client.src}
                      alt={client.name}
                      fill
                      className="object-contain p-1 group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ABOUT AJ MEDICAL (Committed to a Healthier Tomorrow)
        ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white relative overflow-hidden" id="about-section">
          {/* Subtle decorative background glow matching the design */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[700px] h-[700px] bg-sky-50/60 rounded-full blur-3xl pointer-events-none -z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Heading, Description, CTA Button, and 3 Stats */}
              <div className="lg:col-span-6 space-y-6 sm:space-y-7">
                
                {/* Section Tag with Blue Accent Line */}
                <div className="flex items-center gap-3">
                  <span className="w-8 sm:w-10 h-0.5 bg-sky-500 rounded-full inline-block" />
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    ABOUT AJ MEDICAL
                  </span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold text-[#06162d] tracking-tight leading-[1.15]">
                  Committed to a <br />
                  <span className="text-sky-500">Healthier Tomorrow</span>
                </h2>

                {/* Description Paragraph */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
                  AJ Medical Equipment Trading provides reliable servicing, repairs, and supply solutions for hospitals and clinics across the UAE and beyond. We focus on quality, professionalism, and long-term support to keep your medical equipment running at its best.
                </p>

                {/* Primary CTA Button */}
                <div className="pt-1">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#06162d] text-white font-bold text-sm sm:text-base hover:bg-[#0c2b57] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight size={17} className="transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* 3 Stats Row with Circular Icon Badges & Subtle Hairline Dividers */}
                <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-6 lg:gap-8 border-t border-slate-100">
                  
                  {/* Stat 1: 100+ Hospitals */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-sky-100/70 text-sky-600 flex items-center justify-center shrink-0">
                      <Building2 size={22} />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#06162d] tracking-tight leading-none">
                        100+
                      </div>
                      <div className="text-xs text-slate-500 font-medium leading-snug mt-1">
                        Hospitals & Clinics<br />Supported
                      </div>
                    </div>
                  </div>

                  {/* Divider 1 */}
                  <div className="hidden sm:block w-[1px] h-10 bg-slate-200" />

                  {/* Stat 2: 10+ Years */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0">
                      <Users size={22} />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#06162d] tracking-tight leading-none">
                        10+
                      </div>
                      <div className="text-xs text-slate-500 font-medium leading-snug mt-1">
                        Years of Industry<br />Experience
                      </div>
                    </div>
                  </div>

                  {/* Divider 2 */}
                  <div className="hidden sm:block w-[1px] h-10 bg-slate-200" />

                  {/* Stat 3: UAE & GCC */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-amber-100/70 text-amber-600 flex items-center justify-center shrink-0">
                      <Globe2 size={22} />
                    </div>
                    <div>
                      <div className="text-2xl font-extrabold text-[#06162d] tracking-tight leading-none">
                        UAE & GCC
                      </div>
                      <div className="text-xs text-slate-500 font-medium leading-snug mt-1">
                        Expanding<br />Global Reach
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Column: Visual Composition with Technician, Cards, and Monitor */}
              <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
                <div className="relative w-full max-w-[560px]">
                  <Image
                    src="/images/about-technician-visual.webp"
                    alt="Biomedical technician performing professional servicing and genuine parts support on medical equipment"
                    width={1003}
                    height={777}
                    priority
                    className="w-full h-auto object-contain drop-shadow-sm select-none"
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: GET IN TOUCH BANNER
        ========================================================================= */}
        <section className="py-12 bg-white" id="get-in-touch">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl select-none group">
              
              {/* High-Resolution Exact-Quality Banner Graphic in WebP */}
              <div className="relative w-full aspect-[2098/749] min-h-[220px] sm:min-h-[300px] md:min-h-[360px]">
                <Image
                  src="/images/home-cta-banner.webp"
                  alt="Get in Touch - Let's Keep Your Equipment Performing"
                  fill
                  priority
                  className="object-cover object-center w-full h-full"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />

                {/* Semantic Accessible Heading for SEO */}
                <div className="sr-only">
                  <span>GET IN TOUCH</span>
                  <h2>Let&apos;s Keep Your Equipment Performing</h2>
                  <p>Talk to our team for expert advice and service support.</p>
                </div>

                {/* Interactive Clickable Consultation Button mapped exactly to the button coordinates */}
                <button
                  onClick={() => openConsult('Get a Free Consultation')}
                  style={{ left: '7.44%', top: '53.4%', width: '30.6%', height: '22.83%' }}
                  className="absolute rounded-full cursor-pointer hover:bg-black/5 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-sky-400/50"
                  aria-label="Get a Free Consultation"
                  title="Get a Free Consultation"
                />

                {/* Mobile Tap-To-Consult Fallback */}
                <button
                  onClick={() => openConsult('Get a Free Consultation')}
                  aria-label="Get a Free Consultation"
                  className="absolute inset-0 w-full h-full cursor-pointer sm:hidden opacity-0"
                />
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Global Real Footer */}
      <Footer />

      {/* Real Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
