'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import {
  ArrowRight,
  Eye,
  Layers,
  Droplets,
  Settings,
  ShieldCheck,
  Wrench,
  Clock,
  CheckCircle2,
  PhoneCall,
  Search,
  Sparkles,
  HelpCircle,
  FileCheck,
  Check
} from 'lucide-react';

export default function EndoscopyRepairPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Endoscopy Repair Support');

  const openConsult = (title = 'Endoscopy Repair Support') => {
    setModalTitle(title);
    setIsConsultOpen(true);
  };

  const commonIssues = [
    {
      title: 'Image Issues',
      icon: Eye,
      points: [
        'Blurry, foggy, or cloudy optical view',
        'Broken optical fiber bundles (black spots)',
        'Color distortion or CCD sensor failure',
        'Distal lens scratches and illumination loss'
      ]
    },
    {
      title: 'Insertion Tube Damage',
      icon: Layers,
      points: [
        'Bending section sheath buckling or tears',
        'Kinked, stiff, or dented insertion tube',
        'Angulation cable looseness or failure',
        'Biopsy channel perforation from accessories'
      ]
    },
    {
      title: 'Water Leakage',
      icon: Droplets,
      points: [
        'Hermetic seal compromise during disinfection',
        'Internal fluid invasion damaging electronics',
        'Failed O-rings and distal tip epoxy leakage',
        'High infection risk and rapid corrosion'
      ]
    },
    {
      title: 'Control Section Problems',
      icon: Settings,
      points: [
        'Stiff or unresponsive angulation control knobs',
        'Faulty air/water and suction cylinder valves',
        'Malfunctioning remote programming buttons',
        'Biopsy inlet port erosion and fluid backflow'
      ]
    }
  ];

  const repairSteps = [
    {
      step: '01',
      title: 'Inspection & Leak Testing',
      desc: 'Complete multi-point diagnostic evaluation, pressure immersion leak test, and optical bench evaluation.'
    },
    {
      step: '02',
      title: 'Precision Component Repair',
      desc: 'Microscopic cleanroom repair, fiber replacement, bending section rebuilding, and OEM-grade parts installation.'
    },
    {
      step: '03',
      title: 'Multi-Point Quality Testing',
      desc: 'Resolution chart calibration, articulation angle measurement, and airtight hermetic seal re-certification.'
    },
    {
      step: '04',
      title: 'Sterilization & Fast Return',
      desc: 'Final medical cleaning protocol, secure custom foam packaging, and expedited dispatch back to your hospital.'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Skilled Technicians',
      icon: Wrench,
      desc: 'Certified biomedical engineers with extensive training across Olympus, Pentax, Fujinon, and Karl Storz systems.'
    },
    {
      title: 'Genuine Quality Parts',
      icon: ShieldCheck,
      desc: 'We use high-grade optical fibers, medical silicones, and precision components that match OEM specifications.'
    },
    {
      title: 'Reliable Turnaround',
      icon: Clock,
      desc: 'Rapid diagnostics within 24 hours and emergency loaner scopes available to prevent hospital unit downtime.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      {/* Real Top Header (Dark Theme) */}
      <Header theme="dark" active="services" />

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
                    ENDOSCOPY REPAIR
                  </span>
                  <span className="w-12 h-0.5 bg-sky-400" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
                  Endoscopy Repair <br />
                  <span className="text-sky-400">Professional Repair for Flexible & Rigid Endoscopes</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                  Comprehensive repair, optical alignment, and maintenance services for flexible and rigid endoscopes from all major global manufacturers. Restoring optical clarity and clinical reliability.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => openConsult('Urgent Endoscope Repair & Diagnostic Support')}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Get Support</span>
                    <ArrowRight size={17} />
                  </button>

                  <a
                    href="tel:+97142285650"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/15 hover:bg-white/15 transition-all"
                  >
                    <PhoneCall size={16} className="text-sky-400" />
                    <span>+971 4 228 5650</span>
                  </a>
                </div>
              </div>

              {/* Right: Endoscope Repair Specialist Photograph */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10 bg-gradient-to-tr from-[#091e3d] to-[#040e1e]">
                  <Image
                    src="/images/technician-microscope.webp"
                    alt="Biomedical engineer inspecting endoscope optics under microscope"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                  {/* Subtle inner overlay highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: EXTENDING THE LIFE OF YOUR ENDOSCOPES (White Curved Section)
        ========================================================================= */}
        <section className="py-20 bg-white text-[#06162d] rounded-t-[3rem] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left: Distal Tip Photograph */}
              <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
                <div className="relative w-full max-w-[440px] aspect-[4/4] rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/images/endoscopy-tip.webp"
                    alt="Endoscope Distal Tip and Optical Fiber Mechanism"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 440px"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800">ISO-Aligned Cleanroom Bench</div>
                      <div className="text-[11px] text-slate-500">Sub-micron optical collimation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Text & Value Checklist */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase">
                    EXPERT BIOMEDICAL CARE
                  </span>
                  <span className="w-12 h-0.5 bg-sky-500" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06162d] tracking-tight leading-tight">
                  Extending the Life of <br />
                  <span className="text-sky-600">Your Endoscopes</span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Endoscopes are vital, high-precision instruments that require expert handling and meticulous care. At AJ Medical Equipment Trading, we specialize in comprehensive repairs that restore your equipment to original manufacturer specifications, saving your facility up to 70% compared to full OEM replacement costs.
                </p>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our cleanroom biomedical laboratory is equipped with state-of-the-art optical collimators, pressure leak testing chambers, and precision soldering stations, ensuring that every flexible colonoscope, gastroscope, and rigid laparoscope meets rigorous clinical standards before returning to your operating theater.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    'Optical Realignment & Rod Lens Restoration',
                    'Hermetic Seal & Fluid Ingress Leak Testing',
                    'Insertion Sheath & Bending Section Rebuilding',
                    'CCD Chip & Light Guide Bundle Diagnostics'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: COMMON ISSUES WE REPAIR (Soft Gray Section)
        ========================================================================= */}
        <section className="py-20 bg-slate-50 text-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
                COMMON FAILURES RESOLVED
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06162d] tracking-tight">
                Common Issues We Repair
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Fast, certified biomedical solutions for the most frequent endoscope failures encountered by hospital endoscopy units.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonIssues.map((issue, idx) => {
                const IconComponent = issue.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:bg-[#06162d] group-hover:text-white transition-colors duration-300">
                        <IconComponent size={26} />
                      </div>

                      <h3 className="text-xl font-bold text-[#06162d] mb-4">
                        {issue.title}
                      </h3>

                      <ul className="space-y-3">
                        {issue.points.map((pt, pIdx) => (
                          <li key={pIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <button
                        onClick={() => openConsult(`Inquiry for ${issue.title}`)}
                        className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1.5"
                      >
                        <span>Request Repair Diagnostic</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR REPAIR PROCESS (Deep Navy)
        ========================================================================= */}
        <section className="py-24 bg-[#06162d] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-bold uppercase tracking-wider">
                PRECISION WORKFLOW
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Our 4-Step Repair Process
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                A transparent, rigorous biomedical pathway from initial diagnostic inspection to hospital operating theater delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {repairSteps.map((stepItem, idx) => (
                <div
                  key={idx}
                  className="relative bg-white/5 rounded-3xl p-7 border border-white/10 hover:border-sky-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-4xl sm:text-5xl font-black text-sky-400/40 mb-4 font-mono">
                      {stepItem.step}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {stepItem.title}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-sky-400 font-semibold">
                    <CheckCircle2 size={14} />
                    <span>Step {stepItem.step} Verified</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 5: WHY CHOOSE AJ MEDICAL FOR ENDOSCOPY REPAIR (White)
        ========================================================================= */}
        <section className="py-24 bg-white text-[#06162d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Why Choose Points */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-600 uppercase">
                    THE AJ MEDICAL ADVANTAGE
                  </span>
                  <span className="w-12 h-0.5 bg-sky-500" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06162d] tracking-tight leading-tight">
                  Why Choose <br />
                  <span className="text-sky-600">AJ Medical Equipment Trading</span>
                </h2>

                <p className="text-slate-600 text-base leading-relaxed">
                  Healthcare facilities throughout the UAE and Gulf region rely on our specialized endoscopy center for dependable repairs, exceptional precision, and prompt technical support.
                </p>

                <div className="space-y-4 pt-2">
                  {whyChoosePoints.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                          <IconComp size={22} />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-[#06162d] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Technician Scope Tuning Photograph */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100">
                  <Image
                    src="/images/technician-scope-tuning.webp"
                    alt="Biomedical technician tuning endoscope optical rod system"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 460px"
                  />
                  
                  {/* Floating Trust Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#06162d]/95 backdrop-blur-md rounded-2xl p-5 text-white border border-white/10 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center font-bold">
                        <CheckCircle2 size={22} />
                      </div>
                      <div>
                        <div className="text-sm font-bold">99.4% Repair Success Rate</div>
                        <div className="text-xs text-slate-300">Over 3,500+ scopes serviced across UAE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: CONSULTATION / REPAIR SUPPORT CTA BANNER
        ========================================================================= */}
        <section className="py-20 bg-gradient-to-br from-[#06162d] via-[#0b2447] to-[#040e1e] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white/10 rounded-[3rem] p-8 sm:p-12 lg:p-16 border border-white/15 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
              
              <div className="max-w-2xl space-y-4 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/20 text-sky-300 text-xs font-bold uppercase tracking-wider">
                  URGENT CLINICAL RESPONSE
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  Need Urgent Endoscope Repair?
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Our certified biomedical team provides swift diagnostics, emergency loaner units, and dependable repair turnaround. Get in touch right away.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                <button
                  onClick={() => openConsult('Urgent Endoscope Repair Consultation')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#06162d] font-bold text-sm sm:text-base hover:bg-sky-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Request Urgent Repair</span>
                  <ArrowRight size={17} />
                </button>

                <a
                  href="tel:+97142285650"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all"
                >
                  <PhoneCall size={16} className="text-sky-400" />
                  <span>Call Biomedical Desk</span>
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
        initialService={modalTitle}
      />
    </div>
  );
}
