import { Project } from '@/util/getProjects';
import Link from 'next/link';

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { year, title, desc, link } = project;
  return (
    <article className='flex text-xs items-center leading-4 text-gray-500 dark:text-gray-300 p-4 border-solid border rounded-md bg-gray-100 border-border-color  dark:bg-transparent dark:border-border-color min-h-full'>
      <div className='grid gap-1 ml-2'>
        <div className='text-sm text-date-color'>
          <span>{year}</span>
        </div>
        <Link className='mt-px mb-2' href={link}>
          <span className='text-base leading-4'>{title}</span>
        </Link>
        <p className='text-sm text-card-font'>{desc}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
