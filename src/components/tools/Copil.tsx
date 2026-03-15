import React from 'react';
import { Baby, Target, TrendingUp, Shield, ChevronDown, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CopilCalculator from './CopilCalculator';

const CalculatorCopil: React.FC = () => {
  const [isAvertismenteOpen, setIsAvertismenteOpen] = React.useState(false);
  const [isPresupuneriOpen, setIsPresupuneriOpen] = React.useState(false);
  const [isFAQOpen, setIsFAQOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="max-w-full mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full">
              <Baby className="text-blue-700" size={28} />
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 px-2">Calculator Plan Copil</h1>
        </div>

        {/* Description Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-6 md:mb-8 w-full max-w-none mx-auto md:-mt-4">
          <div className="w-full px-1 md:px-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-8 text-center w-full">Cum să îți planifici viitorul copilului</h2>
            <div className="text-gray-700 space-y-3 md:space-y-4 mb-6 md:mb-8 text-center">
              <p className="text-base md:text-lg">
                Educația și dezvoltarea copilului necesită o planificare financiară atentă. Un plan bine gândit îți oferă siguranța că îi poți oferi copilului tău cele mai bune oportunități de creștere și educație, fără să îți afecteze stabilitatea financiară.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8 w-full">
            {/* Step 1 */}
            <div className="bg-blue-50 p-4 md:p-8 rounded-lg lg:min-h-[300px] flex flex-col">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-blue-700 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 md:mr-3 text-sm md:text-base">
                  1
                </div>
                <Target className="text-blue-700 mr-1 md:mr-2" size={20} />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">Stabilește obiectivele educaționale</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Alege tipul de educație dorit: publică, privată sau internațională</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Gândește-te la activități extracurriculare: sport, muzică, limbi străine</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Planifică pentru studiile superioare și specializări</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Ia în calcul posibile studii în străinătate</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-green-50 p-4 md:p-8 rounded-lg lg:min-h-[300px] flex flex-col">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-green-700 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 md:mr-3 text-sm md:text-base">
                  2
                </div>
                <TrendingUp className="text-green-700 mr-1 md:mr-2" size={20} />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">Calculează costurile și economisește inteligent</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Estimează costurile pentru fiecare etapă: grădiniță, școală, facultate</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Începe să economisești cât mai devreme pentru a beneficia de dobânda compusă</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Diversifică investițiile pentru a proteja economiile de inflație</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Ajustează planul periodic în funcție de evoluția costurilor</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-orange-50 p-4 md:p-8 rounded-lg lg:min-h-[300px] flex flex-col">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="bg-orange-700 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-bold mr-2 md:mr-3 text-sm md:text-base">
                  3
                </div>
                <Shield className="text-orange-700 mr-1 md:mr-2" size={20} />
                <h3 className="text-base md:text-xl font-semibold text-gray-900">Protejează planul și rămâi flexibil</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Asigură-te că planul este protejat în caz de evenimente neprevăzute</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Păstrează flexibilitatea pentru a te adapta la schimbările din viața copilului</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Monitorizează progresul și ajustează contribuțiile când este necesar</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 md:mr-3 mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>Implică copilul în înțelegerea valorii educației și a planificării financiare</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Message Section */}
        <div className="text-center mb-6 md:mb-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg border-l-4 border-blue-500 mt-4 md:mt-6">
            <p className="text-blue-800 text-sm md:text-base">
              🔑 Mesaj cheie: Un plan financiar pentru copil nu înseamnă doar economii, ci investiția în viitorul său și în oportunitățile pe care le va avea în viață.
            </p>
          </div>
        </div>

        <CopilCalculator />

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
                <p>Calculul este orientativ și se bazează pe estimări ale costurilor educaționale actuale. Costurile reale pot varia semnificativ în timp.</p>
                <p>Inflația poate afecta costurile educației mai mult decât alte sectoare economice.</p>
                <p>Pentru planificare detaliată, consultă un specialist în planificare financiară și educațională.</p>
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
                <p>Calculul presupune contribuții constante pe toată perioada de economisire.</p>
                <p>Se folosesc estimări ale costurilor educaționale actuale, ajustate pentru inflație.</p>
                <p>Nu include posibile burse, ajutoare financiare sau alte forme de sprijin educațional.</p>
                <p>Estimarea se bazează pe sistemul educațional românesc, cu opțiuni pentru educație privată și internațională.</p>
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
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Când ar trebui să încep să economisesc pentru educația copilului?</h4>
                  <p>Cu cât începi mai devreme, cu atât mai bine. Chiar și din primul an de viață, economiile pot crește semnificativ până când copilul ajunge la vârsta școlară.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Cât costă educația privată în România?</h4>
                  <p>Costurile variază între 2.000-15.000 euro pe an pentru școala primară și gimnazială, și 3.000-25.000 euro pe an pentru liceu, în funcție de instituție și oraș.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 md:mb-2">Ce se întâmplă dacă nu pot contribui constant la plan?</h4>
                  <p>Planul poate fi ajustat. Este mai bine să contribui neregulat decât să nu contribui deloc. Poți compensa perioadele mai slabe cu contribuții mai mari când îți permite situația financiară.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorCopil;