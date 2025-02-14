import Image from "next/image";
import About from "./about/page";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Rendering Theory</h1>
      <Link href="./about">About</Link>
    </div>
    
  );
}
