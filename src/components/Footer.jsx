import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { lang, t } = useLang()
  const bodyFont = lang === 'ar' ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const isAr = lang === 'ar'

  return (
    <footer style={{ background: '#1C1C1A', color: '#A8C5B8', fontFamily: bodyFont }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2.5rem,6vw,4rem) clamp(1.25rem,4vw,2rem) 2.5rem' }}>

        <div className="footer-grid" style={{
          marginBottom: '2.5rem',
          borderBottom: '1px solid rgba(168,197,184,0.15)',
          paddingBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontStyle: 'italic', fontWeight: 500, color: '#F5EFE6', marginBottom: '0.5rem' }}>
              Perla
            </div>
            <div style={{ fontSize: '0.65rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: '#C4785A', marginBottom: '1.25rem' }}>
              {t.nav.subtitle}
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#8FAF9F', maxWidth: '280px' }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: isAr ? '0.04em' : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: '#F5EFE6', marginBottom: '1.25rem', fontWeight: 500 }}>
              {t.footer.navTitle}
            </h4>
            {t.footer.navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                display: 'block', textDecoration: 'none',
                fontSize: '0.85rem', color: '#8FAF9F',
                marginBottom: '0.65rem', transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.target.style.color = '#C4785A'}
              onMouseLeave={e => e.target.style.color = '#8FAF9F'}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: isAr ? '0.04em' : '0.18em', textTransform: isAr ? 'none' : 'uppercase', color: '#F5EFE6', marginBottom: '1.25rem', fontWeight: 500 }}>
              {t.footer.contactTitle}
            </h4>
            {[
              { icon: '📍', text: t.contact.address.lines[0] + ', ' + t.contact.address.lines[1] },
              { icon: '📞', text: t.contact.phone.lines[0] },
              { icon: '✉️', text: t.contact.email.lines[0] },
              { icon: '🕐', text: t.contact.hours.lines[0] },
            ].map(({ icon, text }) => (
              <div key={text} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.65rem', fontSize: '0.85rem', color: '#8FAF9F', alignItems: 'flex-start' }}>
                <span style={{ flexShrink: 0, fontSize: '0.9rem', marginTop: '1px' }}>{icon}</span>
                <span style={{ lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: '#4A4A48' }}>
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <p style={{ fontSize: '0.75rem', color: '#4A4A48' }}>
            {t.footer.member}
          </p>
        </div>
      </div>
    </footer>
  )
}
