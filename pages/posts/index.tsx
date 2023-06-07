import ArticlePost from '@/components/ArticlePost';
import { getSortedPostsData, Post } from '@/lib/posts';
import Link from 'next/link';

interface Props {
  allPostsData: Post[];
}

export default function Posts({ allPostsData }: Props) {
  return (
    <>
      <div className='container flex flex-col items-center justify-center mx-auto max-w-4xl min-h-[61vh] px-4 mt-10'>
        <section>
          <article>
            <ul>
              {allPostsData.map((post, idx) => (
                <li key={idx} className='mb-10'>
                  <ArticlePost post={post} />
                </li>
              ))}
            </ul>
          </article>
        </section>
        <Link aria-label='See More About Me' href='/' className='mr-auto'>
          <p className='text-gray-500 mt-10'>
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
      </div>
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
