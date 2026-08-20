import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { Stub } from '@/components/Stub';
import { getPostsByYear } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Essays and notes on building for the web.',
  alternates: { canonical: '/posts' },
};

export default function WritingPage() {
  const years = getPostsByYear();

  return (
    <main className="layout-grid">
      <header className="col-narrow mt-m">
        <h1 className="text-xl font-medium tracking-tight text-heading">Writing</h1>
      </header>

      <div className="col-narrow mt-m flow" style={{ '--flow-space': 'var(--space-l)' } as React.CSSProperties}>
        {years.map(({ year, posts }) => (
          <section key={year} className="flow flow-loose">
            <SectionHeader name={year} />
            {posts.map((post) => (
              <Stub
                key={post.slug}
                href={`/posts/${post.slug}`}
                meta={post.dateFormatted}
                title={post.title}
                description={post.description}
              />
            ))}
          </section>
        ))}

        {years.length === 0 ? (
          <p className="text-secondary">Nothing published yet.</p>
        ) : null}
      </div>
    </main>
  );
}
