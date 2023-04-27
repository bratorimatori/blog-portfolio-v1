import { Post } from '@/lib/posts';
import Link from 'next/link';

type Props = {
  post: Post;
};

const PopularCard = ({ post }: Props) => {
  return (
    <article className='flex text-sm items-center leading-4 text-gray-500 dark:text-gray-300 p-4 border-solid border rounded-md bg-gray-100 border-border-color  dark:bg-transparent dark:border-border-color'>
      <div className='w-11 h-11'>
        <img src='https://tania.dev/static/d695fe69198cc4558284e9aec1a4892c/ad39b/react.png' />
      </div>
      <div className='grid gap-1 ml-2'>
        <time className='text-sm text-card-font'>November 17, 2021</time>
        <Link className='mt-px mb-2' href={`/posts/${post.slug}`}>
          <span className='text-base leading-4 '>Understanding GraphQL</span>
        </Link>
      </div>
    </article>
  );
};

export default PopularCard;
