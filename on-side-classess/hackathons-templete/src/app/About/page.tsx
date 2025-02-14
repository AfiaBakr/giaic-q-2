import react from "react";
import Image from "next/image";
import Link from "next/link";
import StaffCards from "../Components/StaffCards";
import ServiceGuarante from "../Components/Service-Guarante";


const About =()=>{
    return(
        <div>
            <div>
                <ul className="ml-8 lg:pl-24 pt-10 text-sm flex text-left gap-5">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/About"}><u>About</u></Link></li>
                </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 lg:grid-rows-1 w-screen lg:w-screen h-[1105] lg:h-[669] ">
                <div className="row-span-1 lg:col-span-1 w-screen h-[336px] lg:w-[525px] lg:h-[609px] ml-2 lg:ml-8 font-poppins lg:mt-40 mt-0 text-left ">                
                    <h1 className="mt-6 ml-6 lg:ml-14 text-3xl lg:text-[54px] font-semibold font-inter">Our Story</h1>
                    <div className="text-base text-left ml-6 mr-6 mt-6 lg:ml-14 lg:mt-10">
                        <p>Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <br/>               
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>               
                    </div>
                </div>
                <div className="col-span-1 lg:row-span-1 w-screen h-[425px] lg:w-[705px] lg:h-[609px] mt-0 lg:mt-20 lg:mb-28 lg:pr-0 rounded-md">
                    <Image src={"/about/Side Image.png"}
                    alt="Side Picture"
                    width={705}
                    height={609}/>
                </div>
            </div>
            
             {/*Sale Card detail*/}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                {/*card 1 */}
                <div className=" lg:mt-0 w-[270px] h-[230px] border-[#adb7be] border-2 rounded-lg ">                 
                    <div className= "items-center justify-center px-24 mt-8 ">              
                        <img src={"about/Services.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center pt-4">
                        <h5 className="text-[32px] font-bold">10.5K</h5>
                        <h5 className="text-base">Sallers active our site</h5>       
                    </div>                                        
                </div> 
                 {/*card 2 */}
                <div className="lg:mt-0 bg-red-500 md:mt-10 w-[270px] h-[230px] border-[#adb7be] border-2 rounded-lg ">                 
                    <div className= "items-center justify-center px-24 mt-8 ">              
                        <img src={"about/Services1.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center text-white pt-4">
                        <h5 className="text-[32px] font-bold">33K</h5>
                        <h5 className="text-base">Mopnthly Produduct Sale</h5>       
                    </div>                                        
                </div>          
                 {/*card 3 */}
                <div className=" lg:mt-0 w-[270px] h-[230px] border-[#adb7be] border-2 rounded-lg ">                 
                    <div className= "items-center justify-center px-24 mt-8 ">              
                        <img src={"about/Services2.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center pt-4">
                        <h5 className="text-[32px] font-bold">45.5K</h5>
                        <h5 className="text-base">Customer active in our site</h5>       
                    </div>                                        
                </div>          
                 {/*card 4 */}
                <div className=" lg:mt-0 w-[270px] h-[230px] border-[#adb7be] border-2 rounded-lg ">                 
                    <div className= "items-center justify-center px-24 mt-8 ">              
                        <img src={"about/Services3.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center pt-4">
                        <h5 className="text-base">25K</h5>
                        <h5 className="text-base">Anual gross sale in our site</h5>       
                    </div>                                        
                </div>                                                  
            </div>
            <div className="my-20"><StaffCards/></div>
            <div className="my-20"><ServiceGuarante/></div>
        </div>
    )
};

export default About;
