import { getSortedPostsData } from '@/lib/posts';

export default function Posts({ allPostsData }) {
  console.log(allPostsData);

  return (
    <div className='container flex items-center justify-center mx-auto max-w-4xl min-h-[61vh] px-4'>
      <section>
        <article>
          <ul>
            {allPostsData.map((post, idx) => (
              <li key={idx}>{post.title}</li>
            ))}
          </ul>
        </article>
      </section>
    </div>
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
