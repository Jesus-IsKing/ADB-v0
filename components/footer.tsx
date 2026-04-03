'use client';

import React from 'react';
import Link from 'next/link';
import { ButtonCTA } from './button-cta';

import { Magnetic } from './ui/magnetic';

interface FooterProps {
  onCTAClick?: () => void;
  onBackToTop?: () => void;
}

const navLinks = [
  { label: 'Lookbook', href: '/#lookbook' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Artistry', href: '/#features' },
  { label: 'Services', href: '/#pricing' },
  { label: 'Contact', href: '/contact' },
] as const;

export const Footer: React.FC<FooterProps> = ({ onCTAClick, onBackToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary border-t border-border pt-20 pb-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-5 space-y-8">
            <h3 className="text-4xl font-serif font-medium text-foreground tracking-tighter">Adorabella <span className="italic font-light text-accent">House</span></h3>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">
              Following Jesus Christ, the Only God. A private destination for hair artistry and restoration. Devoted to excellence in every strand, guided by Grace alone.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-accent/60">Soli Deo Gloria</span>
              <div className="w-10 h-px bg-accent/20" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-accent/60 italic text-balance">Est // 2009 — East Wenatchee</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-foreground">Archive</h4>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors font-light focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Support & Contact */}
          <div className="md:col-span-4 space-y-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-foreground">Concierge</h4>
              <div className="space-y-4">
                <a
                  href="tel:5096794206"
                  className="block text-2xl font-serif text-foreground hover:text-accent transition-colors"
                >
                  509-679-4206
                </a>
                <p className="text-sm text-muted-foreground font-light italic">
                  Available for phone calls and text messages.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <ButtonCTA
                size="md"
                onClick={onCTAClick}
                className="w-full sm:w-auto px-12"
              >
                Inquire Now
              </ButtonCTA>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[10px] tracking-[0.2em] font-bold uppercase text-muted-foreground/50">
            <p>© {currentYear} Adorabella House</p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent/20" />
            <p>Wenatchee, WA</p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent/20" />
            <p>Private Destination</p>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={onBackToTop}
              className="group flex flex-col items-center gap-3 text-accent hover:text-[#c9a227] transition-all focus:outline-none"
              aria-label="Back to top"
            >
              <div className="w-10 h-10 border border-accent/20 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7-7m0 0L5 14m7-7v12"></path>
                </svg>
              </div>
              <span className="text-[8px] font-bold tracking-[0.4em] uppercase">Return to top</span>
            </button>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
};
