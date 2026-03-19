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
  title: 'Adorabella House | Premium Beauty & Artistry',
  description: 'Experience premium hair styling, artisan color, and restorative care at Adorabella House. A private destination for excellence and restoration.',
  keywords: 'premium hair house, expert hair styling, artisan color, luxury beauty services, Wenatchee hair house',
  openGraph: {
    title: 'Adorabella House | Premium Beauty & Artistry',
    description: 'Experience premium hair styling and artisan color services at Adorabella House.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adorabella House',
    description: 'Premium hair styling and artisan color services',
  },
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
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
