import type { Metadata, Viewport } from 'next'
import { Cinzel, Outfit } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://contextwell.app'),
  alternates: {
    canonical: '/',
  },
  title: 'ContextWell — Your Health OS',
  description:
    'Transform your wellness journey with AI-powered health tracking. Sleep, nutrition, fasting, and personalized insights — all gamified to keep you motivated.',
  keywords: [
    'health app',
    'wellness tracking',
    'sleep tracker',
    'nutrition tracker',
    'fasting timer',
    'AI health insights',
    'gamified health',
  ],
  authors: [{ name: 'ContextWell' }],
  openGraph: {
    title: 'ContextWell — Your Health OS',
    description:
      'Transform your wellness journey with AI-powered health tracking. Sleep, nutrition, fasting, and personalized insights.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ContextWell',
    url: 'https://contextwell.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContextWell — Your Health OS',
    description:
      'Transform your wellness journey with AI-powered health tracking.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06060a',
}

// Organization Schema for SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ContextWell',
  url: 'https://contextwell.app',
  logo: 'https://contextwell.app/icon.png',
  description: 'AI-powered health tracking app with gamification. Track sleep, nutrition, fasting, and get personalized insights.',
  email: 'support@contextwell.app',
  // TODO: Add social links when accounts are created
  // 'https://twitter.com/contextwell',
  // 'https://instagram.com/contextwell.app',
  sameAs: [
    'https://play.google.com/store/apps/details?id=com.contextwell.app',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@contextwell.app',
    contactType: 'customer support',
    availableLanguage: ['English'],
  },
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'ContextWell',
  operatingSystem: 'Android',
  applicationCategory: 'HealthApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '50000',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body className={`${cinzel.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
