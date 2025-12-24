'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { WaitlistButton } from '@/components/WaitlistModal'

// TODO: Set to true when app is published on Google Play
const IS_PUBLISHED = false
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.contextwell.app'

const features = [
  { icon: '🌙', title: 'Sleep Tracking', description: 'Sync with Health Connect for detailed sleep analysis and personalized recommendations.', color: '#8b5cf6' },
  { icon: '📸', title: 'AI Nutrition', description: 'Snap a photo of your meal — our AI instantly calculates calories and macros.', color: '#22c55e' },
  { icon: '⏱️', title: 'Fasting Timer', description: 'Flexible intermittent fasting (16:8, 18:6, OMAD) with streak tracking.', color: '#f59e0b' },
  { icon: '✨', title: 'AI Coach', description: 'Chat with your personal health AI that knows all your data and gives real advice.', color: '#00d4aa' },
  { icon: '💧', title: 'Water Tracking', description: 'Quick-add hydration with smart reminders and daily goals.', color: '#3b82f6' },
  { icon: '🎭', title: 'Mood & Energy', description: 'Track how you feel with quick emoji check-ins and discover sleep-mood correlations.', color: '#f472b6' },
  { icon: '📊', title: 'Health Score', description: 'Composite 0-100 score based on sleep, nutrition, activity, and hydration.', color: '#06b6d4' },
  { icon: '🏆', title: 'Achievements & XP', description: 'Unlock 20+ achievements, earn XP, and level up from Beginner to Legend.', color: '#eab308' },
  { icon: '🎯', title: 'Daily Challenges', description: 'Complete daily and weekly challenges for bonus XP and rewards.', color: '#ef4444' },
  { icon: '📷', title: 'Barcode Scanner', description: 'Scan packaged foods for instant nutrition data from multiple databases.', color: '#84cc16' },
  { icon: '🍽️', title: 'Menu Scanner', description: 'Photograph restaurant menus — AI suggests the healthiest options for your goals.', color: '#f97316' },
  { icon: '🌸', title: 'Cycle Tracking', description: 'Track menstrual phases with AI insights on energy, cravings, and sleep patterns.', color: '#ec4899' },
  { icon: '📋', title: 'Meal Planning', description: 'AI-generated weekly meal plans with drag & drop and shopping lists.', color: '#14b8a6' },
  { icon: '🍳', title: 'Recipe Generator', description: 'Get personalized recipes based on your remaining macros and preferences.', color: '#a855f7' },
  { icon: '👥', title: 'Friends', description: 'Connect with friends, share achievements, and cheer each other on.', color: '#6366f1' },
]

const steps = [
  { icon: '📱', title: 'Track', description: 'Log sleep, meals, water, and fasting with minimal effort. AI does the heavy lifting.', color: '#00d4aa' },
  { icon: '🧠', title: 'Analyze', description: 'Our AI finds patterns, correlations, and insights you\'d never spot yourself.', color: '#8b5cf6' },
  { icon: '⬆️', title: 'Level Up', description: 'Earn XP, unlock achievements, and watch your health score climb.', color: '#fbbf24' },
]

const stats = [
  { value: '50K+', label: 'Active Users', icon: '👥' },
  { value: '2M+', label: 'Meals Tracked', icon: '🍽️' },
  { value: '500K+', label: 'AI Insights', icon: '✨' },
  { value: '99%', label: 'Accuracy', icon: '🎯' },
]

const faqs = [
  { q: 'Is ContextWell free?', a: 'Yes! The core features are completely free. Plus ($5.99/mo) and Pro ($14.99/mo) unlock AI insights, unlimited tracking, and premium features.' },
  { q: 'How does the AI nutrition tracking work?', a: 'Simply snap a photo of your meal. Our Gemini-powered AI identifies foods, estimates portions, and calculates calories and macros instantly.' },
  { q: 'Does it work with Health Connect?', a: 'Absolutely! We sync with Health Connect to import sleep, steps, and other health data automatically.' },
  { q: 'Is my data private?', a: 'Your privacy is sacred. All data is encrypted, never sold, and you can delete everything anytime.' },
  { q: 'What makes ContextWell different?', a: 'We gamify health tracking! Earn XP, unlock achievements, level up, and compete with friends. Plus our AI actually understands your patterns.' },
]

