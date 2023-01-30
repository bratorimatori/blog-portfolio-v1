import Link from 'next/link';

export default function Resume() {
  return (
    <div className='container flex flex-col items-start justify-center mx-auto max-w-4xl min-h-[61vh] px-4'>
      <div className='' style={{ width: '740px' }}>
        <h1 className='text-7xl text-gray-900 dark:text-gray-200'>Resume.</h1>
        <p className='text-base text-gray-500 dark:text-gray-300 mt-3 mb-8'>
          Reach out to me via my{' '}
          <Link
            href='/contact'
            aria-current='page'
            className='text-base  text-gray-900 dark:text-gray-200'
          >
            <strong>contact page</strong>
          </Link>
          .
        </p>
      </div>
      <iframe
        src='../../Bojan_Tomic_-_Software_Engineer (2).pdf#toolbar=0'
        width='740px'
        height='980px'
        allowFullScreen
      ></iframe>
    </div>
  );
}
