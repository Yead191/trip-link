import { WalletIcon, PlaneIcon, HandshakeIcon, GlobeIcon } from './Icons'

const points = [
  {
    icon: GlobeIcon,
    title: 'Shipping is expensive & slow',
    text: 'International shipping can be expensive, slow, and inconvenient for everyday parcels.',
  },
  {
    icon: PlaneIcon,
    title: 'Unused luggage everywhere',
    text: 'At the same time, thousands of travelers fly every day with unused luggage capacity.',
  },
  {
    icon: HandshakeIcon,
    title: 'TripLink brings both together',
    text: 'We connect the two sides so a single flight solves both problems at once.',
  },
  {
    icon: WalletIcon,
    title: 'Everyone benefits',
    text: 'Senders save money. Travelers earn money. Everyone benefits.',
  },
]

export default function WhyTripLink() {
  return (
    <section id="why" className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple">
            Why TripLink?
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            A smarter way to move things across borders
          </h2>
          <p className="mt-4 text-lg text-darkgray">
            International shipping is broken for everyday parcels — and millions of
            travelers fly with empty bags. TripLink turns that gap into value.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-bluegray/40 bg-white p-7 transition-all hover:-translate-y-1 hover:border-purple/40 hover:shadow-xl hover:shadow-purple/10"
            >
              <span className="brand-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg shadow-purple/20">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-darkgray">{text}</p>
            </div>
          ))}
        </div>

        {/* Save / Earn highlight */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-purple to-info p-7 text-white shadow-lg shadow-purple/20">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15">
              <WalletIcon className="h-7 w-7" />
            </span>
            <div>
              <div className="font-display text-2xl font-extrabold">Senders save money</div>
              <div className="text-sm text-white/85">Affordable international delivery, person to person.</div>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-navy p-7 text-white shadow-lg">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <PlaneIcon className="h-7 w-7 text-info" />
            </span>
            <div>
              <div className="font-display text-2xl font-extrabold">Travelers earn money</div>
              <div className="text-sm text-mediumgray">Get paid for luggage space you weren&rsquo;t using.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
