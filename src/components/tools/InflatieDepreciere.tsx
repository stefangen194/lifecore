import React, { useState } from 'react';
import { TrendingDown, AlertTriangle, Target, Shield, ChevronDown, Settings, HelpCircle } from 'lucide-react';
import InflatieDepreciereCalc from './InflatieDepreciereCalc';

const InflatieDepreciere: React.FC = () => {
  const [isAvertismenteOpen, setIsAvertismenteOpen] = useState(false);
  const [isPresupuneriOpen, setIsPresupuneriOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full">
              <TrendingDown className="text-blue-700" size={28} />
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 px-2">Inflație & Depreciere</h1>
        </div>

        {/* Description Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-6 md:mb-8 w-full max-w-none mx-auto md:-mt-4">
          <div className="w-full px-1 md:px-2 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center w-full">Inflația și banii tăi</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Conform BNR, rata inflației în 2024 a fost de aprox. 5,1% – ceea ce cumpărai anul trecut cu 100 lei acum costă peste 105 lei. Inflația îți reduce puterea de cumpărare, iar un plan bun îți oferă claritate și control asupra finanțelor tale.
              </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 w-full mt-6">
            {/* Step 1 */}
            <div className="bg-blue-50 p-4 md:p-8 rounded-lg lg:min-h-[250px] flex flex-col">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-blue-700 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 md:mr-3 text-sm md:text-base">
                  1
                </div>
                <AlertTriangle className="text-blue-700 mr-1 md:mr-2" size={20} />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">Înțelege impactul inflației</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Prețurile cresc constant, iar banii se depreciază.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Puterea de cumpărare scade – cu aceeași sumă cumperi mai puțin.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Inflația afectează economiile, salariile și pensiile.</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 p-4 md:p-8 rounded-lg lg:min-h-[250px] flex flex-col">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-green-700 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 md:mr-3 text-sm md:text-base">
                  2
                </div>
                <Target className="text-green-700 mr-1 md:mr-2" size={20} />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">Analizează-ți situația financiară</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Notează veniturile și cheltuielile lunare.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Ajustează-ți planul financiar periodic, în funcție de evoluția inflației.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Observă ce costuri cresc cel mai mult: alimente, utilități, locuință.</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-orange-50 p-4 md:p-8 rounded-lg lg:min-h-[250px] flex flex-col">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-orange-700 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 md:mr-3 text-sm md:text-base">
                  3
                </div>
                <Shield className="text-orange-700 mr-1 md:mr-2" size={20} />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">Protejează-ți economiile</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Investește inteligent pentru a depăși inflația.</span>
                </li>
                <li className="flex items-start text-left">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span className="text-left">Păstrează o parte din bani în instrumente sigure (depozite, obligațiuni, titluri de stat).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-2 flex-shrink-0"></span>
                  <span>Diversifică – nu depinde doar de o singură sursă de economisire.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        {/* Key Message Section */}
        <div className="text-center mb-6 md:mb-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-4 border-blue-500 mt-4 md:mt-6 overflow-x-auto">
            <p className="text-blue-800 text-sm md:text-base">
              🔑 Mesaj cheie: Inflația nu poate fi evitată, dar poți învăța să o gestionezi. Dacă ai un plan, banii tăi rămân în siguranță și valoarea lor rezistă în timp.
            </p>
          </div>
        </div>

        <InflatieDepreciereCalc />

        {/* Dropdowns Section */}
        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 max-w-4xl mx-auto">
          {/* Avertismente */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsAvertismenteOpen(!isAvertismenteOpen)}
              className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <AlertTriangle className="text-orange-600 mr-2 md:mr-3" size={20} />
                <span className="text-base md:text-lg font-semibold text-gray-900">Avertismente</span>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform ${isAvertismenteOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isAvertismenteOpen && (
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700 space-y-2 md:space-y-3 text-sm md:text-base">
                <p>Calculul este orientativ și se bazează pe rate constante de inflație. Inflația reală poate varia semnificativ în timp.</p>
                <p>Rezultatele nu iau în calcul posibile măsuri de protecție împotriva inflației sau schimbări în politica monetară.</p>
                <p>Pentru decizii financiare importante, consultă un specialist în planificare financiară.</p>
              </div>
            )}
          </div>

          {/* Presupuneri */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsPresupuneriOpen(!isPresupuneriOpen)}
              className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <Settings className="text-blue-600 mr-2 md:mr-3" size={20} />
                <span className="text-base md:text-lg font-semibold text-gray-900">Presupuneri</span>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform ${isPresupuneriOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isPresupuneriOpen && (
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700 space-y-2 md:space-y-3 text-sm md:text-base">
                <p>Calculul presupune o rată constantă de inflație pe toată perioada analizată.</p>
                <p>Nu include efectele compuse ale inflației asupra diferitelor categorii de bunuri și servicii.</p>
                <p>Se bazează pe puterea de cumpărare generală, fără a lua în calcul schimbările în stilul de viață.</p>
                <p>Nu consideră posibile investiții sau instrumente de protecție împotriva inflației.</p>
              </div>
            )}
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-lg">
            <button
              onClick={() => setIsFAQOpen(!isFAQOpen)}
              className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                <HelpCircle className="text-green-600 mr-2 md:mr-3" size={20} />
                <span className="text-base md:text-lg font-semibold text-gray-900">Întrebări frecvente (FAQ)</span>
              </div>
              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform ${isFAQOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isFAQOpen && (
              <div className="px-4 md:px-6 pb-4 md:pb-6 text-gray-700 space-y-3 md:space-y-4 text-sm md:text-base">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Cum mă pot proteja de inflație?</h4>
                  <p>Investește în active care cresc odată cu inflația: acțiuni, imobiliare, obligațiuni indexate la inflație sau metale prețioase.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Ce înseamnă puterea de cumpărare?</h4>
                  <p>Este cantitatea de bunuri și servicii pe care le poți cumpăra cu o anumită sumă de bani. Inflația reduce puterea de cumpărare în timp.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Cât de precisă este estimarea inflației?</h4>
                  <p>Inflația poate varia mult în funcție de factori economici, politici și globali. Folosește calculul ca orientare generală, nu ca predicție exactă.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InflatieDepreciere;