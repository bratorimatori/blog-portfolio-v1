import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'posts');
const POST_EXTENSIONS = ['.md', '.mdx'];
const WORDS_PER_MINUTE = 200;

export type Post = {
  slug: string;
  title: string;
  description: string;
  /** ISO date from frontmatter, used for sorting. */
  date: string;
  /** "Jul 01, 2023", the form that actually gets rendered. */
  dateFormatted: string;
  year: string;
  author: string;
  coverImage?: string;
  content: string;
  readingTime: number;
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatDate(iso: string): string {
  const parsed = new Date(iso);
  return Number.isNaN(parsed.getTime()) ? iso : dateFormatter.format(parsed);
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function postFileNames(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => POST_EXTENSIONS.includes(path.extname(name)));
}

function readPost(fileName: string): Post {
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);

  // Frontmatter `slug` wins so URLs stay stable if a file is renamed;
  // otherwise fall back to the filename minus its extension.
  const slug =
    typeof data['slug'] === 'string' && data['slug']
      ? data['slug']
      : fileName.replace(/\.mdx?$/, '');

  const date = typeof data['date'] === 'string' ? data['date'] : '';

  return {
    slug,
    title: typeof data['title'] === 'string' ? data['title'] : slug,
    description: typeof data['desc'] === 'string' ? data['desc'] : '',
    date,
    dateFormatted: formatDate(date),
    year: date.slice(0, 4) || 'Undated',
    author: typeof data['author'] === 'string' ? data['author'] : 'Bojan Tomic',
    coverImage:
      typeof data['coverImage'] === 'string' ? data['coverImage'] : undefined,
    content,
    readingTime: estimateReadingTime(content),
  };
}

/** All posts, newest first. */
export function getAllPosts(): Post[] {
  return postFileNames()
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((post) => post.slug === slug) ?? null;
}

export type PostsByYear = { year: string; posts: Post[] }[];

/** Posts grouped under year headings, newest year first. */
export function getPostsByYear(): PostsByYear {
  const groups = new Map<string, Post[]>();

  for (const post of getAllPosts()) {
    const existing = groups.get(post.year);
    if (existing) existing.push(post);
    else groups.set(post.year, [post]);
  }

  return [...groups.entries()]
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => b.year.localeCompare(a.year));
}
