import { motion } from 'motion/react'

const departments = [
  {
    number: '01',
    name: 'Quality Management',
    lead: 'QA/QC Manager',
    status: 'To Be Appointed',
    roles: ['QA/QC Engineers', 'Inspectors'],
    responsibility: 'Quality systems, inspection governance, compliance assurance, and continuous improvement across every engagement.',
  },
  {
    number: '02',
    name: 'Engineering & Design',
    lead: 'Design Manager',
    status: 'To Be Appointed / Future Division',
    roles: ['Civil / Structural Engineers', 'Architectural / MEP Support'],
    responsibility: 'Coordinated technical development, engineering reviews, and multidisciplinary design support for project needs.',
  },
  {
    number: '03',
    name: 'Project Delivery',
    lead: 'Project Manager',
    status: 'To Be Appointed',
    roles: ['Construction Manager', 'Site Engineers', 'Planning / Project Controls'],
    responsibility: 'Disciplined project execution, progress visibility, resource coordination, and delivery assurance.',
  },
  {
    number: '04',
    name: 'HSE',
    lead: 'HSE Manager',
    status: 'To Be Appointed',
    roles: ['Safety Engineers / Officers'],
    responsibility: 'Practical safety leadership, risk management, and responsible site practices aligned to project requirements.',
  },
  {
    number: '05',
    name: 'Business Development',
    lead: 'Business Development Manager',
    status: 'To Be Appointed',
    roles: ['Client Relations', 'Proposals & Marketing'],
    responsibility: 'Strategic client engagement, opportunity development, and clear communication of FAHEEM capabilities.',
  },
  {
    number: '06',
    name: 'Finance & Administration',
    lead: 'Finance Manager',
    status: 'To Be Appointed',
    roles: ['Administration', 'Document Control'],
    responsibility: 'Sound commercial administration, document governance, and the operational foundations for scalable delivery.',
  },
]

const leadership = [
  { label: 'Founder', name: 'Mohamed Haneefa Fozul Rahuman', note: 'Founder & Senior Consultant' },
  { label: 'Chief Executive Officer', name: 'Mohammed Mansoor', note: 'Future Appointment' },
]

export default function OrganizationChart() {
  return (
    <main className="organization-chart">
      <section className="organization-chart-hero">
        <div className="organization-chart-hero-copy">
          <p className="organization-chart-eyebrow">FAHEEM / ORGANIZATION</p>
          <h1>Structured for Engineering Excellence</h1>
          <p>A scalable organization model designed to support quality-driven consultancy, project delivery, engineering services, and long-term regional growth.</p>
        </div>
        <div className="organization-chart-hero-seal" aria-hidden="true">
          <span>FAHEEM</span>
          <strong>01</strong>
          <small>Engineering<br />Consultancy</small>
        </div>
      </section>

      <section className="organization-chart-section" aria-labelledby="organization-chart-title">
        <div className="organization-chart-heading">
          <p>Organization model</p>
          <h2 id="organization-chart-title">Clear leadership. Specialist functions. Scalable delivery.</h2>
          <span>Roles shown as future appointments are planned positions and are not represented as currently filled.</span>
        </div>

        <div className="organization-chart-diagram">
          <motion.article className="organization-chart-leadership-card organization-chart-founder" initial={false} animate={{ y: [0, -3, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
            <p>{leadership[0].label}</p>
            <h3>{leadership[0].name}</h3>
            <span>{leadership[0].note}</span>
          </motion.article>

          <div className="organization-chart-connector organization-chart-connector-vertical" aria-hidden="true" />

          <motion.article className="organization-chart-leadership-card organization-chart-ceo" initial={false} animate={{ boxShadow: ['0 16px 38px rgba(0, 0, 0, 0.24)', '0 20px 48px rgba(213, 175, 91, 0.18)', '0 16px 38px rgba(0, 0, 0, 0.24)'] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
            <p>{leadership[1].label}</p>
            <h3>{leadership[1].name}</h3>
            <span className="organization-chart-status">{leadership[1].note}</span>
          </motion.article>

          <div className="organization-chart-connector organization-chart-connector-branch" aria-hidden="true" />

          <div className="organization-chart-department-grid">
            {departments.map((department, index) => (
              <motion.article
                className="organization-chart-department-card"
                key={department.name}
                initial={false}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.24, delay: index * 0.035 }}
              >
                <div className="organization-chart-department-topline">
                  <span>{department.number}</span>
                  <em>{department.status}</em>
                </div>
                <h3>{department.name}</h3>
                <div className="organization-chart-role-lead">{department.lead}</div>
                <ul>
                  {department.roles.map((role) => <li key={role}>{role}</li>)}
                </ul>
                <p>{department.responsibility}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="organization-chart-section organization-chart-leadership-summary">
        <div className="organization-chart-heading">
          <p>Leadership summary</p>
          <h2>Senior direction with a deliberate growth path.</h2>
        </div>
        <div className="organization-chart-summary-copy">
          <p>FAHEEM is founder-led today, with a planned executive structure that can expand responsibly as client requirements, project scale, and regional opportunities grow.</p>
          <p>The model connects specialist technical functions to a single quality-led delivery standard—while keeping accountability, communication, and client confidence clear.</p>
        </div>
      </section>

      <section className="organization-chart-section" aria-labelledby="department-responsibilities-title">
        <div className="organization-chart-heading">
          <p>Department responsibilities</p>
          <h2 id="department-responsibilities-title">Functions aligned around dependable outcomes.</h2>
        </div>
        <div className="organization-chart-responsibility-grid">
          {departments.map((department) => (
            <motion.article className="organization-chart-responsibility-card" key={department.name} initial={false} whileHover={{ y: -4 }} transition={{ duration: 0.22 }}>
              <span>{department.number}</span>
              <div>
                <h3>{department.name}</h3>
                <p>{department.responsibility}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="organization-chart-growth">
        <p>Future growth</p>
        <h2>Designed to scale with disciplined governance.</h2>
        <span>Appointments will be made in line with business needs, client commitments, and the technical requirements of each future division.</span>
      </section>

      <section className="organization-chart-cta">
        <p>Engineering partnership</p>
        <h2>Discuss a quality-led delivery model for your next project.</h2>
        <a className="button button-primary" href="mailto:fozulur@yahoo.com">Contact FAHEEM</a>
      </section>
    </main>
  )
}
