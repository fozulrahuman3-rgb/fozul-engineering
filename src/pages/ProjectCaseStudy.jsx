import { getProjectBySlug } from '../data/projectGallery'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import './ProjectGallery.css'

const GALLERY_PLACEHOLDER_COUNT = 4

export default function ProjectCaseStudy({ slug }) {
  const project = getProjectBySlug(slug)

  useDocumentMeta({
    title: project
      ? `${project.title} | FAHEEM Engineering Consultancy`
      : 'Project Not Found | FAHEEM Engineering Consultancy',
    description: project ? project.shortDescription : 'This case study could not be found. Browse the full FAHEEM Engineering Consultancy project portfolio instead.',
    url: project ? `https://faheemengineering.com/projects/${project.slug}` : undefined,
  })

  if (!project) {
    return (
      <main className="project-gallery-page">
        <a className="project-case-study-breadcrumb" href="/projects">&larr; Back to Project Portfolio</a>
        <div className="project-case-study-not-found">
          <h1>Project not found</h1>
          <p>This case study may have moved or the link may be out of date. Browse the full portfolio instead.</p>
          <a className="button button-primary" href="/projects">View All Projects</a>
        </div>
      </main>
    )
  }

  return (
    <main className="project-gallery-page">
      <a className="project-case-study-breadcrumb" href="/projects">&larr; Back to Project Portfolio</a>

      <header className="project-case-study-hero">
        <p className="project-gallery-eyebrow">FAHEEM / PROJECTS / CASE STUDY</p>
        <div className="project-case-study-hero-tags">
          {project.categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <h1>{project.title}</h1>

        <dl className="project-case-study-meta-grid">
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
      </header>

      <div className="project-case-study-sections">
        <section className="project-case-study-section">
          <h2>Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Project Scope</h2>
          <p>{project.scope}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Responsibilities</h2>
          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="project-case-study-section">
          <h2>QA/QC Activities</h2>
          <p>{project.qaqcActivities}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Codes &amp; Standards</h2>
          <p>{project.standards}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Major Challenges</h2>
          <p>{project.challenges}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Solutions</h2>
          <p>{project.solutions}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Inspection Highlights</h2>
          <ul>
            {project.inspectionHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="project-case-study-section">
          <h2>Quality Achievements</h2>
          <ul>
            {project.qualityAchievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="project-case-study-section">
          <h2>Lessons Learned</h2>
          <p>{project.lessonsLearned}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Project Gallery</h2>
          <div className="project-case-study-gallery-grid">
            {Array.from({ length: GALLERY_PLACEHOLDER_COUNT }, (_, index) => (
              <div
                key={index}
                className="project-case-study-gallery-placeholder"
                role="img"
                aria-label={`${project.title} — site photograph ${index + 1}, not yet published`}
              >
                <span>Project Imagery</span>
                <strong>{index + 1}</strong>
                <span>Coming soon</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="project-gallery-cta">
        <p>Project Engagement</p>
        <h2>Have a similar engineering challenge?</h2>
        <div>
          <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
          <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Request Consultation</a>
        </div>
      </section>
    </main>
  )
}
