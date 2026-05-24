import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type LevelTone = 'apex' | 'surface' | 'base';

export interface PyramidLevel {
  /** Display number (e.g. 5..1). */
  n: number;
  title: string;
  desc?: string;
  /** Internal route to navigate to on click. */
  href?: string;
  /** Override the auto-assigned tone. */
  tone?: LevelTone;
}

interface PyramidLevelsProps {
  /** Ordered top -> bottom (apex first, foundation last). */
  levels: PyramidLevel[];
  /** Layout flavour: hero aligns right, others center. */
  variant?: 'hero' | 'section' | 'maslow';
  /** Make rows clickable (links via href, or onLevelClick). */
  interactive?: boolean;
  onLevelClick?: (level: PyramidLevel) => void;
  className?: string;
}

const toneClasses: Record<
  LevelTone,
  { wrap: string; num: string; desc: string; arrow: string }
> = {
  apex: {
    wrap: 'bg-gold-500 text-[#0B0B0C] border border-transparent',
    num: 'text-[#0B0B0C]/60',
    desc: 'text-[#0B0B0C]/70',
    arrow: 'text-[#0B0B0C]',
  },
  surface: {
    wrap: 'bg-paper-hi text-ink-900 border border-ink-300',
    num: 'text-gold-700',
    desc: 'text-ink-600',
    arrow: 'text-ink-900',
  },
  base: {
    wrap: 'bg-ink-900 text-paper border border-transparent',
    num: 'text-gold-500',
    desc: 'text-paper/70',
    arrow: 'text-paper',
  },
};

function toneFor(index: number, len: number, override?: LevelTone): LevelTone {
  if (override) return override;
  if (index === 0) return 'apex';
  if (index === len - 1) return 'base';
  return 'surface';
}

/**
 * The five widening "wealth pyramid" bars. The same component powers the home
 * hero, the home pyramid section and the /maslow page — just feed it levels.
 */
export default function PyramidLevels({
  levels,
  variant = 'section',
  interactive = false,
  onLevelClick,
  className = '',
}: PyramidLevelsProps) {
  const align = variant === 'hero' ? 'items-end' : 'items-center';
  const len = levels.length;

  return (
    <div className={`flex flex-col gap-1.5 ${align} ${className}`}>
      {levels.map((lvl, i) => {
        const tone = toneClasses[toneFor(i, len, lvl.tone)];
        // Widen from apex (narrow) to foundation (full width).
        const pct = 55 + (i / Math.max(1, len - 1)) * 45;
        const clickable = interactive && (lvl.href || onLevelClick);

        const inner = (
          <>
            <span className={`font-mono text-micro w-6 shrink-0 ${tone.num}`}>
              0{lvl.n}
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-display text-2xl leading-none">{lvl.title}</span>
              {lvl.desc && <span className={`block text-xs mt-1 ${tone.desc}`}>{lvl.desc}</span>}
            </span>
            {clickable && <ArrowRight size={16} className={`shrink-0 ${tone.arrow}`} />}
          </>
        );

        const rowClass = `flex items-center gap-4 px-6 py-5 rounded-lg w-full md:w-[var(--bar-w)] transition-all duration-200 ${
          tone.wrap
        } ${
          clickable
            ? 'cursor-pointer hover:border-gold-500 ' +
              (variant === 'hero' ? 'hover:-translate-x-2' : 'hover:scale-[1.015]')
            : ''
        }`;
        const style = { '--bar-w': `${pct}%` } as React.CSSProperties;

        if (clickable && lvl.href) {
          return (
            <Link key={lvl.n} to={lvl.href} className={rowClass} style={style}>
              {inner}
            </Link>
          );
        }
        if (clickable && onLevelClick) {
          return (
            <button
              key={lvl.n}
              type="button"
              onClick={() => onLevelClick(lvl)}
              className={`text-left ${rowClass}`}
              style={style}
            >
              {inner}
            </button>
          );
        }
        return (
          <div key={lvl.n} className={rowClass} style={style}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}
