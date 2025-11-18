import GradientBox from '@/components/GradientBox';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';

interface FormValues {
  name: string;
  message: string;
}

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (value: FormValues) => {
    try {
      setSubmitStatus('idle');
      setErrorMessage('');

      const res = await fetch('/api/contact', {
        body: JSON.stringify({
          fullname: value.name,
          subject: 'Contact Form Submission',
          message: value.message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className='container flex flex-col items-start justify-center mx-auto max-w-4xl min-h-[61vh] px-4'>
      <div className='flex items-center justify-start mt-16'>
        <div className='flex items-center justify-start'>
          <GradientBox />
        </div>
        <h1 className='text-7xl ml-3 text-gray-900 dark:text-gray-200'>
          Contact.
        </h1>
      </div>
      <p className='text-base text-gray-500 dark:text-gray-300 leading-6 mt-10'>
        Let&apos;s connect. If you want to know more about me or my work, or if
        you would just like to say hello, send me a message. I&apos;d love to
        hear from you.
      </p>
      <Formik<FormValues>
        initialValues={{
          name: '',
          message: '',
        }}
        onSubmit={async (values, actions) => {
          await handleSubmit(values);
          if (submitStatus === 'success') {
            actions.resetForm();
          }
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className='container flex flex-col items-start justify-start mx-auto w-2/3 ml-0 mt-10'>
            {submitStatus === 'success' && (
              <div className='w-full mb-4 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 rounded-md'>
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className='w-full mb-4 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-200 rounded-md'>
                {errorMessage}
              </div>
            )}
            <Field
              className='border-solid border pr-3 pl-3 pt-2 pb-2 w-full mb-4 rounded-md focus:outline-none focus-visible:ring'
              name='name'
              type='text'
              placeholder='Name'
              required
            />
            <Field
              className='border-solid border pr-3 pl-3 pt-2 pb-2 w-full mb-4 rounded-md h-44 focus:outline-none focus-visible:ring'
              name='message'
              component='textarea'
              placeholder='Message'
              required
            />
            <button
              className='text-gray-500 dark:text-gray-300 text-sm leading-4 border-solid border rounded-md bg-gray-100 border-gray-800 hover:border-gray-300 pr-3 pl-3 pt-2 pb-2 dark:bg-button-background dark:border-gray-800 dark:hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed'
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </Form>
        )}
      </Formik>
      <footer className='flex items-center justify-start my-6 mt-10'>
        <Link aria-label='See More About Me' href='/'>
          <p className='text-gray-500'>
            Go Back Home
            <svg
              className='animate-point-arrow inline ml-2'
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
              fill='grey'
            >
              <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z'></path>
            </svg>
          </p>
        </Link>
      </footer>
      <div className='flex items-center justify-start mt-12 mb-12'>
        <span className='mr-3'>
          <GradientBox width='36px' height='2px' borderRadius='0' />
        </span>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/bojan-tomic-b24944103/'
          aria-label='Go To Bojan Tomic Linkedin Page'
          title='Linkedin Page'
          className='mr-3'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='gray'
          >
            <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z'></path>
          </svg>
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/bratorimatori'
          aria-label='Go To Bojan Tomic Github Page'
          title='Github Page'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='gray'
          >
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
