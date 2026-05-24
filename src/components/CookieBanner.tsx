import { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import CookiesModal from './CookiesModal';
import { getConsent, setConsent } from '../lib/consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // No valid, current-version consent on record → show the banner.
    if (!getConsent()) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsent('accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent('declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6">
        <div className="max-w-5xl mx-auto bg-paper-hi border border-ink-300 rounded-2xl shadow-lg p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="bg-gold-500/15 border border-gold-500/40 rounded-full p-2 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-gold-500" />
              </div>
              <div>
                <p className="text-ink-900 font-semibold text-sm mb-1">Utilizăm cookie-uri</p>
                <p className="text-ink-600 text-sm leading-relaxed">
                  Folosim cookie-uri pentru a îmbunătăți experiența de navigare și a analiza traficul
                  pe site. Prin continuarea navigării, acceptați utilizarea cookie-urilor conform{' '}
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-gold-500 hover:text-gold-400 underline underline-offset-2 transition-colors"
                  >
                    Politicii noastre de Cookie-uri
                  </button>
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0 md:ml-4">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm text-ink-700 hover:text-ink-900 border border-ink-300 hover:border-ink-500 rounded-full transition-all"
              >
                Refuz
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm bg-gold-500 hover:bg-gold-400 text-[#0B0B0C] font-medium rounded-full transition-colors"
              >
                Accept toate
              </button>
            </div>
          </div>
        </div>
      </div>

      <CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
