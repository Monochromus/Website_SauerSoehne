import { Link } from 'react-router-dom'

const quickLinks = [
  { name: 'Start', href: '/' },
  { name: 'Leistungen', href: '/leistungen' },
  { name: 'Team', href: '/team' },
  { name: 'Referenzen', href: '/referenzen' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Standort', href: '/standort' },
  { name: 'Kontakt', href: '/kontakt' },
]

const legalLinks = [
  { name: 'Impressum', href: '/impressum' },
  { name: 'Datenschutz', href: '/datenschutz' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Slogan */}
          <div>
            <img
              src="/images/allgemein/Logo.JPG"
              alt="Sauer&Söhne Logo"
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-lg">
              Von der Planung bis zur Umsetzung – alles aus einer Hand.
            </p>
            <p className="text-gray-500 mt-4 text-sm">
              Ihr Meisterbetrieb für Sanitär, Heizung und Wärmepumpen in Schleswig-Holstein.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-800">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-500 hover:text-white transition-colors duration-200 mb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Kontakt</h3>
            <address className="not-italic text-gray-400 space-y-4">
              <p>
                Sauer&Söhne<br />
                24869 Dörpstedt
              </p>
              <p>
                <a
                  href="tel:+4946212345678"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  04621 / 123 456 78
                </a>
              </p>
              <p>
                <a
                  href="mailto:sauerundsoehne@t-online.de"
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  sauerundsoehne@t-online.de
                </a>
              </p>
            </address>

            {/* Öffnungszeiten */}
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="font-medium text-gray-300 mb-3">Öffnungszeiten</h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Mo – Do: 07:30 – 16:30 Uhr</p>
                <p>Freitag: 07:30 – 14:00 Uhr</p>
                <p className="text-gray-500">Sa & So: Geschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Sauer&Söhne – Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  )
}
