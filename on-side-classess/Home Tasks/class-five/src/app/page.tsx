import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="bg-slate-200 h-auto">
      <br />
      <section className="container flex item-justify justify-center gap-7">
        <div className="bg-red-200 w-60 h-60 ring-black ring-2 rounded-2xl">
          <h1 className="text-black text-center text-3xl mt-24">Red-200</h1>
        </div>
        <div className="bg-orange-200 w-60 h-60 ring-black ring-2 rounded-2xl">
          <h1 className="text-black text-center text-3xl mt-24">Oriange-200</h1>
        </div>
        <div className="bg-yellow-200 w-60 h-60 ring-black ring-2 rounded-2xl">
          <h1 className="text-black text-center text-3xl mt-24">Yellow-200</h1>
        </div>
      </section>
      <br />
      <section className="container flex item-justify justify-center gap-7">
        <div className="bg-green-200 w-60 h-60 ring-black ring-2 rounded-2xl">
          <h1 className="text-black text-center text-3xl mt-24">Green-200</h1>
        </div>
        <div className="bg-purple-300 w-60 h-60 ring-black ring-2 rounded-2xl">
          <h1 className="text-black text-center text-3xl mt-24 ">Purple-200</h1>
        </div>
      </section><br/>
      </div>
    </main>
  );
}
