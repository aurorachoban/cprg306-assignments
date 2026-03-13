"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "../item-list";
import NewItem from "../NewItem";
import MealIdeas from "../MealIdeas";
import itemsData from "./items.json";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    if (!user) {
        router.push("/week-9");
        return null;
    }

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (item) => {
        const cleanedName = item.name
            .split(",")[0]
            .replace(/[^\p{L}\p{N}\s]/gu, "")
            .trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="flex flex-col items-center p-8">
            <h1 className="text-2xl font-bold text-pink-400 text-center p-6">
                Shopping List
            </h1>
            <div className="flex flex-row gap-8 w-full max-w-5xl items-start">
                <div className="flex flex-col gap-8 flex-1">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}