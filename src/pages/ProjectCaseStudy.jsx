import { useEffect } from 'react'
import { getProjectBySlug } from '../data/projectGallery'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import KPIDashboard from '../components/KPIDashboard'
import './ProjectGallery.css'

const CODES_STANDARDS_CATEGORY_ORDER = ['Industry Standard', 'Regulatory Requirement', 'Project Specification']

const QUALITY_DELIVERABLES_CATEGORY_ORDER = [
  'Engineering & Assessment Records',
  'Material & Qualification Records',
  'Inspection & Test Records',
  'Completion & Compliance Documentation',
]

function groupByCategory(entries, categoryOrder) {
  return categoryOrder
    .map((category) => ({
      category,
      items: entries.filter((entry) => entry.category === category),
    }))
    .filter((group) => group.items.length > 0)
}

function StatusCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5 9.2 16.7 19 6.9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProjectCaseStudy({ slug }) {
  const project = getProjectBySlug(slug)

  useDocumentMeta({
    title: project
      ? `${project.title} | FAHEEM Engineering Consultancy`
      : 'Project Not Found | FAHEEM Engineering Consultancy',
    description: project ? project.shortDescription : 'This case study could not be found. Browse the full FAHEEM Engineering Consultancy project portfolio instead.',
    url: project ? `https://faheemengineering.com/projects/${project.slug}` : undefined,
  })

  useEffect(() => {
    document.body.dataset.printScope = 'project-case-study'
    return () => {
      delete document.body.dataset.printScope
    }
  }, [])

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

  const codesStandardsGroups = groupByCategory(project.codesStandards, CODES_STANDARDS_CATEGORY_ORDER)
  const qualityDeliverablesGroups = groupByCategory(project.qualityDeliverables, QUALITY_DELIVERABLES_CATEGORY_ORDER)

  return (
    <main className="project-gallery-page">
      <div className="project-case-study-toolbar">
        <a className="project-case-study-breadcrumb" href="/projects">&larr; Back to Project Portfolio</a>
        <button type="button" className="button button-secondary project-case-study-print-button" onClick={() => window.print()}>
          Download / Print Project Summary
        </button>
      </div>

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
            <dt>Client</dt>
            <dd>{project.client}</dd>
          </div>
          <div>
            <dt>Country</dt>
            <dd>{project.country}</dd>
          </div>
          <div>
            <dt>Industry</dt>
            <dd>{project.industry}</dd>
          </div>
          <div>
            <dt>Duration</dt>
            <dd>{project.duration}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          {project.contractValue ? (
            <div>
              <dt>Contract Value</dt>
              <dd>{project.contractValue}</dd>
            </div>
          ) : null}
          <div>
            <dt>Status</dt>
            <dd>
              <span className="project-case-study-status-badge">
                <StatusCheckIcon />
                {project.status}
              </span>
            </dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{project.location}</dd>
          </div>
        </dl>

        {project.tags?.length ? (
          <div className="project-case-study-tags-row">
            <span>Project Tags</span>
            <div className="project-case-study-hero-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <div className="project-case-study-sections">
        <section className="project-case-study-section">
          <h2>Executive KPI Dashboard</h2>
          <KPIDashboard stats={project.stats} />
        </section>

        <section className="project-case-study-section">
          <h2>Executive Summary</h2>
          <p>{project.executiveSummary}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Scope of Work</h2>
          <p>{project.scope}</p>
          <h3>Key Responsibilities</h3>
          <ul>
            {project.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="project-case-study-section">
          <h2>QA/QC Responsibilities</h2>
          <p>{project.qaqcActivities}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Inspection &amp; Testing Activities</h2>
          <p>{project.testing}</p>
          <h3>Inspection Highlights</h3>
          <ul>
            {project.inspectionHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="project-case-study-section">
          <h2>Codes &amp; Standards</h2>
          {codesStandardsGroups.map((group) => (
            <div key={group.category} className="project-case-study-category-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.standard}>
                    <span className="project-case-study-category-item-name">{item.standard}</span>
                    {' — '}
                    {item.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="project-case-study-section">
          <h2>Engineering Challenges</h2>
          <p>{project.challenges}</p>
        </section>

        <section className="project-case-study-section">
          <h2>Engineering Solutions</h2>
          <p>{project.solutions}</p>
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
          <h2>Quality Deliverables</h2>
          {qualityDeliverablesGroups.map((group) => (
            <div key={group.category} className="project-case-study-category-group">
              <h3>{group.category}</h3>
              <ul>
                {group.items.map((entry) => (
                  <li key={entry.item}>
                    <span className="project-case-study-category-item-name">{entry.item}</span>
                    {' — '}
                    {entry.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="project-case-study-section">
          <h2>Lessons Learned</h2>
          <p>{project.lessonsLearned}</p>
        </section>

        <section className="project-case-study-section project-case-study-print-hide">
          <h2>Real Project Photo Gallery</h2>
          {project.galleryImages?.length ? (
            <div className="project-case-study-gallery-grid">
              {project.galleryImages.map((image) => (
                <figure key={image.src} className="project-case-study-gallery-photo">
                  <img src={image.src} alt={image.altText} loading="lazy" />
                  {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          ) : (
            <div className="project-case-study-empty-state">
              Verified site photography for this project has not yet been published.
            </div>
          )}
          {project.imageCredits ? (
            <p className="project-case-study-image-credits">{project.imageCredits}</p>
          ) : null}
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
