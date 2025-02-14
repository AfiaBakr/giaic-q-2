import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const MobileNavebar =()=>{
    return(
       <div>
         <Sheet>
  <SheetTrigger>
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      
      <SheetDescription className="bg-slate-800">
                <ul className="p-1  text-white flex flex-col gap-5">
                    <li><a>Home</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>About</a></li>
                </ul>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
       </div> 
    )
}
export default  MobileNavebar