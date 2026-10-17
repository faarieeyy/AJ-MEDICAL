'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, Phone, MessageCircle, Linkedin, Facebook, Instagram, Youtube, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  showNewsletter?: boolean;
}

export default function Footer({ showNewsletter = false }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterSent(false);
      setNewsletterEmail('');
    }, 3000);
  };

  return (
    <footer className="bg-[#06162d] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Socials */}
          <div className="space-y-4">
            <Link href="/" className="inline-block" aria-label="AJ Medical Home">
              <div className="relative h-11 w-48">
                <Image
                  src="/images/logo-white.webp"
                  alt="AJ MEDICAL EQUIPMENT TRADING"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Reliable medical equipment solutions for a healthier tomorrow. Your trusted partner for healthcare facilities across the UAE and beyond.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#06162d] hover:bg-sky-400 hover:border-sky-400 transition-all duration-200"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Quick Links
              <span className="block w-7 h-0.5 bg-sky-400 mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Our Services
              <span className="block w-7 h-0.5 bg-sky-400 mt-1 rounded-full" />
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/endoscopy-repair" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Flexible Endoscope Repair
                </Link>
              </li>
              <li>
                <Link href="/services/endoscopy-repair" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Rigid Endoscope Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Karl Storz Equipment Servicing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Ultrasound Probe Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Board Level Repair
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors">
                  AMC, PPM & EST Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info or Newsletter */}
          <div>
            {showNewsletter ? (
              <div>
                <h4 className="text-base font-bold text-white mb-4 relative inline-block">
                  Follow Our Updates
                  <span className="block w-7 h-0.5 bg-sky-400 mt-1 rounded-full" />
                </h4>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  Stay connected for the latest products, solutions, and news from AJ Medical.
                </p>
                <form onSubmit={handleNewsletter} className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-full bg-white/10 border border-white/15 text-sm text-white placeholder:text-slate-400 outline-none focus:border-sky-400 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-full bg-sky-400 text-[#06162d] flex items-center justify-center hover:bg-sky-300 transition-colors"
                    aria-label="Subscribe"
                  >
                    {newsletterSent ? <CheckCircle2 size={16} /> : <ArrowRight size={16} />}
                  </button>
                </form>
                {newsletterSent && (
                  <p className="text-xs text-sky-400 mt-2">Subscribed successfully!</p>
                )}
              </div>
            ) : (
              <div>
                <h4 className="text-base font-bold text-white mb-4 relative inline-block">
                  Contact Us
                  <span className="block w-7 h-0.5 bg-sky-400 mt-1 rounded-full" />
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <MapPin size={17} className="text-sky-400 shrink-0 mt-0.5" />
                    <span>Warehouse No. 5, Al Quoz Industrial Area, Dubai, UAE</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={17} className="text-sky-400 shrink-0" />
                    <a href="mailto:info@ajmedical.ae" className="hover:text-sky-400 transition-colors">
                      info@ajmedical.ae
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={17} className="text-sky-400 shrink-0" />
                    <a href="tel:+971501234567" className="hover:text-sky-400 transition-colors">
                      +971 50 123 4567
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageCircle size={17} className="text-sky-400 shrink-0" />
                    <a
                      href="https://wa.me/971501234567"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-sky-400 transition-colors"
                    >
                      +971 50 123 4567 (WhatsApp)
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 AJ Medical Equipment Trading. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-sky-400 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-sky-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
