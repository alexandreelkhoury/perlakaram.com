import { useState } from 'react'

const SAGE     = '#3D5A4E'
const TERR     = '#C4785A'
const CREAM    = '#F5EFE6'
const BLUSH    = '#E8C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

const inputStyle = {
  width: '100%', padding: '0.85rem 1rem',
  border: '1px solid rgba(61,90,78,0.25)',
  background: WARM, color: CHARCOAL,
  fontFamily: "'Jost', sans-serif", fontSize: '0.9rem',
  outline: 'none', transition: 'border-color 0.3s',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block', fontFamily: "'Jost', sans-serif",
  fontSize: '0.75rem', letterSpacing: '0.12em',
  textTransform: 'uppercase', color: SAGE,
  marginBottom: '0.5rem', fontWeight: 500,
}

function Field({ label, name, type = 'text', value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={labelStyle}>{label}{required && ' *'}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...inputStyle, borderColor: focused ? SAGE : 'rgba(61,90,78,0.25)' }}
      />
    </div>
  )
}

function TextareaField({ label, name, rows = 5, value, onChange, required }) {
  const [focused, setFocused] = useState(false)
  return (
    <div>
      <label style={labelStyle}>{label}{required && ' *'}</label>
      <textarea
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', borderColor: focused ? SAGE : 'rgba(61,90,78,0.25)' }}
      />
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    motif: '', message: '', accord: false,
  })
  const [sent, setSent] = useState(false)

  const handle = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── Hero banner ────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,7rem) 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            Contact & Rendez-vous
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: 'italic', fontWeight: 400, color: CREAM,
            lineHeight: 1.2, maxWidth: '660px',
          }}>
            Faisons connaissance, sans engagement.
          </h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.7)', maxWidth: '520px', marginTop: '1.5rem' }}>
            Je vous réponds dans les 48h ouvrées. La première consultation est l'occasion d'échanger et de voir si nous souhaitons travailler ensemble.
          </p>
        </div>
      </div>

      {/* ── Main content ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        {/* contact-grid: column on mobile, 2-col on md+ (responsive.css) */}
        <div className="contact-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* ── Contact info ──────────────────────────────── */}
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: TERR, marginBottom: '1rem' }}>
              Informations pratiques
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontStyle: 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
            }}>
              Mon cabinet
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
              {[
                {
                  icon: '📍',
                  title: 'Adresse',
                  lines: ['12 Rue de la Paix', '75001 Paris', '(Métro : Opéra — Lignes 3, 7, 8)'],
                },
                {
                  icon: '📞',
                  title: 'Téléphone',
                  lines: ['+33 6 00 00 00 00'],
                },
                {
                  icon: '✉️',
                  title: 'Email',
                  lines: ['contact@perla-psychologue.fr'],
                },
                {
                  icon: '🕐',
                  title: 'Horaires de consultation',
                  lines: ['Lundi — Vendredi : 9h — 19h', 'Samedi : 9h — 13h (sur RDV)'],
                },
              ].map(({ icon, title, lines }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', background: CREAM, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8FAF9F', marginBottom: '4px' }}>
                      {title}
                    </p>
                    {lines.map(l => (
                      <p key={l} style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', color: CHARCOAL, lineHeight: 1.6 }}>{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{
              width: '100%', aspectRatio: '16/9',
              background: CREAM, border: '1px solid rgba(61,90,78,0.15)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              color: 'rgba(61,90,78,0.35)', gap: '0.5rem',
            }}>
              <span style={{ fontSize: '2rem' }}>🗺️</span>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Carte — 12 Rue de la Paix, Paris
              </p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.75rem', color: TERR, textDecoration: 'underline', cursor: 'pointer' }}>
                Ouvrir dans Google Maps ↗
              </p>
            </div>
          </div>

          {/* ── Form ─────────────────────────────────────── */}
          <div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: TERR, marginBottom: '1rem' }}>
              Message & Demande de RDV
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontStyle: 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
              marginBottom: '0.5rem',
            }}>
              Écrivez-moi
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0 2rem' }} />

            {sent ? (
              <div style={{
                background: CREAM, border: `2px solid ${SAGE}`,
                padding: '2.5rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', fontStyle: 'italic', color: SAGE, marginBottom: '0.75rem' }}>
                  Message envoyé !
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', lineHeight: 1.7, color: '#5A5A58' }}>
                  Merci pour votre message. Je vous répondrai dans les 48h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* name-row: column on mobile, 2-col on sm+ (responsive.css) */}
                <div className="name-row">
                  <Field label="Prénom"   name="prenom"    value={form.prenom}    onChange={handle} required />
                  <Field label="Nom"      name="nom"       value={form.nom}       onChange={handle} required />
                </div>
                <Field label="Email"     name="email"     type="email" value={form.email}     onChange={handle} required />
                <Field label="Téléphone" name="telephone" type="tel"   value={form.telephone} onChange={handle} />

                {/* Motif selector */}
                <div>
                  <label style={labelStyle}>Motif de consultation *</label>
                  <select
                    name="motif"
                    value={form.motif}
                    onChange={handle}
                    required
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="">Choisir un accompagnement…</option>
                    <option>Thérapie individuelle</option>
                    <option>Thérapie de couple</option>
                    <option>Anxiété & dépression</option>
                    <option>Traumatismes & EMDR</option>
                    <option>Développement personnel</option>
                    <option>Soutien professionnel</option>
                    <option>Autre / Je ne sais pas encore</option>
                  </select>
                </div>

                <TextareaField
                  label="Votre message"
                  name="message"
                  value={form.message}
                  onChange={handle}
                  required
                  rows={6}
                />

                {/* RGPD */}
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    name="accord"
                    checked={form.accord}
                    onChange={handle}
                    required
                    style={{ marginTop: '3px', accentColor: SAGE, flexShrink: 0 }}
                  />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.82rem', lineHeight: 1.6, color: '#5A5A58' }}>
                    J'accepte que mes données personnelles soient utilisées pour traiter ma demande de contact, conformément à la politique de confidentialité. *
                  </span>
                </label>

                <button type="submit" className="btn-sage" style={{ width: '100%', textAlign: 'center' }}>
                  Envoyer mon message
                </button>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.78rem', color: '#8FAF9F', textAlign: 'center' }}>
                  * Champs obligatoires — Réponse sous 48h ouvrées
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ rapide ─────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: TERR, marginBottom: '1rem' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontStyle: 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '2.5rem' }}>
            Questions fréquentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { q: 'Les séances sont-elles remboursées ?', a: 'Les consultations chez un psychologue libéral ne sont pas remboursées par la Sécurité Sociale, mais certaines mutuelles prévoient un remboursement partiel. Renseignez-vous auprès de votre mutuelle.' },
              { q: 'Comment se déroule la première séance ?', a: "La première séance est un entretien d'évaluation de 50 minutes. Nous faisons connaissance, vous exposez vos difficultés et nous voyons ensemble si et comment travailler ensemble." },
              { q: 'Est-ce que je peux consulter en ligne ?', a: "Oui, je propose des consultations par visioconférence pour les personnes qui ne peuvent pas se déplacer. La confidentialité et la qualité de l'accompagnement sont les mêmes qu'en présentiel." },
              { q: 'Y a-t-il un engagement de durée ?', a: "Non. La durée du suivi est définie ensemble au fil de l'accompagnement. Vous pouvez arrêter quand vous le souhaitez, idéalement en en parlant lors d'une séance." },
            ].map(({ q, a }, i, arr) => (
              <details key={q} style={{
                borderTop: '1px solid rgba(61,90,78,0.15)',
                borderBottom: i === arr.length - 1 ? '1px solid rgba(61,90,78,0.15)' : 'none',
                padding: '1.5rem 0',
              }}>
                <summary style={{
                  fontFamily: "'Jost', sans-serif", fontSize: '0.95rem', fontWeight: 500,
                  color: SAGE, cursor: 'pointer', listStyle: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {q}
                  <span style={{ fontSize: '1.2rem', color: TERR, flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '0.9rem', lineHeight: 1.8, color: '#5A5A58', marginTop: '1rem', maxWidth: '720px' }}>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
