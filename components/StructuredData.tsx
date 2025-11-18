import Head from 'next/head';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bojan Tomic',
    url: 'https://bojantomic.com',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer specializing in React, Next.js, and Node.js development',
    image: 'https://bojantomic.com/cover/og_image.jpg',
    sameAs: [
      'https://www.linkedin.com/in/bojan-tomic-b24944103/',
      'https://github.com/bratorimatori',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'SSR',
      'SSG',
    ],
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bojan Tomic - Software Engineer',
    url: 'https://bojantomic.com',
    description: 'Technical blog and portfolio of Bojan Tomic',
    author: {
      '@type': 'Person',
      name: 'Bojan Tomic',
    },
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </Head>
  );
}
