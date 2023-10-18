import PostTitle from './PostTitle';
import CoverImage from './CoverImage';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle title={title} />
      <div className='hidden md:block md:mb-12'>{author}</div>
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className='max-w-2xl'>
        <div className='block md:hidden mb-6'>{author}</div>
        <div className='mb-6 text-lg'>{date}</div>
      </div>
    </>
  );
};

export default PostHeader;
