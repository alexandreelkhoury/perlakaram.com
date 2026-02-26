import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'

const SAGE     = '#3D5A4E'
const TERR     = '#A0856C'
const CREAM    = '#F5EFE6'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

export default function Blog() {
  const { lang, t } = useLang()
  const b = t.blog
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  return (
    <div>
      <Seo title={t.seo.blogTitle} description={t.seo.blogDesc} path="/blog" lang={lang} />

      {/* Hero */}
      <section style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 50%, #1E3028 100%)`,
        padding: 'calc(72px + clamp(3rem,6vw,5rem)) clamp(1.25rem,4vw,2rem) clamp(3rem,6vw,5rem)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p style={{
            fontFamily: bodyFont, fontSize: '0.72rem',
            letterSpacing: isAr ? '0.04em' : '0.22em',
            textTransform: isAr ? 'none' : 'uppercase',
            color: 'rgba(245,239,230,0.6)', marginBottom: '1rem',
          }}>
            {b.eyebrow}
          </p>
          <h1 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400,
            color: CREAM, lineHeight: 1.25, marginBottom: '1rem',
          }}>
            {b.title}
          </h1>
          <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '0 auto' }} />
        </div>
      </section>

      {/* Empty state */}
      <section style={{ background: WARM, padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,4vw,2rem)', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <div style={{
            width: '80px', height: '80px', margin: '0 auto 2rem',
            borderRadius: '50%', background: CREAM,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', color: SAGE,
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={SAGE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </div>
          <h2 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400,
            color: CHARCOAL, marginBottom: '1rem',
          }}>
            {b.emptyTitle}
          </h2>
          <p style={{
            fontFamily: bodyFont, fontSize: '0.92rem',
            lineHeight: 1.8, color: '#5A5A58', marginBottom: '2.5rem',
          }}>
            {b.emptyP}
          </p>
          <Link to="/" className="btn-outline">
            {b.emptyCta}
          </Link>
        </div>
      </section>
    </div>
  )
}
