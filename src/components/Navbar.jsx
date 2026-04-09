import React, { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Smilix</div>

      <ul style={{ ...styles.links, ...(menuOpen ? styles.linksOpen : {}) }}>
        {['Product', 'Service', 'Appointment', 'Contact'].map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={styles.link}>{link}</a>
          </li>
        ))}
      </ul>

      <div style={styles.icons}>
        <button style={styles.iconBtn} aria-label="Account">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </button>
        <button style={styles.iconBtn} aria-label="Bag">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span style={styles.bar} />
          <span style={styles.bar} />
          <span style={styles.bar} />
        </button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 48px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f0f0f0',
  },
  logo: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '22px',
    fontWeight: 700,
    color: '#2d8f6f',
    letterSpacing: '-0.5px',
  },
  links: {
    display: 'flex',
    gap: '36px',
    listStyle: 'none',
  },
  linksOpen: {},
  link: {
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: 500,
    color: '#444',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    transition: 'color 0.2s',
  },
  icons: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
    display: 'flex',
    alignItems: 'center',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
  },
  bar: {
    display: 'block',
    width: '22px',
    height: '2px',
    backgroundColor: '#333',
    borderRadius: '2px',
  },
}
