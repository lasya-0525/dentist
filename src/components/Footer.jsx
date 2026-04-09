import React from 'react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <div>
          <p style={styles.logo}>Smilix</p>
          <p style={styles.tagline}>Confident smiles, expert care.</p>
        </div>
        <div style={styles.cols}>
          {[
            { title: 'Services', links: ['Teeth Whitening', 'Braces', 'Implants', 'Root Canal'] },
            { title: 'Company', links: ['About Us', 'Our Doctors', 'Blog', 'Careers'] },
            { title: 'Contact', links: ['hello@smilix.com', '+1 (555) 000-1234', '123 Dental Ave, NY'] },
          ].map(col => (
            <div key={col.title}>
              <p style={styles.colTitle}>{col.title}</p>
              {col.links.map(l => <p key={l} style={styles.colLink}>{l}</p>)}
            </div>
          ))}
        </div>
      </div>
      <div style={styles.bottom}>
        <p style={styles.copy}>© 2026 Smilix. All rights reserved.</p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '64px 48px 32px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '40px',
    marginBottom: '48px',
  },
  logo: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '24px',
    fontWeight: 700,
    color: '#2d8f6f',
    marginBottom: '8px',
  },
  tagline: {
    fontSize: '13px',
    color: '#888',
  },
  cols: {
    display: 'flex',
    gap: '48px',
    flexWrap: 'wrap',
  },
  colTitle: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    color: '#aaa',
    marginBottom: '14px',
  },
  colLink: {
    fontSize: '13px',
    color: '#666',
    marginBottom: '8px',
    cursor: 'pointer',
  },
  bottom: {
    borderTop: '1px solid #222',
    paddingTop: '24px',
  },
  copy: {
    fontSize: '12px',
    color: '#555',
  },
}
