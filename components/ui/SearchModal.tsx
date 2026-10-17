'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, Search, ArrowRight, Wrench } from 'lucide-react';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchableItems = [
  { title: 'Flexible Endoscope Repair', category: 'Services', url: '/services/endoscopy-repair', desc: 'Precision servicing for video & fiber colonoscopes, gastroscopes, and bronchoscopes.' },
  { title: 'Rigid Endoscope Repair', category: 'Services', url: '/services/endoscopy-repair', desc: 'Rod lens replacement, optical realignment, and sealing for rigid laparoscopes.' },
  { title: 'Karl Storz Equipment Servicing', category: 'Services', url: '/services', desc: 'Specialized maintenance for Storz light sources, video processors, and camera heads.' },
  { title: 'Ultrasound Probe Repair', category: 'Services', url: '/services', desc: 'Lens replacement, cable re-wiring, and acoustic crystal restoration.' },
  { title: 'Board Level Repair', category: 'Services', url: '/services', desc: 'PCB diagnostic and component replacement for medical display units.' },
  { title: 'AMC & Preventive Maintenance', category: 'Services', url: '/services', desc: 'Annual Maintenance Contracts, Periodic PPM, and Electrical Safety Testing.' },
  { title: 'About AJ Medical Equipment Trading', category: 'About Us', url: '/about', desc: 'Our journey, mission, vision, and healthcare commitment.' },
  { title: 'Regional Reach (UAE, GCC, Africa)', category: 'About Us', url: '/about', desc: 'Serving healthcare providers across UAE, GCC nations, and African regions.' },
  { title: 'Contact Dubai Workshop & Offices', category: 'Contact', url: '/contact', desc: 'Warehouse No. 5, Al Quoz Industrial Area, Dubai, UAE.' }
];

export default function SearchModal({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? searchableItems.slice(0, 5)
    : searchableItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#06162d]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
          aria-label="Close search"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-4 pr-10">
          <Search size={20} className="text-sky-500 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search services, repairs, equipment..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-medium text-[#06162d] outline-none placeholder:text-slate-400 bg-transparent"
          />
        </div>

        <div>
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            {query.trim() === '' ? 'Popular Services & Links' : `Search Results (${filtered.length})`}
          </span>

          <div className="mt-3 flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <p className="py-6 text-center text-sm text-slate-500">
                No matching results found for &ldquo;{query}&rdquo;.
              </p>
            ) : (
              filtered.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/60 border border-slate-100 hover:border-sky-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                      <Wrench size={17} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0c1b33] group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500 line-clamp-1">{item.desc}</div>
                    </div>
                  </div>
                  <ArrowRight size={15} className="text-sky-500 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
