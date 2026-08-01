const techPills = [
  'Node.js', 'NestJS', 'React', 'Next.js', 'Angular',
  'React Native', 'TypeScript', 'Docker',
];

export function Hero() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      <div className="hero-body">
        {/* Text column */}
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name" id="hero-heading">
            Alejandro{' '}
            <span className="hero-name-accent">Oletres</span>
          </h1>
          <p className="hero-role">Software Engineer</p>
          <p className="hero-summary">
            Software Engineer with over five years of experience designing, building, and
            deploying full-stack web and mobile applications across the JavaScript and
            TypeScript ecosystem. I own features end-to-end — from planning through coding,
            testing, and release.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Let's Talk</a>
          </div>
          <div className="hero-tech-row" aria-label="Core technologies">
            {techPills.map(tech => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>

        {/* Photo column */}
        <div className="hero-photo-wrap" aria-hidden="true">
          <div className="hero-photo-glow" />
          <div className="hero-photo-frame">
            <img
              src="/avatar.png"
              alt="Alejandro T. Oletres Jr."
              className="hero-photo"
              width={320}
              height={400}
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}