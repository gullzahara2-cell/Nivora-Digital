import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { site, waLink } from '../data/siteInfo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src={logo} alt="Nivora Digital logo" className="footer-logo" />
          <p className="muted">Nivora Digital</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
          <a href={waLink()} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
          <span className="muted">{site.address}</span>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
    </footer>
  )
}