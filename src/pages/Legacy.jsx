const coreValues = [
  {
    title: 'Integrity Before Profit',
    text: 'Technical recommendations are made on merit, not convenience. Every judgment favors what is correct over what is easiest to sell.',
  },
  {
    title: 'Engineering Excellence Through Proven Experience',
    text: 'Standards are applied the way they were learned — through direct, quality-critical work on real projects, not theory alone.',
  },
  {
    title: 'Continuous Learning and Innovation',
    text: 'Each project adds to the standard. Methods are reviewed, refined, and improved as practice and technology evolve.',
  },
  {
    title: 'Service That Creates Long-Term Value',
    text: "The measure of a successful engagement is not the invoice. It is whether the client's asset, project, and reputation are stronger after FAHEEM's involvement than before it.",
  },
]

export default function Legacy() {
  return (
    <main className="legacy-page">
      <section className="legacy-hero">
        <p className="legacy-eyebrow">FAHEEM Engineering Consultancy</p>
        <h1>Our Legacy &amp; Future Vision</h1>
        <p className="legacy-lede">A record of what we believe, why we exist, and the standard we intend to carry forward.</p>
      </section>

      <section className="legacy-section" aria-labelledby="legacy-origin-title">
        <p className="legacy-section-eyebrow">Origin</p>
        <h2 id="legacy-origin-title">Twenty-Five Years Before the First Day</h2>
        <p>
          FAHEEM Engineering Consultancy was founded in 2026, following more than twenty-five years of professional
          practice in civil engineering, quality assurance, and quality control across Saudi Arabia and the wider
          GCC region.
        </p>
        <p>
          The company was not established to enter a market. It was established to preserve what a career in
          engineering produces but rarely keeps: the lessons learned on every project, the standards proven under
          real conditions, and the judgment built through decades of quality-critical work.
        </p>
        <p>
          Every completed project carries knowledge with value beyond its own scope. FAHEEM exists to hold that
          knowledge, apply it with discipline, and make it available to the clients, projects, and engineers who
          come next.
        </p>
      </section>

      <section className="legacy-section legacy-section-wide" aria-labelledby="legacy-values-title">
        <p className="legacy-section-eyebrow">Principles</p>
        <h2 id="legacy-values-title">Four Principles, Applied Without Exception</h2>
        <div className="legacy-values-grid">
          {coreValues.map((value) => (
            <article className="legacy-value-card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="legacy-section" aria-labelledby="legacy-vision-title">
        <p className="legacy-section-eyebrow">Vision</p>
        <h2 id="legacy-vision-title">Built to Be Judged Over Decades, Not Quarters</h2>
        <p>
          FAHEEM's vision is to become one of the most trusted international engineering consultancy companies,
          delivering quality-driven engineering solutions across industrial, infrastructure, mining, and energy
          sectors.
        </p>
        <p>
          That is not a growth target measured in quarters. It is a standard earned one project at a time — the
          same way the twenty-five years before FAHEEM's founding were earned: through work that holds up under
          scrutiny, and advice clients can rely on without qualification.
        </p>
      </section>

      <section className="legacy-section" aria-labelledby="legacy-technology-title">
        <p className="legacy-section-eyebrow">Technology</p>
        <h2 id="legacy-technology-title">Technology as a Tool for Judgment, Not a Replacement for It</h2>
        <p>
          Engineering technology will keep changing — inspection tools, data systems, and digital documentation
          will keep evolving long after this page is written. FAHEEM's position on that change is simple:
          technology should strengthen engineering judgment, not substitute for it.
        </p>
        <p>
          As FAHEEM grows, technology will be adopted where it improves the accuracy of inspection, the
          traceability of quality records, and the speed at which clients receive dependable answers. It will not
          be adopted to appear current. It will be adopted when it makes the work more correct.
        </p>
        <p>The standard does not change. The tools used to meet it will.</p>
      </section>

      <section className="legacy-section legacy-leadership" aria-labelledby="legacy-leadership-title">
        <p className="legacy-section-eyebrow">Leadership</p>
        <h3 id="legacy-leadership-title">Mohamed Haneefa Fozul Rahuman</h3>
        <p className="legacy-leadership-role">Founder &amp; Senior Consultant · 25+ Years Experience</p>
        <p>
          Mohamed Haneefa Fozul Rahuman founded FAHEEM Engineering Consultancy in 2026, after more than twenty-five
          years in QA/QC civil engineering across industrial and infrastructure projects in Saudi Arabia and the
          GCC.
        </p>
        <p>
          He leads FAHEEM's technical direction personally, and holds the company's advice to the same standard he
          held his own work to over the past twenty-five years.
        </p>
      </section>

      <section className="legacy-message" aria-labelledby="legacy-message-title">
        <p className="legacy-section-eyebrow">To Those Who Follow</p>
        <h2 id="legacy-message-title">A Message to Future Engineers</h2>
        <p>
          If you join FAHEEM — now or years from now — you inherit more than a company. You inherit a standard
          built through decades of quality-critical work, and a responsibility to uphold it.
        </p>
        <p>
          That responsibility is straightforward: put integrity ahead of convenience, base every recommendation on
          evidence and experience, keep learning as the field changes, and measure your work by the value it
          creates for the people who depend on it.
        </p>
        <p>Projects will change. Technology will change. This standard is not meant to.</p>
      </section>
    </main>
  )
}
