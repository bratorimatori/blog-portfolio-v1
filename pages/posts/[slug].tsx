import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { Post } from '../../lib/posts';
import PostHeader from '@/components/PostHeader';
import PostBody from '@/components/PostBody';

type Props = {
  post: Post;
};

export default function BlogPost({ post }: Props) {
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className='container flex items-center justify-center mx-auto max-w-4xl min-h-[61vh] px-4'>
      <article className='text-base text-gray-500 dark:text-gray-300 leading-6'>
        <div className='mb-32'>
          <Head>
            <title>{title}</title>
            <meta property='og:image' content={post.coverImage} />
          </Head>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </div>
      </article>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  debugger;
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ]);

  return {
    props: {
      post: {
        ...post,
      },
    },
  };
}

export async function getStaticPaths() {
  debugger;
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
