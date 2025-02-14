import react from "react";
import Image from "next/image";
import Link from "next/link";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";




const StaffCards =()=>{
    return(
        <div>
            {/*Staff Card detail*/}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8">
                {/*card 1 */}
                <div className=" lg:mt-0 w-[370px] h-[564px] rounded-lg ">                 
                    <div className= "items-center justify-center  ">              
                        <img src={"about/Frame 874.png"}
                        width={370}
                        height={430} className=" pl-12 md:pl-8 lg:pl-0"/>
                    </div>
                    <div className="ml-12 lg:ml-0 text-left pt-6">
                        <h5 className="text-3xl">Tom Cruise</h5>
                        <h5 className="text-base pt-3">Anual gross sale in our site</h5>
                        <div className="flex item-left gap-6 pt-4"><CiTwitter className="w-6 h-6" /><CiInstagram className="w-6 h-6"/><RiLinkedinLine className="w-6 h-6"/></div>      
                    </div>                                        
                </div> 
                {/*card 2 */}
                <div className=" lg:mt-0 w-[370px] h-[564px] rounded-lg ">                 
                    <div className= "items-center justify-center  ">              
                        <img src={"about/Frame 875.png"}
                        width={370}
                        height={430} className=" pl-12 md:pl-8 lg:pl-0"/>
                    </div>
                    <div className="ml-12 lg:ml-0 text-left pt-6">
                        <h5 className="text-3xl">Emma Watson</h5>
                        <h5 className="text-base pt-3">Managing Director</h5>
                        <div className="flex item-left gap-6 pt-4"><CiTwitter className="w-6 h-6" /><CiInstagram className="w-6 h-6"/><RiLinkedinLine className="w-6 h-6"/></div>      
                    </div>                                        
                </div> 
                {/*card 3 */}
                <div className=" lg:mt-0 w-[370px] h-[564px] rounded-lg ">                 
                    <div className= "items-center justify-center  ">              
                        <img src={"about/Frame 876.png"}
                        width={370}
                        height={430} className=" pl-12 md:pl-8 lg:pl-0"/>
                    </div>
                    <div className="ml-12 lg:ml-0 text-left pt-6">
                        <h5 className=" text-3xl">Will Smith</h5>
                        <h5 className="text-base pt-3">Product Designer</h5>
                        <div className="flex item-left gap-6 pt-4"><CiTwitter className="w-6 h-6" /><CiInstagram className="w-6 h-6"/><RiLinkedinLine className="w-6 h-6"/></div>      
                    </div>                                        
                </div> 
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-16 mb-4">
                    <Image src={"/about/Frame 883.png"}
                    alt="dots"
                    width={110}
                    height={14}/> 
                </div>

                 
        </div>
    )
}
export default StaffCards;