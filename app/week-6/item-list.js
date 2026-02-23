"use client";

import { useState } from "react";
import Item from './item';

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    const renderItems = () => {
        if (sortBy === "category") {
            const grouped = [...items]
                .reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                }, {});

            return Object.keys(grouped)
                .sort()
                .map((category) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-xl font-bold capitalize mb-2 text-pink-400 dark:text-pink-300">
                            {category}
                        </h2>
                        <ul className="space-y-2">
                            {grouped[category]
                                .sort((a, b) => a.name.localeCompare(b.name))
                                .map((item) => (
                                    <Item
                                        key={item.id}
                                        name={item.name}
                                        quantity={item.quantity}
                                        category={item.category}
                                    />
                                ))}
                        </ul>
                    </div>
                ));
        }

        const sortedItems = [...items].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        return (
            <ul className="space-y-2">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        );
    };

    const buttonClass = (mode) =>
        `px-4 py-2 rounded-lg font-semibold transition duration-200 ${
            sortBy === mode
                ? "bg-pink-500 text-white"
                : "bg-pink-200 text-pink-800 hover:bg-pink-300"
        }`;

    return (
        <div>
            <div className="mt-6 w-full">
                <button onClick={() => setSortBy("name")} className={buttonClass("name")}>
                    Sort by Name
                </button>
                <button onClick={() => setSortBy("category")} className={buttonClass("category")}>
                    Group by Category
                </button>
            </div>

            {renderItems()}
        </div>
    );
}