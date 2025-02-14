import Image from "next/image";
import Herosection from "./Components/herosection";
import FeaturedProduct from "./Components/FeaturedProducts";

export default function Home() {
  return (
    <div><Herosection/>
    <FeaturedProduct/>
    </div>
  );
}
