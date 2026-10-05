import { stack } from '../data/skills';
import { trackPointer } from '../hooks/useMotion';
import { Container, Reveal, SectionHeader } from './ui';

const pad = (n) => String(n).padStart(2, '0');

const Skills = () => (
  <section id="skills" aria-labelledby="skills-title" className="border-t border-line py-24 sm:py-32">
    <Container>
      <SectionHeader
        id="skills-title"
        index="02"
        label="Skills"
        title="Tools I build with."
        lede="Grouped by what each layer is for — the stack behind the projects below."
      />
      <ol className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group, i) => (
          <Reveal
            as="li"
            key={group.title}
            delay={(i % 3) * 60}
            onPointerMove={trackPointer}
            className="sheen group border-b border-r border-line p-6 sm:p-8"
          >
            <p className="font-mono text-xs text-mute transition-colors group-hover:text-accent">{pad(i + 1)}</p>
            <h3 className="mt-6 text-sm font-medium uppercase tracking-[0.14em] text-fg">{group.title}</h3>
            <p className="mt-2 text-sm text-mute">{group.note}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3 py-1 text-sm text-dim transition-colors group-hover:border-line-strong group-hover:text-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Container>
  </section>
);

export default Skills;
