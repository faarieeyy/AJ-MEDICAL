'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X, ArrowRight } from 'lucide-react';
import ConsultationModal from '../ui/ConsultationModal';
import SearchModal from '../ui/SearchModal';

interface HeaderProps {
  theme?: 'light' | 'dark';
  active?: 'home' | 'about' | 'services' | 'products' | 'blog' | 'contact';
  transparent?: boolean;
}

export default function Header({ theme = 'light', active = 'home', transparent = false }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          transparent
            ? isScrolled
              ? isDark
                ? 'bg-[#02182f]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
                : 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
              : 'bg-transparent border-b border-transparent'
            : isDark
            ? 'bg-[#06162d]/95 backdrop-blur-md border-b border-white/10'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="AJ Medical Equipment Trading Home">
            <div className="relative h-11 w-52 sm:w-60">
              <Image
                src={isDark ? '/images/logo-white-hexagon.webp' : '/images/logo-dark-hexagon.webp'}
                alt="AJ MEDICAL EQUIPMENT TRADING"
                fill
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                active === 'home'
                  ? isDark ? 'text-sky-400' : 'text-sky-600'
                  : isDark ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Home
              {active === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
              )}
            </Link>

            <Link
              href="/about"
              className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                active === 'about'
                  ? isDark ? 'text-sky-400' : 'text-sky-600'
                  : isDark ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              About Us
              {active === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
              )}
            </Link>

            <Link
              href="/services"
              className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                active === 'services'
                  ? isDark ? 'text-sky-400' : 'text-sky-600'
                  : isDark ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Services
              {active === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
              )}
            </Link>

            <Link
              href="/products"
              className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                active === 'products'
                  ? isDark ? 'text-sky-400' : 'text-sky-600'
                  : isDark ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Products
              {active === 'products' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
              )}
            </Link>

            {!transparent && (
              <Link
                href="/blog"
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                  active === 'blog'
                    ? isDark ? 'text-sky-400' : 'text-sky-600'
                    : isDark ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-sky-600'
                }`}
              >
                Blog
                {active === 'blog' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
                )}
              </Link>
            )}

            <Link
              href="/contact"
              className={`text-sm font-semibold transition-colors duration-200 relative py-1 ${
                active === 'contact'
                  ? isDark ? 'text-sky-400' : 'text-sky-600'
                  : isDark ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-sky-600'
              }`}
            >
              Contact
              {active === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full" />
              )}
            </Link>
          </nav>

          {/* Action Controls */}
          <div className="flex items-center gap-4">
            {(!transparent || isScrolled) && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2.5 rounded-full transition-colors ${
                  isDark ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-slate-100'
                }`}
                aria-label="Search equipment and services"
              >
                <Search size={19} />
              </button>
            )}

            <button
              onClick={() => setIsConsultOpen(true)}
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 shadow-sm ${
                isDark
                  ? 'bg-transparent border border-white/80 text-white hover:bg-white hover:text-[#06162d]'
                  : 'bg-[#06162d] text-white hover:bg-[#0c2b57] hover:shadow-md'
              }`}
            >
              <span>{active === 'products' || active === 'services' || active === 'about' ? 'Get a Quote' : 'Get a Free Consultation'}</span>
              <ArrowRight size={15} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 rounded-lg ${
                isDark ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
              }`}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="relative w-80 max-w-[85%] bg-[#06162d] text-white p-6 flex flex-col h-full shadow-2xl z-10">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="relative h-9 w-40">
                <Image
                  src="/images/logo-white-hexagon.webp"
                  alt="AJ Medical"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-300 hover:text-white"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex flex-col gap-4 py-8">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${active === 'home' ? 'text-sky-400 font-semibold' : 'text-slate-200'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${active === 'about' ? 'text-sky-400 font-semibold' : 'text-slate-200'}`}
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${active === 'services' ? 'text-sky-400 font-semibold' : 'text-slate-200'}`}
              >
                Services
              </Link>
              <Link
                href="/services/endoscopy-repair"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-slate-400 pl-4 hover:text-sky-300"
              >
                ↳ Endoscopy Repair
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${active === 'products' ? 'text-sky-400 font-semibold' : 'text-slate-200'}`}
              >
                Products
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${active === 'blog' ? 'text-sky-400 font-semibold' : 'text-slate-200'}`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium ${active === 'contact' ? 'text-sky-400 font-semibold' : 'text-slate-200'}`}
              >
                Contact Us
              </Link>
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultOpen(true);
                }}
                className="w-full py-3 bg-sky-400 text-[#06162d] font-bold rounded-full flex items-center justify-center gap-2 hover:bg-sky-300 transition-colors"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modals */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        title={isDark ? 'Request a Free Quote' : 'Get a Free Consultation'}
      />
    </>
  );
}
