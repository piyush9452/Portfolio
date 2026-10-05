import { useEffect, useRef, useState } from 'react';
import { Award, Maximize2, X } from 'lucide-react';
import { awards, certifications } from '../data/achievements';
import { Container, Reveal, SectionHeader } from './ui';

/** Full-size certificate viewer built on the native <dialog> element. */
function useLightbox() {
  const dialog = useRef(null);
  const [item, setItem] = useState(null);
  const close = () => dialog.current?.close();

  // Open once the selected certificate has rendered, so focus lands inside it.
  useEffect(() => {
    if (item && !dialog.current?.open) dialog.current?.showModal();
  }, [item]);

  const viewer = (
    <dialog
      ref={dialog}
      aria-label={item ? `${item.title} — ${item.issuer}` : 'Certificate'}
      onClick={(e) => e.target === e.currentTarget && close()}
      onClose={() => setItem(null)}
      className="m-auto max-h-[92dvh] w-[min(1100px,94vw)] overflow-visible bg-transparent p-0 text-fg backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      {item && (
        <figure className="overlay-in">
          <img
            src={item.image.full}
            alt={item.image.alt}
            className="max-h-[78dvh] w-full rounded-xl border border-line object-contain"
          />
          <figcaption className="mt-4 flex items-start justify-between gap-4">
            <span>
              <span className="block font-medium">{item.title}</span>
              <span className="mt-1 block text-sm text-dim">
                {item.issuer} · {item.date}
              </span>
            </span>
            <button
              type="button"
              onClick={close}
              autoFocus
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-dim transition-colors hover:text-fg"
            >
              <X size={18} aria-hidden="true" />
              <span className="sr-only">Close</span>
            </button>
          </figcaption>
        </figure>
      )}
    </dialog>
  );
  return { open: setItem, viewer };
}

function Thumb({ item, onOpen, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className={`group/thumb relative block w-full overflow-hidden bg-raised ${className}`}
    >
      <img
        src={item.image.thumb}
        alt={item.image.alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 ease-out-soft group-hover/thumb:scale-[1.03]"
      />
      <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-2.5 py-1 text-xs text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover/thumb:opacity-100 group-focus-visible/thumb:opacity-100">
        <Maximize2 size={12} aria-hidden="true" /> View
      </span>
      <span className="sr-only">View full certificate: {item.title}</span>
    </button>
  );
}

const Achievements = () => {
  const { open, viewer } = useLightbox();

  return (
    <section id="achievements" aria-labelledby="achievements-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeader
          id="achievements-title"
          index="05"
          label="Achievements"
          title="Achievements & Certifications"
          lede="Recognition that reflects my work, consistency and contribution."
        />

        <h3 className="eyebrow mb-5 flex items-center gap-2">
          <Award size={14} aria-hidden="true" className="text-accent" /> Awards
        </h3>
        <ul className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {awards.map((a, i) => (
            <Reveal
              as="li"
              key={a.title}
              delay={i * 80}
              className="overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
            >
              <Thumb item={a} onOpen={open} className="aspect-[16/10] border-b border-line" />
              <div className="p-6">
                <p className="font-mono text-xs text-mute">
                  {a.issuer} · {a.date}
                </p>
                <p className="mt-2 text-lg font-medium tracking-tight text-fg">{a.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-dim">{a.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <h3 className="eyebrow mb-5 mt-16">Certifications & Hackathons</h3>
        <ul className="grid gap-4 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal
              as="li"
              key={c.title}
              delay={(i % 2) * 80}
              className="grid grid-cols-[7.5rem_1fr] items-center gap-4 rounded-2xl border border-line bg-surface p-3 transition-colors duration-300 hover:border-line-strong sm:grid-cols-[10rem_1fr] sm:gap-5"
            >
              <Thumb item={c} onOpen={open} className="aspect-[1.414] rounded-lg border border-line" />
              <div className="min-w-0 py-1 pr-2">
                <p className="font-medium leading-snug text-fg">{c.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-mute">
                  {c.issuer} · {c.date}
                </p>
                <p className="mt-2 hidden text-sm leading-relaxed text-dim sm:block">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
      {viewer}
    </section>
  );
};

export default Achievements;
