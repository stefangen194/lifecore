import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CALENDLY_URL = 'https://calendly.com/cariera-lifecore/30min?text_color=c5a059&primary_color=0a192f';

const MeetingModal: React.FC<MeetingModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const existingScript = document.getElementById('calendly-script');
    if (existingScript) {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: document.querySelector('.calendly-inline-widget'),
        });
      }
      return;
    }

    const script = document.createElement('script');
    script.id = 'calendly-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-white">
            <div className="flex items-start justify-between px-5 pt-5 pb-3">
              <h3 className="text-xl font-bold text-gray-900">
                Programează o întâlnire
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 px-5 pb-5">
              <div className="flex flex-col justify-center space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  Descoperă cum îți putem transforma obiectivele financiare în realitate.
                  Programează o consultație personalizată cu unul dintre experții noștri.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  În cadrul întâlnirii vei primi:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Analiză personalizată a situației tale financiare</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Strategii adaptate obiectivelor tale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Răspunsuri la toate întrebările tale</span>
                  </li>
                </ul>
              </div>

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/cariera-lifecore/30min?text_color=c5a059&primary_color=0a192f"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingModal;
