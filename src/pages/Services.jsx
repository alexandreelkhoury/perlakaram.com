import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'

const SAGE     = '#3D5A4E'
const TERR     = '#A0856C'
const CREAM    = '#F5EFE6'
const BLUSH    = '#D4C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

const Eyebrow = ({ children, color, isAr, bodyFont }) => (
  <p style={{ fontFamily: bodyFont || "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: color || TERR, marginBottom: '1rem' }}>
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
      <Seo title={t.seo.servicesTitle} description={t.seo.servicesDesc} path="/services" lang={lang} />

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

      {/* ── Content sections ──────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* Visio */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '0.5rem',
            }}>
              {s.visioTitle}
            </h2>
            <Divider />
            <div style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58' }}>
              {s.visioP.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
              ))}
            </div>
          </div>

          {/* Premier entretien */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '0.5rem',
            }}>
              {s.premierTitle}
            </h2>
            <Divider />
            <div style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58' }}>
              {s.premierP.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
              ))}
            </div>
          </div>

          {/* Cadre des séances */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '0.5rem',
            }}>
              {s.cadreTitle}
            </h2>
            <Divider />
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              {s.cadreP1}
            </p>
            <div style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              {s.cadreP2.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
              ))}
            </div>
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58' }}>
              {s.cadreP3}
            </p>
          </div>

          {/* Durée du suivi */}
          <div style={{ marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '0.5rem',
            }}>
              {s.dureeTitle}
            </h2>
            <Divider />
            <div style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58' }}>
              {s.dureeP.split('\n').map((line, i) => (
                <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Closing quote ─────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(4rem,8vw,6rem) clamp(1.25rem,4vw,2rem)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative oversized quotation mark */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -55%)',
          fontFamily: displayFont,
          fontSize: 'clamp(12rem, 25vw, 20rem)',
          fontStyle: 'italic', fontWeight: 300,
          color: 'rgba(61,90,78,0.04)',
          lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>
          «
        </div>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '0 auto 2rem' }} />
          <p style={{
            fontFamily: displayFont,
            fontSize: 'clamp(1.25rem, 2.8vw, 1.9rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 300, lineHeight: 1.7,
            color: SAGE,
          }}>
            « {s.closingQuote} »
          </p>
          <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '2rem auto 0' }} />
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
          <div style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.75)', marginBottom: '2.5rem' }}>
            {s.ctaP.split('\n').map((line, i) => (
              <p key={i} style={{ marginBottom: '0.5rem' }}>{line}</p>
            ))}
          </div>
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
