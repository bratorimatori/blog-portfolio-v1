import type { Role } from '@/lib/experience';

/**
 * The same visual grammar as Stub (mono meta column, medium-weight title) but
 * inert, since a job is not a link.
 */
export function ExperienceItem({ role }: { role: Role }) {
  return (
    <div>
      <div className="flex flex-col items-baseline gap-0 min-[801px]:flex-row min-[801px]:gap-s">
        <span className="shrink-0 font-mono text-m font-normal text-secondary tabular-nums">
          {role.period}
        </span>
        <h3 className="text-m font-medium text-primary">
          {role.title}, {role.company}
        </h3>
      </div>

      {role.description ? (
        <p className="mt-xs leading-tight text-secondary">{role.description}</p>
      ) : null}

      {role.stack ? (
        <p className="mt-xs font-mono text-xs text-tertiary">
          {role.stack.join(' · ')}
        </p>
      ) : null}
    </div>
  );
}
