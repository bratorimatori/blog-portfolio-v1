import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Resume() {
  const [theme, setTheme] = useState<null | string>('');
  const [themeClass, setThemeClass] = useState('unset');

  useEffect(() => {
    console.log(localStorage.getItem('theme'));
    if (localStorage.getItem('theme') !== null) {
      setTheme(localStorage.getItem('theme'));
      const themeClass =
        theme === 'dark' ? 'invert(0.1) grayscale(0.1)' : 'unset';
      setThemeClass(themeClass);
    }
  }, [theme]);

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
          </Link>{' '}
          or{' '}
          <Link
            href='../../Bojan_Tomic_-_Software_Engineer (2).pdf'
            aria-current='page'
            className='text-base  text-gray-900 dark:text-gray-200'
            download
          >
            <strong>download</strong>
          </Link>{' '}
          the resume.
        </p>
      </div>
      <iframe
        src='../../Bojan_Tomic_-_Software_Engineer (2).pdf#toolbar=0'
        width='740px'
        height='980px'
        allowFullScreen
        style={{
          filter: `${themeClass}`,
        }}
      />
    </div>
  );
}
