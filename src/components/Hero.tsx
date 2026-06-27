import { CheckIcon } from './Icons'
import StoreBadges from './StoreBadges';
import heroImg from "../assets/hero.jpg";
import {  ShieldCheck } from "lucide-react";


const trustPoints = [
  'Identity Verified Users',
  'Escrow-Protected Payments',
  'Flight Verification',
  'Launching across the UAE ⇄ EGY (Expanding to the entire Middle East, North Africa soon)',
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative glow + grid */}
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#B9C3DF 1px, transparent 1px), linear-gradient(90deg, #B9C3DF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div className="animate-float-up">
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
            Need to send something abroad?
            <span className="mt-1.5 block py-1 brand-gradient-text">
              Traveling with spare luggage space?
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg font-semibold text-bluegray">
            Save on shipping. Earn from unused baggage allowance.
          </p>

          <p className="mt-3 max-w-lg text-base leading-relaxed text-mediumgray">
            TripLink connects verified senders with verified travelers — making
            international delivery more affordable while travelers earn from
            luggage space they&rsquo;re not using.
          </p>

          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-x-1 gap-y-2.5 sm:grid-cols-2">
            {trustPoints.map((point, index) => (
              <li
                key={point}
                className={`flex items-center gap-2.5 text-sm font-medium text-white${
                  index === trustPoints.length - 1 ? ' sm:col-span-2' : ''
                }`}
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15">
                  <CheckIcon className="h-3.5 w-3.5 text-success" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <StoreBadges variant="light" />
          </div>
        </div>

        {/* Right: route card visual */}
        <div className="relative animate-float-up [animation-delay:120ms]">
          <div className="relative">
          <div className="absolute -inset-6 bg-brand-gradient rounded-4xl opacity-30 blur-3xl" />
          <div className="relative overflow-hidden rounded-4xl border border-white/10 shadow-card-soft">
            <img
              src={heroImg}
              alt="Traveler handing a package to a sender at the airport"
              className="aspect-square w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03102F]/60 via-transparent to-transparent" />

            {/* floating cards */}
            <div className="absolute left-5 top-5 text-white flex items-center gap-2 rounded-xl border border-white/15 bg-[#03102F]/70 px-3 py-2 text-xs backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-[#3F7BFF]" />
              Escrow Secured
            </div>
            <div className="absolute bottom-5 right-5 rounded-xl border border-white/15 bg-[#03102F]/70 px-4 py-3 text-xs backdrop-blur-md">
              <div className="text-white/60">UAE ⇄ EGY</div>
              <div className="mt-0.5 font-semibold text-white">Verified Traveler <span className='text-yellow-500'>★</span> 4.9</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
