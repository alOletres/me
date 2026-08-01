import { IconGitHub, IconMail, IconDownload, IconCheck, IconSun, IconMoon } from './Icons';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  isOpen?: boolean;
}

const skillGroups = [
  { label: 'Backend', tags: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'REST APIs'] },
  { label: 'Frontend', tags: ['React', 'Next.js', 'Angular', 'JavaScript', 'HTML/CSS'] },
  { label: 'Mobile', tags: ['React Native'] },
  { label: 'Database', tags: ['MySQL', 'PostgreSQL', 'Firebase'] },
  { label: 'UI / Styling', tags: ['Tailwind CSS', 'MUI', 'Angular Material'] },
];

const extraSkills = ['Docker', 'CI/CD', 'Git & GitHub', 'Socket.IO', 'AI-Assisted Dev (Claude)'];

const facts: [string, string][] = [
  ['Location', 'Molave, ZdS, PH'],
  ['Experience', '5+ Years'],
  ['Availability', 'Open to Work'],
  ['Employment', 'Full-time'],
];

export function Sidebar({ isOpen = false }: SidebarProps) {
  const { theme, toggle } = useTheme();

  return (
    <aside
      className={`sidebar${isOpen ? ' is-open' : ''}`}
      aria-label="Profile sidebar"
      id="sidebar"
    >
      {/* Avatar */}
      <div className="sidebar-avatar">
        <div className="avatar-ring">
          <img
            src="/avatar.png"
            alt="Alejandro T. Oletres Jr."
            className="avatar-photo"
            width={88}
            height={88}
          />
          <span className="status-dot" aria-label="Available for work" />
        </div>
        <div>
          <p className="sidebar-name">Alejandro T. Oletres Jr.</p>
          <p className="sidebar-title">Software Engineer</p>
        </div>
        <nav className="sidebar-socials" aria-label="Social links">
          <a
            href="https://github.com/alOletres"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub profile"
          >
            <IconGitHub size={16} />
          </a>
          <a
            href="mailto:alejandrooletres@gmail.com"
            className="social-link"
            aria-label="Send email"
          >
            <IconMail size={16} />
          </a>
        </nav>
      </div>

      {/* About facts */}
      <div className="sidebar-section">
        <p className="sidebar-section-label">About</p>
        <dl className="fact-table">
          {facts.map(([label, value]) => (
            <div key={label} className="fact-row">
              <dt className="fact-label">{label}</dt>
              <dd className="fact-value">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Languages */}
      <div className="sidebar-section">
        <p className="sidebar-section-label">Languages</p>
        <ul className="lang-list">
          <li className="lang-item">
            <span className="lang-name">Filipino</span>
            <span className="lang-level">Native</span>
          </li>
          <li className="lang-item">
            <span className="lang-name">English</span>
            <span className="lang-level">Professional</span>
          </li>
        </ul>
      </div>

      {/* Tech skills */}
      <div className="sidebar-section">
        <p className="sidebar-section-label">Tech Skills</p>
        <div className="skills-section">
          {skillGroups.map(({ label, tags }) => (
            <div key={label} className="skill-group">
              <p className="skill-group-label">{label}</p>
              <div className="skill-tags">
                {tags.map(tag => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra skills */}
      <div className="sidebar-section">
        <p className="sidebar-section-label">Tools & Extras</p>
        <ul className="extra-skills">
          {extraSkills.map(skill => (
            <li key={skill} className="extra-skill-item">
              <span className="check-icon"><IconCheck size={12} /></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Theme toggle */}
      <div className="sidebar-section" style={{ borderBottom: 'none' }}>
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <span className="theme-toggle-label">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </span>
          {theme === 'light' ? <IconMoon size={15} /> : <IconSun size={15} />}
        </button>
      </div>

      {/* Download CV */}
      <div className="sidebar-cv">
        <a
          href="/resume.pdf"
          download="Alejandro_Oletres_CV.pdf"
          className="btn-download"
        >
          <IconDownload size={15} />
          Download CV
        </a>
      </div>
    </aside>
  );
}