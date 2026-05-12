import { projects } from '../data/portfolio.js';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
          <p>
            Two projects that show my experience with React interfaces,
            full-stack application flows and API-driven features.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  style={{ objectPosition: project.imagePosition }}
                />
                <div className="project-media-overlay" aria-hidden="true" />
                {project.status ? <span className="project-status-badge">{project.status}</span> : null}
                {project.overlayLabel ? (
                  <div className="project-coming-soon">
                    <span className="project-coming-soon-icon" aria-hidden="true">
                      {project.overlayIcon}
                    </span>
                    <span>{project.overlayLabel}</span>
                  </div>
                ) : null}
              </div>
              <div className="project-content">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.demoAvailable ? (
                    <a href={project.demoUrl}>{project.demoLabel}</a>
                  ) : (
                    <span className="project-link-disabled" aria-disabled="true">
                      {project.demoLabel}
                    </span>
                  )}
                  <a href={project.githubUrl}>GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
