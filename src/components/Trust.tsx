import { IdIcon, LockIcon, PlaneIcon, StarIcon, CameraIcon } from './Icons'

const items = [
  {
    icon: IdIcon,
    title: 'Identity Verification',
    text: 'All users complete identity verification before using the platform.',
  },
  {
    icon: LockIcon,
    title: 'Escrow Protection',
    text: 'Payments are secured until successful delivery.',
  },
  {
    icon: PlaneIcon,
    title: 'Flight Verification',
    text: 'Travelers must verify their trips before accepting shipments.',
  },
  {
    icon: StarIcon,
    title: 'Ratings & Reviews',
    text: 'Build trust through successful deliveries and community feedback.',
  },
  {
    icon: CameraIcon,
    title: 'Shipment Documentation',
    text: 'Photo records help protect both parties throughout the process.',
  },
]

export default function Trust() {
  return (
    <section className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple">
            Trust &amp; Safety
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Why people trust TripLink
          </h2>
          <p className="mt-4 text-lg text-darkgray">
            Trust is the foundation of TripLink — every layer is built to keep both
            senders and travelers protected.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex gap-4 rounded-2xl border border-bluegray/40 bg-white p-7 transition-all hover:border-purple/40 hover:shadow-lg hover:shadow-purple/10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple/10 text-purple">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-darkgray">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
