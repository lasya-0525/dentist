import React from 'react'

export default function Banner() {
  return (
    <section style={styles.section}>
      <div style={styles.left}>
        <p style={styles.label}>/ PRECISION CARE /</p>
        <h2 style={styles.heading}>
          Smiles are <em style={styles.italic}>powerful.</em>
          <br />
          Let's help you own yours.
        </h2>
        <p style={styles.body}>
          We believe that great dental care transforms how you experience the world. Let us help you find your smile and the confidence that comes with it. Welcome to Smilix — where precision meets care.
        </p>
      </div>

      <div style={styles.right}>
        <div style={styles.statsCard}>
          <p style={styles.statsLabel}>Smilix from</p>
          <p style={styles.statsNum}>96<span style={styles.pct}>%</span></p>
          <p style={styles.statsDesc}>Patient satisfaction rate across all treatments</p>
        </div>
        <div style={styles.imageBlock}>
          <img
            src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80"
            alt="Braces treatment"
            style={styles.bannerImg}
          />
        </div>
        <div style={styles.textBlock}>
          <p style={styles.blockTitle}>Precision is care. Personalization is power.</p>
          <p style={styles.blockBody}>Every treatment plan is built around you — not a template.</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#1a2240',
    color: '#fff',
    padding: '80px 48px',
    display: 'flex',
    gap: '60px',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  left: {
    flex: '1 1 320px',
    maxWidth: '420px',
  },
  label: {
    fontSize: '11px',
    letterSpacing: '2px',
    color: '#a0a8c0',
    marginBottom: '20px',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(28px, 3.5vw, 48px)',
    fontWeight: 900,
    lineHeight: 1.15,
    marginBottom: '24px',
  },
  italic: {
    fontStyle: 'italic',
  },
  body: {
    fontSize: '14px',
    color: '#a8b0c8',
    lineHeight: 1.7,
  },
  right: {
    flex: '1 1 320px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'auto auto',
    gap: '16px',
  },
  statsCard: {
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '24px',
    color: '#111',
  },
  statsLabel: {
    fontSize: '11px',
    color: '#888',
    marginBottom: '8px',
    letterSpacing: '0.5px',
  },
  statsNum: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '52px',
    fontWeight: 900,
    color: '#111',
    lineHeight: 1,
  },
  pct: {
    fontSize: '28px',
  },
  statsDesc: {
    fontSize: '12px',
    color: '#666',
    marginTop: '8px',
    lineHeight: 1.5,
  },
  imageBlock: {
    borderRadius: '16px',
    overflow: 'hidden',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    minHeight: '160px',
  },
  textBlock: {
    gridColumn: '1 / -1',
    backgroundColor: '#26305a',
    borderRadius: '16px',
    padding: '24px',
  },
  blockTitle: {
    fontSize: '14px',
    fontWeight: 600,
    marginBottom: '8px',
  },
  blockBody: {
    fontSize: '13px',
    color: '#a0a8c0',
    lineHeight: 1.6,
  },
}
