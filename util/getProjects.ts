export type Project = {
  year: string;
  title: string;
  desc: string;
  link: string;
};

export const getProjects = (): Project[] => {
  const projects: Project[] = [
    {
      year: '2022',
      title: 'Autocomplete',
      desc: 'React autocomplete component',
      link: 'https://github.com/bratorimatori/autocomplete-demo',
    },
    {
      year: '2022',
      title: 'Graphql with Apollo',
      desc: 'GraphQL CRUD with Apollo server',
      link: 'https://github.com/bratorimatori/graphql-crud-with-apollo',
    },
    {
      year: '2022',
      title: 'Fetch Data Hook',
      desc: 'React custom hook',
      link: 'https://github.com/bratorimatori/fetch-data-hooks',
    },
  ];

  return projects;
};
