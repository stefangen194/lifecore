import React from 'react';
import GoldArc from './GoldArc';

type Tone = 'elevated' | 'sunken';

interface StatCardProps {
  value: React.ReactNode;
  label: React.ReactNode;
  note?: string;
  /** Render inside a card (default). Set false for a bare value+label stack. */
  boxed?: boolean;
  /** Card surface when boxed (both stay dark/elevated in the dark theme). */
  tone?: Tone;
  /** Draw the gold arc decoration in the corner (boxed only). */
  arc?: boolean;
  /** Size of the big figure. */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClass: Record<NonNullable<StatCardProps['size']>, string> = {
  sm: 'text-xl sm:text-3xl',
  md: 'text-2xl sm:text-4xl',
  lg: 'text-4xl sm:text-5xl md:text-6xl',
};

/** A headline figure with a label — boxed (dark card) or bare. */
export default function StatCard({
  value,
  label,
  note,
  boxed = true,
  tone = 'elevated',
  arc = false,
  size = 'md',
  className = '',
}: StatCardProps) {
  const figure = (
    <div className={`font-display italic leading-none text-gold-500 ${sizeClass[size]}`}>
      {value}
    </div>
  );

  if (!boxed) {
    return (
      <div className={className}>
        {figure}
        <div className="eyebrow mt-3">{label}</div>
        {note && <div className="text-xs text-ink-500 mt-1">{note}</div>}
      </div>
    );
  }

  const toneClass =
    tone === 'sunken'
      ? 'bg-paper-lo text-ink-900 border border-ink-300'
      : 'bg-paper-hi text-ink-900 border border-ink-300';

  return (
    <div className={`relative overflow-hidden rounded-lg p-7 ${toneClass} ${className}`}>
      {arc && (
        <GoldArc lines={2} className="absolute -top-6 -right-10 w-72 h-40 opacity-40" />
      )}
      <div className="relative">
        <div className="eyebrow text-gold-500 mb-3">{label}</div>
        {figure}
        {note && <div className="text-xs text-ink-500 mt-2">{note}</div>}
      </div>
    </div>
  );
}
