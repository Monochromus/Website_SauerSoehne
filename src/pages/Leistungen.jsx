import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// Service Categories
const klassischeLeistungen = [
  {
    title: 'Neubau-Installationen',
    description: 'Komplette Haustechnik für Ihr neues Zuhause',
    image: '/images/leistungen/sanitaer.jpg',
    items: [
      'Komplette Sanitärinstallation',
      'Heizungsanlagen',
      'Gasinstallation'
    ]
  },
  {
    title: 'Kundendienst & Reparaturen',
    description: 'Schnelle und zuverlässige Hilfe bei Problemen',
    image: '/images/leistungen/heizung.png',
    items: [
      'Schnelle Hilfe bei Rohrbrüchen',
      'Heizungsstörungen',
      'Wartungsarbeiten'
    ]
  },
  {
    title: 'Wartung & Inspektion',
    description: 'Vorsorge für Langlebigkeit und Sicherheit',
    image: '/images/leistungen/sanitaer.jpg',
    items: [
      'Regelmäßige Heizungswartung',
      'Sicherheitsprüfungen',
      'Anlagenoptimierung'
    ]
  }
]

const waermepumpenLeistungen = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Beratung & Planung',
    description: 'Individuelle Analyse Ihrer Immobilie und Erstellung eines maßgeschneiderten Wärmepumpenkonzepts.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Fachgerechte Installation',
    description: 'Professionelle Montage aller Wärmepumpentypen: Luft-Wasser, Sole-Wasser und Wasser-Wasser.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fördermittelberatung',
    description: 'Unterstützung bei BAFA- und KfW-Anträgen – wir helfen Ihnen, alle Förderungen optimal zu nutzen.'
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Wartung & Service',
    description: 'Regelmäßige Wartung und schneller Service für einen zuverlässigen Betrieb Ihrer Wärmepumpe.'
  }
]

const waermepumpenTypen = [
  {
    name: 'Luft-Wasser-Wärmepumpe',
    description: 'Nutzt Außenluft als Wärmequelle. Besonders flexibel und einfach zu installieren.',
    ideal: 'Ideal für Bestandsgebäude und Neubauten'
  },
  {
    name: 'Sole-Wasser-Wärmepumpe',
    description: 'Nutzt Erdwärme über Erdsonden oder Flächenkollektoren. Sehr effizient.',
    ideal: 'Ideal bei ausreichend Grundstücksfläche'
  },
  {
    name: 'Wasser-Wasser-Wärmepumpe',
    description: 'Nutzt Grundwasser als Wärmequelle. Höchste Effizienz bei geeigneten Bedingungen.',
    ideal: 'Ideal bei guter Grundwasserverfügbarkeit'
  }
]

export default function Leistungen() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Leistungen – Sauer&Söhne | Sanitär, Heizung & Wärmepumpen'
  }, [])

  const handleWaermepumpeClick = () => {
    navigate('/kontakt?kategorie=waermepumpen')
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Unsere Leistungen
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Von klassischen Sanitär- und Heizungsarbeiten bis hin zu modernen Wärmepumpen –
            wir bieten Ihnen das komplette Spektrum der Haustechnik.
          </p>
        </div>
      </section>

      {/* Klassische Leistungen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-4">
            Klassische <span className="text-primary-600">Leistungen</span>
          </h2>
          <p className="text-body text-center max-w-2xl mx-auto mb-16">
            Zuverlässige Handwerksarbeit für alle Bereiche der Haustechnik.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {klassischeLeistungen.map((service, index) => (
              <div key={index} className="card card-hover group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wärmepumpen Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        {/* Floating Wärmepumpe Easter Egg */}
        <button
          onClick={handleWaermepumpeClick}
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10 hover:scale-110 transition-transform"
          aria-label="Wärmepumpen-Anfrage stellen"
        >
          <img
            src="/images/leistungen/waermepumpe.jpg"
            alt="Wärmepumpe"
            className="w-48 h-auto animate-float-slow drop-shadow-xl"
          />
        </button>

        <div className="container-custom relative z-20">
          <div className="max-w-4xl">
            <span className="inline-block bg-accent-100 text-accent-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Unser Spezialgebiet
            </span>
            <h2 className="heading-secondary mb-6">
              Wärmepumpen – <span className="text-primary-600">Nachhaltig heizen</span>
            </h2>
            <p className="text-body text-lg mb-8">
              Wärmepumpen sind die Heiztechnologie der Zukunft. Sie nutzen kostenlose Umweltenergie
              aus Luft, Erde oder Grundwasser und wandeln diese in wohlige Wärme um. Das Ergebnis:
              Bis zu 75% weniger Heizkosten und ein aktiver Beitrag zum Klimaschutz.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {waermepumpenLeistungen.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Wärmepumpentypen */}
            <h3 className="text-2xl font-semibold mb-6">Wärmepumpentypen im Überblick</h3>
            <div className="space-y-4 mb-10">
              {waermepumpenTypen.map((type, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-500">
                  <h4 className="text-lg font-semibold mb-2">{type.name}</h4>
                  <p className="text-gray-600 mb-2">{type.description}</p>
                  <p className="text-sm text-primary-600 font-medium">{type.ideal}</p>
                </div>
              ))}
            </div>

            <Link
              to="/kontakt?kategorie=waermepumpen"
              className="btn-accent text-lg"
            >
              Jetzt Wärmepumpen-Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-16">
            Ihre Vorteile mit einer <span className="text-primary-600">Wärmepumpe</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Kosten sparen</h3>
              <p className="text-gray-600">
                Bis zu 75% weniger Heizkosten durch die Nutzung kostenloser Umweltenergie.
                Machen Sie sich unabhängig von steigenden Öl- und Gaspreisen.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Umwelt schützen</h3>
              <p className="text-gray-600">
                Reduzieren Sie Ihren CO₂-Fußabdruck erheblich. Wärmepumpen heizen klimafreundlich
                und tragen aktiv zum Umweltschutz bei.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Förderung nutzen</h3>
              <p className="text-gray-600">
                Profitieren Sie von attraktiven staatlichen Förderungen durch BAFA und KfW.
                Wir beraten Sie zu allen Fördermöglichkeiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lassen Sie sich beraten!
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Ob Neubau, Sanierung oder Reparatur – wir finden die passende Lösung für Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-accent text-lg px-8 py-4">
              Jetzt anfragen
            </Link>
            <Link to="/faq" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Häufige Fragen
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
