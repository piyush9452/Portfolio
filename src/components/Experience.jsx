import { education, experience } from '../data/experience';
import { Award } from 'lucide-react';
import { Container, Reveal, SectionHeader, Tag } from './ui';

const Experience = () => (
  <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 sm:py-32">
    <Container>
      <SectionHeader
        id="experience-title"
        index="03"
        label="Experience"
        title="Experience"
        lede="Building and leading at the same time — writing the code and keeping the team on track."
      />

      <ol className="relative md:ml-[25%]">
        <span aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-gradient-to-b from-line-strong via-line to-transparent" />

        {experience.map((job) => (
          <Reveal as="li" key={job.company} className="relative pb-16 pl-10">
            <span
              aria-hidden="true"
              className="absolute left-0 top-2 flex h-[11px] w-[11px] items-center justify-center rounded-full border border-accent/60 bg-ink"
            >
              <span className="h-[5px] w-[5px] rounded-full bg-accent" />
            </span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-xl font-medium tracking-tight text-fg sm:text-2xl">{job.role}</h3>
              <p className="shrink-0 font-mono text-xs text-mute">
                <time>{job.period}</time>
              </p>
            </div>
            <p className="mt-1.5 text-dim">
              {job.company} <span className="text-mute">· {job.location}</span>
              {job.current && (
                <span className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-2 py-0.5 align-middle text-[0.7rem] text-accent">
                  Current
                </span>
              )}
            </p>

            <p className="mt-6 max-w-2xl leading-relaxed text-dim">{job.summary}</p>

            <ul className="mt-6 max-w-2xl space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 leading-relaxed text-dim">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-mute" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {job.recognition && (
              <div className="mt-6 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-sm">
                <Award size={15} aria-hidden="true" className="text-accent" />
                <span className="text-mute">Recognised with</span>
                {job.recognition.map((r, i) => (
                  <span key={r} className="text-fg">
                    {r}
                    {i < job.recognition.length - 1 && <span className="ml-3 text-mute">·</span>}
                  </span>
                ))}
                <a href="#achievements" className="link-underline py-1 text-dim hover:text-fg">
                  See awards →
                </a>
              </div>
            )}

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
              {job.tags.map((t) => (
                <li key={t}>
                  <Tag>{t}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal as="li" className="relative pl-10">
          <span aria-hidden="true" className="absolute left-[2px] top-2 h-[7px] w-[7px] rounded-full border border-line-strong bg-ink" />
          <p className="eyebrow mb-2">Education</p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-lg font-medium tracking-tight text-fg">{education.degree}</h3>
            <p className="shrink-0 font-mono text-xs text-mute">
              <time>{education.period}</time>
            </p>
          </div>
          <p className="mt-1.5 text-dim">{education.school}</p>
        </Reveal>
      </ol>
    </Container>
  </section>
);

export default Experience;
