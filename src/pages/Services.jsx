import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { services } from '../data/content'
import { waLink } from '../data/siteInfo'
import './Services.css'

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Nivora Digital"
        description="Explore Nivora Digital services: e-commerce solutions, import and export services, sourcing and web development."
      />

      <div className="sv-hero">
        <PageHeader title="Our Services" text="What we do" />
      </div>

      <section className="sv-page">
        <div className="container">
          <Reveal>
            <p className="sv-intro">
              Choose a service to see how we can help your business source,
              sell and ship with confidence.
            </p>
          </Reveal>

          <div className="sv-grid">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <Link to={`/services/${s.slug}`} className="sv-card">
                  {s.image && (
                    <div className="sv-card__img">
                      <img src={s.image} alt={s.alt || s.title} loading="lazy" />
                    </div>
                  )}
                  <div className="sv-card__body">
                    {s.tag && <span className="sv-card__tag">{s.tag}</span>}
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="sv-card__link">View details</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-cta">
        <div className="container sv-cta__inner">
          <h2>Not sure which service you need?</h2>
          <p>Tell us about your business and we will point you in the right direction.</p>
          <div className="sv-btns">
            <Link to="/contact" className="sv-btn sv-btn--gold">Contact Us</Link>
            <a
              href={waLink('Hello Nivora Digital, I would like help choosing a service.')}
              target="_blank"
              rel="noopener noreferrer"
              className="sv-btn sv-btn--light"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}