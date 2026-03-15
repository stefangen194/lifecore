import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useState } from 'react';
import MeetingModal from '../MeetingModal';

const AchizitieCredit: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Home className="text-white" size={36} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Achiziție credit și închidere anticipată</h1>
              <p className="text-xl text-orange-50 leading-relaxed">
                Învață să gestionezi inteligent creditele și să economisești la dobânzi
              </p>
            </div>
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Home ownership"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-xl shadow-xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-red-600 mb-6">Problema</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                Creditele pe termen lung te țin legat de bănci pentru decenii, iar dobânzile
                plătite pot depăși valoarea proprietății achiziționate. Mulți oameni plătesc
                pentru casă de 2-3 ori mai mult decât valoarea ei reală.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Plătești dublu sau triplu față de valoarea reală a casei
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Ratele lunare îți limitează flexibilitatea financiară
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Riscul de a pierde casa dacă nu poți plăti ratele
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Stresul constant al datoriilor pe termen lung
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Beneficiile unei strategii inteligente</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                O strategie de rambursare anticipată și alegerea creditului potrivit
                îți poate economisi zeci de mii de euro și îți oferă libertate financiară.
                Devii cu adevărat proprietar și scapi de povara datoriilor.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Economisești sume uriașe la dobânzi
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Devii proprietar real mai repede
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Ai siguranța că casa îți aparține cu adevărat
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-orange-700 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg">
                  Începe de azi
                </button>
                <Link
                  to="/calculator-credite"
                  className="w-full border-2 border-orange-700 text-orange-700 py-3 px-6 rounded-lg hover:bg-orange-700 hover:text-white transition-colors font-medium text-lg block text-center"
                >
                  Calculator credit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AchizitieCredit;
