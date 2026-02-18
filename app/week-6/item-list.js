import Item from './item';
import items from './items.json';

export default function ItemList() {
    const groupedItems = items.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});

const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div>
      {sortedCategories.map((category) => (
        <div key={category} className=" mb-6">
          <h2 className="text-xl font-bold capitalize mb-2 text-indigo-400 dark:text-indigo-200">{category}</h2>
          <ul className="space-y-2">
            {groupedItems[category].map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}