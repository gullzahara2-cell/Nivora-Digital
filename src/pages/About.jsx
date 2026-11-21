import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Introduction from '../components/Introduction'
import Reveal from '../components/Reveal'
import logo from '../assets/logo.png'
import { about } from '../data/content'

export default function About() {
  return (
    <>
      <SEO title="About Us | Nivora Digital" description="Nivora Digital is a modern business solutions agency helping brands grow locally and globally." />
      <PageHeader title="About Us" text="Nivora Digital" />
      <Introduction />
      <section className="section alt">
        <div className="container about-grid">
          <Reveal>
            <div className="about-visual"><img src={logo} alt="Nivora Digital emblem" /></div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2>{about.title}</h2>
            <p className="muted-text">{about.text}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}