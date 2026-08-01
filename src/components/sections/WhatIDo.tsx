import {
  IconServer,
  IconLayout,
  IconSmartphone,
  IconLink,
  IconCode,
  IconCpu,
} from '../Icons';
import type { ReactNode } from 'react';

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: <IconServer size={20} />,
    title: 'Backend Development',
    desc: 'Building robust server-side systems, REST APIs, and business logic with Node.js, PHP/Laravel, and Python.',
  },
  {
    icon: <IconLayout size={20} />,
    title: 'Frontend Development',
    desc: 'Crafting responsive, performant web interfaces with React, Next.js, and TypeScript — from landing pages to complex SPAs.',
  },
  {
    icon: <IconSmartphone size={20} />,
    title: 'Mobile Apps',
    desc: 'Developing cross-platform mobile applications using React Native and Expo, deployable to both iOS and Android.',
  },
  {
    icon: <IconLink size={20} />,
    title: 'API Integration',
    desc: 'Connecting payment gateways, third-party services, and external APIs into cohesive, reliable systems.',
  },
  {
    icon: <IconCode size={20} />,
    title: 'DevOps & Deployment',
    desc: 'Setting up CI/CD pipelines, Docker containers, and deploying applications to cloud platforms.',
  },
  {
    icon: <IconCpu size={20} />,
    title: 'AI-Assisted Engineering',
    desc: 'Leveraging AI tools like Claude to accelerate development cycles, improve code quality, and solve complex problems faster.',
  },
];

export function WhatIDo() {
  return (
    <section className="section" id="what-i-do" aria-labelledby="what-i-do-heading">
      <p className="section-label">Services</p>
      <h2 className="section-title" id="what-i-do-heading">What I Do</h2>
      <div className="cards-grid">
        {services.map(({ icon, title, desc }) => (
          <article key={title} className="service-card">
            <div className="service-icon" aria-hidden="true">{icon}</div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}