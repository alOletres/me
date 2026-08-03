import type React from 'react';
import { useState } from 'react';

interface Skill {
  name: string;
  pct: number;
}

interface SkillCategory {
  faceLabel: string;
  color: string;
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    faceLabel: 'FRONT FACE',
    color: 'var(--cube-red)',
    title: 'Backend',
    skills: [
      { name: 'Node.js',    pct: 90 },
      { name: 'NestJS',     pct: 88 },
      { name: 'Express.js', pct: 85 },
      { name: 'TypeScript', pct: 92 },
      { name: 'REST APIs',  pct: 90 },
    ],
  },
  {
    faceLabel: 'RIGHT FACE',
    color: 'var(--cube-orange)',
    title: 'Frontend',
    skills: [
      { name: 'React',      pct: 90 },
      { name: 'Next.js',    pct: 82 },
      { name: 'Angular',    pct: 80 },
      { name: 'JavaScript', pct: 88 },
      { name: 'HTML / CSS', pct: 85 },
    ],
  },
  {
    faceLabel: 'TOP FACE',
    color: 'var(--cube-yellow)',
    title: 'Mobile',
    skills: [
      { name: 'React Native', pct: 80 },
      { name: 'Redux',        pct: 75 },
      { name: 'Expo',         pct: 72 },
    ],
  },
  {
    faceLabel: 'LEFT FACE',
    color: 'var(--cube-green)',
    title: 'Database',
    skills: [
      { name: 'MySQL',      pct: 82 },
      { name: 'PostgreSQL', pct: 75 },
      { name: 'Firebase',   pct: 78 },
      { name: 'TypeORM',    pct: 70 },
    ],
  },
  {
    faceLabel: 'BOTTOM FACE',
    color: 'var(--cube-blue)',
    title: 'DevOps',
    skills: [
      { name: 'Docker',      pct: 75 },
      { name: 'CI/CD',       pct: 68 },
      { name: 'Git & GitHub', pct: 90 },
      { name: 'Linux / CLI', pct: 70 },
    ],
  },
  {
    faceLabel: 'BACK FACE',
    color: 'var(--cube-white)',
    title: 'Tools & AI',
    skills: [
      { name: 'Socket.IO',    pct: 80 },
      { name: 'Tailwind CSS', pct: 85 },
      { name: 'MUI / AM',     pct: 78 },
      { name: 'AI-Assisted',  pct: 85 },
    ],
  },
];

export function WhatIDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <section className="section" id="what-i-do" aria-labelledby="what-i-do-heading" data-reveal>
      <div className="section-inner">
      <div className="section-header" style={{ '--section-color': 'var(--cube-orange)' } as React.CSSProperties}>
        <p className="section-label">Skills</p>
        <h2 className="section-title" id="what-i-do-heading">What I Do</h2>
      </div>

      <div className="skills-panel">
        {/* Tab column */}
        <div className="skills-tabs" role="tablist" aria-label="Skill categories">
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              role="tab"
              aria-selected={i === activeIndex}
              aria-controls="skills-content"
              className={`skills-tab${i === activeIndex ? ' is-active' : ''}`}
              style={{ '--tab-color': cat.color } as React.CSSProperties}
              onClick={() => setActiveIndex(i)}
            >
              <span
                className="skills-tab-dot"
                style={{ background: cat.color }}
                aria-hidden="true"
              />
              <span className="skills-tab-face">{cat.faceLabel}</span>
              <span className="skills-tab-title">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills content */}
        <div
          id="skills-content"
          role="tabpanel"
          className="skills-bars"
          aria-label={`${active.title} skills`}
        >
          <div
            className="skills-bars-header"
            style={{ '--tab-color': active.color } as React.CSSProperties}
          >
            <span
              className="skills-bars-face"
              style={{ color: active.color }}
            >
              {active.faceLabel}
            </span>
            <h3 className="skills-bars-title">{active.title}</h3>
          </div>

          <ul className="skills-list">
            {active.skills.map(({ name, pct }) => (
              <li key={name} className="skill-row">
                <div className="skill-row-meta">
                  <span className="skill-name">{name}</span>
                  <span
                    className="skill-pct"
                    style={{ color: active.color }}
                  >
                    {pct}%
                  </span>
                </div>
                <div
                  className="skill-bar-track"
                  role="progressbar"
                  aria-valuenow={pct}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${name}: ${pct}%`}
                >
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${pct}%`,
                      background: active.color,
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}