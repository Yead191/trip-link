import { useState, type FormEvent } from 'react'
import { SparkIcon, CheckIcon, MailIcon } from './Icons'
import StoreBadges from './StoreBadges'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    // No backend yet — capture intent locally for the pre-launch waitlist.
    setSubmitted(true)
  }

  return (
    <section id="waitlist" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-2xl shadow-purple/30 sm:px-12">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-navy/20 blur-2xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
              <SparkIcon className="h-4 w-4" />
              Coming Soon
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold text-white sm:text-4xl">
              Be among the first users of TripLink
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Get launch updates, early access invitations, and special rewards for early
              members.
            </p>

            {submitted ? (
              <div className="mx-auto mt-9 flex max-w-md items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-navy shadow-lg">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">
                  You&rsquo;re on the list! We&rsquo;ll be in touch at launch.
                </span>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <MailIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-mediumgray" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-full border border-white/30 bg-white py-3.5 pl-12 pr-4 text-sm text-navy outline-none placeholder:text-mediumgray focus:ring-2 focus:ring-navy/20"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Join Waitlist
                </button>
              </form>
            )}

            <div className="mt-10 flex justify-center">
              <StoreBadges variant="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
