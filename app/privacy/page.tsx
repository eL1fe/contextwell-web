import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — ContextWell',
  description: 'How ContextWell collects, uses, and protects your health data.',
}

export default function PrivacyPolicy() {
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

        {/* Content */}
        <main className="px-6 py-16">
          <article className="prose-invert mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1
                className="mb-4 text-4xl font-bold md:text-5xl"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Privacy Policy
              </h1>
              <p className="text-[var(--text-muted)]">Last updated: December 24, 2024</p>
            </div>

            <div className="glass-card space-y-8 p-8 md:p-12">
              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  1. Introduction
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  ContextWell (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed
                  to protecting your privacy. This Privacy Policy explains how we collect, use,
                  disclose, and safeguard your information when you use our mobile application.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  2. Information We Collect
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      Health & Fitness Data
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Sleep data synced from Health Connect (Android) — duration, stages, heart rate, HRV</li>
                      <li>Nutrition information from photos you take and manual entries</li>
                      <li>Water intake logs and hydration goals</li>
                      <li>Fasting session times, durations, and streaks</li>
                      <li>Mood and energy level check-ins with optional notes</li>
                      <li>Body metrics (weight, height) you optionally provide during onboarding</li>
                      <li>Menstrual cycle data — period dates, symptoms, and cycle predictions</li>
                      <li>Screen time statistics (Android only)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">Account Data</h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Email address and display name</li>
                      <li>Profile picture (optional, from Google Sign-In or uploaded)</li>
                      <li>Authentication credentials (encrypted)</li>
                      <li>Subscription status and tier</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      Camera & Photos
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Food photos you take for AI-powered nutrition analysis</li>
                      <li>Menu photos for restaurant dish scanning and recommendations</li>
                      <li>Barcode scanning for packaged food nutrition lookup</li>
                      <li>Photos are stored securely with automatic compression and cleanup</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      Microphone & Voice
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Voice input for AI Coach chat (speech-to-text)</li>
                      <li>Audio is processed on-device and not stored after transcription</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      AI Coach Conversations
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Chat messages with your AI health coach</li>
                      <li>Learned preferences and memories for personalized advice</li>
                      <li>You can clear coach memory at any time in Settings</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      Gamification Data
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Achievements, badges, and unlock progress</li>
                      <li>XP points, levels, and titles</li>
                      <li>Daily, weekly, and monthly challenge progress</li>
                      <li>Goal streaks and completion history</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      Calendar Integration
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>
                        Google Calendar events (if you connect the integration) for workload analysis
                      </li>
                      <li>Event data is cached locally and used only for personalized AI insights</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  3. How We Use Your Information
                </h2>
                <ul className="ml-6 list-disc space-y-2 text-[var(--text-secondary)]">
                  <li>
                    <strong className="text-[var(--text-primary)]">AI-Powered Analysis:</strong>{' '}
                    Your health data is processed by Google&apos;s Gemini AI to generate
                    personalized insights, meal analysis, recipe suggestions, and health recommendations.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">AI Coach:</strong>{' '}
                    Chat conversations provide context-aware health coaching based on your tracked data.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Pattern Detection:</strong>{' '}
                    We analyze correlations between sleep, nutrition, mood, and other metrics to provide actionable insights.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Smart Nudges:</strong>{' '}
                    Proactive push notifications based on your habits (e.g., hydration reminders, meal logging prompts).
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Gamification:</strong> Track your
                    progress with XP, levels, achievements, challenges, and streaks.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Predictions (Pro):</strong>{' '}
                    Forecast sleep quality and energy levels based on your historical patterns.
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Service Improvement:</strong>{' '}
                    Aggregate, anonymized data helps us improve the app experience.
                  </li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  4. Third-Party Services
                </h2>
                <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
                  We use the following third-party services to provide our features:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-[var(--text-secondary)]">
                  <li>
                    <strong className="text-[var(--text-primary)]">Supabase:</strong> Database
                    hosting and authentication (data stored in secure cloud infrastructure)
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Google Gemini AI:</strong> Food
                    photo analysis, menu scanning, recipe generation, and personalized health insights
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Health Connect (Android):</strong>{' '}
                    Sleep, heart rate, and activity data sync
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Google Calendar API:</strong>{' '}
                    Calendar integration for workload analysis (only if you connect it)
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Google Sign-In:</strong>{' '}
                    Optional authentication method
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Barcode Databases:</strong>{' '}
                    OpenFoodFacts, UPCitemdb, and Edamam for packaged food nutrition lookup
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">RevenueCat:</strong> Subscription
                    management
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Expo Push:</strong> Push
                    notifications and Smart Nudges
                  </li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  5. Data Security
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  We implement industry-standard security measures including encryption in transit
                  (TLS) and at rest. Your health data is stored securely with row-level security
                  policies ensuring only you can access your own data. Photos are stored in private
                  buckets with secure access controls.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  6. Data Retention
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <p className="leading-relaxed">
                    Your data is retained as long as your account is active. When you delete your
                    account, all associated data including health records, photos, and personal
                    information is permanently deleted within 30 days.
                  </p>
                  <div>
                    <h3 className="mb-2 font-semibold text-[var(--text-primary)]">
                      Photo Storage Policy
                    </h3>
                    <ul className="ml-6 list-disc space-y-1">
                      <li>Photos older than 7 days are automatically compressed to save storage</li>
                      <li>Photos older than 6 months are automatically deleted</li>
                      <li>You can disable photo storage in Settings — photos will be deleted after AI analysis</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  7. Your Rights
                </h2>
                <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">You have the right to:</p>
                <ul className="ml-6 list-disc space-y-2 text-[var(--text-secondary)]">
                  <li>
                    <strong className="text-[var(--text-primary)]">Access:</strong> View all data we
                    have about you within the app
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Export:</strong> Download all your
                    data as JSON via Settings → Export My Data
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Delete:</strong> Permanently
                    delete your account and all associated data via Settings
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Clear AI Memory:</strong> Reset
                    coach learned preferences via Settings → Clear Memory
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Disable Photo Storage:</strong>{' '}
                    Opt out of storing meal photos after analysis
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Revoke Integrations:</strong>{' '}
                    Disconnect Google Calendar, Health Connect, or other integrations
                  </li>
                  <li>
                    <strong className="text-[var(--text-primary)]">Control Notifications:</strong>{' '}
                    Customize or disable Smart Nudges and reminders
                  </li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  8. Children&apos;s Privacy
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  ContextWell is not intended for children under 13. We do not knowingly collect
                  personal information from children under 13. If you believe we have collected
                  information from a child under 13, please contact us immediately.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  9. Changes to This Policy
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new Privacy Policy on this page and updating the
                  &ldquo;Last updated&rdquo; date.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  10. Contact Us
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  If you have questions about this Privacy Policy or your data, please contact us at:
                </p>
                <p className="mt-4">
                  <a
                    href="mailto:support@contextwell.app"
                    className="text-[var(--glow-primary)] hover:underline"
                  >
                    support@contextwell.app
                  </a>
                </p>
              </section>
            </div>
          </article>
        </main>

        {/* Footer */}
        <footer className="border-t border-[var(--glass-border)] px-6 py-8">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()} ContextWell</p>
            <nav className="flex gap-6">
              <Link href="/terms" className="footer-link">
                Terms
              </Link>
              <Link href="/delete-account" className="footer-link">
                Delete Account
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}
