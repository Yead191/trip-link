import { useEffect, useState } from 'react'
import Logo from './Logo'

const links = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why TripLink', href: '#why' },
  { label: 'Safety', href: '#safety' },
  { label: 'Payments', href: '#payments' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 shadow-sm shadow-navy/5 backdrop-blur-md'
          : 'border-b border-white/10 bg-navy/30 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" aria-label="TripLink home">
          <Logo variant={scrolled ? 'dark' : 'light'} />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-darkgray hover:text-purple'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#waitlist"
            className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple/25 transition-transform hover:-translate-y-0.5"
          >
            Join Waitlist
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
            scrolled ? 'text-navy' : 'text-white'
          }`}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-bluegray/40 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-darkgray hover:bg-offwhite"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="brand-gradient block rounded-full px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Join Waitlist
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
