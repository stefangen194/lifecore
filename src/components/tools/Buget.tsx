import React from 'react';
import { PiggyBank, DollarSign, Target, CreditCard, Settings, ChevronDown, AlertTriangle, HelpCircle } from 'lucide-react';
import BugetCalculator from './BugetCalculator';

const Buget: React.FC = () => {
  const [isAvertismenteOpen, setIsAvertismenteOpen] = React.useState(false);
  const [isPresupuneriOpen, setIsPresupuneriOpen] = React.useState(false);
  const [isFAQOpen, setIsFAQOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-full mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <PiggyBank className="text-blue-700" size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Buget</h1>
        </div>

        {/* Budget Guide Section */}
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 w-full max-w-none mx-auto -mt-4">
          <div className="w-full px-2">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center w-full">Cum să-ți faci un buget eficient</h2>
            <div className="text-gray-700 space-y-4 mb-6 md:mb-8 text-center">
              <p className="text-base md:text-lg">
                Un buget bine gândit îți arată clar unde se duc banii tăi și te ajută să-ți acoperi cheltuielile, să economisești și să-ți atingi obiectivele. Chiar și pași mici, făcuți constant, pot aduce o mare diferență în siguranța ta financiară.
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
                <DollarSign className="text-blue-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Stabilește veniturile</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700">
                Notează toate sursele de bani și cât de des le primești.
              </p>
              <ul className="space-y-2 text-sm md:text-base text-gray-700 mt-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  salariu
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  beneficii salariale
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  investiții
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
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Decide economiile</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                Hotărăște ce sumă pui deoparte la fiecare venit.
              </p>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <p className="text-sm font-medium text-gray-900 mb-2">👉 Formula de bază:</p>
                <p className="text-base md:text-lg font-bold text-green-700 mb-2">Venituri – Economii = Cheltuieli</p>
                <p className="text-sm text-gray-600">Adică întâi economisești, apoi cheltuiești.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-orange-50 p-6 md:p-8 rounded-lg min-h-[300px] flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-orange-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                  3
                </div>
                <CreditCard className="text-orange-700 mr-2" size={24} />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">Organizează cheltuielile</h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 mb-4">Împarte banii rămași în:</p>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <strong>Nevoi </strong> (chirie, utilități, mâncare)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <strong>Datorii </strong> (credite, carduri)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  <strong>Dorințe </strong> (distracție, hobby-uri, vacanțe)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Message Section */}
        <div className="text-center mb-8 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6 mx-auto">
            <p className="text-sm md:text-base text-blue-800">
              🔑 Mesaj cheie: Un buget eficient înseamnă să pui economiile pe primul loc, să separi nevoile de dorințe și să ai un sistem simplu, sustenabil.
            </p>
          </div>
        </div>

        <div>
          <BugetCalculator />

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
                  <p>Bugetul este un instrument de planificare, nu o garanție. Cheltuielile neprevăzute pot apărea oricând.</p>
                  <p>Veniturile pot fluctua, mai ales dacă lucrezi ca freelancer sau ai venituri variabile.</p>
                  <p>Acest calculator oferă estimări generale. Pentru planificare financiară detaliată, consultă un specialist.</p>
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
                  <p>Calculul se bazează pe venituri și cheltuieli lunare constante.</p>
                  <p>Nu include cheltuieli neprevăzute sau de urgență.</p>
                  <p>Se recomandă să păstrezi 10-20% din venit pentru economii și situații neprevăzute.</p>
                  <p>Cheltuielile fixe includ: chirie, utilități, rate, asigurări și alte obligații lunare.</p>
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
                    <h4 className="font-semibold text-gray-900 mb-2">Cât ar trebui să economisesc lunar?</h4>
                    <p>Se recomandă să economisești cel puțin 10-20% din venitul net lunar. Începe cu cât poți și crește treptat.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ce fac dacă cheltuielile depășesc veniturile?</h4>
                    <p>Analizează cheltuielile și identifică unde poți reduce. Prioritizează nevoile față de dorințe și caută modalități de a crește veniturile.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cât de des ar trebui să-mi revizuiesc bugetul?</h4>
                    <p>Revizuiește-ți bugetul lunar și ajustează-l când apar schimbări majore în venituri sau cheltuieli.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buget;