import Link from 'next/link';
import { LinkArrow } from './LinkArrow';

type SectionHeaderProps = {
  name: string;
  /** Optional "see all" affordance on the right. */
  href?: string;
  linkLabel?: string;
};

/** A small label, a hairline rule that eats the remaining width, an optional link. */
export function SectionHeader({ name, href, linkLabel }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-xs">
      <h2 className="shrink-0 text-s font-medium leading-none text-heading">{name}</h2>
      <div className="grow border-b border-border" />
      {href && linkLabel ? (
        <Link
          href={href}
          className="group shrink-0 text-s leading-none text-secondary transition-colors duration-200 ease-out hover:text-accent hover:duration-fast"
        >
          {linkLabel} <LinkArrow />
        </Link>
      ) : null}
    </div>
  );
}
