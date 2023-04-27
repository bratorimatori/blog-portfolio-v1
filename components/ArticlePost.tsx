import { Post } from '@/lib/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

const ArticlePost = ({ post }: Props) => {
  return (
    <article className='text-gray-500 dark:text-gray-300 leading-6'>
      <span className='text-sm mb-2'>Server-Side</span>
      <h3 className='text-lg text-gray-500 dark:text-gray-300 leading-6 mb-2'>
        {post.title}
      </h3>
      <div className='text-sm mb-2'>
        <span>{post.author}</span> | <span>{post.date}</span>
      </div>
      <p className='text-base text-gray-500 dark:text-gray-300 leading-6'>
        {post.desc}
      </p>
      <Link
        className='flex mt-6 justify-between w-fit'
        href={`/posts/${post.slug}`}
      >
        <span className='text-sm leading-4 border-solid border rounded-md bg-gray-100 border-gray-800 hover:border-gray-300 pr-3 pl-3 pt-2 pb-2 dark:bg-button-background dark:border-gray-800 dark:hover:border-gray-400'>
          Read more
        </span>
      </Link>
    </article>
  );
};

export default ArticlePost;
