import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div className="flex flex-col p-8">
            <h2 className="text-pink-400 dark:text-pink-300 mb-4"> 
                Name: Aurora Choban 
            </h2>
            <p className="text-gray-700 dark:text-gray-300"> 
                Github: 
                <Link 
                    href="https://github.com/aurorachoban/cprg306-assignments" 
                    target="_blank"
                    className="text-pink-400 dark:text-pink-300 hover:text-pink-300 dark:hover:text-white hover:font-bold underline ml-2"
                > 
                    aurorachoban/cprg306-assignments 
                </Link>
            </p>
        </div>
    );
}