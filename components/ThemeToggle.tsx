'use client';

/**
 * Both icon groups are always rendered; CSS on <html> decides which is visible.
 * That keeps the server and client markup identical, so there is no hydration
 * mismatch and no flash while React boots.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains('dark');
    root.classList.toggle('dark', nextIsDark);
    try {
      localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');
    } catch {
      // Private browsing. The toggle still works for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch color theme"
      className="flex rounded-full p-[0.6rem] transition-colors duration-200 ease-out hover:bg-accent-wash-subtle hover:duration-fast"
    >
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1.1em] w-[1.1em] fill-tertiary stroke-tertiary"
      >
        <g className="icon-light">
          <circle cx="25" cy="25" r="18" strokeWidth="3px" fill="none" />
        </g>
        <g className="icon-dark">
          <circle cx="25" cy="25" r="18" strokeWidth="3px" fill="none" />
          <circle cx="25" cy="25" r="7" stroke="none" />
        </g>
      </svg>
    </button>
  );
}
