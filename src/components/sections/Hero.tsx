const techPills = [
  "Node.js",
  "NestJS",
  "React",
  "Next.js",
  "Angular",
  "React Native",
  "TypeScript",
  "Docker",
];

const cubeFaces = [
  { cls: "front", color: "var(--cube-red)" },
  { cls: "back", color: "var(--cube-orange)" },
  { cls: "left", color: "var(--cube-green)" },
  { cls: "right", color: "var(--cube-blue)" },
  { cls: "top", color: "var(--cube-yellow)" },
  { cls: "bottom", color: "var(--cube-white)" },
];

function RubiksCube() {
  return (
    <div className="cube-scene" aria-hidden="true">
      <div className="cube">
        {cubeFaces.map(({ cls, color }) => (
          <div key={cls} className={`cube-face cube-face--${cls}`}>
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="sticker" style={{ background: color }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      <div className="hero-body">
        {/* Text column */}
        <div className="hero-content" data-reveal>
          <p className="hero-greeting">// Hello, I'm</p>
          <h1 className="hero-name" id="hero-heading">
            Alejandro
            <br />
            <span className="hero-name-accent">Oletres</span>
          </h1>
          <p className="hero-role">
            <span className="hero-role-bracket">&lt;</span>
            Software Engineer
            <span className="hero-role-bracket"> /&gt;</span>
          </p>
          <p className="hero-summary">
            Software Engineer with 5+ years designing, building, and deploying
            full-stack web and mobile applications across the JavaScript and
            TypeScript ecosystem. I own features end-to-end — from planning
            through coding, testing, and release.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
            </a>
          </div>
          <div className="hero-tech-row" aria-label="Core technologies">
            {techPills.map((tech) => (
              <span key={tech} className="tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Visual column: avatar frame with cube badge */}
        <div className="hero-visual" data-reveal>
          <p className="hero-avatar-label">// FRONT FACE</p>
          <div className="hero-avatar-wrap">
            <div className="hero-avatar-frame">
              <img
                src="/avatar.png"
                alt="Alejandro T. Oletres Jr., Software Engineer"
                className="hero-avatar-img"
                loading="eager"
              />
            </div>
            <div className="hero-cube-badge" aria-hidden="true">
              <RubiksCube />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
