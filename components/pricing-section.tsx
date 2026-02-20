'use client';

import { ButtonCTA } from './button-cta';

interface PricingSectionProps {
  onCTAClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onCTAClick }) => {
  const plans = [
    {
      name: 'Daily Pass',
      price: '$45',
      period: 'per day',
      features: [
        'Full day access (8 hours)',
        'Professional equipment',
        'Client waiting area',
        'Basic support',
      ],
      highlighted: false,
    },
    {
      name: 'Weekly Plan',
      price: '$250',
      period: 'per week',
      features: [
        'Unlimited daily access',
        'Premium equipment',
        'Private waiting area',
        'Priority support',
        'Storage space',
      ],
      highlighted: true,
    },
    {
      name: 'Monthly Premium',
      price: '$800',
      period: 'per month',
      features: [
        'Full-time exclusive access',
        'Premium luxury setup',
        'Dedicated space',
        '24/7 priority support',
        'Marketing support',
        'Client referrals',
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
        <div className="text-center mb-16 md:mb-20 animate-slideUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Transparent <span className="text-accent">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your beauty business
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-300 overflow-hidden animate-slideUp ${
                plan.highlighted
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
                  Get Started
                </ButtonCTA>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="glass p-6 md:p-8 text-center">
          <p className="text-foreground mb-3">
            Not sure which plan is right for you?
          </p>
          <ButtonCTA variant="outline" onClick={onCTAClick}>
            Schedule a Consultation
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
};
