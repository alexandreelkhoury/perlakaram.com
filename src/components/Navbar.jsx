import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/',         label: 'Accueil' },
  { to: '/about',    label: 'À Propos' },
  { to: '/services', label: 'Accompagnements' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  /* ── colour tokens that flip with scroll state ─────────────── */
  const logoColor    = scrolled ? '#3D5A4E'              : '#FEFAF5'
  const subColor     = scrolled ? '#C4785A'              : 'rgba(232,196,176,0.85)'
  const linkColor    = scrolled ? '#3D5A4E'              : 'rgba(255,255,255,0.82)'
  const linkActive   = scrolled ? '#C4785A'              : '#E8C4B0'
  const barColor     = scrolled ? '#3D5A4E'              : '#FEFAF5'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.45s cubic-bezier(0.22,1,0.36,1)',
      /* When transparent: dark gradient band so white text is legible over
         both the dark-left AND the cream-right halves of the hero */
      background: scrolled
        ? 'rgba(254,250,245,0.94)'
        : 'linear-gradient(to bottom, rgba(20,35,28,0.42) 0%, rgba(20,35,28,0) 100%)',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom:   scrolled ? '1px solid rgba(61,90,78,0.12)' : 'none',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '72px',
      }}>

        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '1.6rem', fontStyle: 'italic', fontWeight: 500,
            color: logoColor,
            letterSpacing: '0.01em', lineHeight: 1,
            transition: 'color 0.45s ease',
          }}>
            Perla
          </span>
          <span style={{
            display: 'block', fontFamily: "'Jost', sans-serif",
            fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: subColor, marginTop: '2px', fontWeight: 400,
            transition: 'color 0.45s ease',
          }}>
            Psychologue Clinicienne
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop">
          {LINKS.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link key={to} to={to} style={{
                textDecoration: 'none', fontFamily: "'Jost', sans-serif",
                fontSize: '0.78rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                fontWeight: active ? '500' : '400',
                color: active ? linkActive : linkColor,
                transition: 'color 0.35s ease',
                borderBottom: active ? `1.5px solid ${linkActive}` : '1.5px solid transparent',
                paddingBottom: '2px',
              }}>
                {label}
              </Link>
            )
          })}

          {/* CTA: ghost/outline on dark bg, solid sage on light bg */}
          <Link to="/contact" style={{
            display: 'inline-block', textDecoration: 'none',
            fontFamily: "'Jost', sans-serif", fontSize: '0.72rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.6rem 1.5rem',
            transition: 'background 0.35s ease, color 0.35s ease, border-color 0.35s ease, transform 0.25s ease',
            ...(scrolled ? {
              background: '#3D5A4E',
              color: '#F5EFE6',
              border: '1.5px solid #3D5A4E',
            } : {
              background: 'transparent',
              color: '#FEFAF5',
              border: '1.5px solid rgba(255,255,255,0.55)',
            }),
          }}>
            Rendez-vous
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', flexDirection: 'column', gap: '5px' }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block', width: '22px', height: '1.5px',
              background: barColor,
              transition: 'all 0.3s ease',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu — always cream bg so it's readable */}
      <div style={{
        overflow: 'hidden', maxHeight: menuOpen ? '320px' : '0',
        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
        background: 'rgba(254,250,245,0.98)',
        borderTop: menuOpen ? '1px solid rgba(61,90,78,0.1)' : 'none',
      }}>
        <div style={{ padding: '1rem 2rem 1.5rem' }}>
          {LINKS.map(({ to, label }, i) => (
            <Link key={to} to={to} style={{
              display: 'block', textDecoration: 'none',
              fontFamily: "'Jost', sans-serif", fontSize: '0.9rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#3D5A4E', padding: '0.85rem 0',
              borderBottom: i < LINKS.length - 1 ? '1px solid rgba(61,90,78,0.08)' : 'none',
            }}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn-sage" style={{ marginTop: '1.25rem', textAlign: 'center', display: 'block' }}>
            Prendre rendez-vous
          </Link>
        </div>
      </div>
    </nav>
  )
}
