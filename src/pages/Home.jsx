import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'

const SAGE     = '#3D5A4E'
const TERR     = '#A0856C'
const CREAM    = '#F5EFE6'
const BLUSH    = '#D4C4B0'
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

export default function Home() {
  const { lang, t } = useLang()
  const h = t.home
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  return (
    <div>
      <Seo title={t.seo.homeTitle} description={t.seo.homeDesc} path="/" lang={lang} />
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
            position: 'relative', overflow: 'hidden',
          }}>
            <picture>
              <source srcSet="/profile_picture.webp" type="image/webp" />
              <img
              src="/profile_picture.jpeg"
              alt="Perla Karam — Psychologue Clinicienne"
              fetchPriority="high"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                e.target.parentElement.style.display = 'none'
                e.target.parentElement.nextSibling.style.display = 'flex'
              }}
            />
            </picture>
            <div style={{
              display: 'none', position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${BLUSH} 0%, ${TERR} 60%)`,
              alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: '0.5rem',
            }}>
              <div style={{ fontSize: '2.5rem', color: 'rgba(255,255,255,0.6)' }}>◌</div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                {h.heroPortrait}
              </p>
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

          <div className="anim-fade-up anim-delay-2" style={{
            opacity: 0,
            fontFamily: bodyFont, fontSize: '0.92rem',
            lineHeight: 1.8, color: '#5A5A58', maxWidth: '420px', marginBottom: '2rem',
          }}>
            {h.heroP.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: i < h.heroP.split('\n\n').length - 1 ? '1rem' : 0 }}>{para}</p>
            ))}
          </div>

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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
          <div style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
            {h.aboutP1.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>
            ))}
          </div>
          {h.aboutListIntro && (
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '0.5rem' }}>
                {h.aboutListIntro}
              </p>
              <ul style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                {h.aboutList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '2rem' }}>
            {h.aboutP2}
          </p>
          <Link to="/about" className="btn-outline">{h.aboutCta}</Link>
        </div>
      </section>

      {/* ══ COMMENT SE DÉROULE UNE THÉRAPIE — bouton ════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <Link to="/services" className="btn-outline" style={{ fontSize: '0.82rem', padding: '1rem 2.5rem' }}>
            {h.servicesCta}
          </Link>
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
          <div style={{ fontFamily: bodyFont, fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.75)', marginBottom: '2.5rem' }}>
            {h.ctaP.split('\n\n').map((para, i) => (
              <p key={i} style={{ marginBottom: i < h.ctaP.split('\n\n').length - 1 ? '1rem' : 0 }}>{para}</p>
            ))}
          </div>
          <Link to="/contact" style={{
            display: 'inline-block', background: TERR, color: CREAM,
            fontFamily: bodyFont, fontSize: '0.78rem',
            letterSpacing: isAr ? '0.04em' : '0.14em', textTransform: isAr ? 'none' : 'uppercase',
            padding: '0.9rem 2.2rem', textDecoration: 'none',
            transition: 'background 0.3s',
          }}>
            {h.ctaCta1}
          </Link>
        </div>
      </section>
    </div>
  )
}
