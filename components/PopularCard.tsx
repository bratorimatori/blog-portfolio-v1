import { Post } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import reactLogo from '../public/logo/react.png';

type Props = {
  post: Post;
};

const PopularCard = ({ post }: Props) => {
  return (
    <article className='flex text-xs items-center leading-4 text-gray-500 dark:text-gray-300 p-4 border-solid border rounded-md bg-gray-100 border-border-color  dark:bg-transparent dark:border-border-color min-h-full'>
      <div className='min-w-fit'>
        <Image className='min-w-full' alt={post.title} src={reactLogo} />
      </div>
      <div className='grid gap-1 ml-2'>
        <time className=' text-card-font'>{post.date}</time>
        <Link className='mt-px mb-2' href={`/posts/${post.slug}`}>
          <span>{post.title}</span>
        </Link>
      </div>
    </article>
  );
};

export default PopularCard;
