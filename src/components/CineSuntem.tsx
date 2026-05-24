import { useNavigate } from 'react-router-dom';
import { TrendingUp, Shield, Zap } from 'lucide-react';
import { Section, Container, Eyebrow, Button, PhotoPlaceholder } from './ui';

const values = [
  { n: '01', t: 'Respect', d: 'Baza oricărei relații durabile.' },
  { n: '02', t: 'Încredere', d: 'Fundamentul colaborării și progresului.' },
  { n: '03', t: 'Loialitate', d: 'Suntem alături de clienți pe termen lung.' },
  { n: '04', t: 'Seriozitate', d: 'Oferim soluții solide și de încredere.' },
  { n: '05', t: 'Succes', d: 'Credem că toți îl pot atinge.' },
  { n: '06', t: 'Muncă în echipă', d: 'Împreună ajungem mai departe.' },
  { n: '07', t: 'Performanță', d: 'Standardul pe care îl urmărim zilnic.' },
  { n: '08', t: 'Competiție', d: 'Ne ambiționează să devenim mai buni.' },
  { n: '09', t: 'Profesionalism', d: 'Fundamentul fiecărei decizii.' },
  { n: '10', t: 'Misiune', d: 'Ghidul care ne inspiră și motivează.' },
];

const differentiators = [
  { icon: TrendingUp, t: 'Ascultăm', d: 'Pornim de la nevoile reale ale fiecărui client.' },
  { icon: Shield, t: 'Susținem', d: 'Suntem alături în fiecare etapă a drumului.' },
  { icon: Zap, t: 'Încurajăm', d: 'Te ajutăm să faci pasul decisiv spre libertate.' },
];

const challenges = [
  'lipsă de educație financiară',
  'lipsă de economii și prea multe credite',
  'teama de viitor și de pensie',
  'informații incorecte și mituri financiare',
  'tabuul social legat de discuțiile despre bani',
];

const CineSuntem: React.FC = () => {
  const navigate = useNavigate();
  const handleIncepeAcum = () => navigate('/cariera#upload-cv');

  return (
    <div className="bg-paper">
      {/* Hero */}
      <Section tone="paper-lo" className="pt-12 pb-16 md:pt-16 md:pb-20">
        <Container wide>
          <Eyebrow className="mb-8">Cine suntem</Eyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:items-end">
            <h1 className="font-display leading-[0.95] tracking-[-0.03em] text-5xl md:text-7xl">
              Consultanți,<br />
              nu <span className="italic text-gold-700">vânzători</span>.
            </h1>
            <div className="space-y-4 text-lg text-ink-700 leading-relaxed">
              <p>
                Suntem o echipă de consultanță financiară dedicată oamenilor care își doresc mai mult de
                la viață. Nu lucrăm pentru o bancă, nu avem cote de vândut.
              </p>
              <p>
                Lucrăm pentru <em className="text-gold-700 not-italic">tine</em> — pe termen lung.
                Relația noastră se măsoară în zeci de ani, nu în comisioane.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Photo strip */}
      <Section tone="paper" pad={false} className="py-16">
        <Container wide>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-4 h-[480px]">
            <PhotoPlaceholder label="echipa · birou" dim="1200×960" className="h-full" />
            <PhotoPlaceholder label="ședință client" dim="600×960" className="h-full hidden sm:block" />
            <PhotoPlaceholder label="workshop" dim="600×960" className="h-full hidden lg:block" />
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section tone="paper" className="border-t border-ink-200">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow tone="gold" dot className="mb-4">Misiunea noastră</Eyebrow>
              <p className="text-xl text-ink-800 leading-relaxed">
                Credem că schimbarea începe cu educația. Ne propunem să educăm fiecare român și să
                transformăm mentalitatea unei întregi națiuni — să arătăm că independența financiară este
                posibilă cu ghidare, informații corecte și susținere reală.
              </p>
            </div>
            <div>
              <Eyebrow tone="gold" dot className="mb-4">Viziunea noastră</Eyebrow>
              <p className="text-xl text-ink-800 leading-relaxed">
                Visăm să devenim liderul numărul 1 pe piața de brokeraj din România — partenerul de
                încredere al oamenilor în călătoria lor spre libertatea financiară.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="paper-lo">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div>
              <Eyebrow tone="gold" dot className="mb-4">Valorile noastre</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-none">
                Zece <span className="italic text-gold-700">principii</span> care ne ghidează.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {values.map((v) => (
                <div key={v.n}>
                  <div className="font-mono text-xs text-gold-700 mb-2 tracking-wider">{v.n}</div>
                  <h3 className="font-display text-2xl leading-none mb-2">{v.t}</h3>
                  <p className="text-sm text-ink-600 leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Target audience + challenges */}
      <Section tone="paper">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <Eyebrow tone="gold" dot className="mb-4">Cui ne adresăm</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-6">
                Tuturor celor care simt că <span className="italic text-gold-700">merită mai mult</span>.
              </h2>
              <p className="text-lg text-ink-700 leading-relaxed">
                Indivizi, familii, antreprenori — oricine vrea să trăiască o viață mai bună. Știm că mulți
                români se confruntă cu provocări financiare, iar noi suntem aici să schimbăm asta.
              </p>
            </div>
            <div className="bg-paper-hi border border-ink-300 rounded-lg p-8">
              <Eyebrow className="mb-6 text-clay">Provocările pe care le rezolvăm</Eyebrow>
              <ul className="space-y-4">
                {challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-clay mt-2.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* What makes us different */}
      <Section tone="paper-lo">
        <Container className="max-w-[1000px] text-center">
          <Eyebrow tone="gold" dot className="mb-6 justify-center">Ce ne face diferiți</Eyebrow>
          <p className="font-display text-2xl md:text-3xl leading-snug mb-16">
            Ascultăm cu atenție nevoile clienților, îi susținem în fiecare etapă și îi încurajăm să-și
            descopere puterea de a face un pas decisiv către <span className="italic text-gold-700">libertatea financiară</span>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.t} className="bg-paper-hi border border-ink-300 rounded-lg p-8">
                  <Icon className="text-gold-500 mx-auto mb-4" size={36} />
                  <h3 className="font-display text-2xl mb-2">{d.t}</h3>
                  <p className="text-sm text-ink-600">{d.d}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Key message */}
      <Section tone="paper">
        <Container className="max-w-[820px] text-center">
          <blockquote className="font-display text-3xl md:text-4xl leading-tight">
            Nu suntem doar consultanți financiari. Suntem partenerii tăi de drum spre o viață mai sigură,
            mai liberă și mai <span className="italic text-gold-700">prosperă</span>.
          </blockquote>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="paper-lo" className="text-center">
        <Container className="max-w-[820px]">
          <Eyebrow tone="gold" dot className="mb-6 justify-center">Pasul 1</Eyebrow>
          <h2 className="font-display text-4xl md:text-6xl leading-none mb-6">
            Gata să începi <span className="italic text-gold-700">călătoria</span>?
          </h2>
          <p className="text-lg text-ink-700 mb-10 leading-relaxed">
            Alătură-te comunității noastre și descoperă cum poți construi o viață financiară mai sigură.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="lg" onClick={handleIncepeAcum}>
              Începe acum
            </Button>
            <Button variant="ghost" size="lg" href="mailto:cariera.lifecore@outlook.com">
              Contactează-ne
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default CineSuntem;
