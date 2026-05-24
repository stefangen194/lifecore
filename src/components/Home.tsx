import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  Section,
  Container,
  Button,
  Eyebrow,
  StatCard,
  GoldArc,
  PhotoPlaceholder,
  PyramidLevels,
  type PyramidLevel,
} from './ui';
import ConcepteGrid from './ConcepteGrid';
import QuizModal from './QuizModal';

const heroLevels: PyramidLevel[] = [
  { n: 5, title: 'Moștenire', desc: 'Transmite mai departe', href: '/maslow' },
  { n: 4, title: 'Investiții', desc: 'Creștere activă', href: '/investitii' },
  { n: 3, title: 'Credite & case', desc: 'Achiziții strategice', href: '/achizitie-credit' },
  { n: 2, title: 'Protecție', desc: 'Asigurări · fond urgență', href: '/protectie-bunuri' },
  { n: 1, title: 'Fundație', desc: 'Buget · obiceiuri', href: '/buget' },
];

const piramidaLevels: PyramidLevel[] = [
  { n: 5, title: 'Moștenire', desc: 'Transmite valoare mai departe', href: '/maslow' },
  { n: 4, title: 'Investiții', desc: 'Creștere activă a averii', href: '/investitii' },
  { n: 3, title: 'Case și credite', desc: 'Achiziții majore strategice', href: '/achizitie-credit' },
  { n: 2, title: 'Protecție', desc: 'Asigurări · fond de urgență', href: '/protectie-bunuri' },
  { n: 1, title: 'Fundație', desc: 'Buget · obiceiuri · cashflow', href: '/buget' },
];

const tools = [
  { t: 'Buget', d: 'Cashflow lunar, pe categorii', to: '/buget' },
  { t: 'Dobândă capitalizată', d: 'Cât fac banii tăi în 20 de ani', to: '/dobanda-capitalizata' },
  { t: 'Credite', d: 'Rată · DAE · rambursare anticipată', to: '/calculator-credite' },
  { t: 'Pensie', d: 'De la ce sumă începe independența', to: '/calculator-pensie' },
  { t: 'Plan copil', d: 'Cât pui azi pentru 18 ani', to: '/calculator-copil' },
  { t: 'Inflație', d: 'Puterea reală a banilor tăi', to: '/inflatie-depreciere' },
];

const heroStats = [
  { v: '2.400+', l: 'planuri create' },
  { v: '94%', l: 'clienți recomandă' },
  { v: '0 lei', l: 'consultație inițială' },
];

