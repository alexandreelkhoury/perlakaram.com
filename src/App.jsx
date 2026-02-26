import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LangProvider, useLang } from './context/LangContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Contact  from './pages/Contact'
import NotFound from './pages/NotFound'
import './animations.css'
import './responsive.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  const { lang } = useLang()
  const bodyFont = lang === 'ar' ? "'Cairo', sans-serif" : "'Jost', sans-serif"

  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: bodyFont, background: '#FEFAF5', color: '#1C1C1A', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="*"        element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

function App() {
  return (
    <LangProvider>
      <AppInner />
    </LangProvider>
  )
}

export default App
