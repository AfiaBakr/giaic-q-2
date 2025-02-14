import Link from "next/link"


export default function Navbar (){
    return(<div>
        <div className="bg-blue-800 min-h-28" >
            <div className="flex justify-between items-center ">
                <h1 className="text-5xl  text-cyan-300 m-7">Afia Bakr</h1>
            <ul className="flex gap-6  text-cyan-300 m-7">
                <Link href="./">Home</Link>
                <Link href="./about">About</Link>
                <Link href="./gallery">Gallery</Link>
                
            </ul></div>
            </div>
    
            
            
        </div>
    )
}