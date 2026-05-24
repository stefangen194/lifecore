import { CreditCard, Home, Percent, Calculator, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CalculatorPage, { type CalculatorStep } from './CalculatorPage';
import CrediteCalculator from './CrediteCalculator';
import type { AccordionItem } from '../ui';

const steps: CalculatorStep[] = [
  {
    icon: Home,
    title: 'Înțelege tipurile de credite',
    items: [
      <><strong>Credit ipotecar standard</strong> — cel mai frecvent, cu avans de 15–25% și termen de până la 30 de ani</>,
      <><strong>Programul „Noua Casă”</strong> — avans redus (5%), dar cu plafoane și condiții stricte</>,
      <><strong>Durata creditului</strong> — mai scurtă = mai puțină dobândă dar rate mai mari; mai lungă = rate mici dar cost total mai mare</>,
    ],
  },
  {
    icon: Percent,
    title: 'Alege dobânda potrivită pentru tine',
    items: [
      <><strong>Dobândă fixă</strong> — stabilă 3–5 ani, ușor de bugetat, dar nu scade dacă piața relaxează dobânzile</>,
      <><strong>Dobândă variabilă (IRCC/ROBOR + marjă)</strong> — fluctuează cu piața și politica BNR; poate aduce economii sau costuri</>,
      <><strong>Dobândă mixtă</strong> — fixă în primii ani, apoi variabilă; echilibru între siguranță și flexibilitate</>,
    ],
  },
  {
    icon: Calculator,
    title: 'Compară ofertele și costurile reale',
    items: [
      <><strong>DAE (Dobânda Anuală Efectivă)</strong> — cel mai bun indicator pentru costul total (include dobânda și comisioanele)</>,
      <><strong>Comisioane ascunse</strong> — verifică analiza dosarului, administrarea lunară sau rambursarea anticipată</>,
      <><strong>Opțiuni utile</strong> — alege doar facilitățile de care ai nevoie (rambursare anticipată gratuită, refinanțare)</>,
    ],
  },
];

const accordions: AccordionItem[] = [
  {
    icon: AlertTriangle,
    title: 'Avertismente',
    body: (
      <div className="space-y-3">
        <p>Calculul este orientativ și se bazează pe dobânzi fixe. Dobânzile variabile pot schimba semnificativ costul total al creditului.</p>
        <p>Nu include toate comisioanele (analiză dosar, administrare, asigurări obligatorii). Verifică DAE-ul pentru costul real.</p>
        <p>Capacitatea de rambursare poate fi afectată de schimbări în venituri sau cheltuieli neprevăzute.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: 'Presupuneri',
    body: (
      <div className="space-y-3">
        <p>Calculul folosește dobândă fixă pe toată perioada creditului.</p>
        <p>Ratele sunt egale lunar (sistem francez de amortizare).</p>
        <p>Nu include comisioane, asigurări sau alte costuri suplimentare.</p>
        <p>Se presupune că nu există rambursări anticipate sau întârzieri la plată.</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Întrebări frecvente (FAQ)',
    body: (
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Ce este DAE și de ce este important?</h4>
          <p>DAE include toate costurile creditului: dobânda, comisioanele și alte taxe. Este cel mai bun indicator pentru compararea ofertelor.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Dobândă fixă sau variabilă?</h4>
          <p>Dobânda fixă oferă predictibilitate, dar poate fi mai mare inițial. Dobânda variabilă fluctuează cu piața și poate aduce economii sau costuri.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cât avans ar trebui să plătesc?</h4>
          <p>Un avans mai mare reduce suma creditului și dobânda totală, dar lasă mai puțini bani disponibili. Balansează economiile la dobândă cu lichiditatea.</p>
        </div>
      </div>
    ),
  },
];

const CalculatorCredite: React.FC = () => (
  <CalculatorPage
    icon={CreditCard}
    title="Calculator Credite"
    guideTitle="Cum să alegi un credit ipotecar avantajos"
    guideIntro="Un credit pentru locuință este o datorie pe termen lung – chiar și o mică diferență de dobândă poate însemna zeci de mii de lei în plus sau în minus pe parcursul anilor. Alegerea corectă îți aduce siguranță și liniște financiară."
    steps={steps}
    keyMessage="🔑 Mesaj cheie: În România, cel mai bun credit ipotecar nu înseamnă doar „dobândă mică”, ci și alegerea tipului corect de credit, a indicilor și a tuturor costurilor reale incluse în DAE."
    accordions={accordions}
  >
    <CrediteCalculator />
  </CalculatorPage>
);

export default CalculatorCredite;
