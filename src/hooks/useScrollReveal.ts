import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );

    document
      .querySelectorAll('[data-reveal], [data-reveal-stagger]')
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}