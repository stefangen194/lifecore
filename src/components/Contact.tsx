import { useState } from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';
import LocalSEOHead from './seo/LocalSEOHead';
import { LOCAL_SEO_CONFIGS } from '../utils/localSEO';
import MeetingModal from './MeetingModal';
import { Section, Container, Eyebrow, Button } from './ui';

const program = [
  { day: 'Luni', hours: '10:00 - 20:00' },
  { day: 'Marți', hours: '10:00 - 20:00' },
  { day: 'Miercuri', hours: '10:00 - 20:00' },
  { day: 'Joi', hours: '10:00 - 20:00' },
  { day: 'Vineri', hours: '10:00 - 20:00' },
  { day: 'Sâmbătă', hours: '10:00 - 17:00' },
  { day: 'Duminică', hours: 'Închis', closed: true },
];

const benefits = [
  { t: 'Fără cost', d: 'Prima consultație este întotdeauna gratuită.' },
  { t: 'Fără presiune', d: 'Nu vinzi nimic aici — doar înțelegi.' },
  { t: 'Confidențial', d: 'Datele tale rămân între noi. GDPR compliant.' },
];

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LocalSEOHead {...LOCAL_SEO_CONFIGS.contact} canonicalUrl="/contact" />
      <div className="bg-paper">
        {/* Hero + booking */}
        <Section tone="paper-lo" className="pt-12 pb-16 md:pt-16 md:pb-20">
          <Container wide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <Eyebrow dot className="mb-6">Rezervare sesiune</Eyebrow>
                <h1 className="font-display text-4xl md:text-6xl leading-[0.95] mb-8">
                  30 de minute<br />
                  care îți pot schimba<br />
                  <span className="italic text-gold-700">următorii 30 de ani</span>.
                </h1>
                <p className="text-lg text-ink-700 leading-relaxed mb-10 max-w-[460px]">
                  Prima sesiune e gratuită, online sau la birou. Fără presiune de vânzare, fără obligații.
                  Ne spui unde ești, îți spunem ce e posibil.
                </p>
                <div className="flex flex-col gap-5">
                  {benefits.map((b, i) => (
                    <div key={b.t} className={`flex gap-5 pb-5 ${i < 2 ? 'border-b border-ink-200' : ''}`}>
                      <span className="font-mono text-xs text-gold-700 w-7 shrink-0 pt-1">0{i + 1}</span>
                      <div>
                        <div className="font-display text-xl leading-none mb-1">{b.t}</div>
                        <div className="text-sm text-ink-600">{b.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Booking card */}
              <div className="bg-paper-hi border border-ink-300 rounded-xl p-8 lg:sticky lg:top-24 self-start">
                <Eyebrow tone="gold" className="mb-4">Programează o sesiune</Eyebrow>
                <h2 className="font-display text-3xl leading-tight mb-4">Hai să vorbim.</h2>
                <p className="text-sm text-ink-600 mb-8">
                  Alege un interval care îți convine și un consultant LifeCore te contactează.
                </p>
                <div className="flex flex-col gap-3">
                  <Button variant="gold" onClick={() => setIsModalOpen(true)} className="justify-center">
                    Programează o întâlnire
                  </Button>
                  <Button variant="ghost" href="mailto:cariera.lifecore@outlook.com" className="justify-center">
                    Trimite-ne un mesaj
                  </Button>
                </div>
                <div className="mt-8 pt-6 border-t border-ink-200 flex items-start gap-3">
                  <Mail className="text-gold-500 mt-0.5 shrink-0" size={18} />
                  <div>
                    <div className="eyebrow mb-1">Email</div>
                    <a href="mailto:cariera.lifecore@outlook.com" className="text-sm text-ink-800 hover:text-gold-500 transition-colors">
                      cariera.lifecore@outlook.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Program + location */}
        <Section tone="paper">
          <Container wide>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-paper-hi border border-ink-300 rounded-lg p-8">
                <h2 className="font-display text-2xl mb-6 flex items-center">
                  <Clock className="mr-3 text-gold-500" size={22} />
                  Program
                </h2>
                <div className="space-y-3">
                  {program.map((p) => (
                    <div key={p.day} className="flex justify-between items-center text-sm md:text-base">
                      <span className="text-ink-600">{p.day}</span>
                      <span className={p.closed ? 'text-clay font-medium' : 'font-mono text-ink-900'}>{p.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-paper-hi border border-ink-300 rounded-lg p-8 flex flex-col">
                <h2 className="font-display text-2xl mb-6 flex items-center">
                  <MapPin className="mr-3 text-gold-500" size={22} />
                  Locație
                </h2>
                <div className="w-full flex-1 min-h-[300px] border border-ink-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.4134793133057!2d26.087524276634554!3d44.46569669950312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2038a3f886e5d%3A0xbd20a396277497d5!2sOVB%20Bucuresti%20-%20Birou%20Consultanta%20Primaverii!5e0!3m2!1sen!2sro!4v1755586249138!5m2!1sen!2sro"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    title="OVB București - Birou Consultanță Primăverii"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      <MeetingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Contact;
