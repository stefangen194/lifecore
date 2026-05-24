import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-paper-hi border border-ink-300 rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-paper-lo border-b border-ink-200 p-6 flex justify-between items-center">
          <h2 className="font-display text-2xl text-ink-900">Termeni și Condiții</h2>
          <button
            onClick={onClose}
            className="text-ink-500 hover:text-ink-900 transition-colors"
            aria-label="Închide"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-1">
          <div className="prose prose-sm max-w-none">
            <p className="text-ink-600 mb-6">
              <strong>Ultima actualizare:</strong> Martie 2026
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">1. Acceptarea Termenilor</h3>
              <p className="text-ink-700 mb-3">
                Prin accesarea și utilizarea site-ului web al LifeCore și a serviciilor noastre,
                confirmați că ați citit, înțeles și sunteți de acord să respectați acești Termeni și Condiții.
                Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciile noastre.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">2. Servicii Oferite</h3>
              <p className="text-ink-700 mb-3">
                LifeCore oferă servicii de consultanță financiară personalizată, incluzând dar
                fără a se limita la:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li>Planificare financiară personală și familială</li>
                <li>Consultanță pentru investiții și economisire</li>
                <li>Asigurări de sănătate și protecție</li>
                <li>Planificare pentru pensionare</li>
                <li>Consultanță pentru achiziții pe credit</li>
              </ul>
              <p className="text-ink-700 mb-3">
                Serviciile noastre sunt oferite în conformitate cu legislația română în vigoare și reglementările
                Autorității de Supraveghere Financiară (ASF).
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">3. Confidențialitate și Protecția Datelor</h3>
              <p className="text-ink-700 mb-3">
                Ne angajăm să protejăm confidențialitatea informațiilor dumneavoastră personale și financiare
                în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română
                aplicabilă.
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li>Datele personale sunt colectate doar cu consimțământul dumneavoastră explicit</li>
                <li>Informațiile sunt utilizate exclusiv pentru furnizarea serviciilor solicitate</li>
                <li>Nu vom partaja datele dumneavoastră cu terțe părți fără acordul dumneavoastră</li>
                <li>Aveți dreptul de a accesa, rectifica sau șterge datele personale</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">4. Obligațiile Clientului</h3>
              <p className="text-ink-700 mb-3">
                Prin utilizarea serviciilor noastre, clientul se angajează să:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li>Furnizeze informații corecte, complete și actualizate</li>
                <li>Respecte termenele și condițiile convenite pentru întâlniri și consultații</li>
                <li>Notifice în timp util orice modificări relevante ale situației financiare</li>
                <li>Nu utilizeze informațiile primite în scopuri ilegale sau neautorizate</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">5. Limitarea Răspunderii</h3>
              <p className="text-ink-700 mb-3">
                Consultanța oferită de LifeCore reprezintă recomandări bazate pe analiza
                situației dumneavoastră personale și a condițiilor de piață la momentul consultării.
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li>Nu garantăm rezultate specifice ale investițiilor sau produselor recomandate</li>
                <li>Deciziile financiare finale aparțin clientului</li>
                <li>Nu suntem răspunzători pentru pierderi rezultate din schimbări de piață imprevizibile</li>
                <li>Recomandările sunt valabile la data emiterii și pot necesita actualizări</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">6. Proprietate Intelectuală</h3>
              <p className="text-ink-700 mb-3">
                Tot conținutul prezent pe acest site web, inclusiv texte, grafice, logo-uri, imagini,
                calculatoare financiare și software, este proprietatea LifeCore și este
                protejat de legile privind drepturile de autor și proprietatea intelectuală.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">7. Modificări ale Termenilor</h3>
              <p className="text-ink-700 mb-3">
                Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment.
                Modificările vor fi publicate pe site-ul web, iar continuarea utilizării serviciilor
                după publicarea modificărilor constituie acceptarea noilor termeni.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">8. Rezilierea</h3>
              <p className="text-ink-700 mb-3">
                Ambele părți pot rezilia relația contractuală cu o notificare prealabilă de 30 de zile.
                În cazul încălcării grave a termenilor, relația poate fi reziliată imediat.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">9. Legea Aplicabilă și Jurisdicție</h3>
              <p className="text-ink-700 mb-3">
                Acești Termeni și Condiții sunt guvernați de legile României. Orice dispută va fi
                soluționată pe cale amiabilă sau, în lipsa unui acord, de către instanțele competente
                din România.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">10. Contact</h3>
              <p className="text-ink-700 mb-3">
                Pentru întrebări sau clarificări referitoare la acești Termeni și Condiții,
                ne puteți contacta la:
              </p>
              <p className="text-ink-700">
                <strong>Email:</strong> cariera.lifecore@outlook.com
              </p>
            </section>
          </div>
        </div>

        <div className="bg-paper-lo p-6 border-t border-ink-200">
          <button
            onClick={onClose}
            className="w-full bg-gold-500 text-[#0B0B0C] py-3 px-6 rounded-full font-medium hover:bg-gold-400 transition-colors"
          >
            Am înțeles și accept
          </button>
        </div>
      </div>
    </div>
  );
}
