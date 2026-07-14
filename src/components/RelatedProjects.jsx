import ProjectGalleryCard from './ProjectGalleryCard'

export default function RelatedProjects({ projects }) {
  if (!projects?.length) return null

  return (
    <section className="project-case-study-section project-case-study-print-hide">
      <h2>Related Projects</h2>
      <div className="project-gallery-grid">
        {projects.map((project) => (
          <ProjectGalleryCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
