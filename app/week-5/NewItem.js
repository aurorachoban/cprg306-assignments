"use client";

import { useState } from "react";

export default function NewItem() {
    // Initialize state variables
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

    // Create item object
        const item = {
            name: name,
            quantity: quantity,
            category: category
        };
        console.log(item);
    

    // Display user feedback
    alert(`Added ${quantity} ${name}(s) to the ${category} category!`);

    // Reset form fields
    setName("");
    setQuantity(1);
    setCategory("produce");
    };

return (
    <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-2xl w-full border-2 border-pink-400"
    >

       {/* Title */}
            <h1 className="text-2xl font-bold text-pink-400 dark:text-pink-300 mb-8">
                Add New Item
            </h1>

        {/* Name Field */}
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 text-lg font-semibold mb-2">
                Item Name:
            </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
                required
                placeholder="eg., Apples"
            />
        </div>

        {/* Quantity and Category Row */}
        <div className="flex gap-4 mb-4">
            {/* Quantity Field */}
            <div className="flex-1">
                <label htmlFor="quantity" className="block text-gray-700 dark:text-gray-200 text-lg font-semibold mb-2">
                    Quantity:
                </label>
                <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300"
                    required
                />
            </div>

           {/* Category Field */}
                <div className="flex-1">
                    <label htmlFor="category" className="block text-gray-700 dark:text-gray-200 text-lg font-semibold mb-2">
                        Category:
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300 cursor-pointer"
                    >
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

        {/* Submit Button */}
        <button
            type="submit"
            className="w-full bg-pink-400 dark:bg-pink-300 text-white dark:text-gray-900 text-lg font-bold py-3 px-6 rounded-lg hover:bg-pink-300 dark:hover:bg-white transition duration-200 shadow-lg"
            >
            +
        </button>
    </form>
);
}