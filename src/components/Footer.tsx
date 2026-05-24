import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import CookiesModal from './CookiesModal';
import { Button, LCMark, Eyebrow } from './ui';

const columns = [
  {
    title: 'Platformă',
    links: [
      { label: 'Concepte', to: '/concepte' },
      { label: 'Piramida Bogăției', to: '/maslow' },
      { label: 'Calculator pensie', to: '/calculator-pensie' },
      { label: 'Buget', to: '/buget' },
    ],
  },
  {
    title: 'Companie',
    links: [
      { label: 'Cine suntem', to: '/cine-suntem' },
      { label: 'Echipa', to: '/echipa' },
      { label: 'The Lifestyle', to: '/out-of-office' },
      { label: 'Carieră', to: '/cariera' },
    ],
  },
];

const Footer: React.FC = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);

  const linkClass = 'text-sm text-ink-300 hover:text-gold-500 transition-colors text-left';

  return (
    <footer className="bg-ink-900 text-paper pt-20 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div>
            <LCMark size={32} className="text-paper mb-5" />
            <p className="font-display italic text-xl max-w-[360px] leading-snug">
              „Nu e despre bani. E despre <span className="text-gold-500">libertate</span>.”
            </p>
            <p className="text-sm text-ink-300 mt-4 max-w-[360px]">
              Consultanță financiară dedicată oamenilor care își doresc mai mult de la viață.
            </p>
            <Button variant="gold" size="sm" to="/contact" className="mt-6">
              Programează o întâlnire
            </Button>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <Eyebrow className="mb-4">{col.title}</Eyebrow>
              <div className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <Link key={l.to} to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Legal */}
          <div>
            <Eyebrow className="mb-4">Legal</Eyebrow>
            <div className="flex flex-col gap-2.5 items-start">
              <button onClick={() => setShowTermsModal(true)} className={linkClass}>
                Termeni și Condiții
              </button>
              <button onClick={() => setShowPrivacyModal(true)} className={linkClass}>
                Confidențialitate
              </button>
              <button onClick={() => setShowCookiesModal(true)} className={linkClass}>
                Cookie-uri
              </button>
              <a href="https://anpc.ro" target="_blank" rel="noopener noreferrer" className={linkClass}>
                ANPC
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="font-mono text-xs text-ink-500">© 2026 LIFECORE · BUCUREȘTI, RO</div>
          <div className="font-mono text-xs text-ink-500">CALM · CLAR · CONSISTENT</div>
        </div>
      </div>

      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
      <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      <CookiesModal isOpen={showCookiesModal} onClose={() => setShowCookiesModal(false)} />
    </footer>
  );
};

export default Footer;
