import Link from "next/link";

export default function HomeButton() {
    return (
        <div className="absolute top-2 left-6">
            <Link href="/"
            className="text-pink-400 dark:text-pink-300 hover:text-pink-300 dark:hover:text-white text-5xl font-extrabold"
            > ← 
            </Link>
        </div>
    );
}