import { Heart, AlertCircle, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import MeetingModal from '../MeetingModal';

const Sanatate: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Heart className="text-white" size={36} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">Sănătate</h1>
              <p className="text-xl text-red-50 leading-relaxed">
                Protejează-ți sănătatea și asigură-te că ai acoperire pentru orice situație
              </p>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDR60D3QZFv8HVt2JPNwznkQZLup5B4xcD0MAm"
                alt="Health and wellness"
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
                Cheltuielile medicale neprevăzute pot deveni o povară financiară uriașă pentru orice familie.
                Sistemul medical de stat este adesea insuficient, iar costurile pentru servicii medicale private
                pot epuiza rapid economiile.
              </p>
              <div className="space-y-4">
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Costurile medicale cresc mai repede decât inflația</span>
                </div>
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">O boală gravă poate ruina financiar o familie</span>
                </div>
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Listele de așteptare la stat sunt foarte lungi</span>
                </div>
                <div className="flex items-start bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Multe tratamente moderne nu sunt acoperite de stat</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6">
              <div className="flex items-center text-white">
                <CheckCircle size={32} className="mr-4" />
                <h3 className="text-3xl font-bold">Beneficiile unei asigurări de sănătate</h3>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                O asigurare de sănătate completă îți oferă liniștea că tu și familia ta veți
                primi cele mai bune tratamente fără să vă ruinați financiar. Investești în
                cel mai important lucru - sănătatea ta și a celor dragi.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Acces rapid la cele mai bune spitale și medici</span>
                </div>
                <div className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Protecție financiară în caz de boală gravă</span>
                </div>
                <div className="flex items-start bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800 text-lg">Controlul sănătății prin investigații preventive</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-6 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Începe de azi
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full border-2 border-red-600 text-red-700 py-4 px-6 rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Contactează-ne
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Sanatate;
