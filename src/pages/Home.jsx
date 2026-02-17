import { Link } from 'react-router-dom'

const SAGE     = '#3D5A4E'
const TERR     = '#C4785A'
const CREAM    = '#F5EFE6'
const BLUSH    = '#E8C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

const Eyebrow = ({ children, center }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: '0.72rem',
    letterSpacing: '0.22em', textTransform: 'uppercase',
    color: TERR, marginBottom: '1rem',
    textAlign: center ? 'center' : 'left',
  }}>
    {children}
  </p>
)

const Divider = ({ center }) => (
  <div style={{
    width: '44px', height: '1.5px', background: TERR,
    margin: center ? '1.25rem auto' : '1.25rem 0',
  }} />
)

function TestimCard({ quote, name, context }) {
  return (
    <div className="card-lift" style={{
      background: CREAM, padding: '2.25rem 2rem',
      borderTop: `3px solid ${TERR}`,
      display: 'flex', flexDirection: 'column', gap: '1.25rem',
    }}>
      <p style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.7,
        color: CHARCOAL,
      }}>
        « {quote} »
      </p>
      <div>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: SAGE, letterSpacing: '0.05em' }}>
          {name}
        </p>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.75rem', color: '#8FAF9F', marginTop: '2px' }}>
          {context}
        </p>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="card-lift" style={{
      background: WARM, border: '1px solid rgba(61,90,78,0.1)',
      padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
    }}>
      <span style={{ fontSize: '1.6rem' }}>{icon}</span>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '1.3rem', fontWeight: 500, color: SAGE,
      }}>
        {title}
      </h3>
      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', lineHeight: 1.7, color: '#5A5A58' }}>
        {desc}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      {/* hero-grid = flex column on mobile, 50/50 grid on md+ (via responsive.css) */}
      <section className="hero-grid" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Left — visual composition */}
        <div className="hero-left" style={{
          background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 50%, #1E3028 100%)`,
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '2.5rem',
        }}>
          {/* Decorative large P */}
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

          {/* Warm photo placeholder box */}
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
                  Portrait
                </p>
              </div>
            </div>
          </div>

          {/* Vertical label — hidden on small screens */}
          <div style={{
            position: 'absolute', right: '1.5rem', top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'center center',
            fontFamily: "'Jost', sans-serif", fontSize: '0.6rem',
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
          }}>
            Psychologue · Clinicienne
          </div>
        </div>

        {/* Right — typography (hero-right handles padding via responsive.css) */}
        <div className="hero-right" style={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          background: WARM,
        }}>
          <div className="anim-fade-up" style={{ opacity: 0 }}>
            <Eyebrow>Bienvenue</Eyebrow>
          </div>

          <h1 className="anim-fade-up anim-delay-1" style={{
            opacity: 0,
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontStyle: 'italic', fontWeight: 400, lineHeight: 1.2,
            color: CHARCOAL, marginBottom: '1.5rem',
          }}>
            Un espace pour<br />
            <span style={{ color: SAGE }}>se retrouver.</span>
          </h1>

          <Divider />

          <p className="anim-fade-up anim-delay-2" style={{
            opacity: 0,
            fontFamily: "'Jost', sans-serif", fontSize: '0.92rem',
            lineHeight: 1.8, color: '#5A5A58', maxWidth: '420px', marginBottom: '2rem',
          }}>
            Je vous accompagne avec douceur et professionnalisme dans votre chemin vers le mieux-être.
            Ensemble, nous créons un espace sûr pour explorer, comprendre et grandir.
          </p>

          <div className="anim-fade-up anim-delay-3" style={{ opacity: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
            <Link to="/contact" className="btn-sage">Prendre rendez-vous</Link>
            <Link to="/about"   className="btn-outline">En savoir plus</Link>
          </div>

          {/* Trust badges — trust-badges wraps via responsive.css */}
          <div className="anim-fade-up anim-delay-4 trust-badges" style={{ opacity: 0 }}>
            {[
              { num: '10+',  label: "ans d'expérience" },
              { num: '500+', label: 'patients accompagnés' },
              { num: '100%', label: 'confidentiel' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontWeight: 500, color: SAGE, lineHeight: 1 }}>
                  {num}
                </div>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', color: '#8FAF9F', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
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
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.4rem, 3vw, 2.3rem)',
            fontStyle: 'italic', fontWeight: 300, lineHeight: 1.6,
            color: CREAM, marginBottom: '1.5rem',
          }}>
            « La thérapie n'est pas un signe de faiblesse — c'est un acte de courage.
            Vous méritez un espace pour être pleinement vous-même. »
          </p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8FAF9F' }}>
            — Perla, Psychologue Clinicienne
          </p>
        </div>
      </section>

      {/* ══ À PROPOS TEASER ═══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        {/* portrait-bio-grid: stacked on mobile, 2-col on md+ */}
        <div className="portrait-bio-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Image side */}
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
                    Photo de cabinet
                  </p>
                </div>
              </div>
            </div>
            {/* Floating accent card — hidden on mobile via responsive.css */}
            <div className="floating-card" style={{
              position: 'absolute', bottom: '-0rem', right: '-1.5rem',
              background: TERR, color: CREAM,
              padding: '1.25rem 1.5rem', maxWidth: '200px',
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.2rem', fontWeight: 500, lineHeight: 1 }}>
                10
              </div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px', opacity: 0.9 }}>
                ans d'expérience clinique
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <Eyebrow>À Propos</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: 'italic', lineHeight: 1.25,
              color: CHARCOAL, marginBottom: '0.5rem',
            }}>
              Une approche humaine<br />et bienveillante
            </h2>
            <Divider />
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '1rem' }}>
              Psychologue clinicienne diplômée, je mets mon expertise au service de votre bien-être mental et émotionnel.
              Mon approche intégrative s'adapte à chacun, en combinant différentes méthodes thérapeutiques selon vos besoins spécifiques.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.85, color: '#5A5A58', marginBottom: '2rem' }}>
              Dans un cadre confidentiel et bienveillant, je vous aide à traverser les difficultés de la vie, à mieux vous comprendre
              et à retrouver l'équilibre.
            </p>
            <Link to="/about" className="btn-outline">Découvrir mon parcours</Link>
          </div>
        </div>
      </section>

      {/* ══ SERVICES APERÇU ═══════════════════════════════════════ */}
      <section style={{ background: CREAM, padding: 'clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow center>Accompagnements</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: 'italic', color: CHARCOAL,
            }}>
              Comment puis-je vous aider ?
            </h2>
            <Divider center />
          </div>

          {/* auto-fit grid: 1 col on mobile, 2-4 on wider screens */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem', marginBottom: '2.5rem',
          }}>
            <ServiceCard icon="🌿" title="Thérapie Individuelle"  desc="Un espace personnel pour explorer vos émotions, comprendre vos schémas et traverser les moments difficiles." />
            <ServiceCard icon="💑" title="Thérapie de Couple"     desc="Retrouver le dialogue, rétablir la confiance et construire une relation plus épanouissante ensemble." />
            <ServiceCard icon="🌊" title="Anxiété & Dépression"   desc="Des outils concrets et un accompagnement personnalisé pour retrouver la sérénité et l'énergie vitale." />
            <ServiceCard icon="🌱" title="Développement Personnel" desc="Renforcer l'estime de soi, clarifier ses valeurs et trouver un sens à son existence." />
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/services" className="btn-sage">Voir tous les accompagnements</Link>
          </div>
        </div>
      </section>

      {/* ══ TÉMOIGNAGES ═══════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(3.5rem,8vw,7rem) clamp(1.25rem,4vw,2rem)', background: WARM }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Eyebrow center>Témoignages</Eyebrow>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontWeight: 400, fontStyle: 'italic', color: CHARCOAL,
            }}>
              Ce qu'ils en disent
            </h2>
            <Divider center />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            <TestimCard
              quote="Un accompagnement exceptionnel. Perla sait créer un espace de confiance unique où je me sens vraiment entendu."
              name="Marie L."
              context="Suivi individuel — Anxiété"
            />
            <TestimCard
              quote="Grâce à Perla, mon partenaire et moi avons retrouvé le dialogue que nous avions perdu. Elle nous a offert de nouveaux outils."
              name="Thomas & Sarah"
              context="Thérapie de couple"
            />
            <TestimCard
              quote="Professionnelle, empathique et perspicace. Ses séances m'ont permis de me comprendre et de reprendre confiance en moi."
              name="Julien M."
              context="Développement personnel"
            />
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ═════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(3.5rem,8vw,6rem) clamp(1.25rem,4vw,2rem)', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            Premier pas
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
            fontStyle: 'italic', fontWeight: 400, color: CREAM,
            marginBottom: '1.5rem', lineHeight: 1.3,
          }}>
            Prêt·e à commencer<br />votre chemin ?
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.75)', marginBottom: '2.5rem' }}>
            La première consultation est l'occasion de vous présenter, d'exposer vos difficultés
            et de voir ensemble si nous souhaitons travailler dans la durée.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/contact" style={{
              display: 'inline-block', background: TERR, color: CREAM,
              fontFamily: "'Jost', sans-serif", fontSize: '0.78rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              transition: 'background 0.3s',
            }}>
              Prendre rendez-vous
            </Link>
            <Link to="/services" style={{
              display: 'inline-block', background: 'transparent', color: CREAM,
              fontFamily: "'Jost', sans-serif", fontSize: '0.78rem',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              padding: '0.9rem 2.2rem', textDecoration: 'none',
              border: '1.5px solid rgba(245,239,230,0.4)',
              transition: 'border-color 0.3s',
            }}>
              Mes accompagnements
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
