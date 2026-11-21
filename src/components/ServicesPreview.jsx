import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { services } from '../data/content'

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="What We Do" title="Our Services" />
        </Reveal>
        <div className="card-grid">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <Link to={`/services/${s.slug}`} className="card">
                <div className="card-image">
                  <img src={s.image} alt={s.alt || s.title} />
                </div>
                <span className="card-tag">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="card-link">View Details →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}