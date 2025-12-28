import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const kategorien = [
  { value: '', label: 'Bitte wählen...' },
  { value: 'allgemein', label: 'Allgemeine Anfrage' },
  { value: 'waermepumpen', label: 'Wärmepumpen-Anfrage' },
  { value: 'neubau', label: 'Neubau-Projekt' },
  { value: 'badsanierung', label: 'Badsanierung' },
  { value: 'heizung', label: 'Heizungsmodernisierung' },
  { value: 'reparatur', label: 'Reparatur/Kundendienst' },
  { value: 'sonstiges', label: 'Sonstiges' },
]

const waermepumpenTemplate = `Ich interessiere mich für eine Wärmepumpe und teile Ihnen meine Gebäudedaten mit:

Gebäudetyp (EFH/MFH/Gewerbe):
Baujahr:
Wohnfläche in m²:
Anzahl Etagen:
Aktuelle Heizung:
Dämmstandard (gut/mittel/schlecht):
Anzahl Bewohner:
Gewünschter Umsetzungszeitraum:

Weitere Informationen oder Fragen:`

export default function Kontakt() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    kategorie: '',
    nachricht: '',
    datenschutz: false
  })

  useEffect(() => {
    document.title = 'Kontakt – Sauer&Söhne | Jetzt anfragen'

    // Check for kategorie in URL params
    const kategorieParam = searchParams.get('kategorie')
    if (kategorieParam) {
      setFormData(prev => ({
        ...prev,
        kategorie: kategorieParam,
        nachricht: kategorieParam === 'waermepumpen' ? waermepumpenTemplate : ''
      }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))

    // Auto-fill template for Wärmepumpen
    if (name === 'kategorie' && value === 'waermepumpen' && !formData.nachricht) {
      setFormData(prev => ({
        ...prev,
        kategorie: value,
        nachricht: waermepumpenTemplate
      }))
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Kontakt aufnehmen
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Anfrage! Füllen Sie das Formular aus oder
            rufen Sie uns direkt an.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8">So erreichen Sie uns</h2>

              {/* Phone */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Telefon
                </h3>
                <a
                  href="tel:+4946212345678"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-primary-600">04621 / 123 456 78</p>
                    <p className="text-sm text-gray-500">Mo–Do 07:30–16:30, Fr 07:30–14:00</p>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  E-Mail
                </h3>
                <a
                  href="mailto:info@example.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-primary-600 break-all">info@example.com</p>
                    <p className="text-sm text-gray-500">Wir antworten innerhalb von 24h</p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  Adresse
                </h3>
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <address className="not-italic text-gray-700">
                      <p className="font-semibold">Sauer&Söhne</p>
                      <p>24869 Dörpstedt</p>
                    </address>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>

                <form
                  action="https://formsubmit.co/info@example.com"
                  method="POST"
                  className="space-y-6"
                >
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="Neue Anfrage über Website" />
                  <input type="hidden" name="_next" value={`${window.location.origin}/danke`} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="text" name="_honey" style={{ display: 'none' }} />

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail <span className="text-accent-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>

                  {/* Telefon */}
                  <div>
                    <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="Für Rückfragen"
                    />
                  </div>

                  {/* Kategorie */}
                  <div>
                    <label htmlFor="kategorie" className="block text-sm font-medium text-gray-700 mb-2">
                      Kategorie <span className="text-accent-500">*</span>
                    </label>
                    <select
                      id="kategorie"
                      name="kategorie"
                      required
                      value={formData.kategorie}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white"
                    >
                      {kategorien.map((kat) => (
                        <option key={kat.value} value={kat.value}>
                          {kat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Nachricht */}
                  <div>
                    <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700 mb-2">
                      Ihre Nachricht <span className="text-accent-500">*</span>
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      required
                      rows={8}
                      value={formData.nachricht}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-y"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>

                  {/* Datenschutz */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="datenschutz"
                        required
                        checked={formData.datenschutz}
                        onChange={handleChange}
                        className="w-5 h-5 mt-0.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                        Ich habe die{' '}
                        <a href="/datenschutz" className="text-primary-600 hover:underline" target="_blank">
                          Datenschutzerklärung
                        </a>{' '}
                        gelesen und stimme der Verarbeitung meiner Daten zu. <span className="text-accent-500">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Nachricht senden
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Pflichtfelder
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
