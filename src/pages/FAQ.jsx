import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const waermepumpenFaqs = [
  {
    frage: 'Was kostet eine Wärmepumpe?',
    antwort: 'Die Kosten für eine Wärmepumpe variieren je nach Typ und Gebäudegröße. Eine Luft-Wasser-Wärmepumpe für ein Einfamilienhaus kostet inkl. Installation etwa 15.000 bis 25.000 Euro. Sole-Wasser-Wärmepumpen mit Erdsondenbohrung können 25.000 bis 35.000 Euro kosten. Durch staatliche Förderungen (BAFA, KfW) können Sie bis zu 40% der Kosten erstattet bekommen. Wir erstellen Ihnen gerne ein individuelles Angebot.'
  },
  {
    frage: 'Welche Förderungen gibt es?',
    antwort: 'Es gibt attraktive Förderprogramme für Wärmepumpen: Die Bundesförderung für effiziente Gebäude (BEG) über das BAFA bietet Zuschüsse von bis zu 40% der Investitionskosten. Die KfW bietet zinsgünstige Kredite und Tilgungszuschüsse. Zusätzlich gibt es oft regionale Förderprogramme. Wir beraten Sie ausführlich und unterstützen Sie bei der Antragstellung.'
  },
  {
    frage: 'Wie lange dauert die Installation?',
    antwort: 'Die Installation einer Wärmepumpe dauert in der Regel 2-5 Werktage, je nach Umfang der Arbeiten. Bei einer Luft-Wasser-Wärmepumpe sind es meist 2-3 Tage. Wenn zusätzlich Erdsondenbohrungen für eine Sole-Wasser-Wärmepumpe nötig sind, kann es entsprechend länger dauern. Die Planungsphase inklusive Genehmigungen kann vorab einige Wochen in Anspruch nehmen.'
  },
  {
    frage: 'Ist mein Haus für eine Wärmepumpe geeignet?',
    antwort: 'Grundsätzlich kann fast jedes Haus mit einer Wärmepumpe beheizt werden. Optimal sind gut gedämmte Gebäude mit Flächenheizungen (Fußboden- oder Wandheizung). Aber auch Bestandsgebäude mit Heizkörpern können umgerüstet werden – oft reicht ein Austausch einzelner Heizkörper. Wir führen bei Ihnen vor Ort eine Bestandsaufnahme durch und empfehlen die optimale Lösung.'
  },
  {
    frage: 'Welche Wärmepumpentypen gibt es?',
    antwort: 'Es gibt drei Haupttypen: 1) Luft-Wasser-Wärmepumpen nutzen die Außenluft als Wärmequelle – flexibel und kostengünstig. 2) Sole-Wasser-Wärmepumpen nutzen Erdwärme über Sonden oder Kollektoren – sehr effizient, aber höhere Installationskosten. 3) Wasser-Wasser-Wärmepumpen nutzen Grundwasser – höchste Effizienz, aber abhängig von Grundwasserverfügbarkeit und Genehmigungen.'
  },
  {
    frage: 'Wie hoch sind die Betriebskosten?',
    antwort: 'Die Betriebskosten einer Wärmepumpe sind deutlich niedriger als bei fossilen Heizungen. Eine moderne Wärmepumpe erreicht eine Jahresarbeitszahl (JAZ) von 3-5, d.h. aus 1 kWh Strom werden 3-5 kWh Wärme. Bei einem typischen Einfamilienhaus liegen die jährlichen Stromkosten für die Wärmepumpe bei ca. 800-1.200 Euro. In Kombination mit einer Photovoltaikanlage können die Kosten noch weiter sinken.'
  }
]

const allgemeineFaqs = [
  {
    frage: 'In welchem Gebiet sind Sie tätig?',
    antwort: 'Unser Einsatzgebiet erstreckt sich über ganz Schleswig-Holstein. Unseren Schwerpunkt haben wir in den Regionen Schleswig, Husum, Rendsburg und Flensburg. Für größere Projekte sind wir aber auch gerne über die Landesgrenzen hinaus für Sie im Einsatz. Sprechen Sie uns einfach an!'
  },
  {
    frage: 'Wie schnell können Sie einen Termin anbieten?',
    antwort: 'Bei Notfällen wie Rohrbrüchen oder Heizungsausfällen sind wir meist noch am selben oder nächsten Tag bei Ihnen. Für reguläre Termine und Beratungsgespräche können wir in der Regel innerhalb von 1-2 Wochen einen Termin anbieten. Bei größeren Projekten wie Badsanierungen oder Wärmepumpeninstallationen planen wir die Termine individuell mit Ihnen.'
  },
  {
    frage: 'Bieten Sie auch Wartungsverträge an?',
    antwort: 'Ja, wir bieten Wartungsverträge für Heizungsanlagen und Wärmepumpen an. Eine regelmäßige Wartung sichert die Effizienz Ihrer Anlage, verlängert die Lebensdauer und ist bei den meisten Herstellern Voraussetzung für die Garantie. Unsere Wartungsverträge beinhalten eine jährliche Inspektion sowie bevorzugte Terminvergabe bei Störungen.'
  },
  {
    frage: 'Was mache ich bei einem Notfall?',
    antwort: 'Bei einem Notfall wie einem Rohrbruch oder einem Heizungsausfall im Winter erreichen Sie uns telefonisch. Außerhalb unserer Geschäftszeiten haben wir für dringende Notfälle eine Notfall-Hotline eingerichtet. Bei einem Rohrbruch: Drehen Sie zunächst den Hauptwasserhahn zu und rufen Sie uns an. Bei einem Gasgeruch: Verlassen Sie sofort das Gebäude, öffnen Sie Fenster und rufen Sie die Feuerwehr (112).'
  }
]

function AccordionItem({ frage, antwort, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors pr-4">
          {frage}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-primary-100 transition-all duration-300 ${isOpen ? 'bg-primary-100 rotate-180' : ''}`}>
          <svg className={`w-5 h-5 text-gray-600 transition-colors ${isOpen ? 'text-primary-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">
          {antwort}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openWaermepumpe, setOpenWaermepumpe] = useState(0)
  const [openAllgemein, setOpenAllgemein] = useState(null)

  useEffect(() => {
    document.title = 'FAQ – Sauer&Söhne | Häufig gestellte Fragen'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Häufig gestellte Fragen
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen rund um Wärmepumpen,
            unsere Leistungen und den Ablauf einer Zusammenarbeit.
          </p>
        </div>
      </section>

      {/* Wärmepumpen FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Wärmepumpen
              </span>
              <h2 className="heading-secondary">
                Fragen zu Wärmepumpen
              </h2>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              {waermepumpenFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  frage={faq.frage}
                  antwort={faq.antwort}
                  isOpen={openWaermepumpe === index}
                  onClick={() => setOpenWaermepumpe(openWaermepumpe === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Allgemeine FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Allgemein
              </span>
              <h2 className="heading-secondary">
                Allgemeine Fragen
              </h2>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              {allgemeineFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  frage={faq.frage}
                  antwort={faq.antwort}
                  isOpen={openAllgemein === index}
                  onClick={() => setOpenAllgemein(openAllgemein === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ihre Frage war nicht dabei?
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Kein Problem! Kontaktieren Sie uns direkt – wir beraten Sie gerne
            persönlich und beantworten alle Ihre Fragen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-accent text-lg px-8 py-4">
              Kontakt aufnehmen
            </Link>
            <a
              href="tel:+4946212345678"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              Direkt anrufen
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
