'use client';

const ROWS = [8, 15, 22, 29, 36, 43];

/** Swaps the body typeface between the sans and serif themes. */
export function FontToggle() {
  function toggle() {
    const root = document.documentElement;
    const nextIsSerif = !root.classList.contains('theme-serif');
    root.classList.toggle('theme-serif', nextIsSerif);
    try {
      localStorage.setItem('fontTheme', nextIsSerif ? 'serif' : 'default');
    } catch {
      // Ignored. See ThemeToggle.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between sans and serif type"
      className="flex rounded-s p-[0.6rem] transition-colors duration-200 ease-out hover:bg-accent-wash-subtle hover:duration-fast"
    >
      <svg
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[1.1em] w-[1.1em] fill-tertiary stroke-tertiary"
      >
        <g className="icon-sans">
          {ROWS.map((y) => (
            <line key={y} x1="5" y1={y} x2="45" y2={y} strokeWidth="3px" />
          ))}
        </g>
        <g className="icon-serif">
          {ROWS.map((y) => (
            <g key={y}>
              <line x1="5" y1={y} x2="22.5" y2={y} strokeWidth="3px" />
              <line x1="27.5" y1={y} x2="45" y2={y} strokeWidth="3px" />
            </g>
          ))}
        </g>
      </svg>
    </button>
  );
}
