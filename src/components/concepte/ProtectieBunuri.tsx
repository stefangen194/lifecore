import { ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import MeetingModal from '../MeetingModal';

const ProtectieBunuri: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <ShieldCheck className="text-white" size={36} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Protecție bunuri</h1>
              <p className="text-xl text-slate-50 leading-relaxed">
                Asigură-ți bunurile împotriva riscurilor și ai liniște deplină
              </p>
            </div>
            <div className="relative h-80 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Property protection"
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
                Bunurile pe care le deții reprezentă o investiție importantă, iar pierderea
                lor din cauza unui incendiu, furt sau alt incident poate avea consecințe
                financiare devastatoare. Mulți oameni își dau seama prea târziu cât de
                importante sunt asigurările pentru bunuri.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Un incendiu poate distruge tot ce ai construit
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Furturile și vandalizările sunt imprevizibile
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Dezastrele naturale pot afecta oricând locuința
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                  Înlocuirea bunurilor fără asigurare te îndatorează
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Beneficiile protecției bunurilor</h3>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                O asigurare completă pentru bunuri îți oferă siguranța că, indiferent ce
                se întâmplă, vei putea să-ți reconstruiești viața fără să fie afectate
                grav economiile tale. Este o investiție în liniștea ta sufletească.
              </p>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Protecție completă împotriva riscurilor majore
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Înlocuirea rapidă a bunurilor pierdute
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                  Nu îți compromite economiile în caz de accident
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-slate-700 text-white py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors font-medium text-lg">
                  Începe de azi
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full border-2 border-slate-700 text-slate-700 py-3 px-6 rounded-lg hover:bg-slate-700 hover:text-white transition-colors font-medium text-lg"
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

export default ProtectieBunuri;
