import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Contact  from './pages/Contact'
import './animations.css'
import './responsive.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ fontFamily: "'Jost', sans-serif", background: '#FEFAF5', color: '#1C1C1A', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
