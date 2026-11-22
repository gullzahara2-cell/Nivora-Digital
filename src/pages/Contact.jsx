import { useState } from 'react'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { site, waLink } from '../data/siteInfo'
import { services } from '../data/content'

const FORM_URL = 'https://formspree.io/f/YOUR_FORM_ID' // formspree.io se asli ID yahan daalein
const HOURS = 'Mon – Sat, 10:00 AM – 7:00 PM' // apne asli timing likhein, ya '' kar dein to card nahi dikhega

const icons = {
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l1.9-5.4A8.4 8.4 0 1 1 21 11.5z" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
}

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
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <SEO
        title="Contact Us | Nivora Digital"
        description="Contact Nivora Digital by form, email or WhatsApp."
      />

      <div className="contact-hero">
        <PageHeader title="Contact Us" text="Let's talk" />
      </div>

      <section className="section contact-page">
        <div className="container contact-grid">
          <Reveal>
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="muted-text">
                Have a project in mind? Send us a message and we'll reply within 24 hours.
              </p>

              <a className="contact-item" href={`mailto:${site.email}`}>
                <span className="ci-icon">{icons.mail}</span>
                <span>
                  <strong>Email</strong>
                  <span className="ci-value">{site.email}</span>
                </span>
              </a>

              <a className="contact-item" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                <span className="ci-icon">{icons.phone}</span>
                <span>
                  <strong>Phone</strong>
                  <span className="ci-value">{site.phone}</span>
                </span>
              </a>

              {site.address && (
                <div className="contact-item">
                  <span className="ci-icon">{icons.pin}</span>
                  <span>
                    <strong>Address</strong>
                    <span className="ci-value">{site.address}</span>
                  </span>
                </div>
              )}

              {HOURS && (
                <div className="contact-item">
                  <span className="ci-icon">{icons.clock}</span>
                  <span>
                    <strong>Working hours</strong>
                    <span className="ci-value">{HOURS}</span>
                  </span>
                </div>
              )}

              <div className="contact-points">
                <span>✓ Free consultation</span>
                <span>✓ Fast reply</span>
                <span>✓ Worldwide service</span>
              </div>

              <a className="contact-wa" href={waLink()} target="_blank" rel="noopener noreferrer">
                {icons.chat}
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" placeholder="+92 300 0000000" />
              </div>

              <div className="field">
                <label htmlFor="service">Service</label>
                <select id="service" name="service">
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div className="field full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project" required />
              </div>

              <input
                type="text"
                name="_gotcha"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <button className="btn contact-submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <p className="form-msg ok">Thank you! Your message has been sent.</p>
              )}
              {status === 'error' && (
                <p className="form-msg err">
                  Something went wrong. Please try again or use WhatsApp.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}