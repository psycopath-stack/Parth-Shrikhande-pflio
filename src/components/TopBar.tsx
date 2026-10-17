import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface TopBarProps {
  onContactClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050507]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#"
              className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 group"
            >
              <span className="text-emerald-400 font-mono text-base font-semibold">PS.</span>
              <span>PARTH SHRIKHANDE</span>
            </a>

            {/* Zone 2: 4-5 Clean Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-emerald-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={onContactClick}
                className="px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all duration-200 shadow-md shadow-emerald-500/20 active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl md:hidden pt-20 px-6 pb-8 flex flex-col justify-between border-b border-white/10 animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-semibold text-slate-200 hover:text-emerald-400 transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-xs text-center text-slate-400 font-mono">
              shrikhandeparth32@gmail.com · +91 8839879661
            </div>
          </div>
        </div>
      )}
    </>
  );
};
