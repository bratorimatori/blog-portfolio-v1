export type Role = {
  company: string;
  title: string;
  /** Rendered in mono, so keep it short. */
  period: string;
  location: string;
  description?: string;
  stack?: string[];
};

/** Reverse chronological. Source: LinkedIn profile export. */
export const experience: Role[] = [
  {
    company: 'ICANotes',
    title: 'Software Engineer',
    period: '2024-now',
    location: 'Annapolis, Maryland',
    description:
      'Behavioral health EHR software, where the interesting problems are the ones nobody sees: data integrity, safe migrations, and keeping a large, long-lived product legible to the people who work in it every day.',
    stack: ['Node.js', 'Angular', 'React', 'NestJS', 'Express', 'TypeScript'],
  },
  {
    company: 'Vroom',
    title: 'Full Stack Engineer',
    period: '2021-2024',
    location: 'Belgrade, Serbia',
    description:
      'A New York used-car marketplace where people buy, sell, and finance cars entirely online. I built responsive web applications across the stack.',
    stack: ['Node.js', 'Angular', 'React', 'Next.js', 'MobX', 'TypeScript'],
  },
  {
    company: 'Tymeshift',
    title: 'Software Engineer',
    period: '2020-2021',
    location: 'Novi Sad, Serbia',
    description:
      'Workforce management built exclusively for Zendesk. I focused on the interface layer in React, and on the Node.js services behind it.',
    stack: ['React', 'Redux', 'Node.js', 'TypeScript'],
  },
  {
    company: 'ElanWave',
    title: 'Full Stack Developer',
    period: '2017-2020',
    location: 'Serbia',
    description:
      'Custom software for clients across web and mobile. The job was as much identifying what a client actually needed as it was building it.',
    stack: ['C#', 'ASP.NET Core', 'Angular', 'React', 'TypeScript', 'Azure'],
  },
  {
    company: 'aikon group',
    title: 'Web Developer',
    period: '2015-2017',
    location: 'Serbia',
    description:
      'Web applications for the automotive industry, building new features and maintaining existing systems inside an international team.',
    stack: ['C#', 'AngularJS', 'ASP.NET', 'JavaScript', 'Event Store'],
  },
  {
    company: 'Devtech',
    title: 'Software Developer, Internship',
    period: '2015',
    location: 'Novi Sad, Serbia',
    description:
      'Where I first learned to work the way a team works: Scrum, code review, and shipping something other people depend on.',
    stack: ['C#', 'ASP.NET', 'Razor', 'MongoDB'],
  },
];

/** The pre-software career, summarised rather than itemised. */
export const earlierCareer =
  'Before software I spent five years as a security engineer installing and maintaining CCTV, access control, and wireless networks for government buildings and factories, and four years before that in field marketing for Philip Morris International.';
