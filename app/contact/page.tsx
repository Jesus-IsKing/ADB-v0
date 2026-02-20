import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { ButtonCTA } from '@/components/button-cta';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contact Adorabella | Get in Touch',
  description:
    'Have questions about our chair rental services? Contact Adorabella today and let\'s discuss how we can help you succeed.',
  keywords: 'contact adorabella, salon inquiry, chair rental contact',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with Navigation */}
      <header className="fixed top-0 w-full z-50 glass-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link
              href="/"
              className="text-2xl font-bold text-accent hover:text-[#c9a227] transition-colors"
            >
              Adorabella
            </Link>
            <Link
              href="/"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-accent/5 via-transparent to-background border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 animate-slideUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? Want to schedule a consultation? We're here to help. Reach out anytime and we'll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="w-full py-20 md:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Info */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="glass-gold p-6 space-y-3 rounded-lg animate-slideInLeft">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.02.04.039.082.059.125 1.476 2.955 3.728 5.207 6.683 6.683.043.02.085.038.125.059l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Phone</h3>
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (123) 456-7890
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Available Mon-Fri, 9 AM - 6 PM
                  </p>
                </div>

                {/* Email */}
                <div className="glass-gold p-6 space-y-3 rounded-lg animate-slideInLeft" style={{ animationDelay: '100ms' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Email</h3>
                  </div>
                  <a
                    href="mailto:info@adorabella.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    info@adorabella.com
                  </a>
                  <p className="text-sm text-muted-foreground">
                    We'll respond within 24 hours
                  </p>
                </div>

                {/* Location */}
                <div className="glass-gold p-6 space-y-3 rounded-lg animate-slideInLeft" style={{ animationDelay: '200ms' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Adorabella Premium Salon<br />
                    123 Beauty Street<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 glass-gold p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send us a <span className="text-accent">Message</span>
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 bg-secondary border-y border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center text-balance animate-slideUp">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: 'What are the rental requirements?',
                  a: 'We require a valid ID and proof of professional licensure. New applicants must complete a quick verification process.',
                },
                {
                  q: 'Can I upgrade or downgrade my plan?',
                  a: 'Absolutely! You can adjust your plan anytime. Changes take effect at the start of your next billing cycle.',
                },
                {
                  q: 'What if I need to cancel?',
                  a: 'You can cancel anytime with 7 days notice. No hidden fees or long-term contracts required.',
                },
                {
                  q: 'Do you provide supplies?',
                  a: 'Basic supplies are included with all plans. Premium supplies and specialty items are available for purchase.',
                },
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="glass-gold p-6 rounded-lg animate-slideUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12 space-y-4 animate-slideUp">
              <p className="text-muted-foreground">
                Still have questions? We're here to help!
              </p>
              <a href="#contact-section">
                <ButtonCTA size="lg">
                  Get in Touch
                </ButtonCTA>
              </a>
            </div>
          </div>
        </section>

        {/* Conversion CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-secondary border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-slideUp">
            <div className="glass-gold p-8 md:p-12 rounded-lg space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
                Ready to Grow Your <span className="text-accent">Beauty Business?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our thriving community of beauty professionals and start renting a premium chair at Adorabella. Your success is our priority.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a href="#contact-section">
                  <ButtonCTA size="lg">
                    Start Your Application
                  </ButtonCTA>
                </a>
                <Link href="/">
                  <ButtonCTA 
                    variant="outline" 
                    size="lg"
                    className="border-accent text-accent hover:bg-accent/10"
                  >
                    Learn More
                  </ButtonCTA>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Full Footer Component */}
      <Footer 
        onCTAClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onBackToTop={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
