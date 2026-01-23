import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="flex flex-col items-center text-center justify-center">
      <h1 className="text-3xl font-bold text-pink-300 text-center p-4">
        Shopping List
      </h1>
      <GroceryItemList />
    </main>
  );
}