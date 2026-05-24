import { useState } from 'react';
import { Users } from 'lucide-react';
import { InputField, Button } from '../ui';

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

  const calculeazaPensia = () => {
    const varstaActualaNum = parseFloat(varstaActuala) || 0;
    const varstaPensionareNum = parseFloat(varstaPensionare) || 0;
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
      let currentBalance = 0;
      const monthlyContribution = contributieLunaraNum;

      // Simulate year by year growth (annual compounding)
      for (let year = 1; year <= aniPanaLaPensionare; year++) {
        currentBalance *= 1 + randamentNum;
        const yearlyContribution = monthlyContribution * 12;
        currentBalance += yearlyContribution;
      }

      const futureValue = currentBalance;

      // Step 2: Convert the lump sum to monthly payments over the esalonare period
      contributieTotala = futureValue / perioadaEsalonareNum;
    }

    const totalLunarCalculat = pensieStat + contributieTotala;

    // Update state
    setPensieDeStat(Math.round(pensieStat));
    setContributieSuplimentara(Math.round(contributieTotala));
    setTotalLunar(Math.round(totalLunarCalculat));
  };

  const venitOptimNum = parseFloat(venitOptimRetragere) || 0;
  const maxBar = Math.max(pensieDeStat, contributieSuplimentara, venitOptimNum, 1);

  const bars = [
    { label: 'Pensie de Stat', value: pensieDeStat, bar: 'bg-ink-600', text: 'text-paper', head: 'text-ink-600' },
    { label: 'Contribuție Suplimentară', value: contributieSuplimentara, bar: 'bg-gold-500', text: 'text-[#0B0B0C]', head: 'text-gold-500' },
    { label: 'Venit Optim', value: venitOptimNum, bar: 'bg-gold-700', text: 'text-paper', head: 'text-gold-700' },
  ];

  return (
    <div className="bg-paper-hi border border-ink-300 p-4 md:p-8 rounded-lg shadow-lg max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column — inputs */}
        <div>
          <div className="mb-6 md:mb-8">
            <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-2">Detalii Pensionare</h2>
            <p className="text-sm md:text-base text-ink-600">Completează datele pentru a calcula pensia estimată</p>
          </div>

          <div className="space-y-4 md:space-y-5">
            <InputField
              label="Vârsta Actuală"
              hint="Câți ani ai acum. Definește câți ani mai contribui până la pensie."
              type="number"
              value={varstaActuala}
              onChange={setVarstaActuala}
              placeholder="Ex: 30"
            />
            <InputField
              label="Vârsta de Pensionare"
              hint="Vârsta la care vrei să te pensionezi și să începi să folosești banii."
              type="number"
              value={varstaPensionare}
              onChange={setVarstaPensionare}
              placeholder="Ex: 65"
            />
            <InputField
              label="Venit Optim Retragere din Activitate (RON)"
              hint="Venitul lunar pe care ți l-ai dori la pensie. Este ținta cu care compari rezultatul."
              type="number"
              value={venitOptimRetragere}
              onChange={setVenitOptimRetragere}
              placeholder="Ex: 4000"
            />
            <InputField
              label="Salariul Actual Brut (RON)"
              hint="Salariul tău brut lunar. Pe baza lui estimăm pensia de stat."
              type="number"
              value={salariulActual}
              onChange={setSalariulActual}
              placeholder="Ex: 5000"
            />
            <InputField
              label="Contribuție Lunară Suplimentară (RON)"
              hint="Cât pui în plus, lunar, într-un fond privat sau o investiție proprie."
              type="number"
              value={contributieLunaraSuplimentara}
              onChange={setContributieLunaraSuplimentara}
              placeholder="Ex: 300"
            />
            <InputField
              label="Randament Anual Capitalizat (%)"
              hint="Câștigul mediu anual estimat al contribuțiilor suplimentare."
              type="number"
              step="0.1"
              value={randamentAnual}
              onChange={setRandamentAnual}
              placeholder="Ex: 7.0"
            />
            <InputField
              label="Perioada Eșalonare (luni)"
              hint="În câte luni vrei să consumi suma acumulată după pensionare (300 luni = 25 ani)."
              type="number"
              value={perioadaEsalonare}
              onChange={setPerioadaEsalonare}
              placeholder="Ex: 300"
            />

            <Button variant="gold" onClick={calculeazaPensia} className="w-full justify-center">
              Calculează Pensia
            </Button>
          </div>
        </div>

        {/* Right Column — results + chart */}
        <div className="flex flex-col h-full">
          <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg">
            <h3 className="font-display text-xl text-ink-900 mb-4 flex items-center">
              <Users className="mr-2 text-gold-500" size={22} />
              Estimare Pensie
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-ink-600 text-sm md:text-base">Pensie de Stat:</span>
                <span className="font-mono text-sm md:text-base text-ink-900">{pensieDeStat.toLocaleString()} RON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600 text-sm md:text-base">Contribuție Suplimentară:</span>
                <span className="font-mono text-sm md:text-base text-ink-900">{contributieSuplimentara.toLocaleString()} RON</span>
              </div>
              <div className="border-t border-ink-300 pt-3 flex justify-between">
                <span className="text-ink-900 font-semibold text-sm md:text-base">Total Lunar:</span>
                <span className={`font-mono font-bold text-sm md:text-base ${totalLunar >= venitOptimNum ? 'text-sage' : 'text-clay'}`}>
                  {totalLunar.toLocaleString()} RON
                </span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 flex flex-col mt-6">
            <h3 className="font-display text-xl text-ink-900 mb-4">Evoluția Pensiei</h3>
            <div className="bg-paper border border-ink-300 p-3 md:p-6 rounded-lg flex-1 grid grid-cols-3 gap-3 md:gap-6 min-h-[280px]">
              {bars.map((b) => (
                <div key={b.label} className="flex flex-col">
                  <h4 className={`text-xs md:text-base font-semibold mb-2 md:mb-4 text-center leading-tight ${b.head}`}>
                    {b.label}
                  </h4>
                  <div className="flex-1 flex flex-col justify-end min-h-[120px]">
                    <div
                      className={`${b.bar} ${b.text} rounded-t-lg transition-all duration-500 flex items-end justify-center font-bold text-xs md:text-base px-1`}
                      style={{ height: `${Math.max((b.value / maxBar) * 100, 10)}%`, minHeight: '60px' }}
                    >
                      <span className="mb-1 md:mb-2 text-center leading-tight">{b.value.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-center mt-1 md:mt-2 text-xs text-ink-500 leading-tight">RON/lună</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensieCalculator;
