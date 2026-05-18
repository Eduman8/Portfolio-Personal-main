import { projects } from '../data/portfolio.js';

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Projects</p>
          <h2>Selected work</h2>
          <p>
            Selected projects that show my experience building real interfaces,
            full-stack flows, API integrations and production-oriented features.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-media">
                <img
                  className={`project-image project-image--${project.imageFit ?? 'cover'}`}
                  src={project.image}
                  alt={`${project.title} project preview`}
                  style={{ objectPosition: project.imagePosition }}
                />
                <div className="project-media-overlay" aria-hidden="true" />
                {project.status ? (
                  <span className="project-status-badge">{project.status}</span>
                ) : null}
                {project.overlayLabel ? (
                  <div className="project-coming-soon">
                    <span>{project.overlayLabel}</span>
                  </div>
                ) : null}
              </div>
              <div className="project-content">
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.demoAvailable && project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      {project.demoLabel}
                    </a>
                  ) : (
                    <span className="project-link-disabled" aria-disabled="true">
                      {project.demoLabel}
                    </span>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
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
