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
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      <Header theme="light" active="services" />

      <main className="flex-grow">
        {/* =========================================================================
            SECTION 1: HERO (Dark Navy)
        ========================================================================= */}
        <section className="relative overflow-hidden pt-12 pb-24 lg:py-28 bg-[#06162d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    OUR SERVICES
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                  Complete Care <br />
                  <span className="text-sky-400">for Medical Equipment</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                  From repair and servicing to equipment supply, we provide end-to-end solutions to keep your medical equipment performing at its best.
                </p>

                <div className="pt-2">
                  <a
                    href="#specialized-services"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Our Services</span>
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>

              {/* Right: Hospital Equipment Visual with Floating Badge */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-slate-900">
                  <Image
                    src="/images/equipment-cart.webp"
                    alt="Biomedical workstation and medical monitoring equipment"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl flex items-center gap-3 border border-white">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center">
                      <Settings size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#06162d]">Reliable Service Support</div>
                      <div className="text-[10px] text-slate-500">Certified technicians on call</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: SPECIALIZED SERVICES
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d] rounded-t-[3rem]" id="specialized-services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    OUR SERVICES
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
                  Specialized Services <br />
                  <span className="text-sky-500">for Healthcare Facilities</span>
                </h2>
              </div>
              <p className="text-base text-slate-600 max-w-lg leading-relaxed">
                We provide professional services to help hospitals, clinics, and healthcare providers maintain the performance, safety, and reliability of their medical equipment.
              </p>
            </div>

            {/* 2x2 Grid of 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specializedServices.map((item, idx) => {
                const IconComponent = item.badgeIcon;
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute bottom-4 left-5 w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-sky-600 border border-slate-50">
                        <IconComponent size={22} />
                      </div>
                    </div>

                    <div className="p-6 flex items-center justify-between gap-4 flex-grow">
                      <div>
                        <h3 className="text-xl font-bold text-[#06162d] group-hover:text-sky-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="w-11 h-11 rounded-full bg-[#06162d] text-white flex items-center justify-center shrink-0 group-hover:bg-sky-500 transition-colors shadow-sm">
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHY OUR SERVICES BANNER
        ========================================================================= */}
        <section className="py-20 bg-[#06162d] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-300 uppercase">
                    WHY OUR SERVICES
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Technical Expertise. <br />
                  <span className="text-sky-400">Trusted Results.</span>
                </h2>

                <p className="text-base text-slate-300 max-w-lg leading-relaxed">
                  We combine technical knowledge, genuine parts, and a customer-focused approach to deliver reliable service and long-term value.
                </p>
              </div>

              {/* 2x2 Feature Badges with Circular Icons */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Skilled Technicians</h4>
                    <p className="text-xs text-slate-400 mt-1">Certified biomedical engineers</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Genuine Parts</h4>
                    <p className="text-xs text-slate-400 mt-1">OEM quality guaranteed</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Fast Turnaround</h4>
                    <p className="text-xs text-slate-400 mt-1">Minimized clinical downtime</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <div className="w-14 h-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Multi-Brand Support</h4>
                    <p className="text-xs text-slate-400 mt-1">All major medical brands</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR PROCESS (4 Horizontal Steps)
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    OUR PROCESS
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-2">
                  A Simple Process <br />
                  <span className="text-sky-500">for Reliable Service</span>
                </h2>
              </div>
              <p className="text-base text-slate-600 max-w-lg leading-relaxed">
                We follow a clear and efficient process to ensure your equipment receives the right care, from diagnosis to delivery.
              </p>
            </div>

            {/* 4 Steps Horizontal Row with Arrows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 01 */}
              <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 font-extrabold text-sm flex items-center justify-center mb-4">
                  01
                </div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                  <ClipboardList size={22} />
                </div>
                <h3 className="text-base font-bold text-[#06162d] mb-2">Inspection & Diagnosis</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Detailed assessment by our expert technicians.
                </p>
              </div>

              {/* Step 02 */}
              <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-extrabold text-sm flex items-center justify-center mb-4">
                  02
                </div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <Wrench size={22} />
                </div>
                <h3 className="text-base font-bold text-[#06162d] mb-2">Expert Servicing</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Repair or maintenance using genuine parts.
                </p>
              </div>

              {/* Step 03 */}
              <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-extrabold text-sm flex items-center justify-center mb-4">
                  03
                </div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-base font-bold text-[#06162d] mb-2">Quality Testing</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Thorough testing to ensure optimal performance.
                </p>
              </div>

              {/* Step 04 */}
              <div className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 font-extrabold text-sm flex items-center justify-center mb-4">
                  04
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Package size={22} />
                </div>
                <h3 className="text-base font-bold text-[#06162d] mb-2">On-Time Delivery</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your equipment returned, ready for use.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: NEED SUPPORT CTA BANNER
        ========================================================================= */}
        <section className="py-20 bg-gradient-to-b from-white to-sky-50/50 text-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">
                    NEED SUPPORT?
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Get Expert Service <br />
                  <span className="text-sky-500">for Your Equipment</span>
                </h2>

                <p className="text-base text-slate-600 max-w-lg leading-relaxed">
                  Contact our team for service inquiries, maintenance support, or a custom solution.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#06162d] text-white font-bold text-sm sm:text-base hover:bg-[#0c2b57] transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={17} />
                  </Link>
                </div>

                {/* 3 Pills */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Headphones size={18} />
                    </div>
                    <span className="text-xs font-semibold text-[#06162d]">Dedicated Support Team</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Settings size={18} />
                    </div>
                    <span className="text-xs font-semibold text-[#06162d]">Maintenance Assistance</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Handshake size={18} />
                    </div>
                    <span className="text-xs font-semibold text-[#06162d]">Custom Solutions</span>
                  </div>
                </div>
              </div>

              {/* Right: Equipment Photo */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                  <Image
                    src="/images/flexible-endoscope.webp"
                    alt="Biomedical technician tuning optical medical device"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
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
