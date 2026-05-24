import { useState } from 'react';
import MeetingModal from '../MeetingModal';
import { Section, Container, Eyebrow, Chip, Button, StatCard, PhotoPlaceholder } from '../ui';
import type { ConceptData } from '../concepteData';

interface ConceptDetailLayoutProps {
  concept: ConceptData;
}

/** Shared editorial layout for the six concept detail pages. */
export default function ConceptDetailLayout({ concept }: ConceptDetailLayoutProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-paper">
      {/* Hero */}
      <Section tone="paper-lo" className="pt-12 pb-16 md:pt-16 md:pb-20">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-gold-700">Nr. {concept.n}</span>
                <Chip>{concept.cat}</Chip>
              </div>
              <h1 className="font-display leading-[0.95] tracking-[-0.02em] text-4xl md:text-6xl mb-6">
                {concept.title}
              </h1>
              <p className="text-lg text-ink-700 leading-relaxed max-w-[480px]">{concept.tagline}</p>
            </div>
            <PhotoPlaceholder
              src={concept.heroImage}
              alt={concept.title}
              ratio="4/3"
              className="w-full shadow-lg"
            />
          </div>
        </Container>
      </Section>

      {/* Problem / Solution / Stat */}
      <Section tone="paper">
        <Container wide>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Problem */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-clay" />
                <Eyebrow className="text-clay">Problema</Eyebrow>
              </div>
              <p className="text-base text-ink-700 leading-relaxed mb-6">{concept.problem.summary}</p>
              <ul className="space-y-3">
                {concept.problem.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-clay mt-2.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <Eyebrow tone="gold">{concept.solution.heading}</Eyebrow>
              </div>
              <p className="text-base text-ink-700 leading-relaxed mb-6">{concept.solution.summary}</p>
              <ul className="space-y-3 mb-8">
                {concept.solution.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Button variant="primary" onClick={() => setIsModalOpen(true)} className="justify-center">
                  Începe de azi
                </Button>
                {concept.calculator ? (
                  <Button variant="ghost" to={concept.calculator.to} className="justify-center">
                    {concept.calculator.label}
                  </Button>
                ) : (
                  <Button variant="ghost" onClick={() => setIsModalOpen(true)} className="justify-center">
                    Contactează-ne
                  </Button>
                )}
              </div>
            </div>

            {/* Stat */}
            <div className="lg:col-span-3">
              <StatCard
                value={concept.stat}
                label="De reținut"
                note={concept.statLabel}
                size="lg"
                arc
              />
            </div>
          </div>
        </Container>
      </Section>

      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
