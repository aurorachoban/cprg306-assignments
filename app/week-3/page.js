import GroceryItemList from "./GroceryItemList";

export const metadata = {
  title: "Shopping List",
};

export default function Page() {
  return (
    <>
    <main className="flex flex-col items-center text-center justify-center">
      <h1 className="text-2xl font-bold text-pink-400 text-center p-6">
        Shopping List
      </h1>
      <GroceryItemList />
    </main>
    </>
  );
}