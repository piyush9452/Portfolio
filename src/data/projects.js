// Project content, verified against each project's source code and live
// deployment. Case-study sections render only when they have content, so leave
// a field out rather than padding it.

import job1800 from '../assets/work/job1-portal-800.webp';
import job11600 from '../assets/work/job1-portal-1600.webp';
import billing800 from '../assets/work/billing-800.webp';
import billing1600 from '../assets/work/billing-1600.webp';
import franchisee800 from '../assets/work/franchisee-management-800.webp';
import franchisee1600 from '../assets/work/franchisee-management-1600.webp';
import database800 from '../assets/work/database-management-800.webp';
import database1600 from '../assets/work/database-management-1600.webp';
import adore800 from '../assets/work/adore-800.webp';
import adore1600 from '../assets/work/adore-1600.webp';
import stic800 from '../assets/work/stic-club-800.webp';
import stic1600 from '../assets/work/stic-club-1600.webp';

const shot = (small, large, alt) => ({
  src: large,
  srcSet: `${small} 800w, ${large} 1600w`,
  alt,
});

export const projects = [
  {
    slug: 'job1-portal',
    category: 'AI · Recruitment Platform',
    name: 'Job1 Portal',
    tagline: 'A role-based job platform and applicant tracker, with AI that removes the busywork from hiring.',
    summary:
      'A full-stack hiring platform for job seekers, employers and admins — JWT and Google sign-in, job posting and search, application tracking, and Google Gemini–powered resume parsing, job matching and a job-search assistant.',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Google Gemini', 'Vercel AI SDK', 'AWS S3', 'Tailwind CSS'],
    image: shot(job1800, job11600, 'Job1 Portal home page with job search and a jobseeker / employer sign-up form'),
    links: {
      live: 'https://job1-pi.vercel.app/',
      github: 'https://github.com/piyush9452/Job1',
    },
    overview:
      'Job1 Portal connects job seekers with employers and gives recruiters a full applicant tracking system. Candidates, employers and admins each get their own dashboard, and AI handles the most repetitive parts of hiring.',
    problem:
      'Hiring is full of repetitive data entry — candidates retype their resume into every profile, recruiters write job descriptions from scratch and track applicants by hand — and each type of user needs a different, secure workflow.',
    solution:
      'A React + Express platform with role-separated portals, Gemini-powered resume parsing, job recommendations and job-description generation, a chat assistant that can look up open jobs, and secure document storage on AWS S3.',
    features: [
      ['Role-based platform', 'Separate experiences for job seekers, employers and admins, secured with JWT.'],
      ['Resume parsing', 'Upload a PDF or DOCX resume and skills, experience, education and projects fill the profile automatically.'],
      ['Job recommendations', 'Matching roles with a match score and the reasoning behind it.'],
      ['AI job descriptions', 'Employers enter criteria and get a description, responsibilities and screening questions.'],
      ['Job-search assistant', 'A chat widget that helps candidates find active jobs.'],
      ['Job posting & search', 'Rich-text job posts with screening questions, plus search and map-based discovery.'],
      ['Application tracking', 'Statuses from Under Review to Interviewing, Offered or Rejected, with resume downloads.'],
      ['Admin & verification', 'Employer verification documents on S3, moderation, and account controls.'],
    ],
    decisions: [
      'Three distinct experiences — candidate, employer, admin — rather than one dashboard with hidden buttons.',
      'AI fills forms instead of replacing them: a parsed resume becomes an editable profile.',
      'Low-friction sign-up with Google, with email + OTP verification as the fallback.',
    ],
    engineering: [
      ['Pre-signed uploads', 'Resumes and verification documents go through short-lived AWS S3 pre-signed URLs.'],
      ['Role-isolated auth', 'Candidate and employer routes are protected by separate JWT middleware.'],
      ['OTP lifecycle', 'Email OTPs expire after 10 minutes and are deleted once used.'],
      ['Document parsing', 'pdf-parse and mammoth turn uploaded PDF and Word resumes into text for the AI.'],
    ],
    architecture: {
      columns: [
        { label: 'Client', nodes: [{ title: 'React + Vite', detail: 'Tailwind · Framer Motion · Leaflet · AI SDK' }] },
        {
          label: 'API',
          nodes: [
            { title: 'Express REST API', detail: 'Users · Employers · Jobs · Applications · Admin · AI' },
            { title: 'Auth', detail: 'JWT per role · Google OAuth · OTP' },
          ],
        },
        {
          label: 'Services',
          nodes: [
            { title: 'MongoDB', detail: 'Mongoose models' },
            { title: 'Google Gemini', detail: 'Parsing · matching · JD · chat' },
            { title: 'AWS S3', detail: 'Pre-signed document storage' },
            { title: 'Brevo', detail: 'Transactional email & OTP' },
          ],
        },
      ],
    },
  },
  {
    slug: 'billing-software',
    category: 'Retail · Frontend',
    name: 'Billing Software',
    tagline: 'A fast counter-billing app that sends itemised invoices straight to the customer’s WhatsApp.',
    summary:
      'A lightweight billing app for retail counters: build an itemised bill with per-item discounts and service charges, send it as a formatted WhatsApp invoice, and keep stock up to date — all in the browser.',
    role: 'Frontend development',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'localStorage', 'WhatsApp'],
    image: shot(billing800, billing1600, 'Smart Billing home page with Start Billing and Stock actions'),
    links: {
      live: 'https://billing-8cw7.vercel.app/',
      github: 'https://github.com/piyush9452/billing',
    },
    overview:
      'A browser-based billing app built for quick use at a retail counter. Staff add items, apply discounts and service charges, and send the bill to the customer on WhatsApp — with stock tracked alongside.',
    problem:
      'Small outlets need billing that is quick to use, gets totals right and reaches the customer instantly — without a heavy point-of-sale system.',
    solution:
      'A dependency-free JavaScript app: live bill calculation, WhatsApp invoices with structured invoice numbers, stock management, and accounts — all persisted in the browser.',
    features: [
      ['Itemised billing', 'Add and remove items with quantity, price, per-item discount and service charge.'],
      ['Live totals', 'Subtotals, discounts and the grand total update as the bill changes.'],
      ['WhatsApp invoices', 'A formatted invoice with date, line items and total is sent to the customer’s WhatsApp.'],
      ['Invoice numbering', 'Invoice numbers built from the financial year, outlet code, month and bill number.'],
      ['Stock management', 'Add, view and remove stock items.'],
      ['Accounts', 'Registration and login, stored in the browser.'],
    ],
    decisions: [
      'The two primary actions — Start Billing and Stock — are always one click away.',
      'WhatsApp is the delivery channel because that is where customers already are.',
      'No backend or build step, so it loads fast and runs on any counter machine.',
    ],
  },
  {
    slug: 'database-management',
    category: 'Data Platform · MERN',
    name: 'Database Management Software',
    tagline: 'A central, access-controlled record system for organisations, volunteers and every interaction with them.',
    summary:
      'A business database for managing schools, colleges, NGOs and other organisations alongside volunteers — with interaction and follow-up tracking, bulk Excel import with duplicate detection, and three-tier role-based access.',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Zod', 'SheetJS', 'Tailwind CSS'],
    image: shot(database800, database1600, 'Database Management Software home page with Organisation, Admin Panel and Access Control navigation'),
    links: {
      live: 'https://databasemanagement-theta.vercel.app/',
      github: 'https://github.com/piyush9452/databasemanagement',
    },
    overview:
      'Database Management Software gives a team one place to store and work with its records: organisations of different types, their contacts, volunteers, and the history of every call, email, WhatsApp message or visit — with fine-grained control over who can see and change what.',
    problem:
      'Outreach teams usually keep contacts across scattered spreadsheets: records get duplicated, follow-ups are missed, and everyone has either full access or none.',
    solution:
      'A MERN platform with structured records, an interaction timeline and follow-up reminders, a bulk import pipeline that catches duplicates before they land, and a role and permission system down to individual modules and actions.',
    features: [
      ['Centralised records', 'Organisations (School, College, NGO, Corporate, Online, Community Centre) with multiple contacts, plus a separate volunteer database.'],
      ['Interaction history', 'Log interactions by email, phone, WhatsApp or visit, with statuses and a full timeline per record.'],
      ['Follow-up notifications', 'Upcoming follow-ups surface in a notification bell and a dedicated notifications page.'],
      ['Bulk Excel import', 'Import spreadsheets in bulk, with duplicate checks, a review step and record merging.'],
      ['Search & filters', 'Filter by state, district, status, area of interest and follow-up date, with pincode-based location lookup.'],
      ['Data completeness', 'Each record is marked Basic, Partial or Complete, so gaps are easy to find.'],
      ['Access control', 'Full admin, partial admin and data-entry roles, with per-module and per-action (view / add / edit / delete) permissions.'],
      ['Account security', 'Sign-up with profile images, password reset by email, and the ability to deactivate users.'],
    ],
    decisions: [
      'Every record answers “when did we last talk, and what’s next?” — the interaction timeline and next follow-up sit on the record itself.',
      'Duplicates are reviewed before they’re saved, not cleaned up afterwards.',
      'Permissions are granted per module and action, so data-entry staff see exactly what they need.',
    ],
    engineering: [
      ['Token rotation', 'Short-lived access tokens with refresh tokens, both in httpOnly cookies.'],
      ['Hardened API', 'Helmet security headers and rate limiting on sign-up, login and password reset.'],
      ['Validation on both ends', 'React Hook Form + Zod in the browser, Mongoose and validator on the server.'],
      ['RBAC middleware', 'Role, module and action checks applied per route.'],
    ],
    architecture: {
      columns: [
        { label: 'Client', nodes: [{ title: 'React + Vite', detail: 'Tailwind · Zustand · React Hook Form · Zod · SheetJS' }] },
        {
          label: 'API',
          nodes: [
            { title: 'Express REST API', detail: 'Auth · Organisations · Volunteers · Users' },
            { title: 'Security', detail: 'JWT + refresh · RBAC · Helmet · rate limits' },
          ],
        },
        {
          label: 'Services',
          nodes: [
            { title: 'MongoDB', detail: 'Organisations · Volunteers · Users' },
            { title: 'Cloudinary', detail: 'Profile images via Multer' },
            { title: 'Nodemailer', detail: 'Password reset email' },
          ],
        },
      ],
    },
  },
  {
    slug: 'franchisee-management',
    category: 'Business Software · MERN',
    name: 'Franchisee Management Software',
    tagline: 'One platform to onboard franchisees and run their day-to-day billing, stock and sales.',
    summary:
      'A full-stack platform where franchise owners apply, get approved by an admin, and then run billing, inventory, customer records and sales reporting from a single dashboard — with invoices delivered as PDFs on WhatsApp.',
    role: 'Full-stack development',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.IO', 'Cloudinary', 'Tailwind CSS'],
    image: shot(franchisee800, franchisee1600, 'Franchisee Management Software home page with Customer Data, Sales Report, Stock and Start Billing navigation'),
    links: {
      live: 'https://managementsoftware.vercel.app/',
      github: 'https://github.com/piyush9452/managementsoftware',
    },
    overview:
      'Franchisee Management Software covers the whole life of a franchise outlet: a detailed application to join the network, admin review and approval, and then the tools each approved outlet uses every day — a billing counter, stock management, customer data and sales reports.',
    problem:
      'A growing franchise network needs a controlled way to onboard new outlets and a consistent way for every outlet to bill customers, track stock and report sales — instead of each one keeping its own spreadsheets and paper bills.',
    solution:
      'A MERN application with two sides: an admin console that manages the franchise lifecycle, and a franchisee workspace for billing, stock, customers and sales. Billing updates stock in the same request, invoices are generated as PDFs and shared on WhatsApp, and sales are summarised daily.',
    features: [
      ['Franchise onboarding', 'A detailed application covering personal details, qualifications, experience and franchise information.'],
      ['Admin approval workflow', 'Admins are emailed about new applications, then approve, reject, revoke or reinstate franchisees and assign admin roles — each decision emails the applicant.'],
      ['Billing counter', 'Product selection, customer details and discounts, with a confirmation step before the bill is created.'],
      ['PDF invoices on WhatsApp', 'Invoices are generated as PDFs, stored in the cloud and shared with the customer on WhatsApp.'],
      ['Stock management', 'Per-outlet product catalogue with search, categories, edit/delete and pagination.'],
      ['Customer data', 'Customer profiles with invoice history, repeat-visit insight and a top-10 spenders view.'],
      ['Sales reports', 'Outlet-wise reports with a leaderboard, comparisons, day-level drill-down and CSV export.'],
      ['Daily summaries', 'A scheduled job compiles each day’s sales into a summary, with backfill for missed days.'],
    ],
    decisions: [
      'Two clearly separated experiences — an admin console for the network and a focused workspace for each outlet.',
      'The counter flow is one screen: pick products, add the customer, confirm, and the bill goes out.',
      'Sales and customer views answer the questions an owner actually asks: who are my best customers, and how am I doing against other outlets?',
    ],
    engineering: [
      ['Consistent stock', 'Billing decrements stock with conditional atomic updates and rolls back if any item is short, so stock can’t go negative.'],
      ['Ownership checks', 'Franchisees can only edit or delete their own products; admin routes sit behind a dedicated middleware.'],
      ['Cookie-based auth', 'JWT sessions in cookies with bcrypt-hashed passwords.'],
      ['Scheduled jobs', 'node-cron generates daily summaries at midnight IST.'],
    ],
    architecture: {
      columns: [
        { label: 'Client', nodes: [{ title: 'React + Vite', detail: 'Tailwind · DaisyUI · Zustand · jsPDF' }] },
        {
          label: 'API',
          nodes: [
            { title: 'Express REST API', detail: 'Auth · Products · Invoices · Admin' },
            { title: 'Socket.IO', detail: 'Live presence' },
          ],
        },
        {
          label: 'Services',
          nodes: [
            { title: 'MongoDB', detail: 'Users · Products · Invoices · Daily summaries' },
            { title: 'Cloudinary', detail: 'Invoice PDF storage' },
            { title: 'Nodemailer', detail: 'Application & decision emails' },
            { title: 'node-cron', detail: 'Daily sales summary' },
          ],
        },
      ],
      outputs: ['PDF invoice', 'WhatsApp message', 'CSV report'],
    },
  },
];

// Smaller builds, shown after the featured case studies.
export const builds = [
  {
    name: 'ADORE Website',
    category: 'Non-profit · Full-stack',
    description:
      'Website for a youth-empowerment non-profit, covering programmes, centres, volunteering, blogs and newsletters — with an admin dashboard to manage content.',
    stack: ['React', 'Express', 'MongoDB', 'Cloudinary', 'Framer Motion'],
    image: shot(adore800, adore1600, 'ADORE website home page: Empowering the Next Generation of Changemakers'),
    links: {
      live: 'https://adoreweb-nine.vercel.app/',
      github: 'https://github.com/piyush9452/adoreweb',
    },
  },
  {
    name: 'STIC Club Website',
    category: 'Community · Frontend',
    description:
      'Website for the Students Technical & Innovation Club at Medicaps University — events, blog, team and contact pages, with a Three.js 3D hero.',
    stack: ['React', 'React Router', 'Three.js', 'Vite'],
    image: shot(stic800, stic1600, 'STIC Club website home page: Ideas today, innovation tomorrow'),
    links: {
      live: 'https://stic-club.vercel.app/',
      github: 'https://github.com/piyush9452/STIC-Club',
    },
  },
];
