import React, { useState } from 'react';
import { Shield, Users, TrendingUp, Crown, Heart, Home, PiggyBank, Target, Building2, X } from 'lucide-react';

const Maslow: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ levelId: number; title: string; content: string } | null>(null);

  const pyramidLevels = [
    {
      id: 1,
      title: "Protecție",
      subtitle: "Sănătate și Rezerve de bani",
      description: "Fundamentul piramidei - asigurarea sănătății și crearea unui fond de urgență pentru situații neprevăzute.",
      icon: Heart,
      color: "from-red-500 to-red-700",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-500",
      items: [
        { title: "Sănătate", content: "" },
        { title: "Fond de urgență", content: "" },
        { title: "Protecție bunuri", content: "" }
      ]
    },
    {
      id: 2,
      title: "Siguranță",
      subtitle: "Retragere din activitate și Siguranță financiară pe termen lung",
      description: "Construirea unei pensii private și asigurarea unui trai decent după încetarea activității profesionale.",
      icon: Shield,
      color: "from-orange-500 to-orange-700",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      borderColor: "border-orange-500",
      items: [
        { title: "Retragere din activitate", content: "" },
        { title: "Securitate financiară", content: "" },
        { title: "Gestionare credite", content: "" }
      ]
    },
    {
      id: 3,
      title: "Familie",
      subtitle: "Plan copil și Achiziție și Închidere Credit",
      description: "Asigurarea nevoilor familiei prin planificarea educației copiilor și gestionarea inteligentă a creditelor.",
      icon: Users,
      color: "from-green-500 to-green-700",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-500",
      items: [
        { title: "Educația copilului", content: "" },
        { title: "Locuință", content: "" },
        { title: "Stabilitate", content: "" }
      ]
    },
    {
      id: 4,
      title: "Libertate Financiară",
      subtitle: "Investiții și Diversificare",
      description: "Crearea de venituri pasive și diversificarea portofoliului pentru a atinge independența financiară completă.",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-500",
      items: [
        { title: "Investiții diversificate", content: "" },
        { title: "Venituri pasive", content: "" },
        { title: "Money Management", content: "" }
      ]
    },
    {
      id: 5,
      title: "Moștenire",
      subtitle: "Conservarea patrimoniului personal",
      description: "Asigurarea că averea construită va fi transmisă generațiilor viitoare în condiții optime, cu planificare fiscală și juridică adecvată.",
      icon: Crown,
      color: "from-purple-500 to-purple-700",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-500",
      items: [],
      hasCTA: true
    }
  ];

  const getLevelWidth = (levelId: number) => {
    const widths = {
      1: 'w-full md:w-[40rem]',  // Protecție - longest (bottom)
      2: 'w-[95%] md:w-[35rem]',  // Siguranță - 5rem shorter
      3: 'w-[90%] md:w-[30rem]',  // Familie - 5rem shorter than step 2
      4: 'w-[85%] md:w-[25rem]',  // Libertate Financiară - 5rem shorter than step 3
      5: 'w-[80%] md:w-[20rem]'   // Moștenire - 5rem shorter than step 4 (top)
    };
    return widths[levelId as keyof typeof widths];
  };

  const getLevelHeight = () => 'h-20 md:h-24';

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16 px-4">
      <div className="w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="bg-blue-100 p-3 md:p-4 rounded-full">
              <TrendingUp className="text-blue-700" size={28} />
            </div>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-2">Piramida Bogăției</h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Inspirată de piramida nevoilor lui Maslow, această piramidă financiară te ghidează pas cu pas
            către libertatea financiară completă, începând cu fundamentele și ajungând la vârf.
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-16 w-full"
          onMouseLeave={() => setActiveLevel(null)}
        >
          {/* Left Column - Interactive Pyramid */}
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col items-center space-y-1 w-full max-w-md lg:max-w-none">
              {pyramidLevels.reverse().map((level, index) => {
                const IconComponent = level.icon;
                const isActive = activeLevel === level.id;

                return (
                  <div
                    key={level.id}
                    className={`
                      ${getLevelWidth(level.id)} ${getLevelHeight()}
                      bg-gradient-to-r ${level.color}
                      cursor-pointer relative
                      transform transition-all duration-300 hover:scale-105 hover:z-20
                      ${isActive ? 'scale-105 shadow-2xl z-10' : 'hover:shadow-xl'}
                      border-2 ${isActive ? level.borderColor : 'border-transparent'}
                      rounded-lg
                    `}
                    onMouseEnter={() => setActiveLevel(level.id)}
                    onClick={() => setActiveLevel(level.id)}
                  >
                    <div className="h-full flex items-center justify-center text-white px-3 md:px-4">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="flex-shrink-0">
                          <IconComponent size={20} className="md:w-6 md:h-6" />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold leading-tight text-sm md:text-lg">
                            {level.title}
                          </h3>
                          <p className="opacity-95 leading-tight mt-0.5 md:mt-1 text-xs md:text-sm hidden sm:block">
                            {level.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Level number badge */}
                    <div className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center font-bold text-gray-800 shadow-lg border-2 border-gray-200 text-sm md:text-base">
                      {level.id}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Active Level Details */}
          <div className="flex flex-col justify-center">
            {activeLevel ? (
              <div>
                {pyramidLevels
                  .filter(level => level.id === activeLevel)
                  .map(level => {
                    const IconComponent = level.icon;
                    return (
                      <div
                        key={level.id}
                        className={`
                          ${level.bgColor} p-4 md:p-8 rounded-xl shadow-xl
                          transform transition-all duration-500 animate-in slide-in-from-bottom-4
                          border-l-4 md:border-l-8 ${level.borderColor}
                        `}
                      >
                        <div className="flex items-start space-x-3 md:space-x-6">
                          <div className={`${level.bgColor} p-2 md:p-4 rounded-full border-2 ${level.borderColor} flex-shrink-0`}>
                            <IconComponent className={level.textColor} size={24} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 md:space-x-3 mb-2 md:mb-4">
                              <h2 className={`text-xl md:text-3xl font-bold ${level.textColor}`}>
                                Nivelul {level.id}: {level.title}
                              </h2>
                            </div>
                            <h3 className={`text-base md:text-xl font-semibold ${level.textColor} mb-2 md:mb-4`}>
                              {level.subtitle}
                            </h3>
                            <p className="text-gray-700 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                              {level.description}
                            </p>

                            {level.hasCTA ? (
                              <div className="flex flex-col items-center justify-center py-4 md:py-8">
                                <a
                                  href="#contact"
                                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-900 transition-all duration-300 transform hover:scale-105"
                                >
                                  Programează o întâlnire
                                </a>
                              </div>
                            ) : (
                              <div className="grid grid-cols-1 gap-3 md:gap-4">
                                {level.items.map((item, index) => {
                                  const shouldNavigateToBudget =
                                    item.title === "Fond de urgență" ||
                                    item.title === "Securitate financiară" ||
                                    item.title === "Stabilitate" ||
                                    item.title === "Money Management";

                                  const shouldNavigateToSanatate = item.title === "Sănătate";
                                  const shouldNavigateToProtectieBunuri = item.title === "Protecție bunuri";
                                  const shouldNavigateToRetragere = item.title === "Retragere din activitate";
                                  const shouldNavigateToCredite = item.title === "Gestionare credite";
                                  const shouldNavigateToPlanCopil = item.title === "Educația copilului";
                                  const shouldNavigateToLocuinta = item.title === "Locuință";
                                  const shouldNavigateToInvestitii = item.title === "Investiții diversificate";
                                  const shouldNavigateToDobandaCapitalizata = item.title === "Venituri pasive";

                                  return (
                                    <div
                                      key={index}
                                      className="bg-white p-3 md:p-4 rounded-lg shadow-md border-l-4 border-gray-300 hover:border-gray-500 transition-colors cursor-pointer"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        if (shouldNavigateToBudget && setCurrentPage) {
                                          setCurrentPage('buget');
                                        } else if (shouldNavigateToSanatate && setCurrentPage) {
                                          setCurrentPage('sanatate');
                                        } else if (shouldNavigateToProtectieBunuri && setCurrentPage) {
                                          setCurrentPage('protectie-bunuri');
                                        } else if (shouldNavigateToRetragere && setCurrentPage) {
                                          setCurrentPage('retragere-activitate');
                                        } else if (shouldNavigateToCredite && setCurrentPage) {
                                          setCurrentPage('achizitie-credit');
                                        } else if (shouldNavigateToPlanCopil && setCurrentPage) {
                                          setCurrentPage('plan-copil');
                                        } else if (shouldNavigateToLocuinta && setCurrentPage) {
                                          setCurrentPage('achizitie-credit');
                                        } else if (shouldNavigateToInvestitii && setCurrentPage) {
                                          setCurrentPage('investitii');
                                        } else if (shouldNavigateToDobandaCapitalizata && setCurrentPage) {
                                          setCurrentPage('dobanda-capitalizata');
                                        } else {
                                          setSelectedItem({ levelId: level.id, title: item.title, content: item.content });
                                        }
                                      }}
                                    >
                                      <div className="flex items-center space-x-2 md:space-x-3">
                                        <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-r ${level.color} flex-shrink-0`}></div>
                                        <span className="font-medium text-gray-800 text-sm md:text-base">{item.title}</span>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-blue-50 p-4 md:p-6 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-center justify-center mb-3 md:mb-4">
                    <Target className="text-blue-700 mr-2" size={20} />
                    <h3 className="text-base md:text-xl font-semibold text-blue-900">Cum funcționează?</h3>
                  </div>
                  <p className="text-blue-800 leading-relaxed text-sm md:text-base">
                    <span className="hidden md:inline">Treci cu mouse-ul peste fiecare nivel al piramidei</span>
                    <span className="md:hidden">Atinge fiecare nivel al piramidei</span>
                    {' '}pentru a descoperi detalii despre etapele construirii bogăției. Începe de jos în sus - fiecare nivel se bazează pe cel anterior.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-8 md:mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-8 rounded-xl text-white shadow-xl">
            <div className="flex items-center justify-center mb-3 md:mb-4">
              <Building2 className="mr-2 md:mr-3 flex-shrink-0" size={24} />
              <h2 className="text-lg md:text-2xl font-bold">Construiește-ți Piramida Pas cu Pas</h2>
            </div>
            <p className="text-blue-100 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              Fiecare nivel al piramidei reprezintă o etapă importantă în călătoria ta către libertatea financiară.
              Nu poți sări peste nivele - fiecare fundament trebuie să fie solid înainte de a trece la următorul.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 md:p-6 flex items-center justify-between">
              <h2 className="text-lg md:text-2xl font-bold text-gray-900">{selectedItem.title}</h2>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Content for {selectedItem.title} will go here.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Maslow;