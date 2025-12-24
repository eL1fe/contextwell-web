'use client'

import { useState } from 'react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong')
      }
    } catch {
      setStatus('error')
      setMessage('Connection error. Try again.')
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 h-[100dvh] w-screen">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-in fade-in zoom-in duration-200">
        <div className="glass-card p-8 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--glow-primary)]/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--glow-accent)]/20 rounded-full blur-3xl" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative text-center">
            {/* Icon */}
            <div className="text-5xl mb-4">🔮</div>

            {status === 'success' ? (
              <>
                <h3
                  className="text-2xl font-semibold mb-3 text-[var(--glow-primary)]"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  You&apos;re In!
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  {message}
                </p>
                <p className="text-sm text-[var(--text-muted)]">
                  We&apos;ll notify you when ContextWell launches on Google Play.
                </p>
              </>
            ) : (
              <>
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-cinzel), serif' }}
                >
                  Join the Waitlist
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">
                  Be first to know when ContextWell launches. Early access for waitlist members!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--glass-border)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--glow-primary)] transition-colors"
                  />

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">{message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="glow-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      'Get Early Access'
                    )}
                  </button>
                </form>

                <p className="mt-4 text-xs text-[var(--text-muted)]">
                  No spam. Unsubscribe anytime.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Button component to trigger the modal
export function WaitlistButton({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={className || 'glow-button'}
      >
        {children || 'Join Waitlist'}
      </button>
      <WaitlistModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
