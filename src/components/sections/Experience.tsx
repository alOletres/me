import type React from 'react';

interface Experience {
  date: string;
  company: string;
  location?: string;
  role: string;
  type?: 'fulltime' | 'freelance';
  bullets: string[];
}

const experiences: Experience[] = [
  {
    date: '2021 – Present',
    company: 'Molave Youngs Milling Corp',
    role: 'Senior Software Engineer',
    type: 'fulltime',
    bullets: [
      'Build and maintain web applications with Angular and React, mobile apps with React Native, and backend services with Node.js and NestJS.',
      "Coordinate a small team of two developers across the full software lifecycle — planning, documentation, coding, testing, and deployment of the company's core software.",
      'Key projects: Procurement System, Proof of Delivery on NetSuite SuiteScript, HRMS with automated payroll, DTR mobile app, Delivery Cargo System, and a centralized User Management System.',
      'Integrated Socket.IO for real-time updates across client and server, used MySQL triggers and events to keep a full before-and-after audit history, and containerized local development with Docker.',
    ],
  },
  {
    date: 'Contract',
    company: 'CampConnection',
    location: 'California, USA',
    role: 'Full-Stack Developer',
    type: 'freelance',
    bullets: [
      'Built a full-featured campsite booking platform for church groups and scouting organizations, enabling users to browse, book, and manage campsites across multiple tailored modules.',
      'Led backend development — booking management, user authentication, and real-time data handling via Firebase.',
      'Integrated the CLIQ payment API for secure, streamlined transactions.',
      'Stack: React.js, Firebase, CLIQ Payment API.',
    ],
  },
  {
    date: '2020 – 2021',
    company: 'iPay Bayad Center',
    location: 'Pagadian',
    role: 'Front End Developer',
    type: 'fulltime',
    bullets: [
      'Developed features for iPayPaymentCenter, a publicly deployed bill-payment portal restricted to authorized users such as cashiers.',
      'Integrated external APIs using secret-key authorization to exchange JSON data reliably between client and server, and designed database and table structures for the web application.',
      'Built content-management interfaces for clients, performed code maintenance and system upgrades, and established a routine of planned testing to maintain functionality.',
      'Stack: Angular 12, Tailwind CSS, TypeScript, Node.js, NGRX.',
    ],
  },
];

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading" data-reveal>
      <div className="section-inner">
      <div className="section-header" style={{ '--section-color': 'var(--cube-yellow)' } as React.CSSProperties}>
        <p className="section-label">Career</p>
        <h2 className="section-title" id="experience-heading">Experience</h2>
      </div>
      <ol className="timeline" aria-label="Work history" data-reveal-stagger>
        {experiences.map(({ date, company, location, role, type, bullets }) => (
          <li key={company} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-meta">
              <p className="timeline-date">{date}</p>
              {type === 'freelance' && (
                <span className="timeline-badge">Freelance</span>
              )}
            </div>
            <p className="timeline-company">
              {company}
              {location && <span className="timeline-location"> · {location}</span>}
            </p>
            <h3 className="timeline-role">{role}</h3>
            <ul className="timeline-bullets">
              {bullets.map((bullet, i) => (
                <li key={i} className="timeline-bullet">{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
      </div>
    </section>
  );
}