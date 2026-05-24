/**
 * Resolved literal colors for charts (recharts / SVG) — these props take real
 * color strings, not CSS classes or var(). Values mirror the DARK token palette
 * in src/styles/tokens.css. Edit here if the chart palette needs to shift.
 */
export const chartColors = {
  gold: '#C5A059',
  goldSoft: '#D4B477',
  goldDeep: '#8A6F3A',
  /** Primary text on dark (parchment). */
  ink: '#F5F1E8',
  /** Muted label text. */
  inkMuted: '#78746A',
  /** Elevated dark surface (card/tooltip bg). */
  surface: '#161617',
  /** Page background. */
  base: '#0B0B0C',
  /** Hairline / gridline. */
  grid: '#38342E',
  /** Secondary series (e.g. "contributed"). */
  muted: '#56524A',
  clay: '#A66654',
  sage: '#6E8A6A',
} as const;

/** Shared recharts tooltip styling for the dark theme. */
export const chartTooltipStyle = {
  backgroundColor: chartColors.surface,
  border: `1px solid ${chartColors.grid}`,
  borderRadius: 8,
  color: chartColors.ink,
  fontSize: 12,
} as const;
