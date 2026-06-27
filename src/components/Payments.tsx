import { GlobeIcon, MapPinIcon } from './Icons'

const steps = [
  'Sender submits shipment request',
  'Traveler accepts request',
  'Sender funds escrow',
  'Messaging unlocks',
  'Shipment is transported',
  'Delivery is confirmed',
  'Traveler receives payment',
]

export default function Payments() {
  return (
    <section id="payments" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple">
            How Payments Work
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Your money stays protected from start to finish
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple via-gradient-mid to-info md:left-1/2 md:-translate-x-1/2" />
          <ol className="space-y-6">
            {steps.map((step, i) => (
              <li
                key={step}
                className={`relative flex items-center gap-5 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <span className="brand-gradient z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-bold text-white shadow-lg shadow-purple/25 md:absolute md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </span>
                <div
                  className={`flex-1 rounded-2xl border border-bluegray/40 bg-offwhite/70 px-5 py-4 md:max-w-[calc(50%-2.5rem)] ${
                    i % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto'
                  }`}
                >
                  <span className="text-base font-semibold text-navy">{step}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-12 text-center font-display text-xl font-bold text-navy">
          Simple. <span className="brand-gradient-text">Secure.</span> Transparent.
        </p>

        {/* Launch / expansion */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4 rounded-2xl bg-navy p-7 text-white">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-info/15 text-info">
              <MapPinIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg text-white font-bold">Launching UAE &amp; Egypt</h3>
              <p className="mt-1.5 text-sm text-mediumgray">
                Our first live corridor connects the UAE and Egypt, then expands across the
                whole Middle East &amp; North Africa.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 rounded-2xl border border-bluegray/40 bg-offwhite p-7">
            <span className="brand-gradient flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white">
              <GlobeIcon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="font-display text-lg font-bold text-navy">Expanding worldwide</h3>
              <p className="mt-1.5 text-sm text-darkgray">
                Future expansion will include additional GCC routes and international
                destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
