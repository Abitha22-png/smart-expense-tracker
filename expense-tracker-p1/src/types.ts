export type Expense = {
  id: string;
  amount: number;
  category: "Food" | "Travel" | "Bills" | "Others";
  date: string;
  note: string;
};