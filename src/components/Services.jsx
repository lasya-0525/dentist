import React, { useState } from 'react'

const services = [
  {
    title: 'Teeth Whitening',
    desc: 'Professional whitening treatments that brighten your smile by several shades safely.',
    bg: '#f0d6f5',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&q=80',
  },
  {
    title: 'Braces',
    desc: 'Modern orthodontic solutions from traditional braces to clear aligners for every patient.',
    bg: '#d6e8f5',
    img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&q=80',
  },
  {
    title: 'Implants',
    desc: 'Permanent tooth replacement that looks, feels, and functions just like your natural teeth.',
    bg: '#d6f5e8',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=300&q=80',
  },
  {
    title: 'Root Canal',
    desc: 'Pain-free endodontic treatment to save your natural tooth and relieve discomfort.',
    bg: '#f5f0d6',
    img: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&q=80',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.heading}>
          Our core <em style={styles.italic}>dental</em> services
        </h2>
        <p style={styles.sub}>
          Personalized care. Trusted treatments. From whitening to implants, we've got every smile covered. Explore our most-requested dental services.
        </p>
      </div>

      <div style={styles.grid}>
        {services.map((s, i) => (
          <div
            key={s.title}
            style={{
              ...styles.card,
              backgroundColor: s.bg,
              transform: active === i ? 'scale(1.03)' : 'scale(1)',
              boxShadow: active === i ? '0 12px 40px rgba(0,0,0,0.14)' : '0 2px 12px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(0)}
          >
            <img src={s.img} alt={s.title} style={styles.cardImg} />
            <h3 style={styles.cardTitle}>{s.title}</h3>
            <p style={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#fafafa',
    padding: '100px 48px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '24px',
    marginBottom: '48px',
  },
  heading: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(28px, 4vw, 52px)',
    fontWeight: 900,
    color: '#111',
    lineHeight: 1.1,
    maxWidth: '480px',
  },
  italic: {
    fontStyle: 'italic',
    color: '#111',
  },
  sub: {
    fontSize: '13px',
    color: '#777',
    lineHeight: 1.7,
    maxWidth: '340px',
    paddingTop: '8px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '24px',
  },
  card: {
    borderRadius: '20px',
    padding: '28px 24px',
    cursor: 'pointer',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
  },
  cardImg: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontFamily: 'Playfair Display, serif',
    fontSize: '20px',
    fontWeight: 700,
    marginBottom: '10px',
    color: '#111',
  },
  cardDesc: {
    fontSize: '13px',
    color: '#555',
    lineHeight: 1.6,
  },
}
