"use client"
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/users')
  const response = await url.json()
  console.log(response)
return (
  <main>
    <div className="my-40 flex items-center justify-center">
    <div className="container w-[800px] border rounded-2xl border-gray-200 bg-[#b9babb] ">
    <h3 className="text-center text-5xl mt-20"><u>User Detail</u></h3>
      {response.map((user:any)=>(
      <div className="m-14">      
        <Link href={`${user.id}`}>
        <h1 className="text-4xl">
        {user.id}&nbsp; &nbsp;{user.name}
        </h1>
        </Link>
      </div>))}
    </div>
    </div>
  </main>
);
}
