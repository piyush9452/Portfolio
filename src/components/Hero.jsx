import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { site } from '../data/site';
import { experience } from '../data/experience';
import { hasFinePointer, prefersReducedMotion, useMagnetic } from '../hooks/useMotion';
import { Container, GithubIcon, LinkedinIcon, StatusPill } from './ui';
import { buttonStyles } from '../lib/styles';

const socials = [
  { label: 'GitHub', href: site.links.github, icon: <GithubIcon />, external: true },
  { label: 'LinkedIn', href: site.links.linkedin, icon: <LinkedinIcon />, external: true },
  { label: 'Email', href: `mailto:${site.email}`, icon: <Mail size={18} aria-hidden="true" /> },
];

const Hero = () => {
  const glow = useRef(null);
  const primary = useMagnetic(0.2);
  const current = experience.find((e) => e.current);

  // Soft accent light that trails the cursor (desktop only).
  useEffect(() => {
    const el = glow.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return;
    let frame = 0;
    const onMove = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--gx', `${e.clientX - r.left}px`);
        el.style.setProperty('--gy', `${e.clientY - r.top}px`);
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const step = (i) => ({ animationDelay: `${120 + i * 90}ms` });

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div ref={glow} aria-hidden="true" className="hero-glow absolute inset-0 -z-10" />

      <Container className="flex min-h-svh flex-col justify-center pb-16 pt-28 sm:pt-32">
        <div className="rise mb-8" style={step(0)}>
          <StatusPill />
        </div>

        <h1 id="hero-title" className="rise" style={step(1)}>
          <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xl font-medium tracking-tight text-fg sm:text-2xl">
            {site.name}
            <span className="text-dim">— {site.role}</span>
          </span>
          <span className="mt-6 block max-w-5xl text-[2.5rem] font-medium leading-[1.03] tracking-[-0.045em] text-fg sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Web apps and business software{' '}
            <span className="text-dim">
              built for <span className="text-fg">real-world use.</span>
            </span>
          </span>
        </h1>

        <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-dim sm:text-xl" style={step(2)}>
          I build modern web applications, business software and digital experiences with the MERN stack — focused on
          usability, performance and real-world impact.
        </p>

        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center" style={step(3)}>
          <a ref={primary} href="#projects" className={`${buttonStyles.primary} px-6`}>
            View my work
            <ArrowDown size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className={`${buttonStyles.secondary} px-6`}>
            View resume
            <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a href="#contact" className={`${buttonStyles.ghost} px-4`}>
            Let’s connect
          </a>
          <ul className="flex items-center gap-1 sm:ml-3" aria-label="Elsewhere">
            {socials.map(({ label, href, icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  data-tip={label}
                  aria-label={label}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-dim transition-colors hover:bg-white/5 hover:text-fg"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <dl
          className="rise mt-16 grid gap-6 border-t border-line pt-6 text-sm sm:mt-24 sm:grid-cols-3"
          style={step(4)}
        >
          {[
            ['Currently', `${current.role} · ${current.company}`],
            ['Studying', `B.Tech CSE · Medicaps University · 2024–28`],
            ['Based in', site.location],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="eyebrow mb-1.5">{k}</dt>
              <dd className="text-dim">{v}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};

export default Hero;
