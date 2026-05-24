import { useState } from 'react';
import { InputField, SelectField, Button } from '../ui';

const InflatieDepreciereCalc: React.FC = () => {
  const [currency, setCurrency] = useState('RON');
  const [valoare, setValoare] = useState('');
  const [anulInitial, setAnulInitial] = useState('');
  const [anulFinal, setAnulFinal] = useState('');

  // Results state
  const [valoareDepreciata, setValoareDepreciata] = useState(0);
  const [procentDepreciere, setProcentDepreciere] = useState(0);
  const [costValoareActuala, setCostValoareActuala] = useState(0);
  const [rataCresterInflatie, setRataCresterInflatie] = useState(0);
  const [medieDepreciereAnuala, setMedieDepreciereAnuala] = useState(0);
  const [medieInflatieAnuala, setMedieInflatieAnuala] = useState(0);
  const [medieDepreciereAnualaSuma, setMedieDepreciereAnualaSuma] = useState(0);
  const [medieInflatieAnualaSuma, setMedieInflatieAnualaSuma] = useState(0);

  // Historical inflation data for Romania (RON)
  const inflationDataRON = {
    1990: 5.1, 1991: 170.2, 1992: 210.4, 1993: 256.1, 1994: 136.7, 1995: 32.3, 1996: 38.8,
    1997: 154.8, 1998: 59.1, 1999: 45.8, 2000: 45.7, 2001: 34.5, 2002: 22.5, 2003: 15.3,
    2004: 11.9, 2005: 9.0, 2006: 6.6, 2007: 4.8, 2008: 7.9, 2009: 5.6, 2010: 6.1, 2011: 5.8,
    2012: 3.3, 2013: 4.0, 2014: 1.1, 2015: -0.6, 2016: -1.5, 2017: 1.3, 2018: 4.6, 2019: 3.8,
    2020: 2.6, 2021: 5.1, 2022: 13.8, 2023: 10.4, 2024: 5.6, 2025: 7.8,
  };

  // Historical inflation data for Europe (EUR)
  const inflationDataEUR = {
    1999: 1.2, 2000: 2.2, 2001: 2.4, 2002: 2.3, 2003: 2.1, 2004: 2.2, 2005: 2.5, 2006: 2.2,
    2007: 2.2, 2008: 3.3, 2009: 0.3, 2010: 1.6, 2011: 2.7, 2012: 2.5, 2013: 1.4, 2014: 0.4,
    2015: 0.0, 2016: 0.3, 2017: 1.7, 2018: 1.9, 2019: 1.5, 2020: 0.7, 2021: 2.9, 2022: 9.2,
    2023: 6.3, 2024: 2.2, 2025: 2.0,
  };

  const getCurrentInflationData = () => (currency === 'RON' ? inflationDataRON : inflationDataEUR);

  const calculeazaImpactul = () => {
    const suma = parseFloat(valoare) || 0;
    const anInitial = parseInt(anulInitial) || 0;
    const anFinal = parseInt(anulFinal) || 0;

    if (suma <= 0 || anInitial <= 0 || anFinal <= 0) {
      alert('Vă rugăm să introduceți valori valide pentru toate câmpurile');
      return;
    }

    if (anFinal < anInitial) {
      alert('Anul Final nu poate fi mai mic decât Anul Inițial');
      return;
    }

    const inflationData = getCurrentInflationData();

    // Calculate cumulative inflation from initial year to final year
    let cumulativeInflationFromInitialToFinal = 1;
    for (let year = anInitial; year < anFinal; year++) {
      const yearInflation = inflationData[year as keyof typeof inflationData];
      if (yearInflation !== undefined) {
        cumulativeInflationFromInitialToFinal *= 1 + yearInflation / 100;
      }
    }

    const valoareDepreciataCalculata = suma / cumulativeInflationFromInitialToFinal;
    const procentDepreciereCalculata = ((suma - valoareDepreciataCalculata) / suma) * 100;

    const costValoareActualaCalculata = suma * cumulativeInflationFromInitialToFinal;
    const rataCresterInflatieCalculata = (cumulativeInflationFromInitialToFinal - 1) * 100;

    const numarAni = anFinal - anInitial;
    const medieDepreciereAnualaCalculata = numarAni > 0 ? procentDepreciereCalculata / numarAni : 0;
    const medieInflatieAnualaCalculata = numarAni > 0 ? rataCresterInflatieCalculata / numarAni : 0;

    const medieDepreciereAnualaSumaCalculata = numarAni > 0 ? (suma - valoareDepreciataCalculata) / numarAni : 0;
    const medieInflatieAnualaSumaCalculata = numarAni > 0 ? (costValoareActualaCalculata - suma) / numarAni : 0;

    setValoareDepreciata(Math.round(valoareDepreciataCalculata));
    setProcentDepreciere(Math.round(procentDepreciereCalculata * 100) / 100);
    setCostValoareActuala(Math.round(costValoareActualaCalculata));
    setRataCresterInflatie(Math.round(rataCresterInflatieCalculata * 100) / 100);
    setMedieDepreciereAnuala(Math.round(medieDepreciereAnualaCalculata * 100) / 100);
    setMedieInflatieAnuala(Math.round(medieInflatieAnualaCalculata * 100) / 100);
    setMedieDepreciereAnualaSuma(Math.round(medieDepreciereAnualaSumaCalculata));
    setMedieInflatieAnualaSuma(Math.round(medieInflatieAnualaSumaCalculata));
  };

  const getYearOptions = () => {
    const inflationData = getCurrentInflationData();
    const sorted = Object.entries(inflationData).sort(([a], [b]) => parseInt(a) - parseInt(b));
    return [
      { value: '', label: 'Selectează anul' },
      ...sorted.map(([year, inflation]) => ({
        value: year,
        label: `${year} (${inflation > 0 ? '+' : ''}${inflation}%)`,
      })),
    ];
  };

  return (
    <div className="bg-paper-hi border border-ink-300 p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-6 md:mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Parameters */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-4 md:mb-6">Parametri Inflație</h2>
          <div className="space-y-4">
            <SelectField
              label="Monedă"
              hint="Moneda și piața pentru care folosim datele istorice de inflație: România (RON) sau zona euro (EUR)."
              value={currency}
              onChange={(v) => {
                setCurrency(v);
                setAnulInitial('');
                setAnulFinal('');
              }}
              options={[
                { value: 'RON', label: 'RON' },
                { value: 'EUR', label: 'EUR' },
              ]}
            />
            <InputField
              label={`Valoare (${currency})`}
              hint="Suma de bani pe care vrei să o analizezi."
              type="number"
              value={valoare}
              onChange={setValoare}
              placeholder="Ex: 50000"
            />
            <SelectField
              label="Anul Inițial"
              hint="Anul de referință de la care pornește calculul."
              value={anulInitial}
              onChange={setAnulInitial}
              options={getYearOptions()}
            />
            <SelectField
              label="Anul Final"
              hint="Anul până la care vrei să vezi efectul inflației asupra sumei."
              value={anulFinal}
              onChange={setAnulFinal}
              options={getYearOptions()}
            />
            <Button variant="gold" onClick={calculeazaImpactul} className="w-full justify-center">
              Calculează Impactul
            </Button>
          </div>
        </div>

        {/* Depreciation */}
        <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg flex flex-col">
          <h3 className="font-display text-lg md:text-xl text-ink-900 mb-3 md:mb-4">Calcul Depreciere Anul Inițial–Anul Final</h3>
          <div className="space-y-2 md:space-y-3 text-sm md:text-base">
            <div className="flex justify-between gap-2">
              <span className="text-ink-600">Valoare în Anul Final:</span>
              <span className="font-mono text-right text-ink-900">{valoareDepreciata.toLocaleString()} {currency}</span>
            </div>
            <p className="text-xs text-ink-500 mb-2 md:mb-3">Cât valorează suma din Anul Inițial în Anul Final</p>
            <div className="border-t border-ink-300 pt-2 md:pt-3 flex justify-between gap-2">
              <span className="text-ink-900 font-semibold">Depreciere:</span>
              <span className="font-mono font-bold text-clay">{procentDepreciere}%</span>
            </div>
            <p className="text-xs text-ink-500">Procentul de depreciere de la Anul Inițial la Anul Final</p>
          </div>

          <div className="mt-4 md:mt-6">
            <h4 className="font-display text-base md:text-lg text-ink-900 mb-2 md:mb-3">Medii Anuale Depreciere</h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Medie Depreciere Anuală:</span>
                <span className="font-mono text-clay">{medieDepreciereAnuala}%</span>
              </div>
              <p className="text-xs text-ink-500 mb-2 md:mb-3">Media anuală de depreciere de la Anul Inițial la Anul Final</p>
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Medie Depreciere Anuală (Sumă):</span>
                <span className="font-mono text-clay text-right">{medieDepreciereAnualaSuma.toLocaleString()} {currency}</span>
              </div>
              <p className="text-xs text-ink-500">Media anuală în bani a deprecierii de la Anul Inițial la Anul Final</p>
            </div>
          </div>
        </div>

        {/* Inflation */}
        <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg flex flex-col">
          <h3 className="font-display text-lg md:text-xl text-ink-900 mb-3 md:mb-4">Calcul Inflație Anul Inițial–Anul Final</h3>
          <div className="space-y-2 md:space-y-3 text-sm md:text-base">
            <div className="flex justify-between gap-2">
              <span className="text-ink-600">Cost Valoare Actuală:</span>
              <span className="font-mono text-right text-ink-900">{costValoareActuala.toLocaleString()} {currency}</span>
            </div>
            <p className="text-xs text-ink-500 mb-2 md:mb-3">Cât trebuie să ai în Anul Final pentru a egala suma din Anul Inițial</p>
            <div className="border-t border-ink-300 pt-2 md:pt-3 flex justify-between gap-2">
              <span className="text-ink-900 font-semibold">Rata Creștere Inflație:</span>
              <span className="font-mono font-bold text-clay">{rataCresterInflatie}%</span>
            </div>
            <p className="text-xs text-ink-500">Rata de creștere a inflației de la Anul Inițial la Anul Final</p>
          </div>

          <div className="mt-4 md:mt-6">
            <h4 className="font-display text-base md:text-lg text-ink-900 mb-2 md:mb-3">Medii Anuale Inflație</h4>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Medie Inflație Anuală:</span>
                <span className="font-mono text-clay">{medieInflatieAnuala}%</span>
              </div>
              <p className="text-xs text-ink-500 mb-2 md:mb-3">Media anuală de inflație de la Anul Inițial la Anul Final</p>
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Medie Inflație Anuală (Sumă):</span>
                <span className="font-mono text-clay text-right">{medieInflatieAnualaSuma.toLocaleString()} {currency}</span>
              </div>
              <p className="text-xs text-ink-500">Media anuală în bani a inflației de la Anul Inițial la Anul Final</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InflatieDepreciereCalc;
