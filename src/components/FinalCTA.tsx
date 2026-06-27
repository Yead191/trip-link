import { PlaneIcon, PackageIcon, ArrowRightIcon } from './Icons'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <div className="flex items-center justify-center gap-3 text-info">
          <PackageIcon className="h-7 w-7" />
          <span className="text-2xl text-bluegray">+</span>
          <PlaneIcon className="h-7 w-7" />
        </div>

        <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
          Your luggage space <span className="brand-gradient-text">has value.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-mediumgray">
          Whether you&rsquo;re sending a package or catching a flight, TripLink makes
          international delivery simpler, safer, and more affordable.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="brand-gradient inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl shadow-purple/30 transition-transform hover:-translate-y-0.5"
          >
            Join the Waitlist
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  )
}
