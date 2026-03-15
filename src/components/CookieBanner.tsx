import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import CookiesModal from './CookiesModal';

const STORAGE_KEY = 'lifecore_cookies_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6">
        <div className="max-w-5xl mx-auto bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl p-5 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="bg-[#C5A059]/20 rounded-full p-2 shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Utilizăm cookie-uri</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Folosim cookie-uri pentru a îmbunătăți experiența de navigare și a analiza traficul
                  pe site. Prin continuarea navigării, acceptați utilizarea cookie-urilor conform{' '}
                  <button
                    onClick={() => setShowModal(true)}
                    className="text-[#C5A059] hover:text-[#d4b477] underline underline-offset-2 transition-colors"
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
                className="px-4 py-2 text-sm text-gray-300 hover:text-white border border-gray-600 hover:border-gray-400 rounded-lg transition-all"
              >
                Refuz
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm bg-[#C5A059] hover:bg-[#d4b477] text-gray-900 font-semibold rounded-lg transition-colors"
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
