import type { Config } from 'tailwindcss';

/**
 * Every value here points at a CSS custom property from styles/tokens.css.
 * The tokens are the source of truth; this file just exposes them as classes.
 *
 * Note: because the color tokens are hex, Tailwind's opacity modifiers
 * (`bg-accent/50`) will not work. Use a dedicated token instead.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    // Replaced wholesale, not extended. The point is that the token scale is
    // the only scale, so an off-palette `text-gray-500` fails loudly.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      bg: 'var(--color-bg)',
      'bg-subtle': 'var(--color-bg-subtle)',
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      tertiary: 'var(--color-text-tertiary)',
      heading: 'var(--color-heading)',
      border: 'var(--color-border)',
      'border-strong': 'var(--color-border-strong)',
      accent: 'var(--color-accent)',
      'accent-hover': 'var(--color-accent-hover)',
      'accent-active': 'var(--color-accent-active)',
      'accent-muted': 'var(--color-accent-muted)',
      'accent-wash': 'var(--color-accent-wash)',
      'accent-wash-subtle': 'var(--color-accent-wash-subtle)',
      'on-accent': 'var(--color-on-accent)',
    },
    fontSize: {
      xs: 'var(--text-xs)',
      s: 'var(--text-s)',
      m: 'var(--text-m)',
      l: 'var(--text-l)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
    },
    fontFamily: {
      sans: 'var(--font-body)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
    },
    lineHeight: {
      none: '1',
      tight: 'var(--leading-tight)',
      normal: 'var(--leading-normal)',
    },
    borderRadius: {
      none: '0',
      s: 'var(--radius-s)',
      m: 'var(--radius-m)',
      l: 'var(--radius-l)',
      full: '9999px',
    },
    extend: {
      spacing: {
        xs: 'var(--space-xs)',
        s: 'var(--space-s)',
        m: 'var(--space-m)',
        l: 'var(--space-l)',
        xl: 'var(--space-xl)',
      },
      maxWidth: {
        narrow: 'var(--grid-narrow)',
        wide: 'var(--grid-wide)',
      },
      letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        loose: '0.02em',
      },
      transitionDuration: {
        fast: '25ms',
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
};

export default config;
