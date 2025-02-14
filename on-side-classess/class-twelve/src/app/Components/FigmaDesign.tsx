import React from "react";
import Image from "next/image";
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';

const FigmaDesign =()=>{
    return(
        
        <div className="w-[270px] h-[350px]">  
            <div className="bg-[#f5f5f5b2] w-[270px] h-[250px] ">             
                
                <button className="w-[55px] h-[26px] bg-[#bd4444] absolute text-white rounded-sm mt-2 ml-2">-40%</button>                             
                            
                <div className=" ml-[228px] mt-2 absolute flex flex-col gap-2">
                    <Heart className="h-[35px] w-[35px] rounded-full bg-white p-1"/>
                    <Eye className="h-[35px] w-[35px] rounded-full bg-white p-1"/>   
                </div>
                <div className="flex justify-center items-center pt-8">
                    <Image 
                    src="/cards/Frame 611.png"
                    alt="Game Pad"
                    width={190}
                    height={180}/>
                </div> 
            </div>
            
            <h3 className="text-black py-4">HAVIT HV-G92 Gamepad</h3>
            <h3 className="text-[#db4444]">$120<del className="text-black pl-2">$160</del></h3>  
             
        </div>
        
    )
};
export default FigmaDesign;