import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'
import articles from '../data/articles'

const SAGE     = '#3D5A4E'
const TERR     = '#A0856C'
const CREAM    = '#F5EFE6'
const CHARCOAL = '#1C1C1A'
const WARM     = '#FEFAF5'

/* ═══════════════════════════════════════════════════════════════
   HOOKS
   ═══════════════════════════════════════════════════════════════ */

function useScrollProgress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setP(h > 0 ? Math.min(window.scrollY / h, 1) : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return p
}

/* Intersection Observer for scroll-reveal */
function useReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

/* Reusable reveal wrapper */
function Reveal({ children, delay = 0, y = 32, style = {} }) {
  const [ref, visible] = useReveal(0.12)
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
      transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      ...style,
    }}>
      {children}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   INLINE STYLES (CSS-in-JS style object for article-specific CSS)
   ═══════════════════════════════════════════════════════════════ */

const ARTICLE_CSS = `
  .article-dropcap::first-letter {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 4.2em;
    font-style: italic;
    font-weight: 400;
    float: left;
    line-height: 0.65;
    margin-right: 0.12em;
    margin-top: 0.1em;
    color: ${SAGE};
  }
  [dir="rtl"] .article-dropcap::first-letter {
    float: right;
    margin-right: 0;
    margin-left: 0.12em;
    font-style: normal;
  }
  .article-quote-border {
    position: relative;
  }
  .article-quote-border::before {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0;
    width: 2px;
    background: linear-gradient(to bottom, ${TERR}, ${SAGE});
    border-radius: 2px;
  }
  [dir="rtl"] .article-quote-border::before {
    left: auto;
    right: 0;
  }
  .article-list-item::before {
    content: '';
    position: absolute;
    top: 0.72em;
    left: 0;
    width: 16px;
    height: 1px;
    background: ${TERR};
    opacity: 0.55;
  }
  [dir="rtl"] .article-list-item::before {
    left: auto;
    right: 0;
  }
  .article-heading-line {
    position: relative;
    display: inline;
  }
  .article-heading-line::after {
    content: '';
    display: block;
    width: 36px;
    height: 2px;
    background: ${TERR};
    margin-top: 0.75rem;
    border-radius: 1px;
  }
  .article-cta-btn {
    display: inline-block;
    background: transparent;
    color: ${CREAM};
    font-family: 'Jost', sans-serif;
    font-size: 0.76rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 1rem 2.8rem;
    text-decoration: none;
    border: 1px solid rgba(245,239,230,0.25);
    transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
    position: relative;
    overflow: hidden;
  }
  .article-cta-btn:hover {
    background: rgba(245,239,230,0.1);
    border-color: rgba(245,239,230,0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  }
  .back-link {
    opacity: 0.5;
    transition: opacity 0.3s ease, gap 0.3s ease;
  }
  .back-link:hover { opacity: 1; }

  @keyframes progressGlow {
    0%, 100% { box-shadow: none; }
    50% { box-shadow: 0 0 8px ${TERR}66; }
  }
`

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Article() {
  const { slug } = useParams()
  const { lang, t } = useLang()
  const isAr = lang === 'ar'
  const bodyFont  = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"
  const progress = useScrollProgress()

  const article = articles.find(a => a.slug === slug)
  if (!article) return <Navigate to="/blog" replace />

  const title    = article.title[lang]   || article.title.fr
  const content  = article.content[lang]  || article.content.fr
  const readTime = article.readTime[lang] || article.readTime.fr
  const backLabel = lang === 'ar' ? 'العودة إلى المدوّنة' : lang === 'en' ? 'Back to blog' : 'Retour au blog'
  const ctaLabel  = lang === 'ar' ? 'حجز موعد' : lang === 'en' ? 'Book a session' : 'Prendre rendez-vous'

  const formatDate = (ds) => {
    const d = new Date(ds)
    return d.toLocaleDateString(
      lang === 'ar' ? 'ar-EG' : lang === 'en' ? 'en-GB' : 'fr-FR',
      { year: 'numeric', month: 'long', day: 'numeric' },
    )
  }

  /* ── Block counter for headings ── */
  let headingCount = 0

  const renderBlock = (block, i) => {
    switch (block.type) {

      /* ── INTRO with CSS drop-cap ── */
      case 'intro':
        return (
          <Reveal key={i} delay={0.1}>
            <p className="article-dropcap" style={{
              fontFamily: bodyFont,
              fontSize: '1.08rem',
              color: '#4A4A48',
              lineHeight: 2.15,
              marginBottom: '1rem',
              whiteSpace: 'pre-line',
            }}>
              {block.text}
            </p>
            {/* Elegant separator after intro */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '1.5rem', margin: '2.5rem 0 3rem', direction: 'ltr',
            }}>
              <div style={{ flex: 1, maxWidth: '80px', height: '0.5px', background: `linear-gradient(to right, transparent, ${TERR}55)` }} />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                <circle cx="12" cy="12" r="3" stroke={TERR} strokeWidth="0.8" />
                <circle cx="12" cy="12" r="7" stroke={TERR} strokeWidth="0.4" opacity="0.5" />
              </svg>
              <div style={{ flex: 1, maxWidth: '80px', height: '0.5px', background: `linear-gradient(to left, transparent, ${TERR}55)` }} />
            </div>
          </Reveal>
        )

      /* ── HEADING — full-bleed accent band ── */
      case 'heading': {
        headingCount++
        const isFirst = headingCount === 1
        return (
          <Reveal key={i} delay={0.05}>
            {/* Section break — full-width band for non-first headings */}
            {!isFirst && (
              <div style={{
                margin: '4rem -6vw 3.5rem',
                padding: '2.8rem 6vw',
                background: `linear-gradient(135deg, ${CREAM}cc, ${CREAM}88)`,
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Faint decorative number */}
                <span style={{
                  position: 'absolute',
                  top: '50%', right: isAr ? 'auto' : '6vw', left: isAr ? '6vw' : 'auto',
                  transform: 'translateY(-50%)',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  fontStyle: 'italic', fontWeight: 300,
                  color: SAGE,
                  opacity: 0.06,
                  lineHeight: 1,
                  userSelect: 'none',
                }}>
                  {String(headingCount).padStart(2, '0')}
                </span>
                <h2 style={{
                  fontFamily: displayFont,
                  fontSize: 'clamp(1.55rem, 3vw, 2.1rem)',
                  fontStyle: isAr ? 'normal' : 'italic',
                  fontWeight: 400,
                  color: CHARCOAL,
                  lineHeight: 1.35,
                  position: 'relative',
                }}>
                  <span className="article-heading-line">{block.text}</span>
                </h2>
              </div>
            )}
            {isFirst && (
              <h2 style={{
                fontFamily: displayFont,
                fontSize: 'clamp(1.55rem, 3vw, 2.1rem)',
                fontStyle: isAr ? 'normal' : 'italic',
                fontWeight: 400,
                color: CHARCOAL,
                lineHeight: 1.35,
                marginBottom: '1.75rem',
              }}>
                <span className="article-heading-line">{block.text}</span>
              </h2>
            )}
          </Reveal>
        )
      }

      /* ── SUBHEADING ── */
      case 'subheading':
        return (
          <Reveal key={i} delay={0.05} y={20}>
            <h3 style={{
              fontFamily: bodyFont,
              fontSize: '0.92rem',
              fontWeight: 600,
              color: SAGE,
              margin: '2.8rem 0 0.9rem',
              letterSpacing: '0.04em',
              textTransform: isAr ? 'none' : 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{
                display: 'inline-block',
                width: '24px',
                height: '1px',
                background: TERR,
                flexShrink: 0,
              }} />
              {block.text}
            </h3>
          </Reveal>
        )

      /* ── PARAGRAPH ── */
      case 'paragraph':
        return (
          <Reveal key={i} delay={0.03} y={16}>
            <p style={{
              fontFamily: bodyFont,
              color: '#3A3A38',
              lineHeight: 2.05,
              fontSize: '0.98rem',
              marginBottom: '1.4rem',
              whiteSpace: 'pre-line',
            }}>
              {block.text}
            </p>
          </Reveal>
        )

      /* ── LIST ── */
      case 'list':
        return (
          <Reveal key={i} delay={0.05} y={16}>
            <ul style={{
              fontFamily: bodyFont,
              color: '#3A3A38',
              lineHeight: 1.95,
              fontSize: '0.96rem',
              marginBottom: '1.5rem',
              listStyle: 'none',
              padding: 0,
            }}>
              {block.items.map((item, j) => (
                <li key={j} className="article-list-item" style={{
                  position: 'relative',
                  paddingLeft: isAr ? 0 : '2rem',
                  paddingRight: isAr ? '2rem' : 0,
                  marginBottom: '0.55rem',
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        )

      /* ── QUOTE — asymmetric pull-quote ── */
      case 'quote':
        return (
          <Reveal key={i} delay={0.08}>
            <blockquote className="article-quote-border" style={{
              margin: '3rem 0 3rem',
              marginLeft: isAr ? 0 : '-1.5rem',
              marginRight: isAr ? '-1.5rem' : 0,
              paddingLeft: isAr ? 0 : '2rem',
              paddingRight: isAr ? '2rem' : 0,
              paddingTop: '1.75rem',
              paddingBottom: '1.75rem',
              position: 'relative',
            }}>
              {/* Large quotation mark */}
              <span style={{
                display: 'block',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '5rem',
                lineHeight: 0.6,
                color: TERR,
                opacity: 0.18,
                marginBottom: '0.5rem',
                userSelect: 'none',
              }}>
                {isAr ? '\u201D' : '\u201C'}
              </span>
              <p style={{
                fontFamily: displayFont,
                fontSize: 'clamp(1.08rem, 1.8vw, 1.2rem)',
                fontStyle: isAr ? 'normal' : 'italic',
                fontWeight: 400,
                lineHeight: 2,
                color: '#4A4A48',
              }}>
                {block.text}
              </p>
            </blockquote>
          </Reveal>
        )

      /* ── CLOSING — warm editorial card ── */
      case 'closing':
        return (
          <Reveal key={i} delay={0.1}>
            <div style={{
              margin: '4rem -2vw 0',
              padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(2rem, 4vw, 3rem)',
              background: CREAM,
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative corner motif */}
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{
                position: 'absolute',
                top: 0,
                left: isAr ? 'auto' : 0,
                right: isAr ? 0 : 'auto',
                opacity: 0.08,
              }}>
                <path d="M0 0 L60 0 L0 60 Z" fill={SAGE} />
              </svg>
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" style={{
                position: 'absolute',
                bottom: 0,
                right: isAr ? 'auto' : 0,
                left: isAr ? 0 : 'auto',
                opacity: 0.08,
                transform: 'rotate(180deg)',
              }}>
                <path d="M0 0 L60 0 L0 60 Z" fill={TERR} />
              </svg>

              {/* Vertical accent */}
              <div style={{
                position: 'absolute',
                top: '1.5rem', bottom: '1.5rem',
                left: isAr ? 'auto' : '0',
                right: isAr ? '0' : 'auto',
                width: '3px',
                background: `linear-gradient(to bottom, ${SAGE}, ${TERR})`,
                borderRadius: '2px',
              }} />

              <p style={{
                fontFamily: displayFont,
                fontSize: 'clamp(1.12rem, 2vw, 1.3rem)',
                fontStyle: isAr ? 'normal' : 'italic',
                fontWeight: 400,
                color: CHARCOAL,
                lineHeight: 2.15,
                whiteSpace: 'pre-line',
                position: 'relative',
              }}>
                {block.text}
              </p>
            </div>
          </Reveal>
        )

      /* ── CTA — immersive dark section ── */
      case 'cta':
        return (
          <Reveal key={i} delay={0.12}>
            <div style={{
              margin: '2rem -6vw 0',
              padding: 'clamp(3.5rem, 7vw, 5rem) clamp(2rem, 6vw, 4rem)',
              background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 40%, #1E3028 100%)`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Atmospheric layers */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 30% 20%, rgba(160,133,108,0.08) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 80% 80%, rgba(245,239,230,0.04) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              {/* Large watermark */}
              <span style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(12rem, 22vw, 20rem)',
                fontStyle: 'italic', fontWeight: 300,
                color: 'rgba(255,255,255,0.025)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                P
              </span>

              {/* Ornamental circles */}
              <div style={{
                display: 'flex', justifyContent: 'center', marginBottom: '2rem',
                position: 'relative',
              }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" style={{ opacity: 0.25 }}>
                  <circle cx="16" cy="16" r="6" stroke={CREAM} strokeWidth="0.5" />
                  <circle cx="16" cy="16" r="12" stroke={CREAM} strokeWidth="0.3" />
                  <circle cx="16" cy="16" r="1.5" fill={TERR} opacity="0.6" />
                </svg>
              </div>

              <p style={{
                fontFamily: displayFont,
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                fontStyle: isAr ? 'normal' : 'italic',
                fontWeight: 400,
                color: 'rgba(245,239,230,0.9)',
                lineHeight: 2.1,
                whiteSpace: 'pre-line',
                maxWidth: '500px',
                margin: '0 auto 2.5rem',
                position: 'relative',
              }}>
                {block.text}
              </p>

              <Link to="/contact" className="article-cta-btn" style={{ position: 'relative' }}>
                {ctaLabel}
              </Link>
            </div>
          </Reveal>
        )

      default:
        return null
    }
  }

  return (
    <div>
      <style>{ARTICLE_CSS}</style>
      <Seo title={`${title} — Perla Karam`} description={article.excerpt[lang] || article.excerpt.fr} path={`/blog/${slug}`} lang={lang} />

      {/* ── Reading progress ── */}
      <div style={{
        position: 'fixed', top: 0, left: 0,
        width: `${progress * 100}%`,
        height: '2px',
        background: `linear-gradient(to right, ${SAGE}, ${TERR})`,
        zIndex: 9999,
        transition: 'width 0.08s linear',
      }} />

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(155deg, ${SAGE} 0%, #2D4539 50%, #1E3028 100%)`,
        padding: 'calc(72px + clamp(5rem, 10vw, 9rem)) clamp(1.25rem, 4vw, 2rem) clamp(5rem, 10vw, 8rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Atmospheric radial glows */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 25% 30%, rgba(160,133,108,0.1) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 75% 70%, rgba(245,239,230,0.04) 0%, transparent 50%)',
          pointerEvents: 'none',
        }} />

        {/* Giant watermark initial */}
        <span style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(16rem, 35vw, 32rem)',
          fontStyle: 'italic', fontWeight: 300,
          color: 'rgba(255,255,255,0.02)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          P
        </span>

        <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <div className="anim-fade-up" style={{ opacity: 0, marginBottom: '3rem' }}>
            <Link to="/blog" className="back-link" style={{
              fontFamily: bodyFont,
              fontSize: '0.7rem',
              letterSpacing: isAr ? '0.04em' : '0.2em',
              textTransform: isAr ? 'none' : 'uppercase',
              color: 'rgba(245,239,230,0.5)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}>
              {isAr ? '→' : '←'} {backLabel}
            </Link>
          </div>

          {/* Eyebrow label */}
          <div className="anim-fade-up anim-delay-1" style={{ opacity: 0 }}>
            <p style={{
              fontFamily: bodyFont,
              fontSize: '0.68rem',
              letterSpacing: isAr ? '0.04em' : '0.25em',
              textTransform: isAr ? 'none' : 'uppercase',
              color: TERR,
              marginBottom: '1.5rem',
              opacity: 0.7,
            }}>
              {lang === 'ar' ? 'مقال' : lang === 'en' ? 'Article' : 'Article'}
            </p>
          </div>

          {/* Title */}
          <div className="anim-fade-up anim-delay-2" style={{ opacity: 0 }}>
            <h1 style={{
              fontFamily: displayFont,
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontStyle: isAr ? 'normal' : 'italic',
              fontWeight: 400,
              color: CREAM,
              lineHeight: 1.25,
              marginBottom: '2.5rem',
            }}>
              {title}
            </h1>
          </div>

          {/* Ornamental divider */}
          <div className="anim-fade-up anim-delay-3" style={{
            opacity: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1.25rem', marginBottom: '2.5rem', direction: 'ltr',
          }}>
            <div style={{ width: '48px', height: '0.5px', background: `linear-gradient(to right, transparent, ${TERR}66)` }} />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <rect x="1" y="1" width="6" height="6" stroke={TERR} strokeWidth="0.5" opacity="0.5" transform="rotate(45 4 4)" />
            </svg>
            <div style={{ width: '48px', height: '0.5px', background: `linear-gradient(to left, transparent, ${TERR}66)` }} />
          </div>

          {/* Meta info */}
          <div className="anim-fade-up anim-delay-4" style={{
            opacity: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '2rem',
          }}>
            <span style={{
              fontFamily: bodyFont,
              fontSize: '0.76rem',
              letterSpacing: '0.04em',
              color: 'rgba(245,239,230,0.4)',
            }}>
              {formatDate(article.date)}
            </span>
            <span style={{
              width: '1px', height: '14px',
              background: 'rgba(245,239,230,0.15)',
            }} />
            <span style={{
              fontFamily: bodyFont,
              fontSize: '0.76rem',
              letterSpacing: '0.04em',
              color: 'rgba(245,239,230,0.4)',
            }}>
              {readTime}
            </span>
          </div>
        </div>

        {/* Scroll hint arrow */}
        <div className="anim-fade-up anim-delay-5" style={{
          opacity: 0,
          position: 'absolute',
          bottom: 'clamp(1.5rem, 3vw, 2.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" style={{ opacity: 0.2 }}>
            <path d="M8 0 L8 20 M2 15 L8 21 L14 15" stroke={CREAM} strokeWidth="1" />
          </svg>
        </div>
      </section>

      {/* ═══ CONTENT ════════════════════════════════════════════════ */}
      <section style={{
        background: WARM,
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)',
        position: 'relative',
      }}>
        {/* Subtle side accent lines — desktop only */}
        <div className="floating-card" style={{
          position: 'absolute',
          left: 'calc(50% - 400px)',
          top: '8rem', bottom: '8rem',
          width: '1px',
          background: `linear-gradient(to bottom, transparent 0%, ${TERR}22 15%, ${TERR}22 85%, transparent 100%)`,
        }} />
        <div className="floating-card" style={{
          position: 'absolute',
          right: 'calc(50% - 400px)',
          top: '8rem', bottom: '8rem',
          width: '1px',
          background: `linear-gradient(to bottom, transparent 0%, ${SAGE}15 15%, ${SAGE}15 85%, transparent 100%)`,
        }} />

        <article style={{
          maxWidth: '640px',
          margin: '0 auto',
          direction: isAr ? 'rtl' : 'ltr',
        }}>
          {content.map(renderBlock)}
        </article>

        {/* ── Footer back link ── */}
        <div style={{
          maxWidth: '640px',
          margin: '5rem auto 0',
          textAlign: 'center',
        }}>
          {/* Ornamental end-mark */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '1.5rem', marginBottom: '2.5rem', direction: 'ltr',
          }}>
            <div style={{ width: '60px', height: '0.5px', background: `linear-gradient(to right, transparent, rgba(61,90,78,0.12))` }} />
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.2 }}>
              <rect x="2" y="2" width="8" height="8" stroke={SAGE} strokeWidth="0.6" transform="rotate(45 6 6)" />
              <circle cx="6" cy="6" r="1.5" fill={TERR} opacity="0.4" />
            </svg>
            <div style={{ width: '60px', height: '0.5px', background: `linear-gradient(to left, transparent, rgba(61,90,78,0.12))` }} />
          </div>

          <Link to="/blog" className="back-link" style={{
            fontFamily: bodyFont,
            fontSize: '0.78rem',
            letterSpacing: isAr ? '0.04em' : '0.16em',
            textTransform: isAr ? 'none' : 'uppercase',
            color: SAGE,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
          }}>
            {isAr ? '→' : '←'} {backLabel}
          </Link>
        </div>
      </section>
    </div>
  )
}
