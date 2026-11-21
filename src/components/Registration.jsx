import { useState } from 'react'
import Reveal from './Reveal'
import { waLink } from '../data/siteInfo'

export default function Registration() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'Digital Marketing',
  })

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const submitRegistration = (event) => {
    event.preventDefault()
    const message = `Hello Nivora Digital! I want to register.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}`
    window.open(waLink(message), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section register-section" id="register">
      <div className="container">
        <Reveal>
          <div className="register-card">
            <div className="register-copy">
              <span className="eyebrow">Registration</span>
              <h2>Start Your Project with Nivora</h2>
              <p>
                Tell us what you need and our team will contact you to discuss
                the best solution for your business.
              </p>
            </div>
            <form className="register-form" onSubmit={submitRegistration}>
              <label>
                Full Name
                <input
                  name="name"
                  value={form.name}
                  onChange={updateField}
                  placeholder="Enter your name"
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  name="phone"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="Enter your phone number"
                  required
                />
              </label>
              <label>
                Interested In
                <select name="service" value={form.service} onChange={updateField}>
                  <option>Digital Marketing</option>
                  <option>Web Development</option>
                  <option>Branding &amp; Design</option>
                  <option>Social Media Management</option>
                </select>
              </label>
              <button type="submit" className="btn register-submit">
                Register Now
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
