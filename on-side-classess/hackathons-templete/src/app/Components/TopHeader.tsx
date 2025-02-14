import react from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const TopHeader =()=>{
    return(
        <div className="w-screen h-32 lg:w-screen lg:h-12 bg-black lg:flex lg:justify-between ">
            <div className="pl-7 lg:pl-[445px] font-poppins lg:flex lg:text-center gap-2 pt-4 text-[13.5px] lg:text-[14px] text-white">
                <p className="text-left lg:text-center text-base lg:text-base">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <p><u className="font-semibold text-left lg:pl-6 pl-0 pt-2 lg:pt-3 text-base lg:text-base">Shop Now</u></p>
            </div>
            <div className="text-white font-poppins text-base lg:text-base pl-7 pt-2 lg:pt-4 lg:pr-40">
            <button className="w3-button w3-hover-orang w-20 h-6 flex items-center justify-center lg:items-center lg:justify-betwen">English <RiArrowDropDownLine className="text-white text-3xl"/></button>
            
            </div>
            
        </div>
    )
};

export default TopHeader;