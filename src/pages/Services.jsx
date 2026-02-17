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
const Divider = () => <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0' }} />

const services = [
  {
    number: '01',
    icon: '🌿',
    title: 'Thérapie Individuelle',
    subtitle: 'Pour adultes & adolescents',
    desc: "Un espace de parole sécurisé pour explorer vos émotions, vos pensées et vos comportements. Ensemble, nous travaillons à comprendre l'origine de vos difficultés et à développer des ressources pour mieux y faire face.",
    indications: ['Anxiété chronique', 'Manque de confiance en soi', 'Tristesse & humeur basse', 'Difficultés relationnelles', 'Gestion des émotions', 'Questionnements existentiels'],
    duree: '50 min / séance',
    tarif: '80 € / séance',
  },
  {
    number: '02',
    icon: '💑',
    title: 'Thérapie de Couple',
    subtitle: 'Pour les deux partenaires',
    desc: "Retrouver le dialogue, la confiance et l'intimité dans votre relation. La thérapie de couple offre un espace neutre pour entendre l'autre et être entendu, identifier les schémas relationnels et construire une relation plus harmonieuse.",
    indications: ['Conflits répétitifs', 'Communication difficile', 'Perte de confiance', 'Crises relationnelles', 'Transition de vie (enfant, déménagement)', 'Reconstruction après trahison'],
    duree: '75 min / séance',
    tarif: '110 € / séance',
  },
  {
    number: '03',
    icon: '🌊',
    title: 'Anxiété & Dépression',
    subtitle: 'Accompagnement spécialisé',
    desc: "L'anxiété et la dépression sont des souffrances réelles qui méritent une attention sérieuse et un accompagnement adapté. Grâce à des outils issus des TCC et de la pleine conscience, nous travaillons à réduire les symptômes et retrouver l'élan vital.",
    indications: ['Attaques de panique', 'Phobies', 'TOC', 'Dépression légère à modérée', 'Épuisement professionnel (burn-out)', 'Troubles du sommeil'],
    duree: '50 min / séance',
    tarif: '80 € / séance',
  },
  {
    number: '04',
    icon: '💎',
    title: 'Traumatismes & EMDR',
    subtitle: 'Thérapie trauma-informée',
    desc: 'Les événements traumatiques laissent des traces profondes dans la mémoire émotionnelle. La thérapie EMDR (désensibilisation par les mouvements oculaires) est une méthode reconnue internationalement pour le traitement du traumatisme et du stress post-traumatique.',
    indications: ['PTSD / Stress post-traumatique', "Traumatismes d'enfance", 'Deuils compliqués', 'Accidents & violences', 'Phobies traumatiques', 'Mémoires intrusives'],
    duree: '60-90 min / séance',
    tarif: '90–120 € / séance',
  },
  {
    number: '05',
    icon: '🌱',
    title: 'Développement Personnel',
    subtitle: 'Connaissance & croissance de soi',
    desc: "La thérapie n'est pas uniquement pour les crises — elle est aussi un outil puissant pour se mieux connaître, renforcer ses ressources et vivre de façon plus alignée avec ses valeurs. Un espace pour devenir la meilleure version de soi-même.",
    indications: ['Estime de soi & confiance', 'Clarification des valeurs', 'Transitions de vie', 'Assertivité & limites', 'Épanouissement professionnel', 'Sens & direction de vie'],
    duree: '50 min / séance',
    tarif: '80 € / séance',
  },
  {
    number: '06',
    icon: '🏢',
    title: 'Soutien Professionnel',
    subtitle: 'Bien-être au travail',
    desc: "La souffrance au travail est une réalité pour de nombreuses personnes. Burn-out, harcèlement, reconversion, prise de poste difficile — j'accompagne les professionnels à traverser ces épreuves et retrouver un rapport sain à leur vie professionnelle.",
    indications: ['Burn-out & épuisement', 'Harcèlement au travail', 'Prise de poste & leadership', 'Reconversion professionnelle', 'Conflit avec collègues', 'Anxiété de performance'],
    duree: '50 min / séance',
    tarif: '80 € / séance',
  },
]

