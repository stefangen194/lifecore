import React, { useState } from 'react';

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
  const [amortizationSchedule, setAmortizationSchedule] = useState<Array<{
    month: number;
    soldInitial: number;
    principal: number;
    dobanda: number;
    totalRata: number;
  }>>([]);

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
      rataLunaraCalculata = principal * (dobandaLunara * factor) / (factor - 1);
    } else {
      // If no interest, just divide principal by number of payments
      rataLunaraCalculata = principal / numarPlati;
    }

    const costTotalCalculat = rataLunaraCalculata * numarPlati;
    const dobandaTotalaCalculata = costTotalCalculat - principal;

    // Generate amortization schedule
    const schedule = [];
    let remainingBalance = principal;
    
    for (let month = 1; month <= numarPlati; month++) {
      const dobandaLunara = remainingBalance * (dobanda / 100 / 12);
      const principalLunar = rataLunaraCalculata - dobandaLunara;
      
      schedule.push({
        month: month,
        soldInitial: Math.round(remainingBalance),
        principal: Math.round(principalLunar),
        dobanda: Math.round(dobandaLunara),
        totalRata: Math.round(rataLunaraCalculata)
      });
      
      remainingBalance -= principalLunar;
      
      // Prevent negative balance due to rounding
      if (remainingBalance < 0) {
        remainingBalance = 0;
      }
    }
    // Update state with results
    setPrincipalCredit(Math.round(principal));
    setRataLunara(Math.round(rataLunaraCalculata));
    setCostTotal(Math.round(costTotalCalculat));
    setDobandaTotala(Math.round(dobandaTotalaCalculata));
    setAmortizationSchedule(schedule);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">Detalii Credit</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valoare Proprietate (RON)
              </label>
              <input
                type="number"
                value={valoareProprietate}
                onChange={(e) => setValoareProprietate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 150000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Avans (%)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="99"
                value={avansPercent}
                onChange={(e) => setAvansPercent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 25"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Valoare Credit (RON)
              </label>
              <input
                type="number"
                value={principalCredit}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 text-sm"
                placeholder="Calculat automat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dobânda Anuală (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={dobandaAnuala}
                onChange={(e) => setDobandaAnuala(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 7.5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Perioada Credit (ani)
              </label>
              <input
                type="number"
                value={perioadaAni}
                onChange={(e) => setPerioadaAni(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 25"
              />
            </div>
            <button
              onClick={calculeazaRata}
              className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
            >
              Calculează Rata
            </button>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Rezultat</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm md:text-base">Principal Credit:</span>
              <span className="font-medium text-sm md:text-base">{principalCredit.toLocaleString()} RON</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm md:text-base">Dobânda Totală:</span>
              <span className="font-medium text-sm md:text-base">{dobandaTotala.toLocaleString()} RON</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm md:text-base">Cost Total:</span>
              <span className="font-medium text-sm md:text-base">{costTotal.toLocaleString()} RON</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 text-sm md:text-base">Rata Lunară:</span>
              <span className="font-medium text-sm md:text-base">{rataLunara.toLocaleString()} RON</span>
            </div>
          </div>

          {/* Amortization Schedule Table */}
          {amortizationSchedule.length > 0 && (
            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Plan de Rambursare</h3>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="max-h-96 overflow-y-auto overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 sticky top-0">
                      <tr>
                        <th className="px-1 md:px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Luna
                        </th>
                        <th className="px-1 md:px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Sold Inițial
                        </th>
                        <th className="px-1 md:px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Principal
                        </th>
                        <th className="px-1 md:px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Dobândă
                        </th>
                        <th className="px-1 md:px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total Rată
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {amortizationSchedule.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs text-gray-900">
                            {row.month}
                          </td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs text-gray-900">
                            {row.soldInitial.toLocaleString()} RON
                          </td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs text-gray-900">
                            {row.principal.toLocaleString()} RON
                          </td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs text-gray-900">
                            {row.dobanda.toLocaleString()} RON
                          </td>
                          <td className="px-1 md:px-2 py-2 whitespace-nowrap text-xs text-gray-900">
                            {row.totalRata.toLocaleString()} RON
                          </td>
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