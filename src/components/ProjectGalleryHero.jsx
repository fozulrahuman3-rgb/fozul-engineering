export default function ProjectGalleryHero({ projectCount }) {
  return (
    <section className="project-gallery-hero">
      <div>
        <p className="project-gallery-eyebrow">FAHEEM / PROJECTS</p>
        <h1>Engineering Project Portfolio</h1>
        <p>
          Selected projects demonstrating international QA/QC leadership, quality
          assurance, construction excellence and engineering management.
        </p>
      </div>
      <div className="project-gallery-hero-index" aria-hidden="true">
        <span>Selected</span>
        <strong>{String(projectCount).padStart(2, '0')}</strong>
        <small>Project records</small>
      </div>
    </section>
  )
}
