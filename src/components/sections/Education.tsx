import { IconGradCap } from '../Icons';

export function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-heading" data-reveal>
      <p className="section-label">Background</p>
      <h2 className="section-title" id="education-heading">Education</h2>
      <div className="education-card">
        <div className="edu-icon" aria-hidden="true">
          <IconGradCap size={24} />
        </div>
        <div>
          <p className="edu-degree">Bachelor of Science in Computer Science</p>
          <p className="edu-school">Western Mindanao State University</p>
          <p className="edu-year">2014 – 2019</p>
        </div>
      </div>
    </section>
  );
}