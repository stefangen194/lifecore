import { Baby, Target, TrendingUp, Shield, AlertTriangle, Settings, HelpCircle } from 'lucide-react';
import CalculatorPage, { type CalculatorStep } from './CalculatorPage';
import CopilCalculator from './CopilCalculator';
import type { AccordionItem } from '../ui';

const steps: CalculatorStep[] = [
  {
    icon: Target,
    title: 'Stabilește obiectivele educaționale',
    items: [
      'Alege tipul de educație dorit: publică, privată sau internațională',
      'Gândește-te la activități extracurriculare: sport, muzică, limbi străine',
      'Planifică pentru studiile superioare și specializări',
      'Ia în calcul posibile studii în străinătate',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Calculează costurile și economisește inteligent',
    items: [
      'Estimează costurile pentru fiecare etapă: grădiniță, școală, facultate',
      'Începe să economisești devreme pentru a beneficia de dobânda compusă',
      'Diversifică investițiile pentru a proteja economiile de inflație',
      'Ajustează planul periodic în funcție de evoluția costurilor',
    ],
  },
  {
    icon: Shield,
    title: 'Protejează planul și rămâi flexibil',
    items: [
      'Asigură-te că planul este protejat în caz de evenimente neprevăzute',
      'Păstrează flexibilitatea pentru a te adapta la schimbările din viața copilului',
      'Monitorizează progresul și ajustează contribuțiile când e necesar',
      'Implică copilul în înțelegerea valorii educației și a planificării',
    ],
  },
];

const accordions: AccordionItem[] = [
  {
    icon: AlertTriangle,
    title: 'Avertismente',
    body: (
      <div className="space-y-3">
        <p>Calculul este orientativ și se bazează pe estimări ale costurilor educaționale actuale. Costurile reale pot varia semnificativ în timp.</p>
        <p>Inflația poate afecta costurile educației mai mult decât alte sectoare economice.</p>
        <p>Pentru planificare detaliată, consultă un specialist în planificare financiară și educațională.</p>
      </div>
    ),
  },
  {
    icon: Settings,
    title: 'Presupuneri',
    body: (
      <div className="space-y-3">
        <p>Calculul presupune contribuții constante pe toată perioada de economisire.</p>
        <p>Se folosesc estimări ale costurilor educaționale actuale, ajustate pentru inflație.</p>
        <p>Nu include posibile burse, ajutoare financiare sau alte forme de sprijin educațional.</p>
        <p>Estimarea se bazează pe sistemul educațional românesc, cu opțiuni private și internaționale.</p>
      </div>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Întrebări frecvente (FAQ)',
    body: (
      <div className="space-y-4">
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Când ar trebui să încep să economisesc?</h4>
          <p>Cu cât începi mai devreme, cu atât mai bine. Chiar și din primul an de viață, economiile pot crește semnificativ până la vârsta școlară.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Cât costă educația privată în România?</h4>
          <p>Între 2.000-15.000 euro pe an pentru școala primară și gimnazială, și 3.000-25.000 euro pe an pentru liceu, în funcție de instituție și oraș.</p>
        </div>
        <div>
          <h4 className="font-display text-base text-ink-900 mb-1">Ce fac dacă nu pot contribui constant?</h4>
          <p>Planul poate fi ajustat. E mai bine să contribui neregulat decât deloc. Poți compensa perioadele slabe cu contribuții mai mari când îți permite situația.</p>
        </div>
      </div>
    ),
  },
];

const CalculatorCopil: React.FC = () => (
  <CalculatorPage
    icon={Baby}
    title="Calculator Plan Copil"
    guideTitle="Cum să îți planifici viitorul copilului"
    guideIntro="Educația și dezvoltarea copilului necesită o planificare financiară atentă. Un plan bine gândit îți oferă siguranța că îi poți oferi copilului cele mai bune oportunități de creștere și educație, fără să îți afecteze stabilitatea financiară."
    steps={steps}
    keyMessage="🔑 Mesaj cheie: Un plan financiar pentru copil nu înseamnă doar economii, ci investiția în viitorul său și în oportunitățile pe care le va avea în viață."
    accordions={accordions}
  >
    <CopilCalculator />
  </CalculatorPage>
);

export default CalculatorCopil;
