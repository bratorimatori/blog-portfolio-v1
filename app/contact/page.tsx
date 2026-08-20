import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Bojan Tomic.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <main className="layout-grid">
      <header className="col-narrow mt-m flow flow-compact">
        <h1 className="text-xl font-medium tracking-tight text-heading">Contact</h1>
        <p className="text-secondary">
          If you want to talk about a project, ask about something I&apos;ve
          written, or just say hello. This reaches me directly.
        </p>
      </header>

      <div className="col-narrow mt-m">
        <ContactForm />
      </div>
    </main>
  );
}
