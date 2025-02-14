import Link from "next/link";
import { FaMobileAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <div>
    <div className="bg-black h-28">
      <div className="flex gap-2">
        <div className="flex border  text-white border-slate-50 rounded-lg h-8 mt-2 mx-6  ">
          <FaMobileAlt className="m-2" />
          <ul className="flex justify-between">
            <li className="text-white pt-1">Download App via SMS</li>
            <li className="mx-64"></li>
            <li ><img className="ml-80 mr-3 " src="urdu1.jpg" 
            rel="urdu" 
            width={25} 
            height={25} /></li>
          </ul>
        </div>
        <ul className="text-white flex gap-10 my-2 ml-10 mr-6">
          <li>sign Up</li>
          <li>sign In</li>
        </ul>
      </div>

      <div className="flex justify-between my-2 mx-6 ">
        
          <img src="logo.jpg" 
          alt="Pak Wheel Logo" 
          width={200} 
          height={70} />
        
        <ul className="flex justify-between gap-8 mt-6 text-white">
          <li>Used Cars</li>
          <li>New Cars</li>
          <li>Bikes</li>
          <li>Auto Stores</li>
          <li>Videos</li>
          <li>Forums</li>
          <li>Blogs</li>
          <li>More</li>
          <li className="bg-red-700 h-7 px-2">Post an Ad</li>
        </ul>
      </div>
    </div>
    </div>
  );
}
