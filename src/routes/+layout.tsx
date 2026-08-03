import { Outlet } from 'react-router';
import { TopNav } from '../components/TopNav';
import { BackToTop } from '../components/BackToTop';
import { RubiksCube } from '../components/RubiksCube';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function RootLayout() {
  useScrollReveal();

  return (
    <div className="app-layout">
      <div className="bg-cube-wrap" aria-hidden="true">
        <RubiksCube />
      </div>
      <TopNav />
      <main className="main-content" id="main-content">
        <Outlet />
      </main>
      <BackToTop />
    </div>
  );
}