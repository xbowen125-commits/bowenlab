import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-heading reveal">
        <div><span className="section-index">01</span><p className="kicker">Selected Work</p></div>
        <div><h2>Featured Projects</h2><p>Systems, experiments and ongoing investigations.</p></div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={project.featured ? 'project-card featured reveal' : 'project-card reveal'} key={project.title}>
            <div className="project-topline">
              <span className="project-number">PRJ / {project.index}</span>
              <span className={`project-status status-${project.status.toLowerCase().replaceAll(' ', '-').replace('/', '')}`}><i aria-hidden="true" />{project.status}</span>
            </div>
            {project.featured && <div className="project-signal" aria-hidden="true"><span>PERCEPTION</span><i /><span>MEMORY</span><i /><span>BEHAVIOR</span></div>}
            <div className="project-content"><h3>{project.title}</h3><p>{project.description}</p></div>
            <div className="tech-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <span className="card-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  )
}
