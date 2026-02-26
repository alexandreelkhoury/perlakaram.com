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
              Perla Karam
            </div>
            <div style={{ fontSize: '0.65rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: '#A0856C', marginBottom: '1.25rem' }}>
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
              onMouseEnter={e => e.target.style.color = '#A0856C'}
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
            {/* Email */}
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.65rem', fontSize: '0.85rem', color: '#8FAF9F', alignItems: 'flex-start' }}>
              <span style={{ flexShrink: 0, fontSize: '0.9rem', marginTop: '1px' }}>✉️</span>
              <a href={`mailto:${t.contact.email.lines[0]}`} style={{ color: '#8FAF9F', textDecoration: 'none', lineHeight: 1.5 }}>
                {t.contact.email.lines[0]}
              </a>
            </div>
            {/* WhatsApp */}
            {t.contact.phone && t.contact.phone.lines.map(num => (
              <div key={num} style={{ display: 'flex', gap: '0.6rem', marginBottom: '0.65rem', fontSize: '0.85rem', color: '#8FAF9F', alignItems: 'flex-start' }}>
                <svg style={{ flexShrink: 0, width: '16px', height: '16px', marginTop: '2px' }} viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <a href={`https://wa.me/${num.replace(/\s/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ color: '#8FAF9F', textDecoration: 'none', lineHeight: 1.5 }}>
                  {num}
                </a>
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
