import React from 'react'

const tags = [
  { label: 'Fast Fix', color: '#f9c846', top: '18%', left: '6%', rotate: '-10deg' },
  { label: 'Glowing Teeth', color: '#b8f5b0', top: '35%', left: '2%', rotate: '-6deg' },
  { label: 'No Pain', color: '#f9c846', top: '14%', right: '8%', rotate: '8deg' },
  { label: 'More Smiles', color: '#c8f5f0', top: '32%', right: '4%', rotate: '5deg' },
]

export default function Hero() {
  return (
    <section style={styles.section} id="product">
      <div style={styles.circle} />

      {tags.map(tag => (
        <span
          key={tag.label}
          style={{
            ...styles.tag,
            backgroundColor: tag.color,
            top: tag.top,
            left: tag.left,
            right: tag.right,
            transform: `rotate(${tag.rotate})`,
          }}
        >
          {tag.label}
        </span>
      ))}

      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.headingBlack}>Confident</span>
          <br />
          <span style={styles.headingItalic}>Smile.Smarter</span>
          <br />
          <span style={styles.headingYellow}>Care.</span>
        </h1>
      </div>

      <div style={styles.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=500&q=80"
          alt="Happy patient"
          style={styles.image}
        />
      </div>

      <div style={styles.cta}>
        <div style={styles.ctaBar}>
          <span style={styles.ctaText}>BOOK APPOINTMENT</span>
          <button style={styles.ctaBtn}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    position: 'relative',
    minHeight: '90vh',
    backgroundColor: '#fff',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '60px',
    paddingBottom: '80px',
  },
  circle: {
    position: 'absolute',
    width: '540px',
    height: '540px',
    borderRadius: '50%',
    backgroundColor: '#f5f07a',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -58%)',
    zIndex: 0,
  },
  tag: {
    position: 'absolute',
    padding: '8px 18px',
    borderRadius: '999px',
    fontSize: '13px',
    fontWeight: 600,
    zIndex: 10,
    fontFamily: 'Inter, sans-serif',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  content: {
    position: 'relative',
    zIndex: 5,
    textAlign: 'center',
  },
  heading: {
    lineHeight: 1.05,
    letterSpacing: '-1px',
  },
  headingBlack: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(48px, 7vw, 88px)',
    fontWeight: 900,
    color: '#111',
  },
  headingItalic: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(48px, 7vw, 88px)',
    fontStyle: 'italic',
    fontWeight: 700,
    color: '#1a8a6e',
  },
  headingYellow: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(48px, 7vw, 88px)',
    fontWeight: 900,
    color: '#f5c842',
  },
  imageWrapper: {
    position: 'relative',
    zIndex: 5,
    marginTop: '-20px',
    width: '360px',
    maxWidth: '90vw',
  },
  image: {
    width: '100%',
    borderRadius: '200px 200px 0 0',
    objectFit: 'cover',
    height: '420px',
    objectPosition: 'top',
  },
  cta: {
    position: 'relative',
    zIndex: 5,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  ctaBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: '999px',
    padding: '16px 20px 16px 32px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
    width: '340px',
    maxWidth: '90vw',
  },
  ctaText: {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    color: '#333',
  },
  ctaBtn: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#111',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
}
