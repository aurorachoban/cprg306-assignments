import HomeButton from "../components/HomeButton";
import StudentInfo from "./StudentInfo";

export const metadata = {
  title: "Student Information",
};

export default function Page() {
    return (
        <>
            <HomeButton />
        <main className="flex flex-col items-center text-center justify-center">
            <h1 className="text-2xl font-bold text-pink-400 text-center p-6">Student Information</h1>
            <StudentInfo />
        </main>
        </>
    );
}