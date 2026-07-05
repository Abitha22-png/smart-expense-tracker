import { PieChart, Pie, Cell, Tooltip } from "recharts";
import type { Expense } from "../types";

export default function Charts({ expenses }: { expenses: Expense[] }) {
  const dataMap: any = {};

  expenses.forEach((e) => {
    dataMap[e.category] = (dataMap[e.category] || 0) + e.amount;
  });

  const data = Object.keys(dataMap).map((key) => ({
    name: key,
    value: dataMap[key],
  }));

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"];

  return (
    <div className="bg-white p-4 mt-4 shadow">
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" outerRadius={100}>
          {data.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}