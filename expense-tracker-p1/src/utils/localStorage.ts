import type { Expense } from "../types";
const KEY = "expenses";

export const getExpenses = (): Expense[] => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveExpenses = (expenses: Expense[]) => {
  localStorage.setItem(KEY, JSON.stringify(expenses));
};