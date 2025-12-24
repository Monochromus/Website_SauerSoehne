import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileCallButton from './components/MobileCallButton'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import Leistungen from './pages/Leistungen'
import Team from './pages/Team'
import Referenzen from './pages/Referenzen'
import FAQ from './pages/FAQ'
import Standort from './pages/Standort'
import Kontakt from './pages/Kontakt'
import Danke from './pages/Danke'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import NotFound from './pages/NotFound'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/team" element={<Team />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/standort" element={<Standort />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/danke" element={<Danke />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileCallButton />
    </div>
  )
}

export default App
