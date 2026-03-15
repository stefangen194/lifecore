import React from 'react';
import { X } from 'lucide-react';

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookiesModal({ isOpen, onClose }: CookiesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[200] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Politica de Cookie-uri</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-1">
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Ultima actualizare:</strong> Martie 2026
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">1. Ce sunt cookie-urile?</h3>
              <p className="text-gray-700 mb-3">
                Cookie-urile sunt fișiere text de mici dimensiuni stocate pe dispozitivul dumneavoastră
                (calculator, telefon, tabletă) atunci când vizitați un site web. Acestea permit site-ului
                să rețină acțiunile și preferințele dumneavoastră pe o perioadă de timp.
              </p>
              <p className="text-gray-700">
                Cookie-urile nu conțin viruși și nu pot accesa informații de pe hard disk-ul
                dumneavoastră. Ele sunt utilizate exclusiv pentru a îmbunătăți experiența de navigare.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">2. Ce cookie-uri utilizăm?</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2.1 Cookie-uri strict necesare</h4>
                <p className="text-gray-700 mb-2">
                  Aceste cookie-uri sunt esențiale pentru funcționarea corectă a site-ului și nu pot fi
                  dezactivate. Ele sunt setate ca răspuns la acțiunile dumneavoastră, cum ar fi completarea
                  unui formular sau setarea preferințelor de confidențialitate.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  <p><strong>Exemple:</strong> preferințe cookie, sesiune de utilizator</p>
                  <p><strong>Durată:</strong> sesiune sau până la 1 an</p>
                  <p><strong>Baza legală:</strong> interes legitim (funcționarea site-ului)</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2.2 Cookie-uri de performanță și analiză</h4>
                <p className="text-gray-700 mb-2">
                  Aceste cookie-uri ne permit să numărăm vizitele și sursele de trafic, pentru a putea
                  măsura și îmbunătăți performanța site-ului. Toate informațiile colectate sunt agregate
                  și anonimizate.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  <p><strong>Exemple:</strong> Google Analytics (dacă este utilizat)</p>
                  <p><strong>Durată:</strong> până la 2 ani</p>
                  <p><strong>Baza legală:</strong> consimțământ</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">2.3 Cookie-uri funcționale</h4>
                <p className="text-gray-700 mb-2">
                  Aceste cookie-uri permit site-ului să ofere funcționalitate și personalizare îmbunătățite.
                  Pot fi setate de noi sau de furnizori terți ale căror servicii le utilizăm.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
                  <p><strong>Exemple:</strong> preferințe de limbă, preferințe de afișare</p>
                  <p><strong>Durată:</strong> până la 1 an</p>
                  <p><strong>Baza legală:</strong> consimțământ</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">3. Cum gestionați cookie-urile?</h3>
              <p className="text-gray-700 mb-3">
                Aveți mai multe opțiuni pentru a controla sau limita modul în care noi și partenerii noștri
                folosim cookie-uri:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>
                  <strong>Setările browserului:</strong> Puteți seta browserul să refuze toate sau unele
                  cookie-uri sau să vă alerteze când site-urile setează sau accesează cookie-uri.
                </li>
                <li>
                  <strong>Ștergerea cookie-urilor:</strong> Puteți șterge cookie-urile existente din setările
                  browserului în orice moment.
                </li>
                <li>
                  <strong>Retragerea consimțământului:</strong> Puteți retrage consimțământul pentru
                  cookie-urile non-esențiale prin bannerul de cookie-uri afișat la prima vizită.
                </li>
              </ul>
              <p className="text-gray-700 mb-3">
                Instrucțiuni pentru gestionarea cookie-urilor în principalele browsere:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/ro/kb/blocarea-cookie-urilor" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/ro-ro/windows/ştergerea-şi-gestionarea-cookie-urilor" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">Microsoft Edge</a></li>
                <li><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">Safari</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">4. Cookie-uri terțe</h3>
              <p className="text-gray-700 mb-3">
                Site-ul nostru poate utiliza servicii terțe care pot seta propriile cookie-uri. Nu avem
                control direct asupra acestor cookie-uri. Vă recomandăm să consultați politicile de
                confidențialitate ale acestor servicii pentru informații detaliate.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">5. Baza legală (GDPR)</h3>
              <p className="text-gray-700 mb-3">
                Conform Regulamentului General privind Protecția Datelor (GDPR) și Legii nr. 506/2004
                privind prelucrarea datelor cu caracter personal în sectorul comunicațiilor electronice,
                utilizăm cookie-uri pe baza:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Consimțământului explicit</strong> pentru cookie-urile non-esențiale</li>
                <li><strong>Interesului legitim</strong> pentru cookie-urile strict necesare funcționării site-ului</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">6. Actualizări ale politicii</h3>
              <p className="text-gray-700">
                Ne rezervăm dreptul de a actualiza această Politică de Cookie-uri periodic. Orice modificare
                semnificativă va fi comunicată prin actualizarea datei de la începutul documentului și,
                când este cazul, prin bannerul de consimțământ.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h3>
              <p className="text-gray-700">
                Pentru întrebări sau solicitări legate de utilizarea cookie-urilor, ne puteți contacta la:
                <br />
                <strong>Email:</strong> cariera.lifecore@outlook.com
              </p>
            </section>
          </div>
        </div>

        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full bg-[#C5A059] text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-[#d4b477] transition-colors"
          >
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );
}
