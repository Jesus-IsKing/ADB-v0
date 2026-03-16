'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtonCTA } from './button-cta';

interface NavbarProps {
  onCTAClick?: () => void;
  onMenuItemClick?: (section: string) => void;
}

const menuItems = [
  { label: 'Lookbook', href: '#lookbook', hash: true },
  { label: 'Services', href: '#features', hash: true },
  { label: 'Menu', href: '#pricing', hash: true },
  { label: 'About', href: '#about', hash: true },
  { label: 'Contact', href: '/contact', hash: false },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onCTAClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) return; // let Link navigate when on other pages
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-gold" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - always goes to home hero */}
          <Link
            href="/"
            className="text-2xl font-bold text-accent hover:text-[#c9a227] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
          >
            Adorabella
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) =>
              item.hash ? (
                <Link
                  key={item.label}
                  href={isHome ? item.href : `/${item.href}`}
                  onClick={(e) => handleHashClick(e, item.href)}
                  className="text-foreground hover:text-accent transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <ButtonCTA size="sm" onClick={onCTAClick}>
              Connect
            </ButtonCTA>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
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
              {menuItems.map((item) =>
                item.hash ? (
                  <Link
                    key={item.label}
                    href={isHome ? item.href : `/${item.href}`}
                    onClick={(e) => {
                      handleHashClick(e, item.href);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-foreground transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/10 text-foreground transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="px-3 py-3 pt-4 border-t border-border">
                <ButtonCTA
                  size="sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onCTAClick?.();
                  }}
                  className="w-full"
                >
                  Connect
                </ButtonCTA>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
