import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { intro } from '../data/content'

export default function Introduction() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Welcome" title={intro.title} text={intro.text} />
        </Reveal>
      </div>
    </section>
  )
}