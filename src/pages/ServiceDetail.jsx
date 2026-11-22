import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { services } from '../data/content'
import { waLink } from '../data/siteInfo'
import heroImage from '../assets/hero (1).jpg'

export default function ServiceDetail() {
  const { slug } = useParams()
  const s = services.find((x) => x.slug === slug)
  if (!s) return <Navigate to="/services" replace />
  const others = services.filter((x) => x.slug !== slug)

  return (
    <>
      <SEO title={`${s.title} | Nivora Digital`} description={s.short} />
      <PageHeader title={s.title} text={s.tag} />
      <section className="section">
        <div className="container detail-grid">
          <Reveal>
            <img
              className="detail-img"
              src={s.image || heroImage}
              alt={s.alt || s.title}
            />
            <h2>{s.heading}</h2>
            <p className="muted-text">{s.longText}</p>
            <div className="hero-btns" style={{ marginTop: 28 }}>
              <Link to="/contact" className="btn">Contact Us</Link>
              <a href={waLink(`Hello Nivora Digital, I am interested in ${s.title}.`)}
                 target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </Reveal>
          <aside className="detail-side">
            <h3>Other Services</h3>
            {others.map((o) => (
              <Link key={o.slug} to={`/services/${o.slug}`}>{o.title}</Link>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}