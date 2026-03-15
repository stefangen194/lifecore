import React, { useState } from 'react';
import { Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PensieCalculator: React.FC = () => {
  const [varstaActuala, setVarstaActuala] = useState('');
  const [varstaPensionare, setVarstaPensionare] = useState('');
  const [venitOptimRetragere, setVenitOptimRetragere] = useState('');
  const [salariulActual, setSalariulActual] = useState('');
  const [contributieLunaraSuplimentara, setContributieLunaraSuplimentara] = useState('');
  const [randamentAnual, setRandamentAnual] = useState('');
  const [perioadaEsalonare, setPerioadaEsalonare] = useState('');

  // Results state
  const [pensieDeStat, setPensieDeStat] = useState(0);
  const [contributieSuplimentara, setContributieSuplimentara] = useState(0);
  const [totalLunar, setTotalLunar] = useState(0);
  const [chartData, setChartData] = useState([
    { year: 0, pensieStat: 0, contributieSuplimentara: 0, venitOptim: 0 },
  ]);

  const calculeazaPensia = () => {
    const varstaActualaNum = parseFloat(varstaActuala) || 0;
    const varstaPensionareNum = parseFloat(varstaPensionare) || 0;
    const venitOptimNum = parseFloat(venitOptimRetragere) || 0;
    const salariuActualNum = parseFloat(salariulActual) || 0;
    const contributieLunaraNum = parseFloat(contributieLunaraSuplimentara) || 0;
    const randamentNum = (parseFloat(randamentAnual) || 0) / 100;
    const perioadaEsalonareNum = parseFloat(perioadaEsalonare) || 300; // Default 25 years = 300 months

    if (varstaActualaNum <= 0 || varstaPensionareNum <= 0 || varstaActualaNum >= varstaPensionareNum) {
      alert('Vă rugăm să introduceți vârste valide');
      return;
    }

    const aniPanaLaPensionare = varstaPensionareNum - varstaActualaNum;

    // Calculate Pensie de Stat (simplified calculation - approximately 45% of average salary)
    const pensieStat = salariuActualNum * 0.2025;

    // Calculate Contribuție Suplimentară with compound interest
    let contributieTotala = 0;
    if (contributieLunaraNum > 0 && randamentNum > 0) {
      // Step 1: Calculate the accumulated value at retirement using annual compounding
      // Even though deposits are monthly, interest is compounded annually
      let currentBalance = 0;
      const monthlyContribution = contributieLunaraNum;
      
      // Simulate year by year growth (annual compounding)
      for (let year = 1; year <= aniPanaLaPensionare; year++) {
        // Apply annual compound interest to existing balance
        currentBalance *= (1 + randamentNum);
        
        // Add this year's contributions (12 monthly contributions)
        // These contributions don't earn interest until next year
        const yearlyContribution = monthlyContribution * 12;
        currentBalance += yearlyContribution;
      }
      
      const futureValue = currentBalance;
      
      // Step 2: Convert the lump sum to monthly payments over the esalonare period
      contributieTotala = futureValue / perioadaEsalonareNum;
    }

    const totalLunarCalculat = pensieStat + contributieTotala;

    // Generate chart data
    const newChartData = [];
    for (let year = 0; year <= aniPanaLaPensionare; year++) {
      let contributieCumulata = 0;
      if (contributieLunaraNum > 0 && randamentNum > 0 && year > 0) {
        // Calculate accumulated value up to this year using annual compounding
        let yearlyBalance = 0;
        const monthlyContribution = contributieLunaraNum;
        
        for (let y = 1; y <= year; y++) {
          // Apply annual compound interest to existing balance
          yearlyBalance *= (1 + randamentNum);
          
          // Add this year's contributions (12 monthly contributions)
          const yearlyContribution = monthlyContribution * 12;
          yearlyBalance += yearlyContribution;
        }
        
        // Convert to monthly pension over esalonare period
        contributieCumulata = yearlyBalance / perioadaEsalonareNum;
      }

      newChartData.push({
        year: year,
        pensieStat: Math.round(pensieStat),
        contributieSuplimentara: Math.round(contributieCumulata),
        venitOptim: Math.round(venitOptimNum)
      });
    }

    // Update state
    setPensieDeStat(Math.round(pensieStat));
    setContributieSuplimentara(Math.round(contributieTotala));
    setTotalLunar(Math.round(totalLunarCalculat));
    setChartData(newChartData);
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Detalii Pensionare</h2>
            <p className="text-sm md:text-base text-gray-600">Completează datele pentru a calcula pensia estimată</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vârsta Actuală
              </label>
              <input
                type="number"
                value={varstaActuala}
                onChange={(e) => setVarstaActuala(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 30"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vârsta de Pensionare
              </label>
              <input
                type="number"
                value={varstaPensionare}
                onChange={(e) => setVarstaPensionare(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 65"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venit Optim Retragere din Activitate (RON)
              </label>
              <input
                type="number"
                value={venitOptimRetragere}
                onChange={(e) => setVenitOptimRetragere(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 4000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Salariul Actual Brut (RON)
              </label>
              <input
                type="number"
                value={salariulActual}
                onChange={(e) => setSalariulActual(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 5000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contribuție Lunară Suplimentară (RON)
              </label>
              <input
                type="number"
                value={contributieLunaraSuplimentara}
                onChange={(e) => setContributieLunaraSuplimentara(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Randament Anual Capitalizat (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={randamentAnual}
                onChange={(e) => setRandamentAnual(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 7.0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Perioada Esalonare (luni)
              </label>
              <input
                type="number"
                value={perioadaEsalonare}
                onChange={(e) => setPerioadaEsalonare(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                placeholder="Ex: 300"
              />
            </div>

            <button
              onClick={calculeazaPensia}
              className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm md:text-base"
            >
              Calculează Pensia
            </button>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="flex flex-col h-full">
          {/* Results */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Users className="mr-2 text-blue-700" size={24} />
              Estimare Pensie
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm md:text-base">Pensie de Stat:</span>
                <span className="font-medium text-sm md:text-base">{pensieDeStat.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm md:text-base">Contribuție Suplimentară:</span>
                <span className="font-medium text-sm md:text-base">{contributieSuplimentara.toLocaleString()} RON</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Total Lunar:</span>
                <span className={`font-bold text-sm md:text-base ${totalLunar >= (parseFloat(venitOptimRetragere) || 0) ? 'text-green-600' : 'text-red-600'}`}>{totalLunar.toLocaleString()} RON</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 flex flex-col mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Evoluția Pensiei</h3>
            <div className="bg-white border border-gray-200 p-3 md:p-6 rounded-lg flex-1 grid grid-cols-3 gap-3 md:gap-6 min-h-[280px]">
              {/* Pensie de Stat Column */}
              <div className="flex flex-col">
                <h4 className="text-xs md:text-lg font-semibold text-blue-700 mb-2 md:mb-4 text-center leading-tight">Pensie de Stat</h4>
                <div className="flex-1 flex flex-col justify-end min-h-[120px]">
                  <div
                    className="bg-blue-500 rounded-t-lg transition-all duration-500 flex items-end justify-center text-white font-bold text-xs md:text-lg px-1"
                    style={{
                      height: `${Math.max((pensieDeStat / Math.max(pensieDeStat, contributieSuplimentara, parseFloat(venitOptimRetragere) || 0)) * 100, 10)}%`,
                      minHeight: '60px'
                    }}
                  >
                    <span className="mb-1 md:mb-2">{pensieDeStat.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-center mt-1 md:mt-2 text-xs text-gray-600 leading-tight">RON/lună</div>
              </div>

              {/* Contribuție Suplimentară Column */}
              <div className="flex flex-col">
                <h4 className="text-xs md:text-lg font-semibold text-green-700 mb-2 md:mb-4 text-center leading-tight">Contribuție Suplimentară</h4>
                <div className="flex-1 flex flex-col justify-end min-h-[120px]">
                  <div
                    className="bg-green-500 rounded-t-lg transition-all duration-500 flex items-end justify-center text-white font-bold text-xs md:text-lg px-1"
                    style={{
                      height: `${Math.max((contributieSuplimentara / Math.max(pensieDeStat, contributieSuplimentara, parseFloat(venitOptimRetragere) || 0)) * 100, 10)}%`,
                      minHeight: '60px'
                    }}
                  >
                    <span className="mb-1 md:mb-2">{contributieSuplimentara.toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-center mt-1 md:mt-2 text-xs text-gray-600 leading-tight">RON/lună</div>
              </div>

              {/* Venit Optim Column */}
              <div className="flex flex-col">
                <h4 className="text-xs md:text-lg font-semibold text-yellow-700 mb-2 md:mb-4 text-center leading-tight">Venit Optim</h4>
                <div className="flex-1 flex flex-col justify-end min-h-[120px]">
                  <div
                    className="bg-yellow-500 rounded-t-lg transition-all duration-500 flex items-end justify-center text-white font-bold text-xs md:text-lg px-1"
                    style={{
                      height: `${Math.max(((parseFloat(venitOptimRetragere) || 0) / Math.max(pensieDeStat, contributieSuplimentara, parseFloat(venitOptimRetragere) || 0)) * 100, 10)}%`,
                      minHeight: '60px'
                    }}
                  >
                    <span className="mb-1 md:mb-2 text-center leading-tight">{(parseFloat(venitOptimRetragere) || 0).toLocaleString()}</span>
                  </div>
                </div>
                <div className="text-center mt-1 md:mt-2 text-xs text-gray-600 leading-tight">RON/lună</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensieCalculator;