import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "Wat is gelijkwaardige beloning?",
    answer:
      "Gelijkwaardige beloning betekent dat uitzendkrachten recht hebben op dezelfde arbeidsvoorwaarden als werknemers die direct in dienst zijn bij de inlener. Dit omvat loon, toeslagen, vergoedingen en andere emolumenten. Per 2026 is dit wettelijk aangescherpt in de Wet gelijke behandeling uitzendkrachten.",
  },
  {
    question: "Wat is het verschil met inlenersbeloning?",
    answer:
      "De inlenersbeloning is de huidige regeling waarbij uitzendkrachten recht hebben op een aantal specifieke beloningselementen van de inlener (zoals periodieken, toeslagen en onkostenvergoedingen). Gelijkwaardige beloning gaat verder: het omvat het volledige beloningspakket en is per 2026 de standaard als de uitzend-CAO niet als gelijkwaardig wordt aangemerkt.",
  },
  {
    question: "Wat als ik het verkeerd bereken?",
    answer:
      "Bij een onjuiste berekening loop je als uitzendbureau het risico op naheffingen, boetes van de Arbeidsinspectie en claims van uitzendkrachten. Daarnaast kan het leiden tot reputatieschade en het verlies van opdrachtgevers. Het is daarom cruciaal om altijd met actuele CAO-data te werken.",
  },
  {
    question: "Geldt dit voor alle sectoren?",
    answer:
      "Ja, gelijkwaardige beloning geldt in principe voor alle sectoren waar uitzendkrachten worden ingezet. De specifieke beloningselementen verschillen per CAO, maar het uitgangspunt is hetzelfde: gelijk loon voor gelijk werk. Sommige sectoren (zoals bouw en metaal) hebben aanvullende afspraken.",
  },
  {
    question: "Hoe blijf ik op de hoogte van wijzigingen?",
    answer:
      "CAO's worden regelmatig herzien, soms meerdere keren per jaar. Handmatig bijhouden is foutgevoelig. Onplia koppelt direct met Brightmine (voorheen XpertHR) om altijd de nieuwste CAO-data te gebruiken, zodat je automatisch de juiste beloning berekent zonder zelf bij te hoeven houden.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Veelgestelde vragen
          </h2>
          <p className="text-gray-500">
            Alles wat je moet weten over gelijkwaardige beloning.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
