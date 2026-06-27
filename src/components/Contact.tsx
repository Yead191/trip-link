import { useState, type FormEvent } from 'react'
import { MailIcon, HandshakeIcon, CheckIcon } from './Icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-purple">
              Contact Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
              Questions, partnerships, or media inquiries?
            </h2>
            <p className="mt-4 text-lg text-darkgray">
              We&rsquo;d love to hear from you. Reach out and our team will get back to you.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href="mailto:support@triplink.app"
                className="flex items-center gap-4 rounded-2xl border border-bluegray/40 bg-white p-5 transition-colors hover:border-purple/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10 text-purple">
                  <MailIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-mediumgray">
                    Support
                  </div>
                  <div className="font-semibold text-navy">support@triplink.app</div>
                </div>
              </a>
              <a
                href="mailto:partnerships@triplink.app"
                className="flex items-center gap-4 rounded-2xl border border-bluegray/40 bg-white p-5 transition-colors hover:border-purple/40"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-info/10 text-info">
                  <HandshakeIcon className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-mediumgray">
                    Partnerships
                  </div>
                  <div className="font-semibold text-navy">partnerships@triplink.app</div>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-bluegray/40 bg-white p-8 shadow-sm">
            {sent ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
                  <CheckIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-darkgray">
                  Thanks for reaching out — we&rsquo;ll reply as soon as we can.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-bluegray/60 bg-offwhite/60 px-4 py-3 text-sm text-navy outline-none placeholder:text-mediumgray focus:border-purple focus:ring-2 focus:ring-purple/20"
                  />
                </div>
                <div>
                  <label htmlFor="cemail" className="mb-1.5 block text-sm font-semibold text-navy">
                    Email
                  </label>
                  <input
                    id="cemail"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-bluegray/60 bg-offwhite/60 px-4 py-3 text-sm text-navy outline-none placeholder:text-mediumgray focus:border-purple focus:ring-2 focus:ring-purple/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full resize-none rounded-xl border border-bluegray/60 bg-offwhite/60 px-4 py-3 text-sm text-navy outline-none placeholder:text-mediumgray focus:border-purple focus:ring-2 focus:ring-purple/20"
                  />
                </div>
                <button
                  type="submit"
                  className="brand-gradient w-full rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple/25 transition-transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
