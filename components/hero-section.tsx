'use client';

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-16 w-full flex justify-center items-center px-4 md:px-6 bg-background">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-3xl md:rounded-[48px] border border-border bg-card shadow-lg min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center duration-500">
          {/* Animated dithering background effect */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-25">
            <svg
              className={`w-full h-full transition-all duration-500 ${isHovered ? 'opacity-40 dark:opacity-35' : 'opacity-30 dark:opacity-25'}`}
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 1200 700"
            >
              <defs>
                <filter id="dither-noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale={isHovered ? '15' : '8'} />
                </filter>
              </defs>
              <rect width="1200" height="700" fill="#fb7232" opacity="0.6" filter="url(#dither-noise)" />
            </svg>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-card via-transparent to-card opacity-80 z-1" />

          {/* Content */}
          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center py-12 md:py-0">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Premium Salon Spaces
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-6 leading-[1.1]">
              Your Chair,{' '}
              <span className="text-foreground/70">
                Your Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              Join 50+ thriving beauty professionals at Adorabella. Flexible terms, premium facilities, and 24/7 support—everything you need to build your salon empire.
            </p>

            {/* Button */}
            <button
              onClick={onCTAClick}
              className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 md:px-12 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20"
            >
              <span className="relative z-10">Join Adorabella Today</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            {/* Trust indicators */}
            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">50+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Professionals</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">100%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl font-bold text-primary">24/7</p>
                <p className="text-xs md:text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
