import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="bg-pink-400 dark:bg-pink-400 border-b-2 border-pink-700 shadow-md">
            <div className="w-full px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="shrink-0">
                        <Link 
                            href="/" 
                            className="text-xl font-bold text-white dark:text-black hover:text-black dark:hover:text-white transition border-2 border-white dark:border-black hover:border-black dark:hover:border-white rounded-full px-4 py-2"
                        >
                            CPRG306: Web Development 2 - Assignments
                        </Link>
                    </div>

                    <div className="flex space-x-8">
                        <Link 
                            href="/week-2" 
                            className="text-white dark:text-black hover:text-black dark:hover:text-white hover:font-bold transition"
                        >
                            Week 2
                        </Link>
                        <Link 
                                href="/week-3" 
                                className="text-white dark:text-black hover:text-black dark:hover:text-white hover:font-bold transition"
                        >
                            Week 3
                        </Link>
                        <Link 
                            href="/week-4" 
                            className="text-white dark:text-black hover:text-black dark:hover:text-white hover:font-bold transition"
                        >
                            Week 4
                        </Link>
                        <Link 
                            href="/week-5" 
                            className="text-white dark:text-black hover:text-black dark:hover:text-white hover:font-bold transition"
                        >
                            Week 5
                        </Link>
                        <Link 
                            href="/week-6" 
                            className="text-white dark:text-black hover:text-black dark:hover:text-white hover:font-bold transition"
                        >
                            Week 6
                        </Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}