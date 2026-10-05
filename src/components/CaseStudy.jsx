import { useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { projects } from '../data/projects';
import { BrowserShot, ExternalLink, GithubIcon, Tag } from './ui';

function Block({ label, title, children }) {
  return (
    <section className="grid gap-4 border-t border-line py-12 md:grid-cols-12 md:gap-10 md:py-16">
      <h2 className="eyebrow md:col-span-3 md:pt-1.5">{label}</h2>
      <div className="md:col-span-9">
        {title && <h3 className="mb-5 text-2xl font-medium tracking-tight text-fg">{title}</h3>}
        {children}
      </div>
    </section>
  );
}

function Pairs({ items }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
      {items.map(([k, v]) => (
        <div key={k} className="bg-ink p-5 sm:p-6">
          <dt className="font-medium text-fg">{k}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-dim">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Architecture({ columns, outputs }) {
  return (
    <figure>
      <ol className="flex flex-col items-stretch gap-3 lg:flex-row">
        {columns.map((col, i) => (
          <li key={col.label} className="flex flex-col items-stretch gap-3 lg:flex-1 lg:flex-row">
            <div className="flex-1 rounded-2xl border border-line bg-surface p-4">
              <p className="eyebrow mb-3">{col.label}</p>
              <ul className="space-y-2">
                {col.nodes.map((n) => (
                  <li key={n.title} className="rounded-lg border border-line bg-white/[0.02] px-3 py-2.5">
                    <p className="text-sm font-medium text-fg">{n.title}</p>
                    <p className="mt-0.5 font-mono text-[0.7rem] leading-relaxed text-mute">{n.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            {i < columns.length - 1 && (
              <span aria-hidden="true" className="self-center font-mono text-accent">
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
      {outputs && (
        <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs text-mute">
          <span>Delivers →</span>
          {outputs.map((o) => (
            <Tag key={o}>{o}</Tag>
          ))}
        </div>
      )}
      <figcaption className="sr-only">
        System architecture: {columns.map((c) => `${c.label} (${c.nodes.map((n) => n.title).join(', ')})`).join(' then ')}
      </figcaption>
    </figure>
  );
}

export default function CaseStudy({ slug, onClose }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const dialog = useRef(null);
  const closeBtn = useRef(null);

  // Scroll lock, initial focus, Escape to close, focus trap, focus restore.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeBtn.current?.focus({ preventScroll: true });

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key !== 'Tab' || !dialog.current) return;
      const focusables = dialog.current.querySelectorAll('a[href], button:not([disabled])');
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [onClose]);

  // Moving between case studies starts at the top.
  useEffect(() => {
    dialog.current?.scrollTo({ top: 0 });
    document.title = project ? `${project.name} — Case Study · Piyush Kumar` : document.title;
  }, [project]);

  if (!project) return null;
  const { name, tagline, category, summary, role, stack, links, image } = project;

  return (
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-title"
      className="fixed inset-0 z-[70] overflow-y-auto overscroll-contain bg-ink"
    >
      <div className="sticky top-0 z-10 border-b border-line bg-ink/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <button
            ref={closeBtn}
            type="button"
            onClick={onClose}
            className="group -ml-3 inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm text-dim transition-colors hover:text-fg"
          >
            <ArrowLeft size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            All projects
          </button>
          <p className="hidden font-mono text-xs text-mute sm:block">
            Case study {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-dim transition-colors hover:bg-white/5 hover:text-fg"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <article className="overlay-in mx-auto max-w-6xl px-5 pb-24 sm:px-8" key={project.slug}>
        <header className="pb-12 pt-14 sm:pt-20">
          <p className="eyebrow">{category}</p>
          <h1 id="case-title" className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-fg sm:text-6xl">
            {name}
          </h1>
          <p className="mt-4 max-w-3xl text-xl text-dim sm:text-2xl">{tagline}</p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-dim">{summary}</p>

          <dl className="mt-12 grid gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <dt className="eyebrow mb-2">Role</dt>
              <dd className="text-fg">{role}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Stack</dt>
              <dd className="text-sm leading-relaxed text-dim">{stack.join(' · ')}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Links</dt>
              <dd className="flex flex-wrap gap-2">
                {links.live && (
                  <ExternalLink href={links.live} variant="primary" className="min-h-10 px-4">
                    Live Demo
                  </ExternalLink>
                )}
                {links.github && (
                  <ExternalLink href={links.github} className="min-h-10 px-4">
                    <GithubIcon size={15} /> GitHub
                  </ExternalLink>
                )}
              </dd>
            </div>
          </dl>
        </header>

        <div className="relative mb-4 overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white/[0.04] to-transparent p-4 sm:p-10 lg:px-20 lg:pt-14 lg:pb-0">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_20%,rgb(124_156_255/0.12),transparent)]" />
          <BrowserShot image={image} sizes="(min-width: 1152px) 960px, 92vw" eager className="relative" />
        </div>

        {project.overview && (
          <Block label="Overview">
            <p className="max-w-3xl text-xl leading-relaxed text-fg">{project.overview}</p>
          </Block>
        )}

        {project.problem && (
          <Block label="Problem">
            <p className="max-w-3xl text-lg leading-relaxed text-dim">{project.problem}</p>
          </Block>
        )}

        {project.solution && (
          <Block label="Solution">
            <p className="max-w-3xl text-lg leading-relaxed text-dim">{project.solution}</p>
          </Block>
        )}

        {project.features && (
          <Block label="Key features">
            <Pairs items={project.features} />
          </Block>
        )}

        {project.decisions && (
          <Block label="Design & UX decisions">
            <ol className="max-w-3xl space-y-4">
              {project.decisions.map((d, i) => (
                <li key={d} className="flex gap-4 leading-relaxed text-dim">
                  <span className="pt-0.5 font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </Block>
        )}

        {project.architecture && (
          <Block label="Architecture">
            <Architecture {...project.architecture} />
          </Block>
        )}

        {project.engineering && (
          <Block label="Engineering & security">
            <Pairs items={project.engineering} />
          </Block>
        )}

        <Block label="Technology">
          <ul className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <li key={s}>
                <Tag>{s}</Tag>
              </li>
            ))}
          </ul>
        </Block>

        <a
          href={`#/work/${next.slug}`}
          onClick={(e) => {
            // Replace rather than push, so Back still returns to the page.
            e.preventDefault();
            window.location.replace(`#/work/${next.slug}`);
          }}
          className="group mt-8 flex flex-col gap-3 rounded-3xl border border-line p-8 transition-colors hover:border-line-strong hover:bg-white/[0.015] sm:flex-row sm:items-center sm:justify-between sm:p-10"
        >
          <span>
            <span className="eyebrow">Next case study</span>
            <span className="mt-3 block text-3xl font-medium tracking-tight text-fg sm:text-4xl">{next.name}</span>
            <span className="mt-1 block text-dim">{next.title}</span>
          </span>
          <ArrowRight
            size={28}
            aria-hidden="true"
            className="text-dim transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-fg"
          />
        </a>
      </article>
    </div>
  );
}
