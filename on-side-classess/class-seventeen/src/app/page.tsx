


import UserForm from "./Components/UserForm";


export default async function Home() {
  const url =await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store'
  })

  const response = await url.json()
  console.log(response)

  return (
    <div className="container flex flex-wrap flex-col items-center justify-center mt-20">
    <UserForm/>

    {response.map((product:any)=>(<h1 className="text-xl mr-[350px] mt-2">{product.name}</h1>))}
    </div>
  );
}
