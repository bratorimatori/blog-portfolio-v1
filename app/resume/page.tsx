import type { Metadata } from 'next';
import { SectionHeader } from '@/components/SectionHeader';
import { ExperienceItem } from '@/components/ExperienceItem';
import { LinkArrow } from '@/components/LinkArrow';
import { experience, earlierCareer } from '@/lib/experience';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${site.name}, full-stack engineer working on healthcare software and AI tooling.`,
  alternates: { canonical: '/resume' },
};

const certifications = [
  { name: 'Developing on AWS', issuer: 'Amazon', year: '2022' },
  { name: 'GraphQL by Example', issuer: 'Udemy', year: '2022' },
  { name: 'JavaScript Algorithms and Data Structures', issuer: 'Udemy', year: '2020' },
  { name: 'React: The Complete Guide', issuer: 'Udemy', year: '2020' },
  { name: 'Angular: The Complete Guide', issuer: 'Udemy', year: '2020' },
  { name: 'Exam 483: Programming in C#', issuer: 'Microsoft', year: '2019' },
  { name: 'Exam 480: HTML5, JavaScript and CSS3', issuer: 'Microsoft', year: '2019' },
];

export default function AboutPage() {
  return (
    <main className="layout-grid">
      <header className="col-narrow mt-m flow">
        <h1 className="text-xl font-medium tracking-tight text-heading">About</h1>
        <p>
          I&apos;m Bojan Tomic, a full-stack engineer based in Serbia, twenty
          years into a career that started in the field and ended up in the
          stack.
        </p>
        <p>
          I work across the whole stack because the problems I find interesting
          rarely respect the boundary. Most of what makes a product feel good
          happens in the seams between the database and the screen, and you
          can&apos;t fix a seam from one side of it.
        </p>
        <p>
          These days that means healthcare systems at{' '}
          <strong>ICANotes</strong> by day, and{' '}
          <strong>IntelligentTools.co</strong> on my own time: design, build,
          infrastructure, and the unglamorous maintenance that keeps a
          directory of AI tools accurate.
        </p>
      </header>

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Experience" />
        {experience.map((role) => (
          <ExperienceItem key={`${role.company}-${role.period}`} role={role} />
        ))}
        <p className="text-s leading-tight text-tertiary">{earlierCareer}</p>
      </section>

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Education" />
        <div>
          <h3 className="text-m font-medium text-primary">
            University of Novi Sad, Faculty of Sciences
          </h3>
          <p className="mt-xs leading-tight text-secondary">
            Bachelor of Engineering, Information Technology
          </p>
        </div>
      </section>

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Certifications" />
        <ul className="flow flow-compact">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex flex-col items-baseline gap-0 min-[801px]:flex-row min-[801px]:gap-s">
              <span className="shrink-0 font-mono text-m text-secondary tabular-nums">
                {cert.year}
              </span>
              <span className="text-m text-primary">
                {cert.name}{' '}
                <span className="text-secondary">({cert.issuer})</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Languages" />
        <p className="text-secondary">
          Serbian (native), English (full professional).
        </p>
      </section>

      <section className="col-narrow mt-l flow flow-loose">
        <SectionHeader name="Résumé" />
        <a
          href="/bojan-tomic-resume.pdf"
          className="group inline-block text-m font-medium text-primary transition-colors duration-200 ease-out hover:text-accent hover:duration-fast"
          download
        >
          Download résumé (PDF) <LinkArrow />
        </a>
      </section>
    </main>
  );
}
