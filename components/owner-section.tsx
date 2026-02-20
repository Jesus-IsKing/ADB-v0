'use client';

import Image from 'next/image';
import { ButtonCTA } from './button-cta';

interface OwnerSectionProps {
  onCTAClick?: () => void;
}

export const OwnerSection: React.FC<OwnerSectionProps> = ({ onCTAClick }) => {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-32 bg-background border-t border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="animate-slideInLeft relative h-[400px] sm:h-[500px] lg:h-[600px]">
            <Image
              src="/natalie-owner.jpg"
              alt="Natalie, Owner of Adorabella Premium Salon"
              fill
              className="object-cover rounded-xl shadow-2xl shadow-accent/20"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent/30 to-transparent rounded-xl -z-10 blur-xl opacity-30" />
          </div>

          {/* Content */}
          <div className="animate-slideInRight space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Meet <span className="text-accent">Natalie</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 15 years of experience in the beauty industry, Natalie founded Adorabella to create the perfect environment for beauty professionals to thrive.
              </p>
            </div>

            {/* Story */}
            <div className="glass-gold p-6 space-y-4">
              <p className="text-foreground leading-relaxed">
                "I've been where you are. Starting out as an independent beauty professional, I understand the challenges of building your own space and growing your client base. That's why I created Adorabella – a sanctuary where talented professionals can focus on what they do best: creating beauty."
              </p>
              <p className="text-foreground leading-relaxed">
                "Our mission is simple: provide premium facilities, flexible terms, and unwavering support so you can build the successful salon business you deserve."
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-4 text-center">
                <p className="text-2xl font-bold text-accent">15+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass p-4 text-center">
                <p className="text-2xl font-bold text-accent">50+</p>
                <p className="text-sm text-muted-foreground">Beauty Professionals</p>
              </div>
            </div>

            {/* CTA */}
            <ButtonCTA size="lg" onClick={onCTAClick}>
              Join Our Community
            </ButtonCTA>
          </div>
        </div>
      </div>
    </section>
  );
};
