export default function Form (){
    return(
        <div>
            <h1 className=" m-10 text-5xl font-semibold text-center uppercase">Enter your  details</h1>
            <div >
            <form className=" flex gap-5 justify-center items-center flex-col border" >
                <input type="email" className="p-2 rounded-xl w-2/3 border border-red-800" placeholder="Enter your Email"/>
                <input type="pasword" className="p-2 rounded-xl w-2/3 border border-red-800 "
                 placeholder="Enter your Password"/>
                <button className="py-3 px-8 rounded-lg bg-blue-500 text-white">Place your Order</button>
            </form>
            
        </div>
        </div>
    )
}


