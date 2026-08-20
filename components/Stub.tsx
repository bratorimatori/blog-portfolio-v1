import Link from 'next/link';
import { LinkArrow } from './LinkArrow';

type StubProps = {
  href: string;
  /** Rendered in mono, baseline-aligned with the title. */
  meta: string;
  title: string;
  description?: string;
  external?: boolean;
};

/**
 * One row in a list of posts or projects. Deliberately not a card: hierarchy
 * comes from the mono meta column and the weight of the title, nothing else.
 */
export function Stub({ href, meta, title, description, external }: StubProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Link href={href} className="group block" {...externalProps}>
      <div className="flex flex-col items-baseline justify-start gap-0 min-[801px]:flex-row min-[801px]:gap-s">
        <span className="shrink-0 font-mono text-m font-normal text-secondary [font-feature-settings:'ss03'] tabular-nums">
          {meta}
        </span>
        <h3 className="text-m font-medium text-primary transition-colors duration-200 ease-out group-hover:text-accent group-hover:duration-fast">
          {title} <LinkArrow />
        </h3>
      </div>
      {description ? (
        <p className="mt-xs leading-tight text-secondary">{description}</p>
      ) : null}
    </Link>
  );
}
