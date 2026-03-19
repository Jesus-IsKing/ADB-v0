'use client';

import React from 'react';
import { ButtonCTA } from './button-cta';

interface PricingSectionProps {
  onCTAClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCTAClick }) => {
  const plans = [
    {
      name: 'Signature Cut & Style',
      price: 'From $65',
      period: 'service',
      features: [
        'Artistic Precision Cut',
        'Tailored Design & Form',
        'Signature High-Shine Finish',
        'Healthy Hair Revitalization',
      ],
      highlighted: false,
    },
    {
      name: 'Luminous Master Color',
      price: 'From $140',
      period: 'service',
      features: [
        'Masterful Color Blending',
        'Beautiful Dimensional Highlights',
        'Strengthening Fiber Repair',
        'Camera-Ready Finish',
      ],
      highlighted: true,
    },
    {
      name: 'Restorative Care',
      price: 'From $55',
      period: 'session',
      features: [
        'Smooth Surface Treatment',
        'Deep Bond Strengthening',
        'Healthy Scalp Care',
        'Grace-Filled Deep Conditioning',
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-20 md:py-40 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-32 animate-slideUp">
          <p className="text-accent text-[10px] font-bold tracking-[0.4em] uppercase mb-4">Service Menu</p>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-medium text-foreground mb-8 text-balance tracking-tight leading-[0.9]">
            Graceful <br /><span className="text-accent italic">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
            We believe your hair is a crown of glory. Our mission is to serve you with excellence, providing restorative care and artistic mastery for your unique beauty.
          </p>
        </div>


        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border border-border/50 group hover:border-accent/30 transition-all duration-700 overflow-hidden animate-slideUp ${plan.highlighted
                ? 'bg-secondary/10 md:scale-105 relative'
                : 'bg-transparent'
                }`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {plan.highlighted && (
                <div className="bg-accent text-accent-foreground py-2 text-center text-[8px] tracking-[0.3em] font-bold uppercase">
                  Expert Recommendation
                </div>
              )}

              <div className="p-10 lg:p-12 space-y-8">
                {/* Plan Header */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-serif font-medium text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light text-accent">{plan.price}</span>
                    <span className="text-muted-foreground text-[10px] uppercase tracking-widest">{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-4 text-xs tracking-wide text-foreground/70 group-hover:text-foreground transition-colors">
                      <div className="w-1 h-1 bg-accent rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={onCTAClick}
                  className={`w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 ${plan.highlighted
                    ? 'bg-foreground text-background hover:bg-accent'
                    : 'bg-transparent border border-border text-foreground hover:border-accent hover:text-accent'
                    }`}
                >
                  Join Our Waitlist
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Notice */}
        <div className="text-center animate-slideUp" style={{ animationDelay: '400ms' }}>
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground italic max-w-xl mx-auto">
            * All services are tailored to your specific needs. Final pricing will be provided during your consultation.
          </p>
        </div>
      </div>
    </section>
  );
};
