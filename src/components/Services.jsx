import { useRef } from 'react'

const services = [
  {
    title: 'Teeth Whitening',
    desc: 'Personalized care. Trusted treatments. From whitening to implants, we\'ve got every smile covered. Explore our most-requested dental services.',
    bg: '#ddd6f5',
    height: 480,
    png: 'https://cdn3d.iconscout.com/3d/premium/thumb/tooth-3d-icon-download-in-png-blend-fbx-gltf-file-formats--dental-care-healthy-teeth-pack-healthcare-medical-icons-5684226.png',
  },
  {
    title: 'Braces',
    desc: 'Personalized care. Trusted treatments. From whitening to implants, we\'ve got every smile covered.',
    bg: '#c8cff5',
    height: 420,
    png: 'https://cdn3d.iconscout.com/3d/premium/thumb/dental-braces-3d-icon-download-in-png-blend-fbx-gltf-file-formats--teeth-orthodontic-treatment-pack-healthcare-medical-icons-5684234.png',
  },
  {
    title: 'Invisalign',
    desc: 'Personalized care. Trusted treatments. From whitening to implants, we\'ve got every smile covered.',
    bg: '#c8f0d8',
    height: 360,
    png: 'https://cdn3d.iconscout.com/3d/premium/thumb/dental-implant-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tooth-implants-dentist-pack-healthcare-medical-icons-5684228.png',
  },
  {
    title: 'Root Canal',
    desc: 'Personalized care. Trusted treatments. From whitening to implants, we\'ve got every smile covered.',
    bg: '#f5e6c8',
    height: 300,
    png: 'https://cdn3d.iconscout.com/3d/premium/thumb/dental-mirror-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tool-dentist-pack-healthcare-medical-icons-5684237.png',
  },
  {
    title: 'Dental Implants',
    desc: 'Personalized care. Trusted treatments. From whitening to implants, we\'ve got every smile covered.',
    bg: '#f5d6d6',
    height: 260,
    png: 'https://cdn3d.iconscout.com/3d/premium/thumb/toothbrush-3d-icon-download-in-png-blend-fbx-gltf-file-formats--teeth-cleaning-dental-care-pack-healthcare-medical-icons-5684232.png',
  },
]

export default function Services() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section style={{ backgroundColor: '#fafafa', padding: '80px 0 100px' }}>
      {/* Header */}
      <div style={{ padding: '0 48px', marginBottom: '16px' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 900,
          color: '#111',
          lineHeight: 1.05,
          marginBottom: '12px',
        }}>
          Our core <em style={{ fontStyle: 'italic' }}>dental</em> services
        </h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, maxWidth: '420px' }}>
            Personalized care. Trusted treatments. From whitening to implants, we've got every smile covered. Explore our most-requested dental services.
          </p>
          {/* Arrow buttons */}
          <div style={{ display: 'flex', gap: '12px', paddingRight: '48px' }}>
            <button onClick={() => scroll(-1)} style={arrowBtn}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={() => scroll(1)} style={{ ...arrowBtn, backgroundColor: '#111', color: '#fff' }}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: '20px',
          overflowX: 'auto',
          padding: '40px 48px 12px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: 'grab',
        }}
        onMouseDown={(e) => {
          const el = scrollRef.current
          let startX = e.pageX - el.offsetLeft
          let scrollLeft = el.scrollLeft
          const onMove = (ev) => {
            const x = ev.pageX - el.offsetLeft
            el.scrollLeft = scrollLeft - (x - startX)
          }
          const onUp = () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
          }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseup', onUp)
        }}
      >
        {services.map((s) => (
          <div
            key={s.title}
            style={{
              flex: '0 0 300px',
              height: `${s.height}px`,
              backgroundColor: s.bg,
              borderRadius: '24px',
              padding: '28px 24px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.25s ease',
              userSelect: 'none',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {/* PNG illustration */}
            <img
              src={s.png}
              alt={s.title}
              draggable={false}
              style={{
                position: 'absolute',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '160px',
                height: '160px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            />
            {/* Text at bottom */}
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '22px',
              fontWeight: 700,
              color: '#111',
              marginBottom: '10px',
              textAlign: 'center',
            }}>
              {s.title}
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#444',
              lineHeight: 1.65,
              textAlign: 'center',
            }}>
              {s.desc}
            </p>
          </div>
        ))}

        {/* Trailing spacer */}
        <div style={{ flex: '0 0 28px' }} />
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}

const arrowBtn = {
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  border: '1.5px solid #ddd',
  backgroundColor: '#fff',
  color: '#111',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background 0.2s',
}
