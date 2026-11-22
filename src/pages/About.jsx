import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { waLink } from '../data/siteInfo'
import './About.css'

const HANDLE = [
  'E-commerce support',
  'Imports and exports',
  'Logistics and sourcing',
  'Web development',
]

const PILLARS = [
  {
    title: 'Our Mission',
    text: 'To help businesses grow through reliable digital and trading solutions, with every service planned to deliver clarity, efficiency and measurable value.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: 'Our Vision',
    text: 'To be the partner businesses trust to connect them with the right opportunities, locally and globally.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Our Approach',
    text: 'We combine local market understanding with a global business approach, so your next step stays simple, professional and ready for growth.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
      </svg>
    ),
  },
]

const WHY = [
  {
    title: 'Local market knowledge',
    text: 'We understand how the local market works and apply it to every project.',
  },
  {
    title: 'Global business approach',
    text: 'Our processes are built to work for buyers, sellers and partners across borders.',
  },
  {
    title: 'Clear communication',
    text: 'You know what is happening at each stage, with simple and direct updates.',
  },
  {
    title: 'Complete support',
    text: 'From sourcing and logistics to your website, we cover the steps in one place.',
  },
]

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
)

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Nivora Digital"
        description="Nivora Digital helps businesses grow through reliable digital and trading solutions: e-commerce, imports, exports, logistics, sourcing and web development."
      />

      <div className="ab-hero">
        <PageHeader title="About Us" text="Nivora Digital" />
      </div>

      <section className="ab-page ab-intro">
        <div className="container ab-intro__grid">
          <Reveal>
            <h2>We Connect Business with the Right Opportunities</h2>
            <p className="ab-lead">
              Nivora Digital helps businesses grow through reliable digital and
              trading solutions. We provide complete support for e-commerce,
              imports, exports, logistics, sourcing and web development.
            </p>
            <p className="ab-lead">
              Our team combines local market understanding with a global
              business approach. Every service is planned to deliver clarity,
              efficiency and measurable value.
            </p>
            <div className="ab-btns">
              <Link to="/services" className="ab-btn ab-btn--gold">Our Services</Link>
              <Link to="/contact" className="ab-btn ab-btn--ghost">Contact Us</Link>
            </div>
          </Reveal>

          <Reveal>
            <div className="ab-handle">
              <h3>What we handle</h3>
              <ul>
                {HANDLE.map((item) => (
                  <li key={item}>
                    <span className="ab-handle__tick"><Check /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ab-page ab-pillars">
        <div className="container ab-pillars__grid">
          {PILLARS.map((p) => (
            <Reveal key={p.title}>
              <article className="ab-card">
                <span className="ab-card__icon">{p.icon}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ab-page ab-why">
        <div className="container">
          <Reveal>
            <h2 className="ab-why__title">Why work with Nivora Digital</h2>
          </Reveal>
          <div className="ab-why__grid">
            {WHY.map((w) => (
              <Reveal key={w.title}>
                <div className="ab-why__item">
                  <span className="ab-why__tick"><Check /></span>
                  <div>
                    <h3>{w.title}</h3>
                    <p>{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ab-cta">
        <div className="container ab-cta__inner">
          <h2>Ready to take your next step?</h2>
          <p>Tell us what you need and we will reply with a clear plan.</p>
          <div className="ab-btns ab-btns--center">
            <Link to="/contact" className="ab-btn ab-btn--gold">Contact Us</Link>
            <a
              href={waLink('Hello Nivora Digital, I would like to know more about your services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="ab-btn ab-btn--light"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}