import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { useState } from 'react';
import MeetingModal from '../MeetingModal';

const Investitii: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-50">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="text-white" size={36} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Investiții</h1>
              <p className="text-xl text-teal-50 leading-relaxed">
                Construiește-ți averea prin investiții inteligente și diversificate
              </p>
            </div>
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Investment growth"
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
                Banii ținuți doar în conturi de economii pierd valoare din cauza inflației,
                iar mulți români nu știu cum să-și protejeze și să-și crească averea.
                Fără investiții inteligente, rămâi în urmă față de creșterea costurilor.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Inflația îți mănâncă economiile în fiecare an
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Dobânzile la depozite sunt mai mici decât inflația
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Pierzi oportunități de creștere a averii
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Dependența doar de un singur venit (salariul)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Beneficiile investițiilor inteligente</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                Investițiile corecte îți permit să-ți crești averea în timp și să-ți
                atingi obiectivele financiare mai repede decât ai crede. Îți construiești
                o siguranță financiară solidă pentru tine și familia ta.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Banii tăi cresc mai repede decât inflația
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Îți construiești independența financiară
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Îți diversifici sursele de venit pentru siguranță
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-teal-700 text-white py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors font-medium text-lg">
                  Începe de azi
                </button>
                <Link
                  to="/dobanda-capitalizata"
                  className="w-full border-2 border-teal-700 text-teal-700 py-3 px-6 rounded-lg hover:bg-teal-700 hover:text-white transition-colors font-medium text-lg block text-center"
                >
                  Calculator investiții
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

export default Investitii;
