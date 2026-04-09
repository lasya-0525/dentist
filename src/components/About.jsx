import React from 'react'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80',
    alt: 'Smile close-up',
    style: { height: '220px', width: '180px', borderRadius: '12px', objectFit: 'cover' },
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80',
    alt: 'Dental procedure',
    style: { height: '180px', width: '160px', borderRadius: '12px', objectFit: 'cover', alignSelf: 'flex-end', marginBottom: '20px' },
  },
  {
    src: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80',
    alt: 'Dentist at work',
    style: { height: '200px', width: '170px', borderRadius: '12px', objectFit: 'cover' },
  },
]

export default function About() {
  return (
    <section style={styles.section} id="service">
      <div style={styles.photosLeft}>
        {photos.slice(0, 1).map(p => (
          <img key={p.alt} src={p.src} alt={p.alt} style={p.style} />
        ))}
      </div>

      <div style={styles.center}>
        <p style={styles.label}>( About Us )</p>
        <h2 style={styles.heading}>
          Care<span style={styles.dash}>-</span>
          <em style={styles.italic}>first.</em>
          <br />
          Smile<span style={styles.dash}>-</span>
          <em style={styles.italicGreen}>always.</em>
        </h2>
        <p style={styles.body}>
          We don't believe in one-size-fits-all dentistry. At Smilix, every patient receives thoughtful care — built on their goals, lifestyle, and comfort.
        </p>
      </div>

      <div style={styles.photosRight}>
        {photos.slice(1).map(p => (
          <img key={p.alt} src={p.src} alt={p.alt} style={p.style} />
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#fff',
    padding: '100px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '48px',
    flexWrap: 'wrap',
  },
  photosLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  photosRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-end',
  },
  center: {
    maxWidth: '320px',
    textAlign: 'left',
  },
  label: {
    fontSize: '13px',
    color: '#888',
    marginBottom: '16px',
    letterSpacing: '0.5px',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(32px, 4vw, 52px)',
    fontWeight: 900,
    lineHeight: 1.1,
    color: '#111',
    marginBottom: '20px',
  },
  dash: {
    color: '#111',
    fontStyle: 'normal',
  },
  italic: {
    fontStyle: 'italic',
    color: '#111',
  },
  italicGreen: {
    fontStyle: 'italic',
    color: '#1a8a6e',
  },
  body: {
    fontSize: '14px',
    color: '#666',
    lineHeight: 1.7,
  },
}
