export const site = {
  name: 'Bojan Tomic',
  title: 'Bojan Tomic, software engineer',
  description:
    'Bojan Tomic, full-stack engineer working on healthcare software and AI tooling. Writing about React, Next.js, and building for the web.',
  url: 'https://bojantomic.com',
  locale: 'en_US',
  ogImage: '/cover/og_image.jpg',
} as const;

export const navLinks = [
  { href: '/posts', label: 'Writing' },
  { href: '/resume', label: 'About' },
] as const;

export const socialLinks = [
  { href: '/feed.xml', label: 'RSS', icon: 'rss' },
  { href: 'https://github.com/bratorimatori', label: 'GitHub', icon: 'github' },
  {
    href: 'https://www.linkedin.com/in/bojan-tomic-b24944103/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  { href: 'https://x.com/inttools', label: 'X', icon: 'x' },
  { href: '/contact', label: 'Email', icon: 'mail' },
] as const;

export type SocialIcon = (typeof socialLinks)[number]['icon'];
