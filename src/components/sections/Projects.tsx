interface Project {
  name: string;
  desc: string;
  stack: string[];
  note?: string;
}

const projects: Project[] = [
  {
    name: 'Requisition System',
    desc: 'Internal procurement app that lets offices submit item requests, generates purchase orders, and lets admins award suppliers with dynamic quantities and rates.',
    stack: ['Angular', 'NestJS', 'MySQL', 'Socket.IO', 'TypeScript'],
  },
  {
    name: 'HRMS',
    desc: 'Web platform that automates payroll computation and generates payroll reports and MBOS remittance files using DTR data, with Docker containerized dev environment.',
    stack: ['Angular', 'NestJS', 'Tailwind CSS', 'TypeScript', 'Docker'],
  },
  {
    name: 'DTR Mobile App',
    desc: 'React Native app that records employee time-in/out by scanning a QR-coded ID, with on-site photo capture to verify attendance. Syncs to the HRMS backend.',
    stack: ['React Native', 'NestJS', 'TypeScript', 'Redux'],
  },
  {
    name: 'Delivery Cargo System',
    desc: 'Truck-monitoring system that tracks load status, computes odometer-based driver incentives, and produces daily, monthly, and annual logistics reports.',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'MUI', 'RTK Query', 'Docker'],
  },
  {
    name: 'CampConnection',
    desc: 'Full-featured campsite booking platform for church groups and scouts (California, USA client) with real-time data, user auth, and CLIQ payment API integration.',
    stack: ['React', 'Firebase', 'CLIQ Payment API'],
    note: 'Foreign Client · California, USA',
  },
  {
    name: 'White House Apartment System',
    desc: 'Apartment-management app tracking rentals and room occupancy, with SMS notifications for payment due-date reminders for each tenant.',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'MUI', 'RTK Query'],
  },
];

export function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <p className="section-label">Portfolio</p>
      <h2 className="section-title" id="projects-heading">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map(({ name, desc, stack, note }) => (
          <article key={name} className="project-card">
            <div>
              <h3 className="project-name">{name}</h3>
              {note && <p className="project-note">{note}</p>}
            </div>
            <p className="project-desc">{desc}</p>
            <div className="project-stack" aria-label="Tech stack">
              {stack.map(tag => (
                <span key={tag} className="stack-tag">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}