import { useEffect } from 'react'

const teamMembers = [
  {
    name: 'Anjo Sauer',
    role: 'Geschäftsführer',
    image: '/images/team/anjo-sauer.PNG',
    description: 'Als Gründer und Geschäftsführer leitet Anjo den Betrieb mit Leidenschaft und über 25 Jahren Erfahrung im Handwerk. Für ihn steht Qualität und Kundenzufriedenheit an erster Stelle.'
  },
  {
    name: 'Sandra Sauer',
    role: 'Backoffice & Organisation',
    image: '/images/team/sandra-sauer.PNG',
    description: 'Sandra ist Ihre erste Ansprechpartnerin am Telefon. Sie koordiniert Termine, kümmert sich um die Buchhaltung und sorgt dafür, dass im Hintergrund alles reibungslos läuft.'
  },
  {
    name: 'Lukas Sauer',
    role: 'Meister & Bauleitung',
    image: '/images/team/lukas-sauer.PNG',
    description: 'Als ausgebildeter Meister übernimmt Lukas die fachliche Leitung auf der Baustelle. Mit seinem geschulten Auge garantiert er höchste Ausführungsqualität.'
  },
  {
    name: 'Daniel Sauer',
    role: 'Innovation-Manager & CTO',
    image: '/images/team/daniel-sauer.PNG',
    description: 'Daniel bringt frischen Wind ins Unternehmen. Er kümmert sich um moderne Technologien, digitale Prozesse und ist Experte für innovative Heizsysteme wie Wärmepumpen.'
  },
  {
    name: 'Nala',
    role: 'Monteurin',
    image: '/images/team/nala.PNG',
    description: 'Nala ist ausgebildete Anlagenmechanikerin und verstärkt unser Team bei Installationen und Servicearbeiten. Präzision und Sorgfalt zeichnen ihre Arbeit aus.'
  },
  {
    name: 'Olaf',
    role: 'Monteur',
    image: '/images/team/olaf.PNG',
    description: 'Olaf bringt jahrelange Erfahrung mit und ist ein zuverlässiger Fachmann für alle Installationsarbeiten. Kein Problem ist ihm zu groß.'
  }
]

export default function Team() {
  useEffect(() => {
    document.title = 'Unser Team – Sauer&Söhne | Lernen Sie uns kennen'
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary text-white mb-6">
            Unser Team
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Lernen Sie die Menschen hinter Sauer&Söhne kennen – ein eingespieltes Team
            aus erfahrenen Fachleuten und frischen Talenten.
          </p>
        </div>
      </section>

      {/* Family Business */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="heading-secondary mb-6">
              Ein <span className="text-primary-600">Familienbetrieb</span> mit Herz
            </h2>
            <p className="text-body text-lg">
              Bei Sauer&Söhne ist der Name Programm. Als familiengeführtes Unternehmen legen wir
              besonderen Wert auf persönliche Beziehungen – sowohl innerhalb unseres Teams als auch
              zu unseren Kunden. Hier packt jeder mit an und jeder kennt jeden.
            </p>
          </div>

          {/* Gruppenbild */}
          <div className="mb-20">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/team/gruppe.PNG"
                alt="Das gesamte Team von Sauer&Söhne"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-gray-500 mt-4">
              Das Team von Sauer&Söhne – gemeinsam stark für Ihre Projekte
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={`${member.name} – ${member.role}`}
                    className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center px-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-16">
            Unsere <span className="text-primary-600">Werte</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Qualität</h3>
              <p className="text-gray-600">
                Wir geben uns nur mit dem Besten zufrieden. Jedes Projekt wird mit höchster
                Sorgfalt und handwerklicher Präzision ausgeführt.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Zuverlässigkeit</h3>
              <p className="text-gray-600">
                Wir halten was wir versprechen. Pünktlichkeit, transparente Kommunikation
                und Termintreue sind für uns selbstverständlich.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Leidenschaft</h3>
              <p className="text-gray-600">
                Handwerk ist unsere Berufung. Mit Herzblut und Engagement setzen wir
                jedes Projekt um – als wäre es unser eigenes Zuhause.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Werden Sie Teil unseres Teams!
          </h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Sie sind Anlagenmechaniker/in oder haben eine ähnliche Ausbildung?
            Wir freuen uns immer über motivierte Verstärkung!
          </p>
          <a
            href="mailto:sauerundsoehne@t-online.de?subject=Bewerbung"
            className="btn-accent text-lg px-8 py-4"
          >
            Jetzt bewerben
          </a>
        </div>
      </section>
    </>
  )
}
