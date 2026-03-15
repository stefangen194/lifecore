import { Link } from 'react-router-dom';
import { Users, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import MeetingModal from '../MeetingModal';

const RetragereActivitate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Users className="text-white" size={36} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Retragere din activitate</h1>
              <p className="text-xl text-blue-50 leading-relaxed">
                Planifică-ți viitorul pentru o pensie sigură și confortabilă
              </p>
            </div>
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDd22h2uYsiL9JUCS6RPfmEIjglhrxBnzqwOeQ"
                alt="Retired couple enjoying life"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
              <div className="flex items-center text-white">
                <AlertCircle size={32} className="mr-4" />
                <h3 className="text-3xl font-bold">Problema</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Pensia de stat nu va fi suficientă pentru a-ți menține stilul de viață actual.
                Mulți români se vor confrunta cu o scădere drastică a veniturilor la pensionare,
                fiind nevoiți să-și reducă semnificativ cheltuielile și să renunțe la multe dintre
                lucrurile pe care le consideră normale astăzi.
              </p>
              <div className="space-y-4">
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Pensia de stat reprezintă doar 20-30% din salariul actual</span>
                </div>
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Inflația reduce puterea de cumpărare în timp</span>
                </div>
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Cheltuielile medicale cresc odată cu vârsta</span>
                </div>
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Dependența de ajutorul copiilor sau al statului</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
              <div className="flex items-center text-white">
                <CheckCircle size={32} className="mr-4" />
                <h3 className="text-3xl font-bold">Beneficiile unei planificări corecte</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                O strategie de pensionare bine gândită îți garantează independența financiară
                și liniștea de a te bucura de anii de după muncă. Îți oferă controlul asupra
                propriului viitor și posibilitatea de a trăi cu demnitate și confort.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Menții același nivel de trai după pensionare</span>
                </div>
                <div className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Ai libertatea să faci ce îți place fără griji financiare</span>
                </div>
                <div className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Ai acoperire pentru cheltuieli medicale neprevăzute</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Începe de azi
                </button>
                <Link
                  to="/calculator-pensie"
                  className="w-full border-2 border-blue-600 text-blue-700 py-4 px-6 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 block text-center"
                >
                  Calculator pensie
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

export default RetragereActivitate;
