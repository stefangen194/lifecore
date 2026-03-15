import React from 'react';
import { Calculator, PiggyBank, DollarSign, Target, CreditCard, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const BugetCalculator: React.FC = () => {
  // Calculator state
  const [selectedYear, setSelectedYear] = React.useState(() => {
    return new Date().getFullYear().toString();
  });
  const [selectedMonth, setSelectedMonth] = React.useState(() => {
    const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 
                   'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
    return months[new Date().getMonth()];
  });
  const [totalMonthlyIncome, setTotalMonthlyIncome] = React.useState('');
  const [currentExpenseAmount, setCurrentExpenseAmount] = React.useState('');
  const [currentExpenseCategory, setCurrentExpenseCategory] = React.useState('');
  const [expenses, setExpenses] = React.useState<Array<{amount: number, category: string}>>([]);
  const [showResetConfirmation, setShowResetConfirmation] = React.useState(false);

  // Generate storage key based on selected period
  const getStorageKey = () => `budget_${selectedYear}_${selectedMonth}`;

  // Load data from localStorage when component mounts or period changes
  React.useEffect(() => {
    const storageKey = getStorageKey();
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setTotalMonthlyIncome(parsedData.totalMonthlyIncome || '');
        setExpenses(parsedData.expenses || []);
      } catch (error) {
        console.error('Error loading saved budget data:', error);
      }
    } else {
      // Clear data when switching to a period with no saved data
      setTotalMonthlyIncome('');
      setExpenses([]);
    }
  }, [selectedYear, selectedMonth]);

  // Save data to localStorage whenever income or expenses change
  React.useEffect(() => {
    const storageKey = getStorageKey();
    const dataToSave = {
      totalMonthlyIncome,
      expenses
    };
    
    // Only save if there's actual data to save
    if (totalMonthlyIncome || expenses.length > 0) {
      localStorage.setItem(storageKey, JSON.stringify(dataToSave));
    } else {
      // Remove from storage if no data
      localStorage.removeItem(storageKey);
    }
  }, [totalMonthlyIncome, expenses, selectedYear, selectedMonth]);

  // Calculate totals
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const balance = (parseFloat(totalMonthlyIncome) || 0) - totalExpenses;
  const budgetUtilizationPercentage = totalMonthlyIncome ? Math.round((totalExpenses / parseFloat(totalMonthlyIncome)) * 100) : 0;

  // Colors for pie chart
  const COLORS = [
    '#3B82F6', // blue-500
    '#10B981', // emerald-500
    '#F59E0B', // amber-500
    '#EF4444', // red-500
    '#8B5CF6', // violet-500
    '#06B6D4', // cyan-500
    '#84CC16', // lime-500
    '#F97316', // orange-500
    '#EC4899', // pink-500
    '#6B7280'  // gray-500
  ];

  // Prepare data for pie chart
  const getPieChartData = () => {
    const categoryTotals: { [key: string]: number } = {};
    expenses.forEach(expense => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });
    
    return Object.entries(categoryTotals).map(([category, amount]) => ({
      name: category,
      value: amount,
      percentage: totalExpenses > 0 ? Math.round((amount / totalExpenses) * 100) : 0
    }));
  };

  const pieChartData = getPieChartData();

  // Handle PDF export
  const handleExportPdf = async () => {
    const element = document.getElementById('budget-calculator-content');
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
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
      console.error('Error generating PDF:', error);
      alert('A apărut o eroare la generarea PDF-ului. Vă rugăm să încercați din nou.');
    }
  };

  // Handle adding expense
  const handleAddExpense = () => {
    if (currentExpenseAmount && currentExpenseCategory && parseFloat(currentExpenseAmount) > 0) {
      const newExpense = {
        amount: parseFloat(currentExpenseAmount),
        category: currentExpenseCategory
      };
      setExpenses([...expenses, newExpense]);
      setCurrentExpenseAmount('');
      setCurrentExpenseCategory('');
    }
  };

  // Handle deleting individual expense
  const handleDeleteExpense = (indexToDelete: number) => {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToDelete);
    setExpenses(updatedExpenses);
  };

  // Handle reset
  const handleReset = () => {
    setShowResetConfirmation(false);
    const storageKey = getStorageKey();
    localStorage.removeItem(storageKey);
    
    setSelectedYear(new Date().getFullYear().toString());
    setSelectedMonth(() => {
      const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 
                     'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
      return months[new Date().getMonth()];
    });
    setTotalMonthlyIncome('');
    setCurrentExpenseAmount('');
    setCurrentExpenseCategory('');
    setExpenses([]);
  };

  // Get top categories by spending
  const getTopCategories = () => {
    const categoryTotals: { [key: string]: number } = {};
    expenses.forEach(expense => {
      categoryTotals[expense.category] = (categoryTotals[expense.category] || 0) + expense.amount;
    });
    return Object.entries(categoryTotals)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5);
  };

  return (
    <div id="budget-calculator-content" className="bg-white p-4 md:p-8 rounded-lg shadow-lg max-w-6xl mx-auto mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Buget personal</h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">Setează perioada (lună), introdu venitul și cheltuielile. Datele se salvează local pe fiecare lună.</p>

          {/* Period and Income */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Perioada
              </label>
              <div className="grid grid-cols-2 gap-2">
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                  style={{ height: '70px', lineHeight: '70px', padding: '0 12px' }}
                >
                  <option>{new Date().getFullYear()}</option>
                </select>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                  style={{ height: '70px', lineHeight: '70px', padding: '0 12px' }}
                >
                  <option>Ianuarie</option>
                  <option>Februarie</option>
                  <option>Martie</option>
                  <option>Aprilie</option>
                  <option>Mai</option>
                  <option>Iunie</option>
                  <option>Iulie</option>
                  <option>August</option>
                  <option>Septembrie</option>
                  <option>Octombrie</option>
                  <option>Noiembrie</option>
                  <option>Decembrie</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Venit lunar total (RON)
              </label>
              <input
                type="number"
                value={totalMonthlyIncome}
                onChange={(e) => setTotalMonthlyIncome(e.target.value)}
                className="w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                style={{ height: '70px', lineHeight: '70px', padding: '0 12px' }}
                placeholder="10000"
              />
            </div>
          </div>

          {/* Add Expense */}
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Adaugă cheltuială</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sumă (RON)
              </label>
              <input
                type="number"
                value={currentExpenseAmount}
                onChange={(e) => setCurrentExpenseAmount(e.target.value)}
                className="w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                style={{ height: '70px', lineHeight: '70px', padding: '0 12px' }}
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categorie
              </label>
              <select
                value={currentExpenseCategory}
                onChange={(e) => setCurrentExpenseCategory(e.target.value)}
                className="w-full px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 bg-white text-sm"
                style={{ height: '70px', lineHeight: '70px', padding: '0 12px' }}
              >
                <option>Selectează categoria</option>
                <option>Chirie / Rată locuință</option>
                <option>Utilități (energie, apă, gaz)</option>
                <option>Alimente / Supermarket</option>
                <option>Mâncat în oraș / Coffee / Ieșiri</option>
                <option>Transport (abonamente)</option>
                <option>Carburant</option>
                <option>Îngrijire personală</option>
                <option>Sănătate (medicamente / analize)</option>
                <option>Asigurări</option>
                <option>Datorii / Rate</option>
                <option>Educație / Cursuri</option>
                <option>Îngrijire copil / Grădiniță / Școală</option>
                <option>Divertisment</option>
                <option>Abonamente (telefon, internet, Netflix etc)</option>
                <option>Îmbrăcăminte / Încălțăminte</option>
                <option>Cadouri / Donații</option>
                <option>Vacanțe / Călătorii</option>
                <option>Animale de companie</option>
                <option>Taxe / Comisioane</option>
                <option>Investiții</option>
                <option>Economii</option>
                <option>Altele...</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <button
              onClick={handleAddExpense}
              className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium text-sm"
            >
              Adaugă cheltuială
            </button>
            <button
              onClick={() => setShowResetConfirmation(true)}
              className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
            >
              Resetare
            </button>
            <button
              onClick={handleExportPdf}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
            >
              Exportă PDF
            </button>
          </div>

          {/* Expenses List */}
          <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Cheltuieli</h3>
          <div className="bg-gray-50 p-4 rounded-lg min-h-[200px]">
            {expenses.length === 0 ? (
              <p className="text-gray-500 text-center py-8 text-sm">Nu există cheltuieli adăugate pentru această perioadă</p>
            ) : (
              <div className="space-y-2">
                {expenses.map((expense, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white rounded-lg border">
                    <span className="text-gray-700 flex-1 text-sm mr-2">{expense.category}</span>
                    <span className="font-medium text-gray-900 mr-3 text-sm whitespace-nowrap">{expense.amount} RON</span>
                    <button
                      onClick={() => handleDeleteExpense(index)}
                      className="text-red-500 hover:text-red-700 transition-colors p-1 flex-shrink-0"
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
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Sumar - {selectedMonth} {selectedYear}</h3>

          {/* Summary */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg mb-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm md:text-base">Venit:</span>
                <span className="font-medium text-green-600 text-sm md:text-base">{totalMonthlyIncome || 0} RON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 text-sm md:text-base">Cheltuieli:</span>
                <span className="font-medium text-red-600 text-sm md:text-base">{totalExpenses} RON</span>
              </div>
              <div className="border-t pt-3 flex justify-between">
                <span className="text-gray-900 font-semibold text-sm md:text-base">Balanță:</span>
                <span className={`font-bold text-sm md:text-base ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>{balance} RON</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Buget utilizat</span>
              <span className="text-sm text-gray-500">{budgetUtilizationPercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${budgetUtilizationPercentage > 100 ? 'bg-red-500' : budgetUtilizationPercentage > 80 ? 'bg-yellow-500' : 'bg-blue-600'}`}
                style={{ width: `${Math.min(budgetUtilizationPercentage, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Pie Chart Placeholder */}
          <div className="mb-6">
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Distribuția cheltuielilor</h4>
            <div className="bg-gray-100 rounded-lg h-64">
              {expenses.length === 0 ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Grafic circular</span>
                    </div>
                    <p className="text-gray-500 text-sm">Nu există date pentru afișare</p>
                  </div>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: number) => [`${value} RON`, 'Sumă']}
                      labelFormatter={(label: string) => `Categorie: ${label}`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Top categorii după cheltuieli</h4>
            <div className="space-y-3">
              {getTopCategories().length === 0 ? (
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 text-sm">Nu există date</span>
                  <span className="font-medium text-sm">0 RON</span>
                </div>
              ) : (
                getTopCategories().map(([category, amount], index) => (
                  <div key={index} className="flex flex-col md:flex-row md:justify-between md:items-center p-3 bg-gray-50 rounded-lg gap-2">
                    <div className="flex items-center">
                      <div
                        className="w-3 h-3 rounded-full mr-3 flex-shrink-0"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <span className="text-gray-600 text-sm">{category}</span>
                    </div>
                    <span className="font-medium text-sm ml-6 md:ml-0">{amount} RON ({totalExpenses > 0 ? Math.round((amount / totalExpenses) * 100) : 0}%)</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Ești sigur că vrei să ștergi TOATĂ luna curentă?
            </h3>
            <div className="flex space-x-4">
              <button
                onClick={handleReset}
                className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                DA
              </button>
              <button
                onClick={() => setShowResetConfirmation(false)}
                className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                NU
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BugetCalculator;