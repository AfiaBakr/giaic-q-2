import react from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import ServiceGuarante from "./Service-Guarante";
import FlashSale from "./FlashSale";

const HeroSection =()=>{
    return (
        <div >
        <div className="flex ">
            <div className="w-[368px] h-[384px] hidden lg:block border border-r-1 border-y-0 border-slate-400">
                <ul className=" ml-[94px] pt-0 text-base font-normal ">
                        
                        <li className="pt-6"><Link className="flex" href={"/WomenFashon"}>Women's Fashions<RiArrowRightSLine className="mt-1 ml-[50px] h-5 w-5"/></Link></li>
                        <li className="pt-6"><Link className="flex" href={"/MenFashon"}>Men's Fashions<RiArrowRightSLine className="mt-1 ml-[73px] h-5 w-5" /></Link></li>
                        <li className="pt-6"><Link href={"/HomeAndLifstyle"}>Home & Lifestyle</Link></li>
                        <li className="pt-6"><Link href={"/Medicine"}>Medicine</Link></li>
                        <li className="pt-6"><Link href={"/SportsAndOutdoor"}>Sports & Outdoor</Link></li>
                        <li className="pt-6"><Link href={"/BabyAndToys"}>Baby's & Toys</Link></li>
                        <li className="pt-6"><Link href={"/GroceriesAndPets"}>Groceries & Pets</Link></li>
                        <li className="pt-6"><Link href={"/HealthAndBeauty"}>Health & Beauty</Link></li>
                </ul>
            </div>
            <div>
                <div className="w-screen h-[688px] lg:w-[892px] lg:h-[350px] mt-0 ml-0 lg:mt-[34px] lg:ml-10 bg-black">
                <div className="w-screen h-[674px] lg:w-[892px] lg:h-[330px] grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
                    <div className=" grid grid-cols-1 lg:grid-cols-1 grid-row-7 lg:grid-rows-7 items-center justify-center gap-4">
                        <div className="row-span-2 flex items-left gap-4">
                            <Image className="ml-10 mt-10 lg:ml-16 lg:mt-16" src={"/home/Apple.png"}
                            alt="logo"
                            width={40}
                            height={49}/>
                            <p className="text-slate-400 text-base mt-14 lg:mt-20">iPhone 14 Series</p>
                        </div>
                        <div className="row-span-3 ml-10 lg:ml-16">
                            <p className="font-semibold font-inter text-3xl lg:text-5xl text-white">Up to 10%<br/>off Voucher</p>
                        </div>
                        <div className="row-span-2 ml-10 lg:ml-16  flex-row ">
                            <p className="font-medium text-base text-slate-400 "><u>Shop Now</u>
                            <Image className="mb-10 ml-28" src={"/home/arrow-right.png"}
                            alt="arrow"
                            width={24}
                            height={24}/>
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 grid-rows-1">
                        <Image className="items-center mt-10 mr-2 lg:mt-10 lg:mr-16" src={"/home/mobile.png"}
                        alt="mobile"
                        width={496}
                        height={328}/>
                    </div>
                </div>
                <div className="flex items-center justify-center mb-4">
                    <Image src={"/home/Frame 883.png"}
                    alt="dots"
                    width={110}
                    height={14}/> 
                </div>
            </div>
            </div>
            </div>
            <div className="my-20"><FlashSale/></div>            
            <div className="my-20"><ServiceGuarante/></div>            
        </div>
    )
};

export default HeroSection;