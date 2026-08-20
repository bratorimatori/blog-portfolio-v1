export type Project = {
  year: string;
  title: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    year: '2025',
    title: 'IntelligentTools.co',
    description:
      'A directory of AI tools, built and maintained solo from crawler to front end.',
    href: 'https://intelligenttools.co',
  },
  {
    year: '2022',
    title: 'Autocomplete',
    description: 'A dependency-free React autocomplete component.',
    href: 'https://github.com/bratorimatori/autocomplete-demo',
  },
  {
    year: '2022',
    title: 'GraphQL with Apollo',
    description: 'A worked CRUD example on Apollo Server.',
    href: 'https://github.com/bratorimatori/graphql-crud-with-apollo',
  },
  {
    year: '2022',
    title: 'Fetch Data Hook',
    description: 'A small custom React hook for data fetching.',
    href: 'https://github.com/bratorimatori/fetch-data-hooks',
  },
];
