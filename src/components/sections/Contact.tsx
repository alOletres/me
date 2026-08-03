import type React from 'react';
import type { ReactNode } from 'react';
import { IconMail, IconPhone, IconGitHub, IconMapPin } from '../Icons';

interface ContactItem {
  type: string;
  value: string;
  href?: string;
  icon: ReactNode;
  color: string;
  faceLabel: string;
  external?: boolean;
}

const contacts: ContactItem[] = [
  {
    type: 'Email',
    value: 'alejandrooletres@gmail.com',
    href: 'mailto:alejandrooletres@gmail.com',
    icon: <IconMail size={20} />,
    color: 'var(--cube-red)',
    faceLabel: 'FRONT FACE',
  },
  {
    type: 'GitHub',
    value: 'github.com/alOletres',
    href: 'https://github.com/alOletres',
    icon: <IconGitHub size={20} />,
    color: 'var(--cube-green)',
    faceLabel: 'LEFT FACE',
    external: true,
  },
  {
    type: 'Phone',
    value: '+63 951 489 8662',
    href: 'tel:+639514898662',
    icon: <IconPhone size={20} />,
    color: 'var(--cube-orange)',
    faceLabel: 'RIGHT FACE',
  },
  {
    type: 'Location',
    value: 'Molave, Zamboanga del Sur, PH',
    icon: <IconMapPin size={20} />,
    color: 'var(--cube-blue)',
    faceLabel: 'BOTTOM FACE',
  },
];

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading" data-reveal>
      <div className="section-inner">
      <div className="section-header" style={{ '--section-color': 'var(--cube-white)' } as React.CSSProperties}>
        <p className="section-label">Get in Touch</p>
        <h2 className="section-title" id="contact-heading">Contact</h2>
      </div>

      <p className="contact-tagline">READY TO SOLVE THE NEXT PUZZLE?</p>
      <p className="contact-intro">
        I'm currently open to new opportunities. Whether you have a question, a project
        idea, or just want to say hi — my inbox is always open.
      </p>

      <div className="contact-grid">
        {contacts.map(({ type, value, href, icon, color, faceLabel, external }) => {
          const inner = (
            <>
              <div
                className="contact-icon"
                style={{ background: `color-mix(in srgb, ${color} 12%, transparent)`, color }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <div className="contact-text">
                <p
                  className="contact-face-label"
                  style={{ color }}
                >
                  {faceLabel}
                </p>
                <p className="contact-type">{type}</p>
                <p className="contact-value">{value}</p>
              </div>
            </>
          );

          const cardStyle = {
            '--contact-color': color,
            borderLeft: `3px solid ${color}`,
          } as React.CSSProperties;

          return href ? (
            <a
              key={type}
              href={href}
              className="contact-card"
              aria-label={`${type}: ${value}`}
              style={cardStyle}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {inner}
            </a>
          ) : (
            <div key={type} className="contact-card" style={cardStyle}>
              {inner}
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}