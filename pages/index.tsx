import ArticleList from '@/components/ArticleList';
import ArticlePost from '@/components/ArticlePost';
import GradientBox from '@/components/GradientBox';
import PopularCard from '@/components/PopularCard';
import ProjectCard from '@/components/ProjectCard';
import { Post, getSortedPostsData } from '@/lib/posts';
import { getProjects } from '@/util/getProjects';
import Link from 'next/link';
import { Helmet } from 'react-helmet';

interface Props {
  allPostsData: Post[];
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <div className='container flex flex-col items-center justify-center mx-auto max-w-4xl min-h-[40vh] px-4'>
        <section>
          <article>
            <div className='flex items-center justify-start'>
              <div className='flex items-center justify-start'>
                <GradientBox />
              </div>
              <h1 className='text-7xl ml-3 text-gray-900 dark:text-gray-200'>
                Welcome
              </h1>
            </div>
            <p className='text-base text-gray-500 dark:text-gray-300 leading-6 mt-6'>
              I&apos;m Bojan Tomic, a product-focused{' '}
              <span className='underline'>Full Stack Developer</span> and{' '}
              <span className='underline'>solo entrepreneur</span> based in Serbia.
              Currently, I&apos;m building scalable healthcare solutions at{' '}
              <a href='https://www.icanotes.com' target='_blank' rel='noopener noreferrer' className='underline hover:text-gray-700 dark:hover:text-gray-100'>IcaNotes</a>
              {' '}using <span className='underline'>Node.js</span>, <span className='underline'>Angular</span>,
              <span className='underline'>React</span>, <span className='underline'>Express</span>,
              and <span className='underline'>Nest.js</span>.
            </p>
            <p className='text-base text-gray-500 dark:text-gray-300 leading-6'>
              As a solo entrepreneur, I created and maintain{' '}
              <a href='https://intelligenttools.co' target='_blank' rel='noopener noreferrer' className='underline hover:text-gray-700 dark:hover:text-gray-100'>IntelligentTools.co</a>
              , a comprehensive AI tools directory helping users discover and leverage cutting-edge AI solutions.
            </p>
            <p className='text-base text-gray-500 dark:text-gray-300 leading-6'>
              I specialize in analyzing technical and product challenges from a holistic,
              cross-platform perspective, enabling teams to evaluate trade-offs and implement
              optimal solutions. My approach emphasizes building accessible, user-centered
              products that solve real-world problems.
            </p>
          </article>
          <div className='flex flex-row flex-wrap gap-2 mt-6'>
            {/* TypeScript */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#3178c6' d='M22.67 47h99.67v73.67H22.67z'></path>
              </svg>
              TypeScript
            </span>

            {/* JavaScript */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#f7df1e' d='M1.408 1.408h125.184v125.185H1.408z'></path>
              </svg>
              JavaScript
            </span>

            {/* React */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <circle cx='64' cy='64' r='11.4' fill='#61dafb'></circle>
                <ellipse cx='64' cy='64' rx='50' ry='20' fill='none' stroke='#61dafb' strokeWidth='8'></ellipse>
                <ellipse cx='64' cy='64' rx='50' ry='20' fill='none' stroke='#61dafb' strokeWidth='8' transform='rotate(60 64 64)'></ellipse>
                <ellipse cx='64' cy='64' rx='50' ry='20' fill='none' stroke='#61dafb' strokeWidth='8' transform='rotate(120 64 64)'></ellipse>
              </svg>
              React
            </span>

            {/* Next.js */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='white' d='M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z'></path>
              </svg>
              Next.js
            </span>

            {/* Node.js */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#83cd29' d='M112.678 30.334L68.535 4.729c-2.781-1.584-6.424-1.584-9.227 0L14.82 30.334C11.951 31.985 10 35.088 10 38.407v51.142c0 3.319 1.951 6.365 4.82 8.016l11.252 6.51c6.061 3.032 8.223 3.032 11.004 3.032 9.004 0 14.196-5.472 14.196-14.945V41.82c0-.609-.41-1.096-1.029-1.096h-4.48c-.619 0-1.029.487-1.029 1.096v50.342c0 3.893-4.068 7.767-10.687 4.479l-11.687-6.73c-.383-.221-.619-.608-.619-1.026V38.407c0-.418.236-.804.619-1.025l43.786-25.282c.363-.209.885-.209 1.248 0l43.786 25.282c.383.221.619.607.619 1.025v51.142c0 .418-.236.805-.619 1.026l-43.786 25.282c-.363.209-.885.209-1.248 0l-11.195-6.645c-.34-.201-.719-.26-1.029-.155-2.846.868-3.406 1.063-6.074 1.624-.639.136-1.594.422.225 1.223l14.582 8.647c1.383.798 2.953 1.212 4.566 1.212 1.613 0 3.183-.414 4.566-1.212l43.787-25.283c2.869-1.651 4.82-4.697 4.82-8.016V38.407c0-3.319-1.951-6.422-4.82-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.102-.628-.634-1.379-1.281-1.379h-4.59c-.709 0-1.28.86-1.28 1.566 0 7.466 4.06 16.512 22.321 16.512 14.641 0 23.1-5.824 23.1-15.995 0-10.145-6.675-12.964-19.941-14.897-13.308-1.933-14.739-2.988-14.739-6.484 0-2.876 1.121-6.711 11.738-6.711 9.358 0 12.803 2.035 14.237 8.368.119.551.64.97 1.256.97h4.627c.354 0 .689-.143.937-.396.248-.253.371-.615.334-.979-1.059-12.562-9.471-18.403-21.391-18.403-12.238 0-19.528 5.172-19.528 13.827 0 10.263 7.925 13.122 19.487 14.355 13.925 1.485 15.193 3.71 15.193 7.141.001 5.421-4.317 7.572-14.21 7.572z'></path>
              </svg>
              Node.js
            </span>

            {/* Express */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#fff' d='M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z'></path>
              </svg>
              Express
            </span>

            {/* Nest.js */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#e0234e' d='M101.7 42.9c-.3-.2-.6-.3-.9-.3-.2 0-.4.1-.7.2-.5.2-1 .5-1.4.9-.5.4-.9.9-1.2 1.5-.3.6-.5 1.3-.5 2 0 .4.1.8.2 1.2.1.4.3.7.6 1 .2.3.5.5.9.7.3.2.7.2 1.1.2.7 0 1.3-.2 1.9-.7.5-.4.9-.9 1.2-1.5.3-.6.4-1.2.4-1.9 0-.4-.1-.9-.2-1.3-.2-.4-.4-.7-.7-1-.3-.2-.5-.4-.7-.5zm-2 22.7c-.9 0-1.7.2-2.5.5-.8.3-1.4.8-2 1.4-.5.6-.9 1.3-1.2 2.1-.3.8-.4 1.6-.4 2.5v17.6c0 .9.1 1.7.4 2.5.3.8.7 1.5 1.2 2.1.5.6 1.2 1.1 2 1.4.8.3 1.6.5 2.5.5.9 0 1.7-.2 2.5-.5.8-.3 1.4-.8 2-1.4.5-.6.9-1.3 1.2-2.1.3-.8.4-1.6.4-2.5V71.6c0-.9-.1-1.7-.4-2.5-.3-.8-.7-1.5-1.2-2.1-.5-.6-1.2-1.1-2-1.4-.8-.3-1.6-.5-2.5-.5zm-24.6.5c0-.9-.2-1.7-.5-2.5-.3-.8-.8-1.4-1.4-2-.6-.5-1.3-.9-2.1-1.2-.8-.3-1.6-.4-2.5-.4-.9 0-1.7.1-2.5.4-.8.3-1.5.7-2.1 1.2-.6.5-1.1 1.2-1.4 2-.3.8-.5 1.6-.5 2.5v28.8c0 .9.2 1.7.5 2.5.3.8.8 1.4 1.4 2 .6.5 1.3.9 2.1 1.2.8.3 1.6.4 2.5.4.9 0 1.7-.1 2.5-.4.8-.3 1.5-.7 2.1-1.2.6-.5 1.1-1.2 1.4-2 .3-.8.5-1.6.5-2.5V66.1z'></path>
              </svg>
              Nest.js
            </span>

            {/* Angular */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#dd0031' d='M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026z'></path>
                <path fill='#c3002f' d='M63.81 1.026v125.948l50.214-27.828 9.36-77.635L63.81 1.026z'></path>
                <path fill='#fff' d='M63.81 17.653L26.64 98.58h13.888l7.463-18.41h31.769l7.464 18.41h13.888L63.81 17.653zM71.604 68.324H55.978l7.813-19.114 7.813 19.114z'></path>
              </svg>
              Angular
            </span>

            {/* Supabase */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 109 113' width='14' height='14' className='mr-1.5' fill='none'>
                <path fill='#3ECF8E' d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z'></path>
                <path fill='#3ECF8E' fillOpacity='.2' d='M63.708 110.284c-2.86 3.601-8.658 1.628-8.727-2.97l-1.007-67.251h45.22c8.19 0 12.758 9.46 7.665 15.874l-43.151 54.347Z'></path>
                <path fill='#3ECF8E' d='M45.317 2.071c2.86-3.601 8.657-1.628 8.726 2.97l.442 67.251H9.83c-8.19 0-12.759-9.46-7.665-15.875L45.317 2.072Z'></path>
              </svg>
              Supabase
            </span>

            {/* Tailwind CSS */}
            <span className='inline-flex items-center px-2.5 py-1 text-xs font-semibold bg-white/10 text-white border border-gray-400/50 rounded hover:bg-white/20 transition-colors'>
              <svg viewBox='0 0 128 128' width='14' height='14' className='mr-1.5'>
                <path fill='#38bdf8' d='M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64z'></path>
              </svg>
              Tailwind CSS
            </span>
          </div>
          <div className='flex items-center justify-start my-6'>
            <Link aria-label='See More About Me' href='/contact'>
              <p className='text-gray-500'>
                Contact Me
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
          </div>
        </section>
        <section className='flex justify-between my-6 mt-20 min-w-full items-center'>
          <span className='text-3xl text-gray-500 dark:text-gray-300 leading-6'>
            Latest Posts
          </span>
          <Link className='flex justify-between items-stretch' href={`/blog`}>
            <span className='text-sm text-gray-500 dark:text-gray-300 leading-4 border-solid border rounded-md bg-gray-100 border-gray-800 hover:border-gray-300 pr-3 pl-3 pt-2 pb-2 dark:bg-button-background dark:border-gray-800 dark:hover:border-gray-400'>
              View all
            </span>
          </Link>
        </section>
        <section className='flex justify-between min-w-full'>
          <ul className='min-w-full'>
            {allPostsData.map((post, idx) => (
              <li key={idx} className='min-w-full border-b border-border-color'>
                <ArticleList post={post} />
              </li>
            ))}
          </ul>
        </section>
        <section className='flex justify-between my-6 mt-20 min-w-full items-center'>
          <span className='text-3xl text-gray-500 dark:text-gray-300 leading-6'>
            Articles
          </span>
        </section>
        <section className='flex justify-between min-w-full'>
          <ul className='grid gap-4 sm:grid-cols-3 min-w-full'>
            {allPostsData.map((post, idx) => (
              <li key={idx}>
                <PopularCard post={post} />
              </li>
            ))}
          </ul>
        </section>
        <section className='flex justify-between my-6 min-w-full items-center mt-20'>
          <span className='text-3xl text-gray-500 dark:text-gray-300 leading-6'>
            Projects
          </span>
        </section>
        <section className='flex justify-between min-w-full'>
          <ul className='grid gap-4 sm:grid-cols-3 min-w-full'>
            {getProjects().map((project, idx) => (
              <li key={idx}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer>
        <section className='flex flex-col items-center justify-center mt-12 text-xs text-gray-500 dark:text-gray-300 leading-6'>
          <nav className='flex items-center justify-center mb-2'>
            <span className='mr-2'>Made by Bojan Tomic</span>
            <span>RSS</span>
          </nav>
          <nav className='flex items-center justify-center mb-8'>
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
              className='mr-3'
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
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.reddit.com/user/bratorimatori/'
              aria-label='Go To Bojan Tomic Reddit Profile'
              title='Reddit Profile'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='gray'
              >
                <path d='M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-2.4-1.74-5.7-2.86-9.42-2.98l1.62-7.62 5.28 1.14c.06 1.26 1.12 2.24 2.4 2.24 1.32 0 2.4-1.08 2.4-2.4s-1.08-2.4-2.4-2.4c-1.02 0-1.92.66-2.28 1.56l-5.88-1.26c-.18-.06-.36 0-.48.12-.12.12-.18.3-.12.48l-1.8 8.4c-3.78.12-7.14 1.26-9.6 3.06-.54-.78-1.44-1.26-2.4-1.26-1.65 0-3 1.35-3 3 0 1.32.84 2.46 2.04 2.82-.06.36-.12.66-.12 1.02 0 5.16 6 9.36 13.38 9.36s13.38-4.2 13.38-9.36c0-.36-.06-.72-.12-1.02 1.2-.36 2.04-1.5 2.04-2.82zm-19.86 1.68c0-.84.66-1.5 1.5-1.5s1.5.66 1.5 1.5-.66 1.5-1.5 1.5-1.5-.66-1.5-1.5zm8.4 5.58c-1.62 1.62-5.94 1.62-6.66 0-.12-.12-.12-.3 0-.42.12-.12.3-.12.42 0 1.14 1.14 4.98 1.14 5.82 0 .12-.12.3-.12.42 0 .12.12.12.3 0 .42zm-.24-2.58c-.84 0-1.5-.66-1.5-1.5s.66-1.5 1.5-1.5 1.5.66 1.5 1.5-.66 1.5-1.5 1.5z'></path>
              </svg>
            </a>
          </nav>
        </section>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
