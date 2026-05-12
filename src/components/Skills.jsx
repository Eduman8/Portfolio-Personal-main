import { skills } from '../data/portfolio.js';

function Skills() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container section-grid">
        <div>
          <p className="section-label">Skills</p>
          <h2>Technologies I use to build web applications.</h2>
        </div>
        <ul className="skills-list" aria-label="Technical skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
