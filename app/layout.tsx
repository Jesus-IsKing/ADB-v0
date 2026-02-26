import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SEOSchema } from '@/components/seo-schema'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Adorabella Salon | Premium Chair Rentals for Beauty Professionals',
  description: 'Discover luxury chair rental services for beauty and salon professionals. Premium facilities, flexible terms, and dedicated support for your salon business.',
  keywords: 'salon chair rental, beauty professional space, salon business, chair rental services',
  generator: 'v0.app',
  openGraph: {
    title: 'Adorabella Salon | Premium Chair Rentals',
    description: 'Luxury chair rental services for beauty professionals',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adorabella Salon',
    description: 'Premium chair rental services for beauty professionals',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
      <body className="font-sans antialiased">
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