const plusFeatures = ['AI Daily Insights', 'Unlimited Photo Analysis', 'Advanced Sleep Analytics', 'Custom Goals & Streaks', 'Priority Support']
const proFeatures = ['Everything in Plus', 'AI Health Coach Chat', 'Meal Planning AI', 'Recipe Generator', 'Export Data', 'Family Sharing (soon)']

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Background Effects */}
      <div className="aurora-mesh" />
      <div className="noise-overlay" />
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{ animationDelay: `${i * 0.5}s` }} />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-[var(--bg-void)]/80 border-b border-[var(--glass-border)]">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--glow-primary)]/10 text-xl group-hover:scale-110 transition-transform">
                🔮
              </div>
              <span className="text-xl font-semibold tracking-wide" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                ContextWell
              </span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Features</a>
              <a href="#pricing" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Pricing</a>
              <Link href="/about" className="footer-link hover:text-[var(--glow-primary)] transition-colors">About</Link>
              <Link href="/contact" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Contact</Link>
              {IS_PUBLISHED ? (
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button !py-2 !px-5 !text-sm"
                >
                  Download
                </a>
              ) : (
                <WaitlistButton className="glow-button !py-2 !px-5 !text-sm">
                  Join Waitlist
                </WaitlistButton>
              )}
            </div>
          </div>
        </nav>

        {/* ═══════════════════════════════════════════════════════════
            HERO SECTION — Epic entrance with Crystal mascot
           ═══════════════════════════════════════════════════════════ */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 overflow-hidden">
          {/* Floating orbs background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--glow-primary)]/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--glow-secondary)]/10 rounded-full blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[var(--glow-accent)]/10 rounded-full blur-3xl animate-float-slow" />
          </div>

          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
            {/* Left: Text Content */}
            <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
              <div className="hero-badge mb-6">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--glow-primary)]" />
                <span className="text-sm text-[var(--text-secondary)]">
                  Now available on <span className="text-[var(--text-muted)] line-through opacity-50">iOS</span> & Android
                </span>
              </div>

              <h1
                className="hero-title mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Your{' '}
                <span className="hero-gradient-text">
                  Health OS
                </span>
              </h1>

              <p className="hero-subtitle mb-10 max-w-lg text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                Transform your wellness journey with AI-powered tracking for sleep, nutrition, and
                fasting — all gamified to keep you motivated.
              </p>

              <div className="hero-buttons flex flex-col gap-4 sm:flex-row">
                {IS_PUBLISHED ? (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button group"
                  >
                    <svg className="h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.71.64 1.19s-.3.92-.64 1.19l-2.35 1.27-2.46-2.46 2.46-2.46 2.35 1.27zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                    </svg>
                    Google Play
                  </a>
                ) : (
                  <WaitlistButton className="glow-button group">
                    <svg className="h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.71.64 1.19s-.3.92-.64 1.19l-2.35 1.27-2.46-2.46 2.46-2.46 2.35 1.27zM6.05 2.66l10.76 6.22-2.27 2.27L6.05 2.66z" />
                    </svg>
                    Join Waitlist
                  </WaitlistButton>
                )}
                <div className="relative">
                  <span className="sealed-badge">Soon</span>
                  <div className="sealed-button">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="hero-social mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {['🧙', '🧝', '🧚', '🦸', '🥷'].map((emoji, i) => (
                    <div
                      key={i}
                      className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--bg-void)] bg-[var(--bg-elevated)] text-lg hover:scale-110 hover:z-10 transition-transform"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1 text-[var(--glow-accent)]">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-sm text-[var(--text-muted)]">Loved by 50K+ adventurers</p>
                </div>
              </div>
            </div>

            {/* Right: Crystal Mascot + Phone Mockup */}
            <div className="relative flex flex-1 items-center justify-center">
              {/* Crystal Mascot - Floating */}
              <div className="absolute -top-8 -right-4 z-30 md:-top-12 md:-right-8 lg:-top-16 lg:right-0">
                <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-primary)]/40 to-[var(--glow-accent)]/30 rounded-full blur-3xl animate-pulse" />
                  <Image
                    src="/mascot_mage.webp"
                    alt="Crystal the Mage"
                    fill
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 224px, 288px"
                    className="object-contain drop-shadow-[0_0_40px_rgba(0,212,170,0.6)] relative z-10"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="phone-mockup animate-float-slow">
                <div className="phone-screen">
                  <div className="phone-notch" />
                  <div className="flex h-full flex-col items-center justify-center p-6 pt-12">
                    <div className="mb-4 text-5xl animate-bounce-slow">🔮</div>
                    <div className="mb-2 text-xl font-semibold" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                      ContextWell
                    </div>
                    <div className="mb-6 text-sm text-[var(--text-muted)]">Your Health OS</div>

                    <div className="w-full space-y-3">
                      {[
                        { label: 'Sleep Score', value: '87%', color: 'var(--glow-secondary)' },
                        { label: 'Calories', value: '1,842', color: 'var(--glow-primary)' },
                        { label: 'Fasting', value: '16:42', color: 'var(--glow-accent)' },
                      ].map((item, i) => (
                        <div key={item.label} className="glass-card !rounded-xl p-3 hover:scale-105 transition-transform" style={{ animationDelay: `${i * 0.1}s` }}>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">{item.label}</span>
                            <span className="text-lg font-semibold" style={{ color: item.color }}>{item.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-2 rounded-full bg-[var(--glow-primary)]/10 px-4 py-2 animate-pulse">
                      <span>⭐</span>
                      <span className="text-sm font-medium">Level 12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="scroll-indicator">
              <span className="scroll-dot" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            STATS SECTION — Impressive numbers
           ═══════════════════════════════════════════════════════════ */}
        <section className="relative px-6 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--glow-primary)]/5 to-transparent" />
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="stat-card text-center group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-accent)] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-muted)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            HOW IT WORKS — 3 steps with animations
           ═══════════════════════════════════════════════════════════ */}
        <section className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="section-title mb-4 text-4xl font-bold md:text-5xl" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                How It <span className="bg-gradient-to-r from-[var(--glow-accent)] to-[var(--glow-primary)] bg-clip-text text-transparent">Works</span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
                Three simple steps to transform your health journey
              </p>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--glow-primary)] via-[var(--glow-secondary)] to-[var(--glow-accent)] hidden md:block transform -translate-y-1/2 opacity-30" />

              <div className="grid gap-8 md:grid-cols-3">
                {steps.map((step, i) => (
                  <div key={step.title} className="step-card relative" style={{ animationDelay: `${i * 0.2}s` }}>
                    {/* Step number */}
                    <div
                      className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold z-10"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}80)` }}
                    >
                      {i + 1}
                    </div>

                    <div className="glass-card p-8 pt-12 h-full hover:scale-105 transition-transform group">
                      <div
                        className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform"
                      >
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-cinzel), serif', color: step.color }}>
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FEATURES SECTION — The arsenal
           ═══════════════════════════════════════════════════════════ */}
        <section id="features" className="relative px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="section-title mb-4 text-4xl font-bold md:text-5xl" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Your Wellness{' '}
                <span className="bg-gradient-to-r from-[var(--glow-secondary)] to-[var(--glow-primary)] bg-clip-text text-transparent">
                  Arsenal
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
                Every tool you need to master your health, wrapped in a magical experience.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="feature-card glass-card p-8 group"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <div
                    className="icon-glow mb-5 group-hover:scale-125 transition-transform"
                    style={{ '--icon-color': feature.color } as React.CSSProperties}
                  >
                    <span>{feature.icon}</span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold group-hover:text-[var(--glow-primary)] transition-colors" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            PRICING SECTION — Plus & Pro
           ═══════════════════════════════════════════════════════════ */}
        <section id="pricing" className="relative px-6 py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--glow-secondary)]/5 to-transparent" />
          <div className="mx-auto max-w-5xl relative">
            <div className="mb-16 text-center">
              <h2 className="section-title mb-4 text-4xl font-bold md:text-5xl" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Choose Your{' '}
                <span className="bg-gradient-to-r from-[var(--glow-accent)] to-[var(--glow-secondary)] bg-clip-text text-transparent">
                  Path
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[var(--text-secondary)]">
                Start free, upgrade when you&apos;re ready for the full experience.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pt-6">
              {/* Free Tier */}
              <div className="pricing-card glass-card p-8">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-cinzel), serif' }}>Free</h3>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-[var(--text-muted)]">/mo</span></div>
                <ul className="space-y-3 mb-8 text-[var(--text-secondary)]">
                  <li className="flex items-center gap-2"><span className="text-[var(--glow-primary)]">✓</span> Basic Sleep Tracking</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--glow-primary)]">✓</span> 5 Photo Analyses/day</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--glow-primary)]">✓</span> Water Tracking</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--glow-primary)]">✓</span> Fasting Timer</li>
                  <li className="flex items-center gap-2"><span className="text-[var(--glow-primary)]">✓</span> Achievements & XP</li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-[var(--glass-border)] hover:bg-[var(--glass-bg)] transition-colors">
                  Get Started
                </button>
              </div>

              {/* Plus Tier — Highlighted */}
              <div className="pricing-card glass-card p-8 relative border-2 border-[var(--glow-primary)] scale-105 z-10 !overflow-visible">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-[var(--glow-primary)] text-black text-sm font-semibold whitespace-nowrap">
                  Most Popular
                </div>
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--glow-primary)]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>Plus</h3>
                <div className="text-4xl font-bold mb-6">$5.99<span className="text-lg text-[var(--text-muted)]">/mo</span></div>
                <ul className="space-y-3 mb-8 text-[var(--text-secondary)]">
                  {plusFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-[var(--glow-primary)]">✓</span> {f}</li>
                  ))}
                </ul>
{IS_PUBLISHED ? (
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="w-full glow-button">Upgrade to Plus</button>
                  </a>
                ) : (
                  <WaitlistButton className="w-full glow-button">
                    Join Waitlist
                  </WaitlistButton>
                )}
              </div>

              {/* Pro Tier */}
              <div className="pricing-card glass-card p-8">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-2xl font-semibold mb-2 text-[var(--glow-accent)]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>Pro</h3>
                <div className="text-4xl font-bold mb-6">$14.99<span className="text-lg text-[var(--text-muted)]">/mo</span></div>
                <ul className="space-y-3 mb-8 text-[var(--text-secondary)]">
                  {proFeatures.map(f => (
                    <li key={f} className="flex items-center gap-2"><span className="text-[var(--glow-accent)]">✓</span> {f}</li>
                  ))}
                </ul>
{IS_PUBLISHED ? (
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="w-full py-3 rounded-xl border border-[var(--glow-accent)] text-[var(--glow-accent)] hover:bg-[var(--glow-accent)]/10 transition-colors">
                      Go Pro
                    </button>
                  </a>
                ) : (
                  <WaitlistButton className="w-full py-3 rounded-xl border border-[var(--glow-accent)] text-[var(--glow-accent)] hover:bg-[var(--glow-accent)]/10 transition-colors">
                    Join Waitlist
                  </WaitlistButton>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FAQ SECTION — Accordion
           ═══════════════════════════════════════════════════════════ */}
        <section id="faq" className="relative px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <h2 className="section-title mb-4 text-4xl font-bold md:text-5xl" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Questions?{' '}
                <span className="bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)] bg-clip-text text-transparent">
                  Answers.
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="faq-item glass-card overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[var(--glass-bg)] transition-colors"
                  >
                    <span className="text-lg font-medium">{faq.q}</span>
                    <span className={`text-2xl transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}
                  >
                    <p className="px-6 text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FINAL CTA — Begin your quest
           ═══════════════════════════════════════════════════════════ */}
        <section className="relative px-6 py-24">
          <div className="cta-card glass-card mx-auto max-w-4xl p-12 text-center md:p-16 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-primary)]/10 via-transparent to-[var(--glow-secondary)]/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[var(--glow-primary)] to-transparent" />

            <div className="relative">
              {/* Mascot */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src="/mascot_mage.webp"
                  alt="Crystal"
                  fill
                  sizes="128px"
                  className="object-contain drop-shadow-[0_0_30px_rgba(0,212,170,0.5)]"
                />
              </div>

              <h2 className="mb-4 text-3xl font-bold md:text-4xl" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                Begin Your Quest
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-[var(--text-secondary)]">
                Join 50,000+ wellness adventurers leveling up their health every day.
                Free to start, premium features available.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                {IS_PUBLISHED ? (
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-button"
                  >
                    Download for Android
                  </a>
                ) : (
                  <WaitlistButton className="glow-button">
                    Join Waitlist
                  </WaitlistButton>
                )}
                <div className="relative">
                  <span className="sealed-badge">Soon</span>
                  <div className="sealed-button">Download for iOS</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            FOOTER
           ═══════════════════════════════════════════════════════════ */}
        <footer className="relative border-t border-[var(--glass-border)] px-6 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--glow-primary)]/10 text-base">
                  🔮
                </div>
                <span className="text-lg font-medium" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                  ContextWell
                </span>
              </div>

              {/* Navigation */}
              <nav className="flex flex-wrap items-center justify-center gap-6">
                <Link href="/about" className="footer-link hover:text-[var(--glow-primary)] transition-colors">About</Link>
                <Link href="/contact" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Contact</Link>
                <Link href="/privacy" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Privacy</Link>
                <Link href="/terms" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Terms</Link>
                <Link href="/delete-account" className="footer-link hover:text-[var(--glow-primary)] transition-colors">Delete Account</Link>
              </nav>

              {/* Social Links - TODO: Update URLs when accounts are created */}
              <div className="flex items-center gap-4">
                {/* TODO: Update to real Twitter/X handle */}
                <a
                  href="https://x.com/contextwell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glow-primary)]/10 hover:border-[var(--glow-primary)] transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* TODO: Update to real Instagram handle */}
                <a
                  href="https://instagram.com/contextwell.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glow-primary)]/10 hover:border-[var(--glow-primary)] transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="mailto:support@contextwell.app"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--glass-bg)] border border-[var(--glass-border)] hover:bg-[var(--glow-primary)]/10 hover:border-[var(--glow-primary)] transition-colors"
                  aria-label="Email"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-8 border-t border-[var(--glass-border)] text-center">
              <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} ContextWell. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
