import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — ContextWell',
  description: 'Get in touch with the ContextWell team. We\'re here to help with questions, feedback, and support.',
}

const contactMethods = [
  {
    emoji: '📧',
    title: 'Email Support',
    description: 'For general inquiries, technical support, or feedback.',
    action: 'support@contextwell.app',
    href: 'mailto:support@contextwell.app',
    cta: 'Send Email',
  },
  {
    emoji: '🐛',
    title: 'Bug Reports',
    description: 'Found a bug? Help us squash it by reporting the issue.',
    action: 'support@contextwell.app',
    href: 'mailto:support@contextwell.app?subject=Bug%20Report',
    cta: 'Report Bug',
  },
  {
    emoji: '💡',
    title: 'Feature Requests',
    description: 'Have an idea that would make ContextWell even better?',
    action: 'support@contextwell.app',
    href: 'mailto:support@contextwell.app?subject=Feature%20Request',
    cta: 'Share Idea',
  },
]

const faqs = [
  {
    q: 'How do I delete my account?',
    a: 'You can delete your account directly in the app via Settings → Delete Account, or use our web form at contextwell.app/delete-account.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Subscriptions are managed through Google Play. Go to Play Store → Subscriptions → ContextWell → Cancel.',
  },
  {
    q: 'I\'m having trouble syncing Health Connect',
    a: 'Make sure Health Connect is installed and you\'ve granted all permissions. Try disconnecting and reconnecting in Settings → Integrations.',
  },
  {
    q: 'When is the iOS version coming?',
    a: 'We\'re actively working on it! Sign up for our newsletter to be notified when it launches.',
  },
]

export default function ContactPage() {
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
            <div className="text-6xl mb-6">💬</div>
            <h1
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Get in{' '}
              <span className="bg-gradient-to-r from-[var(--glow-primary)] to-[var(--glow-secondary)] bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">
              We&apos;d love to hear from you. Whether you have a question, feedback,
              or just want to say hi — we&apos;re here to help.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="glass-card p-6 text-center hover:scale-[1.03] transition-transform group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{method.emoji}</div>
                  <h3
                    className="mb-2 text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--glow-primary)] transition-colors"
                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                  >
                    {method.title}
                  </h3>
                  <p className="mb-4 text-sm text-[var(--text-secondary)]">{method.description}</p>
                  <span className="inline-flex items-center gap-2 text-[var(--glow-primary)] text-sm font-medium">
                    {method.cta} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Main Email Highlight */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-2xl">
            <div className="glass-card p-8 md:p-12 text-center border border-[var(--glow-primary)]/30">
              <h2
                className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Email Us Directly
              </h2>
              <p className="mb-6 text-[var(--text-secondary)]">
                Our team typically responds within 24-48 hours.
              </p>
              <a
                href="mailto:support@contextwell.app"
                className="inline-block text-2xl md:text-3xl font-semibold text-[var(--text-primary)] hover:text-[var(--glow-primary)] transition-colors"
              >
                support@contextwell.app
              </a>
            </div>
          </div>
        </section>

        {/* Quick FAQs */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2
              className="mb-8 text-center text-2xl font-semibold"
              style={{ fontFamily: 'var(--font-cinzel), serif' }}
            >
              Common{' '}
              <span className="bg-gradient-to-r from-[var(--glow-accent)] to-[var(--glow-primary)] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="glass-card p-6">
                  <h3 className="mb-2 font-semibold text-[var(--text-primary)]">{faq.q}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/#faq" className="text-[var(--glow-primary)] hover:underline">
                View all FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* Business Inquiries */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <div className="glass-card p-8 text-center">
              <h2
                className="mb-4 text-xl font-semibold"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Business & Partnership Inquiries
              </h2>
              <p className="mb-4 text-[var(--text-secondary)]">
                Interested in partnering with ContextWell? We&apos;re open to collaborations
                with health coaches, nutritionists, fitness brands, and wellness platforms.
              </p>
              <a
                href="mailto:support@contextwell.app?subject=Partnership%20Inquiry"
                className="text-[var(--glow-primary)] hover:underline"
              >
                support@contextwell.app
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[var(--glass-border)] px-6 py-8">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} ContextWell</p>
            <nav className="flex gap-6">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/privacy" className="footer-link">Privacy</Link>
              <Link href="/terms" className="footer-link">Terms</Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}
