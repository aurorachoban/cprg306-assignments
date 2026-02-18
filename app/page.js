import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 -mt-20">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-400 dark:text-pink-300 mb-4">
          ⋆✴︎˚｡⋆.˚ Welcome! ⋆✴︎˚｡⋆.˚
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          CPRG 306: Web Development 2 - Assignments
        </p>
      </div>

      {/* Week Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
        <Link 
          href="/week-2"
          className="bg-white dark:bg-gray-800 border-2 border-pink-400 rounded-lg p-8 text-center hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-105 transition transform shadow-lg"
        >
          <h2 className="text-3xl font-bold text-pink-400 dark:text-pink-300">
            Week 2
          </h2>
        </Link>

        <Link 
          href="/week-3"
          className="bg-white dark:bg-gray-800 border-2 border-pink-400 rounded-lg p-8 text-center hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-105 transition transform shadow-lg"
        >
          <h2 className="text-3xl font-bold text-pink-400 dark:text-pink-300">
            Week 3
          </h2>
        </Link>

        <Link 
          href="/week-4"
          className="bg-white dark:bg-gray-800 border-2 border-pink-400 rounded-lg p-8 text-center hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-105 transition transform shadow-lg"
        >
          <h2 className="text-3xl font-bold text-pink-400 dark:text-pink-300">
            Week 4
          </h2>
        </Link>

        <Link 
          href="/week-5"
          className="bg-white dark:bg-gray-800 border-2 border-pink-400 rounded-lg p-8 text-center hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-105 transition transform shadow-lg"
        >
          <h2 className="text-3xl font-bold text-pink-400 dark:text-pink-300">
            Week 5
          </h2>
        </Link>

        <Link 
          href="/week-6"
          className="bg-white dark:bg-gray-800 border-2 border-pink-400 rounded-lg p-8 text-center hover:bg-pink-50 dark:hover:bg-gray-700 hover:scale-105 transition transform shadow-lg"
        >
          <h2 className="text-3xl font-bold text-pink-400 dark:text-pink-300">
            Week 6
          </h2>
        </Link>
        
      </div>
    </main>
  );
}