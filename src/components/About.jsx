import portraitWebp from '../assets/piyush-portrait.webp';
import portraitJpg from '../assets/piyush-portrait.jpg';
import { awards } from '../data/achievements';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { services } from '../data/skills';
import { site } from '../data/site';
import { Container, Reveal, SectionHeader } from './ui';

const current = experience.find((e) => e.current);

// Facts only — each one is derived from data shown elsewhere on the page.
const facts = [
  { k: 'Role', v: `${current.role}, ${current.company}` },
  { k: 'Focus', v: 'MERN stack · business applications' },
  { k: 'Shipped', v: `${projects.length} featured projects, all live on the web` },
  { k: 'Recognition', v: `${awards.length} company awards from SIMTRAK` },
];

const About = () => (
  <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
    <Container>
      <SectionHeader
        id="about-title"
        index="01"
        label="About"
        title="Practical software for the way people actually work."
      />

      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-4">
          <figure className="relative mx-auto max-w-xs md:max-w-none">
            <picture>
              <source srcSet={portraitWebp} type="image/webp" />
              <img
                src={portraitJpg}
                alt={`Portrait of ${site.name}`}
                width="720"
                height="860"
                loading="lazy"
                decoding="async"
                className="aspect-[36/43] w-full rounded-2xl border border-line object-cover grayscale-[35%] transition duration-500 hover:grayscale-0"
              />
            </picture>
            <figcaption className="mt-4 flex items-center justify-between font-mono text-xs text-mute">
              <span>{site.name}</span>
              <span>{site.location}</span>
            </figcaption>
          </figure>
        </Reveal>

        <div className="md:col-span-8 md:pl-6">
          <Reveal className="space-y-6 text-lg leading-relaxed text-dim">
            <p className="text-xl leading-relaxed text-fg sm:text-2xl sm:leading-snug">
              I’m a full-stack developer focused on building practical, user-centric digital products and business
              applications.
            </p>
            <p>
              Most of my work is on the MERN stack — React on the front end, Node.js and Express behind REST APIs, and
              MongoDB schemas designed around how the data is actually used. I care about the unglamorous parts that
              make software dependable: authentication and role-based access, stock that stays in step with every sale, and
              clean cloud deployments.
            </p>
            <p>
              At Adore Simtrak I’m a web developer and team manager: I build features end to end, and I assign tasks,
              review code and make sure the team delivers on time. Lately I’ve been exploring AI integration and
              AI-assisted development — using AI APIs and automation where they genuinely save people time.
            </p>
            <p>
              I’m studying Computer Science at Medicaps University (2024–2028) and I’m open to internships, freelance
              projects and full-stack roles.
            </p>
          </Reveal>

          <Reveal as="dl" className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2">
            {facts.map(({ k, v }, i) => (
              <div key={k} className={`border-b border-line py-5 ${i % 2 === 0 ? 'sm:border-r sm:pr-6' : 'sm:pl-6'}`}>
                <dt className="eyebrow mb-1.5">{k}</dt>
                <dd className="text-fg">{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      <div id="services" className="mt-24 grid gap-6 md:grid-cols-12">
        <Reveal as="h3" className="text-xl font-medium tracking-tight text-fg md:col-span-3">
          What I build
        </Reveal>
        <ol className="md:col-span-9">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              className="group grid gap-2 border-t border-line py-6 last:border-b sm:grid-cols-12 sm:gap-6"
            >
              <span className="font-mono text-xs text-mute transition-colors group-hover:text-accent sm:col-span-1 sm:pt-1.5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-lg font-medium tracking-tight text-fg transition-transform duration-300 ease-out-soft group-hover:translate-x-1 sm:col-span-5">
                {s.title}
              </p>
              <p className="leading-relaxed text-dim sm:col-span-6">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Container>
  </section>
);

export default About;
