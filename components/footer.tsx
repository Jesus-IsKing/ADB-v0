'use client';

import React from 'react';
import Link from 'next/link';
import { ButtonCTA } from './button-cta';

interface FooterProps {
  onCTAClick?: () => void;
  onBackToTop?: () => void;
}

const navLinks = [
  { label: 'Lookbook', href: '/#lookbook' },
  { label: 'Services', href: '/#features' },
  { label: 'Menu', href: '/#pricing' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const Footer: React.FC<FooterProps> = ({ onCTAClick, onBackToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Adorabella</h3>
            <p className="text-muted-foreground">
              Experience the art of premium beauty at the Adorabella House, a dedicated destination for restoration.
            </p>
          </div>

          {/* Navigation - works from home and contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-foreground">Navigation</h4>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-muted-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-foreground">Support</h4>
            <Link
              href="/contact"
              className="block text-muted-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded"
            >
              Contact Page
            </Link>
            <a
              href="tel:5096794206"
              className="block text-muted-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded"
            >
              509-679-4206
            </a>
            <a
              href="sms:5096794206"
              className="block text-muted-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded"
            >
              Send a Text
            </a>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Inquiries</h4>
            <p className="text-sm text-muted-foreground">
              Directly handled by Natalie.
            </p>
            <ButtonCTA
              size="sm"
              onClick={onCTAClick}
              className="w-full"
            >
              Request Your Invitation
            </ButtonCTA>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Adorabella Salon. All rights reserved.
          </p>
          <button
            onClick={onBackToTop}
            className="text-accent hover:text-[#c9a227] transition-colors font-medium flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded"
            aria-label="Back to top"
          >
            Back to Top
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7-7m0 0L5 14m7-7v12"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
