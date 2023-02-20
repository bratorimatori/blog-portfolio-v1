import { getAllPostIds, getPostData } from '@/lib/posts';

export default function Post({ postData }) {
  console.log(postData);

  return (
    <div className='container flex items-center justify-center mx-auto max-w-4xl min-h-[61vh] px-4'>
      <section>
        <article></article>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
