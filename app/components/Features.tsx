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
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          {/* Outer diamond */}
          <path d="M 20 2 L 38 20 L 20 38 L 2 20 Z" fill="none" stroke="#FAF7F2" strokeWidth="0.75" />
          {/* Inner diamond */}
          <path d="M 20 11 L 29 20 L 20 29 L 11 20 Z" fill="none" stroke="#FAF7F2" strokeWidth="0.5" />
          {/* Centre cross/plus */}
          <line x1="20" y1="16" x2="20" y2="24" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="16" y1="20" x2="24" y2="20" stroke="#FAF7F2" strokeWidth="0.75" />
          {/* Corner plus marks — arms face inward; adjacent tiles complete the cross */}
          <line x1="0" y1="0" x2="3" y2="0" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="0" y1="0" x2="0" y2="3" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="40" y1="0" x2="37" y2="0" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="40" y1="0" x2="40" y2="3" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="0" y1="40" x2="3" y2="40" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="0" y1="40" x2="0" y2="37" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="40" y1="40" x2="37" y2="40" stroke="#FAF7F2" strokeWidth="0.75" />
          <line x1="40" y1="40" x2="40" y2="37" stroke="#FAF7F2" strokeWidth="0.75" />
          {/* Zigzag chevron ticks at each diamond corner */}
          <path d="M 7 13 L 10 10 L 13 13" fill="none" stroke="#FAF7F2" strokeWidth="0.5" />
          <path d="M 27 13 L 30 10 L 33 13" fill="none" stroke="#FAF7F2" strokeWidth="0.5" />
          <path d="M 7 27 L 10 30 L 13 27" fill="none" stroke="#FAF7F2" strokeWidth="0.5" />
          <path d="M 27 27 L 30 30 L 33 27" fill="none" stroke="#FAF7F2" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity="0.15" />
    </svg>
  );
}

function Block({ eyebrow, headline, body, cta, bgColor, reversed, patternId }: FeatureBlock) {
  const ImagePane = (
    <div
      className="relative overflow-hidden h-72 lg:h-full"
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
          <div className="lg:order-2 lg:h-full">{ImagePane}</div>
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
