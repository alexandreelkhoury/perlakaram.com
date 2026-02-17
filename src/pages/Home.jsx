import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'

const SAGE     = '#3D5A4E'
const TERR     = '#C4785A'
const CREAM    = '#F5EFE6'
const BLUSH    = '#E8C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

function Eyebrow({ children, center, color }) {
  return (
    <p style={{
      fontFamily: "'Jost', sans-serif", fontSize: '0.72rem',
      letterSpacing: '0.22em', textTransform: 'uppercase',
      color: color || TERR, marginBottom: '1rem',
      textAlign: center ? 'center' : 'left',
    }}>
      {children}
    </p>
  )
}

function Divider({ center }) {
  return (
    <div style={{
      width: '44px', height: '1.5px', background: TERR,
      margin: center ? '1.25rem auto' : '1.25rem 0',
    }} />
  )
}

function TestimCard({ quote, name, context, isAr, displayFont, bodyFont }) {
  return (
    <div className="card-lift" style={{
      background: CREAM, padding: '2.25rem 2rem',
      borderTop: `3px solid ${TERR}`,
      display: 'flex', flexDirection: 'column', gap: '1.25rem',
    }}>
      <p style={{
        fontFamily: displayFont,
        fontSize: '1.15rem', fontStyle: isAr ? 'normal' : 'italic', lineHeight: 1.7,
        color: CHARCOAL,
      }}>
        « {quote} »
      </p>
      <div>
        <p style={{ fontFamily: bodyFont, fontSize: '0.82rem', fontWeight: 600, color: SAGE, letterSpacing: '0.05em' }}>
          {name}
        </p>
        <p style={{ fontFamily: bodyFont, fontSize: '0.75rem', color: '#8FAF9F', marginTop: '2px' }}>
          {context}
        </p>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, desc, displayFont, bodyFont }) {
  return (
    <div className="card-lift" style={{
      background: WARM, border: '1px solid rgba(61,90,78,0.1)',
      padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
    }}>
      <span style={{ fontSize: '1.6rem' }}>{icon}</span>
      <h3 style={{ fontFamily: displayFont, fontSize: '1.3rem', fontWeight: 500, color: SAGE }}>
        {title}
      </h3>
      <p style={{ fontFamily: bodyFont, fontSize: '0.87rem', lineHeight: 1.7, color: '#5A5A58' }}>
        {desc}
      </p>
    </div>
  )
}

