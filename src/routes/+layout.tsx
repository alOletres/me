import { Outlet } from 'react-router';
import { TopNav } from '../components/TopNav';
import { BackToTop } from '../components/BackToTop';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function RootLayout() {
  useScrollReveal();

  return (
    <div className="app-layout">
      <TopNav />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <BackToTop />
    </div>
  );
}