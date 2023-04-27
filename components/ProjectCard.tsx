import Link from 'next/link';

const ProjectCard = () => {
  return (
    <article className='flex text-sm items-center leading-4 text-gray-500 dark:text-gray-300 p-4 border-solid border rounded-md bg-gray-100 border-border-color  dark:bg-transparent dark:border-border-color'>
      <div className='grid gap-1 ml-2'>
        <span className='text-sm text-card-font'>2022</span>
        <Link
          className='mt-px mb-2'
          href={`https://github.com/bratorimatori/graphql-crud-with-apollo`}
        >
          <span className='text-base leading-4 '>Graphql Crud With Apollo</span>
        </Link>
        <p className='text-sm text-card-font'>
          GraphQL CRUD with Apollo server and React Client
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
