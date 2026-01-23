export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-stone-200 dark:bg-slate-800 rounded-lg">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-pink-500 dark:text-pink-300">
          {name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-100">
          Quantity: {quantity}  |   Category: {category}
        </span>
      </div>
    </li>
  );
}