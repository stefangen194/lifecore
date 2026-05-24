interface LCMarkProps {
  size?: number;
  /** Render the "LifeCore" serif wordmark next to the mark. */
  withWordmark?: boolean;
  /** Color of the mark glyph (defaults to currentColor so it inherits). */
  color?: string;
  className?: string;
}

/** The LifeCore brand mark — a stylized "core" (seed inside a ring). */
export function Mark({ size = 28, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className="shrink-0">
      <circle cx="24" cy="24" r="22" stroke={color} strokeWidth="1.2" />
      <path
        d="M24 8 C 34 14, 34 34, 24 40 C 14 34, 14 14, 24 8 Z"
        fill={color}
        opacity="0.9"
      />
      <circle cx="24" cy="24" r="3" fill="rgb(var(--paper))" />
    </svg>
  );
}

/** Brand lockup: the mark + optional "LifeCore" wordmark (Core in gold). */
export default function LCMark({
  size = 28,
  withWordmark = true,
  color = 'currentColor',
  className = '',
}: LCMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Mark size={size} color={color} />
      {withWordmark && (
        <span
          className="font-display tracking-tight leading-none"
          style={{ fontSize: size * 0.95 }}
        >
          Life<span className="italic text-gold-500">Core</span>
        </span>
      )}
    </span>
  );
}
