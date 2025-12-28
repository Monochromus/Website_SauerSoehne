import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Danke() {
  useEffect(() => {
    document.title = 'Vielen Dank – Sauer&Söhne'
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white py-32">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Message */}
          <h1 className="heading-primary mb-6">
            Vielen Dank für Ihre Nachricht!
          </h1>
          <p className="text-body text-xl mb-10">
            Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen zurück –
            in der Regel innerhalb von 24 Stunden.
          </p>

          {/* Back Button */}
          <Link to="/" className="btn-primary text-lg px-8 py-4 mb-12 inline-block">
            Zurück zur Startseite
          </Link>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h2 className="text-lg font-semibold mb-6 text-gray-700">
              Sie möchten uns direkt erreichen?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="tel:+4946212345678"
                className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium text-primary-600">04621 / 123 456 78</span>
              </a>
              <a
                href="mailto:info@example.com"
                className="flex items-center justify-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium text-primary-600">E-Mail senden</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
