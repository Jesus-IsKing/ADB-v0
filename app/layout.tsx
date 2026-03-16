import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SEOSchema } from '@/components/seo-schema'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { VisualAura } from '@/components/visual-aura'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: '--font-sans',
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Adorabella Salon | Premium Beauty & Hair Styling Services',
  description: 'Experience luxury hair styling, artisan color, and bespoke beauty services at Adorabella Salon. Expert stylists, premium care, and a sanctuary of style.',
  keywords: 'premium hair salon, expert hair styling, artisan color, luxury beauty services',
  generator: 'v0.app',
  openGraph: {
    title: 'Adorabella Salon | Premium Beauty & Hair Styling',
    description: 'Experience luxury hair styling and artisan color services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adorabella Salon',
    description: 'Premium hair styling and artisan color services',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SEOSchema />
        <meta name="theme-color" content="#f9fafb" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} font-sans antialiased text-foreground selection:bg-accent/30 selection:text-accent-foreground`}>
        <div className="noise-overlay" />
        <VisualAura />
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
