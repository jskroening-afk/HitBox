import Link from 'next/link';

type FeatureBlock = {
  eyebrow: string;
  headline: string;
  body: string;
  cta: string;
  bgColor: string;
  reversed: boolean;
  patternId: string;
};

const features: FeatureBlock[] = [
  {
    eyebrow: 'Strategy',
    headline: 'We Start\nWith Why.',
    body: 'Every brand has a story waiting to be told. We dig into what makes you different, sharpen your positioning, and build a plan that turns belief into momentum.',
    cta: 'Explore our approach',
    bgColor: '#7D9B76',
    reversed: false,
    patternId: 'tile-strategy',
  },
  {
    eyebrow: 'Design',
    headline: 'Visual Identity\nThat Holds.',
    body: "Great design isn't decoration — it's the language your brand speaks before a word is read. We craft systems that stay consistent from first impression to lasting memory.",
    cta: 'See our design work',
    bgColor: '#D4A5A5',
    reversed: true,
    patternId: 'tile-design',
  },
  {
    eyebrow: 'Storytelling',
    headline: 'Words That\nMove People.',
    body: "Campaigns live or die by the story they tell. We shape narratives that feel true to who you are and land with the people you're trying to reach — across every medium.",
    cta: 'Read our thinking',
    bgColor: '#E8B84B',
    reversed: false,
    patternId: 'tile-story',
  },
];

function TilePattern({ id }: { id: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id={id}
          x="0"
          y="0"
          width="60"
          height="60"
          patternUnits="userSpaceOnUse"
        >
          {/* Outer quarter-circle arcs at each corner — ceramic tile motif */}
          <path d="M 30 0 A 30 30 0 0 0 0 30"  fill="none" stroke="#FAF7F2" strokeWidth="1" />
          <path d="M 30 0 A 30 30 0 0 1 60 30" fill="none" stroke="#FAF7F2" strokeWidth="1" />
          <path d="M 0 30 A 30 30 0 0 1 30 60" fill="none" stroke="#FAF7F2" strokeWidth="1" />
          <path d="M 60 30 A 30 30 0 0 0 30 60" fill="none" stroke="#FAF7F2" strokeWidth="1" />
          {/* Inner secondary arcs in soft blue-grey for depth */}
          <path d="M 20 0 A 20 20 0 0 0 0 20"  fill="none" stroke="#8FA3B1" strokeWidth="0.5" />
          <path d="M 40 0 A 20 20 0 0 1 60 20" fill="none" stroke="#8FA3B1" strokeWidth="0.5" />
          <path d="M 0 40 A 20 20 0 0 1 20 60" fill="none" stroke="#8FA3B1" strokeWidth="0.5" />
          <path d="M 60 40 A 20 20 0 0 0 40 60" fill="none" stroke="#8FA3B1" strokeWidth="0.5" />
          {/* Centre dot */}
          <circle cx="30" cy="30" r="2.5" fill="none" stroke="#FAF7F2" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity="0.08" />
    </svg>
  );
}

function Block({ eyebrow, headline, body, cta, bgColor, reversed, patternId }: FeatureBlock) {
  const ImagePane = (
    <div
      className="relative overflow-hidden h-72 lg:h-auto"
      style={{ backgroundColor: bgColor }}
    >
      <TilePattern id={patternId} />
    </div>
  );

  const TextPane = (
    <div className="flex items-center bg-cream">
      <div className="px-10 py-16 lg:px-16 lg:py-24 w-full max-w-lg">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-px bg-terracotta" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-terracotta">
            {eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-display uppercase leading-none tracking-wide text-charcoal mb-7 whitespace-pre-line"
          style={{ fontSize: 'clamp(2.75rem, 4.5vw, 4.5rem)' }}
        >
          {headline}
        </h2>

        {/* Body */}
        <p className="text-base text-charcoal/60 mb-9 leading-relaxed max-w-sm">
          {body}
        </p>

        {/* CTA */}
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta tracking-wide group"
        >
          {cta}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[540px]">
      {reversed ? (
        <>
          <div className="lg:order-2">{ImagePane}</div>
          <div className="lg:order-1">{TextPane}</div>
        </>
      ) : (
        <>
          {ImagePane}
          {TextPane}
        </>
      )}
    </div>
  );
}

export default function Features() {
  return (
    <section>
      {features.map((feature) => (
        <Block key={feature.patternId} {...feature} />
      ))}
    </section>
  );
}
