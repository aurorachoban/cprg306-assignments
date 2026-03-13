export default function Item({ name, quantity, onSelect }) {
    return (
    <li
        onClick={onSelect}
        className="p-4 bg-indigo-50 dark:bg-slate-800 rounded-lg w-150 border-2 border-pink-500 dark:border-pink-400 cursor-pointer hover:bg-pink-50 dark:hover:bg-slate-700 transition duration-200"
    >
        <div className="flex flex-col">
        <span className="text-lg font-bold text-pink-500 dark:text-pink-300">
          {name}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-100">
          Quantity: {quantity}
        </span>
        </div>
    </li>
    );
}