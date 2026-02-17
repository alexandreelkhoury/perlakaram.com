import { Link } from 'react-router-dom'

const SAGE     = '#3D5A4E'
const TERR     = '#C4785A'
const CREAM    = '#F5EFE6'
const BLUSH    = '#E8C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

const Eyebrow = ({ children }) => (
  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: TERR, marginBottom: '1rem' }}>
    {children}
  </p>
)
const Divider = () => (
  <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0' }} />
)

export default function About() {
  const valeurs = [
    { emoji: '🤝', title: 'Bienveillance', desc: 'Un regard sans jugement, une écoute authentique. Vous pouvez être pleinement vous-même dans notre espace thérapeutique.' },
    { emoji: '🔒', title: 'Confidentialité', desc: 'Tout ce qui est dit lors de nos séances reste strictement confidentiel. Votre sécurité est ma priorité absolue.' },
    { emoji: '🎯', title: 'Personnalisation', desc: "Chaque personne est unique. J'adapte mon approche et mes outils spécifiquement à vos besoins et à votre rythme." },
    { emoji: '🌱', title: 'Croissance', desc: 'La thérapie est un voyage vers soi. Je vous accompagne pas à pas dans ce chemin de découverte et de transformation.' },
  ]

  const formations = [
    { year: '2013', title: 'Master 2 en Psychologie Clinique', lieu: 'Université Paris Descartes' },
    { year: '2015', title: 'Formation en Thérapie Cognitive et Comportementale (TCC)', lieu: 'Institut Français de TCC' },
    { year: '2017', title: 'Certificat en EMDR', lieu: 'EMDR Europe' },
    { year: '2020', title: 'Formation en Thérapie de Pleine Conscience (Mindfulness)', lieu: 'Centre Méditation Santé, Paris' },
  ]

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── Hero banner ───────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,7rem) 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            À Propos
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: 'italic', fontWeight: 400, color: CREAM,
            lineHeight: 1.2, maxWidth: '700px',
          }}>
            Une thérapeute à votre écoute, avec tout son cœur.
          </h1>
        </div>
      </div>

      {/* ── Portrait + Biographie ─────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        {/* portrait-bio-grid: column on mobile, 2-col on md+ (responsive.css) */}
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
                  Portrait de Perla
                </p>
              </div>
            </div>
            {/* Sage accent block — hidden on mobile via responsive.css */}
            <div className="floating-card" style={{
              position: 'absolute', bottom: '-1rem', left: '-1rem',
              background: SAGE, padding: '1.5rem',
              maxWidth: '220px',
            }}>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontStyle: 'italic', color: CREAM, lineHeight: 1.5 }}>
                « Chaque histoire mérite d'être entendue. »
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div>
            <Eyebrow>Mon parcours</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              fontStyle: 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
            }}>
              Perla
            </h2>
            <Divider />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              Psychologue clinicienne depuis plus de 10 ans, j'ai développé une approche intégrative qui s'appuie sur les thérapies cognitives et comportementales (TCC), l'EMDR et la pleine conscience.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              Mon parcours m'a amenée à exercer dans différents contextes — hôpitaux, cabinets libéraux, entreprises — ce qui m'a permis d'acquérir une vision globale et nuancée de la souffrance psychologique.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '2rem' }}>
              Aujourd'hui installée en cabinet à Paris, j'accompagne adultes et couples dans des problématiques variées : anxiété, dépression, traumatismes, difficultés relationnelles et développement personnel.
            </p>
            <Link to="/contact" className="btn-sage">Prendre rendez-vous</Link>
          </div>
        </div>
      </section>

      {/* ── Mon approche ─────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ maxWidth: '680px', marginBottom: '3.5rem' }}>
            <Eyebrow>Mon approche</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontStyle: 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
            }}>
              Une thérapie sur mesure, adaptée à votre réalité
            </h2>
            <Divider />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58' }}>
              Il n'existe pas de méthode universelle. C'est pourquoi j'utilise différents outils thérapeutiques, choisis en fonction de ce qui vous correspond le mieux. Nous travaillons ensemble, à votre rythme.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'TCC', full: 'Thérapies Cognitives et Comportementales', desc: 'Identifier et modifier les pensées et comportements qui entretiennent la souffrance.' },
              { title: 'EMDR', full: 'Eye Movement Desensitization and Reprocessing', desc: 'Traitement des traumatismes et des mémoires émotionnelles douloureuses.' },
              { title: 'Mindfulness', full: 'Pleine Conscience', desc: "Développer une présence bienveillante à soi-même et à l'instant présent." },
              { title: 'ACT', full: "Thérapie d'Acceptation et d'Engagement", desc: 'Agir selon ses valeurs profondes, même en présence de pensées difficiles.' },
            ].map(({ title, full, desc }) => (
              <div key={title} className="card-lift" style={{ background: WARM, padding: '2rem', borderTop: `3px solid ${SAGE}` }}>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 500, color: SAGE, marginBottom: '0.25rem' }}>
                  {title}
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', color: TERR, letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                  {full}
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', lineHeight: 1.7, color: '#5A5A58' }}>
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
          <Eyebrow>Formation</Eyebrow>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontStyle: 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '0.5rem',
          }}>
            Diplômes & certifications
          </h2>
          <Divider />
          <div style={{ marginTop: '2.5rem' }}>
            {formations.map(({ year, title, lieu }, i) => (
              /* formation-row: 60px col on mobile, 80px on sm+ (responsive.css) */
              <div key={year} className="formation-row" style={{
                paddingBottom: '2rem',
                borderBottom: i < formations.length - 1 ? '1px solid rgba(61,90,78,0.12)' : 'none',
                marginBottom: '2rem',
                alignItems: 'start',
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 500, color: TERR, lineHeight: 1 }}>
                  {year}
                </div>
                <div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', fontWeight: 500, color: CHARCOAL, marginBottom: '4px' }}>
                    {title}
                  </p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.82rem', color: '#8FAF9F' }}>
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
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
              Ce qui me guide
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontStyle: 'italic', fontWeight: 400, color: CREAM,
            }}>
              Mes valeurs fondamentales
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: BLUSH, margin: '1.25rem auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {valeurs.map(({ emoji, title, desc }) => (
              <div key={title} style={{
                background: 'rgba(255,255,255,0.06)', padding: '2rem',
                borderTop: `2px solid rgba(232,196,176,0.4)`,
              }}>
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '1rem' }}>{emoji}</span>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 500, color: CREAM, marginBottom: '0.75rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', lineHeight: 1.7, color: 'rgba(245,239,230,0.7)' }}>
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
