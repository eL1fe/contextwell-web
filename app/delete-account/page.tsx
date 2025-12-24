'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

type Step = 'intro' | 'login' | 'choose' | 'confirm-wipe' | 'confirm-delete' | 'processing' | 'done'

export default function DeleteAccount() {
  const [step, setStep] = useState<Step>('intro')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmText, setConfirmText] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [actionType, setActionType] = useState<'wipe' | 'delete'>('wipe')

  // Check if user is already logged in (e.g., after Google OAuth redirect)
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setStep('choose')
      }
    }
    checkSession()

    // Listen for auth changes (OAuth redirect)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        setStep('choose')
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleGoogleLogin = async () => {
    setError('')
    setIsLoading(true)

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/delete-account`,
      },
    })

    if (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
      setIsLoading(false)
      return
    }

    setStep('choose')
    setIsLoading(false)
  }

  const handleAction = async () => {
    setIsLoading(true)
    setStep('processing')

    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      setError('Session expired. Please login again.')
      setStep('login')
      setIsLoading(false)
      return
    }

    const endpoint = actionType === 'wipe' ? 'wipe-data' : 'delete-account'

    const response = await fetch(
      `https://cfsttclattfsdqrgebhu.supabase.co/functions/v1/${endpoint}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      const data = await response.json()
      setError(data.error || 'Something went wrong')
      setStep('choose')
      setIsLoading(false)
      return
    }

    if (actionType === 'delete') {
      await supabase.auth.signOut()
    }

    setStep('done')
    setIsLoading(false)
  }

  return (
    <>
      <div className="aurora-mesh" />
      <div className="noise-overlay" />

      <div className="relative z-10 min-h-screen flex flex-col">
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
              ← Escape
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-6 py-16">
          <article className="mx-auto max-w-xl">

            {/* Step: Intro */}
            {step === 'intro' && (
              <div className="text-center">
                {/* Crystal Guardian */}
                <div className="relative mx-auto mb-6 w-48 h-48 md:w-64 md:h-64">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--glow-primary)]/30 to-[var(--glow-accent)]/20 blur-2xl animate-pulse" />
                  <Image
                    src="/crystal-guardian.png"
                    alt="Crystal Guardian"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(45,212,191,0.5)] relative z-10 rounded-3xl"
                    priority
                  />
                </div>
                <h1
                  className="mb-4 text-4xl font-bold md:text-5xl"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  The Final Dungeon
                </h1>
                <p className="mb-8 text-lg text-[var(--text-secondary)]">
                  Brave adventurer, you stand at the threshold of no return.
                  Beyond lies the power to erase your journey... or start anew.
                </p>

                <div className="glass-card p-8 mb-8 text-left">
                  <h2 className="text-xl font-semibold mb-4 text-[var(--glow-accent)]" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                    ⚠️ Choose Your Fate
                  </h2>
                  <div className="space-y-4 text-[var(--text-secondary)]">
                    <div className="flex gap-3">
                      <span className="text-2xl">🧹</span>
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">Wipe Data</p>
                        <p className="text-sm">Erase all records but keep your account. Start fresh!</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-2xl">💀</span>
                      <div>
                        <p className="font-medium text-[var(--text-primary)]">Delete Account</p>
                        <p className="text-sm">Complete annihilation. Account gone forever.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setStep('login')}
                  className="glow-button"
                  style={{ background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' }}
                >
                  <span>🗡️</span>
                  Enter the Dungeon
                </button>

                <p className="mt-6 text-sm text-[var(--text-muted)]">
                  Or return to safety via the app: Settings → Delete Account
                </p>
              </div>
            )}

            {/* Step: Login */}
            {step === 'login' && (
              <div className="text-center">
                <div className="mb-6 text-7xl">🔐</div>
                <h1
                  className="mb-4 text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Prove Your Identity
                </h1>
                <p className="mb-8 text-[var(--text-secondary)]">
                  The dungeon requires authentication. Only the true account holder may proceed.
                </p>

                {/* Google OAuth Button */}
                <button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full mb-6 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl
                    bg-white text-gray-800 font-semibold
                    hover:bg-gray-100 hover:scale-[1.02] hover:shadow-lg
                    active:scale-[0.98] transition-all duration-200
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[var(--glass-border)]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[var(--bg-primary)] text-[var(--text-muted)]">or with email</span>
                  </div>
                </div>

                <form onSubmit={handleLogin} className="glass-card p-8 text-left space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--glow-primary)] transition-colors"
                      placeholder="hero@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--glass-border)] text-[var(--text-primary)] focus:outline-none focus:border-[var(--glow-primary)] transition-colors"
                      placeholder="••••••••"
                    />
                  </div>

                  {error && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full glow-button disabled:opacity-50"
                  >
                    {isLoading ? (
                      <span className="animate-spin">⏳</span>
                    ) : (
                      <>
                        <span>🔓</span>
                        Authenticate
                      </>
                    )}
                  </button>
                </form>

                <button
                  onClick={() => setStep('intro')}
                  className="mt-6 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                >
                  ← Retreat
                </button>
              </div>
            )}

            {/* Step: Choose Action */}
            {step === 'choose' && (
              <div className="text-center">
                <div className="mb-6 text-7xl">⚔️</div>
                <h1
                  className="mb-4 text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Choose Your Weapon
                </h1>
                <p className="mb-8 text-[var(--text-secondary)]">
                  You&apos;ve proven your identity. Now, what shall it be?
                </p>

                {error && (
                  <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Wipe Data Option */}
                  <button
                    onClick={() => {
                      setActionType('wipe')
                      setStep('confirm-wipe')
                    }}
                    className="glass-card w-full p-6 text-left cursor-pointer group
                      hover:border-[var(--glow-accent)] hover:bg-[var(--glow-accent)]/10
                      hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]
                      active:scale-[0.98] transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-200">🧹</div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--glow-accent)] group-hover:text-amber-300 transition-colors" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                          Wipe All Data
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                          Erase everything but keep your account. Perfect for a fresh start!
                        </p>
                      </div>
                      <div className="ml-auto text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</div>
                    </div>
                  </button>

                  {/* Delete Account Option */}
                  <button
                    onClick={() => {
                      setActionType('delete')
                      setStep('confirm-delete')
                    }}
                    className="glass-card w-full p-6 text-left cursor-pointer group
                      hover:border-red-500/50 hover:bg-red-500/10
                      hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]
                      active:scale-[0.98] transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl group-hover:scale-125 group-hover:animate-pulse transition-transform duration-200">💀</div>
                      <div>
                        <h3 className="text-xl font-semibold text-red-400 group-hover:text-red-300 transition-colors" style={{ fontFamily: 'var(--font-cinzel), serif' }}>
                          Delete Account Forever
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                          Total annihilation. Account, data, achievements — all gone.
                        </p>
                      </div>
                      <div className="ml-auto text-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</div>
                    </div>
                  </button>
                </div>

                <button
                  onClick={async () => {
                    await supabase.auth.signOut()
                    setStep('intro')
                  }}
                  className="mt-8 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
                >
                  ← Changed my mind, log out
                </button>
              </div>
            )}

            {/* Step: Confirm Wipe */}
            {step === 'confirm-wipe' && (
              <div className="text-center">
                <div className="mb-6 text-7xl animate-bounce">🧹</div>
                <h1
                  className="mb-4 text-3xl font-bold text-[var(--glow-accent)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Confirm Data Wipe
                </h1>
                <p className="mb-8 text-[var(--text-secondary)]">
                  This will delete all your health records, photos, achievements, and progress.
                  <br />Your account will remain — you can start fresh!
                </p>

                <div className="glass-card p-8 mb-6">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    Type <span className="font-mono text-[var(--glow-accent)] font-bold">WIPE</span> to confirm:
                  </p>
                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--glass-border)] text-center text-2xl font-mono tracking-widest text-[var(--text-primary)] focus:outline-none focus:border-[var(--glow-accent)] transition-colors"
                    placeholder="WIPE"
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => {
                      setConfirmText('')
                      setStep('choose')
                    }}
                    className="ghost-button"
                  >
                    ← Back
                  </button>
                  <button
                    onClick={handleAction}
                    disabled={confirmText !== 'WIPE'}
                    className="glow-button disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: confirmText === 'WIPE' ? 'linear-gradient(135deg, var(--glow-accent) 0%, #d97706 100%)' : undefined }}
                  >
                    🧹 Wipe Everything
                  </button>
                </div>
              </div>
            )}

            {/* Step: Confirm Delete */}
            {step === 'confirm-delete' && (
              <div className="text-center">
                <div className="mb-6 text-7xl animate-pulse">💀</div>
                <h1
                  className="mb-4 text-3xl font-bold text-red-400"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Final Warning
                </h1>
                <p className="mb-8 text-[var(--text-secondary)]">
                  This is <span className="text-red-400 font-bold">irreversible</span>.
                  Your account will be permanently deleted along with all data.
                  <br />There is no resurrection spell.
                </p>

                <div className="glass-card p-8 mb-6 border-red-500/30">
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    Type <span className="font-mono text-red-400 font-bold">DELETE</span> to confirm:
                  </p>
                  <input
                    type="text"
                    value={confirmText}
                    onChange={(e) => setConfirmText(e.target.value.toUpperCase())}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-red-500/30 text-center text-2xl font-mono tracking-widest text-[var(--text-primary)] focus:outline-none focus:border-red-500 transition-colors"
                    placeholder="DELETE"
                  />
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => {
                      setConfirmText('')
                      setStep('choose')
                    }}
                    className="ghost-button"
                  >
                    ← I want to live
                  </button>
                  <button
                    onClick={handleAction}
                    disabled={confirmText !== 'DELETE'}
                    className="glow-button disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ background: confirmText === 'DELETE' ? 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' : undefined }}
                  >
                    💀 Delete Forever
                  </button>
                </div>
              </div>
            )}

            {/* Step: Processing */}
            {step === 'processing' && (
              <div className="text-center">
                <div className="mb-6 text-7xl animate-spin">⚙️</div>
                <h1
                  className="mb-4 text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {actionType === 'wipe' ? 'Casting Purification Spell...' : 'Activating Self-Destruct...'}
                </h1>
                <p className="text-[var(--text-secondary)]">
                  Please wait while we process your request...
                </p>
              </div>
            )}

            {/* Step: Done */}
            {step === 'done' && (
              <div className="text-center">
                <div className="mb-6 text-7xl">
                  {actionType === 'wipe' ? '✨' : '👋'}
                </div>
                <h1
                  className="mb-4 text-3xl font-bold text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  {actionType === 'wipe' ? 'Data Purified!' : 'Farewell, Adventurer'}
                </h1>
                <p className="mb-8 text-[var(--text-secondary)]">
                  {actionType === 'wipe'
                    ? 'Your data has been wiped. Open the app to begin a new journey!'
                    : 'Your account has been deleted. May your future quests be legendary.'}
                </p>

                <Link href="/" className="glow-button inline-flex">
                  {actionType === 'wipe' ? '🚀 Start Fresh' : '🏠 Return Home'}
                </Link>
              </div>
            )}

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
              <Link href="/terms" className="footer-link">
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}
