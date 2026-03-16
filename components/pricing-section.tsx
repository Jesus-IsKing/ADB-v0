'use client';

import React from 'react';
import { ButtonCTA } from './button-cta';

interface PricingSectionProps {
  onCTAClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCTAClick }) => {
  const plans = [
    {
      name: 'Cut & Style',
      price: 'From $55',
      period: 'avg.',
      features: [
        'Women\'s Precision Cut',
        'Men\'s Designer Grooming',
        'Signature Silk Blowout',
        'Transformation Styling',
      ],
      highlighted: false,
    },
    {
      name: 'Color Artistry',
      price: 'From $110',
      period: 'avg.',
      features: [
        'Luxury Balayage & Ombre',
        'Full Multi-Tone Highlights',
        'Global Color & Glossing',
        'Expert Color Correction',
      ],
      highlighted: true,
    },
    {
      name: 'Care & Repair',
      price: 'From $45',
      period: 'add-on',
      features: [
        'Olaplex Bond Repair',
        'Kerastase Ritual Rituals',
        'Scalp Detox Therapy',
        'Deep Hydration Infusion',
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-slideUp">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-medium text-foreground mb-6 text-balance tracking-tight">
            Curated <span className="text-accent italic">Investments</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Bespoke artistry tailored to your unique hair architecture.
          </p>
        </div>


        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 overflow-hidden animate-slideUp ${plan.highlighted
                ? 'glass-gold md:scale-105 relative'
                : 'glass md:hover:glass-gold'
                }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="bg-accent text-accent-foreground py-2 text-center text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-6 lg:p-8 space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-accent">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <ButtonCTA
                  onClick={onCTAClick}
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                  size="md"
                >
                  Check Availability
                </ButtonCTA>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="text-center mb-12 animate-slideUp" style={{ animationDelay: '400ms' }}>
          <p className="text-sm text-muted-foreground italic">
            * Final pricing varies by service type and specific hair needs. All clients receive a custom tailored quote during consultation.
          </p>
        </div>

        {/* Additional Info */}
        <div className="glass p-6 md:p-8 text-center animate-slideUp" style={{ animationDelay: '500ms' }}>
          <p className="text-foreground font-medium mb-2">
            Need a specific treatment not listed?
          </p>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Whether it's a specialty color or a unique restoration plan, we provide personalized consultations for every client.
          </p>
          <ButtonCTA variant="outline" onClick={onCTAClick}>
            Discuss Your Goals
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
};
