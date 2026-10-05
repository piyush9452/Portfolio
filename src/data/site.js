// Single source of truth for identity, links and contact details.

export const site = {
  name: 'Piyush Kumar',
  initials: 'PK',
  role: 'Full-Stack Developer',
  tagline: 'MERN · Business Software · Web',
  location: 'Indore, India',
  email: 'talktech64@gmail.com',
  phone: '+91 8604900685',
  available: true,
  url: 'https://portfolio-ashen-one-67.vercel.app',
  resume: 'https://drive.google.com/file/d/1ioMiIhogq0kv0aqsB32SSxLOxBKXISCP/view?usp=sharing',
  links: {
    github: 'https://github.com/piyush9452',
    linkedin: 'https://www.linkedin.com/in/piyush-kumar01/',
    whatsapp: 'https://api.whatsapp.com/send/?phone=918604900685&text=Hello&type=phone_number&app_absent=0',
  },
  // Optional: set VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) to send the
  // contact form in-page. Without it the form opens the visitor's mail app.
  contactEndpoint: import.meta.env.VITE_CONTACT_ENDPOINT || '',
};

export const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

// Sections that light up a nav item while in view.
export const sectionToNav = {
  top: 'top',
  about: 'about',
  services: 'about',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  achievements: 'achievements',
  contact: 'contact',
};
