interface PhotoPlaceholderProps {
  /** When provided, renders the real image instead of the striped placeholder. */
  src?: string;
  alt?: string;
  /** Short label shown on the placeholder (e.g. "portret"). */
  label?: string;
  /** Dimension hint shown bottom-right (e.g. "600×960"). */
  dim?: string;
  /** CSS aspect-ratio, e.g. "4/5" or "1/1". Enforces a stable box. */
  ratio?: string;
  rounded?: boolean;
  className?: string;
}

/**
 * A fixed-box image (or striped placeholder when no `src`). The image is
 * absolutely positioned and `object-cover`, so it always fills the box defined
 * by `ratio` / `className` and never overflows the layout.
 */
export default function PhotoPlaceholder({
  src,
  alt = '',
  label,
  dim,
  ratio,
  rounded = false,
  className = '',
}: PhotoPlaceholderProps) {
  const radius = rounded ? 'rounded-full' : 'rounded-lg';
  const style = ratio ? { aspectRatio: ratio } : undefined;

  return (
    <div className={`relative overflow-hidden ${radius} ${className}`} style={style}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <span className="photo-placeholder absolute inset-0" data-label={label} data-dim={dim} />
      )}
    </div>
  );
}
