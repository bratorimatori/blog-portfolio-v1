import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import { LinkArrow } from '@/components/LinkArrow';
import { site } from '@/lib/site';

// Next 15: dynamic route params arrive as a Promise.
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: 'Not found' };

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/posts/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.coverImage ?? site.ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage ?? site.ogImage],
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const html = await markdownToHtml(post.content);

  return (
    <main className="layout-grid">
      <header className="col-narrow mt-l mb-m flow flow-compact">
        <h1 className="text-xl font-medium tracking-tight text-heading">
          {post.title}
        </h1>
        <p className="text-s text-secondary">
          {post.dateFormatted} &middot; {post.readingTime} min read
        </p>
      </header>

      <article
        className="col-narrow prose-post"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="col-narrow mt-l">
        <Link
          href="/posts"
          className="group text-s text-secondary transition-colors duration-200 ease-out hover:text-accent hover:duration-fast"
        >
          All writing <LinkArrow />
        </Link>
      </div>
    </main>
  );
}
