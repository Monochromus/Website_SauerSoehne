import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Team', href: '/team' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Standort', href: '/standort' },
  { name: 'Kontakt', href: '/kontakt' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/allgemein/logo-new.png"
              alt="Sauer&Söhne Logo"
              className={`transition-all duration-300 ${
                scrolled ? 'h-12 md:h-16' : 'h-16 md:h-20'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : scrolled
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      : 'text-white hover:text-primary-200 hover:bg-white/10'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              className="ml-4 btn-primary text-sm"
            >
              Jetzt anfragen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center btn-primary mt-4"
            >
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
