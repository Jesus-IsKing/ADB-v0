'use client';

import React from 'react';
import { ParallaxImage } from './ui/parallax-image';
import { Reveal } from './ui/reveal';
import { ButtonCTA } from './button-cta';

interface OwnerSectionProps {
  onCTAClick?: () => void;
}

export const OwnerSection: React.FC<OwnerSectionProps> = ({ onCTAClick }) => {
  return (
    <section
      id="about"
      className="w-full py-24 md:py-40 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <Reveal>
            <div className="relative h-[500px] sm:h-[600px] lg:h-[800px] rounded-[40px] overflow-hidden">
              <ParallaxImage
                src="/natalie-owner.jpg"
                alt="Natalie, Owner of Adorabella Premium Salon"
                speed={0.08}
                className="h-full w-full"
                showWatermark={true}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[40px] pointer-events-none" />
            </div>
          </Reveal>

          {/* Content */}
          <div className="space-y-10 md:space-y-14">
            <Reveal>
              <div className="space-y-6">
                <p className="text-sm font-bold tracking-[0.3em] uppercase text-accent">The Visionary</p>
                <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-medium text-foreground tracking-tight leading-[0.9]">
                  Meet <br /><span className="text-accent italic">Natalie</span>
                </h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
                  With over 15 years of excellence, Natalie founded Adorabella to create a sanctuary where high-end artistry meets expert hair health.
                </p>
              </div>
            </Reveal>

            {/* Quote Story */}
            <Reveal delay={0.3}>
              <div className="relative pl-12 border-l border-accent/30 py-4 italic space-y-6">
                <p className="text-2xl font-serif font-light text-foreground/90 leading-relaxed">
                  "My vision was to create a sanctuary where high-end artistry meets expert hair health. Whether it's a transformation through geometric precision cutting or reviving color-damaged hair, we focus on the integrity of your look."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-accent" />
                  <p className="text-sm font-bold tracking-widest uppercase text-accent">Founder & Master Stylist</p>
                </div>
              </div>
            </Reveal>

            {/* Highlights */}
            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="space-y-1">
                  <p className="text-4xl font-serif font-medium text-accent">15+</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Years Experience</p>
                </div>
                <div className="space-y-1">
                  <p className="text-4xl font-serif font-medium text-accent">10k+</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.5}>
              <ButtonCTA size="lg" onClick={onCTAClick}>
                Experience The Sanctuary
              </ButtonCTA>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

