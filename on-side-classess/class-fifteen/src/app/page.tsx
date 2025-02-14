import Image from "next/image";
import Link from "next/link";


{/*export default async function Home() {
    const url = await fetch ("https://jsonplaceholder.typicode.com.todos/1")
    const response = await url.json()
  return (
    <main>
        {JSON.stringify(response)}
    </main>
  );
}*/}


export default async function Home() {
  const url = await fetch (`http://simple-books-api.glitch.me/books`)
  const response = await url.json()
  console.log(response)
return (
  <main>
      {response.map((book:any)=>(
      <div>
        <Link href={`${book.id}`}>
        <h1 className="text-7xl">
        {book.id}&nbop; &nbop;{book.name}
        </h1>
        </Link></div>))}
  </main>
);
}
