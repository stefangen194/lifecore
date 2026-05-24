import { useState } from 'react';
import { Baby } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { InputField, Button, chartColors, chartTooltipStyle } from '../ui';

const CopilCalculator: React.FC = () => {
  const [varstaActualaCopil, setVarstaActualaCopil] = useState('');
  const [varstaTargetEducatie, setVarstaTargetEducatie] = useState('');
  const [costEstimatEducatie, setCostEstimatEducatie] = useState('');
  const [contributieLunaraCopil, setContributieLunaraCopil] = useState('');
  const [randamentAnualCopil, setRandamentAnualCopil] = useState('');
  const [inflatieEducatie, setInflatieEducatie] = useState('');

  // Results state
  const [costAjustatInflatie, setCostAjustatInflatie] = useState(0);
  const [totalContributii, setTotalContributii] = useState(0);
  const [valoareAcumulata, setValoareAcumulata] = useState(0);
  const [diferentaFinantare, setDiferentaFinantare] = useState(0);
  const [chartData, setChartData] = useState([{ year: 0, contributii: 0, valoareAcumulata: 0, costEducatie: 0 }]);

  const calculeazaPlanulCopil = () => {
    const varstaActualaNum = parseFloat(varstaActualaCopil) || 0;
    const varstaTargetNum = parseFloat(varstaTargetEducatie) || 0;
    const costEstimatNum = parseFloat(costEstimatEducatie) || 0;
    const contributieLunaraNum = parseFloat(contributieLunaraCopil) || 0;
    const randamentNum = (parseFloat(randamentAnualCopil) || 0) / 100;
    const inflatieNum = (parseFloat(inflatieEducatie) || 0) / 100;

    if (varstaActualaNum < 0 || varstaTargetNum <= 0 || varstaActualaNum >= varstaTargetNum) {
      alert('Vă rugăm să introduceți vârste valide');
      return;
    }

    if (costEstimatNum <= 0) {
      alert('Vă rugăm să introduceți un cost estimat valid pentru educație');
      return;
    }

    const aniPanaLaEducatie = varstaTargetNum - varstaActualaNum;

    // Calculate cost adjusted for education inflation
    const costAjustat = costEstimatNum * Math.pow(1 + inflatieNum, aniPanaLaEducatie);

    // Calculate total contributions
    const totalContributiiCalculate = contributieLunaraNum * 12 * aniPanaLaEducatie;

    // Calculate accumulated value with compound interest (annual compounding)
    let valoareAcumulataCalculata = 0;
    if (contributieLunaraNum > 0 && randamentNum > 0) {
      let currentBalance = 0;
      const monthlyContribution = contributieLunaraNum;

      for (let year = 1; year <= aniPanaLaEducatie; year++) {
        currentBalance *= 1 + randamentNum;
        const yearlyContribution = monthlyContribution * 12;
        currentBalance += yearlyContribution;
      }

      valoareAcumulataCalculata = currentBalance;
    } else {
      valoareAcumulataCalculata = totalContributiiCalculate;
    }

    const diferenta = valoareAcumulataCalculata - costAjustat;

    // Generate chart data
    const newChartData = [];
    let cumulativeContributions = 0;
    let cumulativeValue = 0;

    for (let year = 0; year <= aniPanaLaEducatie; year++) {
      if (year > 0) {
        cumulativeValue *= 1 + randamentNum;
        const yearlyContribution = contributieLunaraNum * 12;
        cumulativeValue += yearlyContribution;
        cumulativeContributions += yearlyContribution;
      }

      const costForYear = costEstimatNum * Math.pow(1 + inflatieNum, year);

      newChartData.push({
        year: year,
        contributii: Math.round(cumulativeContributions),
        valoareAcumulata: Math.round(cumulativeValue),
        costEducatie: Math.round(costForYear),
      });
    }

    setCostAjustatInflatie(Math.round(costAjustat));
    setTotalContributii(Math.round(totalContributiiCalculate));
    setValoareAcumulata(Math.round(valoareAcumulataCalculata));
    setDiferentaFinantare(Math.round(diferenta));
    setChartData(newChartData);
  };

  return (
    <div className="bg-paper-hi border border-ink-300 p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-6 md:mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        {/* Left Column — inputs */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-1 md:mb-2">Detalii Plan Copil</h2>
            <p className="text-ink-600 text-sm md:text-base">Completează datele pentru a calcula planul educațional</p>
          </div>

          <div className="space-y-4 md:space-y-5">
            <InputField
              label="Vârsta Actuală Copil"
              hint="Câți ani are copilul acum. Cu cât începi mai devreme, cu atât lucrează mai mult dobânda."
              type="number"
              value={varstaActualaCopil}
              onChange={setVarstaActualaCopil}
              placeholder="Ex: 3"
            />
            <InputField
              label="Vârsta Target pentru Educație"
              hint="Vârsta la care copilul va avea nevoie de bani (ex: 18 ani, pentru facultate)."
              type="number"
              value={varstaTargetEducatie}
              onChange={setVarstaTargetEducatie}
              placeholder="Ex: 18"
            />
            <InputField
              label="Cost Estimat Educație (RON)"
              hint="Cât crezi că va costa educația, exprimat în prețurile de azi."
              type="number"
              value={costEstimatEducatie}
              onChange={setCostEstimatEducatie}
              placeholder="Ex: 50000"
            />
            <InputField
              label="Contribuție Lunară (RON)"
              hint="Suma pe care o pui deoparte în fiecare lună pentru acest obiectiv."
              type="number"
              value={contributieLunaraCopil}
              onChange={setContributieLunaraCopil}
              placeholder="Ex: 200"
            />
            <InputField
              label="Randament Anual Estimat (%)"
              hint="Cât crezi că vor crește economiile pe an, dacă sunt investite (ex: 6–8% pe termen lung)."
              type="number"
              step="0.1"
              value={randamentAnualCopil}
              onChange={setRandamentAnualCopil}
              placeholder="Ex: 6.0"
            />
            <InputField
              label="Inflație Educație Anuală (%)"
              hint="Cu cât se scumpește educația în fiecare an. Crește costul real de care vei avea nevoie."
              type="number"
              step="0.1"
              value={inflatieEducatie}
              onChange={setInflatieEducatie}
              placeholder="Ex: 4.0"
            />
            <Button variant="gold" onClick={calculeazaPlanulCopil} className="w-full justify-center">
              Calculează Planul
            </Button>
          </div>
        </div>

        {/* Right Column — results + chart */}
        <div className="flex flex-col h-full">
          <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg">
            <h3 className="font-display text-xl text-ink-900 mb-3 md:mb-4 flex items-center">
              <Baby className="mr-2 text-gold-500" size={20} />
              Estimare Plan Copil
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Cost Ajustat Inflație:</span>
                <span className="font-mono text-right text-ink-900">{costAjustatInflatie.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Total Contribuții:</span>
                <span className="font-mono text-right text-ink-900">{totalContributii.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-ink-600">Valoare Acumulată:</span>
                <span className="font-mono text-right text-ink-900">{valoareAcumulata.toLocaleString()} RON</span>
              </div>
              <div className="border-t border-ink-300 pt-2 md:pt-3 flex justify-between gap-2">
                <span className="text-ink-900 font-semibold">Diferența Finanțare:</span>
                <span className={`font-mono font-bold text-right ${diferentaFinantare >= 0 ? 'text-sage' : 'text-clay'}`}>
                  {diferentaFinantare >= 0 ? '+' : ''}
                  {diferentaFinantare.toLocaleString()} RON
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 flex flex-col mt-4 md:mt-6">
            <h3 className="font-display text-xl text-ink-900 mb-3 md:mb-4">Evoluția Planului</h3>
            <div className="bg-paper border border-ink-300 p-3 md:p-6 rounded-lg flex-1">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: chartColors.inkMuted, fontSize: 12 }} />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: chartColors.inkMuted, fontSize: 12 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={chartTooltipStyle}
                    cursor={{ fill: 'rgba(197,160,89,0.08)' }}
                    formatter={(value, name) => [
                      `${Number(value).toLocaleString()} RON`,
                      name === 'contributii' ? 'Contribuții' : name === 'valoareAcumulata' ? 'Valoare Acumulată' : 'Cost Educație',
                    ]}
                    labelFormatter={(label) => `Anul ${label}`}
                  />
                  <Legend wrapperStyle={{ fontSize: 12, color: chartColors.inkMuted }} />
                  <Bar dataKey="contributii" fill={chartColors.muted} name="Contribuții" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="valoareAcumulata" fill={chartColors.gold} name="Valoare Acumulată" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="costEducatie" fill={chartColors.clay} name="Cost Educație" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopilCalculator;
