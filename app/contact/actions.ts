'use server';

import { Resend } from 'resend';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
};

const CONTACT_TO = 'intelligenttoolsco@gmail.com';
const CONTACT_FROM = 'Portfolio Contact <onboarding@resend.dev>';

/** Values land in an HTML email, so escape before interpolating. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots fill every field, humans never see this one.
  if (formData.get('company')) {
    return { status: 'success' };
  }

  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !message) {
    return { status: 'error', message: 'Name and message are both required.' };
  }

  if (!process.env['RESEND_API_KEY']) {
    return {
      status: 'error',
      message: 'Email is not configured right now. Try one of the links below.',
    };
  }

  try {
    const resend = new Resend(process.env['RESEND_API_KEY']);

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email || undefined,
      subject: `Contact form: ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>From:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email) || '(not given)'}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend rejected the message:', error);
      return { status: 'error', message: 'Could not send that. Try again?' };
    }

    return { status: 'success' };
  } catch (error) {
    console.error('Contact form failed:', error);
    return { status: 'error', message: 'Something broke on my end. Try again?' };
  }
}
