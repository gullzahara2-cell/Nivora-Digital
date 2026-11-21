import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import './Hero.css'
import heroImage from '../assets/hero.png'

const fade = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: .7, delay: d } })

export default function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-background"
        {...fade(.25)}
        aria-hidden="true"
      >
        <img src={heroImage} alt="" />
      </motion.div>
      <div className="container hero-inner">
        <motion.span className="eyebrow" {...fade(0)}>Digital · Strategy · Growth</motion.span>
        <motion.h1 {...fade(.15)}>Your Brand.<br /><span>Elevated Online.</span></motion.h1>
        <motion.p {...fade(.3)}>
          Nivora Digital helps businesses build a strong, professional presence online.
          [ADD: one-line description of what the agency actually does]
        </motion.p>
        <motion.div className="hero-btns" {...fade(.45)}>
          <Link to="/services" className="btn">Explore Our Services</Link>
          <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
        </motion.div>
        <motion.ul className="hero-points" {...fade(.6)}>
          <li>Professional approach</li>
          <li>Clear communication</li>
          <li>Tailored solutions</li>
        </motion.ul>
      </div>
    </section>
  )
}