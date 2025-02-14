import Image from "./public/flag.jpg";
import React from "react";

export default function Home() {
  return (
    <main>
      <div className="bg-cover bg-center h-screen " style={{backgroundImage: "url('/image/bg.jpg')"}}>
        
     <div className="flex item-justify justify-center ">
      <h1 className=" text-black text-8xl">Hello World</h1><br></br>
      </div>
      <div className="flex item-justify justify-center ">
      <img src="flag.jpg"
      alt="Flag"
      width={550}
      height={425} ></img><br>
      </br>
      </div>
      <div className="flex item-justify justify-center ">
      <a href="flag.jpg" className="text-green-800 text-6xl text-center">It is to be proud for me <br></br>to be Pakistani.<br></br> Pakistan Zindabad !
      </a>
    </div>
    </div>
    </main>  );
}
