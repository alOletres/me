import { useState } from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from '../components/Sidebar';
import { BackToTop } from '../components/BackToTop';
import { IconMenu, IconX, IconSun, IconMoon } from '../components/Icons';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggle } = useTheme();
  useScrollReveal();

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="app-layout">
      {/* Mobile top nav */}
      <nav className="mobile-nav" aria-label="Mobile navigation">
        <span className="mobile-nav-brand">Alejandro T.O.</span>
        <div className="mobile-nav-actions">
          <button
            className="icon-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <IconMoon size={16} /> : <IconSun size={16} />}
          </button>
          <button
            className="icon-btn"
            onClick={() => setSidebarOpen(o => !o)}
            aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={sidebarOpen}
            aria-controls="sidebar"
          >
            {sidebarOpen ? <IconX size={18} /> : <IconMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Overlay (mobile) */}
      <div
        className={`sidebar-overlay${sidebarOpen ? ' is-visible' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      <Sidebar isOpen={sidebarOpen} />

      <main className="main-content" id="main-content">
        <Outlet />
      </main>

      <BackToTop />
    </div>
  );
}