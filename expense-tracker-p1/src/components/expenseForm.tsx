import { useState } from "react";
import type { Expense } from "../types";

type Props = {
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

export default function ExpenseForm({ setExpenses }: Props) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState<Expense["category"]>("Food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
      id: Date.now().toString(),
      amount: Number(amount),
      category,
      date,
      note,
    };

    setExpenses((prev) => [newExpense, ...prev]);

    setAmount("");
    setDate("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as any)}
        className="border p-2 w-full mb-2"
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Expense
      </button>
    </form>
  );
}