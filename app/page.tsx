'use client';

import { useState, useRef, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { LookbookSection } from '@/components/lookbook-section';
import { FeaturesSection } from '@/components/features-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { PricingSection } from '@/components/pricing-section';
import { Footer } from '@/components/footer';
import { ModalCTA } from '@/components/modal-cta';
import { Reveal } from '@/components/ui/reveal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleBackToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground">
      <Navbar onCTAClick={() => setIsModalOpen(true)} />

      <main className="w-full pt-16 md:pt-20">
        <HeroSection onCTAClick={() => setIsModalOpen(true)} />

        <LookbookSection />

        <Reveal delay={0.1}>
          <HowItWorksSection onCTAClick={() => setIsModalOpen(true)} />
        </Reveal>

        <Reveal delay={0.1}>
          <FeaturesSection onCTAClick={() => setIsModalOpen(true)} />
        </Reveal>

        <Reveal delay={0.1}>
          <PricingSection onCTAClick={() => setIsModalOpen(true)} />
        </Reveal>


      </main>


      <Footer
        onCTAClick={() => setIsModalOpen(true)}
        onBackToTop={handleBackToTop}
      />

      <ModalCTA isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
