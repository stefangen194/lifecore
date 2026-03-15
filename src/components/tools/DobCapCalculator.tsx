import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  const [chartData, setChartData] = useState([
    { year: 0, total: 0, core: 0, topup: 0 },
  ]);

  // Calculate growth function
  const calculateGrowth = () => {
    // Parse input values
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

    // Initialize variables
    let currentBalance = initialDeposit + annualTopUp; // Include one-time top-up at start
    let totalCoreContributions = initialDeposit;
    let totalTopUpContributions = annualTopUp; // Top-up is now a one-time initial deposit
    let currentRecurringAmount = recurringAmount;
    
    const newChartData = [
      { 
        year: 0, 
        total: initialDeposit + annualTopUp, 
        core: initialDeposit, 
        topup: annualTopUp 
      }
    ];

    // Calculate frequency multiplier for recurring deposits
    const getFrequencyMultiplier = (type: string) => {
      switch (type) {
        case 'lunară': return 12;
        case 'trimestrială': return 4;
        case 'semestrială': return 2;
        case 'anuală': return 1;
        default: return 12;
      }
    };

    const frequencyMultiplier = getFrequencyMultiplier(tipDepunereRecurenta);


    // Simulate year by year growth
    for (let year = 1; year <= years; year++) {
      if (capitalizare === 'lunară') {
        // Monthly compounding - add deposits and apply interest monthly
        const monthlyRate = annualReturn / 12;
        
        for (let month = 0; month < 12; month++) {
          // Add monthly recurring deposit
          if (frequencyMultiplier === 12) {
            // Monthly deposits
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          } else if (frequencyMultiplier === 4 && month % 3 === 0) {
            // Quarterly deposits (every 3 months)
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          } else if (frequencyMultiplier === 2 && month % 6 === 0) {
            // Semi-annual deposits (every 6 months)
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          } else if (frequencyMultiplier === 1 && month === 0) {
            // Annual deposits (first month only)
            currentBalance += currentRecurringAmount;
            totalCoreContributions += currentRecurringAmount;
          }
          
          // Apply monthly compound interest
          currentBalance *= (1 + monthlyRate);
        }
      } else {
        // Annual compounding - apply interest first, then add deposits
        // Apply annual compound interest to existing balance
        currentBalance *= (1 + annualReturn);
        
        // Then add this year's contributions (they won't earn interest until next year)
        const yearlyRecurringContribution = currentRecurringAmount * frequencyMultiplier;
        currentBalance += yearlyRecurringContribution;
        totalCoreContributions += yearlyRecurringContribution;
      }

      // Add data point for chart
      newChartData.push({
        year: year,
        total: Math.round(currentBalance),
        core: Math.round(totalCoreContributions),
        topup: Math.round(totalTopUpContributions)
      });

      // Apply indexation to recurring amount for next year
      if (year < years) {
        currentRecurringAmount *= (1 + indexationRate);
      }
    }

    // Calculate final results
    const finalTotalInvested = totalCoreContributions + totalTopUpContributions;
    const finalProfit = currentBalance - finalTotalInvested;

    // Update state
    setChartData(newChartData);
    setTotalInvested(Math.round(finalTotalInvested));
    setFinalValue(Math.round(currentBalance));
    setTotalProfit(Math.round(finalProfit));
  };


  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Calculator Dobândă Capitalizată</h2>
            <p className="text-sm md:text-base text-gray-600">Completează spațiile libere pentru a eficientiza capitalizarea</p>
          </div>

          <div className="space-y-6">
            {/* Basic Parameters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Perioadă (ani)
                </label>
                <input
                  type="number"
                  value={perioada}
                  onChange={(e) => setPerioada(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Ex: 10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Randament (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={randament}
                  onChange={(e) => setRandament(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Ex: 8.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Capitalizare
                </label>
                <select
                  value={capitalizare}
                  onChange={(e) => setCapitalizare(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                >
                  <option value="lunară">Lunară</option>
                  <option value="anuală">Anuală</option>
                </select>
              </div>
            </div>

            {/* Depunere Section */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Depunere</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Depunere unică inițială (RON)
                  </label>
                  <input
                    type="number"
                    value={depunereUnica}
                    onChange={(e) => setDepunereUnica(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Ex: 10000"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Depunere recurentă
                    </label>
                    <select
                      value={tipDepunereRecurenta}
                      onChange={(e) => setTipDepunereRecurenta(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                    >
                      <option value="lunară">Depunere lunară</option>
                      <option value="trimestrială">Depunere trimestrială</option>
                      <option value="semestrială">Depunere semestrială</option>
                      <option value="anuală">Depunere anuală</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sumă (RON)
                    </label>
                    <input
                      type="number"
                      value={depunereRecurenta}
                      onChange={(e) => setDepunereRecurenta(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="Ex: 500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Indexare (pentru depunere recurentă) (%)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={indexare}
                    onChange={(e) => setIndexare(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Ex: 3.0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Top-up anual (RON)
                  </label>
                  <input
                    type="number"
                    value={topUp}
                    onChange={(e) => setTopUp(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="Ex: 0"
                  />
                </div>
              </div>
            </div>

            <button onClick={calculateGrowth} className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base">
              Calculează Creșterea
            </button>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          {/* Chart */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="mr-2 text-blue-700" size={24} />
              Evoluția Investiției
            </h3>
            <div className="bg-gray-900 p-2 md:p-4 rounded-lg h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis 
                    dataKey="year" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9CA3AF', fontSize: 12 }}
                    tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                    formatter={(value: number, name: string) => [
                      `${value.toLocaleString()} RON`, 
                      name === 'total' ? 'Total' : name === 'core' ? 'Investit' : 'Top-up'
                    ]}
                    labelFormatter={(label: number) => `Anul ${label}`}
                  />
                  <Legend 
                    wrapperStyle={{ color: '#F9FAFB' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#60A5FA" 
                    strokeWidth={4}
                    name="Total"
                    dot={false}
                    activeDot={{ r: 6, fill: '#60A5FA' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="core" 
                    stroke="#F87171" 
                    strokeWidth={4}
                    name="Investit"
                    dot={false}
                    activeDot={{ r: 6, fill: '#F87171' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="topup" 
                    stroke="#FBBF24" 
                    strokeWidth={4}
                    name="Top-up"
                    dot={false}
                    activeDot={{ r: 6, fill: '#FBBF24' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Rezultat</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">Total investit:</span>
                <span className="font-medium text-base md:text-lg">{totalInvested.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm md:text-base">Valoare finală:</span>
                <span className="font-medium text-base md:text-lg">{finalValue.toLocaleString()} RON</span>
              </div>
              <div className="border-t pt-3 flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Profit:</span>
                <span className="font-bold text-green-600 text-base md:text-lg">{totalProfit.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Profitabilitate:</span>
                <span className="font-bold text-green-600 text-base md:text-lg">
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