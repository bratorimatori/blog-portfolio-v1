import Combine from '@/layouts/icons/Combine';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeIcon from './ThemeIcon';

const checkTheme = (theme: string) => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [hideNavLink, setHideNavLink] = useState('');
  const [stroke, setStroke] = useState('white');
  const [opacity, setOpacity] = useState('1');
  const router = useRouter();
  let initTheme = '';
  if (typeof window !== 'undefined') {
    initTheme = localStorage.theme;
  }
  const [theme, setTheme] = useState(initTheme);

  useEffect(() => {
    checkTheme(initTheme);
  }, [theme, initTheme]);

  useEffect(() => {
    setStroke(theme === 'dark' ? 'white' : 'currentColor');
    setOpacity(theme === 'dark' ? '0.9' : '0.5');
  }, [theme]);

  useEffect(() => {
    setHideNavLink(router.route);
  }, [router.route]);

  const setThemeNav = () => {
    if (localStorage.theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <nav className='py-2'>
      <div className='container flex flex-wrap items-center justify-between mx-auto max-w-5xl px-8'>
        <Link
          href='/'
          className='text-gray-900 dark:text-gray-300 text-2xl'
          aria-label='Bojan Tomic Home'
        >
          Bojan Tomic
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => setShowNav(!showNav)}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={`${
            showNav ? '' : 'hidden'
          } w-full md:flex md:w-auto items-end h-11`}
          id='navbar-default'
        >
          <ul
            className={`${
              showNav ? 'w-fit' : ''
            } flex flex-col mt-4  md:flex-row md:space-x-8 md:mt-0 text-sm md:font-medium md:border-0 leading-9`}
          >
            <li
              className={`${
                hideNavLink === '/blog' ? 'hidden' : ''
              } group transition duration-300`}
            >
              <Link
                href='/posts'
                aria-current='page'
                className='text-base text-gray-400 dark:text-gray-300'
              >
                Blog
              </Link>
              <span className='block scale-0 group-hover:scale-100 transition-all ease-in-out duration-500 h-px bg-gray-900 dark:bg-gray-300'></span>
            </li>
            <li
              className={`${
                hideNavLink === '/resume' ? 'hidden' : ''
              } group transition duration-300`}
            >
              <Link
                href='/resume'
                aria-current='page'
                className='text-base text-gray-400 dark:text-gray-300'
              >
                Resume
              </Link>
              <span className='block scale-0 group-hover:scale-100 transition-all ease-in-out duration-500 h-px bg-gray-900 dark:bg-gray-300'></span>
            </li>
            <li
              className={`${
                hideNavLink === '/contact' ? 'hidden' : ''
              } group transition duration-300 `}
            >
              <Link
                href='/contact'
                aria-current='page'
                className='text-base text-gray-400 dark:text-gray-300'
              >
                Contact
              </Link>
              <span className='block scale-0 group-hover:scale-100 transition-all ease-in-out duration-500 h-px bg-gray-900 dark:bg-gray-300'></span>
            </li>
            <div className='opacity-80 md:flex items-center'>
              <button className='mb-2' onClick={() => setThemeNav()}>
                <ThemeIcon stroke={stroke} opacity={opacity} theme={theme} />
              </button>
            </div>
          </ul>
        </div>
      </div>
      <hr
        className={`${
          showNav ? 'hidden' : ''
        } h-px bg-gray-200 border-0 opacity-80  dark:bg-gray-800`}
      />
    </nav>
  );
};

export default Navbar;
