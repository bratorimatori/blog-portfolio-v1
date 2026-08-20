import Link from 'next/link';
import { LinkArrow } from '@/components/LinkArrow';

export default function NotFound() {
  return (
    <main className="layout-grid">
      <div className="col-narrow mt-l flow flow-compact">
        <h1 className="text-xl font-medium tracking-tight text-heading">
          Not found
        </h1>
        <p className="text-secondary">
          That page doesn&apos;t exist. It may have moved, or never have been.
        </p>
        <p>
          <Link
            href="/"
            className="group text-m font-medium transition-colors duration-200 ease-out hover:text-accent hover:duration-fast"
          >
            Back home <LinkArrow />
          </Link>
        </p>
      </div>
    </main>
  );
}
