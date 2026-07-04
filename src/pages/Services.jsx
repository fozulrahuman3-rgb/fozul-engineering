import { services } from '../data/services'

export default function Services() {
  return (
    <section className="section" id="services-page">
      <h2>Services</h2>
      <p>Services page scaffold.</p>
      <ul>
        {services.map((service, index) => (
          <li key={`${service.title}-${index}`}>{service.title}</li>
        ))}
      </ul>
    </section>
  )
}
