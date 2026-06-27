import { useState, type ComponentType, type SVGProps } from 'react'
import {
  PackageIcon,
  SearchIcon,
  LockIcon,
  HandshakeIcon,
  MapPinIcon,
  CheckIcon,
  PlaneIcon,
  UploadIcon,
  BellIcon,
  CameraIcon,
  TruckIcon,
  WalletIcon,
} from './Icons'

type Step = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  title: string
  text: string
}

const senderSteps: Step[] = [
  { icon: PackageIcon, title: 'Create a Shipment', text: 'Add photos, item details, dimensions, weight, and destination.' },
  { icon: SearchIcon, title: 'Find a Traveler', text: 'Browse verified travelers already flying to your destination.' },
  { icon: LockIcon, title: 'Secure Your Payment', text: 'Your payment is held safely in escrow until delivery is completed.' },
  { icon: HandshakeIcon, title: 'Hand Over the Package', text: 'Meet the traveler and provide the shipment.' },
  { icon: MapPinIcon, title: 'Track Progress', text: 'Stay updated throughout the journey.' },
  { icon: CheckIcon, title: 'Confirm Delivery', text: 'Once delivered, release the payment to the traveler.' },
]

const travelerSteps: Step[] = [
  { icon: PlaneIcon, title: 'Create a Trip', text: 'List your destination, travel dates, and available luggage capacity.' },
  { icon: UploadIcon, title: 'Verify Your Flight', text: 'Upload your ticket or boarding pass.' },
  { icon: BellIcon, title: 'Receive Shipment Requests', text: 'Review requests and choose what you want to carry.' },
  { icon: CameraIcon, title: 'Pick Up the Package', text: 'Meet the sender and document the shipment.' },
  { icon: TruckIcon, title: 'Deliver at Destination', text: 'Hand the item to the recipient.' },
  { icon: WalletIcon, title: 'Get Paid', text: 'Receive your earnings automatically after delivery confirmation.' },
]

export default function HowItWorks() {
  const [tab, setTab] = useState<'senders' | 'travelers'>('senders')
  const steps = tab === 'senders' ? senderSteps : travelerSteps

  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-purple">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy sm:text-4xl">
            Six simple steps, whichever side you&rsquo;re on
          </h2>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-bluegray/50 bg-offwhite p-1.5">
            <button
              type="button"
              onClick={() => setTab('senders')}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                tab === 'senders'
                  ? 'brand-gradient text-white shadow-md shadow-purple/25'
                  : 'text-darkgray hover:text-navy'
              }`}
            >
              For Senders
            </button>
            <button
              type="button"
              onClick={() => setTab('travelers')}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                tab === 'travelers'
                  ? 'brand-gradient text-white shadow-md shadow-purple/25'
                  : 'text-darkgray hover:text-navy'
              }`}
            >
              For Travelers
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="animate-float-up relative rounded-2xl border border-bluegray/40 bg-offwhite/60 p-7"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="brand-gradient flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg shadow-purple/20">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-extrabold text-bluegray/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-darkgray">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
