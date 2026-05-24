import { TrendingDown, AlertTriangle, Target, Shield, Settings, HelpCircle } from 'lucide-react';
import CalculatorPage, { type CalculatorStep } from './CalculatorPage';
import InflatieDepreciereCalc from './InflatieDepreciereCalc';
import type { AccordionItem } from '../ui';

const steps: CalculatorStep[] = [
  {
    icon: AlertTriangle,
    title: 'Înțelege impactul inflației',
    items: [
      'Prețurile cresc constant, iar banii se depreciază.',
      'Puterea de cumpărare scade – cu aceeași sumă cumperi mai puțin.',
      'Inflația afectează economiile, salariile și pensiile.',
    ],
  },
  {
    icon: Target,
    title: 'Analizează-ți situația financiară',
    items: [
      'Notează veniturile și cheltuielile lunare.',
      'Ajustează-ți planul financiar periodic, în funcție de evoluția inflației.',
      'Observă ce costuri cresc cel mai mult: alimente, utilități, locuință.',
    ],
  },
  {
    icon: Shield,
    title: 'Protejează-ți economiile',
    items: [
      'Investește inteligent pentru a depăși inflația.',
      'Păstrează o parte din bani în instrumente sigure (depozite, obligațiuni, titluri de stat).',
      'Diversifică – nu depinde doar de o singură sursă de economisire.',
    ],
  },
];

const accordions: AccordionItem[] = [
  {
    icon: AlertTriangle,
    title: 'Avertismente',
    body: (
      <div className="space-y-3">
        <p>Calculul este orientativ și se bazează pe rate constante de inflație. Inflația reală poate varia semnificativ în timp.</p>
        <p>Rezultatele nu iau în calcul posibile măsuri de protecție împotriva inflației sau schimbări în politica monetară.</p>
        <p>Pentru decizii financiare importante, consultă un specialist în planificare financiară.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: 'Presupuneri',
    body: (
      <div className="space-y-3">
        <p>Calculul presupune o rată constantă de inflație pe toată perioada analizată.</p>
        <p>Nu include efectele compuse ale inflației asupra diferitelor categorii de bunuri și servicii.</p>
        <p>Se bazează pe puterea de cumpărare generală, fără a lua în calcul schimbările în stilul de viață.</p>
        <p>Nu consideră posibile investiții sau instrumente de protecție împotriva inflației.</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Întrebări frecvente (FAQ)',
    body: (
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cum mă pot proteja de inflație?</h4>
          <p>Investește în active care cresc odată cu inflația: acțiuni, imobiliare, obligațiuni indexate la inflație sau metale prețioase.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Ce înseamnă puterea de cumpărare?</h4>
          <p>Este cantitatea de bunuri și servicii pe care le poți cumpăra cu o anumită sumă de bani. Inflația o reduce în timp.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cât de precisă este estimarea inflației?</h4>
          <p>Inflația poate varia mult în funcție de factori economici, politici și globali. Folosește calculul ca orientare, nu ca predicție exactă.</p>
        </div>
      </div>
    ),
  },
];

const InflatieDepreciere: React.FC = () => (
  <CalculatorPage
    icon={TrendingDown}
    title="Inflație & Depreciere"
    guideTitle="Inflația și banii tăi"
    guideIntro="Conform BNR, rata inflației în 2024 a fost de aprox. 5,1% – ceea ce cumpărai anul trecut cu 100 lei acum costă peste 105 lei. Inflația îți reduce puterea de cumpărare, iar un plan bun îți oferă claritate și control asupra finanțelor tale."
    steps={steps}
    keyMessage="🔑 Mesaj cheie: Inflația nu poate fi evitată, dar poți învăța să o gestionezi. Dacă ai un plan, banii tăi rămân în siguranță și valoarea lor rezistă în timp."
    accordions={accordions}
  >
    <InflatieDepreciereCalc />
  </CalculatorPage>
);

export default InflatieDepreciere;
