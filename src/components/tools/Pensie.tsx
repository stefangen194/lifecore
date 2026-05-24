import { Users, Target, TrendingUp, Shield, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CalculatorPage, { type CalculatorStep } from './CalculatorPage';
import PensieCalculator from './PensieCalculator';
import type { AccordionItem } from '../ui';

const steps: CalculatorStep[] = [
  {
    icon: Target,
    title: 'Definește-ți viața de după muncă',
    items: [
      'Alege când vrei să te retragi',
      'Gândește-te cum vrei să trăiești: timp cu familia, călătorii, hobby-uri',
      'Pune sănătatea pe primul loc: mișcare, echilibru, obiceiuri sănătoase',
      'Ia în calcul sprijinul pentru cei dragi – copii, nepoți',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Pune-ți finanțele în ordine',
    items: [
      'Notează ce ai: venituri, economii, investiții',
      'Compară veniturile așteptate cu cheltuielile dorite',
      'Redu datoriile și adaugă contribuții suplimentare pentru pensie',
      'Verifică-ți investițiile și ajustează unde e nevoie',
    ],
  },
  {
    icon: Shield,
    title: 'Fii pregătit să te adaptezi',
    items: [
      'Pensionarea e o călătorie, nu un singur moment',
      'Nevoile se schimbă: început activ → stabilitate mai târziu',
      'Revizuiește-ți periodic planul și ajustează-ți bugetul',
      'Flexibilitatea îți dă puterea să rămâi stăpân pe viața ta',
    ],
  },
];

const accordions: AccordionItem[] = [
  {
    icon: AlertTriangle,
    title: 'Avertismente',
    body: (
      <div className="space-y-3">
        <p>Calculul este orientativ și se bazează pe estimări. Pensia reală poate varia în funcție de schimbările legislative și economice.</p>
        <p>Sistemul de pensii poate suferi modificări în timp, afectând contribuțiile și beneficiile.</p>
        <p>Inflația poate reduce puterea de cumpărare a pensiei în viitor. Consultă un specialist pentru planificare detaliată.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: 'Presupuneri',
    body: (
      <div className="space-y-3">
        <p>Calculul presupune contribuții constante pe toată perioada de muncă.</p>
        <p>Se folosesc ratele actuale de contribuție la sistemul public și privat de pensii.</p>
        <p>Nu include posibile schimbări în legislația pensiilor sau în vârsta de pensionare.</p>
        <p>Estimarea se bazează pe salariul actual fără ajustări pentru inflație sau creșteri salariale.</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Întrebări frecvente (FAQ)',
    body: (
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cât ar trebui să contribui suplimentar la pensie?</h4>
          <p>Se recomandă să contribui cel puțin 10-15% din venit pentru a menține nivelul de trai după pensionare.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Ce se întâmplă dacă îmi schimb locul de muncă?</h4>
          <p>Contribuțiile la pilonul I și II se păstrează. Pentru pilonul III, verifică condițiile de portabilitate ale fondului ales.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Când pot accesa pensia privată?</h4>
          <p>Pensia din pilonul II se poate accesa la vârsta standard de pensionare. Pilonul III poate avea condiții diferite în funcție de contract.</p>
        </div>
      </div>
    ),
  },
];

const CalculatorPensie: React.FC = () => (
  <CalculatorPage
    icon={Users}
    title="Calculator Pensie"
    guideTitle="Cum să îți planifici pensionarea"
    guideIntro="Pensionarea nu înseamnă doar bani, ci și modul în care alegi să trăiești, să-ți păstrezi sănătatea și să-ți asiguri liniștea. Un plan bun îți oferă claritate, siguranță și libertatea de a te bucura de viitor."
    steps={steps}
    keyMessage="🔑 Mesaj cheie: O pensionare reușită nu înseamnă doar economii, ci echilibrul dintre finanțe, sănătate și stil de viață – pentru a trăi așa cum îți dorești."
    accordions={accordions}
  >
    <PensieCalculator />
  </CalculatorPage>
);

export default CalculatorPensie;
