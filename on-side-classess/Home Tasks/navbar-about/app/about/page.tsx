import Link from "next/link";
import Image from "./public/sirzia.jpg";

export default function About (){
    return(<div>
        
        <div className="m-6 text-justify">
        <h1><b className="text-2xl">I</b>t's to be proud to me, I'm a GIAIC student of Quarter 2. Thanks to Governor Sindh Kamran Tessori, Sir Zia, Sir Daniyal and Sir Ameen, who provide us, spacially for old citizen like me, a chance to learn AI, web 3.0 and Metavers. I am also thankful to slot teacher Sir Okasha and Sir Ateeqe, who learn us Type Script and Java Scrpit with highly patience and quality skills and I was able clear my quarter-1 exam. Now I am Attend to same slot class and avail good experience with Sir Jawwad.</h1><br/>
        </div>
           <section className="section gallery"> 
            <div className="gallery-container flex-wrap space-x-6"> 
                <div className="gallery-item bg-clip-padding">   
        <div className="@container flex items-justify justify-center gap-14">
        <div className="ring-2 ring-cyan-600 shadow-blue-900 shadow-xl hover: hover:scale-110 transition-transform 0.4s ease  border-mono-8 bg-mono-8 relative h-300 w-300shrink-0 overflow-hidden rounded-xl border">
            
        <img src="sirzia.jpg"
        alt="Picture"
        width={200}
        height={200} ></img>
        <h1 className="text-center">Sir Zia Khan</h1>
        </div>
        <div className="ring-2 ring-cyan-600 shadow-blue-900 shadow-xl hover: hover:scale-110 transition-transform 0.4s ease border-mono-8 bg-mono-8 relative h-300 w-300shrink-0 overflow-hidden rounded-xl border">
        <Link  href="./public/sirdaniyal.jpg"></Link>
        <img src="sirdaniyal.jpg"
        alt="Picture"
        width={200}
        height={200} ></img>
        <h1 className="text-center">Sir Daniyal Nagori</h1>
        </div>

        <div className="ring-2 ring-cyan-600 shadow-blue-900 shadow-xl hover: hover:scale-110 transition-transform 0.4s ease border-mono-8 bg-mono-8 relative h-300 w-300shrink-0 overflow-hidden rounded-xl border">
        <Link  href="./public/sirameen.jpg"></Link>
        <img src="sirameen.jpg"
        alt="Picture"
        width={200}
        height={200} ></img>
        <h1 className="text-center">Sir Ameen Alam</h1>
        </div>

        <div className="ring-2 ring-cyan-600 shadow-blue-900 shadow-xl hover: hover:scale-110 transition-transform 0.4s ease border-mono-8 bg-mono-8 relative h-300 w-300shrink-0 overflow-hidden rounded-xl border">
        <Link  href="./public/sirokasha.jpg"></Link>
        <img src="sirokasha.jpg"
        alt="Picture"
        width={200}
        height={200} ></img>
        <h1 className="text-center">Sir Okasha Ajaz</h1>
        </div>

        <div className="ring-2 ring-cyan-600 shadow-blue-900 shadow-xl hover: hover:scale-110 transition-transform 0.4s ease border-mono-8 bg-mono-8 relative h-300 w-300shrink-0 overflow-hidden rounded-xl border">
        <Link  href="./public/alijawwad.jpg"></Link>
        <img src="alijawwad.jpg"
        alt="Picture"
        width={200}
        height={200} ></img>
        <h1 className="text-center">Sir Ali Jawad</h1>
        </div>
        </div>
        </div>
        </div>
        </section><br/><br/><br/>
        
        </div>
        
        )
}
        