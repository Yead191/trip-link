import { CheckIcon, BanIcon, ShieldCheckIcon } from './Icons'

const kycSteps = [
  'Government ID Verification',
  'Selfie Verification',
  'Liveness Checks',
  'Flight Verification',
  'Ongoing Compliance Monitoring',
]

const prohibited = [
  'Weapons & Firearms',
  'Explosives',
  'Illegal Drugs',
  'Hazardous Chemicals',
  'Flammable Materials',
  'Restricted Aviation Items',
  'Counterfeit Products',
  'Restricted Batteries',
]

export default function SafetyKYC() {
  return (
    <section id="safety" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-info">
            Safety &amp; KYC
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-white sm:text-4xl">
            Trust is the foundation of TripLink
          </h2>
          <p className="mt-4 text-lg text-mediumgray">
            Before sending or carrying shipments, every user must complete a full
            verification process.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* KYC checklist */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h3 className="font-display text-xl font-bold text-white">
              Required verification
            </h3>
            <ul className="mt-6 space-y-3">
              {kycSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3.5 text-sm font-medium text-white"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/15">
                    <CheckIcon className="h-4 w-4 text-success" />
                  </span>
                  {step}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-info/30 bg-info/10 px-4 py-4">
              <ShieldCheckIcon className="h-6 w-6 shrink-0 text-info" />
              <p className="text-sm text-bluegray">
                Verified users receive{' '}
                <span className="font-semibold text-white">trust badges</span> that are
                visible across the platform.
              </p>
            </div>
          </div>

          {/* Prohibited items */}
          <div className="rounded-3xl border border-error/20 bg-white/5 p-8 backdrop-blur">
            <h3 className="font-display text-xl font-bold text-white">
              What cannot be shipped?
            </h3>
            <p className="mt-2 text-sm text-mediumgray">TripLink strictly prohibits:</p>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {prohibited.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-error/10 px-3.5 py-3 text-sm font-medium text-white"
                >
                  <BanIcon className="h-4 w-4 shrink-0 text-error" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-mediumgray">
              All shipments are subject to screening and compliance requirements. The most
              important thing is keeping both our travelers and senders safe and compliant
              with all international rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
