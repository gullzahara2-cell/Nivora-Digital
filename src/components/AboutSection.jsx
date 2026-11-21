import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import logo from '../assets/logo.png'
import { about } from '../data/content'

export default function AboutSection() {
  return (
    <section className="section alt">
      <div className="container about-grid">
        <Reveal>
          <div className="about-visual">
            <img src={logo} alt="Nivora Digital emblem" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="eyebrow">About Us</span>
          <h2>{about.title}</h2>
          <p className="muted-text">{about.text}</p>
          <Link to="/about" className="btn">Learn More</Link>
        </Reveal>
      </div>
    </section>
  )
}