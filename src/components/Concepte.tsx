import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Baby, Home, TrendingUp } from 'lucide-react';

const Concepte: React.FC = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      {/* Dynamic Progress Bar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center">
          <div className="w-1 h-64 bg-gray-300 rounded-full relative">
            <div 
              className="w-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>
            <div 
              className="absolute w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1/2 left-1/2 transition-all duration-300 ease-out"
              style={{ top: `${scrollProgress}%`, transform: 'translate(-50%, -50%)' }}
            ></div>
          </div>
          <div className="mt-3 text-xs text-gray-500 font-medium">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Concepte</h1>
          <p className="text-lg text-gray-600">Înțelege conceptele financiare fundamentale pentru o viață mai sigură</p>
        </div>

        {/* Categories */}
        <div className="space-y-20">
          {/* Retragere din activitate */}
          <div className="bg-white p-12 rounded-xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-6 rounded-full mr-8">
                <Users className="text-blue-700" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Retragere din activitate</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-red-600 mb-6">Problema</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                  Pensia de stat nu va fi suficientă pentru a-ți menține stilul de viață actual. 
                  Mulți români se vor confrunta cu o scădere drastică a veniturilor la pensionare,
                  fiind nevoiți să-și reducă semnificativ cheltuielile și să renunțe la multe dintre
                  lucrurile pe care le consideră normale astăzi.
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                    Pensia de stat reprezintă doar 20-30% din salariul actual
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                    Inflația reduce puterea de cumpărare în timp
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                    Cheltuielile medicale cresc odată cu vârsta
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></span>
                    Dependența de ajutorul copiilor sau al statului
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-green-600 mb-6">Beneficiile unei planificări corecte</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed text-justify">
                  O strategie de pensionare bine gândită îți garantează independența financiară 
                  și liniștea de a te bucura de anii de după muncă. Îți oferă controlul asupra
                  propriului viitor și posibilitatea de a trăi cu demnitate și confort.
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                    Menții același nivel de trai după pensionare
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                    Ai libertatea să faci ce îți place fără griji financiare
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></span>
                    Ai acoperire pentru cheltuieli medicale neprevăzute
                  </li>
                </ul>
                
                <div className="mt-8 space-y-4">
                  <button className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium text-lg">
                    Începe de azi
                  </button>
                  <Link
                    to="/calculator-pensie"
                    className="w-full border-2 border-blue-700 text-blue-700 py-3 px-6 rounded-lg hover:bg-blue-700 hover:text-white transition-colors font-medium text-lg block text-center"
                  >
                    Calculator pensie
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Plan copil */}
          <div className="bg-white p-12 rounded-xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-6 rounded-full mr-8">
                <Baby className="text-green-700" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Plan copil</h2>
            </div>
            
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
                  <button className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors font-medium text-lg">
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

          {/* Achiziție credit și închidere anticipată */}
          <div className="bg-white p-12 rounded-xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-6 rounded-full mr-8">
                <Home className="text-orange-700" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Achiziție credit și închidere anticipată</h2>
            </div>
            
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
                  <button className="w-full bg-orange-700 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors font-medium text-lg">
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

          {/* Investiții */}
          <div className="bg-white p-12 rounded-xl shadow-xl">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-6 rounded-full mr-8">
                <TrendingUp className="text-purple-700" size={40} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Investiții</h2>
            </div>
            
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
                  <button className="w-full bg-purple-700 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition-colors font-medium text-lg">
                    Începe de azi
                  </button>
                  <Link
                    to="/dobanda-capitalizata"
                    className="w-full border-2 border-purple-700 text-purple-700 py-3 px-6 rounded-lg hover:bg-purple-700 hover:text-white transition-colors font-medium text-lg block text-center"
                  >
                    Calculator investiții
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concepte;