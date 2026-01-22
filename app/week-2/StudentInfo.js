import Link from 'next/link';

export default function StudentInfo() {
    return (
        <div>
            <h2> Name: Aurora Choban </h2>
            <p> 
                Github: <Link href="https://github.com/aurorachoban/cprg306-assignments" className="underline"> aurorachoban/cprg306-assignments </Link>
            </p>
        </div>
    );
}