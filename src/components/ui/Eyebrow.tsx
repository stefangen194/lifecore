import React from 'react';

type Tone = 'muted' | 'gold' | 'gold-soft';

interface EyebrowProps {
  /** Color tone. `gold` = gold-700, `gold-soft` = gold-500, `muted` = ink-500. */
  tone?: Tone;
  /** Prefix the label with a small "· " marker (common in the design). */
  dot?: boolean;
  className?: string;
  children: React.ReactNode;
}

const toneClass: Record<Tone, string> = {
  muted: 'text-ink-500',
  gold: 'text-gold-700',
  'gold-soft': 'text-gold-500',
};

/** Small mono, uppercase, letter-spaced section label. */
export default function Eyebrow({ tone = 'muted', dot = false, className = '', children }: EyebrowProps) {
  return (
    <div className={`eyebrow ${toneClass[tone]} ${className}`}>
      {dot ? '· ' : null}
      {children}
    </div>
  );
}
