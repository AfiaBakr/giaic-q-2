import Link from "next/link";
import {ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import CarCards from "./CarArray";
import Star1 from "./Star"; 




const ChildComponents =({id,Name,Price,ImgUrl,Rating,Review}:any)=>{
 return(
    <div className=" justify-center items-center "> 
        <div className="bg-white md:mt-10 border-[#adb7be] shadow-md shadow-slate-500 border-2 rounded-lg ">
            
            <img src={ImgUrl}
            width={300}
            height={174} className=" pl-12 md:pl-8 lg:pl-0"/>
            <div className="text-center text-sm md:text-md ">
            <h5 className=" text-lg font-semibold">{Name}</h5>
            <h5 className=" text-green-600">{Price}</h5>
            <h5 className="flex justify-center gap-2 pb-3"><Star1 rating={Rating} />{Review}</h5>
            </div>
            </div>
                        
        </div>
    )
}
export default ChildComponents