export default function Home() {
  const [quizOpen, setQuizOpen] = useState(false);
  const openQuiz = () => setQuizOpen(true);

  return (
    <div className="bg-paper">
      {/* ─── Pyramid hero (variant C) ─── */}
      <Section tone="paper-lo" className="pt-12 pb-20 md:pt-16 md:pb-28">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow tone="gold" dot className="mb-5">
                Piramida Bogăției
              </Eyebrow>
              <h1 className="font-display leading-[0.95] tracking-[-0.03em] text-[clamp(56px,9vw,128px)]">
                Cinci trepte<br />
                către <span className="italic text-gold-700">libertate</span>.
              </h1>
              <p className="text-lg text-ink-700 mt-8 leading-relaxed max-w-[460px]">
                Libertatea financiară nu se improvizează — se construiește. Fiecare treaptă stă pe
                cea de dedesubt. Nu poți sări peste fundație. Noi te ghidăm nivel cu nivel.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Button variant="primary" size="lg" onClick={openQuiz}>
                  Unde mă aflu? · quiz
                </Button>
                <Button variant="ghost" size="lg" href="#piramida">
                  Explorează <ArrowRight size={16} />
                </Button>
              </div>
              <div className="mt-12 pt-6 border-t border-ink-300 grid grid-cols-3 gap-4 sm:gap-6">
                {heroStats.map((s) => (
                  <StatCard key={s.l} boxed={false} value={s.v} label={s.l} size="md" />
                ))}
              </div>
            </div>

            <PyramidLevels levels={heroLevels} variant="hero" interactive />
          </div>
        </Container>
      </Section>

      {/* ─── Piramida explainer ─── */}
      <Section id="piramida" tone="paper">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Eyebrow tone="gold" dot className="mb-4">
                Piramida Bogăției
              </Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none mb-6">
                Libertatea financiară<br className="hidden sm:block" />
                {' '}se construiește <span className="italic text-gold-700">de jos în sus</span>.
              </h2>
              <p className="text-lg text-ink-700 leading-relaxed mb-8 max-w-[480px]">
                Marea majoritate încearcă să sară direct la investiții. Rezultatul? Fără fundație,
                totul se prăbușește la prima criză. La LifeCore începem cu nivelul 1 și urcăm cu tine.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" to="/maslow">
                  Explorează piramida
                </Button>
                <Button variant="ghost" to="/concepte">
                  Vezi concepte
                </Button>
              </div>
            </div>
            <PyramidLevels levels={piramidaLevels} variant="section" interactive />
          </div>
        </Container>
      </Section>

      {/* ─── Concepte grid ─── */}
      <Section tone="paper-lo">
        <Container wide>
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
            <div>
              <Eyebrow tone="gold" dot className="mb-4">
                Concepte
              </Eyebrow>
              <h2 className="font-display text-4xl md:text-6xl leading-none max-w-[720px]">
                Șase <span className="italic text-gold-700">concepte</span> care îți schimbă viața
                financiară.
              </h2>
            </div>
            <Button variant="ghost" to="/concepte">
              Toate conceptele <ArrowRight size={16} />
            </Button>
          </div>
          <ConcepteGrid />
        </Container>
      </Section>

      {/* ─── Tools strip ─── */}
      <Section tone="paper-hi">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <Eyebrow tone="gold-soft" dot className="mb-3">
                Tools
              </Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-none">
                Calculatoare care<br />
                îți <span className="italic text-gold-500">răspund</span>.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-300">
              {tools.map((t) => (
                <Link
                  key={t.t}
                  to={t.to}
                  className="group flex flex-col gap-1.5 p-6 bg-paper-hi transition-colors hover:bg-paper-lo"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl">{t.t}</span>
                    <ArrowUpRight
                      size={16}
                      className="text-ink-400 group-hover:text-gold-500 transition-colors"
                    />
                  </div>
                  <span className="text-xs text-ink-500">{t.d}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Testimonial ─── */}
      <Section tone="paper">
        <Container className="max-w-[1000px]">
          <Eyebrow tone="gold" dot className="text-center mb-8">
            Povestea clienților
          </Eyebrow>
          <blockquote className="font-display text-3xl md:text-5xl leading-tight text-center tracking-[-0.02em]">
            „Credeam că pensia e ceva departe. Cu LifeCore am înțeles că{' '}
            <span className="italic text-gold-700">50 de lei pe zi azi</span> înseamnă 850.000 lei la
            65 de ani. Schimbă perspectiva complet.”
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <PhotoPlaceholder label="portret" rounded className="w-14 h-14" />
            <div>
              <div className="text-sm font-medium">Andrei M., 32</div>
              <div className="text-xs text-ink-500">Inginer software · client din 2024</div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Final CTA ─── */}
      <Section tone="paper-lo" className="relative overflow-hidden py-28 md:py-36">
        <Container wide className="relative z-10">
          <div className="text-center max-w-[820px] mx-auto">
            <Eyebrow tone="gold" dot className="mb-6">
              Pasul 1
            </Eyebrow>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none mb-6">
              Începe cu o<br className="hidden sm:block" />
              {' '}<span className="italic text-gold-700">conversație</span>.
            </h2>
            <p className="text-lg md:text-xl text-ink-700 mb-10 leading-relaxed">
              30 de minute. Fără cost. Fără presiune. Înțelegem unde ești, îți explicăm ce e posibil.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="primary" size="lg" onClick={openQuiz}>
                Începe cu quiz-ul
              </Button>
              <Button variant="ghost" size="lg" to="/contact">
                Rezervă direct <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
        <GoldArc
          lines={3}
          stretch
          className="absolute -bottom-40 left-0 right-0 w-full h-[400px] opacity-50"
        />
      </Section>

      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
}
