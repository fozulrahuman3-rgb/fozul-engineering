export default function ProjectsPreview({ SectionHeading, PremiumIcon, projects = [] }) {
  return (
    <section className="section" id="projects-featured">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Featured Engineering Projects"
        subtitle="Delivering quality, technical excellence, and engineering confidence across industrial and infrastructure projects."
      />

      <div className="featured-projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="featured-project-card">
            <div className="service-icon">
              <PremiumIcon name={project.icon} />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            <a className="project-view-button" href={project.href || '#'}>
              Learn More
            </a>
          </article>
        ))}
      </div>

      <div className="services-cta">
        <h3>Ready to discuss your next engineering project?</h3>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
          <a className="button button-secondary" href="#">Explore All Projects</a>
        </div>
      </div>
    </section>
  )
}
