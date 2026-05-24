import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, Container, Eyebrow, Chip, StatCard } from './ui';
import { concepts } from './concepteData';

const Concepte: React.FC = () => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(scrollPercent, 0), 100));
    };
    const throttled = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', throttled, { passive: true });
    return () => window.removeEventListener('scroll', throttled);
  }, []);

  return (
    <div className="bg-paper">
      {/* Scroll progress rail */}
      <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center">
        <div className="w-px h-64 bg-ink-300 relative rounded-full">
          <div
            className="w-full bg-gold-500 rounded-full transition-all duration-300 ease-out"
            style={{ height: `${scrollProgress}%` }}
          />
          <div
            className="absolute w-2 h-2 bg-gold-500 rounded-full left-1/2 transition-all duration-300 ease-out"
            style={{ top: `${scrollProgress}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>
        <div className="mt-3 font-mono text-[10px] text-ink-500">{Math.round(scrollProgress)}%</div>
      </div>

      {/* Header */}
      <Section tone="paper" className="pt-12 pb-8 md:pt-16">
        <Container wide>
          <Eyebrow className="mb-6">The Core · Concepte</Eyebrow>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-20 lg:items-end">
            <h1 className="font-display leading-[0.95] tracking-[-0.02em] text-5xl md:text-7xl">
              Șase probleme.<br />
              Șase <span className="italic text-gold-700">soluții</span>.
            </h1>
            <p className="text-base text-ink-700 leading-relaxed">
              Fiecare concept financiar pe care îl tratăm pornește de la o durere reală și se închide
              cu un plan concret. Nu teorie. Nu jargon. Doar ce se aplică la viața ta.
            </p>
          </div>
        </Container>
      </Section>

      {/* Concept rows */}
      {concepts.map((c, i) => (
        <section
          key={c.n}
          className={`py-14 md:py-20 border-t border-ink-200 ${
            i % 2 === 0 ? 'bg-paper' : 'bg-paper-lo'
          }`}
        >
          <Container wide>
            <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr_1fr] gap-8 lg:gap-10 items-start">
              {/* Number + category */}
              <div>
                <div className="font-display italic text-6xl leading-none text-gold-500">{c.n}</div>
                <Chip className="mt-3">{c.cat}</Chip>
              </div>

              {/* Title + problem */}
              <div>
                <Link to={c.to} className="group inline-block">
                  <h2 className="font-display text-3xl md:text-4xl leading-none mb-6 transition-colors group-hover:text-gold-700">
                    {c.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-clay" />
                  <Eyebrow className="text-clay">Problema</Eyebrow>
                </div>
                <p className="text-ink-700 leading-relaxed">{c.problem.summary}</p>
              </div>

              {/* Solution */}
              <div className="lg:pt-[68px]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <Eyebrow tone="gold">Soluția LifeCore</Eyebrow>
                </div>
                <p className="text-ink-700 leading-relaxed mb-5">{c.solution.summary}</p>
                <Link
                  to={c.to}
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-gold-700 transition-colors group"
                >
                  Citește mai mult
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Stat */}
              <StatCard value={c.stat} label="De reținut" note={c.statLabel} size="lg" arc />
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
};

export default Concepte;
