import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { hasAccepted } from '../lib/consent';
import { loadCalendly } from '../lib/thirdParty';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = 'https://calendly.com/cariera-lifecore/30min?text_color=c5a059&primary_color=0a192f';

const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose }) => {
  const consentGiven = hasAccepted();

  useEffect(() => {
    // Calendly is a non-essential third party — only load it once cookies are accepted.
    if (!isOpen || !consentGiven) return;

    const calendly = (window as unknown as {
      Calendly?: { initInlineWidget: (opts: { url: string; parentElement: Element | null }) => void };
    }).Calendly;

    if (calendly) {
      // Script already loaded — (re)initialize into the freshly mounted widget element.
      calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    } else {
      // First load — widget.js auto-initializes the visible .calendly-inline-widget element.
      loadCalendly();
    }
  }, [isOpen, consentGiven]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-paper-hi border border-ink-300 rounded-2xl shadow-lg sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="flex items-start justify-between px-6 pt-6 pb-3">
            <h3 className="font-display text-2xl text-ink-900">Programează o întâlnire</h3>
            <button onClick={onClose} className="text-ink-500 hover:text-ink-900 transition-colors" aria-label="Închide">
              <X size={20} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 px-6 pb-6">
            <div className="flex flex-col justify-center space-y-3">
              <p className="text-ink-700 leading-relaxed text-sm">
                Descoperă cum îți putem transforma obiectivele financiare în realitate. Programează o
                consultație personalizată cu unul dintre experții noștri.
              </p>
              <p className="text-ink-700 leading-relaxed text-sm">În cadrul întâlnirii vei primi:</p>
              <ul className="space-y-2.5 text-ink-700 text-sm">
                {[
                  'Analiză personalizată a situației tale financiare',
                  'Strategii adaptate obiectivelor tale',
                  'Răspunsuri la toate întrebările tale',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {consentGiven ? (
              <div
                className="calendly-inline-widget rounded-lg overflow-hidden"
                data-url="https://calendly.com/cariera-lifecore/30min?text_color=c5a059&primary_color=0a192f"
                style={{ minWidth: '320px', height: '700px' }}
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center gap-4 rounded-lg border border-ink-300 bg-paper p-6" style={{ minHeight: '320px' }}>
                <p className="text-ink-700 text-sm leading-relaxed">
                  Pentru a programa o întâlnire direct aici, acceptă cookie-urile (calendarul
                  Calendly este un serviciu terț). Alternativ, ne poți scrie pe email.
                </p>
                <a
                  href="mailto:cariera.lifecore@outlook.com"
                  className="px-5 py-2 text-sm bg-gold-500 hover:bg-gold-400 text-[#0B0B0C] font-medium rounded-full transition-colors"
                >
                  Trimite-ne un email
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default MeetingModal;
