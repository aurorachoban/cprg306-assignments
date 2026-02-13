import HomeButton from "../components/HomeButton";
import NewItem from "./NewItem";

export default function Page() {
    return (
        <>
            <HomeButton />

            <main className="flex flex-col items-center text-center justify-center">
                <h1 className="text-2xl font-bold text-pink-400 text-center p-6">
                    Basic Interactivity
                </h1>
                <NewItem />
            </main>
        </>
    );
}