import react from "react";
import Image from "next/image";
import { FaRegCopyright } from "react-icons/fa";


const Footer =()=>{
    return(
        <div className="bg-black ">
            <div className="w-screen h-[1920] lg:w-screen lg:h-[384px] flex flex-col lg:justify-center lg:items-center font-poppins text-[#fafafa]">
                <div className="w-screen h-[1200] lg:w-[1170px] lg:h-[236px] gap-6 lg:gap-[87px] ml-6 flex flex-col lg:flex-row lg:items-center lg:justify-center ">
                    <div className="w-[217px] h-[188px] lg:w-[217px] lg:h-[188px] lg:mb-12">
                        <div className="w-[206px] h-[124px] lg:w-[206px] lg:h-[124px]">
                            <h3 className="font-bold font-inter text-2xl pt-0">Exclusive</h3>
                            <h3 className="text-xl pt-2 lg:pt-6">Subscribe</h3>
                            <h3 className="text-base pt-2 lg:pt-6">Get 10% off your first order</h3>
                        </div>
                        <div className="w-[217px] h-[48px] pt-2 lg:mt-5 rounded-sm border border-white flex items-center justify-center gap-8">
                            <input type="email" className="w-[130px] h-[24px] bg-black text-base" placeholder="Enter your Email"/>
                            <Image src={"/footer/icon-send.png"}
                            alt="send"
                            width={24}
                            height={24}/>
                        </div>
                    </div>
                    <div className="w-[176px] h-[180px] lg:mb-[60px]">                        
                            <h3 className="font-medium text-xl">Support</h3>
                            <h3 className="text-base pt-2 lg:pt-6">111 Bijoy sarani, Dhaka,<br/>  DH 1515, Bangladesh.</h3>
                            <h3 className="text-base pt-2 lg:pt-4">exclusive@gmail.com</h3>
                            <h3 className="text-base pt-2 lg:pt-4">+88015-88888-9999</h3>                        
                    </div>
                    <div className="w-[123px] h-[236px] lg:mb-1">
                            <h3 className="font-medium text-xl">Account</h3>
                            <h3 className="text-base pt-2 lg:pt-4">My Account</h3>
                            <h3 className="text-base pt-2 lg:pt-4">Login / Register</h3>
                            <h3 className="text-base pt-2 lg:pt-4">Cart</h3>  
                            <h3 className="text-base pt-2 lg:pt-4">Whishlist</h3>  
                            <h3 className="text-base pt-2 lg:pt-4">shop</h3>  
                    </div>
                    <div className="w-[109px] h-[196px] lg:mb-10">
                            <h3 className="font-medium text-xl">Quick Link</h3>
                            <h3 className="text-base pt-2 lg:pt-4">Privacy Policy</h3>
                            <h3 className="text-base pt-2 lg:pt-4">Term of Use</h3>
                            <h3 className="text-base pt-2 lg:pt-4">FAQ</h3>  
                            <h3 className="text-base pt-2 lg:pt-4">Contact</h3> 
                    </div>
                    <div className="w-[198px] h-[210px] lg:mb-7">
                            <h3 className="font-medium text-xl">Dawnload App</h3>
                            <h3 className="text-xs pt-4">Save $3 with App New User Only</h3>
                            <div className="w-[198px] h-[84px] flex items-center justify-center mt-2">
                                <div className="w-[84px] h-[84px] pr-1">
                                    <Image src={"/footer/QR Code.png"}
                                    alt="QR Code"
                                    width={80}
                                    height={80}/>
                                </div>
                                <div className="w-[110px] h-[84px] flex-col gap-2">
                                 <Image src={"/footer/GooglePlay.png"}
                                    alt="Google Play"
                                width={105}
                                   height={42}/>
                                    <Image src={"/footer/AppStore.png"}
                                    alt="App Store"
                                    width={105}
                                    height={41}/> 
                                </div>
                            </div>
                            <div className="w-[164px] h-[24px] flex justify-between mt-6">
                            <Image src={"/footer/icon-Facebook.png"}
                                alt="Facebook"
                                width={24}
                                height={24}/> 
                                <Image src={"/footer/Group.png"}
                                alt="Twitter"
                                width={24}
                                height={24}/> 
                                <Image src={"/footer/icon-instagram.png"}
                                alt="instagram"
                                width={24}
                                height={24}/> 
                                <Image src={"/footer/icon-Linkedin.png"}
                                alt="Linkedin"
                                width={24}
                                height={24}/> 
                            </div>
                    </div>
                </div>                
            </div>
            <div className="w-screen h-[56px] lg:w-[1440px] lg:h-[56px] border border-t-slate-600 border-x-black flex text-center justify-center gap-2 text-[#adb7be] ">
                <FaRegCopyright className="w-4 h-4 mt-6"/>
                <p className=" text-base pt-5">Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
};

export default Footer;