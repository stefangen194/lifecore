import { Link } from 'react-router-dom';
import { Baby } from 'lucide-react';
import { useState } from 'react';
import MeetingModal from '../MeetingModal';

const PlanCopil: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <Baby className="text-white" size={36} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Plan copil</h1>
              <p className="text-xl text-green-50 leading-relaxed">
                Investește în viitorul copilului tău cu o planificare financiară solidă
              </p>
            </div>
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://znqyczx2zp.ufs.sh/f/eultE62Lh8mDnL0WBFzMflcOhSIb30JuFDargNvZVPKji5Hp"
                alt="Child education planning"
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
                Costurile cu educația și dezvoltarea copilului cresc constant, iar multe familii
                nu sunt pregătite financiar pentru aceste cheltuieli majore. Părinții se trezesc
                că trebuie să facă compromisuri în privința educației copilului sau să se îndatoreze.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Educația privată poate costa zeci de mii de euro
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Cursurile și activitățile extracurriculare se scumpesc
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Multe familii se îndatorează pentru educația copiilor
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Copiii pierd oportunități din cauza limitărilor financiare
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Beneficiile unei planificări corecte</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                Un plan financiar pentru copil îți oferă siguranța că îi poți oferi
                cele mai bune oportunități de dezvoltare și educație. Investești în viitorul
                lui și îi deschizi toate ușile către succes.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Copilul tău are acces la educația pe care o merită
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Nu te îndatorezi pentru nevoile lui de dezvoltare
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Ai liniște că poate urma orice cale își dorește
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-medium text-lg">
                  Începe de azi
                </button>
                <Link
                  to="/calculator-copil"
                  className="w-full border-2 border-green-700 text-green-700 py-3 px-6 rounded-lg hover:bg-green-700 hover:text-white transition-colors font-medium text-lg block text-center"
                >
                  Calculator plan copil
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

export default PlanCopil;
