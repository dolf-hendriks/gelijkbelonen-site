import { ArrowRight, Shield, Scale, Heart } from "lucide-react";
import Calculator from "../components/Calculator";
import FAQ from "../components/FAQ";

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 sm:pt-24 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
            Gratis tool
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Wat moet jij jouw
            <br />
            <span className="text-primary-600">uitzendkracht betalen?</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
            Bereken de gelijkwaardige beloning in 30 seconden. Altijd actueel,
            gebaseerd op de laatste CAO-data.
          </p>
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-colors shadow-lg shadow-primary-600/20"
          >
            Bereken nu
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Calculator */}
      <Calculator />

      {/* Why section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Waarom gelijkwaardige beloning?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Drie redenen waarom je hier niet omheen kunt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <WhyCard
              icon={<Scale className="w-6 h-6" />}
              title="Wettelijke verplichting per 2026"
              description="De wet schrijft voor dat uitzendkrachten recht hebben op gelijkwaardige arbeidsvoorwaarden. Niet naleven leidt tot boetes en naheffingen."
            />
            <WhyCard
              icon={<Shield className="w-6 h-6" />}
              title="Beschermt jou als werkgever"
              description="Correcte beloning voorkomt claims, juridische procedures en reputatieschade. Je bouwt een solide basis voor langdurige relaties met opdrachtgevers."
            />
            <WhyCard
              icon={<Heart className="w-6 h-6" />}
              title="Eerlijk voor de medewerker"
              description="Uitzendkrachten verdienen hetzelfde als hun directe collega's. Gelijke beloning verhoogt motivatie, loyaliteit en de kwaliteit van je flex-pool."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Banner */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-primary-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-500 rounded-full opacity-50" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary-500 rounded-full opacity-30" />

            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Automatisch altijd de juiste beloning?
              </h2>
              <p className="text-primary-100 text-base sm:text-lg mb-8 max-w-lg mx-auto">
                Onplia berekent de gelijkwaardige beloning automatisch, op basis
                van live CAO-data. Geen handwerk, geen fouten.
              </p>
              <a
                href="https://onplia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-primary-700 font-semibold px-8 py-4 rounded-xl text-base hover:bg-primary-50 transition-colors shadow-lg"
              >
                Ontdek Onplia
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function WhyCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
