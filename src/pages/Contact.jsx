import { useState } from 'react'
import { useLang } from '../context/LangContext'
import CalendlyWidget from '../components/CalendlyWidget'

// Paste Perla's Web3Forms access key here (https://web3forms.com)
const WEB3FORMS_KEY = ''

const SAGE     = '#3D5A4E'
const TERR     = '#C4785A'
const CREAM    = '#F5EFE6'
const BLUSH    = '#E8C4B0'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

export default function Contact() {
  const { lang, t } = useLang()
  const c = t.contact
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem',
    border: '1px solid rgba(61,90,78,0.25)',
    background: WARM, color: CHARCOAL,
    fontFamily: bodyFont, fontSize: '0.9rem',
    outline: 'none', transition: 'border-color 0.3s',
    boxSizing: 'border-box',
    textAlign: isAr ? 'right' : 'left',
  }

  const labelStyle = {
    display: 'block', fontFamily: bodyFont,
    fontSize: '0.75rem', letterSpacing: isAr ? '0.04em' : '0.12em',
    textTransform: isAr ? 'none' : 'uppercase', color: SAGE,
    marginBottom: '0.5rem', fontWeight: 500,
  }

  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    motif: '', message: '', accord: false,
  })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handle = e => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async e => {
    e.preventDefault()
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: `${form.prenom} ${form.nom}`.trim(),
          email: form.email,
          phone: form.telephone || undefined,
          subject: `[perlakaram.com] ${form.motif || 'Nouveau message'}`,
          message: form.message,
          language: lang,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  function Field({ label, name, type = 'text', value, onChange, required }) {
    const [focused, setFocused] = useState(false)
    return (
      <div>
        <label style={labelStyle}>{label}{required && ' *'}</label>
        <input
          type={type} name={name} value={value} onChange={onChange} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
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
          name={name} rows={rows} value={value} onChange={onChange} required={required}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '120px', borderColor: focused ? SAGE : 'rgba(61,90,78,0.25)' }}
        />
      </div>
    )
  }

  const contactItems = [c.address, c.phone, c.email, c.hours]

  return (
    <div style={{ paddingTop: '72px' }}>

      {/* ── Hero banner ────────────────────────────────────── */}
      <div style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 100%)`,
        padding: 'clamp(4rem,8vw,7rem) 2rem',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: BLUSH, marginBottom: '1rem' }}>
            {c.heroEyebrow}
          </p>
          <h1 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CREAM,
            lineHeight: 1.2, maxWidth: '660px',
          }}>
            {c.heroTitle}
          </h1>
          <p style={{ fontFamily: bodyFont, fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,239,230,0.7)', maxWidth: '520px', marginTop: '1.5rem' }}>
            {c.heroP}
          </p>
        </div>
      </div>

      {/* ── Calendly booking ───────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{
              fontFamily: bodyFont, fontSize: '0.72rem',
              letterSpacing: isAr ? '0.04em' : '0.22em',
              textTransform: isAr ? 'none' : 'uppercase',
              color: TERR, marginBottom: '1rem',
            }}>
              {c.bookingEyebrow}
            </p>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL,
              marginBottom: '0.75rem',
            }}>
              {c.bookingTitle}
            </h2>
            <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', color: '#5A5A58', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              {c.bookingSubtitle}
            </p>
          </div>
          <div style={{
            background: WARM,
            border: '1px solid rgba(61,90,78,0.1)',
            padding: '0.5rem',
          }}>
            <CalendlyWidget />
          </div>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────────── */}
      <section style={{ padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div className="contact-grid" style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* ── Contact info ──────────────────────────────── */}
          <div>
            <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: TERR, marginBottom: '1rem' }}>
              {c.infoEyebrow}
            </p>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
            }}>
              {c.infoTitle}
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '2.5rem' }}>
              {contactItems.map(({ icon, title, lines }) => (
                <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px', height: '40px', background: CREAM, flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem',
                  }}>
                    {icon}
                  </div>
                  <div>
                    <p style={{ fontFamily: bodyFont, fontSize: '0.7rem', letterSpacing: isAr ? '0.04em' : '0.14em', textTransform: isAr ? 'none' : 'uppercase', color: '#8FAF9F', marginBottom: '4px' }}>
                      {title}
                    </p>
                    {lines.map(l => (
                      <p key={l} style={{ fontFamily: bodyFont, fontSize: '0.9rem', color: CHARCOAL, lineHeight: 1.6 }}>{l}</p>
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
              <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.15em', textTransform: isAr ? 'none' : 'uppercase' }}>
                {c.mapLabel}
              </p>
              <p style={{ fontFamily: bodyFont, fontSize: '0.75rem', color: TERR, textDecoration: 'underline', cursor: 'pointer' }}>
                {c.mapLink}
              </p>
            </div>
          </div>

          {/* ── Form ─────────────────────────────────────── */}
          <div>
            <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: TERR, marginBottom: '1rem' }}>
              {c.formEyebrow}
            </p>
            <h2 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, lineHeight: 1.3,
              marginBottom: '0.5rem',
            }}>
              {c.formTitle}
            </h2>
            <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '1.25rem 0 2rem' }} />

            {sent ? (
              <div style={{
                background: CREAM, border: `2px solid ${SAGE}`,
                padding: '2.5rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: displayFont, fontSize: '1.6rem', fontStyle: isAr ? 'normal' : 'italic', color: SAGE, marginBottom: '0.75rem' }}>
                  {c.sentTitle}
                </h3>
                <p style={{ fontFamily: bodyFont, fontSize: '0.9rem', lineHeight: 1.7, color: '#5A5A58' }}>
                  {c.sentP}
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {error && (
                  <div style={{
                    background: '#FEF2F2', border: '1px solid #FECACA',
                    padding: '1rem 1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
                  }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚠️</span>
                    <div>
                      <p style={{ fontFamily: bodyFont, fontSize: '0.85rem', fontWeight: 600, color: '#991B1B', marginBottom: '2px' }}>
                        {c.errorTitle}
                      </p>
                      <p style={{ fontFamily: bodyFont, fontSize: '0.82rem', color: '#7F1D1D', lineHeight: 1.5 }}>
                        {c.errorP}
                      </p>
                    </div>
                  </div>
                )}
                <div className="name-row">
                  <Field label={c.fieldFirst} name="prenom" value={form.prenom} onChange={handle} required />
                  <Field label={c.fieldLast}  name="nom"    value={form.nom}    onChange={handle} required />
                </div>
                <Field label={c.fieldEmail} name="email"     type="email" value={form.email}     onChange={handle} required />
                <Field label={c.fieldPhone} name="telephone" type="tel"   value={form.telephone} onChange={handle} />

                <div>
                  <label style={labelStyle}>{c.fieldMotif} *</label>
                  <select
                    name="motif" value={form.motif} onChange={handle} required
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="">{c.selectDefault}</option>
                    {c.selectOptions.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                </div>

                <TextareaField
                  label={c.fieldMessage} name="message"
                  value={form.message} onChange={handle} required rows={6}
                />

                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                  <input
                    type="checkbox" name="accord" checked={form.accord} onChange={handle} required
                    style={{ marginTop: '3px', accentColor: SAGE, flexShrink: 0 }}
                  />
                  <span style={{ fontFamily: bodyFont, fontSize: '0.82rem', lineHeight: 1.6, color: '#5A5A58' }}>
                    {c.fieldConsent} *
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-sage"
                  style={{ width: '100%', textAlign: 'center', fontFamily: bodyFont, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? c.sending : c.submitBtn}
                </button>
                <p style={{ fontFamily: bodyFont, fontSize: '0.78rem', color: '#8FAF9F', textAlign: 'center' }}>
                  {c.formNote}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FAQ rapide ─────────────────────────────────────── */}
      <section style={{ background: CREAM, padding: 'clamp(3rem,8vw,6rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontFamily: bodyFont, fontSize: '0.72rem', letterSpacing: isAr ? '0.04em' : '0.22em', textTransform: isAr ? 'none' : 'uppercase', color: TERR, marginBottom: '1rem' }}>
            {c.faqEyebrow}
          </p>
          <h2 style={{ fontFamily: displayFont, fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '2.5rem' }}>
            {c.faqTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {c.faqs.map(({ q, a }, i, arr) => (
              <details key={q} style={{
                borderTop: '1px solid rgba(61,90,78,0.15)',
                borderBottom: i === arr.length - 1 ? '1px solid rgba(61,90,78,0.15)' : 'none',
                padding: '1.5rem 0',
              }}>
                <summary style={{
                  fontFamily: bodyFont, fontSize: '0.95rem', fontWeight: 500,
                  color: SAGE, cursor: 'pointer', listStyle: 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  {q}
                  <span style={{ fontSize: '1.2rem', color: TERR, flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ fontFamily: bodyFont, fontSize: '0.9rem', lineHeight: 1.8, color: '#5A5A58', marginTop: '1rem', maxWidth: '720px' }}>
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
