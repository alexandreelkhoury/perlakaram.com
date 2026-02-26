import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import Seo from '../components/Seo'

const SAGE = '#3D5A4E'
const CREAM = '#F5EFE6'
const CHARCOAL = '#1C1C1A'

const texts = {
  fr: { title: 'Page introuvable — Perla Karam', desc: 'Cette page n\'existe pas.', h1: 'Page introuvable', p: 'La page que vous recherchez n\'existe pas ou a été déplacée.', cta: 'Retour à l\'accueil' },
  en: { title: 'Page Not Found — Perla Karam', desc: 'This page does not exist.', h1: 'Page not found', p: 'The page you are looking for does not exist or has been moved.', cta: 'Back to home' },
  ar: { title: 'الصفحة غير موجودة — بيرلا كرم', desc: 'هذه الصفحة غير موجودة.', h1: 'الصفحة غير موجودة', p: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', cta: 'العودة للرئيسية' },
}

export default function NotFound() {
  const { lang } = useLang()
  const isAr = lang === 'ar'
  const bodyFont = isAr ? "'Cairo', sans-serif" : "'Jost', sans-serif"
  const displayFont = isAr ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"
  const tx = texts[lang] || texts.fr

  return (
    <div style={{ paddingTop: '72px' }}>
      <Seo title={tx.title} description={tx.desc} path="/404" lang={lang} />
      <section style={{
        minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(4rem,8vw,8rem) 2rem', textAlign: 'center',
      }}>
        <div style={{ maxWidth: '500px' }}>
          <div style={{ fontFamily: displayFont, fontSize: 'clamp(5rem,10vw,8rem)', fontWeight: 300, color: 'rgba(61,90,78,0.15)', lineHeight: 1, marginBottom: '1rem' }}>
            404
          </div>
          <h1 style={{ fontFamily: displayFont, fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontStyle: isAr ? 'normal' : 'italic', fontWeight: 400, color: CHARCOAL, marginBottom: '1rem' }}>
            {tx.h1}
          </h1>
          <p style={{ fontFamily: bodyFont, fontSize: '0.92rem', lineHeight: 1.8, color: '#5A5A58', marginBottom: '2rem' }}>
            {tx.p}
          </p>
          <Link to="/" className="btn-sage">{tx.cta}</Link>
        </div>
      </section>
    </div>
  )
}
