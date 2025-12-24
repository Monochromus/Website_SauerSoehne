import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  useEffect(() => {
    document.title = 'Seite nicht gefunden – Sauer&Söhne'
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white py-32">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 */}
          <div className="mb-8">
            <span className="text-9xl font-bold text-primary-200">404</span>
          </div>

          {/* Message */}
          <h1 className="heading-primary mb-6">
            Seite nicht gefunden
          </h1>
          <p className="text-body text-xl mb-10">
            Ups! Die Seite, die Sie suchen, existiert leider nicht oder wurde verschoben.
            Keine Sorge – wir helfen Ihnen, wieder auf den richtigen Weg zu kommen.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="btn-primary text-lg px-8 py-4">
              Zur Startseite
            </Link>
            <Link to="/kontakt" className="btn-secondary text-lg px-8 py-4">
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-lg font-semibold mb-6 text-gray-700">
              Vielleicht suchen Sie:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                to="/leistungen"
                className="p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors text-center"
              >
                <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Leistungen</span>
              </Link>
              <Link
                to="/team"
                className="p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors text-center"
              >
                <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Team</span>
              </Link>
              <Link
                to="/faq"
                className="p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors text-center"
              >
                <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">FAQ</span>
              </Link>
              <Link
                to="/standort"
                className="p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors text-center"
              >
                <svg className="w-6 h-6 text-primary-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">Standort</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
