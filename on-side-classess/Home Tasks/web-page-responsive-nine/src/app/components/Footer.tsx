import Link from "next/link"


export default function Footer (){
    return(
        <div className="bg-black h-24">
         <div className="flex justify-between  pt-8 px-10 md:px-28 text-white text-lg md:text-2xl">
            
            <Link className="border border-white px-2 py-1 rounded-lg" href="/">Go to Home</Link>
            <div className=" flex gap-2 md:gap-4">
            <h1><b>Made By :</b></h1>
            <Link href="https://www.linkedin.com/in/afia-bakr-a2866aa8/" target="_blank"><b>Afia Bakr</b></Link>
        </div>   
        </div>   
            
            
        </div>
    )
}