import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

const SAGE     = '#3D5A4E'
const TERR     = '#C4785A'
const CREAM    = '#F5EFE6'
const BLUSH    = '#E8C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

const Eyebrow = ({ children, color }) => (
  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: color || TERR, marginBottom: '1rem' }}>
    {children}
  </p>
)
const Divider = () => <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0' }} />

export default function Services() {
  const { lang, t } = useLang()
  const s = t.services
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── Hero banner ─────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,7rem) 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            {s.heroEyebrow}
          </p>
          <h1 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CREAM,
            lineHeight: 1.2, maxWidth: '700px',
          }}>
            {s.heroTitle}
          </h1>
          <p style={{ fontFamily: bodyFont, fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.7)', maxWidth: '560px', marginTop: '1.5rem' }}>
            {s.heroP}
          </p>
        </div>
      </div>

      {/* ── Services list ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5px' }}>
          {s.services.map((svc, i) => (
            <div key={svc.number} className="card-lift" style={{
              background: i % 2 === 0 ? WARM : CREAM,
              padding: 'clamp(1.5rem,4vw,3.5rem)',
              borderLeft: `4px solid ${i % 2 === 0 ? SAGE : TERR}`,
            }}>
              <div className="service-card-grid">
                {/* Left */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: displayFont, fontSize: '3rem', fontWeight: 300, color: 'rgba(61,90,78,0.2)', lineHeight: 1 }}>
                      {svc.number}
                    </span>
                    <div>
                      <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.25rem' }}>{svc.icon}</span>
                    </div>
                  </div>
                  <h2 style={{ fontFamily: displayFont, fontSize: '1.8rem', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 500, color: CHARCOAL, marginBottom: '0.25rem' }}>
                    {svc.title}
                  </h2>
                  <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.12em', textTransform: isAr ? 'none' : 'uppercase', color: TERR, marginBottom: '1rem' }}>
                    {svc.subtitle}
                  </p>
                  <Divider />
                  <p style={{ fontFamily: bodyFont, fontSize: '0.9rem', lineHeight: 1.8, color: '#5A5A58' }}>
                    {svc.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ fontFamily: bodyFont, fontSize: '0.68rem', letterSpacing: isAr ? '0.04em' : '0.15em', textTransform: isAr ? 'none' : 'uppercase', color: '#8FAF9F', marginBottom: '2px' }}>{s.durationLabel}</p>
                      <p style={{ fontFamily: displayFont, fontSize: '1.1rem', fontWeight: 500, color: SAGE }}>{svc.duree}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: bodyFont, fontSize: '0.68rem', letterSpacing: isAr ? '0.04em' : '0.15em', textTransform: isAr ? 'none' : 'uppercase', color: '#8FAF9F', marginBottom: '2px' }}>{s.pricingLabel}</p>
                      <p style={{ fontFamily: displayFont, fontSize: '1.1rem', fontWeight: 500, color: SAGE }}>{svc.tarif}</p>
                    </div>
                  </div>
                </div>

                {/* Right — indications */}
                <div>
                  <p style={{ fontFamily: bodyFont, fontSize: '0.7rem', letterSpacing: isAr ? '0.04em' : '0.15em', textTransform: isAr ? 'none' : 'uppercase', color: '#8FAF9F', marginBottom: '1rem' }}>
                    {s.indicationsLabel}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {svc.indications.map(ind => (
                      <span key={ind} style={{
                        fontFamily: bodyFont, fontSize: '0.78rem',
                        background: i % 2 === 0 ? CREAM : WARM,
                        color: SAGE, padding: '0.35rem 0.85rem',
                        border: '1px solid rgba(61,90,78,0.2)',
                        letterSpacing: '0.03em',
                      }}>
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Infos pratiques ─────────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow>{s.practicalEyebrow}</Eyebrow>
            <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(2rem,3.5vw,3rem)', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL }}>
              {s.practicalTitle}
            </h2>
            <Divider />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {s.steps.map(({ step, title, desc }) => (
              <div key={step} style={{ padding: '2rem', background: WARM, borderTop: `3px solid ${TERR}` }}>
                <div style={{ fontFamily: displayFont, fontSize: '2.5rem', fontWeight: 300, color: 'rgba(196,120,90,0.3)', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: displayFont, fontSize: '1.2rem', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 500, color: CHARCOAL, marginBottom: '0.5rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: bodyFont, fontSize: '0.87rem', lineHeight: 1.7, color: '#5A5A58' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(135deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,6rem) 2rem', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(2rem,3.5vw,3rem)', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CREAM, marginBottom: '1.5rem', lineHeight: 1.3 }}>
            {s.ctaTitle}
          </h2>
          <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.75)', marginBottom: '2.5rem' }}>
            {s.ctaP}
          </p>
          <Link to="/contact" style={{
            display: 'inline-block', background: TERR, color: CREAM,
            fontFamily: bodyFont, fontSize: '0.78rem',
            letterSpacing: isAr ? '0.04em' : '0.14em', textTransform: isAr ? 'none' : 'uppercase',
            padding: '0.9rem 2.2rem', textDecoration: 'none',
            transition: 'background 0.3s',
          }}>
            {s.ctaCta}
          </Link>
        </div>
      </section>
    </div>
  )
}
