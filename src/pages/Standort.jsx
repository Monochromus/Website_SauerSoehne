import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Dörpstedt coordinates
const position = [54.448, 9.357]

const einzugsgebiet = [
  { name: 'Schleswig', entfernung: '15 km' },
  { name: 'Husum', entfernung: '25 km' },
  { name: 'Rendsburg', entfernung: '40 km' },
  { name: 'Flensburg', entfernung: '35 km' },
  { name: 'Eckernförde', entfernung: '45 km' },
  { name: 'Kiel', entfernung: '60 km' },
]

export default function Standort() {
  useEffect(() => {
    document.title = 'Standort – Sauer&Söhne | So finden Sie uns'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Unser Standort
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Zentral in Schleswig-Holstein gelegen, sind wir schnell bei Ihnen vor Ort.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                <MapContainer
                  center={position}
                  zoom={10}
                  scrollWheelZoom={false}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      <div className="text-center p-2">
                        <strong className="text-primary-600">Sauer&Söhne</strong>
                        <br />
                        Hier sind wir für Sie da!
                        <br />
                        <span className="text-sm text-gray-600">24869 Dörpstedt</span>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-6">Kontaktdaten</h2>

                {/* Address */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Adresse
                  </h3>
                  <address className="not-italic text-gray-700 text-lg">
                    Sauer&Söhne<br />
                    24869 Dörpstedt
                  </address>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Telefon
                  </h3>
                  <a
                    href="tel:+4946212345678"
                    className="flex items-center gap-3 text-lg text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    04621 / 123 456 78
                  </a>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    E-Mail
                  </h3>
                  <a
                    href="mailto:info@example.com"
                    className="flex items-center gap-3 text-lg text-primary-600 hover:text-primary-700 transition-colors break-all"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@example.com
                  </a>
                </div>

                {/* Opening Hours */}
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    Öffnungszeiten
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Montag – Donnerstag</span>
                      <span className="font-medium">07:30 – 16:30 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Freitag</span>
                      <span className="font-medium">07:30 – 14:00 Uhr</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Samstag & Sonntag</span>
                      <span>Geschlossen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Einzugsgebiet */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Unser <span className="text-primary-600">Einzugsgebiet</span>
            </h2>
            <p className="text-body text-lg">
              Wir sind in ganz Schleswig-Holstein für Sie unterwegs. Von unserem Standort
              in Dörpstedt aus erreichen wir Sie schnell und zuverlässig.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {einzugsgebiet.map((ort, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <svg className="w-8 h-8 text-primary-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="font-semibold text-gray-900">{ort.name}</h3>
                <p className="text-sm text-gray-500">ca. {ort.entfernung}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
