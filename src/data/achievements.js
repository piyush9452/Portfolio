// Awards and certificates, transcribed from the certificate images in
// src/assets. Titles, issuers and dates are exactly as printed on them.

import annual720 from '../assets/achievements/annual-commitment-award-720.webp';
import annual1600 from '../assets/achievements/annual-commitment-award-1600.webp';
import trainee720 from '../assets/achievements/trainee-of-the-month-720.webp';
import trainee1600 from '../assets/achievements/trainee-of-the-month-1600.webp';
import catalyst720 from '../assets/achievements/developer-catalyst-720.webp';
import catalyst1600 from '../assets/achievements/developer-catalyst-1600.webp';
import java720 from '../assets/achievements/java-iit-bombay-720.webp';
import java1600 from '../assets/achievements/java-iit-bombay-1600.webp';
import sih2025720 from '../assets/achievements/sih-2025-720.webp';
import sih20251600 from '../assets/achievements/sih-2025-1600.webp';
import sih2026720 from '../assets/achievements/sih-2026-720.webp';
import sih20261600 from '../assets/achievements/sih-2026-1600.webp';

const img = (thumb, full, alt) => ({ thumb, full, alt });

export const awards = [
  {
    title: 'Annual Commitment Award',
    issuer: 'SIMTRAK',
    date: 'May 2026',
    description: 'Recognised for dedication, commitment and positive attitude on completing one year with the company.',
    image: img(annual720, annual1600, 'SIMTRAK Annual Commitment Award certificate and plaque presented to Piyush Kumar'),
  },
  {
    title: 'Trainee of the Month',
    issuer: 'SIMTRAK',
    date: 'June 2025',
    description: 'Recognised for dedication, commitment and positive attitude as a Web Development Trainee.',
    image: img(trainee720, trainee1600, 'SIMTRAK Trainee of the Month certificate for June 2025 presented to Piyush Kumar'),
  },
];

export const certifications = [
  {
    title: 'Developer Catalyst Program — Gold',
    issuer: 'FutureSkills Prime · IT-ITeS SSC NASSCOM',
    date: 'September 2026',
    description: 'Cleared the assessment in the Gold category (70% and above), aligned to NASSCOM competency standards.',
    image: img(catalyst720, catalyst1600, 'FutureSkills Prime Gold certificate for the Developer Catalyst Program awarded to Piyush Kumar'),
  },
  {
    title: 'Java Training',
    issuer: 'Spoken Tutorial, IIT Bombay · EduPyramids',
    date: 'October 2025',
    description: 'Completed Java training and passed the remotely conducted IIT Bombay exam with a score of 82.5%.',
    image: img(java720, java1600, 'Spoken Tutorial IIT Bombay certificate for completion of Java training'),
  },
  {
    title: 'Internal Smart India Hackathon 2026',
    issuer: 'Medicaps University',
    date: 'September 2026',
    description: 'Participated in the internal round of Smart India Hackathon 2026.',
    image: img(sih2026720, sih20261600, 'Certificate of participation in Internal Smart India Hackathon 2026 at Medicaps University'),
  },
  {
    title: 'Smart India Hackathon 2025 — Internal Hackathon',
    issuer: 'Medicaps University',
    date: 'September 2025',
    description: 'Participated in the internal hackathon for Smart India Hackathon 2025.',
    image: img(sih2025720, sih20251600, 'Certificate of participation in the SIH 2025 internal hackathon at Medicaps University'),
  },
];
