interface HairlineProps {
  vertical?: boolean;
  className?: string;
}

/** A 1px ink-300 rule. */
export default function Hairline({ vertical = false, className = '' }: HairlineProps) {
  return (
    <div
      className={`bg-ink-300 ${vertical ? 'w-px h-full' : 'h-px w-full'} ${className}`}
      aria-hidden="true"
    />
  );
}
