type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className='mx-auto' dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default PostBody;
