import React from 'react';
import { type LucideIcon } from 'lucide-react';
import { Section, Container, Eyebrow, Accordion, type AccordionItem } from '../ui';

export interface CalculatorStep {
  icon: LucideIcon;
  title: string;
  intro?: string;
  items?: React.ReactNode[];
  extra?: React.ReactNode;
}

interface CalculatorPageProps {
  icon: LucideIcon;
  title: string;
  guideTitle: string;
  guideIntro: string;
  steps: CalculatorStep[];
  keyMessage: string;
  accordions: AccordionItem[];
  /** The interactive calculator itself. */
  children: React.ReactNode;
}

/**
 * Shared chrome for every calculator page: hero → guide (3 steps) → key message
 * → calculator → FAQ accordions. Each wrapper just supplies data + its calculator.
 */
export default function CalculatorPage({
  icon: Icon,
  title,
  guideTitle,
  guideIntro,
  steps,
  keyMessage,
  accordions,
  children,
}: CalculatorPageProps) {
  return (
    <div className="bg-paper">
      {/* Hero */}
      <Section tone="paper-lo" className="pt-12 pb-10 md:pt-16 text-center">
        <Container wide>
          <div className="flex justify-center mb-5">
            <span className="grid place-items-center w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/40">
              <Icon className="text-gold-500" size={30} />
            </span>
          </div>
          <Eyebrow className="mb-4">The Core · Tools</Eyebrow>
          <h1 className="font-display text-4xl md:text-6xl leading-none">{title}</h1>
        </Container>
      </Section>

      {/* Guide */}
      <Section tone="paper" pad={false} className="pb-12">
        <Container wide>
          <h2 className="font-display text-3xl md:text-5xl leading-none text-center mb-5">
            {guideTitle}
          </h2>
          <p className="text-ink-700 text-base md:text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {guideIntro}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={i}
                  className="bg-paper-hi border border-ink-300 rounded-lg p-6 md:p-8 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-gold-500 text-[#0B0B0C] font-mono text-sm font-bold shrink-0">
                      {i + 1}
                    </span>
                    <StepIcon className="text-gold-500 shrink-0" size={22} />
                    <h3 className="font-display text-xl leading-tight">{step.title}</h3>
                  </div>
                  {step.intro && <p className="text-sm text-ink-700 mb-4 leading-relaxed">{step.intro}</p>}
                  {step.items && (
                    <ul className="space-y-2.5 text-sm text-ink-700">
                      {step.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.extra}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Key message */}
      <Container wide>
        <div className="max-w-5xl mx-auto bg-paper-hi border-l-2 border-gold-500 rounded-r-lg p-5 mb-12">
          <p className="text-sm md:text-base text-ink-800 leading-relaxed">{keyMessage}</p>
        </div>
      </Container>

      {/* Calculator */}
      <Container wide className="pb-12">{children}</Container>

      {/* FAQ accordions */}
      <Container wide className="pb-20">
        <Accordion items={accordions} className="max-w-4xl mx-auto" />
      </Container>
    </div>
  );
}
