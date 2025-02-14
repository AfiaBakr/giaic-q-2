import react from "react";
import Image from "next/image";
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';

const FlashSale =()=>{
    return(
        <main>
        <div className="w-[1170px] h-[103px]">
            <div className="flex text-left gap-4 ml-24">
                <div className="w-[20px] h-[30px] rounded-md bg-red-500"></div>
                <h3 className="font-semibold text-base text-red-500">Today&apos;s</h3>
            </div>
            
            <div className="flex flex-row item-center justify-center ml-20 gap-[230px]">
                <h3 className="font-semibold font-inter text-4xl mt-8 ">Flash Sales</h3>            
                
                <div className="flex-col  mt-4">
                <div className="font-medium font-poppins text-xs flex items-center justify-center gap-[56px]">
                    <h3>Days</h3>
                    <h3>Hours</h3>
                    <h3>Minutes</h3>
                    <h3>Seconds</h3>
                </div>
                <div className="font-bold font-poppins text-[32px] flex items-center justify-center gap-6">
                    <h3>03</h3>
                    <h3 className="text-red-500">:</h3>
                    <h3>23</h3>
                    <h3 className="text-red-500">:</h3>
                    <h3>19</h3>
                    <h3 className="text-red-500">:</h3>
                    <h3>56</h3>
                </div>                
                </div>
            <div className=" mt-8">
                <Image 
                src="/flashsale/Frame 726.png"
                alt="Arrow"
                width={100}
                height={46}/>
            </div>
            </div>
            </div>
                {/*Sale product cars */}
            <div className="flex flex-col lg:flex-row lg:w-[1170px]lg:ml-10 mt-20 item-center justify-center gap-4 w-screen h-[1450px] lg:h-[350px]"> 
                {/*Card 1 */} 
                    <div className="w-[270px] h-[350px]">  
                        <div className="bg-[#f5f5f5b2] w-[270px] h-[250px] ">      
                            <button className="w-[55px] h-[26px] bg-[#bd4444] absolute text-white rounded-sm mt-2 ml-2">-40%</button>                          
                        <div className=" ml-[228px] mt-2 absolute flex flex-col gap-2">
                            <Heart className="h-[35px] w-[35px] rounded-full bg-white p-1"/>
                            <Eye className="h-[35px] w-[35px] rounded-full bg-white p-1"/>   
                        </div>
                        <div className="flex justify-center items-center pt-8">
                            <Image 
                            src="/flashsale/Frame 611.png"
                            alt="Game Pad"
                            width={190}
                            height={180}/>
                        </div> 
                        </div>            
                            <h3 className="text-black py-4">HAVIT HV-G92 Gamepad</h3>
                            <h3 className="text-[#db4444]">$120<del className="text-black pl-2">$160</del></h3>
                            <div className="flex justify-left items-left mt-2 gap-2"><Image 
                            src="/flashsale/Five star.png"
                            alt="Game Pad"
                            width={100}
                            height={20}/>
                            <h3>&#39;75&#71;</h3></div>
                    </div>
                    
                {/*Card 2 */} 
                    <div className="w-[270px] h-[350px]">  
                        <div className="bg-[#f5f5f5b2] w-[270px] h-[250px] ">      
                            <button className="w-[55px] h-[26px] bg-[#bd4444] absolute text-white rounded-sm mt-2 ml-2">-35%</button>                          
                        <div className=" ml-[228px] mt-2 absolute flex flex-col gap-2">
                            <Heart className="h-[35px] w-[35px] rounded-full bg-white p-1"/>
                            <Eye className="h-[35px] w-[35px] rounded-full bg-white p-1"/>   
                        </div>
                        <div className="flex justify-center items-center pt-8">
                            <Image 
                            src="/flashsale/Frame 612.png"
                            alt="Game Pad"
                            width={190}
                            height={180}/>
                        </div> 
                        </div>            
                            <h3 className="text-black py-4">AK-900 Wired Keyboard</h3>
                            <h3 className="text-[#db4444]">$960<del className="text-black pl-2">$1160</del></h3>
                    </div>
                    
                {/*Card 2 */} 
                    <div className="w-[270px] h-[350px]">  
                        <div className="bg-[#f5f5f5b2] w-[270px] h-[250px] ">      
                            <button className="w-[55px] h-[26px] bg-[#bd4444] absolute text-white rounded-sm mt-2 ml-2">-30%</button>                          
                        <div className=" ml-[228px] mt-2 absolute flex flex-col gap-2">
                            <Heart className="h-[35px] w-[35px] rounded-full bg-white p-1"/>
                            <Eye className="h-[35px] w-[35px] rounded-full bg-white p-1"/>   
                        </div>
                        <div className="flex justify-center items-center pt-8">
                            <Image 
                            src="/flashsale/Frame 613.png"
                            alt="Game Pad"
                            width={190}
                            height={180}/>
                        </div> 
                        </div>            
                            <h3 className="text-black py-4">IPS LCD Gaming Monitor</h3>
                            <h3 className="text-[#db4444]">$370<del className="text-black pl-2">$400</del></h3>
                    </div>
                    
                    {/*Card 4 */} 
                    <div className="w-[270px] h-[350px]">  
                        <div className="bg-[#f5f5f5b2] w-[270px] h-[250px] ">      
                            <button className="w-[55px] h-[26px] bg-[#bd4444] absolute text-white rounded-sm mt-2 ml-2">-25%</button>                          
                        <div className=" ml-[228px] mt-2 absolute flex flex-col gap-2">
                            <Heart className="h-[35px] w-[35px] rounded-full bg-white p-1"/>
                            <Eye className="h-[35px] w-[35px] rounded-full bg-white p-1"/>   
                        </div>
                        <div className="flex justify-center items-center pt-8">
                            <Image 
                            src="/flashsale/Frame 614.png"
                            alt="Game Pad"
                            width={190}
                            height={180}/>
                        </div> 
                        </div>            
                            <h3 className="text-black py-4">S-Series Comfort Chair </h3>
                            <h3 className="text-[#db4444]">$370<del className="text-black pl-2">$400</del></h3>
                    </div>
                </div>
                    
          
            </main>
    )
};

export default FlashSale;