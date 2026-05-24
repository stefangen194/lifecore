import React from 'react';
import { Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { InputField, SelectField, Button, chartColors, chartTooltipStyle } from '../ui';

const MONTHS = [
  'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',
];

const EXPENSE_CATEGORIES = [
  'Selectează categoria', 'Chirie / Rată locuință', 'Utilități (energie, apă, gaz)',
  'Alimente / Supermarket', 'Mâncat în oraș / Coffee / Ieșiri', 'Transport (abonamente)',
  'Carburant', 'Îngrijire personală', 'Sănătate (medicamente / analize)', 'Asigurări',
  'Datorii / Rate', 'Educație / Cursuri', 'Îngrijire copil / Grădiniță / Școală',
  'Divertisment', 'Abonamente (telefon, internet, Netflix etc)', 'Îmbrăcăminte / Încălțăminte',
  'Cadouri / Donații', 'Vacanțe / Călătorii', 'Animale de companie', 'Taxe / Comisioane',
  'Investiții', 'Economii', 'Altele...',
];

// On-brand chart palette (golds, sage, clay, ink-blue, neutrals).
const COLORS = ['#C5A059', '#D4B477', '#8A6F3A', '#6E8A6A', '#A66654', '#3B4654', '#A8A398', '#E2CCA2', '#56524A', '#78746A'];

type Expense = { amount: number; category: string };

// localStorage is attacker-writable — validate shape before trusting it.
// Anything malformed is discarded rather than fed into state/chart/PDF.
function sanitizeBudgetData(raw: unknown): { income: string; expenses: Expense[] } {
  if (typeof raw !== 'object' || raw === null) return { income: '', expenses: [] };
  const data = raw as Record<string, unknown>;
  const income = typeof data.totalMonthlyIncome === 'string' ? data.totalMonthlyIncome : '';
  const expenses = Array.isArray(data.expenses)
    ? data.expenses.filter(
        (e): e is Expense =>
          typeof e === 'object' && e !== null &&
          typeof (e as Expense).amount === 'number' && Number.isFinite((e as Expense).amount) &&
          typeof (e as Expense).category === 'string',
      )
    : [];
  return { income, expenses };
}

const BugetCalculator: React.FC = () => {
  const [selectedYear, setSelectedYear] = React.useState(() => new Date().getFullYear().toString());
  const [selectedMonth, setSelectedMonth] = React.useState(() => MONTHS[new Date().getMonth()]);
  const [totalMonthlyIncome, setTotalMonthlyIncome] = React.useState('');
  const [currentExpenseAmount, setCurrentExpenseAmount] = React.useState('');
  const [currentExpenseCategory, setCurrentExpenseCategory] = React.useState('');
  const [expenses, setExpenses] = React.useState<Array<{ amount: number; category: string }>>([]);
  const [showResetConfirmation, setShowResetConfirmation] = React.useState(false);

  const getStorageKey = () => `budget_${selectedYear}_${selectedMonth}`;

  // Load data from localStorage when component mounts or period changes
  React.useEffect(() => {
    const storageKey = getStorageKey();
    const savedData = localStorage.getItem(storageKey);

    if (savedData) {
      try {
        const parsedData: unknown = JSON.parse(savedData);
        const { income, expenses } = sanitizeBudgetData(parsedData);
        setTotalMonthlyIncome(income);
        setExpenses(expenses);
      } catch (error) {
        if (import.meta.env.DEV) console.error('Error loading saved budget data:', error);
        setTotalMonthlyIncome('');
        setExpenses([]);
      }
    } else {
      setTotalMonthlyIncome('');
      setExpenses([]);
    }
  }, [selectedYear, selectedMonth]);

  // Save data to localStorage whenever income or expenses change
  React.useEffect(() => {
    const storageKey = getStorageKey();
    const dataToSave = { totalMonthlyIncome, expenses };

    if (totalMonthlyIncome || expenses.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    } else {
      localStorage.removeItem(storageKey);
    }
  }, [totalMonthlyIncome, expenses, selectedYear, selectedMonth]);

  // Calculate totals
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = (parseFloat(totalMonthlyIncome) || 0) - totalExpenses;
  const budgetUtilizationPercentage = totalMonthlyIncome
    ? Math.round((totalExpenses / parseFloat(totalMonthlyIncome)) * 100)
    : 0;

  const getPieChartData = () => {
    const categoryTotals: { [key: string]: number } = {};
    expenses.forEach((expense) => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });

    return Object.entries(categoryTotals).map(([category, amount]) => ({
      name: category,
      value: amount,
      percentage: totalExpenses > 0 ? Math.round((amount / totalExpenses) * 100) : 0,
    }));
  };

  const pieChartData = getPieChartData();

  // Handle PDF export — export against the dark surface so light text stays legible
  const handleExportPdf = async () => {
    const element = document.getElementById('budget-calculator-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: '#161617',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Buget_${selectedMonth}_${selectedYear}.pdf`);
    } catch (error) {
      if (import.meta.env.DEV) console.error('Error generating PDF:', error);
      alert('A apărut o eroare la generarea PDF-ului. Vă rugăm să încercați din nou.');
    }
  };

  const handleAddExpense = () => {
    if (currentExpenseAmount && currentExpenseCategory && parseFloat(currentExpenseAmount) > 0) {
      const newExpense = { amount: parseFloat(currentExpenseAmount), category: currentExpenseCategory };
      setExpenses([...expenses, newExpense]);
      setCurrentExpenseAmount('');
      setCurrentExpenseCategory('');
    }
  };

  const handleDeleteExpense = (indexToDelete: number) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const handleReset = () => {
    setShowResetConfirmation(false);
    const storageKey = getStorageKey();
    localStorage.removeItem(storageKey);

    setSelectedYear(new Date().getFullYear().toString());
    setSelectedMonth(MONTHS[new Date().getMonth()]);
    setTotalMonthlyIncome('');
    setCurrentExpenseAmount('');
    setCurrentExpenseCategory('');
    setExpenses([]);
  };

  const getTopCategories = () => {
    const categoryTotals: { [key: string]: number } = {};
    expenses.forEach((expense) => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });
    return Object.entries(categoryTotals)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);
  };

  const progressColor =
    budgetUtilizationPercentage > 100 ? 'bg-clay' : budgetUtilizationPercentage > 80 ? 'bg-gold-400' : 'bg-gold-500';

  return (
    <div id="budget-calculator-content" className="bg-paper-hi border border-ink-300 p-4 md:p-8 rounded-lg shadow-lg max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-ink-900 mb-2">Buget personal</h2>
          <p className="text-sm md:text-base text-ink-600 mb-6">
            Setează perioada (lună), introdu venitul și cheltuielile. Datele se salvează local pe fiecare lună.
          </p>

          {/* Period and Income */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-ink-700 mb-2">Perioada</label>
              <div className="grid grid-cols-2 gap-2">
                <SelectField value={selectedYear} onChange={setSelectedYear} options={[{ value: selectedYear, label: selectedYear }]} />
                <SelectField value={selectedMonth} onChange={setSelectedMonth} options={MONTHS.map((m) => ({ value: m, label: m }))} />
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-500">Anul și luna pentru care înregistrezi bugetul. Fiecare lună se salvează separat.</p>
            </div>
            <InputField
              label="Venit lunar total (RON)"
              hint="Toate veniturile nete care îți intră într-o lună: salariu, chirii, freelancing, dividende etc."
              type="number"
              value={totalMonthlyIncome}
              onChange={setTotalMonthlyIncome}
              placeholder="10000"
            />
          </div>

          {/* Add Expense */}
          <h3 className="font-display text-lg text-ink-900 mb-4">Adaugă cheltuială</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <InputField
              label="Sumă (RON)"
              hint="Cât ai cheltuit pentru această categorie în luna selectată."
              type="number"
              value={currentExpenseAmount}
              onChange={setCurrentExpenseAmount}
              placeholder="0"
            />
            <SelectField
              label="Categorie"
              hint="Tipul cheltuielii, ca să vezi pe ce se duc cei mai mulți bani."
              value={currentExpenseCategory}
              onChange={setCurrentExpenseCategory}
              options={EXPENSE_CATEGORIES.map((c) => ({ value: c, label: c }))}
            />
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <Button variant="gold" onClick={handleAddExpense} className="justify-center">
              Adaugă cheltuială
            </Button>
            <Button variant="ghost" onClick={() => setShowResetConfirmation(true)} className="justify-center">
              Resetare
            </Button>
            <Button variant="primary" onClick={handleExportPdf} className="justify-center">
              Exportă PDF
            </Button>
          </div>

          {/* Expenses List */}
          <h3 className="font-display text-lg text-ink-900 mb-4">Cheltuieli</h3>
          <div className="bg-paper border border-ink-300 p-4 rounded-lg min-h-[200px]">
            {expenses.length === 0 ? (
              <p className="text-ink-500 text-center py-8 text-sm">Nu există cheltuieli adăugate pentru această perioadă</p>
            ) : (
              <div className="space-y-2">
                {expenses.map((expense, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-paper-hi rounded-lg border border-ink-300">
                    <span className="text-ink-700 flex-1 text-sm mr-2">{expense.category}</span>
                    <span className="font-mono text-ink-900 mr-3 text-sm whitespace-nowrap">{expense.amount} RON</span>
                    <button
                      onClick={() => handleDeleteExpense(index)}
                      className="text-clay hover:opacity-70 transition-opacity p-1 flex-shrink-0"
                      aria-label="Șterge cheltuiala"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="font-display text-xl text-ink-900 mb-4">
            Sumar — {selectedMonth} {selectedYear}
          </h3>

          {/* Summary */}
          <div className="bg-paper border border-ink-300 p-4 md:p-6 rounded-lg mb-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-ink-600 text-sm md:text-base">Venit:</span>
                <span className="font-mono text-sage text-sm md:text-base">{totalMonthlyIncome || 0} RON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink-600 text-sm md:text-base">Cheltuieli:</span>
                <span className="font-mono text-clay text-sm md:text-base">{totalExpenses} RON</span>
              </div>
              <div className="border-t border-ink-300 pt-3 flex justify-between">
                <span className="text-ink-900 font-semibold text-sm md:text-base">Balanță:</span>
                <span className={`font-mono font-bold text-sm md:text-base ${balance >= 0 ? 'text-sage' : 'text-clay'}`}>{balance} RON</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-ink-700">Buget utilizat</span>
              <span className="text-sm text-ink-500">{budgetUtilizationPercentage}%</span>
            </div>
            <div className="w-full bg-ink-200 rounded-full h-3">
              <div className={`h-3 rounded-full ${progressColor}`} style={{ width: `${Math.min(budgetUtilizationPercentage, 100)}%` }} />
            </div>
          </div>

          {/* Pie Chart */}
          <div className="mb-6">
            <h4 className="font-display text-lg text-ink-900 mb-4">Distribuția cheltuielilor</h4>
            <div className="bg-paper border border-ink-300 rounded-lg h-64">
              {expenses.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-paper-lo border border-ink-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-ink-500 text-sm">Grafic circular</span>
                    </div>
                    <p className="text-ink-500 text-sm">Nu există date pentru afișare</p>
                  </div>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieChartData} cx="50%" cy="50%" innerRadius={40} outerRadius={80} paddingAngle={2} dataKey="value">
                      {pieChartData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={chartTooltipStyle}
                      itemStyle={{ color: chartColors.ink }}
                      formatter={(value, _name, item) => [`${value} RON`, item?.payload?.name ?? 'Sumă']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="font-display text-lg text-ink-900 mb-4">Top categorii după cheltuieli</h4>
            <div className="space-y-3">
              {getTopCategories().length === 0 ? (
                <div className="flex justify-between items-center p-3 bg-paper border border-ink-300 rounded-lg">
                  <span className="text-ink-600 text-sm">Nu există date</span>
                  <span className="font-mono text-sm text-ink-900">0 RON</span>
                </div>
              ) : (
                getTopCategories().map(([category, amount], index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center p-3 bg-paper border border-ink-300 rounded-lg gap-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-3 flex-shrink-0" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                      <span className="text-ink-600 text-sm">{category}</span>
                    </div>
                    <span className="font-mono text-sm ml-6 md:ml-0 text-ink-900">
                      {amount} RON ({totalExpenses > 0 ? Math.round((amount / totalExpenses) * 100) : 0}%)
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirmation && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-paper-hi border border-ink-300 p-6 rounded-xl shadow-lg max-w-md w-full mx-4">
            <h3 className="font-display text-xl text-ink-900 mb-4">Ești sigur că vrei să ștergi TOATĂ luna curentă?</h3>
            <div className="flex gap-4">
              <button onClick={handleReset} className="flex-1 bg-clay text-paper py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity font-medium">
                DA
              </button>
              <Button variant="ghost" onClick={() => setShowResetConfirmation(false)} className="flex-1 justify-center">
                NU
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BugetCalculator;
