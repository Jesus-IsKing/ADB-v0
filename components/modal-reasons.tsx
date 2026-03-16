'use client';

import React, { useEffect } from 'react';
import { ButtonCTA } from './button-cta';

interface ModalReasonsProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalReasons: React.FC<ModalReasonsProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const reasons = [
    {
      icon: '✨',
      title: 'Precision Artistry',
      description: 'Experience the difference of geometric precision cutting tailored to your unique features.',
    },
    {
      icon: '🏆',
      title: 'Master Colorists',
      description: 'Our team specializes in high-end coloring and meticulous color damage repair.',
    },
    {
      icon: '🧖‍♀️',
      title: 'Restorative Care',
      description: 'We use clinical-grade treatments like Olaplex to ensure your hair stays healthy and strong.',
    },
    {
      icon: '📅',
      title: 'Personalized Care',
      description: 'Every appointment is tailored to your specific hair goals and long-term hair health.',
    },
    {
      icon: '🌟',
      title: 'Elite Products',
      description: 'We exclusively use professional-grade lines like Kerastase and Oribe for superior results.',
    },
    {
      icon: '🛡️',
      title: 'Health First',
      description: 'We prioritize the integrity of your hair, never compromising health for a temporary look.',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="glass-gold max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto p-8 space-y-6 rounded-lg animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6 text-foreground"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        {/* Header */}
        <div className="space-y-3 pr-8">
          <h2 className="text-3xl font-bold text-foreground">
            Why <span className="text-accent">Adorabella?</span>
          </h2>
          <p className="text-muted-foreground">
            Discover what makes our premium salon experience unique and transformative.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/8 transition-colors"
            >
              <div className="text-3xl mb-2">{reason.icon}</div>
              <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/5 border border-accent/20 rounded-lg p-6 space-y-4">
          <h3 className="font-bold text-foreground text-lg">Our Track Record</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">10k+</div>
              <p className="text-xs text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">4.9★</div>
              <p className="text-xs text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">15+</div>
              <p className="text-xs text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          <ButtonCTA
            href="/contact"
            variant="primary"
            className="w-full"
            onClick={() => onClose()}
          >
            Ready for Your Transformation? Request Access
          </ButtonCTA>
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-transparent border border-white/10 rounded-lg text-foreground hover:bg-white/5 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
