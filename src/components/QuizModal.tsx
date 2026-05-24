import { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Button, Mark } from './ui';

interface QuizOption {
  v: string;
  label: string;
  hint?: string;
}

interface QuizStep {
  id: string;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

const QUIZ_STEPS: QuizStep[] = [
  {
    id: 'age',
    question: 'Câți ani ai?',
    subtitle: 'Strategia corectă începe cu orizontul de timp',
    options: [
      { v: '18-25', label: '18–25', hint: 'Start devreme · dobânda compusă e aliatul tău' },
      { v: '26-35', label: '26–35', hint: 'Fereastra de aur · 30 de ani până la pensie' },
      { v: '36-50', label: '36–50', hint: 'Fază de acumulare · optimizare' },
      { v: '50+', label: '50+', hint: 'Protecție · venit pasiv · moștenire' },
    ],
  },
  {
    id: 'goal',
    question: 'Ce îți dorești cel mai mult?',
    subtitle: 'Alege ce contează acum. Totul începe cu o prioritate.',
    options: [
      { v: 'pensie', label: 'O pensie confortabilă' },
      { v: 'copil', label: 'Un viitor pentru copilul meu' },
      { v: 'casa', label: 'Prima mea casă, fără stres' },
      { v: 'investitii', label: 'Să-mi multiplic banii' },
      { v: 'protectie', label: 'Să-mi protejez familia' },
    ],
  },
  {
    id: 'savings',
    question: 'Cât pui deoparte lunar, acum?',
    subtitle: 'Nu există răspuns greșit. Începem de unde ești.',
    options: [
      { v: '0', label: 'Nimic încă', hint: 'Cel mai bun moment să începi e azi' },
      { v: 'small', label: 'Sub 500 RON', hint: 'Un început solid' },
      { v: 'med', label: '500–2.000 RON', hint: 'Traseu bun, hai să optimizăm' },
      { v: 'big', label: 'Peste 2.000 RON', hint: 'Ești deja în top 20%' },
    ],
  },
  {
    id: 'feel',
    question: 'Când te gândești la bani, simți…',
    subtitle: 'Emoția ghidează deciziile. Hai să le echilibrăm.',
    options: [
      { v: 'stress', label: 'Stres și nesiguranță' },
      { v: 'confuzie', label: 'Confuzie · prea multă informație' },
      { v: 'curiozitate', label: 'Curiozitate · vreau să învăț' },
      { v: 'control', label: 'Control · vreau să optimizez' },
    ],
  },
];

interface Persona {
  name: string;
  arc: string;
  tool: string;
  to: string;
}

const PERSONAS: Record<string, Persona> = {
  pensie: { name: 'Arhitectul Timpului', arc: '35 de ani de construcție', tool: 'Calculator pensie', to: '/calculator-pensie' },
  copil: { name: 'Părintele Strategic', arc: 'Investiție pentru 18 ani', tool: 'Calculator plan copil', to: '/calculator-copil' },
  casa: { name: 'Proprietarul Inteligent', arc: 'Achiziție · rambursare anticipată', tool: 'Calculator credite', to: '/calculator-credite' },
  investitii: { name: 'Constructorul de Capital', arc: 'Dobânda compusă · diversificare', tool: 'Dobândă capitalizată', to: '/dobanda-capitalizata' },
  protectie: { name: 'Gardianul Familiei', arc: 'Asigurări · fond de urgență', tool: 'Plan de protecție', to: '/protectie-bunuri' },
};

const computePersona = (answers: Record<string, string>): Persona =>
  PERSONAS[answers.goal] || PERSONAS.pensie;

interface QuizModalProps {
  open: boolean;
  onClose: () => void;
}

export default function QuizModal({ open, onClose }: QuizModalProps) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setAnswers({});
      setDone(false);
    }
  }, [open]);

  if (!open) return null;

  const current = QUIZ_STEPS[step];
  const progress = done ? 100 : (step / QUIZ_STEPS.length) * 100;

  const select = (v: string) => {
    const next = { ...answers, [current.id]: v };
    setAnswers(next);
    if (step < QUIZ_STEPS.length - 1) {
      setTimeout(() => setStep(step + 1), 180);
    } else {
      setTimeout(() => setDone(true), 300);
    }
  };

  const persona = done ? computePersona(answers) : null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md grid place-items-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-[720px] bg-paper-hi rounded-2xl overflow-hidden shadow-lg animate-slideUp max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 md:px-7 py-5 border-b border-ink-200 flex items-center justify-between">
          <div className="flex items-center gap-3.5 text-ink-900">
            <Mark size={22} />
            <div className="eyebrow">Quiz financiar LifeCore</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-ink-500">
              {done ? '4 / 4 · completat' : `${step + 1} / ${QUIZ_STEPS.length}`}
            </div>
            <button
              onClick={onClose}
              className="w-7 h-7 grid place-items-center text-ink-600 hover:text-ink-900"
              aria-label="Închide"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="h-0.5 bg-ink-200">
          <div
            className="h-full bg-gold-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {!done ? (
          <div className="p-6 md:p-10" key={step}>
            <div className="eyebrow text-gold-700 mb-4">Întrebarea {step + 1}</div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-2">{current.question}</h2>
            <p className="text-ink-500 text-base mb-8">{current.subtitle}</p>

            <div className="flex flex-col gap-2">
              {current.options.map((opt, idx) => (
                <button
                  key={opt.v}
                  onClick={() => select(opt.v)}
                  className="group text-left px-5 py-4 bg-paper border border-ink-200 rounded-lg flex items-center gap-4 transition-all hover:border-gold-500 hover:bg-paper-lo"
                >
                  <span className="font-mono text-[11px] text-gold-700 w-5 shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="flex-1">
                    <div className="font-display text-xl leading-tight">{opt.label}</div>
                    {opt.hint && <div className="text-sm text-ink-500 mt-1">{opt.hint}</div>}
                  </div>
                  <ArrowRight size={16} className="text-ink-400 group-hover:text-gold-500 transition-colors" />
                </button>
              ))}
            </div>

            {step > 0 && (
              <button
                className="mt-6 text-sm text-ink-500 hover:text-ink-900 transition-colors"
                onClick={() => setStep(step - 1)}
              >
                ← Înapoi
              </button>
            )}
          </div>
        ) : (
          persona && <QuizResult persona={persona} onClose={onClose} />
        )}
      </div>
    </div>
  );
}

