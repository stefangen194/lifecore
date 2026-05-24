import React from 'react';

type Tone = 'default' | 'gold' | 'ink';

interface ChipProps {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}

const toneClass: Record<Tone, string> = {
  default: '',
  gold: 'chip-gold',
  ink: 'chip-ink',
};

/** Small mono, uppercase pill — for tags/categories. */
export default function Chip({ tone = 'default', className = '', children }: ChipProps) {
  return <span className={`chip ${toneClass[tone]} ${className}`}>{children}</span>;
}
