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
const Divider = () => (
  <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0' }} />
)

export default function About() {
  const { lang, t } = useLang()
  const a = t.about
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── Hero banner ───────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,7rem) 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            {a.heroEyebrow}
          </p>
          <h1 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CREAM,
            lineHeight: 1.2, maxWidth: '700px',
          }}>
            {a.heroTitle}
          </h1>
        </div>
      </div>

      {/* ── Portrait + Biographie ─────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        <div className="portrait-bio-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Portrait */}
          <div style={{ position: 'relative', paddingBottom: '1rem' }}>
            <div style={{ aspectRatio: '3/4', background: CREAM, position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: `linear-gradient(135deg, ${BLUSH} 0%, #D4A090 100%)`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ fontSize: '3rem', color: 'rgba(61,90,78,0.3)', marginBottom: '0.5rem' }}>◌</div>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(61,90,78,0.4)' }}>
                  {a.bioPortrait}
                </p>
              </div>
            </div>
            <div className="floating-card" style={{
              position: 'absolute', bottom: '-1rem', left: '-1rem',
              background: SAGE, padding: '1.5rem',
              maxWidth: '220px',
            }}>
              <p style={{ fontFamily: displayFont, fontSize: '1.1rem', fontStyle: isAr ? 'normal' : 'italic', color: CREAM, lineHeight: 1.5 }}>
                {a.bioQuote}
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <Eyebrow>{a.bioEyebrow}</Eyebrow>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
            }}>
              Perla
            </h2>
            <Divider />
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              {a.bioP1}
            </p>
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              {a.bioP2}
            </p>
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '2rem' }}>
              {a.bioP3}
            </p>
            <Link to="/contact" className="btn-sage">{a.bioCta}</Link>
          </div>
        </div>
      </section>

      {/* ── Mon approche ─────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <Eyebrow>{a.approachEyebrow}</Eyebrow>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
            }}>
              {a.approachTitle}
            </h2>
            <Divider />
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58' }}>
              {a.approachP}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {a.approaches.map(({ title, full, desc }) => (
              <div key={title} className="card-lift" style={{ background: WARM, padding: '2rem', borderTop: `3px solid ${SAGE}` }}>
                <p style={{ fontFamily: displayFont, fontSize: '1.4rem', fontWeight: 500, color: SAGE, marginBottom: '0.25rem' }}>
                  {title}
                </p>
                <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', color: TERR, letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: isAr ? 'none' : 'uppercase' }}>
                  {full}
                </p>
                <p style={{ fontFamily: bodyFont, fontSize: '0.87rem', lineHeight: 1.7, color: '#5A5A58' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formation & Parcours ──────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Eyebrow>{a.formationEyebrow}</Eyebrow>
          <h2 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '0.5rem',
          }}>
            {a.formationTitle}
          </h2>
          <Divider />
          <div style={{ marginTop: '2.5rem' }}>
            {a.formations.map(({ year, title, lieu }, i) => (
              <div key={year} className="formation-row" style={{
                paddingBottom: '2rem',
                borderBottom: i < a.formations.length - 1 ? '1px solid rgba(61,90,78,0.12)' : 'none',
                marginBottom: '2rem',
                alignItems: 'start',
              }}>
                <div style={{ fontFamily: displayFont, fontSize: '1.5rem', fontWeight: 500, color: TERR, lineHeight: 1 }}>
                  {year}
                </div>
                <div>
                  <p style={{ fontFamily: bodyFont, fontSize: '0.95rem', fontWeight: 500, color: CHARCOAL, marginBottom: '4px' }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: bodyFont, fontSize: '0.82rem', color: '#8FAF9F' }}>
                    {lieu}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mes valeurs ──────────────────────────────────────── */}
      <section style={{ background: SAGE, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
              {a.valuesEyebrow}
            </p>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CREAM,
            }}>
              {a.valuesTitle}
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: BLUSH, margin: '1.25rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {a.values.map(({ emoji, title, desc }) => (
              <div key={title} style={{
                background: 'rgba(255,255,255,0.06)', padding: '2rem',
                borderTop: `2px solid rgba(232,196,176,0.4)`,
              }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>{emoji}</span>
                <h3 style={{ fontFamily: displayFont, fontSize: '1.3rem', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 500, color: CREAM, marginBottom: '0.75rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: bodyFont, fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(245,239,230,0.7)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
