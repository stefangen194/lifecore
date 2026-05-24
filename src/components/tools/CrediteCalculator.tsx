import { useState } from 'react';
import { InputField, Button } from '../ui';

const CrediteCalculator: React.FC = () => {
  const [valoareProprietate, setValoareProprietate] = useState('');
  const [avansPercent, setAvansPercent] = useState('');
  const [dobandaAnuala, setDobandaAnuala] = useState('');
  const [perioadaAni, setPerioadaAni] = useState('');

  // Results state
  const [principalCredit, setPrincipalCredit] = useState(0);
  const [rataLunara, setRataLunara] = useState(0);
  const [costTotal, setCostTotal] = useState(0);
  const [dobandaTotala, setDobandaTotala] = useState(0);
  const [amortizationSchedule, setAmortizationSchedule] = useState<
    Array<{ month: number; soldInitial: number; principal: number; dobanda: number; totalRata: number }>
  >([]);

  const calculeazaRata = () => {
    const valoare = parseFloat(valoareProprietate) || 0;
    const avans = parseFloat(avansPercent) || 0;
    const dobanda = parseFloat(dobandaAnuala) || 0;
    const ani = parseFloat(perioadaAni) || 0;

    if (valoare <= 0 || ani <= 0 || dobanda <= 0) {
      alert('Vă rugăm să introduceți valori valide pentru toate câmpurile');
      return;
    }

    if (avans < 0 || avans >= 100) {
      alert('Avansul trebuie să fie între 0% și 99%');
      return;
    }

    // Calculate loan principal (property value minus down payment)
    const sumaAvans = (valoare * avans) / 100;
    const principal = valoare - sumaAvans;

    // Monthly interest rate
    const dobandaLunara = dobanda / 100 / 12;

    // Total number of payments
    const numarPlati = ani * 12;

    // Monthly payment calculation using the standard loan formula
    // PMT = P * [r(1+r)^n] / [(1+r)^n - 1]
    let rataLunaraCalculata = 0;

    if (dobandaLunara > 0) {
      const factor = Math.pow(1 + dobandaLunara, numarPlati);
      rataLunaraCalculata = (principal * (dobandaLunara * factor)) / (factor - 1);
    } else {
      rataLunaraCalculata = principal / numarPlati;
    }

    const costTotalCalculat = rataLunaraCalculata * numarPlati;
    const dobandaTotalaCalculata = costTotalCalculat - principal;

    // Generate amortization schedule
    const schedule = [];
    let remainingBalance = principal;

    for (let month = 1; month <= numarPlati; month++) {
      const dobandaLunaraCurenta = remainingBalance * (dobanda / 100 / 12);
      const principalLunar = rataLunaraCalculata - dobandaLunaraCurenta;

      schedule.push({
        month: month,
        soldInitial: Math.round(remainingBalance),
        principal: Math.round(principalLunar),
        dobanda: Math.round(dobandaLunaraCurenta),
        totalRata: Math.round(rataLunaraCalculata),
      });

      remainingBalance -= principalLunar;
      if (remainingBalance < 0) remainingBalance = 0;
    }

    setPrincipalCredit(Math.round(principal));
    setRataLunara(Math.round(rataLunaraCalculata));
    setCostTotal(Math.round(costTotalCalculat));
    setDobandaTotala(Math.round(dobandaTotalaCalculata));
    setAmortizationSchedule(schedule);
  };

  const results = [
    { label: 'Principal Credit', value: principalCredit },
    { label: 'Dobânda Totală', value: dobandaTotala },
    { label: 'Cost Total', value: costTotal },
    { label: 'Rata Lunară', value: rataLunara },
  ];

  return (
    <div className="bg-paper-hi border border-ink-300 p-4 md:p-8 rounded-lg shadow-lg max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-4 md:mb-6">Detalii Credit</h2>
          <div className="space-y-4">
            <InputField
              label="Valoare Proprietate (RON)"
              hint="Prețul total al locuinței sau al bunului pe care vrei să-l cumperi."
              type="number"
              value={valoareProprietate}
              onChange={setValoareProprietate}
              placeholder="Ex: 150000"
            />
            <InputField
              label="Avans (%)"
              hint="Procentul din preț pe care îl plătești din banii tăi, la început. Restul devine credit."
              type="number"
              step="0.1"
              min={0}
              max={99}
              value={avansPercent}
              onChange={setAvansPercent}
              placeholder="Ex: 25"
            />
            <InputField
              label="Valoare Credit (RON)"
              hint="Suma efectiv împrumutată de la bancă. Se calculează automat: preț minus avans."
              type="number"
              value={principalCredit}
              readOnly
              placeholder="Calculat automat"
            />
            <InputField
              label="Dobânda Anuală (%)"
              hint="Rata anuală a dobânzii cu care banca îți împrumută banii."
              type="number"
              step="0.1"
              value={dobandaAnuala}
              onChange={setDobandaAnuala}
              placeholder="Ex: 7.5"
            />
            <InputField
              label="Perioada Credit (ani)"
              hint="În câți ani rambursezi creditul. O perioadă mai lungă scade rata, dar crește dobânda totală."
              type="number"
              value={perioadaAni}
              onChange={setPerioadaAni}
              placeholder="Ex: 25"
            />
            <Button variant="gold" onClick={calculeazaRata} className="w-full justify-center">
              Calculează Rata
            </Button>
          </div>
        </div>

        <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg">
          <h3 className="font-display text-xl text-ink-900 mb-4">Rezultat</h3>
          <div className="space-y-3">
            {results.map((r) => (
              <div key={r.label} className="flex justify-between">
                <span className="text-ink-600 text-sm md:text-base">{r.label}:</span>
                <span className="font-mono text-sm md:text-base text-ink-900">{r.value.toLocaleString()} RON</span>
              </div>
            ))}
          </div>

          {/* Amortization Schedule Table */}
          {amortizationSchedule.length > 0 && (
            <div className="mt-6 md:mt-8">
              <h3 className="font-display text-xl text-ink-900 mb-4">Plan de Rambursare</h3>
              <div className="bg-paper-hi border border-ink-300 rounded-lg overflow-hidden">
                <div className="max-h-96 overflow-y-auto overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-paper-lo sticky top-0">
                      <tr>
                        {['Luna', 'Sold Inițial', 'Principal', 'Dobândă', 'Total Rată'].map((h) => (
                          <th key={h} className="px-1 md:px-2 py-2 text-left text-xs font-medium text-ink-500 uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ink-200">
                      {amortizationSchedule.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-paper-hi' : 'bg-paper-lo'}>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs font-mono text-ink-900">{row.month}</td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs font-mono text-ink-700">{row.soldInitial.toLocaleString()} RON</td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs font-mono text-ink-700">{row.principal.toLocaleString()} RON</td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs font-mono text-gold-500">{row.dobanda.toLocaleString()} RON</td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs font-mono text-ink-900">{row.totalRata.toLocaleString()} RON</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrediteCalculator;
