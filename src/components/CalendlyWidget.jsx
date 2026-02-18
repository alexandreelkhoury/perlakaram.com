import { useEffect } from 'react'
import { useLang } from '../context/LangContext'

// Set this to Perla's actual Calendly URL once her account is created
// e.g. 'https://calendly.com/perla-karam'
const CALENDLY_URL = 'https://calendly.com/perlakarampsy'

const SAGE = '#3D5A4E'
const TERR = '#C4785A'
const CREAM = '#F5EFE6'

const placeholder = {
  fr: { icon: '📅', title: 'Réservation en ligne bientôt disponible', body: "L'agenda en ligne sera disponible très prochainement. En attendant, contactez-moi par téléphone ou via le formulaire ci-dessous." },
  en: { icon: '📅', title: 'Online booking coming soon', body: 'The online calendar will be available very soon. In the meantime, reach out by phone or via the form below.' },
  ar: { icon: '📅', title: 'الحجز عبر الإنترنت قريباً', body: 'سيكون التقويم الإلكتروني متاحاً قريباً جداً. في الوقت الراهن، تواصل معي عبر الهاتف أو النموذج أدناه.' },
}

export default function CalendlyWidget() {
  const { lang } = useLang()

  if (!CALENDLY_URL) {
    const p = placeholder[lang] || placeholder.fr
    const bodyFont = lang === 'ar' ? "'Cairo', sans-serif" : "'Jost', sans-serif"
    const displayFont = lang === 'ar' ? "'Cairo', sans-serif" : "'Cormorant Garamond', Georgia, serif"
    return (
      <div style={{
        minHeight: '220px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', textAlign: 'center',
        padding: '3rem 2rem', gap: '1rem',
        background: CREAM, border: `2px dashed rgba(61,90,78,0.2)`,
      }}>
        <span style={{ fontSize: '2.5rem' }}>{p.icon}</span>
        <h3 style={{ fontFamily: displayFont, fontSize: '1.4rem', fontStyle: lang === 'ar' ? 'normal' : 'italic', color: SAGE, fontWeight: 400 }}>
          {p.title}
        </h3>
        <p style={{ fontFamily: bodyFont, fontSize: '0.88rem', color: '#5A5A58', maxWidth: '400px', lineHeight: 1.7 }}>
          {p.body}
        </p>
      </div>
    )
  }

  const locale = lang === 'en' ? 'en' : 'fr'
  const widgetUrl = `${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=3d5a4e&locale=${locale}`

  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return (
    <div
      className="calendly-inline-widget"
      data-url={widgetUrl}
      style={{ minWidth: '320px', height: '700px', width: '100%' }}
    />
  )
}
