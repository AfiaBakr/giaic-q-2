import Link from "next/link";

export default function Navbar(){
    return(
        <div className=" bg-cyan-400 h-20 ">
            <div className="flex  text-black item-justify justify-between">
                <h1 className="m-6 text-3xl">Afia Bakr</h1>
                
                <div className="flex  text-black item-justify justify-between  text-xl">
            <Link className="m-6" href="/">Home</Link>                       
            <Link className="m-6" href="/about">About</Link>
        </div>
        </div>
        </div>
    )
}