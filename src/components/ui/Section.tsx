import React from 'react';

type Tone = 'paper' | 'paper-hi' | 'paper-lo' | 'ink' | 'transparent';

interface SectionProps {
  /** Background tone. `ink` flips to a dark panel with light text. */
  tone?: Tone;
  id?: string;
  className?: string;
  /** Vertical padding preset. Set false to control padding via className. */
  pad?: boolean;
  children: React.ReactNode;
}

const toneClass: Record<Tone, string> = {
  paper: 'bg-paper',
  'paper-hi': 'bg-paper-hi',
  'paper-lo': 'bg-paper-lo',
  ink: 'bg-ink-900 text-paper',
  transparent: '',
};

/** A full-width page section with a background tone + editorial vertical rhythm. */
export default function Section({
  tone = 'transparent',
  id,
  className = '',
  pad = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} ${pad ? 'py-16 md:py-24' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
