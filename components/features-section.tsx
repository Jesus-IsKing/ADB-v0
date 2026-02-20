'use client';

import Image from 'next/image';
import { ButtonCTA } from './button-cta';

interface FeaturesSectionProps {
  onCTAClick?: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCTAClick }) => {
  const features = [
    {
      icon: '🎯',
      title: 'Flexible Terms',
      description:
        'Choose rental periods that fit your schedule. Monthly, weekly, or daily options available to suit your needs.',
      image: '/feature-flexibility.jpg',
    },
    {
      icon: '🤝',
      title: 'Expert Support',
      description:
        'Dedicated support team available 24/7 to assist with any questions or needs you may have.',
      image: '/feature-support.jpg',
    },
    {
      icon: '✨',
      title: 'Premium Facilities',
      description:
        'Work in a luxurious, well-maintained salon environment designed for professional beauty services.',
      image: '/feature-support.jpg',
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-20 md:py-32 bg-background border-t border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Why Choose <span className="text-accent">Adorabella</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide everything you need to succeed as a beauty professional
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
