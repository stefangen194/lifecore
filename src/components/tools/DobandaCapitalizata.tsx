import React, { useState } from 'react';
import { TrendingUp, ChevronDown, AlertTriangle, Settings, HelpCircle, PiggyBank, Target, Zap } from 'lucide-react';
import DobCapCalculator from './DobCapCalculator';

const DobandaCapitalizata: React.FC = () => {
  const [isAvertismenteOpen, setIsAvertismenteOpen] = useState(false);
  const [isPresupuneriOpen, setIsPresupuneriOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-full mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <TrendingUp className="text-blue-700" size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Dobânda Capitalizată</h1>
        </div>

        {/* Description Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 w-full max-w-none mx-auto -mt-4">
          <div className="w-full px-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center w-full">Cum funcționează dobânda capitalizată</h2>
            <div className="text-gray-700 space-y-4 mb-6 md:mb-8 text-center">
              <p className="text-base md:text-lg">
                Dobânda compusă este unul dintre cele mai puternice instrumente financiare. Cu cât începi mai devreme să economisești, cu atât banii tăi cresc mai repede și mai mult în timp.
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
                <PiggyBank className="text-blue-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Creșterea economiilor</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Vezi cât poți aduna punând regulat bani deoparte
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Descoperi cum sumele mici, dar constante, fac diferența
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Îți creezi o rezervă financiară solidă
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <Target className="text-green-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Puterea dobânzii compuse</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Dobânda se aplică nu doar pe economii, ci și pe dobânzile acumulate
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Banii tăi cresc exponențial, nu liniar
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Cu cât lași economiile mai mult, cu atât se multiplică mai repede
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-orange-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-orange-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <Zap className="text-orange-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Momentul contează</h3>
              </div>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Începe acum pentru un avantaj major pe termen lung
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Vezi diferența uriașă între a economisi devreme vs. mai târziu
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Profită de timp ca cel mai bun aliat al banilor tăi
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Message Section */}
        <div className="text-center mb-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="text-sm md:text-base text-blue-800">
              🔑 Mesaj cheie: Dobânda compusă este ca un „efect de bulgăre de zăpadă" pentru bani: cu cât începi mai repede, cu atât crește mai mult în timp.
            </p>
          </div>
        </div>

        <DobCapCalculator />

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
                <p>Rezultatele sunt orientative. Sumele reale pot varia, mai ales dacă se schimbă ratele dobânzilor.</p>
                <p>Nu lua acest calculator drept singura sursă de decizie. Dacă ai planuri financiare importante, discută și cu un consultant financiar autorizat.</p>
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
                <p>Depozitul inițial începe de azi.</p>
                <p>Depunerile regulate se fac la finalul perioadei alese (zi, săptămână, lună sau an).</p>
                <p>Dobânda se capitalizează lunar sau anual, conform practicilor obișnuite.</p>
                <p>Dacă alegi să începi mai târziu, comparația se face cu aceeași frecvență de depunere.</p>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Cum funcționează dobânda compusă?</h4>
                  <p>Dobânda se aplică nu doar la suma depusă, ci și la dobânzile acumulate anterior. Cu timpul, banii cresc tot mai repede.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Rezultatele sunt în valoarea de azi sau în viitor?</h4>
                  <p>Sumele afișate reprezintă valoarea viitoare a banilor, fără ajustări pentru inflație.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DobandaCapitalizata;