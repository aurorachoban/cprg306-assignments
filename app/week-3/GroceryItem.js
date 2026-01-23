export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 bg-stone-200 dark:bg-slate-800 rounded-lg w-150">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-pink-500 dark:text-pink-300">
          {name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-100">
          Quantity: {quantity}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-100">
          Category: {category}
        </span>
      </div>
    </li>
  );
}