import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const points = [
  {
    title: 'All-in-One Business Support',
    text: 'E-commerce, import, export, logistics, sourcing and web development, all handled by one coordinated team.',
  },
  {
    title: 'Clear communication',
    text: 'Straightforward updates at every stage, so you always know where things stand and what comes next.',
  },
  {
    title: 'Reliable support',
    text: 'We stay involved from the first conversation to final delivery, helping keep your business moving forward.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Why Nivora Digital" title="Why Choose Us" />
        </Reveal>
        <div className="card-grid">
          {points.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card why-card">
                <div className="num">✓</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}