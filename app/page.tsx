import { SectionHeader } from '@/components/SectionHeader';
import { Stub } from '@/components/Stub';
import { ProjectStub } from '@/components/ProjectStub';
import { getAllPosts } from '@/lib/posts';
import { projects } from '@/lib/projects';

const LATEST_COUNT = 4;

export default function HomePage() {
  const posts = getAllPosts().slice(0, LATEST_COUNT);

  return (
    <main className="layout-grid">
      <header className="col-narrow mt-m flow text-primary">
        <p>I build software end to end, mostly in TypeScript.</p>
        <p>
          Currently I work on healthcare systems at{' '}
          <a
            href="https://www.icanotes.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-1 underline-offset-2 transition-colors duration-200 ease-out hover:text-accent-hover hover:duration-fast"
          >
            IcaNotes
          </a>
          , where the interesting problems are the ones nobody sees: data
          integrity, migrations, and the slow work of making a large product
          feel small.
        </p>
        <p>
          On the side I run{' '}
          <a
            href="https://intelligenttools.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline decoration-1 underline-offset-2 transition-colors duration-200 ease-out hover:text-accent-hover hover:duration-fast"
          >
            IntelligentTools.co
          </a>
          , a directory of AI tools that I design, build, and maintain alone.
        </p>
      </header>

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Latest writing" href="/posts" linkLabel="All writing" />
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

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Selected projects" />
        {projects.map((project) => (
          <ProjectStub key={project.href} project={project} />
        ))}
      </section>
    </main>
  );
}
