import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-pink-400 dark:text-pink-300 text-center font-bold text-2xl p-6"> 
          CPRG 306: Web Development 2 - Assignments
        </h1>
      </main>

         <nav className="flex gap-4 p-2 text-center justify-center">
        <p>
          <Link href="/week-2" 
            target= "_none" 
            className="text-pink-400 dark:text-pink-300 hover:text-pink-300 dark:hover:text-white hover:font-bold hover:underline">
              Week 2 </Link>
        </p>
        <p>
          <Link href="/week-3" 
            target= "_none" 
            className="text-pink-400 dark:text-pink-300 hover:text-pink-300 dark:hover:text-white hover:font-bold hover:underline">
              Week 3 </Link>
        </p>
      </nav>
    </>
  );
}   