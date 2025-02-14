import react from "react";
import Image from "next/image";



const ServiceGuarante =()=>{
    return(
        <div>
            {/*Service Guarante detail*/}
            <div className="flex flex-col lg:flex-row justify-center items-center mt-8 lg:mt-36 gap-14">
                {/*card 1 */}
                <div className=" lg:mt-0 w-[249px] h-[161px] ">                 
                    <div className= "items-center justify-center px-24  ">              
                        <img src={"about/Services11.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center pt-4">
                        <h5 className="text-[20px] font-semibold">FREE AND FAST DELIVERY</h5>
                        <h5 className="text-sm">Free delivery for all orders over $140</h5>       
                    </div>                                        
                </div> 
                {/*card 1 */}
                <div className=" lg:mt-0 w-[249px] h-[161px] ">                 
                    <div className= "items-center justify-center px-24  ">              
                        <img src={"about/Services22.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center pt-4">
                        <h5 className="text-[20px] font-semibold">24/7 CUSTOMER SERVICE</h5>
                        <h5 className="text-sm">Friendly 24/7 customer support</h5>       
                    </div>                                        
                </div> 
                {/*card 3 */}
                <div className=" lg:mt-0 w-[249px] h-[161px] ">                 
                    <div className= "items-center justify-center px-24  ">              
                        <img src={"about/Services33.png"}
                        width={80}
                        height={80}/>
                    </div>
                    <div className="text-center pt-4">
                        <h5 className="text-[20px] font-semibold">MONEY BACK GUARANTEE</h5>
                        <h5 className="text-sm">We reurn money within 30 days</h5>       
                    </div>                                        
                </div> 
                </div> 
            </div> 
            )
        };
        export default ServiceGuarante;