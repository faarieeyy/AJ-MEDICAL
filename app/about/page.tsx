'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import {
  ArrowRight,
  Target,
  Eye,
  Gem,
  Users,
  Wrench,
  ShieldCheck,
  Headphones,
  MapPin,
  Globe2
} from 'lucide-react';

export default function AboutPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Request a Quote');

  const openConsult = (title = 'Request a Quote') => {
    setModalTitle(title);
    setIsConsultOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Real Top Header (Dark Theme with Transparent Hero Overlay) */}
      <Header theme="dark" active="about" transparent={true} />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO (With Custom Hero Background Picture - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[680px] xl:min-h-[720px] -mt-20 pt-28 pb-20 lg:pt-36 lg:pb-28 flex items-center bg-[#02182f]">
          {/* Background Hero Picture */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/about-hero-bg.webp"
              alt="AJ Medical Equipment Solutions Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
            {/* Soft dark gradient overlay for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02182f] via-[#02182f]/85 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Content matching Picture 1 */}
              <div className="lg:col-span-7 space-y-6 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    ABOUT US
                  </span>
                  <span className="w-10 sm:w-12 h-0.5 bg-slate-400/60" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
                  Driven by <br />
                  <span className="text-[#38bdf8]">a Healthier</span> <br />
                  Tomorrow
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                  AJ Medical Equipment Trading is committed to providing reliable medical equipment solutions through expertise, quality service, and a genuine focus on healthcare providers.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openConsult('Request a Medical Equipment Quote')}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>

              {/* Right: Open area so the background endoscopy visual shines through */}
              <div className="hidden lg:block lg:col-span-5 h-full min-h-[380px] pointer-events-none" />

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: OUR STORY (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center py-16 lg:py-24 bg-white text-[#06162d]">
          {/* Background Graphic from User (Picture 2) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/about-story-bg.webp"
              alt="AJ Medical Our Story Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
            {/* Soft subtle gradient blend for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            {/* Top row: Story text on left, open area on right for background graphic */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 lg:mb-16">
              <div className="lg:col-span-7 space-y-6 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#446c96] uppercase">
                    OUR STORY
                  </span>
                  <span className="w-10 sm:w-12 h-0.5 bg-sky-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                  A Journey Built <br />
                  <span className="text-[#38bdf8]">on Trust</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  What started as a commitment to support healthcare facilities has grown into a trusted name in medical equipment trading and servicing. We have always focused on one thing — keeping your equipment performing at its best.
                </p>
              </div>

              {/* Right: Transparent placeholder so microscope engineer visual shines through */}
              <div className="hidden lg:block lg:col-span-5 h-full min-h-[300px] pointer-events-none" />
            </div>

            {/* Bottom 3 Columns: Mission, Vision, Values with subtle vertical dividers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {/* Mission */}
              <div className="md:pr-8 md:border-r md:border-slate-200/80">
                <div className="w-14 h-14 rounded-full bg-[#dbeafe] text-[#0284c7] flex items-center justify-center mb-4 shadow-sm">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#06162d] mb-1.5">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  To support healthcare facilities with reliable equipment solutions.
                </p>
              </div>

              {/* Vision */}
              <div className="md:px-8 md:border-r md:border-slate-200/80">
                <div className="w-14 h-14 rounded-full bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center mb-4 shadow-sm">
                  <Eye size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#06162d] mb-1.5">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  To be a trusted partner in medical equipment servicing and supply.
                </p>
              </div>

              {/* Values */}
              <div className="md:pl-8">
                <div className="w-14 h-14 rounded-full bg-[#ffedd5] text-[#ea580c] flex items-center justify-center mb-4 shadow-sm">
                  <Gem size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#06162d] mb-1.5">Our Values</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  Quality, reliability and customer satisfaction.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHAT DRIVES US (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-center py-20 lg:py-28 bg-[#02182f] text-white">
          {/* Background Graphic from User (Picture 2) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/about-drives-bg.webp"
              alt="AJ Medical What Drives Us Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
            {/* Soft dark gradient blend for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02182f] via-[#02182f]/85 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Content matching Picture 1 */}
              <div className="lg:col-span-7 space-y-6 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    WHAT DRIVES US
                  </span>
                  <span className="w-10 sm:w-12 h-0.5 bg-slate-400/60" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                  People. Care. <br />
                  <span className="text-[#38bdf8]">Better Outcomes.</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We work closely with healthcare professionals to ensure they have the right equipment, support, and solutions to deliver better care every day.
                </p>
              </div>

              {/* Right: Transparent placeholder so endoscopy hand visual shines through */}
              <div className="hidden lg:block lg:col-span-5 h-full min-h-[300px] pointer-events-none" />

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: WHY CHOOSE AJ MEDICAL (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center py-16 lg:py-24 bg-white text-[#06162d]">
          {/* Background Graphic from User (Picture 2) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/about-why-bg.webp"
              alt="AJ Medical Why Choose Us Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-right lg:object-center"
              sizes="100vw"
            />
            {/* Soft subtle gradient blend for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6 max-w-xl">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-[#446c96] uppercase">
                      WHY CHOOSE AJ MEDICAL
                    </span>
                    <span className="w-10 sm:w-12 h-0.5 bg-sky-400" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight text-[#06162d] leading-[1.12]">
                    More Than <br />
                    <span className="text-[#38bdf8]">an Equipment Partner</span>
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
                    We combine expertise, reliable service, and a customer-first approach to support your healthcare journey.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#dbeafe] text-[#0284c7] flex items-center justify-center shrink-0 shadow-sm">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Experienced Team</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">Skilled professionals with technical expertise.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#ccfbf1] text-[#0d9488] flex items-center justify-center shrink-0 shadow-sm">
                      <Wrench size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Reliable Support</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">Dedicated assistance when you need it.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#ede9fe] text-[#7c3aed] flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Quality Standards</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">Genuine parts and trusted procedures.</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#ffedd5] text-[#ea580c] flex items-center justify-center shrink-0 shadow-sm">
                      <Headphones size={24} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Customer Focus</h4>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">Solutions tailored to your needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Transparent placeholder so biomedical cart visual shines through */}
              <div className="hidden lg:block lg:col-span-5 h-full min-h-[360px] pointer-events-none" />

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: OUR REACH (Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] flex items-center py-20 lg:py-28 bg-[#02182f] text-white" id="our-reach">
          {/* Background Graphic from User (Picture 2) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/about-reach-bg.webp"
              alt="AJ Medical Global Reach Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Soft dark gradient blend for mobile readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#02182f] via-[#02182f]/80 to-transparent lg:hidden" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-5 space-y-6 max-w-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    OUR REACH
                  </span>
                  <span className="w-10 sm:w-12 h-0.5 bg-slate-400/60" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                  Supporting <br />
                  <span className="text-[#38bdf8]">Healthcare Facilities</span> <br />
                  Across Regions
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
                  We serve hospitals, clinics, and healthcare providers across the UAE, GCC countries, and African regions with dependable solutions and long-term support.
                </p>
              </div>

              {/* Center: Transparent area allowing the glowing 3D Earth globe visual to shine through */}
              <div className="hidden lg:block lg:col-span-3 h-full min-h-[380px] pointer-events-none" />

              {/* Right: Unified Glassmorphic Region Card Panel */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-full max-w-sm rounded-[1.75rem] bg-white/[0.04] border border-white/10 backdrop-blur-md p-6 sm:p-7 space-y-6 shadow-2xl">
                  {/* UAE */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">UAE</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Primary Region</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5" />

                  {/* GCC Countries */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <Globe2 size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">GCC Countries</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Expanding Support</p>
                    </div>
                  </div>

                  <div className="border-t border-white/5" />

                  {/* African Regions */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                      <Users size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">African Regions</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Growing Partnerships</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: COMMITTED TO YOUR HEALTHCARE JOURNEY (CTA BANNER - Matching Picture 1 with Custom Background - Picture 2)
        ========================================================================= */}
        <section className="relative overflow-hidden min-h-[380px] lg:min-h-[420px] flex items-center py-12 sm:py-16 lg:py-20 bg-[#02182f]" id="cta-journey">
          {/* Background Graphic from User (Picture 2) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0">
            <Image
              src="/images/about-cta-bg.webp"
              alt="Committed to Your Healthcare Journey Background"
              fill
              priority
              unoptimized
              quality={100}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-4 sm:pt-6 pb-2">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10">
              
              {/* Left Content matching Picture 1 */}
              <div className="space-y-3.5 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2563eb] uppercase">
                    LET&apos;S WORK TOGETHER
                  </span>
                  <span className="w-12 sm:w-16 h-0.5 bg-[#38bdf8] rounded-full inline-block" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#06162d] leading-[1.12]">
                  Committed to <br />
                  <span className="text-[#38bdf8]">Your Healthcare Journey</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg pt-1">
                  We are here to support your facility with reliable equipment services and solutions.
                </p>
              </div>

              {/* Right Action Button matching Picture 1 */}
              <div className="shrink-0 flex items-center">
                <button
                  onClick={() => openConsult('Free Healthcare Consultation')}
                  className="inline-flex items-center gap-3 px-8 sm:px-9 py-4 rounded-full bg-[#06162d] text-white font-bold text-sm sm:text-base hover:bg-[#0c2b57] transition-all shadow-xl hover:-translate-y-0.5"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer with Updates Newsletter */}
      <Footer showNewsletter={true} />

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
