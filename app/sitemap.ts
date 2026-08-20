import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: 'weekly', priority: 1 },
    { url: `${site.url}/posts`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${site.url}/resume`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${site.url}/contact`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/posts/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : undefined,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
