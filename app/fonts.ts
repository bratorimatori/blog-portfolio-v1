import localFont from 'next/font/local';
import { Source_Serif_4 } from 'next/font/google';

/**
 * Inter and Geist Mono are self-hosted from assets/fonts so the build has no
 * network dependency and the browser makes no third-party request. Source
 * Serif stands in for the reference site's Charter as the serif theme.
 */
export const sans = localFont({
  src: [
    {
      path: '../assets/fonts/InterVariable.woff2',
      style: 'normal',
      weight: '100 900',
    },
    {
      path: '../assets/fonts/InterVariable-Italic.woff2',
      style: 'italic',
      weight: '100 900',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
  declarations: [
    // Inter runs large next to the system fallback; 92% keeps the swap quiet.
    { prop: 'size-adjust', value: '92%' },
    { prop: 'font-feature-settings', value: '"liga","calt","ss03","cv06"' },
  ],
});

export const mono = localFont({
  src: '../assets/fonts/GeistMono-Variable.woff2',
  weight: '100 900',
  style: 'normal',
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'monospace'],
  declarations: [{ prop: 'size-adjust', value: '90%' }],
});

export const serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Palatino', 'Book Antiqua', 'Georgia', 'serif'],
});

export const fontVariables = `${sans.variable} ${mono.variable} ${serif.variable}`;
