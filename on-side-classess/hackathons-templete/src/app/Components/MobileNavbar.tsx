import react from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Menu } from 'lucide-react';
  import Link from "next/link";


const MobileNavbar =()=> {
    return(
        <div className="bg-black">
            <Sheet>
  <SheetTrigger className="text-white ml-6 "><Menu className="w-8 h-8" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      
      <SheetDescription>
                    <div className="font-poppin text-black">
                    <div className="text-left mt-6 text-lg">
                    <Link href={"/Exclusive"}>Exclusive</Link>
                    </div>
                    <ul className="text-left pt-6 text-base ">
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/About"}>About</Link></li>
                        <li><Link href={"/Contact"}>Contact</Link></li>
                        <li><Link href={"/SignUp"}>Sign Up</Link></li>
                    </ul>
                    </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </div>
    )
};
export default MobileNavbar;