function QuizResult({ persona, onClose }: { persona: Persona; onClose: () => void }) {
  const steps = [
    { n: '01', t: 'Clarifică', d: '30 min · discuție fără obligații' },
    { n: '02', t: 'Planifică', d: 'plan personalizat în 7 zile' },
    { n: '03', t: 'Acționează', d: 'ghidare lunară, ajustări' },
  ];
  return (
    <div className="p-6 md:p-10">
      <div className="eyebrow text-gold-700 mb-3">Rezultat personalizat</div>
      <div className="text-sm text-ink-500 mb-2">Ești</div>
      <h2 className="font-display text-4xl md:text-5xl leading-none mb-3 italic text-gold-700">
        {persona.name}
      </h2>
      <p className="text-lg text-ink-700 mb-8 max-w-[540px] leading-relaxed">
        {persona.arc}. Am pregătit o hartă cu pașii exacți, potrivită pentru situația ta. Durează 15
        minute, e gratuită, și o poți parcurge singur sau cu un consultant.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        {steps.map((s) => (
          <div key={s.n} className="p-4 bg-paper rounded-lg border border-ink-200">
            <div className="font-mono text-[11px] text-gold-700 mb-1.5">{s.n}</div>
            <div className="font-display text-xl mb-1">{s.t}</div>
            <div className="text-xs text-ink-500">{s.d}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="primary" size="lg" to="/contact" className="flex-1 justify-center" onClick={onClose}>
          Rezervă o sesiune · gratuit
        </Button>
        <Button variant="ghost" size="lg" to={persona.to} onClick={onClose}>
          Începe cu {persona.tool}
        </Button>
      </div>
    </div>
  );
}
