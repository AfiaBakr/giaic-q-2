import Link from "next/link"



export default function Form (){
    return(
        <div className="bg-slate-200">
            <h1 className=" p-14 text-5xl font-semibold text-center uppercase">Enter your  details</h1>
            <div >
            <form className=" flex gap-6 justify-center items-center flex-col border" >
                <input type="email" className="p-3 rounded-xl w-2/3 border border-slate-300" placeholder="Enter your Email"/>
                <input type="pasword" className="p-3 rounded-xl w-2/3 border border-slate-300 "
                 placeholder="Enter your Password"/>
                 <input type="number" className="p-3 rounded-xl w-2/3 border border-slate-300" placeholder="Card Number"/>
                 <input type="address" className="p-3 rounded-xl w-2/3 border border-slate-300" placeholder="Address"/>
                <Link href="./thankyou" className="mt-6 mb-10 py-3 px-8 rounded-lg bg-blue-800 text-white">Place your Order</Link>
            </form>
            
        </div>
        </div>
    )
}

