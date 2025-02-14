

import { MdRecordVoiceOver } from "react-icons/md";
import { BiMobileVibration } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";



const Footer=()=>{
    return(
        <div className="bg-[#181818] h-18 md:h-20 lg:h-32 ">
        <div className="container flex justify-between">
            <div className="social flex flex-row gap-1 py-3 px-2 md:gap-6 md:py-3 lg:py-8 md:px-5">
            <Link href="https://github.com/AfiaBakr" target="_blank">
            <img src={"./icons8-github-logo-48.png"}
            alt="Github Icon"/></Link>
            <Link href="https://www.linkedin.com/in/afia-bakr-a2866aa8/" target="_blank">
            <img src="./icons8-linkedin-48.png"
            alt="Linked Icon"/></Link>
        </div>                   
            <div className=" flex gap-2 text-xl md:text-2xl lg:text-3xl text-[#adb7be] font-semibold pl-4 py-6 md:pl-36 lg:pl-96 md:py-5 lg:py-9">
            <h1>Hello ...Afia</h1><MdRecordVoiceOver className="text-white pt-1.5" />
            </div>
            <div className="flex text-justify justify-center ">
        <div className="text-justify justify-center mx-2 md:mx-6 lg:mx-0">
            
        <div className="flex  gap-2 text-sm lg:text-2xl pt-5 ">
            <BiMobileVibration className="text-white pt-1" /><p className="text-[#adb7be]">+923343536883</p>            
        </div>
        <div className="flex gap-2 text-sm lg:text-2xl">
            <FaWhatsapp className="text-white pt-1"/><p className="text-[#adb7be]">+923425912313</p>
        </div>
        </div>
        
        </div>
        </div>
        </div>
        
    )
}

export default Footer;