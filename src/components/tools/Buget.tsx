import { PiggyBank, DollarSign, Target, CreditCard, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CalculatorPage, { type CalculatorStep } from './CalculatorPage';
import BugetCalculator from './BugetCalculator';
import type { AccordionItem } from '../ui';

const steps: CalculatorStep[] = [
  {
    icon: DollarSign,
    title: 'Stabilește veniturile',
    intro: 'Notează toate sursele de bani și cât de des le primești.',
    items: ['Salariu', 'Beneficii salariale', 'Investiții'],
  },
  {
    icon: Target,
    title: 'Decide economiile',
    intro: 'Hotărăște ce sumă pui deoparte la fiecare venit.',
    extra: (
      <div className="mt-4 bg-paper border-l-2 border-gold-500 rounded-r-lg p-4">
        <p className="text-sm text-ink-700 mb-1">👉 Formula de bază:</p>
        <p className="font-display text-lg text-gold-500 mb-1">Venituri − Economii = Cheltuieli</p>
        <p className="text-xs text-ink-500">Adică întâi economisești, apoi cheltuiești.</p>
      </div>
    ),
  },
  {
    icon: CreditCard,
    title: 'Organizează cheltuielile',
    intro: 'Împarte banii rămași în:',
    items: [
      <><strong>Nevoi</strong> (chirie, utilități, mâncare)</>,
      <><strong>Datorii</strong> (credite, carduri)</>,
      <><strong>Dorințe</strong> (distracție, hobby-uri, vacanțe)</>,
    ],
  },
];

const accordions: AccordionItem[] = [
  {
    icon: AlertTriangle,
    title: 'Avertismente',
    body: (
      <div className="space-y-3">
        <p>Bugetul este un instrument de planificare, nu o garanție. Cheltuielile neprevăzute pot apărea oricând.</p>
        <p>Veniturile pot fluctua, mai ales dacă lucrezi ca freelancer sau ai venituri variabile.</p>
        <p>Acest calculator oferă estimări generale. Pentru planificare detaliată, consultă un specialist.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: 'Presupuneri',
    body: (
      <div className="space-y-3">
        <p>Calculul se bazează pe venituri și cheltuieli lunare constante.</p>
        <p>Nu include cheltuieli neprevăzute sau de urgență.</p>
        <p>Se recomandă să păstrezi 10-20% din venit pentru economii și situații neprevăzute.</p>
        <p>Cheltuielile fixe includ: chirie, utilități, rate, asigurări și alte obligații lunare.</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Întrebări frecvente (FAQ)',
    body: (
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cât ar trebui să economisesc lunar?</h4>
          <p>Se recomandă să economisești cel puțin 10-20% din venitul net lunar. Începe cu cât poți și crește treptat.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Ce fac dacă cheltuielile depășesc veniturile?</h4>
          <p>Analizează cheltuielile și identifică unde poți reduce. Prioritizează nevoile față de dorințe și caută modalități de a crește veniturile.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cât de des ar trebui să-mi revizuiesc bugetul?</h4>
          <p>Revizuiește-ți bugetul lunar și ajustează-l când apar schimbări majore în venituri sau cheltuieli.</p>
        </div>
      </div>
    ),
  },
];

const Buget: React.FC = () => (
  <CalculatorPage
    icon={PiggyBank}
    title="Buget"
    guideTitle="Cum să-ți faci un buget eficient"
    guideIntro="Un buget bine gândit îți arată clar unde se duc banii tăi și te ajută să-ți acoperi cheltuielile, să economisești și să-ți atingi obiectivele. Chiar și pași mici, făcuți constant, pot aduce o mare diferență în siguranța ta financiară."
    steps={steps}
    keyMessage="🔑 Mesaj cheie: Un buget eficient înseamnă să pui economiile pe primul loc, să separi nevoile de dorințe și să ai un sistem simplu, sustenabil."
    accordions={accordions}
  >
    <BugetCalculator />
  </CalculatorPage>
);

export default Buget;
