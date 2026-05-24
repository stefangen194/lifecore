import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Users, TrendingUp, Crown, Heart, Target, Building2, X, type LucideIcon } from 'lucide-react';
import { Section, Container, Eyebrow, Button } from './ui';

interface PyramidItem {
  title: string;
  content: string;
}
interface PyramidLevel {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  items: PyramidItem[];
  hasCTA?: boolean;
}

// Maps a level item to the relevant route (replaces the old broken setCurrentPage).
const itemRoutes: Record<string, string> = {
  'Fond de urgență': '/buget',
  'Securitate financiară': '/buget',
  Stabilitate: '/buget',
  'Money Management': '/buget',
  Sănătate: '/sanatate',
  'Protecție bunuri': '/protectie-bunuri',
  'Retragere din activitate': '/retragere-activitate',
  'Gestionare credite': '/achizitie-credit',
  'Educația copilului': '/plan-copil',
  Locuință: '/achizitie-credit',
  'Investiții diversificate': '/investitii',
  'Venituri pasive': '/dobanda-capitalizata',
};

const pyramidLevels: PyramidLevel[] = [
  {
    id: 1,
    title: 'Protecție',
    subtitle: 'Sănătate și Rezerve de bani',
    description:
      'Fundamentul piramidei - asigurarea sănătății și crearea unui fond de urgență pentru situații neprevăzute.',
    icon: Heart,
    items: [
      { title: 'Sănătate', content: '' },
      { title: 'Fond de urgență', content: '' },
      { title: 'Protecție bunuri', content: '' },
    ],
  },
  {
    id: 2,
    title: 'Siguranță',
    subtitle: 'Retragere din activitate și Siguranță financiară pe termen lung',
    description:
      'Construirea unei pensii private și asigurarea unui trai decent după încetarea activității profesionale.',
    icon: Shield,
    items: [
      { title: 'Retragere din activitate', content: '' },
      { title: 'Securitate financiară', content: '' },
      { title: 'Gestionare credite', content: '' },
    ],
  },
  {
    id: 3,
    title: 'Familie',
    subtitle: 'Plan copil și Achiziție și Închidere Credit',
    description:
      'Asigurarea nevoilor familiei prin planificarea educației copiilor și gestionarea inteligentă a creditelor.',
    icon: Users,
    items: [
      { title: 'Educația copilului', content: '' },
      { title: 'Locuință', content: '' },
      { title: 'Stabilitate', content: '' },
    ],
  },
  {
    id: 4,
    title: 'Libertate Financiară',
    subtitle: 'Investiții și Diversificare',
    description:
      'Crearea de venituri pasive și diversificarea portofoliului pentru a atinge independența financiară completă.',
    icon: TrendingUp,
    items: [
      { title: 'Investiții diversificate', content: '' },
      { title: 'Venituri pasive', content: '' },
      { title: 'Money Management', content: '' },
    ],
  },
  {
    id: 5,
    title: 'Moștenire',
    subtitle: 'Conservarea patrimoniului personal',
    description:
      'Asigurarea că averea construită va fi transmisă generațiilor viitoare în condiții optime, cu planificare fiscală și juridică adecvată.',
    icon: Crown,
    items: [],
    hasCTA: true,
  },
];

const levelWidths: Record<number, string> = {
  1: 'w-full md:w-[40rem]',
  2: 'w-[95%] md:w-[35rem]',
  3: 'w-[90%] md:w-[30rem]',
  4: 'w-[85%] md:w-[25rem]',
  5: 'w-[80%] md:w-[20rem]',
};