export default function Services() {
  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── Hero banner ─────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,7rem) 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            Mes accompagnements
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: 'italic', fontWeight: 400, color: CREAM,
            lineHeight: 1.2, maxWidth: '700px',
          }}>
            Comment puis-je vous accompagner ?
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.7)', maxWidth: '560px', marginTop: '1.5rem' }}>
            Chaque accompagnement est unique et s'adapte à votre situation. Prenez contact pour discuter de vos besoins lors d'un premier entretien sans engagement.
          </p>
        </div>
      </div>

      {/* ── Services list ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5px' }}>
          {services.map((s, i) => (
            <div key={s.number} className="card-lift" style={{
              background: i % 2 === 0 ? WARM : CREAM,
              padding: 'clamp(1.5rem,4vw,3.5rem)',
              borderLeft: `4px solid ${i % 2 === 0 ? SAGE : TERR}`,
            }}>
              {/* service-card-grid: stacked on mobile, 2-col on md+ (responsive.css) */}
              <div className="service-card-grid">
                {/* Left */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: 'rgba(61,90,78,0.2)', lineHeight: 1 }}>
                      {s.number}
                    </span>
                    <div>
                      <span style={{ fontSize: '1.4rem', display: 'block', marginBottom: '0.25rem' }}>{s.icon}</span>
                    </div>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.8rem', fontStyle: 'italic', fontWeight: 500, color: CHARCOAL, marginBottom: '0.25rem' }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: TERR, marginBottom: '1rem' }}>
                    {s.subtitle}
                  </p>
                  <Divider />
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', lineHeight: 1.8, color: '#5A5A58' }}>
                    {s.desc}
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                    <div>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8FAF9F', marginBottom: '2px' }}>Durée</p>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontWeight: 500, color: SAGE }}>{s.duree}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8FAF9F', marginBottom: '2px' }}>Tarif</p>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontWeight: 500, color: SAGE }}>{s.tarif}</p>
                    </div>
                  </div>
                </div>

                {/* Right — indications */}
                <div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#8FAF9F', marginBottom: '1rem' }}>
                    Indications
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {s.indications.map(ind => (
                      <span key={ind} style={{
                        fontFamily: "'Jost', sans-serif", fontSize: '0.78rem',
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
            <Eyebrow>Informations pratiques</Eyebrow>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontStyle: 'italic', fontWeight: 400, color: CHARCOAL }}>
              Comment se déroule une séance ?
            </h2>
            <Divider />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { step: '1', title: 'Premier contact', desc: "Prenez contact par téléphone ou email. Nous convenons ensemble d'un premier entretien d'évaluation." },
              { step: '2', title: 'Entretien initial', desc: 'La première séance est dédiée à comprendre votre situation, vos attentes et à définir les objectifs thérapeutiques.' },
              { step: '3', title: 'Suivi régulier', desc: 'Les séances suivantes ont lieu à un rythme défini ensemble, généralement hebdomadaire ou bimensuel.' },
              { step: '4', title: 'Évolution & fin', desc: "La durée du suivi est variable. Nous réévaluons régulièrement l'avancée et décidons ensemble de la fin de la thérapie." },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ padding: '2rem', background: WARM, borderTop: `3px solid ${TERR}` }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: 'rgba(196,120,90,0.3)', lineHeight: 1, marginBottom: '0.75rem' }}>
                  {step}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 500, color: CHARCOAL, marginBottom: '0.5rem' }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.87rem', lineHeight: 1.7, color: '#5A5A58' }}>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem,3.5vw,3rem)', fontStyle: 'italic', fontWeight: 400, color: CREAM, marginBottom: '1.5rem', lineHeight: 1.3 }}>
            Vous ne savez pas par où commencer ?
          </h2>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.92rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.75)', marginBottom: '2.5rem' }}>
            Pas d'inquiétude. Lors du premier entretien, nous identifions ensemble le type d'accompagnement qui vous convient le mieux.
          </p>
          <Link to="/contact" style={{
            display: 'inline-block', background: TERR, color: CREAM,
            fontFamily: "'Jost', sans-serif", fontSize: '0.78rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.9rem 2.2rem', textDecoration: 'none',
            transition: 'background 0.3s',
          }}>
            Contactez-moi
          </Link>
        </div>
      </section>
    </div>
  )
}
