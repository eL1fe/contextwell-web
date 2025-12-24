import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — ContextWell',
  description: 'Terms and conditions for using ContextWell.',
}

export default function TermsOfService() {
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
          <article className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h1
                className="mb-4 text-4xl font-bold md:text-5xl"
                style={{ fontFamily: 'var(--font-cinzel), serif' }}
              >
                Terms of Service
              </h1>
              <p className="text-[var(--text-muted)]">Last updated: December 24, 2024</p>
            </div>

            <div className="glass-card space-y-8 p-8 md:p-12">
              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  1. Acceptance of Terms
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  By downloading, installing, or using ContextWell (&ldquo;the App&rdquo;), you
                  agree to be bound by these Terms of Service. If you do not agree to these terms,
                  please do not use the App.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  2. Description of Service
                </h2>
                <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
                  ContextWell is a comprehensive health and wellness tracking application that helps users monitor
                  and optimize their health through AI-powered insights. The App includes:
                </p>
                <ul className="ml-6 list-disc space-y-2 text-[var(--text-secondary)]">
                  <li>Sleep tracking via Health Connect integration with stage analysis</li>
                  <li>Nutrition logging through AI-powered photo analysis and barcode scanning</li>
                  <li>Intermittent fasting timer with streak tracking</li>
                  <li>Water intake and hydration goal tracking</li>
                  <li>Mood and energy level check-ins with pattern detection</li>
                  <li>Menstrual cycle tracking with phase predictions</li>
                  <li>AI Coach for personalized health guidance</li>
                  <li>Recipe and meal plan generation</li>
                  <li>Restaurant menu scanning and recommendations</li>
                  <li>Screen time monitoring (Android)</li>
                  <li>Google Calendar integration for workload analysis</li>
                  <li>Gamification features including achievements, XP, levels, and challenges</li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  3. Medical Disclaimer
                </h2>
                <div className="rounded-xl bg-[var(--glow-accent)]/10 p-6 text-[var(--text-secondary)]">
                  <p className="mb-4 font-semibold text-[var(--glow-accent)]">⚠️ Important</p>
                  <p className="leading-relaxed">
                    ContextWell is not a medical device and is not intended to diagnose, treat,
                    cure, or prevent any disease. The information provided by the App, including AI
                    insights, is for general informational purposes only and should not be
                    considered medical advice. Always consult with a qualified healthcare provider
                    before making any changes to your diet, exercise routine, or health regimen.
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  4. User Accounts
                </h2>
                <ul className="ml-6 list-disc space-y-2 text-[var(--text-secondary)]">
                  <li>You must be at least 13 years old to use the App.</li>
                  <li>You are responsible for maintaining the security of your account.</li>
                  <li>You agree to provide accurate information when creating your account.</li>
                  <li>One person may not maintain more than one account.</li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  5. Subscription & Payments
                </h2>
                <div className="space-y-4 text-[var(--text-secondary)]">
                  <p>ContextWell offers free and premium subscription tiers:</p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-semibold text-[var(--text-primary)]">Free Tier</h3>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Basic tracking (sleep, nutrition, water, fasting)</li>
                        <li>1 AI credit per day for photo analysis or coach chat</li>
                        <li>Full data export</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-[var(--text-primary)]">Plus ($5.99/month or $49.99/year)</h3>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>5 AI credits per day</li>
                        <li>Goals and streaks tracking</li>
                        <li>Extended trends (30/90 days)</li>
                        <li>Smart Recommendations (up to 3 patterns)</li>
                        <li>Weekly challenges</li>
                        <li>Cycle tracking and predictions</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-[var(--text-primary)]">Pro ($14.99/month, $119.99/year, or $199.99 lifetime)</h3>
                      <ul className="ml-6 list-disc space-y-1">
                        <li>Unlimited AI credits</li>
                        <li>Scheduled insights (morning brief, evening review)</li>
                        <li>Predictive analytics (tomorrow&apos;s forecast)</li>
                        <li>Full pattern detection with explanations</li>
                        <li>Correlation analysis</li>
                        <li>Unlimited Smart Nudges</li>
                        <li>Monthly challenges</li>
                        <li>All Plus features included</li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Subscriptions automatically renew unless cancelled at least 24 hours before the
                    end of the current period. You can manage subscriptions in your device&apos;s
                    app store settings.
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  6. User Content
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  You retain ownership of all content you submit to the App (photos, data entries,
                  etc.). By using the App, you grant us a license to process your content for the
                  purpose of providing the service, including AI analysis. We will not share your
                  personal content with third parties except as described in our Privacy Policy.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  7. Prohibited Uses
                </h2>
                <p className="mb-4 text-[var(--text-secondary)]">You agree not to:</p>
                <ul className="ml-6 list-disc space-y-2 text-[var(--text-secondary)]">
                  <li>Use the App for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to the App or its systems</li>
                  <li>Interfere with or disrupt the App&apos;s operation</li>
                  <li>Upload malicious content or code</li>
                  <li>Impersonate other users or entities</li>
                  <li>Use the App to harass or harm others</li>
                </ul>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  8. Intellectual Property
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  The App, including its design, features, and content (excluding user-submitted
                  content), is owned by ContextWell and protected by intellectual property laws. You
                  may not copy, modify, distribute, or reverse engineer any part of the App without
                  our written permission.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  9. Limitation of Liability
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  To the maximum extent permitted by law, ContextWell shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages resulting from
                  your use of the App. Our total liability shall not exceed the amount you paid for
                  the App in the 12 months preceding the claim.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  10. Termination
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  We reserve the right to suspend or terminate your access to the App at any time
                  for violations of these Terms. You may terminate your account at any time by
                  deleting your account through the App settings.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  11. Changes to Terms
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  We may update these Terms from time to time. We will notify you of significant
                  changes through the App or by email. Continued use of the App after changes
                  constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  12. Governing Law
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  These Terms shall be governed by and construed in accordance with applicable laws,
                  without regard to conflict of law principles.
                </p>
              </section>

              <section>
                <h2
                  className="mb-4 text-2xl font-semibold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  13. Contact
                </h2>
                <p className="leading-relaxed text-[var(--text-secondary)]">
                  For questions about these Terms, please contact us at:
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
              <Link href="/privacy" className="footer-link">
                Privacy
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
