import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream flex items-center overflow-hidden">

      {/* Checkerboard panel — right half */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #E8B84B 25%, transparent 25%),
            linear-gradient(-45deg, #E8B84B 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #E8B84B 75%),
            linear-gradient(-45deg, transparent 75%, #E8B84B 75%)
          `,
          backgroundSize: '48px 48px',
          backgroundPosition: '0 0, 0 24px, 24px -24px, -24px 0px',
          backgroundColor: '#FAF7F2',
        }}
      />

      {/* Vertical divider line */}
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-charcoal/10 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-10 h-px bg-terracotta" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
              Creative Studio
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display uppercase leading-none tracking-wide text-charcoal mb-6"
              style={{ fontSize: 'clamp(4.5rem, 10vw, 9rem)' }}>
            Bold Work.<br />Real Results.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl font-semibold text-charcoal/75 mb-5 max-w-md leading-snug">
            We help brands find their voice and make some noise.
          </p>

          {/* Body copy */}
          <p className="text-base text-charcoal/55 mb-12 max-w-sm leading-relaxed">
            HitBox is a creative studio built for brands that want to stand out.
            Strategy, design, and storytelling — all under one roof.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-terracotta text-cream text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-[#b3561f]"
            >
              Let&apos;s Work Together
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-charcoal text-charcoal text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:bg-charcoal hover:text-cream"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-terracotta" />
    </section>
  );
}
