import { Link } from 'react-router-dom'
import { useEffect } from 'react'

// Testimonials Data
const testimonials = [
  {
    quote: "Herr Sauer und sein Team haben unsere Wärmepumpe perfekt installiert. Von der Beratung bis zur Umsetzung alles top!",
    author: "Familie Petersen",
    location: "Schleswig",
    rating: 5
  },
  {
    quote: "Schnell, sauber, zuverlässig. So muss Handwerk sein!",
    author: "Thomas M.",
    location: "Husum",
    rating: 5
  },
  {
    quote: "Endlich ein Handwerker, der hält was er verspricht. Klare Empfehlung!",
    author: "Sabine K.",
    location: "Rendsburg",
    rating: 5
  },
  {
    quote: "Die Badsanierung wurde pünktlich und im Budget fertiggestellt. Wir sind begeistert!",
    author: "Familie Hansen",
    location: "Flensburg",
    rating: 5
  }
]

// Trust Elements
const trustElements = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Gebäudeservice",
    description: "Zuverlässige Arbeit durch erfahrene Fachkräfte"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Familienunternehmen",
    description: "Persönliche Betreuung und kurze Wege"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Regional verbunden",
    description: "Für Sie in ganz Schleswig-Holstein unterwegs"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Wärmepumpen",
    description: "Erfahrung mit moderner Heiztechnologie"
  }
]

// Partner Logos
const partners = [
  { name: "Viessmann", logo: "/images/partner/partner-01.svg" },
  { name: "Vaillant", logo: "/images/partner/partner-02.svg" },
  { name: "Bosch", logo: "/images/partner/partner-03.svg" },
  { name: "Buderus", logo: "/images/partner/partner-04.svg" }
]

// Star Rating Component
function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    // Add Schema.org LocalBusiness markup
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Sauer&Söhne",
      "description": "Gebäudeservice für Sanitär, Heizung und Wärmepumpen in Schleswig-Holstein",
      "image": "/images/allgemein/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "",
        "addressLocality": "Dörpstedt",
        "postalCode": "24869",
        "addressCountry": "DE"
      },
      "telephone": "+4946212345678",
      "email": "sauerundsoehne@t-online.de",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "07:30",
          "closes": "16:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "07:30",
          "closes": "14:00"
        }
      ],
      "areaServed": "Schleswig-Holstein",
      "priceRange": "$$"
    })
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/leistungen/hero-bg.PNG)' }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/70 to-primary-900/80" />

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white py-32">
          {/* Logo */}
          <img
            src="/images/allgemein/logo.PNG"
            alt="Sauer&Söhne Logo"
            className="h-32 md:h-40 lg:h-48 mx-auto mb-12 drop-shadow-2xl animate-fade-in"
          />

          {/* Main Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight animate-slide-up">
            Von der Planung bis zur Umsetzung –<br />
            <span className="text-primary-300">alles aus einer Hand</span>
          </h1>

          {/* Subline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Ihr Gebäudeservice für Sanitär, Heizung und Wärmepumpen in Schleswig-Holstein
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/leistungen" className="btn-primary text-lg px-8 py-4">
              Unsere Leistungen
            </Link>
            <Link to="/kontakt" className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-8">
              Willkommen bei <span className="text-primary-600">Sauer&Söhne</span>
            </h2>
            <p className="text-body text-xl leading-relaxed mb-6">
              Seit 2023 sind wir als familiengeführter Gebäudeservice in den Bereichen Sanitär,
              Heizung und Wärmepumpen für Sie da. Wir legen Wert auf Zuverlässigkeit und
              persönliche Betreuung von der ersten Beratung bis zur Umsetzung.
            </p>
            <p className="text-body text-xl leading-relaxed">
              Ob Neubau, Sanierung oder Kundendienst – bei uns erhalten Sie alle Leistungen
              aus einer Hand. Qualität, die Sie spüren.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Elements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-16">
            Warum <span className="text-primary-600">Sauer&Söhne</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustElements.map((element, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6">
                  {element.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{element.title}</h3>
                <p className="text-gray-600">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wärmepumpen Teaser */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Unsere Kernkompetenz
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Wärmepumpen – Die Zukunft des Heizens
              </h2>
              <p className="text-lg text-primary-100 mb-8 leading-relaxed">
                Machen Sie sich unabhängig von steigenden Energiepreisen. Wärmepumpen nutzen
                Umweltenergie und können Ihre Heizkosten senken. Wir begleiten Sie von der
                Beratung über die Fördermittelbeantragung bis zur Installation.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Individuelle Beratung und Planung',
                  'Fördermittelberatung (BAFA, KfW)',
                  'Fachgerechte Installation',
                  'Wartung und Service'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-accent-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/leistungen" className="btn-accent text-lg">
                Mehr erfahren
              </Link>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/images/leistungen/waermepumpe.jpg"
                alt="Moderne Wärmepumpe"
                className="max-h-96 animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-4">
            Das sagen unsere <span className="text-primary-600">Kunden</span>
          </h2>
          <p className="text-body text-center max-w-2xl mx-auto mb-16">
            Was unsere Kunden über die Zusammenarbeit mit uns sagen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 relative"
              >
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-primary-200 absolute top-6 right-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 mt-4 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-4">
            Unsere <span className="text-primary-600">Partner</span>
          </h2>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            Wir arbeiten mit führenden Herstellern zusammen, um Ihnen nur die beste Qualität zu bieten.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Bereit für Ihr Projekt?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Vorstellungen verwirklichen.
            Wir freuen uns auf Ihre Anfrage!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-accent text-lg px-8 py-4">
              Jetzt anfragen
            </Link>
            <a
              href="tel:+4946212345678"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
