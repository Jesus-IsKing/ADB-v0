'use client';

import React from 'react';
import Image from 'next/image';
import { ButtonCTA } from './button-cta';
import { Reveal } from './ui/reveal';
import { Scissors, Palette, Sparkles } from 'lucide-react';

interface FeaturesSectionProps {
  onCTAClick?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCTAClick }) => {
  const features = [
    {
      icon: <Scissors className="w-8 h-8 text-accent" />,
      title: 'Precision Cutting',
      description: 'Master your silhouette with geometric precision cutting, tailored to your unique features and texture.',
      image: '/feature-hair.png',
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: 'Master Colorists',
      description: 'From high-dimension balayage to expert correction, we use premium bond-builders for vibrant, healthy results.',
      image: '/feature-color.png',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent" />,
      title: 'Restorative Care',
      description: 'Revive stressed hair with elite treatments that repair bonds and restore natural shine.',
      image: '/feature-events.png',
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-20 md:py-32 bg-background border-t border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="text-center mb-16 md:mb-24">
            <p className="text-[10px] font-black tracking-[0.6em] uppercase text-accent mb-4">Our Foundations</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-medium text-foreground mb-6 text-balance tracking-tight">
              Devoted to <span className="text-accent italic">His Excellence</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Where luxury meets artistry in every style, following Jesus Christ as the source of all beauty and grace.
            </p>
          </div>
        </Reveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div
                className="glass-gold h-full group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Feature Content */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-start">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.4}>
          <div className="flex justify-center pt-8">
            <ButtonCTA size="lg" onClick={onCTAClick}>
              Request Your Invitation
            </ButtonCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
