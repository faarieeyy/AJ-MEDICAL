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
  Globe2,
  Building2,
  Calendar,
  Settings
} from 'lucide-react';

export default function AboutPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Request a Quote');

  const openConsult = (title = 'Request a Quote') => {
    setModalTitle(title);
    setIsConsultOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      {/* Real Top Header (Dark Theme) */}
      <Header theme="dark" active="about" />

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
                    ABOUT US
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                  Driven by <br />
                  <span className="text-sky-400">a Healthier Tomorrow</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                  AJ Medical Equipment Trading is committed to providing reliable medical equipment solutions through expertise, quality service, and a genuine focus on healthcare providers.
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => openConsult('Request a Medical Equipment Quote')}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Get a Quote</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>

              {/* Right: Cleanroom Biomedical Engineer Visual */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-tr from-[#091e3d] to-[#040e1e]">
                  <Image
                    src="/images/technician-microscope.webp"
                    alt="Biomedical technician conducting sub-micron optical analysis"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                  {/* Decorative curved boundary line & node dot */}
                  <div className="absolute inset-0 border border-sky-400/20 rounded-[3rem] pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: OUR STORY (White Section with Mission, Vision, Values)
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d] rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top row: Story text & Microscope photograph */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    OUR STORY
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  A Journey Built <br />
                  <span className="text-sky-500">on Trust</span>
                </h2>

                <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                  What started as a commitment to support healthcare facilities has grown into a trusted name in medical equipment trading and servicing. We have always focused on one thing — keeping your equipment performing at its best.
                </p>
              </div>

              {/* Right: Microscope Photograph */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-100">
                  <Image
                    src="/images/technician-microscope.webp"
                    alt="Biomedical engineer inspecting microscopic medical components"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            </div>

            {/* 3 Columns: Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-slate-100">
              {/* Mission */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4">
                  <Target size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#06162d] mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To support healthcare facilities with reliable equipment solutions.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#06162d] mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To be a trusted partner in medical equipment servicing and supply.
                </p>
              </div>

              {/* Values */}
              <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                  <Gem size={24} />
                </div>
                <h3 className="text-lg font-bold text-[#06162d] mb-2">Our Values</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Quality, reliability and customer satisfaction.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHAT DRIVES US (Dark Wavy Banner)
        ========================================================================= */}
        <section className="py-20 bg-[#06162d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    WHAT DRIVES US
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  People. Care. <br />
                  <span className="text-sky-400">Better Outcomes.</span>
                </h2>

                <p className="text-base text-slate-300 max-w-xl leading-relaxed">
                  We work closely with healthcare professionals to ensure they have the right equipment, support, and solutions to deliver better care every day.
                </p>
              </div>

              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                  <Image
                    src="/images/flexible-endoscope.webp"
                    alt="Precision medical endoscopy instrument calibration"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: WHY CHOOSE AJ MEDICAL
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                      WHY CHOOSE AJ MEDICAL
                    </span>
                    <span className="w-12 h-0.5 bg-sky-400" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight">
                    More Than <br />
                    <span className="text-sky-500">an Equipment Partner</span>
                  </h2>

                  <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-xl">
                    We combine expertise, reliable service, and a customer-first approach to support your healthcare journey.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Users size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Experienced Team</h4>
                      <p className="text-xs text-slate-500 mt-1">Skilled professionals with technical expertise.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Wrench size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Reliable Support</h4>
                      <p className="text-xs text-slate-500 mt-1">Dedicated assistance when you need it.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <ShieldCheck size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Quality Standards</h4>
                      <p className="text-xs text-slate-500 mt-1">Genuine parts and trusted procedures.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Headphones size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#06162d]">Customer Focus</h4>
                      <p className="text-xs text-slate-500 mt-1">Solutions tailored to your needs.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                  <Image
                    src="/images/equipment-cart.webp"
                    alt="Biomedical cart workstation"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: OUR REACH (3D Glowing Globe & Regional Cards)
        ========================================================================= */}
        <section className="py-24 bg-[#06162d] text-white relative overflow-hidden" id="our-reach">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    OUR REACH
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Supporting <br />
                  <span className="text-sky-400">Healthcare Facilities Across Regions</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  We serve hospitals, clinics, and healthcare providers across the UAE, GCC countries, and African regions with dependable solutions and long-term support.
                </p>
              </div>

              {/* Center: Glowing 3D Earth Globe */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[380px] aspect-square rounded-full overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.25)]">
                  <Image
                    src="/images/earth-globe.webp"
                    alt="AJ Medical regional reach across UAE, GCC, and Africa"
                    fill
                    className="object-contain object-center scale-110"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
              </div>

              {/* Right: Glassmorphic Region Cards */}
              <div className="lg:col-span-3 space-y-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">UAE</h4>
                    <p className="text-xs text-slate-400">Primary Region</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Globe2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">GCC Countries</h4>
                    <p className="text-xs text-slate-400">Expanding Support</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">African Regions</h4>
                    <p className="text-xs text-slate-400">Growing Partnerships</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: COMMITTED TO A HEALTHIER TOMORROW (Stats & Technician Repair)
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-0.5 bg-sky-400" />
                    <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                      ABOUT AJ MEDICAL
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 tracking-tight">
                    Committed to a <br />
                    <span className="text-sky-500">Healthier Tomorrow</span>
                  </h2>

                  <p className="text-base text-slate-600 mt-4 leading-relaxed max-w-xl">
                    AJ Medical Equipment Trading provides reliable servicing, repairs, and supply solutions for hospitals and clinics across the UAE and beyond. We focus on quality, professionalism, and long-term support to keep your medical equipment running at its best.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => openConsult('Learn More About Our Team & Facility')}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#06162d] text-white font-semibold text-sm hover:bg-[#0c2b57] transition-all shadow-md"
                    >
                      <span>Learn More About Us</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {/* 3 Stats Counters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#06162d]">100+</div>
                      <div className="text-xs text-slate-500">Hospitals & Clinics Supported</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#06162d]">10+</div>
                      <div className="text-xs text-slate-500">Years of Industry Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Globe2 size={20} />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold text-[#06162d]">UAE & GCC</div>
                      <div className="text-xs text-slate-500">Expanding Global Reach</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Technician Repair with 2 floating cards */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100">
                  <Image
                    src="/images/technician-repair.webp"
                    alt="Biomedical technician repairing circuit board"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>

                {/* Floating Card Top */}
                <div className="hidden sm:flex absolute -top-4 -right-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-xl items-center gap-3 max-w-[240px]">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Settings size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#06162d]">Professional Servicing</h5>
                    <p className="text-[10px] text-slate-500">Certified precision repair</p>
                  </div>
                </div>

                {/* Floating Card Bottom */}
                <div className="hidden sm:flex absolute -bottom-4 -left-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-xl items-center gap-3 max-w-[240px]">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#06162d]">Genuine Parts</h5>
                    <p className="text-[10px] text-slate-500">Original OEM quality</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: HEALTHCARE JOURNEY CTA BANNER
        ========================================================================= */}
        <section className="py-16 bg-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] bg-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    LET&apos;S WORK TOGETHER
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06162d] tracking-tight">
                  Committed to <br />
                  <span className="text-sky-500">Your Healthcare Journey</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  We are here to support your facility with reliable equipment services and solutions.
                </p>
              </div>

              <div>
                <button
                  onClick={() => openConsult('Committed Healthcare Partnership Consultation')}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#06162d] text-white font-bold text-sm sm:text-base hover:bg-[#0c2b57] transition-all shadow-xl hover:-translate-y-0.5"
                >
                  <span>Get a Free Consultation</span>
                  <ArrowRight size={17} />
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
