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
          <div className='flex flex-row flex-wrap mt-4'>
            <div className='flex flex-row p-2 rounded-lg mr-4 mb-4 bg-gray-100'>
              <svg viewBox='0 0 128 128' width='24' height='24'>
                <path fill='#fff' d='M22.67 47h99.67v73.67H22.67z'></path>
                <path
                  data-name='original'
                  fill='#007acc'
                  d='M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z'
                ></path>
              </svg>
              <span className='ml-2'>TypeScript</span>
            </div>
            <div className='flex flex-row p-2 rounded-lg mr-4 mb-4 bg-gray-100'>
              <svg viewBox='0 0 128 128' width='24' height='24'>
                <path
                  fill='#F0DB4F'
                  d='M1.408 1.408h125.184v125.185H1.408z'
                ></path>
                <path
                  fill='#323330'
                  d='M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z'
                ></path>
              </svg>
              <span className='ml-2'>JavaScript</span>
            </div>
            <div className='flex flex-row p-2 rounded-lg mr-4 mb-4 bg-gray-100'>
              <svg viewBox='0 0 128 128' width='24' height='24'>
                <g fill='#61DAFB'>
                  <circle cx='64' cy='64' r='11.4'></circle>
                  <path d='M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z'></path>
                </g>
              </svg>
              <span className='ml-2'>React</span>
            </div>
            <div className='flex flex-row p-2 rounded-lg mr-4 mb-4 bg-gray-100'>
              <svg
                width='24px'
                height='24px'
                viewBox='-13 0 282 282'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMinYMin meet'
                fill='#000000'
              >
                <g id='SVGRepo_bgCarrier' stroke-idth='0'></g>
                <g
                  id='SVGRepo_tracerCarrier'
                  stroke-inecap='round'
                  strokeLinejoin='round'
                ></g>
                <g id='SVGRepo_iconCarrier'>
                  {' '}
                  <g fill='#8CC84B'>
                    {' '}
                    <path d='M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z'></path>{' '}
                    <path d='M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z'></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              <span className='ml-2'>NodeJS</span>
            </div>
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
