import Logo from './Logo'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Why TripLink', href: '#why' },
      { label: 'Payments', href: '#payments' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Trust & Safety',
    links: [
      { label: 'Safety & KYC', href: '#safety' },
      { label: 'Escrow Protection', href: '#payments' },
      { label: 'Prohibited Items', href: '#safety' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: '#contact' },
      { label: 'Support', href: 'mailto:support@triplink.app' },
      { label: 'Partnerships', href: 'mailto:partnerships@triplink.app' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-mediumgray">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              TripLink connects verified senders with verified travelers — making
              international delivery more affordable while helping travelers earn from
              unused luggage space.
            </p>
            <p className="mt-4 text-xs text-mediumgray/70">
              Launching across the Middle East &amp; North Africa.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-mediumgray/70">
            © {2026} TripLink. All rights reserved.
          </p>
          <p className="text-xs text-mediumgray/70">
            TripLink is a marketplace connecting verified travelers and senders — not a
            shipping company.
          </p>
        </div>
      </div>
    </footer>
  )
}
