# Piyush Kumar — Portfolio

Personal portfolio of Piyush Kumar, Full-Stack Developer (MERN · Business Software · Web).
Built with React 19, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Editing content

All content lives in `src/data/` — components only render it.

| File | What it holds |
| --- | --- |
| `site.js` | Name, contact details, social links, résumé link, nav |
| `projects.js` | Featured case studies (`projects`) and smaller builds (`builds`) |
| `experience.js` | Roles and education |
| `skills.js` | Skill groups and the "What I build" list |
| `achievements.js` | Awards and certifications (images in `src/assets/achievements/`) |

- **Case studies** open at `#/work/<slug>`; sections only render when the field has content.
- **Résumé:** every Resume button uses `site.resume` (currently the Google Drive link).
- **Contact form:** set `VITE_CONTACT_ENDPOINT` (e.g. a Formspree URL) to send messages in-page.
  Without it, the form opens the visitor's email app with the message filled in.
- **Images:** project screenshots live in `src/assets/work/` and certificates in `src/assets/achievements/`,
  as WebP at two sizes (thumbnail + full). The large originals in `src/assets/` are not bundled.

## Structure

- `src/components/` — page sections, `CaseStudy` (lazy-loaded), `Achievements` (with certificate viewer), `ui.jsx` primitives
- `src/hooks/useMotion.js` — reveal-on-scroll, active section, magnetic buttons (all respect reduced motion)
- `src/index.css` — design tokens (`@theme`) and global styles
- `public/` — favicon, Open Graph image, `robots.txt`, `sitemap.xml`

If the site moves to a custom domain, update the URL in `index.html`, `public/robots.txt`,
`public/sitemap.xml` and `src/data/site.js`.
