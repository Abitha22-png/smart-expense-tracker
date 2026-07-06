export default function Filters({ filter, setFilter }: any) {
  return (
    <div className="flex gap-3 mb-4">
      <select
        onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        className="border border-emerald-300 bg-emerald-100 text-emerald-900 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
      >
        <option value="">All Categories</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <select
        onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
        className="border border-emerald-300 bg-emerald-100 text-emerald-900 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
      >
        <option value="">Sort</option>
        <option value="recent">Recent</option>
        <option value="high">Highest</option>
      </select>
    </div>
  );
}