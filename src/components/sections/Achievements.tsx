import type React from 'react';
import { IconTrophy, IconMedal } from '../Icons';
import { asset } from '../../lib/asset';

type Achievement = {
  title: string;
  issuer: string;
  date: string;
  role?: string;
  citation: string;
  highlight?: string;
  icon: 'trophy' | 'medal';
  /** Certificate scan, cropped above the signature line. */
  image: string;
  imageWidth: number;
  imageHeight: number;
};

const achievements: Achievement[] = [
  {
    title: 'Employee Performance Award',
    issuer: 'Molave Youngs Milling Group of Companies',
    date: 'January 2024',
    role: 'Programmer',
    citation:
      'Awarded for a 7.83 performance rating — a Satisfactory standing for the 2023 review year — recognizing sustained commitment to the success of the group of companies.',
    highlight: '7.83 rating · FY2023',
    icon: 'trophy',
    image: '/award-performance.jpg',
    imageWidth: 1400,
    imageHeight: 717,
  },
  {
    title: "People's Choice Award",
    issuer: 'Molave Youngs Milling Group of Companies',
    date: 'January 2024',
    citation:
      'Voted by colleagues for being a team player — elevating value and showing eagerness to extend extra help, contributing to the success of one another.',
    highlight: 'Peer-voted',
    icon: 'medal',
    image: '/award-peoples-choice.jpg',
    imageWidth: 1400,
    imageHeight: 661,
  },
];

export function Achievements() {
  return (
    <section className="section" id="achievements" aria-labelledby="achievements-heading" data-reveal>
      <div className="section-inner">
        <div className="section-header" style={{ '--section-color': 'var(--cube-orange)' } as React.CSSProperties}>
          <p className="section-label">Recognition</p>
          <h2 className="section-title" id="achievements-heading">Achievements</h2>
        </div>
        <ul className="achievements-grid" aria-label="Awards and recognition" data-reveal-stagger>
          {achievements.map((a) => (
            <li key={a.title} className="achievement-card">
              <img
                src={asset(a.image)}
                alt={`${a.title} certificate issued by ${a.issuer}`}
                className="achievement-cert"
                width={a.imageWidth}
                height={a.imageHeight}
                loading="lazy"
                decoding="async"
              />
              <div className="achievement-content">
                <div className="achievement-icon" aria-hidden="true">
                  {a.icon === 'trophy' ? <IconTrophy size={22} /> : <IconMedal size={22} />}
                </div>
                <div className="achievement-body">
                  <p className="achievement-date">{a.date}</p>
                  <h3 className="achievement-title">{a.title}</h3>
                  <p className="achievement-issuer">
                    {a.issuer}
                    {a.role && <span className="achievement-role"> · {a.role}</span>}
                  </p>
                  <p className="achievement-citation">{a.citation}</p>
                  {a.highlight && <span className="achievement-badge">{a.highlight}</span>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}