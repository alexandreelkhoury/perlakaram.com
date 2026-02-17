import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1A', color: '#A8C5B8', fontFamily: "'Jost', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2.5rem,6vw,4rem) clamp(1.25rem,4vw,2rem) 2.5rem' }}>

        {/* Top grid — footer-grid: column on mobile, auto-fit on sm+ (responsive.css) */}
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
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C4785A', marginBottom: '1.25rem' }}>
              Psychologue Clinicienne
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#8FAF9F', maxWidth: '280px' }}>
              Un espace de bienveillance et de confiance pour vous accompagner vers le mieux-être.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5EFE6', marginBottom: '1.25rem', fontWeight: 500 }}>
              Navigation
            </h4>
            {[
              { to: '/',         label: 'Accueil' },
              { to: '/about',    label: 'À Propos' },
              { to: '/services', label: 'Accompagnements' },
              { to: '/contact',  label: 'Contact & RDV' },
            ].map(({ to, label }) => (
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
            <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F5EFE6', marginBottom: '1.25rem', fontWeight: 500 }}>
              Contact
            </h4>
            {[
              { icon: '📍', text: '12 Rue de la Paix, 75001 Paris' },
              { icon: '📞', text: '+33 6 00 00 00 00' },
              { icon: '✉️', text: 'contact@perla-psychologue.fr' },
              { icon: '🕐', text: 'Lun–Ven · 9h–19h' },
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
            © {new Date().getFullYear()} Perla — Psychologue Clinicienne. Tous droits réservés.
          </p>
          <p style={{ fontSize: '0.75rem', color: '#4A4A48' }}>
            Membre de la Fédération Française de Psychologie
          </p>
        </div>
      </div>
    </footer>
  )
}
