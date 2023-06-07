import { Post } from '@/lib/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

const ArticleList = ({ post }: Props) => {
  return (
    <>
      <article className='text-gray-500 dark:text-gray-300 leading-6 flex justify-between items-baseline my-1 min-w-full'>
        <Link
          className='flex justify-between w-fit'
          href={`/posts/${post.slug}`}
        >
          <h3 className='text-base text-gray-500 dark:text-gray-300 leading-6'>
            {post.title}
          </h3>
        </Link>
        <div className='text-sm text-date-color'>
          <span>{post.date}</span>
        </div>
      </article>
    </>
  );
};

export default ArticleList;
