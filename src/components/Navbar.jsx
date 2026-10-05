import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { navItems, sectionToNav, site } from '../data/site';
import { useActiveSection } from '../hooks/useMotion';
import { Monogram } from './ui';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = sectionToNav[useActiveSection(Object.keys(sectionToNav))];
  const menuButton = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/75 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-fg" aria-label={`${site.name} — back to top`}>
          <Monogram />
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        <div className="hidden items-center gap-0.5 lg:flex">
          <ul className="flex items-center">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative rounded-full px-3 py-2 text-sm transition-colors ${
                      isActive ? 'text-fg' : 'text-dim hover:text-fg'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-3 inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-white/[0.04] px-4 py-2 text-sm text-fg transition-colors hover:border-white/30 hover:bg-white/[0.08]"
          >
            Resume
            <span className="sr-only">(opens in a new tab)</span>
            <ArrowUpRight
              size={14}
              aria-hidden="true"
              className="text-dim transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
            />
          </a>
        </div>

        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-fg lg:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-ink px-5 pb-10 pt-6 lg:hidden"
      >
        <ul className="flex flex-col">
          {navItems.map((item, i) => (
            <li key={item.id} className="rise border-b border-line" style={{ animationDelay: `${i * 50}ms` }}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-5 text-3xl font-medium tracking-tight text-fg"
              >
                {item.label}
                <span className="font-mono text-xs text-mute">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={site.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="rise mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full bg-fg text-sm font-medium text-ink"
          style={{ animationDelay: '220ms' }}
        >
          View resume <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <div className="rise mt-8 flex gap-6 text-sm text-dim" style={{ animationDelay: '260ms' }}>
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
