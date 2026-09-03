import { ArrowRight, Scale, Zap, Database } from "lucide-react";

export default function Over() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
            Over GelijkBelonen.nl
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            GelijkBelonen.nl is een gratis initiatief om uitzendbureaus te helpen
            met het berekenen van de gelijkwaardige beloning voor
            uitzendkrachten. Transparant, actueel en voor iedereen toegankelijk.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-primary-50 border border-primary-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-primary-600" />
              Waarom deze tool?
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                Per 2026 is de wetgeving rondom gelijkwaardige beloning
                aangescherpt. Uitzendbureaus zijn verplicht om uitzendkrachten
                dezelfde arbeidsvoorwaarden te bieden als directe werknemers van
                de inlener. Dit klinkt eenvoudig, maar in de praktijk is het
                complex: elke CAO heeft eigen schalen, toeslagen en regels.
              </p>
              <p>
                Wij geloven dat toegang tot deze informatie niet achter een
                betaalmuur hoort te zitten. Daarom bieden we deze calculator
                gratis aan, zodat iedere uitzendondernemer snel inzicht krijgt
                in wat eerlijke beloning betekent.
              </p>
              <p>
                De tool op deze pagina werkt met voorbeeldwaarden. Voor real-time
                berekeningen op basis van actuele CAO-data kun je terecht bij
                Onplia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Wat maakt Onplia anders?
          </h2>

          <div className="space-y-4">
            <FeatureRow
              icon={<Database className="w-5 h-5" />}
              title="Live CAO-data via Brightmine"
              description="Onplia haalt automatisch de nieuwste CAO-gegevens op, zodat berekeningen altijd kloppen, ook als een CAO tussentijds wijzigt."
            />
            <FeatureRow
              icon={<Zap className="w-5 h-5" />}
              title="Agentic middle office"
              description="Onplia is meer dan een calculator. Het is een AI-gedreven middle office dat verloning, planning en compliance automatiseert voor uitzendbureaus."
            />
            <FeatureRow
              icon={<Scale className="w-5 h-5" />}
              title="Altijd compliant"
              description="Van gelijkwaardige beloning tot pensioenberekening: Onplia zorgt ervoor dat je altijd voldoet aan de wet en de CAO."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-gray-900 rounded-2xl p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Klaar om te starten?
            </h2>
            <p className="text-gray-400 mb-6 text-sm">
              Ontdek hoe Onplia de gelijkwaardige beloning automatisch berekent
              voor jouw uitzendbedrijf.
            </p>
            <a
              href="https://onplia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors"
            >
              Ontdek Onplia
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FeatureRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:shadow-sm transition-shadow">
      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 text-sm mb-1">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
