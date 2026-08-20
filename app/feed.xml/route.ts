import { getAllPosts } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';
import { site } from '@/lib/site';

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const posts = getAllPosts();

  const entries = await Promise.all(
    posts.map(async (post) => {
      const html = await markdownToHtml(post.content);
      const url = `${site.url}/posts/${post.slug}`;

      return `  <entry>
    <title>${escapeXml(post.title)}</title>
    <link href="${url}"/>
    <id>${url}</id>
    <updated>${new Date(post.date).toISOString()}</updated>
    <summary>${escapeXml(post.description)}</summary>
    <author><name>${escapeXml(post.author)}</name></author>
    <content type="html">${escapeXml(html)}</content>
  </entry>`;
    }),
  );

  const updated = posts[0]?.date
    ? new Date(posts[0].date).toISOString()
    : new Date(0).toISOString();

  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${escapeXml(site.name)}</title>
  <subtitle>${escapeXml(site.description)}</subtitle>
  <link href="${site.url}/feed.xml" rel="self"/>
  <link href="${site.url}/"/>
  <id>${site.url}/</id>
  <updated>${updated}</updated>
${entries.join('\n')}
</feed>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
