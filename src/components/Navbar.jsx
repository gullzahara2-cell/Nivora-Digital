import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Nivora Digital logo" className="nav-logo" />
        </Link>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => {
            return (
              <NavLink
                key={link.to}
                to={link.to}
                end
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            )
          })}
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}