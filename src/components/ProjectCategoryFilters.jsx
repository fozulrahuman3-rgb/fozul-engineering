export default function ProjectCategoryFilters({ categories, activeCategory, onSelect, counts }) {
  return (
    <div className="project-gallery-filters" role="group" aria-label="Filter projects by category">
      {categories.map((category) => {
        const count = counts?.[category] ?? 0
        const isActive = activeCategory === category
        return (
          <button
            key={category}
            type="button"
            className={`project-gallery-filter${isActive ? ' active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onSelect(category)}
          >
            {category}
            <span>{count}</span>
          </button>
        )
      })}
    </div>
  )
}
