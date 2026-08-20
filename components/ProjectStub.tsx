import type { Project } from '@/lib/projects';
import { LinkArrow } from './LinkArrow';

/**
 * Projects get the one piece of chrome on the site, a hairline border, so
 * they read as a distinct group from the writing list above them.
 */
export function ProjectStub({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-m border border-border bg-bg p-s transition-colors duration-200 ease-out hover:border-accent-muted hover:duration-fast"
    >
      <div className="flex flex-col items-baseline gap-0 min-[801px]:flex-row min-[801px]:gap-xs">
        <span className="shrink-0 font-mono text-m font-normal text-secondary tabular-nums">
          {project.year}
        </span>
        <h3 className="text-m font-medium text-primary transition-colors duration-200 ease-out group-hover:text-accent group-hover:duration-fast">
          {project.title} <LinkArrow />
        </h3>
      </div>
      <p className="mt-xs text-s leading-tight text-secondary">
        {project.description}
      </p>
    </a>
  );
}
