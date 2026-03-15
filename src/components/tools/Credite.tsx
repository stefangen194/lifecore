import React from 'react';
import { CreditCard, Home, Percent, Calculator, ChevronDown, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CrediteCalculator from './CrediteCalculator';

const CalculatorCredite: React.FC = () => {
  const [isAvertismenteOpen, setIsAvertismenteOpen] = React.useState(false);
  const [isPresupuneriOpen, setIsPresupuneriOpen] = React.useState(false);
  const [isFAQOpen, setIsFAQOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-full mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <CreditCard className="text-blue-700" size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculator Credite</h1>
        </div>

        {/* Description Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 w-full max-w-none mx-auto -mt-4">
          <div className="w-full px-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center w-full">Cum să alegi un credit ipotecar avantajos</h2>
            <div className="text-gray-700 space-y-4 mb-6 md:mb-8 text-center">
              <p className="text-base md:text-lg">
                Un credit pentru locuință este o datorie pe termen lung – chiar și o mică diferență de dobândă poate însemna zeci de mii de lei în plus sau în minus pe parcursul anilor. Alegerea corectă îți aduce siguranță și liniște financiară.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {/* Step 1 */}
            <div className="bg-blue-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  1
                </div>
                <Home className="text-blue-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Înțelege tipurile de credite</h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Credit ipotecar standard</strong> - cel mai frecvent, cu avans de 15–25% și termen de până la 30 de ani</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Programul „Noua Casă"</strong> - avans redus (5%), dar cu plafoane și condiții stricte</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Durata creditului</strong> - cu cât este mai scurtă, cu atât plătești mai puțină dobândă, însă rate mai mari. Un termen mai lung înseamnă rate mai mici, însă cost total mai mare</p>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <Percent className="text-green-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Alege dobânda potrivită pentru tine</h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Dobândă fixă</strong> - stabilă pentru 3–5 ani, ușor de bugetat, însă nu scade dacă piața relaxează dobânzile</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Dobândă variabilă (IRCC/ROBOR + marjă)</strong> - fluctuează în funcție de piață și politica BNR; poate aduce economii sau costuri mai mari</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Dobândă mixtă</strong> - fixă în primii ani, apoi variabilă; oferă echilibru între siguranță și flexibilitate</p>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-orange-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-orange-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <Calculator className="text-orange-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Compară ofertele și costurile reale</h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>DAE (Dobânda Anuală Efectivă)</strong> - cel mai bun indicator pentru costul total al creditului (include dobânda și comisioanele)</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Comisioane ascunse</strong> - verifică atent costurile de analiză dosar, administrare lunară sau rambursare anticipată</p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <p><strong>Opțiuni utile</strong> - alege doar facilitățile de care ai nevoie (rambursare anticipată gratuită, refinanțare)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Message Section */}
        <div className="text-center mb-8 mx-auto" style={{ maxWidth: '90rem' }}>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="text-sm md:text-base text-blue-800">
              🔑 Mesaj cheie: În România, cel mai bun credit ipotecar nu înseamnă doar „dobândă mică", ci și alegerea tipului corect de credit, a indicilor și a tuturor costurilor reale incluse în DAE.
            </p>
          </div>
        </div>

        <CrediteCalculator />

        {/* Dropdowns Section */}
        <div className="space-y-4 mb-8 max-w-4xl mx-auto">
          {/* Avertismente */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsAvertismenteOpen(!isAvertismenteOpen)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <AlertTriangle className="text-orange-600 mr-3" size={24} />
                <span className="text-lg font-semibold text-gray-900">Avertismente</span>
              </div>
              <ChevronDown 
                size={20} 
                className={`text-gray-500 transition-transform ${isAvertismenteOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            {isAvertismenteOpen && (
              <div className="px-6 pb-6 text-gray-700 space-y-3">
                <p>Calculul este orientativ și se bazează pe dobânzi fixe. Dobânzile variabile pot schimba semnificativ costul total al creditului.</p>
                <p>Nu include toate comisioanele (analiză dosar, administrare, asigurări obligatorii). Verifică DAE-ul pentru costul real.</p>
                <p>Capacitatea de rambursare poate fi afectată de schimbări în venituri sau cheltuieli neprevăzute.</p>
              </div>
            )}
          </div>

          {/* Presupuneri */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsPresupuneriOpen(!isPresupuneriOpen)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Settings className="text-blue-600 mr-3" size={24} />
                <span className="text-lg font-semibold text-gray-900">Presupuneri</span>
              </div>
              <ChevronDown 
                size={20} 
                className={`text-gray-500 transition-transform ${isPresupuneriOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            {isPresupuneriOpen && (
              <div className="px-6 pb-6 text-gray-700 space-y-3">
                <p>Calculul folosește dobândă fixă pe toată perioada creditului.</p>
                <p>Ratele sunt egale lunar (sistem francez de amortizare).</p>
                <p>Nu include comisioane, asigurări sau alte costuri suplimentare.</p>
                <p>Se presupune că nu există rambursări anticipate sau întârzieri la plată.</p>
              </div>
            )}
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsFAQOpen(!isFAQOpen)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <HelpCircle className="text-green-600 mr-3" size={24} />
                <span className="text-lg font-semibold text-gray-900">Întrebări frecvente (FAQ)</span>
              </div>
              <ChevronDown 
                size={20} 
                className={`text-gray-500 transition-transform ${isFAQOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            {isFAQOpen && (
              <div className="px-6 pb-6 text-gray-700 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ce este DAE și de ce este important?</h4>
                  <p>DAE (Dobânda Anuală Efectivă) include toate costurile creditului: dobânda, comisioanele și alte taxe. Este cel mai bun indicator pentru compararea ofertelor.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dobândă fixă sau variabilă?</h4>
                  <p>Dobânda fixă oferă predictibilitate, dar poate fi mai mare inițial. Dobânda variabilă fluctuează cu piața și poate aduce economii sau costuri suplimentare.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cât avans ar trebui să plătesc?</h4>
                  <p>Un avans mai mare reduce suma creditului și dobânda totală, dar lasă mai puțini bani disponibili. Balanțează între economiile la dobândă și lichiditatea necesară.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorCredite;