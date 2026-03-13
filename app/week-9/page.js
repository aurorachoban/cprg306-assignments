"use client";

import { useUserAuth } from "../contexts/AuthContext";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-8">
            <h1 className="text-2xl font-bold text-pink-400 text-center p-6">
                Shopping List
            </h1>

            {user ? (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-2 border-pink-400 flex flex-col items-center gap-6">
                    <p className="text-gray-700 dark:text-gray-200 text-lg">
                        Welcome, <span className="font-bold text-pink-400">{user.displayName}</span> ({user.email})
                    </p>
                    <Link
                        href="/week-9/shopping-list"
                        className="w-full text-center bg-pink-400 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-pink-300 transition duration-200 shadow-lg"
                    >
                        Go to Shopping List
                    </Link>
                    <button
                        onClick={handleSignOut}
                        className="w-full border-2 border-pink-400 text-pink-400 text-lg font-bold py-3 px-6 rounded-lg hover:bg-pink-50 dark:hover:bg-gray-700 transition duration-200"
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl border-2 border-pink-400 flex flex-col items-center gap-6">
                    <p className="text-gray-500 dark:text-gray-400">
                        Please sign in to continue.
                    </p>
                    <button
                        onClick={handleSignIn}
                        className="w-full bg-pink-400 text-white text-lg font-bold py-3 px-6 rounded-lg hover:bg-pink-300 transition duration-200 shadow-lg"
                    >
                        Sign in with GitHub
                    </button>
                </div>
            )}
        </main>
    );
}