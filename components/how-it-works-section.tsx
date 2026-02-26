'use client';

import { ButtonCTA } from '@/components/button-cta';

interface HowItWorksSectionProps {
  onCTAClick?: () => void;
}

const STEPS = [
  {
    number: '01',
    title: 'Tell us about your practice',
    body: 'Share a few details about your services, schedule, and what you are looking for in a premium chair rental.',
  },
  {
    number: '02',
    title: 'Tour the Adorabella space',
    body: 'We walk you through our salon, amenities, and available chairs so you can feel the space before you commit.',
  },
  {
    number: '03',
    title: 'Choose your chair & start',
    body: 'Pick the chair and plan that fits your business, sign a simple agreement, and start seeing clients right away.',
  },
];

export function HowItWorksSection({ onCTAClick }: HowItWorksSectionProps) {
  return (
    <section
      id="how-it-works"
      className="w-full py-20 md:py-28 bg-secondary border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-sm font-medium tracking-wide uppercase text-accent mb-3">
            Simple, calm onboarding
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4">
            How Adorabella&nbsp;<span className="text-accent">works</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A three-step path from first conversation to your first client in the chair—
            designed to feel clear, predictable, and stress-free.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <article
              key={step.title}
              className="glass-gold p-6 md:p-7 rounded-2xl flex flex-col h-full animate-slideUp"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">
                  {step.number}
                </span>
                <span className="h-px flex-1 ml-4 bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            Ready to see if Adorabella is a fit?
          </p>
          <ButtonCTA size="md" onClick={onCTAClick}>
            Walk me through the next step
          </ButtonCTA>
        </div>
      </div>
    </section>
  );
}

