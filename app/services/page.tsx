'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import {
  ArrowRight,
  Layers,
  Tv,
  Wrench,
  Package,
  Users,
  ShieldCheck,
  Zap,
  Settings,
  ClipboardList,
  CheckCircle2,
  Headphones,
  Handshake,
  Activity
} from 'lucide-react';

export default function ServicesPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Service Inquiry');

  const openConsult = (title = 'Service Inquiry') => {
    setModalTitle(title);
    setIsConsultOpen(true);
  };

  const specializedServices = [
    {
      title: 'Endoscope Repair',
      href: '/services/endoscopy-repair',
      image: '/images/flexible-endoscope.webp',
      badgeIcon: Layers,
      desc: 'Professional repair for flexible and rigid endoscopes with high precision and reliability.'
    },
    {
      title: 'Equipment Servicing',
      href: '/services',
      image: '/images/storz-equipment.webp',
      badgeIcon: Tv,
      desc: 'Routine servicing and maintenance for all major brands and models.'
    },
    {
      title: 'Ultrasound Probe Repair',
      href: '/services',
      image: '/images/ultrasound-probe.webp',
      badgeIcon: Activity,
      desc: 'Expert repair for ultrasound probes and accessories.'
    },
    {
      title: 'Equipment Supply',
      href: '/products',
      image: '/images/surgical-instruments.webp',
      badgeIcon: Package,
      desc: 'Supply of new and refurbished medical equipment and consumables.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header theme="dark" active="services" transparent={true} />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[720px] -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center bg-[#02182f]">
          {/* Background Graphic from User (Picture 2) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/services-hero-bg.webp"
              alt="AJ Medical Endoscopy Repair Services Hero Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Soft dark gradient blend on mobile for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02182f] via-[#02182f]/85 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content matching Picture 1 */}
              <div className="lg:col-span-7 space-y-6 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#38bdf8] uppercase">
                    OUR SERVICES
                  </span>
                  <span className="w-12 sm:w-16 h-0.5 bg-slate-400/60 rounded-full inline-block" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                  Endoscopy <br />
                  <span className="text-[#38bdf8]">Repair</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-md pt-1">
                  Professional repair for flexible and rigid endoscopes with high precision and reliability.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openConsult('Endoscopy Repair Support')}
                    className="inline-flex items-center gap-2.5 px-8 sm:px-9 py-4 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Get Support</span>
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* Right: Transparent placeholder so the endoscopy head apparatus visual shines through */}
              <div className="hidden lg:block lg:col-span-5 h-full min-h-[380px] pointer-events-none" />

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SPECIALIZED SERVICES (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-white text-[#06162d]" id="specialized-services">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block">
            {/* Background Graphic from User (Picture 2) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/services-specialized-bg.webp"
                alt="AJ Medical Specialized Services Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Overlay matching Picture 1 */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between pt-[4%] pb-[3.5%] px-[8.8%]">
              
              {/* Header Row */}
              <div className="flex items-start justify-between gap-8 h-[22%]">
                <div className="space-y-1 max-w-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[11px] lg:text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                      OUR SERVICES
                    </span>
                    <span className="w-10 lg:w-12 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                    Specialized Services <br />
                    <span className="text-[#38bdf8]">for Healthcare Facilities</span>
                  </h2>
                </div>

                <p className="text-xs lg:text-sm text-slate-600 max-w-sm lg:max-w-md leading-relaxed pt-2">
                  We provide professional services to help hospitals, clinics, and healthcare providers maintain the performance, safety, and reliability of their medical equipment.
                </p>
              </div>

              {/* 2x2 Grid of 4 Cards (Overlays Card 1..4) */}
              <div className="grid grid-cols-2 gap-x-[2.4%] gap-y-[4%] h-[73%]">
                
                {/* Card 1: Endoscope Repair */}
                <Link
                  href="/services/endoscopy-repair"
                  className="relative h-full flex flex-col justify-end group cursor-pointer"
                  aria-label="Endoscope Repair Service"
                >
                  <div className="h-[43%] flex items-center justify-between pl-[19%] pr-[4%]">
                    <div className="max-w-[70%]">
                      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-[#06162d] group-hover:text-[#38bdf8] transition-colors leading-snug">
                        Endoscope Repair
                      </h3>
                      <p className="text-[10px] lg:text-xs text-slate-500 leading-tight mt-0.5">
                        Professional repair for flexible and rigid endoscopes with high precision and reliability.
                      </p>
                    </div>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-[#38bdf8] transition-all shadow-md group-hover:scale-105">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>

                {/* Card 2: Equipment Servicing */}
                <Link
                  href="/services"
                  className="relative h-full flex flex-col justify-end group cursor-pointer"
                  aria-label="Equipment Servicing"
                >
                  <div className="h-[43%] flex items-center justify-between pl-[19%] pr-[4%]">
                    <div className="max-w-[70%]">
                      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-[#06162d] group-hover:text-[#38bdf8] transition-colors leading-snug">
                        Equipment Servicing
                      </h3>
                      <p className="text-[10px] lg:text-xs text-slate-500 leading-tight mt-0.5">
                        Routine servicing and maintenance for all major brands and models.
                      </p>
                    </div>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-[#38bdf8] transition-all shadow-md group-hover:scale-105">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>

                {/* Card 3: Ultrasound Probe Repair */}
                <Link
                  href="/services"
                  className="relative h-full flex flex-col justify-end group cursor-pointer"
                  aria-label="Ultrasound Probe Repair"
                >
                  <div className="h-[43%] flex items-center justify-between pl-[19%] pr-[4%]">
                    <div className="max-w-[70%]">
                      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-[#06162d] group-hover:text-[#38bdf8] transition-colors leading-snug">
                        Ultrasound Probe Repair
                      </h3>
                      <p className="text-[10px] lg:text-xs text-slate-500 leading-tight mt-0.5">
                        Expert repair for ultrasound probes and accessories.
                      </p>
                    </div>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-[#38bdf8] transition-all shadow-md group-hover:scale-105">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>

                {/* Card 4: Equipment Supply */}
                <Link
                  href="/products"
                  className="relative h-full flex flex-col justify-end group cursor-pointer"
                  aria-label="Equipment Supply"
                >
                  <div className="h-[43%] flex items-center justify-between pl-[19%] pr-[4%]">
                    <div className="max-w-[70%]">
                      <h3 className="text-sm lg:text-base xl:text-lg font-bold text-[#06162d] group-hover:text-[#38bdf8] transition-colors leading-snug">
                        Equipment Supply
                      </h3>
                      <p className="text-[10px] lg:text-xs text-slate-500 leading-tight mt-0.5">
                        Supply of new and refurbished medical equipment and consumables.
                      </p>
                    </div>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-[#38bdf8] transition-all shadow-md group-hover:scale-105">
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </div>
                  </div>
                </Link>

              </div>

            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 py-12 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  OUR SERVICES
                </span>
                <span className="w-10 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#06162d] leading-[1.15]">
                Specialized Services <br />
                <span className="text-[#38bdf8]">for Healthcare Facilities</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                We provide professional services to help hospitals, clinics, and healthcare providers maintain the performance, safety, and reliability of their medical equipment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {/* Card 1 Mobile */}
              <Link href="/services/endoscopy-repair" className="rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 flex flex-col group">
                <div className="relative h-44 w-full">
                  <Image src="/images/specialized_card1.webp" alt="Endoscope Repair" fill className="object-cover" />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#06162d] group-hover:text-sky-600 transition-colors">Endoscope Repair</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Professional repair for flexible and rigid endoscopes with high precision and reliability.</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>

              {/* Card 2 Mobile */}
              <Link href="/services" className="rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 flex flex-col group">
                <div className="relative h-44 w-full">
                  <Image src="/images/specialized_card2.webp" alt="Equipment Servicing" fill className="object-cover" />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#06162d] group-hover:text-sky-600 transition-colors">Equipment Servicing</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Routine servicing and maintenance for all major brands and models.</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>

              {/* Card 3 Mobile */}
              <Link href="/services" className="rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 flex flex-col group">
                <div className="relative h-44 w-full">
                  <Image src="/images/specialized_card3.webp" alt="Ultrasound Probe Repair" fill className="object-cover" />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#06162d] group-hover:text-sky-600 transition-colors">Ultrasound Probe Repair</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Expert repair for ultrasound probes and accessories.</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>

              {/* Card 4 Mobile */}
              <Link href="/products" className="rounded-2xl overflow-hidden bg-white shadow-md border border-slate-100 flex flex-col group">
                <div className="relative h-44 w-full">
                  <Image src="/images/specialized_card4.webp" alt="Equipment Supply" fill className="object-cover" />
                </div>
                <div className="p-4 flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-[#06162d] group-hover:text-sky-600 transition-colors">Equipment Supply</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Supply of new and refurbished medical equipment and consumables.</p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHY OUR SERVICES BANNER (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-[#02182f] text-white" id="why-our-services">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block">
            {/* Background Graphic from User (Picture 2) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/services-why-bg.webp"
                alt="AJ Medical Technical Expertise Why Our Services Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Left Content */}
            <div className="absolute left-[6.45%] top-[22.8%] w-[42%] z-10 space-y-3.5">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] lg:text-xs xl:text-sm font-bold tracking-widest text-[#38bdf8] uppercase">
                  WHY OUR SERVICES
                </span>
                <span className="w-10 lg:w-12 h-0.5 bg-slate-400/60 rounded-full inline-block" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[46px] font-extrabold tracking-tight text-white leading-[1.12]">
                Technical Expertise. <br />
                <span className="text-[#38bdf8]">Trusted Results.</span>
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-[420px] pt-1">
                We combine technical knowledge, genuine parts, and a customer-focused approach to deliver reliable service and long-term value.
              </p>
            </div>

            {/* Right 4 Items positioned precisely next to the baked icon badges */}
            {/* Item 1: Skilled Technicians */}
            <div className="absolute left-[62.5%] top-[30.7%] -translate-y-1/2 z-10">
              <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white leading-tight whitespace-nowrap">
                Skilled <br />
                Technicians
              </h4>
            </div>

            {/* Item 2: Genuine Parts */}
            <div className="absolute left-[87.3%] top-[30.6%] -translate-y-1/2 z-10">
              <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white leading-tight whitespace-nowrap">
                Genuine <br />
                Parts
              </h4>
            </div>

            {/* Item 3: Fast Turnaround */}
            <div className="absolute left-[62.5%] top-[54.6%] -translate-y-1/2 z-10">
              <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white leading-tight whitespace-nowrap">
                Fast <br />
                Turnaround
              </h4>
            </div>

            {/* Item 4: Multi-Brand Support */}
            <div className="absolute left-[87.3%] top-[54.7%] -translate-y-1/2 z-10">
              <h4 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white leading-tight whitespace-nowrap">
                Multi-Brand <br />
                Support
              </h4>
            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 py-16 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  WHY OUR SERVICES
                </span>
                <span className="w-10 h-0.5 bg-slate-400/60 rounded-full inline-block" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white leading-[1.15]">
                Technical Expertise. <br />
                <span className="text-[#38bdf8]">Trusted Results.</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                We combine technical knowledge, genuine parts, and a customer-focused approach to deliver reliable service and long-term value.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-14 h-14 rounded-full border border-sky-400/30 bg-[#0a284e]/60 text-sky-400 flex items-center justify-center shrink-0">
                  <Users size={24} />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">
                  Skilled <br /> Technicians
                </h4>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-14 h-14 rounded-full border border-sky-400/30 bg-[#0a284e]/60 text-sky-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">
                  Genuine <br /> Parts
                </h4>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-14 h-14 rounded-full border border-sky-400/30 bg-[#0a284e]/60 text-sky-400 flex items-center justify-center shrink-0">
                  <Zap size={24} />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">
                  Fast <br /> Turnaround
                </h4>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="w-14 h-14 rounded-full border border-sky-400/30 bg-[#0a284e]/60 text-sky-400 flex items-center justify-center shrink-0">
                  <Settings size={24} />
                </div>
                <h4 className="text-base font-bold text-white leading-tight">
                  Multi-Brand <br /> Support
                </h4>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR PROCESS (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-white text-[#06162d]" id="our-process">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block">
            {/* Background Graphic from User (Picture 2) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/services-process-bg.webp"
                alt="AJ Medical Services Process Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Header Content */}
            {/* Top Left: Eyebrow + Headline */}
            <div className="absolute left-[6.25%] top-[9.4%] z-10 space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] lg:text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  OUR PROCESS
                </span>
                <span className="w-10 lg:w-12 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[44px] font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                A Simple Process <br />
                <span className="text-[#38bdf8]">for Reliable Service</span>
              </h2>
            </div>

            {/* Top Right: Subtitle */}
            <div className="absolute left-[56.0%] top-[16.0%] max-w-[420px] z-10">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                We follow a clear and efficient process to ensure your equipment receives the right care, from diagnosis to delivery.
              </p>
            </div>

            {/* Numbers inside the 4 pastel colored top circles */}
            {/* Number 01 */}
            <div className="absolute left-[9.31%] top-[42.9%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#06162d]">01</span>
            </div>

            {/* Number 02 */}
            <div className="absolute left-[35.23%] top-[43.0%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#06162d]">02</span>
            </div>

            {/* Number 03 */}
            <div className="absolute left-[59.13%] top-[43.0%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#06162d]">03</span>
            </div>

            {/* Number 04 */}
            <div className="absolute left-[82.83%] top-[43.1%] -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
              <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#06162d]">04</span>
            </div>

            {/* 4 Step Text Descriptions below the icon badges */}
            {/* Step 01 Text */}
            <div className="absolute left-[6.5%] top-[67.4%] w-[19%] z-10 space-y-1">
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-[#06162d] leading-tight">
                Inspection & Diagnosis
              </h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 leading-snug">
                Detailed assessment by <br className="hidden lg:inline" />
                our expert technicians.
              </p>
            </div>

            {/* Step 02 Text */}
            <div className="absolute left-[32.5%] top-[67.4%] w-[19%] z-10 space-y-1">
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-[#06162d] leading-tight">
                Expert Servicing
              </h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 leading-snug">
                Repair or maintenance <br className="hidden lg:inline" />
                using genuine parts.
              </p>
            </div>

            {/* Step 03 Text */}
            <div className="absolute left-[56.5%] top-[67.4%] w-[19%] z-10 space-y-1">
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-[#06162d] leading-tight">
                Quality Testing
              </h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 leading-snug">
                Thorough testing to <br className="hidden lg:inline" />
                ensure optimal <br className="hidden lg:inline" />
                performance.
              </p>
            </div>

            {/* Step 04 Text */}
            <div className="absolute left-[81.0%] top-[67.4%] w-[18%] z-10 space-y-1">
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-[#06162d] leading-tight">
                On-Time Delivery
              </h3>
              <p className="text-[10px] sm:text-xs lg:text-sm text-slate-500 leading-snug">
                Your equipment <br className="hidden lg:inline" />
                returned, ready for use.
              </p>
            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 py-16 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  OUR PROCESS
                </span>
                <span className="w-10 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#06162d] leading-[1.15]">
                A Simple Process <br />
                <span className="text-[#38bdf8]">for Reliable Service</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                We follow a clear and efficient process to ensure your equipment receives the right care, from diagnosis to delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-[#06162d] font-extrabold text-sm flex items-center justify-center">
                    01
                  </div>
                  <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
                    <ClipboardList size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#06162d]">Inspection & Diagnosis</h3>
                  <p className="text-xs text-slate-500 mt-1">Detailed assessment by our expert technicians.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#06162d] font-extrabold text-sm flex items-center justify-center">
                    02
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Wrench size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#06162d]">Expert Servicing</h3>
                  <p className="text-xs text-slate-500 mt-1">Repair or maintenance using genuine parts.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-purple-100 text-[#06162d] font-extrabold text-sm flex items-center justify-center">
                    03
                  </div>
                  <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#06162d]">Quality Testing</h3>
                  <p className="text-xs text-slate-500 mt-1">Thorough testing to ensure optimal performance.</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-[#06162d] font-extrabold text-sm flex items-center justify-center">
                    04
                  </div>
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Package size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#06162d]">On-Time Delivery</h3>
                  <p className="text-xs text-slate-500 mt-1">Your equipment returned, ready for use.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: NEED SUPPORT CTA BANNER (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden w-full bg-white text-[#06162d]" id="need-support">
          {/* Desktop & Tablet Container (Exact 2:1 aspect ratio matching 2048x1024 Background) */}
          <div className="relative w-full aspect-[2048/1024] hidden md:block">
            {/* Background Graphic from User (Picture 2 with technician hands in medical gloves) */}
            <div className="absolute inset-0 pointer-events-none select-none z-0">
              <Image
                src="/images/services-cta-bg.webp"
                alt="AJ Medical Need Support Medical Technician Background"
                fill
                priority
                unoptimized
                quality={100}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>

            {/* Left Content Area */}
            {/* Eyebrow */}
            <div className="absolute left-[6.45%] top-[13.5%] z-10">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] lg:text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  NEED SUPPORT?
                </span>
                <span className="w-10 lg:w-12 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
            </div>

            {/* Headline */}
            <div className="absolute left-[6.45%] top-[19.7%] z-10 max-w-[48%]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[46px] font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                Get Expert Service <br />
                <span className="text-[#38bdf8]">for Your Equipment</span>
              </h2>
            </div>

            {/* Subtitle / Description */}
            <div className="absolute left-[6.45%] top-[39.8%] z-10 max-w-[390px]">
              <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                Contact our team for service inquiries, <br className="hidden lg:inline" />
                maintenance support, or a custom solution.
              </p>
            </div>

            {/* Contact Us Button */}
            <div className="absolute left-[6.45%] top-[51.8%] z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3 lg:px-8 lg:py-3.5 rounded-full bg-[#06162d] text-white font-bold text-xs sm:text-sm lg:text-base hover:bg-[#0c2b57] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
                <ArrowRight size={17} strokeWidth={2.5} />
              </Link>
            </div>

            {/* 3 Pills Text (Positioned directly under the 3 circular icon badges) */}
            {/* Pill 1: Dedicated Support Team */}
            <div className="absolute left-[11.23%] top-[79.0%] -translate-x-1/2 z-10 text-center pointer-events-none select-none">
              <h4 className="text-[11px] sm:text-xs lg:text-sm font-bold text-[#06162d] leading-tight whitespace-nowrap">
                Dedicated <br />
                Support Team
              </h4>
            </div>

            {/* Pill 2: Maintenance Assistance */}
            <div className="absolute left-[25.88%] top-[78.9%] -translate-x-1/2 z-10 text-center pointer-events-none select-none">
              <h4 className="text-[11px] sm:text-xs lg:text-sm font-bold text-[#06162d] leading-tight whitespace-nowrap">
                Maintenance <br />
                Assistance
              </h4>
            </div>

            {/* Pill 3: Custom Solutions */}
            <div className="absolute left-[41.50%] top-[79.0%] -translate-x-1/2 z-10 text-center pointer-events-none select-none">
              <h4 className="text-[11px] sm:text-xs lg:text-sm font-bold text-[#06162d] leading-tight whitespace-nowrap">
                Custom <br />
                Solutions
              </h4>
            </div>
          </div>

          {/* Mobile Fallback Container (< md) */}
          <div className="md:hidden px-4 py-16 space-y-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-[#38bdf8] uppercase">
                  NEED SUPPORT?
                </span>
                <span className="w-10 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#06162d] leading-[1.15]">
                Get Expert Service <br />
                <span className="text-[#38bdf8]">for Your Equipment</span>
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                Contact our team for service inquiries, maintenance support, or a custom solution.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#06162d] text-white font-bold text-sm hover:bg-[#0c2b57] transition-all shadow-md"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Headphones size={18} />
                </div>
                <span className="text-xs font-bold text-[#06162d]">Dedicated Support Team</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Settings size={18} />
                </div>
                <span className="text-xs font-bold text-[#06162d]">Maintenance Assistance</span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Handshake size={18} />
                </div>
                <span className="text-xs font-bold text-[#06162d]">Custom Solutions</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
