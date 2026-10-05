import { useId, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { site } from '../data/site';
import { useMagnetic } from '../hooks/useMotion';
import { Container, CopyEmail, ExternalLink, GithubIcon, LinkedinIcon, Reveal, StatusPill } from './ui';
import { buttonStyles } from '../lib/styles';

const fieldClass =
  'mt-2 w-full rounded-xl border border-line bg-white/[0.02] px-4 py-3 text-fg placeholder:text-mute transition-colors hover:border-line-strong focus:border-accent/60 focus:outline-none focus-visible:outline-none focus:ring-2 focus:ring-accent/20';

function ContactForm() {
  const id = useId();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    if (!site.contactEndpoint) {
      const body = `${data.message}\n\n— ${data.name} (${data.email})`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${data.name}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus('sent');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(site.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const messages = {
    sent: site.contactEndpoint
      ? 'Thanks — your message is on its way. I’ll reply soon.'
      : 'Your email app should open with the message ready to send.',
    error: `Something went wrong. Please email me directly at ${site.email}.`,
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" aria-describedby={`${id}-status`}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-dim">
          Name
          <input name="name" required autoComplete="name" className={fieldClass} placeholder="Your name" />
        </label>
        <label className="block text-sm text-dim">
          Email
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </label>
      </div>
      <label className="block text-sm text-dim">
        Message
        <textarea
          name="message"
          required
          rows={5}
          className={`${fieldClass} resize-y`}
          placeholder="A few lines about the project, role or idea…"
        />
      </label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'sending'} className={`${buttonStyles.primary} px-6 disabled:opacity-60`}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
        <p id={`${id}-status`} role="status" className={`text-sm ${status === 'error' ? 'text-red-300' : 'text-dim'}`}>
          {messages[status] || ''}
        </p>
      </div>
    </form>
  );
}

const Contact = () => {
  const emailBtn = useMagnetic(0.2);
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden border-t border-line py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[60%] bg-[radial-gradient(50%_80%_at_50%_100%,rgb(124_156_255/0.10),transparent)]"
      />
      <Container>
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">06</span> — Contact
          </p>
          <h2
            id="contact-title"
            className="mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] tracking-[-0.045em] text-fg sm:text-6xl md:text-7xl"
          >
            Let’s build something <span className="text-dim">useful.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
            Have an idea, project, internship opportunity or collaboration in mind? Let’s talk.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a ref={emailBtn} href={`mailto:${site.email}`} className={`${buttonStyles.primary} px-5`}>
                Email me
                <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <ExternalLink href={site.links.linkedin} className="px-4">
                <LinkedinIcon size={16} /> LinkedIn
              </ExternalLink>
              <ExternalLink href={site.links.github} className="px-4">
                <GithubIcon size={16} /> GitHub
              </ExternalLink>
            </div>

            <dl className="mt-10 space-y-5 border-t border-line pt-8">
              <div>
                <dt className="eyebrow mb-1">Email · click to copy</dt>
                <dd>
                  <CopyEmail />
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">WhatsApp</dt>
                <dd>
                  <a
                    href={site.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 font-mono text-sm text-dim transition-colors hover:text-fg"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    <span className="link-underline">{site.phone}</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow mb-1">Status</dt>
                <dd className="pt-1">
                  <StatusPill />
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80} className="rounded-2xl border border-line bg-surface p-6 sm:p-8 lg:col-span-7">
            <h3 className="mb-6 text-lg font-medium tracking-tight text-fg">Or send a quick note</h3>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
