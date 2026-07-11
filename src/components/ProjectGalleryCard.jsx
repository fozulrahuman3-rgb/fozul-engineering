export default function ProjectGalleryCard({ project }) {
  return (
    <article className="project-gallery-card">
      <div
        className="project-gallery-card-visual"
        role="img"
        aria-label={`${project.title} — project imagery placeholder, photography not yet published`}
      >
        <span>Project imagery</span>
        <strong>{project.categories[0]}</strong>
        <small>Confidential / coming soon</small>
      </div>

      <div className="project-gallery-card-body">
        <div className="project-gallery-card-tags">
          {project.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>

        <h3>{project.title}</h3>
        <p className="project-gallery-card-description">{project.shortDescription}</p>

        <dl className="project-gallery-card-meta">
          <div>
            <dt>Country</dt>
            <dd>{project.country}</dd>
          </div>
          <div>
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>

        <a className="project-gallery-card-link" href={`/projects/${project.slug}`}>
          View Case Study
        </a>
      </div>
    </article>
  )
}
