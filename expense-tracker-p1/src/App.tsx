import { useEffect, useState } from "react";
import type { Expense } from "./types";
import { getExpenses, saveExpenses } from "./utils/localStorage";
import ExpenseForm from "./components/expenseForm";
import ExpenseList from "./components/expenseList";
import Summary from "./components/summary";
import Filters from "./components/filters";
import Charts from "./components/charts";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>(getExpenses());

  const [filter, setFilter] = useState({
    category: "",
    sort: "",
  });

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Smart Expense Tracker 💰
      </h1>

      <ExpenseForm setExpenses={setExpenses} />

      <Summary expenses={expenses} />

      <Filters filter={filter} setFilter={setFilter} />

      <ExpenseList
        expenses={expenses}
        setExpenses={setExpenses}
        filter={filter}
      />

      <Charts expenses={expenses} />
    </div>
  );
}

export default App;