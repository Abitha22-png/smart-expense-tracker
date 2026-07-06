import type { Expense } from "../types";
type Props = {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  filter: any;
};

export default function ExpenseList({ expenses, setExpenses, filter }: Props) {
  let data = [...expenses];

  if (filter.category) {
    data = data.filter((e) => e.category === filter.category);
  }

  if (filter.sort === "high") {
    data.sort((a, b) => b.amount - a.amount);
  }

  if (filter.sort === "recent") {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="grid gap-4">
  {data.map((e) => (
    <div
      key={e.id}
      className="bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex justify-between items-center"
    >
      <div>
        <h2 className="text-lg font-bold text-emerald-700">
          {e.category}
        </h2>

        <p className="text-gray-700">{e.note}</p>

        <p className="text-sm text-gray-500 mt-1">
           {e.date}
        </p>
      </div>

      <div className="text-right">
        <p className="text-xl font-bold text-green-600 mb-2">
          ₹{e.amount}
        </p>

        <button
          onClick={() => deleteExpense(e.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 shadow"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
  );
}