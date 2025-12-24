import { useEffect, useState } from 'react'

const projekte = [
  {
    id: 1,
    title: 'Wärmepumpeninstallation Einfamilienhaus',
    description: 'Installation einer modernen Luft-Wasser-Wärmepumpe in einem Einfamilienhaus aus den 80er Jahren. Inklusive Fußbodenheizung und Smart-Home-Anbindung.',
    image: '/images/referenzen/projekt-01.svg',
    ort: 'Schleswig',
    jahr: '2024',
    kategorie: 'Wärmepumpe'
  },
  {
    id: 2,
    title: 'Komplette Badsanierung',
    description: 'Vollständige Modernisierung eines 25 m² großen Badezimmers mit bodengleicher Dusche, freistehender Badewanne und modernen Armaturen.',
    image: '/images/referenzen/projekt-02.svg',
    ort: 'Husum',
    jahr: '2024',
    kategorie: 'Badsanierung'
  },
  {
    id: 3,
    title: 'Wärmepumpe im Neubau',
    description: 'Planung und Installation einer Sole-Wasser-Wärmepumpe mit Erdsonden für einen Neubau. Optimale Abstimmung mit der Gebäudedämmung.',
    image: '/images/referenzen/projekt-03.svg',
    ort: 'Rendsburg',
    jahr: '2024',
    kategorie: 'Wärmepumpe'
  },
  {
    id: 4,
    title: 'Barrierefreies Badezimmer',
    description: 'Umbau eines Badezimmers zu einem barrierefreien Raum mit unterfahrbarem Waschtisch, Haltegriffen und ebenerdiger Dusche.',
    image: '/images/referenzen/projekt-04.svg',
    ort: 'Flensburg',
    jahr: '2023',
    kategorie: 'Badsanierung'
  },
  {
    id: 5,
    title: 'Heizungsmodernisierung Mehrfamilienhaus',
    description: 'Austausch einer 30 Jahre alten Ölheizung gegen eine moderne Gas-Brennwerttherme mit solarer Warmwasserunterstützung.',
    image: '/images/referenzen/projekt-05.svg',
    ort: 'Eckernförde',
    jahr: '2023',
    kategorie: 'Heizung'
  },
  {
    id: 6,
    title: 'Neubau-Komplettinstallation',
    description: 'Komplette Sanitär- und Heizungsinstallation für ein Einfamilienhaus-Neubau mit 180 m² Wohnfläche. Von der Planung bis zur Übergabe.',
    image: '/images/referenzen/projekt-06.svg',
    ort: 'Schleswig',
    jahr: '2023',
    kategorie: 'Neubau'
  }
]

const kategorien = ['Alle', 'Wärmepumpe', 'Badsanierung', 'Heizung', 'Neubau']

export default function Referenzen() {
  const [filter, setFilter] = useState('Alle')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    document.title = 'Referenzen – Sauer&Söhne | Unsere Projekte'
  }, [])

  const filteredProjekte = filter === 'Alle'
    ? projekte
    : projekte.filter(p => p.kategorie === filter)

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Unsere Referenzen
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Überzeugen Sie sich von unserer Arbeit. Hier finden Sie eine Auswahl
            unserer erfolgreich abgeschlossenen Projekte.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {kategorien.map((kategorie) => (
              <button
                key={kategorie}
                onClick={() => setFilter(kategorie)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === kategorie
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {kategorie}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjekte.map((projekt) => (
              <div
                key={projekt.id}
                className="card card-hover cursor-pointer group"
                onClick={() => setSelectedProject(projekt)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={projekt.image}
                    alt={projekt.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                      {projekt.kategorie}
                    </span>
                    <h3 className="text-white font-semibold text-lg">
                      {projekt.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {projekt.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {projekt.ort}
                    </span>
                    <span>{projekt.jahr}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Schließen"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <span className="inline-block bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full mb-4">
                {selectedProject.kategorie}
              </span>
              <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{selectedProject.description}</p>
              <div className="flex items-center gap-6 text-gray-500">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {selectedProject.ort}
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {selectedProject.jahr}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="heading-secondary mb-6">
            Ihr Projekt könnte das nächste sein!
          </h2>
          <p className="text-body max-w-2xl mx-auto mb-10">
            Lassen Sie sich von unseren Arbeiten inspirieren und starten Sie Ihr eigenes Projekt mit uns.
          </p>
          <a href="/kontakt" className="btn-primary text-lg">
            Projekt anfragen
          </a>
        </div>
      </section>
    </>
  )
}
