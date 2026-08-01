import { IconMail, IconPhone, IconGitHub, IconMapPin } from '../Icons';
import type { ReactNode } from 'react';

interface ContactItem {
  type: string;
  value: string;
  href?: string;
  icon: ReactNode;
  external?: boolean;
}

const contacts: ContactItem[] = [
  {
    type: 'Email',
    value: 'alejandrooletres@gmail.com',
    href: 'mailto:alejandrooletres@gmail.com',
    icon: <IconMail size={20} />,
  },
  {
    type: 'GitHub',
    value: 'github.com/alOletres',
    href: 'https://github.com/alOletres',
    icon: <IconGitHub size={20} />,
    external: true,
  },
  {
    type: 'Phone',
    value: '+63 951 489 8662',
    href: 'tel:+639514898662',
    icon: <IconPhone size={20} />,
  },
  {
    type: 'Location',
    value: 'Molave, Zamboanga del Sur, PH',
    icon: <IconMapPin size={20} />,
  },
];

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading" data-reveal>
      <p className="section-label">Get in Touch</p>
      <h2 className="section-title" id="contact-heading">Contact</h2>
      <p className="contact-intro">
        I'm currently open to new opportunities. Whether you have a question, a project
        idea, or just want to say hi — my inbox is always open.
      </p>
      <div className="contact-grid">
        {contacts.map(({ type, value, href, icon, external }) =>
          href ? (
            <a
              key={type}
              href={href}
              className="contact-card"
              aria-label={`${type}: ${value}`}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <div className="contact-icon" aria-hidden="true">{icon}</div>
              <div>
                <p className="contact-type">{type}</p>
                <p className="contact-value">{value}</p>
              </div>
            </a>
          ) : (
            <div key={type} className="contact-card">
              <div className="contact-icon" aria-hidden="true">{icon}</div>
              <div>
                <p className="contact-type">{type}</p>
                <p className="contact-value">{value}</p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}