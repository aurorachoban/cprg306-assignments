"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    fetchMealIdeas(ingredient).then((fetchedMeals) => {
      setMeals(fetchedMeals);
    });
  }, [ingredient]);

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-2xl w-full border-2 border-pink-400">
      <h2 className="text-2xl font-bold text-pink-400 dark:text-pink-300 mb-8">
        Meal Ideas for{" "}
        <span className="capitalize">{ingredient || "..."}</span>
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-6">
          {ingredient
            ? "No meals found for this ingredient."
            : "Select an item to see meal ideas."}
        </p>
      ) : (
        <ul className="space-y-3">
          {meals.map((meal) => (
            <li
              key={meal.idMeal}
              className="flex items-center gap-4 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-3 hover:border-pink-400 dark:hover:border-pink-300 transition duration-200"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-14 h-14 rounded-lg object-cover shrink-0"
              />
              <span className="text-gray-900 dark:text-white font-semibold">
                {meal.strMeal}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}