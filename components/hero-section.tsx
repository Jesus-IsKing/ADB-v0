'use client';

import Image from 'next/image';
import { ButtonCTA } from './button-cta';

interface HeroSectionProps {
  onCTAClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCTAClick }) => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-background pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slideInLeft space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Premium Chair Rentals for{' '}
                <span className="text-accent">Beauty Professionals</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Start your salon business with Adorabella. Flexible terms, premium facilities, and dedicated support to help you thrive.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <ButtonCTA size="lg" onClick={onCTAClick}>
                Get Started Today
              </ButtonCTA>
              <ButtonCTA size="lg" variant="outline">
                Learn More
              </ButtonCTA>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Beauty Professionals</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-accent">24/7</p>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slideInRight relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/hero.jpg"
              alt="Luxury salon chair rental space - Adorabella Premium Beauty Studio"
              fill
              className="object-cover rounded-xl shadow-2xl shadow-accent/20"
              priority
            />
            {/* Decorative accent border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/30 to-transparent rounded-xl -z-10 blur-xl opacity-30" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};
