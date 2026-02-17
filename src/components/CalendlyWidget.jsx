import { useEffect } from 'react'
import { useLang } from '../context/LangContext'

// Replace this with Perla's actual Calendly URL
const CALENDLY_URL = 'https://calendly.com/perla-karam'

export default function CalendlyWidget() {
  const { lang } = useLang()

  // Calendly locale: use 'fr' for Arabic as Calendly has limited Arabic support
  const locale = lang === 'en' ? 'en' : 'fr'

  const widgetUrl = `${CALENDLY_URL}?hide_event_type_details=0&hide_gdpr_banner=1&primary_color=3d5a4e&locale=${locale}`

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
