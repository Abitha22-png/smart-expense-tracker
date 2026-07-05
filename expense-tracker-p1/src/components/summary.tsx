import type { Expense } from "../types";

export default function Summary({ expenses }: { expenses: Expense[] }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="bg-white p-4 mb-4 shadow">
      <h2 className="text-xl font-bold">Total: ₹{total}</h2>
    </div>
  );
}