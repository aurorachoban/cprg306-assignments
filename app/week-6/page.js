"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="flex flex-col items-center justify-center p-8">
            <h1 className="text-2xl font-bold text-pink-400 text-center p-6">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <div className="mt-8 w-full max-w-2xl">
                <ItemList items={items} />
            </div>
        </main>
    );
}