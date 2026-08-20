import Link from 'next/link';
import { site, socialLinks } from '@/lib/site';
import { SocialIcon } from './SocialIcon';

export function Footer() {
  return (
    <footer className="layout-grid pt-xl">
      <div className="col-narrow flex flex-col items-baseline gap-0 border-t border-border py-m min-[801px]:flex-row min-[801px]:gap-s">
        <div className="grow">
          <div className="-mx-xs flex flex-wrap items-center text-s text-secondary">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith('http');
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-xs rounded-s px-xs py-[0.25rem] transition-colors duration-200 ease-out hover:bg-accent-wash hover:text-accent hover:duration-fast"
                >
                  <span className="text-tertiary transition-colors group-hover:text-accent-muted">
                    <SocialIcon name={link.icon} />
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="shrink-0 text-s text-tertiary">
          &copy; {new Date().getFullYear()} {site.name}
        </div>
      </div>
    </footer>
  );
}
