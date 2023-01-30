import Link from 'next/link';

export default function Contact() {
  return (
    <div className='container flex flex-col items-start justify-center mx-auto max-w-4xl min-h-[61vh] px-4'>
      <p className='text-base text-gray-500 dark:text-gray-300 leading-9'>
        Let&apos;s connect. If you want to know more about me or my work, or if
        you would just like to say hello, send me a message. I&apos;d love to
        hear from you.
      </p>
      <footer className='flex items-center justify-start my-6'>
        <Link aria-label='See More About Me' href='/home'>
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
    </div>
  );
}
