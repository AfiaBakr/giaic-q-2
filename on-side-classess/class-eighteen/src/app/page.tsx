import Image from "next/image";
import Authen from "./Components/Authen";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Authentication and Authorization
      <Authen/>
    </main>
  );
}
