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
    role: 'Software Engineer',
    type: 'fulltime',
    bullets: [
      'Build and maintain web applications with Angular and React, mobile apps with React Native, and backend services with Node.js and NestJS.',
      'Coordinate a small team of two developers across the full software lifecycle — planning, documentation, coding, testing, and deployment.',
      'Architected and built a Requisition System, HRMS with automated payroll, DTR mobile app (QR-code attendance), and a Delivery Cargo truck-monitoring system.',
      'Containerized local development environments with Docker; integrated Socket.IO for real-time updates across client and server.',
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
    role: 'Software Engineer',
    type: 'fulltime',
    bullets: [
      'Developed features for iPayPaymentCenter, a publicly deployed bill-payment portal restricted to authorized cashiers.',
      'Integrated external APIs using secret-key authorization to exchange JSON data reliably between client and server.',
      'Designed database schemas, built content-management interfaces for clients, and performed code maintenance and system upgrades.',
      'Stack: Angular 12, Tailwind CSS, TypeScript, Node.js, NGRX.',
    ],
  },
];

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-heading" data-reveal>
      <p className="section-label">Career</p>
      <h2 className="section-title" id="experience-heading">Experience</h2>
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
    </section>
  );
}