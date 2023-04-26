import Link from "next/link";


export function Navbar() {
    return (
        <div>
            <Link className="" href="/">Home</Link>
            <Link className="" href="/setup">Setup</Link>
            <Link className="" href="/questions">Questions</Link>
        </div>
    )
}