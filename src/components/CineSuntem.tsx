import React, { useState } from 'react';
import { Users, Target, Award, Heart, Building2, Globe, TrendingUp, Shield, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MeetingModal from './MeetingModal';

const CineSuntem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleIncepeAcum = () => {
    navigate('/cariera#upload-cv');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <Building2 className="text-blue-700" size={32} />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cine Suntem</h1>
          <p className="text-lg text-gray-600">Descoperiți echipa și valorile noastre</p>
        </div>
      </div>

      {/* Hero Introduction - Full Width */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 mb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex items-center mb-8">
            <div className="bg-white/20 p-4 rounded-full mr-6">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-white">Povestea Noastră</h2>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-5xl">
            <span className="block mb-4">Suntem o companie de consultanță financiară dedicată oamenilor care își doresc mai mult de la viață.</span>
            <span className="block mb-4">Oferim educație financiară, soluții practice pentru gestionarea banilor și oportunități reale de carieră în construirea de echipe și dezvoltarea unei afaceri în domeniul financiar.</span>
            <span className="block">În plus, aducem oamenii împreună prin evenimente de networking și întâlniri care construiesc comunități puternice.</span>
          </p>
        </div>
      </div>

      {/* Mission & Vision - Asymmetric Full Width */}
      <div className="relative mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Mission - Takes 7 columns */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-white p-12 transform -rotate-1 hover:rotate-0 transition-transform duration-300 h-full shadow-xl">
              <div className="flex items-center mb-8">
                <div className="bg-green-100 p-4 rounded-full mr-6">
                  <Target className="text-green-700" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Misiunea Noastră</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Credem că schimbarea începe cu educația. Ne propunem să educăm fiecare român și să transformăm 
                mentalitatea unei întregi națiuni. Vrem să le arătăm oamenilor că independența financiară este 
                posibilă, atunci când ai parte de ghidare, informații corecte și susținere reală.
              </p>
            </div>
          </div>

          {/* Vision - Takes 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-white p-12 transform rotate-1 hover:rotate-0 transition-transform duration-300 h-full shadow-xl">
              <div className="flex items-center mb-8">
                <div className="bg-purple-100 p-4 rounded-full mr-4">
                  <Globe className="text-purple-700" size={28} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Viziunea Noastră</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Visăm să devenim liderul numărul 1 pe piața de brokeraj din România. Dorim să fim partenerul 
                de încredere al oamenilor în călătoria lor spre libertatea financiară.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section - Full Width with Creative Layout */}
      <div className="bg-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Heart className="text-blue-700" size={32} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Valorile Noastre</h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Personal Values */}
            <div className="relative">
              <div className="relative bg-white p-10 rounded-3xl shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-full mr-6">
                    <Users className="text-blue-700" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Valori Personale</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'Respect', desc: 'baza oricărei relații durabile' },
                    { name: 'Încredere', desc: 'fundamentul colaborării și progresului' },
                    { name: 'Loialitate', desc: 'suntem alături de clienți pe termen lung' },
                    { name: 'Seriozitate', desc: 'oferim soluții solide și de încredere' },
                    { name: 'Succes', desc: 'credem că toți îl pot atinge' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 group-hover:text-blue-700 transition-colors duration-200">{value.name}</h4>
                        <p className="text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Values */}
            <div className="relative">
              <div className="relative bg-white p-10 rounded-3xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-8">
                  <div className="bg-green-100 p-4 rounded-full mr-6">
                    <Award className="text-green-700" size={28} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Valori Profesionale</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { name: 'Muncă în echipă', desc: 'împreună ajungem mai departe' },
                    { name: 'Performanță', desc: 'standardul pe care îl urmărim zilnic' },
                    { name: 'Competiție', desc: 'ne ambiționează să devenim mai buni' },
                    { name: 'Profesionalism', desc: 'fundamentul fiecărei decizii' },
                    { name: 'Misiune', desc: 'ghidul care ne inspiră și motivează' }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="w-4 h-4 bg-green-500 rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900 group-hover:text-green-700 transition-colors duration-200">{value.name}</h4>
                        <p className="text-gray-600">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience - Full Width Split Design */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-16 shadow-2xl">
        <div className="lg:col-span-8 bg-gradient-to-br from-blue-600 to-blue-800 p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-10">
              <div className="bg-white/20 p-4 rounded-full mr-6">
                <Users className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold">Cui ne adresăm</h2>
            </div>
            <p className="text-blue-100 leading-relaxed text-xl mb-8">
              Ne adresăm tuturor celor care vor să trăiască o viață mai bună: indivizi, familii, 
              antreprenori și oricine simte că merită mai mult.
            </p>
            <p className="text-blue-100 leading-relaxed text-lg">
              Știm că mulți români se confruntă cu diverse provocări financiare, iar noi suntem 
              aici să schimbăm aceste lucruri.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-4 bg-white p-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 flex items-center">
            <Shield className="text-red-500 mr-4" size={28} />
            Provocările pe care le rezolvăm:
          </h3>
          <div className="space-y-6">
            {[
              'lipsă de educație financiară',
              'lipsă de economii și prea multe credite',
              'teama de viitor și de pensie',
              'informații incorecte și mituri financiare',
              'tabuul social legat de discuțiile despre bani'
            ].map((challenge, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="w-4 h-4 bg-red-500 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                <p className="text-gray-700 text-lg group-hover:text-gray-900 transition-colors duration-200">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Makes Us Different - Full Width with Creative Layout */}
      <div className="relative bg-white mb-16 shadow-xl">
        <div className="bg-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Award className="text-blue-700" size={32} />
                </div>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Ce ne face diferiți</h2>
              <div className="w-40 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-2xl text-gray-700 leading-relaxed text-center mb-16">
                Nu avem concurenți direcți – pentru că modul în care alegem să fim aproape de oameni este unic. 
                Ascultăm cu atenție nevoile clienților noștri, îi susținem în fiecare etapă și îi încurajăm să 
                își descopere puterea de a face un pas decisiv către libertatea financiară.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="text-center group">
                  <div className="bg-blue-100 p-8 rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <TrendingUp className="text-blue-600 mx-auto mb-4" size={48} />
                    <h3 className="font-bold text-xl text-gray-900">Ascultăm</h3>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-green-100 p-8 rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <Shield className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="font-bold text-xl text-gray-900">Susținem</h3>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="bg-blue-100 p-8 rounded-3xl mb-6 group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105">
                    <Zap className="text-blue-600 mx-auto mb-4" size={48} />
                    <h3 className="font-bold text-xl text-gray-900">Încurajăm</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Message - Full Width */}
      <div className="bg-blue-50 py-16 mb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative">
            <div className="relative bg-white p-12 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-xl">
              <p className="text-blue-800 text-2xl font-medium leading-relaxed">
                Nu suntem doar consultanți financiari. Suntem partenerii tăi de drum spre o viață mai sigură, mai liberă și mai prosperă.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Full Width */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 py-20 shadow-2xl text-white text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-32 -translate-x-32"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl font-bold mb-8">Gata să Începi Călătoria?</h2>
          <p className="text-blue-100 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
            Alătură-te comunității noastre și descoperă cum poți să-ți construiești o viață financiară 
            mai sigură și mai prosperă.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleIncepeAcum}
              className="bg-white text-blue-700 py-5 px-10 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl transform hover:scale-105 shadow-2xl"
            >
              Începe Acum
            </button>
            <a
              href="mailto:cariera.lifecore@outlook.com"
              className="border-2 border-white text-white py-5 px-10 rounded-2xl hover:bg-white hover:text-blue-700 transition-all duration-300 font-bold text-xl transform hover:scale-105"
            >
              Contactează-ne
            </a>
          </div>
        </div>
      </div>

      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CineSuntem;