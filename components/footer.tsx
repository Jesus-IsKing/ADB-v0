'use client';

import Link from 'next/link';
import { ButtonCTA } from './button-cta';

interface FooterProps {
  onCTAClick?: () => void;
  onBackToTop?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onCTAClick, onBackToTop }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '#' },
  ];

  return (
    <footer className="w-full bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">Adorabella</h3>
            <p className="text-muted-foreground">
              Premium chair rentals for beauty professionals.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-foreground">Navigation</h4>
            {footerLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-foreground">Support</h4>
            <Link
              href="/contact?scroll=top"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
              }}
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="mailto:info@adorabella.com"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              Email Support
            </a>
            <a
              href="tel:+1234567890"
              className="block text-muted-foreground hover:text-accent transition-colors"
            >
              Call Us
            </a>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">Get Started</h4>
            <p className="text-sm text-muted-foreground">
              Ready to start your journey?
            </p>
            <ButtonCTA
              size="sm"
              onClick={onCTAClick}
              className="w-full"
            >
              Inquire Now
            </ButtonCTA>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Adorabella Salon. All rights reserved.
          </p>
          <button
            onClick={onBackToTop}
            className="text-accent hover:text-[#c9a227] transition-colors font-medium flex items-center gap-2"
            aria-label="Back to top"
          >
            Back to Top
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7-7m0 0L5 14m7-7v12"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
