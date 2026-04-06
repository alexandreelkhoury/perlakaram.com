import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'
import articles from '../data/articles'

const SAGE     = '#3D5A4E'
const TERR     = '#A0856C'
const CREAM    = '#F5EFE6'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

export default function Article() {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"

  const article = articles.find(a => a.slug === slug)
  if (!article) return <Navigate to="/blog" replace />

  const title = article.title[lang] || article.title.fr
  const content = article.content[lang] || article.content.fr
  const readTime = article.readTime[lang] || article.readTime.fr
  const backLabel = lang === 'ar' ? 'العودة إلى المدوّنة' : lang === 'en' ? 'Back to blog' : 'Retour au blog'
  const ctaLabel = lang === 'ar' ? 'حجز موعد' : lang === 'en' ? 'Book a session' : 'Prendre rendez-vous'

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-GB' : 'fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  }

  const renderBlock = (block, i) => {
    const base = { fontFamily: bodyFont, color: '#3A3A38', lineHeight: 1.9, fontSize: '1rem' }

    switch (block.type) {
      case 'intro':
        return (
          <div key={i} style={{ ...base, fontSize: '1.05rem', color: '#4A4A48', marginBottom: '2.5rem', whiteSpace: 'pre-line' }}>
            {block.text}
          </div>
        )
      case 'heading':
        return (
          <h2 key={i} style={{
            fontFamily: displayFont, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400,
            color: CHARCOAL, margin: '3rem 0 1.25rem', lineHeight: 1.3,
          }}>
            {block.text}
          </h2>
        )
      case 'subheading':
        return (
          <h3 key={i} style={{
            fontFamily: bodyFont, fontSize: '1.05rem', fontWeight: 600,
            color: SAGE, margin: '2rem 0 0.75rem',
          }}>
            {block.text}
          </h3>
        )
      case 'paragraph':
        return <p key={i} style={{ ...base, marginBottom: '1.25rem', whiteSpace: 'pre-line' }}>{block.text}</p>
      case 'list':
        return (
          <ul key={i} style={{ ...base, marginBottom: '1.25rem', paddingLeft: isAr ? '0' : '1.5rem', paddingRight: isAr ? '1.5rem' : '0' }}>
            {block.items.map((item, j) => (
              <li key={j} style={{ marginBottom: '0.4rem' }}>{item}</li>
            ))}
          </ul>
        )
      case 'quote':
        return (
          <blockquote key={i} style={{
            ...base, fontStyle: isAr ? 'normal' : 'italic',
            borderLeft: isAr ? 'none' : `3px solid ${TERR}`,
            borderRight: isAr ? `3px solid ${TERR}` : 'none',
            paddingLeft: isAr ? '0' : '1.5rem',
            paddingRight: isAr ? '1.5rem' : '0',
            margin: '2rem 0', color: '#5A5A58',
          }}>
            {block.text}
          </blockquote>
        )
      case 'closing':
        return (
          <div key={i} style={{
            ...base, marginTop: '3rem', padding: '2rem',
            background: CREAM, borderRadius: '12px',
            fontSize: '1.02rem', whiteSpace: 'pre-line', lineHeight: 2,
          }}>
            {block.text}
          </div>
        )
      case 'cta':
        return (
          <div key={i} style={{
            marginTop: '2rem', padding: '2rem',
            background: `linear-gradient(135deg, ${SAGE}, #2D4539)`,
            borderRadius: '12px', textAlign: 'center',
          }}>
            <p style={{ fontFamily: bodyFont, fontSize: '0.95rem', color: 'rgba(245,239,230,0.9)', lineHeight: 1.9, whiteSpace: 'pre-line', marginBottom: '1.5rem' }}>
              {block.text}
            </p>
            <Link to="/contact" className="btn-outline" style={{ color: CREAM, borderColor: 'rgba(245,239,230,0.4)' }}>
              {ctaLabel}
            </Link>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <Seo title={`${title} — Perla Karam`} description={article.excerpt[lang] || article.excerpt.fr} path={`/blog/${slug}`} lang={lang} />

      {/* Hero */}
      <section style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 50%, #1E3028 100%)`,
        padding: 'calc(72px + clamp(3rem,6vw,5rem)) clamp(1.25rem,4vw,2rem) clamp(3rem,6vw,5rem)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontFamily: bodyFont, fontSize: '0.8rem', color: 'rgba(245,239,230,0.5)' }}>{formatDate(article.date)}</span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(245,239,230,0.3)' }} />
            <span style={{ fontFamily: bodyFont, fontSize: '0.8rem', color: 'rgba(245,239,230,0.5)' }}>{readTime}</span>
          </div>
          <h1 style={{
            fontFamily: displayFont,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400,
            color: CREAM, lineHeight: 1.3, marginBottom: '1.5rem',
          }}>
            {title}
          </h1>
          <div style={{ width: '44px', height: '1.5px', background: TERR, margin: '0 auto' }} />
        </div>
      </section>

      {/* Content */}
      <section style={{ background: WARM, padding: 'clamp(3rem,6vw,5rem) clamp(1.25rem,4vw,2rem)' }}>
        <article style={{ maxWidth: '680px', margin: '0 auto', direction: isAr ? 'rtl' : 'ltr' }}>
          {content.map(renderBlock)}
        </article>

        <div style={{ maxWidth: '680px', margin: '3rem auto 0', textAlign: 'center' }}>
          <Link to="/blog" style={{
            fontFamily: bodyFont, fontSize: '0.88rem',
            color: SAGE, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            {isAr ? '→' : '←'} {backLabel}
          </Link>
        </div>
      </section>
    </div>
  )
}
