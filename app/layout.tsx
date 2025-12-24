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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${cinzel.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
