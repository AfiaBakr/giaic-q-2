import Link from "next/link";


export default function Navbar (){
    return (<div>
        <Link href="/">Home</Link><br />
        <Link href="/about">About</Link>
        </div>
    )
}