import react from "react";
import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";

const Exclusive =()=>{
    return(
        <div>
                    <ul className="text-left ml-8 mt-6 text-base font-normal ">
                        <li className="pt-6 font-semibold"><Link href={"/"}>Exclusive</Link></li>
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
    )
};

export default Exclusive;