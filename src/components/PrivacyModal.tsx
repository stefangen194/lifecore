import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-paper-hi border border-ink-300 rounded-2xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-paper-lo border-b border-ink-200 p-6 flex justify-between items-center">
          <h2 className="font-display text-2xl text-ink-900">Politica de Confidențialitate</h2>
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
              <h3 className="text-xl font-bold text-ink-900 mb-3">1. Introducere</h3>
              <p className="text-ink-700 mb-3">
                LifeCore este angajată să protejeze confidențialitatea datelor dumneavoastră personale.
                Această Politică de Confidențialitate explică ce informații colectăm, cum le utilizăm,
                și ce drepturi aveți în legătură cu datele dumneavoastră personale.
              </p>
              <p className="text-ink-700 mb-3">
                Respectăm în totalitate prevederile Regulamentului General privind Protecția Datelor (GDPR)
                și legislația română aplicabilă în domeniul protecției datelor cu caracter personal.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">2. Operatorul de Date</h3>
              <p className="text-ink-700 mb-3">
                <strong>LifeCore</strong> este operatorul de date cu caracter personal colectate prin
                acest site web și în cadrul serviciilor oferite.
              </p>
              <p className="text-ink-700">
                <strong>Date de contact:</strong><br />
                Email: cariera.lifecore@outlook.com
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">3. Datele Colectate</h3>
              <p className="text-ink-700 mb-3">
                Colectăm următoarele categorii de date personale:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li><strong>Date de identificare:</strong> nume, prenume, CNP (când este necesar)</li>
                <li><strong>Date de contact:</strong> adresă de email, adresă poștală</li>
                <li><strong>Date financiare:</strong> informații despre venituri, cheltuieli, active, pasive</li>
                <li><strong>Date profesionale:</strong> ocupație, experiență profesională, loc de muncă</li>
                <li><strong>Date despre obiective:</strong> planuri financiare, obiective de viață</li>
                <li><strong>Date tehnice:</strong> adresă IP, tip de browser, comportament pe site</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">4. Scopul Prelucrării Datelor</h3>
              <p className="text-ink-700 mb-3">
                Utilizăm datele dumneavoastră personale pentru următoarele scopuri:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li>Furnizarea serviciilor de consultanță financiară personalizată</li>
                <li>Crearea și menținerea relației contractuale</li>
                <li>Analiza situației financiare și elaborarea de recomandări</li>
                <li>Comunicarea cu clientul și trimiterea de informații relevante</li>
                <li>Îndeplinirea obligațiilor legale și de conformitate</li>
                <li>Îmbunătățirea serviciilor oferite</li>
                <li>Marketing direct (doar cu consimțământul explicit)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">5. Baza Legală a Prelucrării</h3>
              <p className="text-ink-700 mb-3">
                Prelucrăm datele dumneavoastră personale pe baza următoarelor temeiuri legale:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li><strong>Consimțământul:</strong> pentru activități de marketing și colectarea anumitor categorii de date</li>
                <li><strong>Executarea contractului:</strong> pentru furnizarea serviciilor de consultanță</li>
                <li><strong>Obligații legale:</strong> pentru conformitatea cu legislația financiară și fiscală</li>
                <li><strong>Interese legitime:</strong> pentru îmbunătățirea serviciilor și securitatea datelor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">6. Partajarea Datelor</h3>
              <p className="text-ink-700 mb-3">
                Nu vindem datele dumneavoastră personale către terțe părți. Putem partaja datele doar în
                următoarele circumstanțe:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li><strong>Furnizori de servicii:</strong> companii care ne ajută să furnizăm serviciile (ex: hosting, email)</li>
                <li><strong>Instituții financiare:</strong> pentru implementarea recomandărilor cu acordul dumneavoastră</li>
                <li><strong>Autorități:</strong> când este cerut de lege sau pentru protejarea drepturilor noastre</li>
                <li><strong>Consilieri profesioniști:</strong> avocați, contabili, auditori în cadrul îndatoririlor lor profesionale</li>
              </ul>
              <p className="text-ink-700 mb-3">
                Toți partenerii noștri sunt obligați contractual să protejeze confidențialitatea datelor.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">7. Perioada de Stocare</h3>
              <p className="text-ink-700 mb-3">
                Păstrăm datele dumneavoastră personale pe următoarele perioade:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li><strong>Date contractuale:</strong> pe durata relației contractuale plus 5 ani pentru obligații legale</li>
                <li><strong>Date financiare:</strong> conform cerințelor legale de arhivare (minimum 5 ani)</li>
                <li><strong>Date de marketing:</strong> până la retragerea consimțământului sau 3 ani de inactivitate</li>
                <li><strong>Date tehnice:</strong> maximum 2 ani</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">8. Drepturile Dumneavoastră</h3>
              <p className="text-ink-700 mb-3">
                În conformitate cu GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li><strong>Dreptul de acces:</strong> să obțineți confirmarea prelucrării și o copie a datelor</li>
                <li><strong>Dreptul la rectificare:</strong> să corectați datele inexacte sau incomplete</li>
                <li><strong>Dreptul la ștergere:</strong> să solicitați ștergerea datelor în anumite condiții</li>
                <li><strong>Dreptul la restricționare:</strong> să limitați prelucrarea în anumite circumstanțe</li>
                <li><strong>Dreptul la portabilitate:</strong> să primiți datele într-un format structurat</li>
                <li><strong>Dreptul la opoziție:</strong> să vă opuneți prelucrării bazate pe interese legitime</li>
                <li><strong>Dreptul de a retrage consimțământul:</strong> oricând, fără a afecta legalitatea prelucrării anterioare</li>
              </ul>
              <p className="text-ink-700 mb-3">
                Pentru a vă exercita drepturile, contactați-ne la: cariera.lifecore@outlook.com
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">9. Securitatea Datelor</h3>
              <p className="text-ink-700 mb-3">
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li>Criptare SSL/TLS pentru transmiterea datelor</li>
                <li>Acces restricționat la datele personale - doar pentru angajați autorizați</li>
                <li>Sisteme de backup regulat și securizat</li>
                <li>Monitorizare continuă împotriva accesului neautorizat</li>
                <li>Formarea regulată a angajaților privind protecția datelor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">10. Cookie-uri și Tehnologii Similare</h3>
              <p className="text-ink-700 mb-3">
                Site-ul nostru web utilizează cookie-uri pentru:
              </p>
              <ul className="list-disc pl-6 text-ink-700 space-y-2 mb-3">
                <li><strong>Cookie-uri esențiale:</strong> necesare pentru funcționarea site-ului</li>
                <li><strong>Cookie-uri de performanță:</strong> pentru analiza utilizării site-ului</li>
                <li><strong>Cookie-uri funcționale:</strong> pentru personalizarea experienței</li>
              </ul>
              <p className="text-ink-700 mb-3">
                Puteți gestiona preferințele cookie-urilor prin setările browserului dumneavoastră.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">11. Transferuri Internaționale</h3>
              <p className="text-ink-700 mb-3">
                Datele dumneavoastră sunt prelucrate în Spațiul Economic European. În cazul în care
                transferăm date în afara SEE, vom asigura protecție adecvată prin mecanisme aprobate
                (ex: Clauzele Contractuale Standard ale Comisiei Europene).
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">12. Minori</h3>
              <p className="text-ink-700 mb-3">
                Serviciile noastre nu sunt destinate persoanelor sub 16 ani. Nu colectăm în mod
                deliberat date de la minori fără consimțământul părinților sau reprezentanților legali.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">13. Modificări ale Politicii</h3>
              <p className="text-ink-700 mb-3">
                Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate. Modificările
                semnificative vor fi comunicate prin email sau prin notificare pe site. Vă încurajăm
                să verificați periodic această pagină pentru a fi la curent cu actualizările.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">14. Plângeri</h3>
              <p className="text-ink-700 mb-3">
                Dacă considerați că drepturile dumneavoastră au fost încălcate, aveți dreptul să
                depuneți o plângere la:
              </p>
              <p className="text-ink-700 mb-3">
                <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br />
                Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">www.dataprotection.ro</a>
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-bold text-ink-900 mb-3">15. Contact</h3>
              <p className="text-ink-700 mb-3">
                Pentru întrebări sau solicitări legate de protecția datelor, contactați-ne:
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
            Am înțeles
          </button>
        </div>
      </div>
    </div>
  );
}
