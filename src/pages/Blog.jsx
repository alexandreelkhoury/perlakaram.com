import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'
import articles from '../data/articles'

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

  const readMore = lang === 'ar' ? 'اقرأ المقال' : lang === 'en' ? 'Read article' : "Lire l'article"

  const formatDate = (dateStr) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-GB' : 'fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric',
    })
  }

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

      {/* Articles */}
      <section style={{ background: WARM, padding: 'clamp(4rem,8vw,7rem) clamp(1.25rem,4vw,2rem)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', direction: isAr ? 'rtl' : 'ltr' }}>
          {articles.map((article) => {
            const title = article.title[lang] || article.title.fr
            const excerpt = article.excerpt[lang] || article.excerpt.fr
            const readTime = article.readTime[lang] || article.readTime.fr

            return (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                style={{ textDecoration: 'none', display: 'block', marginBottom: '2.5rem' }}
              >
                <article style={{
                  background: '#fff',
                  border: `1px solid rgba(61,90,78,0.1)`,
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(61,90,78,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: bodyFont, fontSize: '0.78rem', color: TERR }}>{formatDate(article.date)}</span>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(61,90,78,0.2)' }} />
                    <span style={{ fontFamily: bodyFont, fontSize: '0.78rem', color: '#8FAF9F' }}>{readTime}</span>
                  </div>

                  <h2 style={{
                    fontFamily: displayFont,
                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                    fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400,
                    color: CHARCOAL, lineHeight: 1.35, marginBottom: '0.75rem',
                  }}>
                    {title}
                  </h2>

                  <p style={{
                    fontFamily: bodyFont, fontSize: '0.92rem',
                    lineHeight: 1.8, color: '#5A5A58', marginBottom: '1.25rem',
                  }}>
                    {excerpt}
                  </p>

                  <span style={{
                    fontFamily: bodyFont, fontSize: '0.85rem',
                    color: SAGE, fontWeight: 500,
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  }}>
                    {readMore} {isAr ? '←' : '→'}
                  </span>
                </article>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
