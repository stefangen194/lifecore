/** @type {import('tailwindcss').Config} */

// Tokens live in src/styles/tokens.css as `R G B` channel triplets so opacity
// modifiers work: e.g. `bg-gold-500/20` -> rgb(var(--gold-500) / 0.2).
const withVar = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // We provide our own .container-base / .container-wide classes (index.css).
  corePlugins: { container: false },
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: withVar('--paper'),
          hi: withVar('--paper-hi'),
          lo: withVar('--paper-lo'),
        },
        ink: {
          100: withVar('--ink-100'),
          200: withVar('--ink-200'),
          300: withVar('--ink-300'),
          400: withVar('--ink-400'),
          500: withVar('--ink-500'),
          600: withVar('--ink-600'),
          700: withVar('--ink-700'),
          800: withVar('--ink-800'),
          900: withVar('--ink-900'),
        },
        gold: {
          300: withVar('--gold-300'),
          400: withVar('--gold-400'),
          500: withVar('--gold-500'),
          600: withVar('--gold-600'),
          700: withVar('--gold-700'),
        },
        clay: withVar('--clay'),
        sage: withVar('--sage'),
        'ink-blue': withVar('--ink-blue'),
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Times New Roman', 'serif'],
        sans: ['"Inter Tight"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        micro: 'var(--fs-micro)',
        xs: 'var(--fs-xs)',
        sm: 'var(--fs-sm)',
        base: 'var(--fs-base)',
        lg: 'var(--fs-lg)',
        xl: 'var(--fs-xl)',
        '2xl': 'var(--fs-2xl)',
        '3xl': 'var(--fs-3xl)',
        '4xl': 'var(--fs-4xl)',
        '5xl': 'var(--fs-5xl)',
        '6xl': 'var(--fs-6xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        lg: 'var(--shadow-lg)',
      },
      maxWidth: {
        container: '1280px',
        'container-wide': '1440px',
      },
      keyframes: {
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 300ms ease',
      },
    },
  },
  plugins: [],
};
