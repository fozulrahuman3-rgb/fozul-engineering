import { useMemo, useState } from 'react'
import { projectGallery, projectCategoryList } from '../data/projectGallery'
import ProjectGalleryHero from '../components/ProjectGalleryHero'
import ProjectCategoryFilters from '../components/ProjectCategoryFilters'
import ProjectGalleryCard from '../components/ProjectGalleryCard'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import './ProjectGallery.css'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  useDocumentMeta({
    title: 'Engineering Project Portfolio | FAHEEM Engineering Consultancy',
    description: 'Selected engineering projects demonstrating international QA/QC leadership, quality assurance, and construction excellence across oil & gas, mining, and industrial sectors in Saudi Arabia — HDPE liner, concrete repair, earthworks, and geosynthetics case studies.',
    url: 'https://faheemengineering.com/projects',
  })

  const counts = useMemo(() => {
    const tally = { All: projectGallery.length }
    projectCategoryList.forEach((category) => {
      if (category === 'All') return
      tally[category] = projectGallery.filter((project) => project.categories.includes(category)).length
    })
    return tally
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectGallery
    return projectGallery.filter((project) => project.categories.includes(activeCategory))
  }, [activeCategory])

  return (
    <main className="project-gallery-page">
      <ProjectGalleryHero projectCount={projectGallery.length} />

      <section aria-label="Project categories">
        <ProjectCategoryFilters
          categories={projectCategoryList}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          counts={counts}
        />
      </section>

      <section aria-label="Project portfolio">
        {filteredProjects.length > 0 ? (
          <div className="project-gallery-grid">
            {filteredProjects.map((project) => (
              <ProjectGalleryCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="project-gallery-empty">
            No published projects in this category yet — check back soon, or contact us to discuss a project in this area directly.
          </p>
        )}
      </section>

      <section className="project-gallery-cta">
        <p>Project Engagement</p>
        <h2>Ready to discuss your next engineering project?</h2>
        <div>
          <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact Us</a>
          <a className="button button-secondary" href="https://wa.me/966581212378" target="_blank" rel="noreferrer">Request Consultation</a>
        </div>
      </section>
    </main>
  )
}
