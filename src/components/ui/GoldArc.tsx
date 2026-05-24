interface GoldArcProps {
  /** Number of nested arcs to draw (each fainter). */
  lines?: number;
  className?: string;
  /** Stretch the arc to fill its container (for full-bleed backgrounds). */
  stretch?: boolean;
}

/**
 * The recurring "progression" motif — an ascending gold arc. Render it
 * absolutely-positioned inside a `relative overflow-hidden` parent as decoration.
 */
export default function GoldArc({ lines = 3, className = '', stretch = false }: GoldArcProps) {
  const w = 1600;
  const h = 400;
  const arcs = Array.from({ length: lines }, (_, i) => {
    const inset = i * 100;
    const dip = -200 + i * 120;
    return {
      d: `M ${inset} ${h} Q ${w / 2} ${dip}, ${w - inset} ${h}`,
      width: 1 - i * 0.25,
      opacity: 1 - i * 0.3,
    };
  });

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio={stretch ? 'none' : 'xMidYMid meet'}
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {arcs.map((a, i) => (
        <path
          key={i}
          d={a.d}
          className="stroke-gold-500 fill-none"
          strokeWidth={a.width}
          style={{ opacity: a.opacity }}
        />
      ))}
    </svg>
  );
}
