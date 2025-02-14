import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default async function Home() {
// making api request
  const url = await fetch("https://simple-books-api.glitch.me/books" ,{method:"GET"})
  //converting it into JSON
  const res = await url.json()
  console.log(res)
  return (
    <div>
      Hello
    </div>
  );
}
