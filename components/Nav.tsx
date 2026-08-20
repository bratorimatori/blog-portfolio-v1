import Link from 'next/link';
import { navLinks, site } from '@/lib/site';
import { ThemeToggle } from './ThemeToggle';
import { FontToggle } from './FontToggle';

export function Nav() {
  return (
    <nav className="layout-grid mt-[4rem]">
      {/* The negative margin lets each link's hover background bleed to the
          optical edge of the column without pushing the text off-grid. */}
      <div className="col-narrow -mx-[0.35rem] flex items-center justify-start">
        <Link
          href="/"
          className="flex shrink-0 whitespace-nowrap rounded-s p-[0.35rem] font-medium leading-none tracking-tight text-heading transition-colors duration-200 ease-out hover:bg-accent-wash-subtle hover:text-accent hover:duration-fast"
        >
          {site.name}
        </Link>

        <div className="flex grow items-center justify-between text-secondary">
          <div className="flex items-center">
            <ThemeToggle />
            <FontToggle />
          </div>

          <div className="flex grow items-baseline justify-end gap-xs">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex rounded-s p-[0.35rem] font-[450] leading-none tracking-[-0.01em] transition-colors duration-200 ease-out hover:bg-accent-wash-subtle hover:text-accent hover:duration-fast"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
