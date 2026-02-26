import { useEffect } from 'react'

const SITE_URL = 'https://perlakaram.com'
const OG_IMAGE = `${SITE_URL}/og-image.jpg`

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href, attrs = {}) {
  const selector = Object.entries(attrs).map(([k, v]) => `[${k}="${v}"]`).join('')
  let el = document.head.querySelector(`link[rel="${rel}"]${selector}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/', lang = 'fr' }) {
  const url = `${SITE_URL}${path}`
  const ogLocale = lang === 'ar' ? 'ar_AR' : lang === 'en' ? 'en_US' : 'fr_FR'

  useEffect(() => {
    document.title = title
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'

    setMeta('name', 'description', description)
    setLink('canonical', url)

    // Open Graph
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', OG_IMAGE)
    setMeta('property', 'og:locale', ogLocale)
    setMeta('property', 'og:site_name', 'Perla Karam — Psychologue Clinicienne')

    // Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', OG_IMAGE)

    // hreflang alternate links
    setLink('alternate', `${SITE_URL}${path}`, { hreflang: 'fr' })
    setLink('alternate', `${SITE_URL}${path}`, { hreflang: 'en' })
    setLink('alternate', `${SITE_URL}${path}`, { hreflang: 'ar' })
    setLink('alternate', `${SITE_URL}${path}`, { hreflang: 'x-default' })
  }, [title, description, url, lang, ogLocale, path])

  return null
}
