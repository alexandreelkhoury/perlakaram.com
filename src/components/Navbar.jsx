import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLang } from '../context/LangContext'

const SAGE = '#3D5A4E'
const TERR = '#A0856C'
const CREAM = '#F5EFE6'
const BLUSH = '#D4C4B0'

const LANG_OPTIONS = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'ع' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t } = useLang()

  const LINKS = [
    { to: '/',         label: t.nav.home },
    { to: '/about',    label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/blog',     label: t.nav.blog },
    { to: '/contact',  label: t.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const logoColor  = SAGE
  const subColor   = TERR
  const linkColor  = SAGE
  const linkActive = TERR
  const barColor   = SAGE

  const bodyFont = lang === 'ar' ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const isAr = lang === 'ar'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.45s cubic-bezier(0.22,1,0.36,1)',
      background: 'rgba(254,250,245,0.94)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(61,90,78,0.12)',
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
            color: logoColor, letterSpacing: '0.01em', lineHeight: 1,
            transition: 'color 0.45s ease',
          }}>
            Perla Karam
          </span>
          <span style={{
            display: 'block', fontFamily: bodyFont,
            fontSize: '0.58rem', letterSpacing: isAr ? '0.04em' : '0.22em',
            textTransform: isAr ? 'none' : 'uppercase',
            color: subColor, marginTop: '2px', fontWeight: 400,
            transition: 'color 0.45s ease',
          }}>
            {t.nav.subtitle}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ alignItems: 'center', gap: '1.75rem' }}>
          {LINKS.map(({ to, label }) => {
            const active = location.pathname === to
            return (
              <Link key={to} to={to} style={{
                textDecoration: 'none', fontFamily: bodyFont,
                fontSize: '0.78rem',
                letterSpacing: isAr ? '0.02em' : '0.12em',
                textTransform: isAr ? 'none' : 'uppercase',
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

          {/* Language switcher */}
          <div style={{ display: 'flex', gap: '2px' }}>
            {LANG_OPTIONS.map(({ code, label }) => {
              const isActive = lang === code
              return (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: '0.65rem', letterSpacing: '0.06em',
                    padding: '0.28rem 0.55rem',
                    cursor: 'pointer', transition: 'all 0.25s ease',
                    background: isActive ? SAGE : 'transparent',
                    color: isActive ? CREAM : 'rgba(61,90,78,0.55)',
                    border: `1px solid ${isActive ? SAGE : 'rgba(61,90,78,0.18)'}`,
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <Link to="/contact" style={{
            display: 'inline-block', textDecoration: 'none',
            fontFamily: bodyFont, fontSize: '0.72rem',
            letterSpacing: isAr ? '0.02em' : '0.14em',
            textTransform: isAr ? 'none' : 'uppercase',
            padding: '0.6rem 1.5rem',
            transition: 'background 0.35s ease, color 0.35s ease, border-color 0.35s ease',
            background: SAGE, color: CREAM, border: `1.5px solid ${SAGE}`,
          }}>
            {t.nav.cta}
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
              background: barColor, transition: 'all 0.3s ease',
              transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)' :
                         menuOpen && i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: 'hidden', maxHeight: menuOpen ? '420px' : '0',
        transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
        background: 'rgba(254,250,245,0.98)',
        borderTop: menuOpen ? '1px solid rgba(61,90,78,0.1)' : 'none',
      }}>
        <div style={{ padding: '1rem 2rem 1.5rem' }}>
          {LINKS.map(({ to, label }, i) => (
            <Link key={to} to={to} style={{
              display: 'block', textDecoration: 'none',
              fontFamily: bodyFont, fontSize: '0.9rem',
              letterSpacing: isAr ? '0.02em' : '0.1em',
              textTransform: isAr ? 'none' : 'uppercase',
              color: SAGE, padding: '0.85rem 0',
              borderBottom: i < LINKS.length - 1 ? '1px solid rgba(61,90,78,0.08)' : 'none',
            }}>
              {label}
            </Link>
          ))}
          <Link to="/contact" className="btn-sage" style={{ marginTop: '1.25rem', textAlign: 'center', display: 'block' }}>
            {t.nav.ctaFull}
          </Link>

          {/* Language switcher in mobile */}
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.25rem', justifyContent: 'center' }}>
            {LANG_OPTIONS.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '0.78rem', letterSpacing: '0.08em',
                  padding: '0.45rem 1.1rem',
                  cursor: 'pointer', transition: 'all 0.25s ease',
                  background: lang === code ? SAGE : 'transparent',
                  color: lang === code ? CREAM : SAGE,
                  border: `1px solid ${lang === code ? SAGE : 'rgba(61,90,78,0.25)'}`,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
