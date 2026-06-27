type LogoProps = {
  className?: string
  variant?: 'dark' | 'light'
}

export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const tripColor = variant === 'light' ? '#FFFFFF' : '#03102F'

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src="/logo.png" alt="" className="w-auto h-7" />
      <span className="font-display text-2xl font-extrabold leading-none">
        <span style={{ color: tripColor }}>Trip</span>
        <span className="brand-gradient-text">Link</span>
      </span>
    </div>
  )
}