const Maslow: React.FC = () => {
  const navigate = useNavigate();
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<{ levelId: number; title: string; content: string } | null>(null);

  // Render top -> bottom (apex first) without mutating the source array.
  const levelsTopDown = [...pyramidLevels].reverse();

  return (
    <div className="bg-paper">
      <Section tone="paper-lo" className="pt-12 pb-10 md:pt-16 text-center">
        <Container wide>
          <Eyebrow tone="gold" dot className="mb-5 justify-center">Piramida Bogăției</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl leading-none mb-5">
            Libertatea se construiește <span className="italic text-gold-700">de jos în sus</span>.
          </h1>
          <p className="text-base md:text-lg text-ink-600 max-w-3xl mx-auto">
            Inspirată de piramida nevoilor lui Maslow, această piramidă financiară te ghidează pas cu pas
            către libertatea financiară completă, începând cu fundamentele și ajungând la vârf.
          </p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container wide>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12"
            onMouseLeave={() => setActiveLevel(null)}
          >
            {/* Left — interactive pyramid */}
            <div className="flex flex-col items-center">
              <div className="relative flex flex-col items-center gap-2 w-full max-w-md lg:max-w-none">
                {levelsTopDown.map((level) => {
                  const IconComponent = level.icon;
                  const isActive = activeLevel === level.id;
                  const isApex = level.id === 5;
                  const base = isApex
                    ? 'bg-gold-500 text-[#0B0B0C]'
                    : 'bg-paper-hi text-ink-900';
                  return (
                    <div
                      key={level.id}
                      className={`${levelWidths[level.id]} h-20 md:h-24 ${base} cursor-pointer relative rounded-lg border transition-all duration-300 hover:-translate-y-0.5 hover:z-20 ${
                        isActive ? 'border-gold-500 shadow-lg z-10' : 'border-ink-300'
                      }`}
                      onMouseEnter={() => setActiveLevel(level.id)}
                      onClick={() => setActiveLevel(level.id)}
                    >
                      <div className="h-full flex items-center justify-center px-4">
                        <div className="flex items-center gap-3">
                          <IconComponent size={20} className={isApex ? 'text-[#0B0B0C]' : 'text-gold-500'} />
                          <div className="text-center">
                            <h3 className="font-display leading-tight text-sm md:text-lg">{level.title}</h3>
                            <p className={`leading-tight mt-0.5 text-xs hidden sm:block ${isApex ? 'text-[#0B0B0C]/70' : 'text-ink-500'}`}>
                              {level.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-paper border border-ink-300 rounded-full flex items-center justify-center font-mono font-bold text-gold-500 text-sm">
                        {level.id}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right — active level details */}
            <div className="flex flex-col justify-center">
              {activeLevel ? (
                pyramidLevels
                  .filter((level) => level.id === activeLevel)
                  .map((level) => {
                    const IconComponent = level.icon;
                    return (
                      <div
                        key={level.id}
                        className="bg-paper-hi border border-ink-300 border-l-4 border-l-gold-500 p-5 md:p-8 rounded-xl"
                      >
                        <div className="flex items-start gap-4 md:gap-6">
                          <div className="p-3 rounded-full border border-gold-500/40 bg-paper shrink-0">
                            <IconComponent className="text-gold-500" size={24} />
                          </div>
                          <div className="flex-1">
                            <h2 className="font-display text-2xl md:text-3xl mb-2">
                              Nivelul {level.id}: {level.title}
                            </h2>
                            <h3 className="text-base md:text-lg text-gold-700 font-medium mb-3">{level.subtitle}</h3>
                            <p className="text-ink-700 text-sm md:text-base leading-relaxed mb-6">{level.description}</p>

                            {level.hasCTA ? (
                              <Button variant="gold" to="/contact">
                                Programează o întâlnire
                              </Button>
                            ) : (
                              <div className="grid grid-cols-1 gap-3">
                                {level.items.map((item, index) => (
                                  <div
                                    key={index}
                                    className="bg-paper border border-ink-300 hover:border-gold-500 transition-colors p-3 md:p-4 rounded-lg cursor-pointer flex items-center gap-3"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      const route = itemRoutes[item.title];
                                      if (route) {
                                        navigate(route);
                                      } else {
                                        setSelectedItem({ levelId: level.id, title: item.title, content: item.content });
                                      }
                                    }}
                                  >
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold-500 shrink-0" />
                                    <span className="font-medium text-ink-800 text-sm md:text-base">{item.title}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div className="bg-paper-hi border border-ink-300 border-l-4 border-l-gold-500 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Target className="text-gold-500 mr-2" size={20} />
                    <h3 className="font-display text-lg md:text-xl">Cum funcționează?</h3>
                  </div>
                  <p className="text-ink-700 leading-relaxed text-sm md:text-base">
                    <span className="hidden md:inline">Treci cu mouse-ul peste fiecare nivel al piramidei</span>
                    <span className="md:hidden">Atinge fiecare nivel al piramidei</span>{' '}
                    pentru a descoperi detalii despre etapele construirii bogăției. Începe de jos în sus — fiecare
                    nivel se bazează pe cel anterior.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom message */}
          <div className="mt-12 md:mt-16 bg-paper-hi border border-ink-300 border-l-4 border-l-gold-500 p-6 md:p-10 rounded-xl text-center">
            <div className="flex items-center justify-center mb-3">
              <Building2 className="mr-3 text-gold-500 shrink-0" size={24} />
              <h2 className="font-display text-xl md:text-2xl">Construiește-ți piramida pas cu pas</h2>
            </div>
            <p className="text-ink-600 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
              Fiecare nivel reprezintă o etapă importantă în călătoria ta către libertatea financiară. Nu poți
              sări peste nivele — fiecare fundament trebuie să fie solid înainte de a trece la următorul.
            </p>
          </div>
        </Container>
      </Section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedItem(null)}>
          <div className="bg-paper-hi border border-ink-300 rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-paper-hi border-b border-ink-200 p-4 md:p-6 flex items-center justify-between">
              <h2 className="font-display text-xl md:text-2xl">{selectedItem.title}</h2>
              <button onClick={() => setSelectedItem(null)} className="text-ink-500 hover:text-ink-900 transition-colors shrink-0" aria-label="Închide">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <p className="text-ink-700 leading-relaxed text-sm md:text-base">
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
