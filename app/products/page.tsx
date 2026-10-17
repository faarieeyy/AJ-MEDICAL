'use client';
import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ConsultationModal from '@/components/ui/ConsultationModal';
import { ShieldCheck, Check, ArrowRight, Tag, Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Karl Storz Image 1 S Camera System & Light Source',
    category: 'Endoscopic Imaging',
    condition: 'Refurbished / Certified',
    img: '/images/storz-equipment.webp',
    desc: 'Full HD video endoscopy tower with Xenon 300W light source and high-resolution camera head.',
    specs: ['1080p Full HD', 'Auto-shutter', 'Genuine Storz Components']
  },
  {
    name: 'Olympus CF-H190L Video Colonoscope',
    category: 'Flexible Endoscopes',
    condition: 'Refurbished / Tested',
    img: '/images/flexible-endoscope.webp',
    desc: 'High-definition flexible colonoscope with Narrow Band Imaging (NBI) and 170° wide angle field of view.',
    specs: ['NBI Compatible', '3.7mm Channel', 'Pressure tested 100%']
  },
  {
    name: 'Rigid Laparoscope 10mm 30° Optical Scope',
    category: 'Rigid Endoscopes',
    condition: 'Brand New OEM',
    img: '/images/rigid-endoscope.webp',
    desc: 'Autoclavable HD rod lens laparoscope designed for minimally invasive abdominal and thoracic procedures.',
    specs: ['Autoclavable', 'Sapphire Lens', 'Universal light post']
  },
  {
    name: 'GE Healthcare 4C-RS Convex Ultrasound Probe',
    category: 'Ultrasound Equipment',
    condition: 'Refurbished / Calibrated',
    img: '/images/ultrasound-probe.webp',
    desc: 'Multi-frequency abdominal and OB/GYN convex transducer with renewed acoustic lens and strain relief.',
    specs: ['2.0 - 5.0 MHz', 'Zero Crystal Dropout', 'Full acoustic test']
  },
  {
    name: 'Biomedical Patient Monitoring Workstation Cart',
    category: 'Hospital Hardware',
    condition: 'Certified',
    img: '/images/equipment-cart.webp',
    desc: 'Heavy-duty medical cart with articulated monitor arm, isolation transformer, and anti-static casters.',
    specs: ['Modular Shelves', 'Cable Management', 'Medical grade']
  },
  {
    name: 'Minimally Invasive Surgical Laparoscopic Instrument Set',
    category: 'Surgical Instruments',
    condition: 'Brand New',
    img: '/images/surgical-instruments.webp',
    desc: 'Complete set of Maryland graspers, Johan graspers, scissors, and clip appliers made from German stainless steel.',
    specs: ['German Stainless', '360° Rotation', 'Insulated Shafts']
  }
];

export default function ProductsPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Flexible Endoscopes',
    'Rigid Endoscopes',
    'Endoscopic Imaging',
    'Ultrasound Equipment',
    'Hospital Hardware',
    'Surgical Instruments'
  ];

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const requestProductQuote = (name: string) => {
    setSelectedProduct(name);
    setIsConsultOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#06162d]">
      <Header theme="light" active="products" />

      <main className="flex-grow">
        {/* Hero Header */}
        <section className="pt-12 pb-20 bg-gradient-to-b from-[#0c2b57] to-[#06162d] text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-sky-400 uppercase">
              MEDICAL EQUIPMENT CATALOGUE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Certified Medical Equipment <span className="text-sky-400">& Supply</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Browse our inventory of premium, brand new and certified refurbished medical equipment, surgical instruments, and consumables trusted by leading hospitals across the UAE and GCC.
            </p>
          </div>
        </section>

        {/* Product Section */}
        <section className="py-16 bg-slate-50 text-[#06162d] rounded-t-[3rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Pills */}
            <div className="flex gap-2.5 overflow-x-auto pb-6 mb-8 scrollbar-none">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-[#06162d] text-sky-400 shadow-md'
                      : 'bg-white text-slate-600 hover:text-[#06162d] border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-4 left-4 bg-[#06162d]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/10">
                        {item.condition}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-2">
                        {item.category}
                      </div>
                      <h3 className="text-lg font-bold text-[#06162d] mb-2 leading-snug">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2">
                        {item.desc}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-slate-100">
                        {item.specs.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                            <Check size={13} className="text-sky-600" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => requestProductQuote(item.name)}
                      className="w-full py-3 px-4 rounded-xl bg-[#06162d] hover:bg-sky-600 text-white font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Inquire About Pricing</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer showNewsletter={false} />

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        initialService={`Product Quote: ${selectedProduct}`}
      />
    </div>
  );
}
