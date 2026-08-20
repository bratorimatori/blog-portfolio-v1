import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { site, socialLinks } from '@/lib/site';
import { fontVariables } from './fonts';
import { THEME_SCRIPT } from './theme-script';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: '/',
    types: { 'application/rss+xml': '/feed.xml' },
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    locale: site.locale,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.ogImage],
    creator: '@inttools',
  },
  icons: { icon: '/favicon.ico' },
};

export const viewport: Viewport = {
  // The site starts light regardless of OS preference, so the browser chrome
  // should too. Dark is opt-in via the nav toggle.
  themeColor: '#ffffff',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: site.url,
  jobTitle: 'Software Engineer',
  // Derived from the footer links so the two can never drift apart.
  sameAs: socialLinks
    .filter((link) => link.href.startsWith('http'))
    .map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
