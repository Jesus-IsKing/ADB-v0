'use client';

import React from 'react';
import Image from 'next/image';
import { ButtonCTA } from './button-cta';

interface FeaturesSectionProps {
  onCTAClick?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCTAClick }) => {
  const features = [
    {
      icon: '💇‍♀️',
      title: 'Precision Cutting',
      description:
        'Master the perfect silhouette with our geometric precision cutting techniques, tailored to your unique features and hair texture.',
      image: '/feature-hair.png',
    },
    {
      icon: '🎨',
      title: 'Master Colorists',
      description:
        'From high-dimension balayage to expert color correction, we utilize premium bond-builders to ensure vibrant, damage-free results.',
      image: '/feature-color.png',
    },
    {
      icon: '✨',
      title: 'Restorative Care',
      description:
        'Revive stressed hair with elite clinical treatments like Olaplex and Kerastase, designed to repair bonds and restore natural shine.',
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
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-medium text-foreground mb-6 text-balance tracking-tight">
            Our Signature <span className="text-accent italic">Expertise</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where luxury meets artistry in every style.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glass-gold group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slideUp"
              style={{ animationDelay: `${idx * 100}ms` }}
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
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-8">
          <ButtonCTA size="lg" onClick={onCTAClick}>
            Start Your Journey
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
};
