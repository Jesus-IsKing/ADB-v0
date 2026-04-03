import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SEOSchema } from '@/components/seo-schema'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { CustomCursor } from '@/components/custom-cursor'
import { SmoothScroll } from '@/components/ui/smooth-scroll'
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
  title: 'Adorabella House | Following Jesus Christ',
  description: 'Experience premium hair styling, artisan color, and restorative care at Adorabella House. A private destination for excellence and restoration, following Jesus Christ.',
  keywords: 'premium hair house, expert hair styling, artisan color, luxury beauty services, Wenatchee hair house, christian business',
  openGraph: {
    title: 'Adorabella House | Following Jesus Christ',
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
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.variable} font-sans antialiased text-foreground selection:bg-accent/30 selection:text-accent-foreground bg-white`}>
        <div className="noise-overlay" />
        <CustomCursor />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <SmoothScroll>
            {children}
            <Toaster />
          </SmoothScroll>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
