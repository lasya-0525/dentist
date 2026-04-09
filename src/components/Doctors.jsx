import React from 'react'

const doctors = [
  {
    name: 'Dr. Floyd Miles',
    title: 'DDS · Orthodontist',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
    bg: '#f0c8a0',
  },
  {
    name: 'Dr. Sarah Chen',
    title: 'DMD · Cosmetic Dentist',
    img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
    bg: '#a8d8c8',
  },
  {
    name: 'Dr. James Park',
    title: 'DDS · Implant Specialist',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80',
    bg: '#b8c8f0',
  },
]

export default function Doctors() {
  return (
    <section style={styles.section} id="appointment">
      <div style={styles.header}>
        <h2 style={styles.heading}>
          Meet the{' '}
          <br />
          <em style={styles.italic}>Smilix</em> Doctor
        </h2>
      </div>

      <div style={styles.grid}>
        {doctors.map((doc, i) => (
          <div key={doc.name} style={{ ...styles.card, backgroundColor: doc.bg }}>
            <img src={doc.img} alt={doc.name} style={styles.docImg} />
            <div style={styles.docInfo}>
              <p style={styles.docName}>{doc.name}</p>
              <p style={styles.docTitle}>{doc.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.ctaRow}>
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
    backgroundColor: '#fff',
    padding: '100px 48px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '52px',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(32px, 4vw, 56px)',
    fontWeight: 900,
    lineHeight: 1.1,
    color: '#111',
  },
  italic: {
    fontStyle: 'italic',
    color: '#111',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '52px',
  },
  card: {
    borderRadius: '20px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  docImg: {
    width: '100%',
    height: '280px',
    objectFit: 'cover',
    objectPosition: 'top',
  },
  docInfo: {
    padding: '20px 24px',
  },
  docName: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '18px',
    fontWeight: 700,
    color: '#111',
    marginBottom: '4px',
  },
  docTitle: {
    fontSize: '13px',
    color: '#555',
  },
  ctaRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  ctaBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: '999px',
    padding: '16px 20px 16px 32px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.14)',
    width: '340px',
    maxWidth: '90vw',
    border: '1px solid #eee',
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
