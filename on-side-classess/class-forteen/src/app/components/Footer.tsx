import { BiMobileVibration } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
export default function Footer (){
    return(
        <div className="flex justify-between items-center  bg-blue-800 min-h-32">
                   
            <div className="text-cyan-300 mt-5 text-4xl ml-10">
            <h1>Contact me</h1>
            </div>
            <div className="flex text-justify justify-center gap-32 ">
        <div className="text-justify justify-center mt-7 ">
            
        <div className="flex  gap-2 text-xl">
            <BiMobileVibration /><p className="text-cyan-300">+923343536883</p>            
        </div>
        <div className="flex gap-2 text-xl">
            <FaWhatsapp /><p className="text-cyan-300">+923425912313</p>
        </div>
        </div>
        <div className="text-justify justify-center mt-7 mr-10">
        <div className="flex gap-3 text-xl">
            <FaGithub /><p className="text-cyan-300">AfiaBakr</p>
        </div>
        <div className="flex gap-3 text-xl">
            <FaLinkedin /><p className="text-cyan-300">Afia Bakr</p>
        </div>
        </div>
        </div>
        </div>
        
    )
}