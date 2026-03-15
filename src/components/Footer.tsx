import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';
import CookiesModal from './CookiesModal';

const Footer: React.FC = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCookiesModal, setShowCookiesModal] = useState(false);

  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.png" alt="LifeCore" className="h-12" />
            <span className="text-white font-semibold text-2xl">LifeCore</span>
          </div>
          <p className="text-gray-400 max-w-2xl">
            Consultanță financiară dedicată oamenilor care își doresc mai mult de la viață.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <Link
                to="/cine-suntem"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Cine suntem
              </Link>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Contact
              </Link>
              <Link
                to="/cariera"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Carieră
              </Link>
              <button
                onClick={() => setShowTermsModal(true)}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Termeni și Condiții
              </button>
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Politica de Confidențialitate
              </button>
              <button
                onClick={() => setShowCookiesModal(true)}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Politica de Cookie-uri
              </button>
              <a
                href="https://anpc.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                ANPC
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2026 LifeCore. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
      <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      <CookiesModal isOpen={showCookiesModal} onClose={() => setShowCookiesModal(false)} />
    </footer>
  );
};

export default Footer;