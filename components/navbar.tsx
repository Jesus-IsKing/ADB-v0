'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ButtonCTA } from './button-cta';
import { Magnetic } from './ui/magnetic';

interface NavbarProps {
  onCTAClick?: () => void;
  onMenuItemClick?: (section: string) => void;
}

const menuItems = [
  { label: 'Lookbook', href: '#lookbook', hash: true },
  { label: 'Philosophy', href: '#philosophy', hash: true },
  { label: 'Artistry', href: '#features', hash: true },
  { label: 'Menu', href: '#pricing', hash: true },
  { label: 'Contact', href: '/contact', hash: false },
] as const;

export const Navbar: React.FC<NavbarProps> = ({ onCTAClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (!isHome) return;
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-[100] glass-gold h-16 md:h-20" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Magnetic strength={0.3}>
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-serif italic text-accent hover:text-[#c9a227] transition-all focus:outline-none rounded-sm px-2 py-1"
            >
              Adorabella
            </Link>
          </Magnetic>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12 text-[10px] font-bold tracking-[0.3em] uppercase">
            {menuItems.map((item) => (
              <Magnetic key={item.label} strength={0.2}>
                <Link
                  href={isHome ? item.href : item.hash ? `/${item.href}` : item.href}
                  onClick={(e) => item.hash ? handleHashClick(e, item.href) : undefined}
                  className={`transition-all duration-300 hover:text-accent relative group px-2 py-1 ${pathname === item.href ? 'text-accent' : 'text-foreground'
                    }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </Link>
              </Magnetic>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Magnetic strength={0.2}>
              <button
                onClick={onCTAClick}
                className="px-8 py-3 bg-foreground text-background text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-accent transition-all duration-500 rounded-sm"
              >
                Inquire
              </button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[110] p-4 text-foreground focus:outline-none"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-0.5 w-full bg-accent transition-all duration-500 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-accent transition-all duration-500 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-accent transition-all duration-500 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-[100] flex flex-col items-center justify-center space-y-12 md:hidden"
            >
              <div className="flex flex-col items-center space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      href={isHome ? item.href : item.hash ? `/${item.href}` : item.href}
                      onClick={(e) => {
                        if (item.hash) handleHashClick(e, item.href);
                        setIsMenuOpen(false);
                      }}
                      className="text-3xl sm:text-4xl font-serif italic text-foreground hover:text-accent transition-all duration-500"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12"
              >
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onCTAClick?.();
                  }}
                  className="px-12 py-5 bg-accent text-accent-foreground text-xs font-bold tracking-[0.4em] uppercase"
                >
                  Join Waitlist
                </button>
              </motion.div>

              {/* Mobile Menu Footer Decoration */}
              <div className="absolute bottom-12 text-[10px] tracking-[0.5em] text-accent/30 uppercase">
                EST // 2009
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
