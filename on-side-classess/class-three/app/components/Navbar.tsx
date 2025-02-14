import Link from "next/link";

export default function Navbar (){
    return(
        <header>
            <nav>
                <ul>
                    <li>
                    <Link href="./catogray">Catogray</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}