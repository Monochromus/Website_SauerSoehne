import { useEffect } from 'react'

export default function Datenschutz() {
  useEffect(() => {
    document.title = 'Datenschutzerklärung – Sauer&Söhne'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg">
            {/* Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-12 not-prose">
              <div className="flex items-start gap-4">
                <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-yellow-800 mb-1">Hinweis</h4>
                  <p className="text-yellow-700 text-sm">
                    Diese Datenschutzerklärung ist ein Muster. Bitte passen Sie alle Platzhalter an und lassen Sie die Erklärung ggf. von einem Rechtsanwalt prüfen.
                  </p>
                </div>
              </div>
            </div>

            <h2>1. Datenschutz auf einen Blick</h2>

            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
              kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p>
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
              Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>

            <h2>2. Verantwortlicher</h2>
            <p>
              Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Sauer&Söhne<br />
              Inhaber: Anjo Sauer<br />
              [Straße und Hausnummer]<br />
              24869 Dörpstedt<br />
              <br />
              Telefon: 04621 / 123 456 78<br />
              E-Mail: info@example.com
            </p>

            <h2>3. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
              Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
              Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert
              werden, handeln.
            </p>

            <h2>4. Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              <strong>Verwendung von FormSubmit</strong><br />
              Für die Übermittlung der Kontaktformulardaten nutzen wir den Dienst FormSubmit
              (formsubmit.co). Bei der Nutzung des Kontaktformulars werden Ihre eingegebenen
              Daten an FormSubmit übertragen und anschließend per E-Mail an uns weitergeleitet.
              FormSubmit speichert Ihre Daten temporär auf Servern in den USA. Weitere Informationen
              finden Sie in der Datenschutzerklärung von FormSubmit:
              <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">
                https://formsubmit.co/privacy.pdf
              </a>
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sowie zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b DSGVO).
            </p>

            <h2>5. Externe Dienste</h2>

            <h3>OpenStreetMap / Leaflet</h3>
            <p>
              Wir binden Karten des Dienstes OpenStreetMap ein, die von der OpenStreetMap Foundation
              (OSMF) bereitgestellt werden. Beim Aufruf einer Seite mit eingebundener Karte wird
              eine Verbindung zu den Servern von OpenStreetMap hergestellt. Dabei kann Ihre IP-Adresse
              an OpenStreetMap übermittelt werden.
            </p>
            <p>
              Die Nutzung von OpenStreetMap erfolgt im Interesse einer ansprechenden Darstellung
              unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der
              Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von
              Art. 6 Abs. 1 lit. f DSGVO dar.
            </p>
            <p>
              Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung
              von OpenStreetMap:
              <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">
                https://wiki.osmfoundation.org/wiki/Privacy_Policy
              </a>
            </p>

            <h3>Google Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google
              Fonts. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von
              Google findet nicht statt.
            </p>

            <h2>6. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul>
              <li>
                <strong>Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten
                zu erhalten (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger personenbezogener Daten zu verlangen
                (Art. 16 DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> Ihrer bei uns gespeicherten personenbezogenen Daten
                zu verlangen (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung</strong> der Verarbeitung Ihrer personenbezogenen Daten
                zu verlangen (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Widerspruch</strong> gegen die Verarbeitung Ihrer personenbezogenen
                Daten einzulegen (Art. 21 DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong>: Sie können verlangen, dass wir Ihnen
                Ihre Daten in einem gängigen, maschinenlesbaren Format übermitteln (Art. 20 DSGVO)
              </li>
            </ul>
            <p>
              Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese
              jederzeit für die Zukunft widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
              erfolgten Datenverarbeitung bleibt davon unberührt.
            </p>

            <h2>7. Beschwerderecht</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten durch uns zu beschweren.
            </p>
            <p>
              Zuständige Aufsichtsbehörde:<br />
              Unabhängiges Landeszentrum für Datenschutz Schleswig-Holstein (ULD)<br />
              Holstenstraße 98<br />
              24103 Kiel<br />
              <a href="https://www.datenschutzzentrum.de" target="_blank" rel="noopener noreferrer">
                https://www.datenschutzzentrum.de
              </a>
            </p>

            <h2>8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2025.
            </p>
            <p>
              Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund
              geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig
              werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
