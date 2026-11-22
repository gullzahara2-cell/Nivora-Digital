import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import './Hero.css'
import heroImage from '../assets/hero.jpg'

const fade = (d) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d },
})

export default function Hero() {
  return (
    <section className="nv-hero">
      <motion.div
        className="nv-hero__bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        aria-hidden="true"
      >
        <img src={heroImage} alt="" />
      </motion.div>

      <div className="nv-hero__inner">
        <motion.span className="nv-hero__eyebrow" {...fade(0)}>
          Digital · Strategy · Growth
        </motion.span>

        <motion.h1 className="nv-hero__title" {...fade(0.15)}>
          Your Brand.
          <br />
          <span>Elevated Online.</span>
        </motion.h1>

        <motion.p className="nv-hero__text" {...fade(0.3)}>
          Nivora Digital helps businesses build a strong, professional presence
          online, from websites and branding to SEO and growth strategy.
        </motion.p>

        <motion.div className="nv-hero__btns" {...fade(0.45)}>
          <Link to="/services" className="nv-hero__btn nv-hero__btn--gold">
            Explore Our Services
          </Link>
          <Link to="/contact" className="nv-hero__btn nv-hero__btn--light">
            Let&apos;s Talk
          </Link>
        </motion.div>

        <motion.ul className="nv-hero__points" {...fade(0.6)}>
          <li>Strategic approach</li>
          <li>Clear communication</li>
          <li>Tailored solutions</li>
        </motion.ul>
      </div>
    </section>
  )
}