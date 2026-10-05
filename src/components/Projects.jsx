import { ArrowRight } from 'lucide-react';
import { builds, projects } from '../data/projects';
import { site } from '../data/site';
import { trackPointer } from '../hooks/useMotion';
import { BrowserShot, Container, ExternalLink, GithubIcon, Reveal, SectionHeader, Tag } from './ui';

const pad = (n) => String(n).padStart(2, '0');

function ProjectLinks({ links, name, size = 'md' }) {
  const sizing = size === 'sm' ? 'min-h-10 px-4' : 'px-5';
  return (
    <div className="relative z-10 flex flex-wrap gap-2">
      {links.live && (
        <ExternalLink href={links.live} variant="primary" className={sizing} aria-label={`${name} live demo (opens in a new tab)`}>
          Live Demo
        </ExternalLink>
      )}
      {links.github && (
        <ExternalLink href={links.github} className={sizing} aria-label={`${name} source code on GitHub (opens in a new tab)`}>
          <GithubIcon size={15} /> GitHub
        </ExternalLink>
      )}
    </div>
  );
}

function FeaturedProject({ project, index }) {
  const { slug, category, name, tagline, summary, stack, image, links } = project;
  const flip = index % 2 === 1;
  return (
    <Reveal
      as="article"
      onPointerMove={trackPointer}
      className="sheen group relative grid overflow-hidden rounded-3xl border border-line bg-surface transition-[border-color,transform] duration-300 ease-out-soft hover:-translate-y-1 hover:border-line-strong lg:grid-cols-12"
    >
      <a
        href={`#/work/${slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className={`relative flex items-center overflow-hidden border-b border-line bg-gradient-to-br from-white/[0.05] to-transparent p-5 sm:p-8 lg:col-span-7 lg:border-b-0 lg:p-10 ${
          flip ? 'lg:order-2 lg:border-l' : 'lg:border-r'
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_15%,rgb(124_156_255/0.12),transparent)] opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
        <BrowserShot
          image={image}
          sizes="(min-width: 1024px) 560px, 92vw"
          className="relative w-full transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]"
        />
      </a>

      <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:justify-center lg:p-10">
        <p className="eyebrow">
          <span className="text-accent">{pad(index + 1)}</span> / {category}
        </p>
        <h3 className="mt-5 text-2xl font-medium tracking-[-0.025em] text-fg sm:text-3xl">{name}</h3>
        <p className="mt-3 text-lg leading-snug text-fg/90">{tagline}</p>
        <p className="mt-4 leading-relaxed text-dim">{summary}</p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {stack.slice(0, 6).map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-6">
          <ProjectLinks links={links} name={name} />
          <a
            href={`#/work/${slug}`}
            className="inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm text-dim transition-colors hover:text-fg"
          >
            Read case study
            <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
            <span className="sr-only">: {name}</span>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function BuildCard({ build, index }) {
  const { name, category, description, stack, image, links } = build;
  return (
    <Reveal
      as="article"
      delay={index * 80}
      onPointerMove={trackPointer}
      className="sheen group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,transform] duration-300 ease-out-soft hover:-translate-y-1 hover:border-line-strong"
    >
      <div className="overflow-hidden border-b border-line bg-gradient-to-br from-white/[0.04] to-transparent p-4 sm:p-6">
        <BrowserShot
          image={image}
          sizes="(min-width: 768px) 440px, 92vw"
          className="transition-transform duration-500 ease-out-soft group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">
          <span className="text-accent">{pad(index + 1)}</span> / {category}
        </p>
        <h4 className="mt-4 text-xl font-medium tracking-tight text-fg">{name}</h4>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">{description}</p>
        <p className="mt-5 font-mono text-xs leading-relaxed text-mute">{stack.join(' · ')}</p>
        <div className="mt-6">
          <ProjectLinks links={links} name={name} size="sm" />
        </div>
      </div>
    </Reveal>
  );
}

const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="border-t border-line py-24 sm:py-32">
    <Container>
      <SectionHeader
        id="projects-title"
        index="04"
        label="Projects"
        title="Featured Work"
        lede="Products I’ve designed, built and deployed — from AI-assisted hiring and counter billing to organisation-wide records and franchise operations."
      />

      <div className="space-y-6 lg:space-y-8">
        {projects.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} index={i} />
        ))}
      </div>

      <div className="mt-24">
        <Reveal className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-fg">More builds</h3>
            <p className="mt-2 text-dim">Websites for organisations and communities.</p>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {builds.map((b, i) => (
            <BuildCard key={b.name} build={b} index={i} />
          ))}
        </div>

        <Reveal className="mt-6 flex flex-col gap-4 rounded-2xl border border-dashed border-line-strong px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="flex items-center gap-3 text-dim">
            <span className="status-dot relative inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent text-accent" aria-hidden="true" />
            More projects coming soon — currently working on new builds.
          </p>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline shrink-0 py-2 text-sm text-dim hover:text-fg"
          >
            Follow along on GitHub ↗<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </Container>
  </section>
);

export default Projects;
