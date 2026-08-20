'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact, type ContactState } from '@/app/contact/actions';

const INITIAL: ContactState = { status: 'idle' };

const fieldClass =
  'w-full rounded-s border border-border-strong bg-bg px-xs py-[0.4rem] text-m text-primary transition-colors duration-200 ease-out placeholder:text-tertiary focus:border-accent focus:outline-none';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-block rounded-s bg-accent px-4 py-[0.35em] text-s font-medium text-on-accent transition-colors duration-100 ease-out hover:bg-accent-hover hover:duration-fast active:bg-accent-active disabled:opacity-60"
    >
      {pending ? 'Sending…' : 'Send message'}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, INITIAL);

  if (state.status === 'success') {
    return (
      <p className="rounded-m border border-border bg-bg-subtle p-s text-primary">
        Thanks, that reached me. I&apos;ll reply soon.
      </p>
    );
  }

  return (
    <form action={formAction} className="flow">
      <div hidden aria-hidden="true">
        <label>
          Leave this empty
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="flow flow-tight">
        <label htmlFor="name" className="block text-s text-secondary">
          Name
        </label>
        <input id="name" name="name" required className={fieldClass} />
      </div>

      <div className="flow flow-tight">
        <label htmlFor="email" className="block text-s text-secondary">
          Email <span className="text-tertiary">(so I can reply)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          className={fieldClass}
        />
      </div>

      <div className="flow flow-tight">
        <label htmlFor="message" className="block text-s text-secondary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {state.status === 'error' && state.message ? (
        <p role="alert" className="text-s text-accent">
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
