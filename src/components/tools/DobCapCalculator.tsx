import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { InputField, SelectField, Button, chartColors, chartTooltipStyle } from '../ui';

const DobCapCalculator: React.FC = () => {
  const [perioada, setPerioada] = useState('');
  const [randament, setRandament] = useState('');
  const [capitalizare, setCapitalizare] = useState('anuală');
  const [depunereUnica, setDepunereUnica] = useState('');
  const [depunereRecurenta, setDepunereRecurenta] = useState('');
  const [tipDepunereRecurenta, setTipDepunereRecurenta] = useState('lunară');
  const [indexare, setIndexare] = useState('');
  const [topUp, setTopUp] = useState('');

  // State for calculated results
  const [totalInvested, setTotalInvested] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [chartData, setChartData] = useState([{ year: 0, total: 0, core: 0, topup: 0 }]);

  // Calculate growth function
  const calculateGrowth = () => {
    const years = parseFloat(perioada) || 0;
    const annualReturn = (parseFloat(randament) || 0) / 100;
    const initialDeposit = parseFloat(depunereUnica) || 0;
    const recurringAmount = parseFloat(depunereRecurenta) || 0;
    const indexationRate = (parseFloat(indexare) || 0) / 100;
    const annualTopUp = parseFloat(topUp) || 0;

    if (years <= 0) {
      alert('Vă rugăm să introduceți o perioadă validă');
      return;
    }

    let currentBalance = initialDeposit + annualTopUp; // Include one-time top-up at start
    let totalCoreContributions = initialDeposit;
    const totalTopUpContributions = annualTopUp; // Top-up is a one-time initial deposit
    let currentRecurringAmount = recurringAmount;

    const newChartData = [
      { year: 0, total: initialDeposit + annualTopUp, core: initialDeposit, topup: annualTopUp },
    ];

    const getFrequencyMultiplier = (type: string) => {
      switch (type) {
        case 'lunară':
          return 12;
        case 'trimestrială':
          return 4;
        case 'semestrială':
          return 2;
        case 'anuală':
          return 1;
        default:
          return 12;
      }
    };

    const frequencyMultiplier = getFrequencyMultiplier(tipDepunereRecurenta);

    for (let year = 1; year <= years; year++) {
      if (capitalizare === 'lunară') {
        const monthlyRate = annualReturn / 12;

        for (let month = 0; month < 12; month++) {
          if (frequencyMultiplier === 12) {
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          } else if (frequencyMultiplier === 4 && month % 3 === 0) {
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          } else if (frequencyMultiplier === 2 && month % 6 === 0) {
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          } else if (frequencyMultiplier === 1 && month === 0) {
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          }

          currentBalance *= 1 + monthlyRate;
        }
      } else {
        currentBalance *= 1 + annualReturn;
        const yearlyRecurringContribution = currentRecurringAmount * frequencyMultiplier;
        currentBalance += yearlyRecurringContribution;
        totalCoreContributions += yearlyRecurringContribution;
      }

      newChartData.push({
        year: year,
        total: Math.round(currentBalance),
        core: Math.round(totalCoreContributions),
        topup: Math.round(totalTopUpContributions),
      });

      if (year < years) {
        currentRecurringAmount *= 1 + indexationRate;
      }
    }

    const finalTotalInvested = totalCoreContributions + totalTopUpContributions;
    const finalProfit = currentBalance - finalTotalInvested;

    setChartData(newChartData);
    setTotalInvested(Math.round(finalTotalInvested));
    setFinalValue(Math.round(currentBalance));
    setTotalProfit(Math.round(finalProfit));
  };

  return (
    <div className="bg-paper-hi border border-ink-300 p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column — inputs */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-2">Calculator Dobândă Capitalizată</h2>
            <p className="text-sm md:text-base text-ink-600">Completează spațiile libere pentru a eficientiza capitalizarea</p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <InputField
                label="Perioadă (ani)"
                hint="Numărul de ani în care lași banii investiți."
                type="number"
                value={perioada}
                onChange={setPerioada}
                placeholder="Ex: 10"
              />
              <InputField
                label="Randament (%)"
                hint="Câștigul mediu anual estimat al investiției."
                type="number"
                step="0.1"
                value={randament}
                onChange={setRandament}
                placeholder="Ex: 8.5"
              />
              <SelectField
                label="Capitalizare"
                hint="Cât de des se adaugă câștigul la capital. Mai des înseamnă creștere ușor mai rapidă."
                value={capitalizare}
                onChange={setCapitalizare}
                options={[
                  { value: 'lunară', label: 'Lunară' },
                  { value: 'anuală', label: 'Anuală' },
                ]}
              />
            </div>

            <div>
              <h3 className="font-display text-lg text-ink-900 mb-4">Depunere</h3>
              <div className="space-y-4">
                <InputField
                  label="Depunere unică inițială (RON)"
                  hint="Suma cu care pornești investiția, depusă o singură dată la început."
                  type="number"
                  value={depunereUnica}
                  onChange={setDepunereUnica}
                  placeholder="Ex: 10000"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <SelectField
                    label="Depunere recurentă"
                    hint="Cât de des adaugi bani noi în investiție."
                    value={tipDepunereRecurenta}
                    onChange={setTipDepunereRecurenta}
                    options={[
                      { value: 'lunară', label: 'Depunere lunară' },
                      { value: 'trimestrială', label: 'Depunere trimestrială' },
                      { value: 'semestrială', label: 'Depunere semestrială' },
                      { value: 'anuală', label: 'Depunere anuală' },
                    ]}
                  />
                  <InputField
                    label="Sumă (RON)"
                    hint="Cât depui la fiecare interval ales mai sus."
                    type="number"
                    value={depunereRecurenta}
                    onChange={setDepunereRecurenta}
                    placeholder="Ex: 500"
                  />
                </div>
                <InputField
                  label="Indexare (pentru depunere recurentă) (%)"
                  hint="Cu cât crește anual depunerea recurentă (ex: o mărești cu inflația). Lasă 0 dacă rămâne fixă."
                  type="number"
                  step="0.1"
                  value={indexare}
                  onChange={setIndexare}
                  placeholder="Ex: 3.0"
                />
                <InputField
                  label="Top-up anual (RON)"
                  hint="Sumă suplimentară adăugată investiției pe lângă depunerile recurente."
                  type="number"
                  value={topUp}
                  onChange={setTopUp}
                  placeholder="Ex: 0"
                />
              </div>
            </div>

            <Button variant="gold" onClick={calculateGrowth} className="w-full justify-center">
              Calculează Creșterea
            </Button>
          </div>
        </div>

        {/* Right Column — chart + results */}
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-xl text-ink-900 mb-4 flex items-center">
              <TrendingUp className="mr-2 text-gold-500" size={22} />
              Evoluția Investiției
            </h3>
            <div className="bg-paper-lo border border-ink-300 p-2 md:p-4 rounded-lg h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: chartColors.inkMuted, fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: chartColors.inkMuted, fontSize: 12 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip
                    contentStyle={chartTooltipStyle}
                    formatter={(value, name) => [
                      `${Number(value).toLocaleString()} RON`,
                      name === 'total' ? 'Total' : name === 'core' ? 'Investit' : 'Top-up',
                    ]}
                    labelFormatter={(label) => `Anul ${label}`}
                  />
                  <Legend wrapperStyle={{ color: chartColors.inkMuted, fontSize: 12 }} />
                  <Line type="monotone" dataKey="total" stroke={chartColors.gold} strokeWidth={3} name="Total" dot={false} activeDot={{ r: 6, fill: chartColors.gold }} />
                  <Line type="monotone" dataKey="core" stroke={chartColors.muted} strokeWidth={3} name="Investit" dot={false} activeDot={{ r: 6, fill: chartColors.muted }} />
                  <Line type="monotone" dataKey="topup" stroke={chartColors.clay} strokeWidth={3} name="Top-up" dot={false} activeDot={{ r: 6, fill: chartColors.clay }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg">
            <h3 className="font-display text-xl text-ink-900 mb-4">Rezultat</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-ink-600 text-sm md:text-base">Total investit:</span>
                <span className="font-mono text-base md:text-lg text-ink-900">{totalInvested.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-600 text-sm md:text-base">Valoare finală:</span>
                <span className="font-mono text-base md:text-lg text-ink-900">{finalValue.toLocaleString()} RON</span>
              </div>
              <div className="border-t border-ink-300 pt-3 flex justify-between items-center">
                <span className="text-ink-900 font-semibold text-sm md:text-base">Profit:</span>
                <span className="font-mono font-bold text-gold-500 text-base md:text-lg">{totalProfit.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-ink-900 font-semibold text-sm md:text-base">Profitabilitate:</span>
                <span className="font-mono font-bold text-gold-500 text-base md:text-lg">
                  {totalInvested > 0 ? (((finalValue - totalInvested) / totalInvested) * 100).toFixed(1) : 0}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DobCapCalculator;
