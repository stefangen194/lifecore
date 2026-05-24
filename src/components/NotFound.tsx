import React from 'react';
import { Section, Container, Eyebrow, Button } from './ui';

const NotFound: React.FC = () => {
  return (
    <div className="bg-paper">
      <Section tone="paper-lo" className="py-24 md:py-32 text-center">
        <Container className="max-w-2xl">
          <Eyebrow tone="gold" dot className="mb-6 justify-center">Eroare 404</Eyebrow>
          <h1 className="font-display text-6xl md:text-8xl leading-none mb-6">
            Pagină <span className="italic text-gold-700">negăsită</span>.
          </h1>
          <p className="text-lg text-ink-600 mb-10 max-w-xl mx-auto leading-relaxed">
            Adresa accesată nu există sau a fost mutată. Verifică linkul sau întoarce-te
            la pagina principală.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="gold" size="lg" href="/">Înapoi acasă</Button>
            <Button variant="ghost" size="lg" href="/contact">Contactează-ne</Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default NotFound;
