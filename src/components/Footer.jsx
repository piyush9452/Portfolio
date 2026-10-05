import { ArrowUp } from 'lucide-react';
import { site } from '../data/site';
import { Container, Monogram } from './ui';

const Footer = () => (
  <footer className="border-t border-line py-12">
    <Container>
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-3 text-fg">
            <Monogram className="h-8 w-8" />
            <p className="font-medium tracking-tight">{site.name}</p>
          </div>
          <p className="mt-3 text-sm text-dim">
            {site.role} · {site.tagline}
          </p>
        </div>

        <nav aria-label="Social" className="-my-2 flex flex-wrap gap-x-6 text-sm">
          <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="link-underline py-2.5 text-dim hover:text-fg">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline py-2.5 text-dim hover:text-fg">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="link-underline py-2.5 text-dim hover:text-fg">
            Email
          </a>
          <a href="#top" className="inline-flex items-center gap-1 py-2.5 text-dim hover:text-fg">
            Back to top <ArrowUp size={14} aria-hidden="true" />
          </a>
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-mute sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Designed & built by {site.name}</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
