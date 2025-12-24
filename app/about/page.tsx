import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — ContextWell',
  description: 'Learn about ContextWell, the AI-powered health OS that transforms your wellness journey through gamification.',
}

const values = [
  {
    emoji: '🎯',
    title: 'Simplicity First',
    description: 'Health tracking should be effortless. Snap a photo, sync your sleep, and let AI do the heavy lifting.',
  },
  {
    emoji: '🔒',
    title: 'Privacy Sacred',
    description: 'Your health data is yours. Encrypted, never sold, and you can delete everything anytime.',
  },
  {
    emoji: '🎮',
    title: 'Health = Fun',
    description: 'XP, levels, achievements, and streaks turn healthy habits into an adventure worth playing.',
  },
  {
    emoji: '🧠',
    title: 'AI That Gets You',
    description: 'Our AI learns your patterns and gives personalized advice that actually makes sense for your life.',
  },
]

const team = [
  { emoji: '🧙', role: 'Founder & Developer', description: 'Building the health app I always wanted but couldn\'t find.' },
]

export default function AboutPage() {
  return (
    <>
      <div className="aurora-mesh" />
      <div className="noise-overlay" />

      <div className="relative z-10 min-h-screen">
        {/* Header */}
        <header className="border-b border-[var(--glass-border)] px-6 py-6">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--glow-primary)]/10 text-xl">
                🔮
              </div>
              <span
                className="text-xl font-semibold tracking-wide"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                ContextWell
              </span>
            </Link>
            <Link href="/" className="footer-link hover:text-[var(--text-primary)]">
              ← Back
            </Link>
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-primary)]/40 to-[var(--glow-accent)]/30 rounded-full blur-2xl animate-pulse" />
              <Image
                src="/mascot_mage.webp"
                alt="Crystal the Mage"
                fill
                sizes="128px"
                className="object-contain drop-shadow-[0_0_30px_rgba(0,212,170,0.5)] relative z-10"
              />
            </div>
            <h1
              className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              About{' '}
              <span className="bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-accent)] bg-clip-text text-transparent">
                ContextWell
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">
              We&apos;re building the health operating system we always wished existed —
              one that makes wellness feel like a game worth playing.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12">
              <h2
                className="mb-6 text-3xl font-semibold text-[var(--glow-primary)]"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Our Story
              </h2>
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  ContextWell started from a simple frustration: health apps felt like chores.
                  Calorie counting was tedious. Sleep data was confusing. Fasting timers were boring.
                  And nothing connected the dots between sleep quality and how you felt the next day.
                </p>
                <p>
                  We asked: <em className="text-[var(--text-primary)]">What if tracking your health felt like leveling up in your favorite game?</em>
                </p>
                <p>
                  So we built ContextWell — an AI-powered health OS that understands context.
                  Snap a photo of your meal instead of searching databases. Let AI find patterns
                  between your sleep, nutrition, and energy. Earn XP and unlock achievements for
                  building healthy habits.
                </p>
                <p>
                  Today, over 50,000 &ldquo;wellness adventurers&rdquo; use ContextWell to track their
                  health journey. And we&apos;re just getting started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-12 text-center text-3xl font-semibold"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              What We{' '}
              <span className="bg-gradient-to-r from-[var(--glow-secondary)] to-[var(--glow-primary)] bg-clip-text text-transparent">
                Believe
              </span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <div key={value.title} className="glass-card p-6 hover:scale-[1.02] transition-transform">
                  <div className="text-4xl mb-4">{value.emoji}</div>
                  <h3
                    className="mb-2 text-xl font-semibold text-[var(--text-primary)]"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h2
              className="mb-12 text-center text-3xl font-semibold"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              The{' '}
              <span className="bg-gradient-to-r from-[var(--glow-accent)] to-[var(--glow-secondary)] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <div className="flex justify-center">
              {team.map((member) => (
                <div key={member.role} className="glass-card p-8 text-center max-w-sm">
                  <div className="text-6xl mb-4">{member.emoji}</div>
                  <h3
                    className="mb-2 text-xl font-semibold text-[var(--glow-primary)]"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    {member.role}
                  </h3>
                  <p className="text-[var(--text-secondary)]">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <div className="glass-card p-12">
              <h2
                className="mb-4 text-2xl font-semibold"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Ready to Start Your Quest?
              </h2>
              <p className="mb-8 text-[var(--text-secondary)]">
                Join 50,000+ wellness adventurers leveling up their health every day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.contextwell.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button"
                >
                  Download on Google Play
                </a>
                <Link href="/contact" className="footer-link hover:text-[var(--glow-primary)]">
                  Get in Touch →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--glass-border)] px-6 py-8">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} ContextWell</p>
            <nav className="flex gap-6">
              <Link href="/privacy" className="footer-link">Privacy</Link>
              <Link href="/terms" className="footer-link">Terms</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}
