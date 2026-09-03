import { useState } from "react";
import { Calculator as CalcIcon, ArrowRight, Info } from "lucide-react";

const SECTORS = [
  "Metaal & Techniek",
  "Zorg & Welzijn",
  "Bouw & Infra",
  "Retail (non-food)",
  "Uitzenden (ABU)",
  "Anders / Onbekend",
];

const FUNCTIEGROEPEN = ["A", "B", "C", "D", "E"];
const FASES = ["Fase A", "Fase B", "Fase C"];

export default function Calculator() {
  const [sector, setSector] = useState("");
  const [functiegroep, setFunctiegroep] = useState("");
  const [ervaringsjaren, setErvaringsjaren] = useState("");
  const [fase, setFase] = useState("");
  const [inlenerssalaris, setInlenerssalaris] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleBerekenen = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  const handleReset = () => {
    setShowResult(false);
    setSector("");
    setFunctiegroep("");
    setErvaringsjaren("");
    setFase("");
    setInlenerssalaris("");
  };

  return (
    <section id="calculator" className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            <CalcIcon className="w-4 h-4" />
            CAO Kostprijs Calculator
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Bereken de gelijkwaardige beloning
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Vul de gegevens in en krijg direct inzicht in het CAO-uurloon, de
            gelijkwaardige beloning en de kostprijs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            {/* Info banner */}
            <div className="bg-amber-50 border-b border-amber-100 px-6 py-3 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-700">
                Demo — verbind met Brightmine voor live data. De getoonde
                bedragen zijn voorbeeldwaarden.
              </p>
            </div>

            <form onSubmit={handleBerekenen} className="p-6 space-y-5">
              {/* Sector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sector / CAO
                </label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  required
                >
                  <option value="">Selecteer een sector...</option>
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Functiegroep
                  </label>
                  <select
                    value={functiegroep}
                    onChange={(e) => setFunctiegroep(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    required
                  >
                    <option value="">Selecteer...</option>
                    {FUNCTIEGROEPEN.map((f) => (
                      <option key={f} value={f}>
                        Groep {f}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Ervaringsjaren
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={ervaringsjaren}
                    onChange={(e) => setErvaringsjaren(e.target.value)}
                    placeholder="bijv. 3"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    required
                  />
                </div>
              </div>

              {/* Two columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Fase
                  </label>
                  <select
                    value={fase}
                    onChange={(e) => setFase(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                    required
                  >
                    <option value="">Selecteer...</option>
                    {FASES.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Inlenerssalaris (€/uur)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      €
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={inlenerssalaris}
                      onChange={(e) => setInlenerssalaris(e.target.value)}
                      placeholder="bijv. 16.50"
                      className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2.5 text-sm text-gray-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
                >
                  Bereken
                  <ArrowRight className="w-4 h-4" />
                </button>
                {showResult && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-3 border border-gray-300 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>

            {/* Results */}
            {showResult && (
              <div className="border-t border-gray-200 bg-gray-50 p-6">
                <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
                  Resultaat (voorbeeldwaarden)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <ResultCard label="CAO-uurloon" value="€ 15,80" />
                  <ResultCard
                    label="Gelijkwaardige beloning"
                    value="€ 17,20"
                    highlight
                  />
                  <ResultCard label="Inclusief toeslagen" value="€ 18,45" />
                  <ResultCard
                    label="Kostprijs incl. opslag (230%)"
                    value="€ 42,44"
                    highlight
                  />
                </div>

                <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <p className="text-sm text-primary-800">
                    Wil je dit automatisch en altijd actueel?{" "}
                    <a
                      href="https://onplia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-2 hover:text-primary-900 transition-colors"
                    >
                      Probeer Onplia gratis &rarr;
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-4 ${
        highlight
          ? "bg-primary-600 text-white"
          : "bg-white border border-gray-200 text-gray-900"
      }`}
    >
      <p
        className={`text-xs font-medium mb-1 ${
          highlight ? "text-primary-100" : "text-gray-500"
        }`}
      >
        {label}
      </p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
