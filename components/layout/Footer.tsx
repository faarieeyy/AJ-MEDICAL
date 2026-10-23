'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Phone, Mail, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

interface FooterProps {
  showNewsletter?: boolean;
}

export default function Footer({ showNewsletter = false }: FooterProps) {
  return (
    <footer className="w-full bg-[#03152d] text-white relative overflow-hidden select-none">
      {/* =========================================================================
          DESKTOP & TABLET CONTAINER (Exact 2:1 Aspect Ratio matching 2048x1024 Background)
      ========================================================================= */}
      <div className="relative w-full aspect-[2048/1024] hidden md:block">
        {/* Background Graphic (Picture 2 with baked [AJ] emblem, vertical column dividers, contact & social circles, copyright line, and bottom wave) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <Image
            src="/images/footer-bg-clean.webp"
            alt="AJ Medical Equipment Trading Footer Background"
            fill
            priority
            unoptimized
            quality={100}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* -------------------------------------------------------------
            COLUMN 1: BRAND IDENTITY, DESCRIPTION & SOCIAL LINKS
        ------------------------------------------------------------- */}
        {/* Brand Text Next to the Baked [AJ] Octagon Emblem */}
        <Link
          href="/"
          className="absolute left-[12.11%] top-[24.0%] -translate-y-1/2 z-10 group"
          aria-label="AJ Medical Equipment Trading Home"
        >
          <span className="block text-white font-extrabold text-base lg:text-xl xl:text-2xl tracking-tight leading-none group-hover:text-[#38bdf8] transition-colors">
            AJ MEDICAL
          </span>
          <span className="block text-slate-300 font-semibold text-[8px] lg:text-[10px] xl:text-xs tracking-widest leading-tight mt-1">
            EQUIPMENT TRADING
          </span>
        </Link>

        {/* Paragraph */}
        <p className="absolute left-[6.35%] top-[36.52%] max-w-[21.97%] text-[10px] lg:text-xs xl:text-sm text-slate-300 leading-relaxed z-10">
          Reliable medical equipment solutions with expert support and exceptional service. Your trusted partner in healthcare equipment.
        </p>

        {/* Clickable Social Overlays over the 3 Baked Badges (LinkedIn, Instagram, WhatsApp) */}
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="absolute left-[8.22%] top-[57.91%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full z-10 hover:ring-2 hover:ring-[#38bdf8] hover:bg-white/10 transition-all cursor-pointer"
          aria-label="LinkedIn"
          title="Follow AJ Medical on LinkedIn"
        />

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="absolute left-[13.32%] top-[57.74%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full z-10 hover:ring-2 hover:ring-[#38bdf8] hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Instagram"
          title="Follow AJ Medical on Instagram"
        />

        {/* WhatsApp */}
        <a
          href="https://wa.me/971501234567"
          target="_blank"
          rel="noreferrer"
          className="absolute left-[18.46%] top-[57.84%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full z-10 hover:ring-2 hover:ring-[#38bdf8] hover:bg-white/10 transition-all cursor-pointer"
          aria-label="WhatsApp"
          title="Chat with AJ Medical on WhatsApp"
        />

        {/* -------------------------------------------------------------
            COLUMN 2: QUICK LINKS
        ------------------------------------------------------------- */}
        <div className="absolute left-[33.69%] top-[23.24%] z-10">
          <h4 className="text-sm lg:text-base xl:text-lg font-bold text-white leading-tight">
            Quick Links
          </h4>
          <div className="w-7 lg:w-9 h-0.5 bg-[#38bdf8] rounded-full mt-1.5 mb-4" />
        </div>

        <div className="absolute left-[33.69%] top-[33.20%] w-[12.70%] z-10">
          <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-slate-300">
            <li>
              <Link href="/" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Home</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>About Us</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Services</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/products" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Products</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Contact</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
          </ul>
        </div>

        {/* -------------------------------------------------------------
            COLUMN 3: OUR SERVICES
        ------------------------------------------------------------- */}
        <div className="absolute left-[50.10%] top-[23.24%] z-10">
          <h4 className="text-sm lg:text-base xl:text-lg font-bold text-white leading-tight">
            Our Services
          </h4>
          <div className="w-7 lg:w-9 h-0.5 bg-[#38bdf8] rounded-full mt-1.5 mb-4" />
        </div>

        <div className="absolute left-[50.10%] top-[33.20%] w-[17.58%] z-10">
          <ul className="space-y-2 lg:space-y-3 text-xs lg:text-sm text-slate-300">
            <li>
              <Link href="/services" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Endoscopy Repair</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Ultrasound Repair</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Medical Equipment Trading</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/services" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Preventive Maintenance</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center justify-between hover:text-[#38bdf8] transition-colors group">
                <span>Technical Support</span>
                <ChevronRight size={14} className="text-slate-400 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 transition-all" />
              </Link>
            </li>
          </ul>
        </div>

        {/* -------------------------------------------------------------
            COLUMN 4: CONTACT INFO
        ------------------------------------------------------------- */}
        <div className="absolute left-[73.83%] top-[23.24%] z-10">
          <h4 className="text-sm lg:text-base xl:text-lg font-bold text-white leading-tight">
            Contact Info
          </h4>
          <div className="w-7 lg:w-9 h-0.5 bg-[#38bdf8] rounded-full mt-1.5 mb-4" />
        </div>

        {/* Phone Details (aligned next to the baked phone badge) */}
        <div className="absolute left-[78.91%] top-[31.25%] z-10 space-y-0.5">
          <span className="block text-xs lg:text-sm font-bold text-white">
            Phone
          </span>
          <a
            href="tel:+971501234567"
            className="block text-xs lg:text-sm text-slate-300 hover:text-[#38bdf8] transition-colors"
          >
            +971 50 123 4567
          </a>
          <a
            href="tel:+97141234567"
            className="block text-xs lg:text-sm text-slate-300 hover:text-[#38bdf8] transition-colors"
          >
            +971 4 123 4567
          </a>
        </div>

        {/* Email Details (aligned next to the baked mail badge) */}
        <div className="absolute left-[78.91%] top-[44.14%] z-10 space-y-0.5">
          <span className="block text-xs lg:text-sm font-bold text-white">
            Email
          </span>
          <a
            href="mailto:info@ajmedical.ae"
            className="block text-xs lg:text-sm text-slate-300 hover:text-[#38bdf8] transition-colors"
          >
            info@ajmedical.ae
          </a>
          <a
            href="mailto:sales@ajmedical.ae"
            className="block text-xs lg:text-sm text-slate-300 hover:text-[#38bdf8] transition-colors"
          >
            sales@ajmedical.ae
          </a>
        </div>

        {/* Location Details (aligned next to the baked map pin badge) */}
        <div className="absolute left-[78.91%] top-[57.03%] z-10 space-y-0.5">
          <span className="block text-xs lg:text-sm font-bold text-white">
            Location
          </span>
          <p className="text-xs lg:text-sm text-slate-300 leading-snug">
            Warehouse No. 5,<br />
            Al Quoz Industrial Area,<br />
            Dubai, UAE
          </p>
        </div>

        {/* -------------------------------------------------------------
            BOTTOM BAR (Legal & Copyright)
        ------------------------------------------------------------- */}
        <div className="absolute left-[6.35%] top-[79.10%] z-10">
          <p className="text-[10px] lg:text-xs text-slate-300">
            © 2024 AJ Medical Equipment Trading. All rights reserved.
          </p>
        </div>

        <div className="absolute right-[6.54%] top-[79.10%] z-10 flex items-center gap-3 text-[10px] lg:text-xs text-slate-300">
          <Link href="/privacy" className="hover:text-[#38bdf8] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-slate-500">|</span>
          <Link href="/terms" className="hover:text-[#38bdf8] transition-colors">
            Terms & Conditions
          </Link>
        </div>
      </div>

      {/* =========================================================================
          MOBILE CONTAINER (< md)
      ========================================================================= */}
      <div className="md:hidden px-6 py-14 space-y-10">
        {/* Brand */}
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center font-bold text-white text-base">
              AJ
            </div>
            <div>
              <span className="block font-extrabold text-lg text-white">AJ MEDICAL</span>
              <span className="block text-[9px] tracking-widest text-slate-400">EQUIPMENT TRADING</span>
            </div>
          </Link>
          <p className="text-xs text-slate-300 leading-relaxed pt-1">
            Reliable medical equipment solutions with expert support and exceptional service. Your trusted partner in healthcare equipment.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-white/20 bg-transparent flex items-center justify-center text-white hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links & Our Services */}
        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Quick Links</h4>
            <div className="w-6 h-0.5 bg-[#38bdf8] rounded-full" />
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-[#38bdf8]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#38bdf8]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#38bdf8]">Services</Link></li>
              <li><Link href="/products" className="hover:text-[#38bdf8]">Products</Link></li>
              <li><Link href="/contact" className="hover:text-[#38bdf8]">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Our Services</h4>
            <div className="w-6 h-0.5 bg-[#38bdf8] rounded-full" />
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/services" className="hover:text-[#38bdf8]">Endoscopy Repair</Link></li>
              <li><Link href="/services" className="hover:text-[#38bdf8]">Ultrasound Repair</Link></li>
              <li><Link href="/services" className="hover:text-[#38bdf8]">Medical Equipment Trading</Link></li>
              <li><Link href="/services" className="hover:text-[#38bdf8]">Preventive Maintenance</Link></li>
              <li><Link href="/contact" className="hover:text-[#38bdf8]">Technical Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <h4 className="text-sm font-bold text-white">Contact Info</h4>
          <div className="w-6 h-0.5 bg-[#38bdf8] rounded-full" />
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0a284e] border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                <Phone size={15} />
              </div>
              <div>
                <span className="block font-bold text-white">Phone</span>
                <a href="tel:+971501234567" className="block hover:text-[#38bdf8]">+971 50 123 4567</a>
                <a href="tel:+97141234567" className="block hover:text-[#38bdf8]">+971 4 123 4567</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0a284e] border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                <Mail size={15} />
              </div>
              <div>
                <span className="block font-bold text-white">Email</span>
                <a href="mailto:info@ajmedical.ae" className="block hover:text-[#38bdf8]">info@ajmedical.ae</a>
                <a href="mailto:sales@ajmedical.ae" className="block hover:text-[#38bdf8]">sales@ajmedical.ae</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0a284e] border border-sky-400/30 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={15} />
              </div>
              <div>
                <span className="block font-bold text-white">Location</span>
                <p className="text-slate-300">
                  Warehouse No. 5, Al Quoz Industrial Area, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-400">
          <p>© 2024 AJ Medical Equipment Trading. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-[#38bdf8]">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#38bdf8]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
