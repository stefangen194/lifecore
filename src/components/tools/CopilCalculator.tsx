import React, { useState } from 'react';
import { Baby } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  const [chartData, setChartData] = useState([
    { year: 0, contributii: 0, valoareAcumulata: 0, costEducatie: 0 },
  ]);

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
      
      // Simulate year by year growth (annual compounding)
      for (let year = 1; year <= aniPanaLaEducatie; year++) {
        // Apply annual compound interest to existing balance
        currentBalance *= (1 + randamentNum);
        
        // Add this year's contributions (12 monthly contributions)
        // These contributions don't earn interest until next year
        const yearlyContribution = monthlyContribution * 12;
        currentBalance += yearlyContribution;
      }
      
      valoareAcumulataCalculata = currentBalance;
    } else {
      valoareAcumulataCalculata = totalContributiiCalculate;
    }

    // Calculate funding difference
    const diferenta = valoareAcumulataCalculata - costAjustat;

    // Generate chart data
    const newChartData = [];
    let cumulativeContributions = 0;
    let cumulativeValue = 0;
    
    for (let year = 0; year <= aniPanaLaEducatie; year++) {
      if (year > 0) {
        // Apply compound interest to existing value
        cumulativeValue *= (1 + randamentNum);
        
        // Add this year's contributions
        const yearlyContribution = contributieLunaraNum * 12;
        cumulativeValue += yearlyContribution;
        cumulativeContributions += yearlyContribution;
      }

      // Calculate education cost for this year
      const costForYear = costEstimatNum * Math.pow(1 + inflatieNum, year);

      newChartData.push({
        year: year,
        contributii: Math.round(cumulativeContributions),
        valoareAcumulata: Math.round(cumulativeValue),
        costEducatie: Math.round(costForYear)
      });
    }

    // Update state
    setCostAjustatInflatie(Math.round(costAjustat));
    setTotalContributii(Math.round(totalContributiiCalculate));
    setValoareAcumulata(Math.round(valoareAcumulataCalculata));
    setDiferentaFinantare(Math.round(diferenta));
    setChartData(newChartData);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-6 md:mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
        {/* Left Column */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1 md:mb-2">Detalii Plan Copil</h2>
            <p className="text-gray-600 text-sm md:text-base">Completează datele pentru a calcula planul educațional</p>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Vârsta Actuală Copil
              </label>
              <input
                type="number"
                value={varstaActualaCopil}
                onChange={(e) => setVarstaActualaCopil(e.target.value)}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Ex: 3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Vârsta Target pentru Educație
              </label>
              <input
                type="number"
                value={varstaTargetEducatie}
                onChange={(e) => setVarstaTargetEducatie(e.target.value)}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Ex: 18"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Cost Estimat Educație (RON)
              </label>
              <input
                type="number"
                value={costEstimatEducatie}
                onChange={(e) => setCostEstimatEducatie(e.target.value)}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Ex: 50000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Contribuție Lunară (RON)
              </label>
              <input
                type="number"
                value={contributieLunaraCopil}
                onChange={(e) => setContributieLunaraCopil(e.target.value)}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Ex: 200"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Randament Anual Estimat (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={randamentAnualCopil}
                onChange={(e) => setRandamentAnualCopil(e.target.value)}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Ex: 6.0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 md:mb-2">
                Inflație Educație Anuală (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={inflatieEducatie}
                onChange={(e) => setInflatieEducatie(e.target.value)}
                className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
                placeholder="Ex: 4.0"
              />
            </div>

            <button
              onClick={calculeazaPlanulCopil}
              className="w-full bg-blue-700 text-white py-2.5 md:py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
            >
              Calculează Planul
            </button>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col h-full">
          {/* Results */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
              <Baby className="mr-2 text-blue-700" size={20} />
              Estimare Plan Copil
            </h3>
            <div className="space-y-2 md:space-y-3 text-sm md:text-base">
              <div className="flex justify-between gap-2">
                <span className="text-gray-600">Cost Ajustat Inflație:</span>
                <span className="font-medium text-right">{costAjustatInflatie.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600">Total Contribuții:</span>
                <span className="font-medium text-right">{totalContributii.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-gray-600">Valoare Acumulată:</span>
                <span className="font-medium text-right">{valoareAcumulata.toLocaleString()} RON</span>
              </div>
              <div className="border-t pt-2 md:pt-3 flex justify-between gap-2">
                <span className="text-gray-900 font-semibold">Diferența Finanțare:</span>
                <span className={`font-bold text-right ${diferentaFinantare >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {diferentaFinantare >= 0 ? '+' : ''}{diferentaFinantare.toLocaleString()} RON
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 flex flex-col mt-4 md:mt-6">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 md:mb-4">Evoluția Planului</h3>
            <div className="bg-white border border-gray-200 p-3 md:p-6 rounded-lg flex-1">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value: number, name: string) => [
                      `${value.toLocaleString()} RON`, 
                      name === 'contributii' ? 'Contribuții' : 
                      name === 'valoareAcumulata' ? 'Valoare Acumulată' : 'Cost Educație'
                    ]}
                    labelFormatter={(label: number) => `Anul ${label}`}
                  />
                  <Legend />
                  <Bar 
                    dataKey="contributii" 
                    fill="#F87171" 
                    name="Contribuții"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="valoareAcumulata" 
                    fill="#60A5FA" 
                    name="Valoare Acumulată"
                    radius={[2, 2, 0, 0]}
                  />
                  <Bar 
                    dataKey="costEducatie" 
                    fill="#FBBF24" 
                    name="Cost Educație"
                    radius={[2, 2, 0, 0]}
                  />
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