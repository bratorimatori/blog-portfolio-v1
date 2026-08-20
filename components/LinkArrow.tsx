/**
 * The site's one flourish: a hairline arrow whose shaft fades in and whose tip
 * slides right when the enclosing link is hovered. Requires an ancestor with
 * Tailwind's `group` class.
 */
export function LinkArrow() {
  return (
    <svg
      className="inline-block h-[0.5em] w-[0.5em] fill-none align-middle stroke-current [stroke-width:0.05em]"
      viewBox="0 0 10 10"
      aria-hidden="true"
    >
      <g fillRule="evenodd">
        <path
          d="M0 5h7"
          className="opacity-0 transition-opacity duration-fast ease-out group-hover:opacity-100"
        />
        <path
          d="M1 1l4 4-4 4"
          className="translate-x-0 transition-transform duration-fast ease-out group-hover:translate-x-[0.18em]"
        />
      </g>
    </svg>
  );
}
