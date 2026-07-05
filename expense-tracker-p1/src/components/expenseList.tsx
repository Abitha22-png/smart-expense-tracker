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
    <div className="grid gap-3">
      {data.map((e) => (
        <div key={e.id} className="bg-white p-3 shadow flex justify-between">
          <div>
            <h2 className="font-bold">{e.category}</h2>
            <p>{e.note}</p>
            <p className="text-sm text-gray-500">{e.date}</p>
          </div>

          <div className="text-right">
            <p className="font-bold">₹{e.amount}</p>
            <button onClick={() => deleteExpense(e.id)} className="text-red-500">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}