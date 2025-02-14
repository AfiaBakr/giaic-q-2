import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

const Header =()=> {
    return(
        <div className="w-screen h-[94px] border border-b-1 border-x-0 border-slate-400 flex justify-center items-center font-poopins ">
            <div className="w-[1218px] h-[38px] flex justify-between items-center ">
                <div className="w-[672px] h-[38px] flex justify-between text-center ">
                    <h3 className="pl-[30px] font-bold text-[24px] pt-4" ><Link href={"/Exclusive"}>Exclusive</Link></h3>
                    <ul className="pr-12 pt-6 text-base flex justify-between gap-5">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/About"}>About</Link></li>
                        <li><Link href={"/Contact"}>Contact</Link></li>
                        <li><Link href={"/SignUp"}>Sign Up</Link></li>
                    </ul>
                </div>
                <div className="w-[395px] h-[38px] flex gap-2 mt-8">
                    <div className="w-[243px] h-[38px] bg-[#f5f5f5] text-black flex text-center justify-center gap-4 py-2 text-sm">
                    What are you looking for?<CiSearch className="w-6 h-6"/>
                    </div>                
                <CiHeart className="w-8 h-8 mt-0.5" />
                <GrCart className="w-8 h-8 mt-0.5"  />           
                </div>
            </div>
        </div>        
    )
};
export default Header;