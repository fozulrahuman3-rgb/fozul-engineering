export default function KPIDashboard({ stats }) {
  if (!stats?.length) {
    return (
      <div className="project-case-study-kpi-placeholder">
        Awaiting Verified Project Metrics
      </div>
    )
  }

  return (
    <div className="project-case-study-kpi-dashboard">
      {stats.map((stat) => (
        <div key={stat.label} className="project-case-study-kpi-tile">
          <strong>{stat.value.toLocaleString()}{stat.suffix}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