export default function Home() {
  const { lang, t } = useLang()
  const h = t.home
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  return (
    <div>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="hero-grid" style={{ position: 'relative', overflow: 'hidden' }}>

        <div className="hero-left" style={{
          background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 50%, #1E3028 100%)`,
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2.5rem',
        }}>
          <span style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%,-50%)',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(8rem, 18vw, 22rem)',
            fontStyle: 'italic', fontWeight: 300,
            color: 'rgba(255,255,255,0.05)',
            lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
          }}>
            P
          </span>

          <div style={{
            width: '100%', maxWidth: '300px', aspectRatio: '3/4',
            background: `linear-gradient(135deg, ${BLUSH} 0%, ${TERR} 60%, #9B5E45 100%)`,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', inset: '12px',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>◌</div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  {h.heroPortrait}
                </p>
              </div>
            </div>
          </div>

          <div style={{
            position: 'absolute', right: '1.5rem', top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center center',
            fontFamily: "'Jost', sans-serif", fontSize: '0.6rem',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            {h.heroVertical}
          </div>
        </div>

        <div className="hero-right" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: WARM,
        }}>
          <div className="anim-fade-up" style={{ opacity: 0 }}>
            <Eyebrow>{h.eyebrow}</Eyebrow>
          </div>

          <h1 className="anim-fade-up anim-delay-1" style={{
            opacity: 0,
            fontFamily: displayFont,
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, lineHeight: 1.2,
            color: CHARCOAL, marginBottom: '1.5rem',
          }}>
            {h.heroTitle[0]}<br />
            <span style={{ color: SAGE }}>{h.heroTitle[1]}</span>
          </h1>

          <Divider />

          <p className="anim-fade-up anim-delay-2" style={{
            opacity: 0,
            fontFamily: bodyFont, fontSize: '0.92rem',
            lineHeight: 1.8, color: '#5A5A58', maxWidth: '420px', marginBottom: '2rem',
          }}>
            {h.heroP}
          </p>

          <div className="anim-fade-up anim-delay-3" style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <Link to="/contact" className="btn-sage">{h.cta1}</Link>
            <Link to="/about"   className="btn-outline">{h.cta2}</Link>
          </div>

          <div className="anim-fade-up anim-delay-4 trust-badges" style={{ opacity: 0 }}>
            {h.badges.map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: displayFont, fontSize: '1.8rem', fontWeight: 500, color: SAGE, lineHeight: 1 }}>
                  {num}
                </div>
                <div style={{ fontFamily: bodyFont, fontSize: '0.7rem', color: '#8FAF9F', letterSpacing: '0.08em', textTransform: isAr ? 'none' : 'uppercase', marginTop: '2px' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CITATION ══════════════════════════════════════════════ */}
      <section style={{ background: SAGE, padding: 'clamp(3.5rem,6vw,5.5rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: displayFont,
            fontSize: 'clamp(1.4rem, 3vw, 2.3rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 300, lineHeight: 1.6,
            color: CREAM, marginBottom: '1.5rem',
          }}>
            « {h.quote} »
          </p>
          <p style={{ fontFamily: bodyFont, fontSize: '0.78rem', letterSpacing: isAr ? '0.04em' : '0.16em', textTransform: isAr ? 'none' : 'uppercase', color: '#8FAF9F' }}>
            {h.quoteAuthor}
          </p>
        </div>
      </section>

      {/* ══ À PROPOS TEASER ═══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        <div className="portrait-bio-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ position: 'relative', paddingBottom: '1.5rem' }}>
            <div style={{
              aspectRatio: '4/5', background: CREAM,
              border: '1px solid rgba(61,90,78,0.15)',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(160deg, ${BLUSH} 0%, ${CREAM} 100%)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ textAlign: 'center', color: 'rgba(61,90,78,0.3)' }}>
                  <div style={{ fontSize: '3rem' }}>◌</div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '0.5rem' }}>
                    {h.aboutOfficePhoto}
                  </p>
                </div>
              </div>
            </div>
            <div className="floating-card" style={{
              position: 'absolute', bottom: '-0rem', right: '-1.5rem',
              background: TERR, color: CREAM,
              padding: '1.25rem 1.5rem', maxWidth: '200px',
            }}>
              <div style={{ fontFamily: displayFont, fontSize: '2.2rem', fontWeight: 500, lineHeight: 1 }}>
                10
              </div>
              <div style={{ fontFamily: bodyFont, fontSize: '0.7rem', letterSpacing: isAr ? '0.04em' : '0.1em', textTransform: isAr ? 'none' : 'uppercase', marginTop: '4px', opacity: 0.9 }}>
                {h.aboutYears}
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>{h.aboutEyebrow}</Eyebrow>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: isAr ? 'normal' : 'italic', lineHeight: 1.25,
              color: CHARCOAL, marginBottom: '0.5rem',
            }}>
              {h.aboutTitle[0]}<br />
              {h.aboutTitle[1]}
            </h2>
            <Divider />
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              {h.aboutP1}
            </p>
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '2rem' }}>
              {h.aboutP2}
            </p>
            <Link to="/about" className="btn-outline">{h.aboutCta}</Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES APERÇU ═══════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow center>{h.servicesEyebrow}</Eyebrow>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: isAr ? 'normal' : 'italic', color: CHARCOAL,
            }}>
              {h.servicesTitle}
            </h2>
            <Divider center />
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem', marginBottom: '2.5rem',
          }}>
            {h.services.map(s => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} displayFont={displayFont} bodyFont={bodyFont} />
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn-sage">{h.servicesCta}</Link>
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2rem)', background: WARM }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow center>{h.testimEyebrow}</Eyebrow>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: isAr ? 'normal' : 'italic', color: CHARCOAL,
            }}>
              {h.testimTitle}
            </h2>
            <Divider center />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {h.testims.map(({ quote, name, context }) => (
              <TestimCard key={name} quote={quote} name={name} context={context} isAr={isAr} displayFont={displayFont} bodyFont={bodyFont} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ═════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(3.5rem,8vw,6rem) clamp(1.25rem,4vw,2rem)', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            {h.ctaEyebrow}
          </p>
          <h2 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CREAM,
            marginBottom: '1.5rem', lineHeight: 1.3,
          }}>
            {h.ctaTitle[0]}<br />
            {h.ctaTitle[1]}
          </h2>
          <p style={{ fontFamily: bodyFont, fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.75)', marginBottom: '2.5rem' }}>
            {h.ctaP}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/contact" style={{
              display: 'inline-block', background: TERR, color: CREAM,
              fontFamily: bodyFont, fontSize: '0.78rem',
              letterSpacing: isAr ? '0.04em' : '0.14em', textTransform: isAr ? 'none' : 'uppercase',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              transition: 'background 0.3s',
            }}>
              {h.ctaCta1}
            </Link>
            <Link to="/services" style={{
              display: 'inline-block', background: 'transparent', color: CREAM,
              fontFamily: bodyFont, fontSize: '0.78rem',
              letterSpacing: isAr ? '0.04em' : '0.14em', textTransform: isAr ? 'none' : 'uppercase',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              border: '1.5px solid rgba(245,239,230,0.4)',
              transition: 'border-color 0.3s',
            }}>
              {h.ctaCta2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
