import { motion } from 'motion/react'

function BelowHeroHighlights({
  sectionAnimation,
  dashboardStats,
  whyChooseFozulCards,
  featuredExpertise,
  saudiChevronExperience,
  professionalAchievements,
  whyHireMe,
  SectionHeading,
  PremiumIcon,
}) {
  return (
    <>
      <motion.section
        className="section"
        id="dashboard"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Engineering Dashboard"
          title="Proven expertise spanning 25+ years in industrial engineering"
          subtitle="Comprehensive quality leadership and specialized technical expertise delivered across global industrial and infrastructure projects."
        />

        <div className="dashboard-grid">
          {dashboardStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="dashboard-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="dashboard-value">{stat.value}</div>
              <h3 className="dashboard-label">{stat.label}</h3>
              <p className="dashboard-description">{stat.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="why-fozul"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Why Choose Fozul Engineering"
          title="Technical expertise meets practical site experience"
          subtitle="Comprehensive engineering consultancy with proven results across oil & gas, petrochemical, industrial, and infrastructure sectors."
        />

        <div className="why-fozul-grid">
          {whyChooseFozulCards.map((card, index) => (
            <motion.article
              key={card.id}
              className="why-fozul-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.01 }}
            >
              <div className="why-fozul-header">
                <div className="why-fozul-highlight">{card.highlight}</div>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="featured-expertise"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Featured Expertise"
          title="Specialized Technical Skills"
          subtitle="Deep expertise in concrete investigation, geosynthetic quality assurance, and industrial QA/QC leadership."
        />

        <div className="expertise-grid">
          {featuredExpertise.map((expertise, index) => (
            <motion.div
              key={`expertise-${index}`}
              className="expertise-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="expertise-icon">
                <PremiumIcon name={expertise.icon} />
              </div>
              <h4>{expertise.title}</h4>
              <p>{expertise.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="saudi-chevron-experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="13+ Years Partnership"
          title="Saudi Chevron Concrete Investigation & Repair Experience"
          subtitle="Specialized concrete investigation, structural assessment, and repair consultancy across multiple operational facilities."
        />

        <div className="chevron-specializations">
          {saudiChevronExperience.specializations.map((spec, index) => (
            <motion.article
              key={`spec-${index}`}
              className="specialization-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="spec-header">
                <h4>{spec.name}</h4>
              </div>
              <p className="spec-description">{spec.description}</p>
              <p className="spec-experience">
                <span className="experience-label">Experience:</span> {spec.experience}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="professional-achievements"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Track Record"
          title="Professional Achievements"
          subtitle="Proven results delivering quality leadership and engineering solutions across industrial sectors."
        />

        <div className="achievements-grid">
          {professionalAchievements.map((achievement, index) => (
            <motion.article
              key={`achievement-${index}`}
              className="achievement-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8 }}
            >
              <div className="achievement-metric">{achievement.metric}</div>
              <h4>{achievement.title}</h4>
              <p className="achievement-subtitle">{achievement.subtitle}</p>
              <p className="achievement-description">{achievement.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        id="why-hire-me"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionAnimation}
      >
        <SectionHeading
          eyebrow="Value Proposition"
          title="Why Hire Mohamed Haneefa Fozul Rahuman?"
          subtitle="Strategic leadership, technical expertise, and proven results delivering engineering quality across industrial sectors."
        />

        <div className="hire-reasons-grid">
          {whyHireMe.map((reason, index) => (
            <motion.article
              key={`hire-reason-${index}`}
              className="hire-reason-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <h4>{reason.title}</h4>
              <ul className="hire-points">
                {reason.points.map((point, pointIndex) => (
                  <li key={`${point}-${pointIndex}`}>
                    <span className="check">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  )
}

export default BelowHeroHighlights
