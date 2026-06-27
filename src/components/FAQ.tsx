import { useState } from 'react'
import { PlusIcon, MinusIcon } from './Icons'

const faqs = [
  {
    q: 'Is TripLink a shipping company?',
    a: 'No. TripLink is a marketplace connecting verified travelers and senders.',
  },
  {
    q: 'How are payments protected?',
    a: 'Payments are held securely in escrow until delivery is confirmed.',
  },
  {
    q: 'What items can be shipped?',
    a: 'Legal items that comply with aviation, customs, and local regulations.',
  },
  {
    q: 'How do travelers get paid?',
    a: 'After successful delivery confirmation, escrow funds are released automatically.',
  },
  {
    q: 'What countries are supported?',
    a: 'The whole MENA region to start — then expanding worldwide.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.q}
                className="overflow-hidden rounded-2xl border border-bluegray/40 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-navy sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? 'brand-gradient text-white' : 'bg-offwhite text-purple'
                    }`}
                  >
                    {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-darkgray">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
