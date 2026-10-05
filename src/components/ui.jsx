import { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { useReveal } from '../hooks/useMotion';
import { site } from '../data/site';
import { buttonStyles } from '../lib/styles';

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useReveal();
  const Element = as;
  return (
    <Element ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Element>
  );
}

/** Numbered section heading: "02 — Experience" + large title + optional lede. */
export function SectionHeader({ index, label, title, lede, id }) {
  return (
    <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
      <p className="eyebrow md:col-span-3 md:pt-3">
        <span className="text-accent">{index}</span> — {label}
      </p>
      <div className="md:col-span-9">
        <h2 id={id} className="text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {lede && <p className="mt-5 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">{lede}</p>}
      </div>
    </Reveal>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-dim">
      {children}
    </span>
  );
}


/** External link that opens in a new tab with an animated arrow. */
export function ExternalLink({ href, children, variant = 'secondary', className = '', ...rest }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${buttonStyles[variant]} ${className}`} {...rest}>
      {children}
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Email address that copies itself to the clipboard, falling back to mailto. */
export function CopyEmail({ className = '' }) {
  const [copied, setCopied] = useState(false);
  const copy = async (e) => {
    if (!navigator.clipboard) return; // let the mailto: href handle it
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };
  return (
    <a
      href={`mailto:${site.email}`}
      onClick={copy}
      className={`group inline-flex min-h-11 items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-fg ${className}`}
    >
      <span className="link-underline">{site.email}</span>
      {copied ? (
        <Check size={14} className="text-live" aria-hidden="true" />
      ) : (
        <Copy size={14} className="opacity-60 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : 'Copy email address'}
      </span>
    </a>
  );
}

export function StatusPill({ className = '' }) {
  if (!site.available) return null;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-xs text-dim ${className}`}
    >
      <span className="status-dot relative inline-block h-1.5 w-1.5 rounded-full bg-live text-live" aria-hidden="true" />
      Open to opportunities
    </span>
  );
}

/** PK monogram: two strokes and a bracket, the site's mark. */
export function Monogram({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <rect x="0.5" y="0.5" width="31" height="31" rx="8" stroke="currentColor" strokeOpacity="0.2" />
      <path d="M9 23V9h5.2a4 4 0 0 1 0 8H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 9v14M19 16l5-7M20.8 14.2 24 23" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Brand marks (lucide's brand icons are deprecated).
export function GithubIcon({ size = 18, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.9 10.9 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, ...rest }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

/** Screenshot in a minimal browser frame. */
export function BrowserShot({ image, sizes, eager = false, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-raised shadow-[0_30px_80px_-30px_rgb(0_0_0/0.9)] ${className}`}>
      <div aria-hidden="true" className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
        <span className="h-2 w-2 rounded-full bg-white/10" />
      </div>
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={image.alt}
        width="1600"
        height="1000"
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}
