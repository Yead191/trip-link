export default function StoreBadges({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const cls =
    variant === 'dark'
      ? 'border-bluegray/50 bg-white text-navy'
      : 'border-white/20 bg-white/10 text-white backdrop-blur'

  const badge = `flex cursor-default items-center gap-3 rounded-xl border px-4 py-2.5 ${cls}`

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* App Store — Apple mark uses currentColor so it adapts to the badge text color */}
      <span aria-disabled="true" aria-label="Coming soon on the App Store" className={badge}>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8 shrink-0">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25" />
        </svg>
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide opacity-70">Coming soon on the</span>
          <span className="block text-sm font-semibold">App Store</span>
        </span>
      </span>

      {/* Google Play — original 4-color logo */}
      <span aria-disabled="true" aria-label="Coming soon on Google Play" className={badge}>
        <img src="/google-play-icon.svg" alt="" aria-hidden="true" className="h-6 w-6 shrink-0 object-contain" />
        <span className="text-left leading-tight">
          <span className="block text-[10px] uppercase tracking-wide opacity-70">Coming soon on</span>
          <span className="block text-sm font-semibold">Google Play</span>
        </span>
      </span>
    </div>
  )
}
