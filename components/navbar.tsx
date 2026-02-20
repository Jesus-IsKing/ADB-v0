'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ButtonCTA } from './button-cta';

interface NavbarProps {
  onCTAClick?: () => void;
  onMenuItemClick?: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCTAClick, onMenuItemClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-accent hover:text-[#c9a227] transition-colors"
          >
            Adorabella
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item.href)}
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <ButtonCTA size="sm" onClick={onCTAClick}>
              Inquire Now
            </ButtonCTA>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary/80 backdrop-blur-md border-t border-border animate-slideUp">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.href)}
                  className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-3 pt-4 border-t border-border">
                <ButtonCTA
                  size="sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onCTAClick?.();
                  }}
                  className="w-full"
                >
                  Inquire Now
                </ButtonCTA>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
