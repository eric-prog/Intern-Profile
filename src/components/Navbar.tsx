import Link from "next/link";


export function Navbar() {
    return (
        <div className="flex flex-row justify-center text-xl bg-blue-100 py-10">
            <Link className="mx-6" href="/">Home</Link>
            <Link className="mx-6" href="/setup">Setup</Link>
            <Link className="mx-6" href="/questions">Questions</Link>
        </div>
    )
}