import { useState } from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { site, waLink } from '../data/siteInfo'
import { services } from '../data/content'

const FORM_URL = 'https://formspree.io/f/YOUR_FORM_ID' // Formspree se milega

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.target
    setStatus('sending')
    try {
      const res = await fetch(FORM_URL, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
      if (res.ok) { setStatus('success'); form.reset() } else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <>
      <SEO title="Contact Us | Nivora Digital" description="Contact Nivora Digital by form, email or WhatsApp." />
      <PageHeader title="Contact Us" text="Let's talk" />
      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
              <span>{site.address}</span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <form className="form" onSubmit={onSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" />
              <label htmlFor="service">Service</label>
              <select id="service" name="service">
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
              </select>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />
              <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
              <button className="btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && <p className="form-msg ok">Thank you! Your message has been sent.</p>}
              {status === 'error' && <p className="form-msg err">Something went wrong. Please try again or use WhatsApp.</p>}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}