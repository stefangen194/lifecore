import React from 'react';
import { Users, Target, TrendingUp, Shield, ChevronDown, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import PensieCalculator from './PensieCalculator';

const CalculatorPensie: React.FC = () => {
  const [isAvertismenteOpen, setIsAvertismenteOpen] = React.useState(false);
  const [isPresupuneriOpen, setIsPresupuneriOpen] = React.useState(false);
  const [isFAQOpen, setIsFAQOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-full mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Users className="text-blue-700" size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Calculator Pensie</h1>
        </div>

        {/* Description Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 w-full max-w-none mx-auto -mt-4">
          <div className="w-full px-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center w-full">Cum să îți planifici pensionarea</h2>
            <div className="text-gray-700 space-y-4 mb-6 md:mb-8 text-center">
              <p className="text-base md:text-lg">
                Pensionarea nu înseamnă doar bani, ci și modul în care alegi să trăiești, să-ți păstrezi sănătatea și să-ți asiguri liniștea. Un plan bun îți oferă claritate, siguranță și libertatea de a te bucura de viitor.
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
                <Target className="text-blue-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Definește-ți viața de după muncă</h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Alege când vrei să te retragi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Gândește-te cum vrei să trăiești: timp cu familia, călătorii, hobby-uri
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Pune sănătatea pe primul loc: mișcare, echilibru, obiceiuri sănătoase
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></span>
                  Ia în calcul sprijinul pentru cei dragi – copii, nepoți
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  2
                </div>
                <TrendingUp className="text-green-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Pune-ți finanțele în ordine</h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  Notează ce ai: venituri, economii, investiții
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  Compară veniturile așteptate cu cheltuielile dorite
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  Redu datoriile și, dacă poți, adaugă contribuții suplimentare pentru pensie
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                  Verifică-ți investițiile și ajustează unde e nevoie
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-orange-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-orange-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <Shield className="text-orange-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Fii pregătit să te adaptezi</h3>
              </div>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Pensionarea e o călătorie, nu un singur moment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Nevoile se schimbă: început activ → stabilitate și siguranță mai târziu
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Revizuiește-ți periodic planul și ajustează-ți bugetul
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2"></span>
                  Flexibilitatea îți dă puterea să rămâi stăpân pe viața ta
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Message Section */}
        <div className="text-center mb-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="text-sm md:text-base text-blue-800">
              🔑 Mesaj cheie: O pensionare reușită nu înseamnă doar economii, ci echilibrul dintre finanțe, sănătate și stil de viață – pentru a trăi așa cum îți dorești.
            </p>
          </div>
        </div>

        <PensieCalculator />

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
                <p>Calculul este orientativ și se bazează pe estimări. Pensia reală poate varia în funcție de schimbările legislative și economice.</p>
                <p>Sistemul de pensii poate suferi modificări în timp, afectând contribuțiile și beneficiile.</p>
                <p>Inflația poate reduce puterea de cumpărare a pensiei în viitor. Consultă un specialist pentru planificare detaliată.</p>
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
                <p>Calculul presupune contribuții constante pe toată perioada de muncă.</p>
                <p>Se folosesc ratele actuale de contribuție la sistemul public și privat de pensii.</p>
                <p>Nu include posibile schimbări în legislația pensiilor sau în vârsta de pensionare.</p>
                <p>Estimarea se bazează pe salariul actual fără ajustări pentru inflație sau creșteri salariale.</p>
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
                  <h4 className="font-semibold text-gray-900 mb-2">Cât ar trebui să contribui suplimentar la pensie?</h4>
                  <p>Se recomandă să contribui cel puțin 10-15% din venit pentru a menține nivelul de trai după pensionare.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ce se întâmplă dacă îmi schimb locul de muncă?</h4>
                  <p>Contribuțiile la pilonul I și II se păstrează. Pentru pilonul III, verifică condițiile de portabilitate ale fondului ales.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Când pot accesa pensia privată?</h4>
                  <p>Pensia din pilonul II se poate accesa la vârsta standard de pensionare. Pilonul III poate avea condiții diferite în funcție de contractul ales.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPensie;