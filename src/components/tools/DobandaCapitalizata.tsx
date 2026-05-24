import { TrendingUp, PiggyBank, Target, Zap, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CalculatorPage, { type CalculatorStep } from './CalculatorPage';
import DobCapCalculator from './DobCapCalculator';
import type { AccordionItem } from '../ui';

const steps: CalculatorStep[] = [
  {
    icon: PiggyBank,
    title: 'Creșterea economiilor',
    items: [
      'Vezi cât poți aduna punând regulat bani deoparte',
      'Descoperi cum sumele mici, dar constante, fac diferența',
      'Îți creezi o rezervă financiară solidă',
    ],
  },
  {
    icon: Target,
    title: 'Puterea dobânzii compuse',
    items: [
      'Dobânda se aplică nu doar pe economii, ci și pe dobânzile acumulate',
      'Banii tăi cresc exponențial, nu liniar',
      'Cu cât lași economiile mai mult, cu atât se multiplică mai repede',
    ],
  },
  {
    icon: Zap,
    title: 'Momentul contează',
    items: [
      'Începe acum pentru un avantaj major pe termen lung',
      'Vezi diferența uriașă între a economisi devreme vs. mai târziu',
      'Profită de timp ca cel mai bun aliat al banilor tăi',
    ],
  },
];

const accordions: AccordionItem[] = [
  {
    icon: AlertTriangle,
    title: 'Avertismente',
    body: (
      <div className="space-y-3">
        <p>Rezultatele sunt orientative. Sumele reale pot varia, mai ales dacă se schimbă ratele dobânzilor.</p>
        <p>Nu lua acest calculator drept singura sursă de decizie. Pentru planuri financiare importante, discută și cu un consultant autorizat.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: 'Presupuneri',
    body: (
      <div className="space-y-3">
        <p>Depozitul inițial începe de azi.</p>
        <p>Depunerile regulate se fac la finalul perioadei alese (zi, săptămână, lună sau an).</p>
        <p>Dobânda se capitalizează lunar sau anual, conform practicilor obișnuite.</p>
        <p>Dacă alegi să începi mai târziu, comparația se face cu aceeași frecvență de depunere.</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Întrebări frecvente (FAQ)',
    body: (
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cum funcționează dobânda compusă?</h4>
          <p>Dobânda se aplică nu doar la suma depusă, ci și la dobânzile acumulate anterior. Cu timpul, banii cresc tot mai repede.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Rezultatele sunt în valoarea de azi sau în viitor?</h4>
          <p>Sumele afișate reprezintă valoarea viitoare a banilor, fără ajustări pentru inflație.</p>
        </div>
      </div>
    ),
  },
];

const DobandaCapitalizata: React.FC = () => (
  <CalculatorPage
    icon={TrendingUp}
    title="Dobânda Capitalizată"
    guideTitle="Cum funcționează dobânda capitalizată"
    guideIntro="Dobânda compusă este unul dintre cele mai puternice instrumente financiare. Cu cât începi mai devreme să economisești, cu atât banii tăi cresc mai repede și mai mult în timp."
    steps={steps}
    keyMessage="🔑 Mesaj cheie: Dobânda compusă este ca un „efect de bulgăre de zăpadă” pentru bani: cu cât începi mai repede, cu atât crește mai mult în timp."
    accordions={accordions}
  >
    <DobCapCalculator />
  </CalculatorPage>
);

export default DobandaCapitalizata;
