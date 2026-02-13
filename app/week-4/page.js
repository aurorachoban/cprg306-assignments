import ItemList from "./item-list";


export const metadata = {
  title: "Shopping List 2",
};

export default function Page() {
  return (
    <>
        <main className="flex flex-col items-center text-center justify-center">
        <h1 className="text-2xl font-bold text-pink-400 text-center p-6">
            Shopping List 2
        </h1>
        <ItemList />
        </main>
    </>
  );
}
