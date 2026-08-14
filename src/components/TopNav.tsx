import { useState, useEffect } from 'react';
import { IconDownload, IconSun, IconMoon, IconMenu, IconX } from './Icons';
import { useTheme } from '../contexts/ThemeContext';
import { asset } from '../lib/asset';

const navLinks = [
  { label: 'Hero',       href: '#hero',       color: 'var(--cube-red)' },
  { label: 'What I Do',  href: '#what-i-do',  color: 'var(--cube-orange)' },
  { label: 'Experience', href: '#experience', color: 'var(--cube-yellow)' },
  { label: 'Awards',     href: '#achievements', color: 'var(--cube-orange)' },
  { label: 'Projects',   href: '#projects',   color: 'var(--cube-green)' },
  { label: 'Education',  href: '#education',  color: 'var(--cube-blue)' },
  { label: 'Contact',    href: '#contact',    color: 'var(--cube-white)' },
];

export function TopNav() {
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMenu(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="topnav" role="banner">
        <div className="topnav-inner">
          {/* Brand */}
          <a href="#hero" className="topnav-brand" onClick={closeMenu} aria-label="Back to top">
            {/* Stands in for the hero portrait, which is hidden on small screens */}
            <img
              src={asset('avatar.png')}
              alt=""
              className="topnav-avatar"
              aria-hidden="true"
            />
            <span className="topnav-brand-cube">
              <span style={{ color: 'var(--cube-red)' }}>D</span>
              <span style={{ color: 'var(--cube-orange)' }}>E</span>
              <span style={{ color: 'var(--cube-yellow)' }}>V</span>
            </span>
            <span className="topnav-brand-dot">.</span>
            <span className="topnav-brand-cube">
              <span style={{ color: 'var(--cube-green)' }}>C</span>
              <span style={{ color: 'var(--cube-blue)' }}>U</span>
              <span style={{ color: 'var(--cube-white)' }}>B</span>
              <span style={{ color: 'var(--cube-red)' }}>E</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="topnav-links" aria-label="Main navigation">
            {navLinks.map(({ label, href, color }) => (
              <a
                key={label}
                href={href}
                className="topnav-link"
                style={{ '--link-color': color } as React.CSSProperties}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="topnav-actions">
            <button
              className="icon-btn"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <IconMoon size={16} /> : <IconSun size={16} />}
            </button>

            <a
              href={asset('resume.pdf')}
              download="Alejandro_Oletres_CV.pdf"
              className="topnav-cv-btn"
            >
              <IconDownload size={14} />
              <span>Download CV</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="icon-btn topnav-hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <IconX size={18} /> : <IconMenu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      <nav
        id="mobile-menu"
        className={`topnav-mobile-menu${menuOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navLinks.map(({ label, href, color }) => (
          <a
            key={label}
            href={href}
            className="topnav-mobile-link"
            style={{ '--link-color': color } as React.CSSProperties}
            onClick={closeMenu}
          >
            <span className="topnav-mobile-link-dot" style={{ background: color }} />
            {label}
          </a>
        ))}
        <div className="topnav-mobile-footer">
          <a
            href={asset('resume.pdf')}
            download="Alejandro_Oletres_CV.pdf"
            className="topnav-cv-btn topnav-cv-btn--full"
            onClick={closeMenu}
          >
            <IconDownload size={14} />
            Download CV
          </a>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="topnav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}