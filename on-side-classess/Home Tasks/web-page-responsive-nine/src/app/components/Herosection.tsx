import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";

export default function Herosection(){
    return(
        <div className="bg-slate-50">
            <div>
                <div className="text-center p-8 text-sm md:text-xl"><b>Sell Your Car on the PakWheels and Get the Best Price</b></div>
                <div className="grid grid-rows-3 md:grid-cols-3 grid-cols-1 md:grid-rows-1 pt-0 items-center mx-12 md:mx-20">
                    <div className="border border-t-2 border-x-2 md:border-y-2 md:border-l-2 md:border-r-0 h-48 md:h-60 p-3 md:p-6">
                    <h1 className="text-sm md:text-lg text-blue-900"><b>Post Ad on PakWheel</b></h1><br/>
                    <ul className="text-sm md:text-lg">
                        <li className="flex gap-1"><GiCheckMark className="text-green-700 "/>Post your ad for Free in 3 steps</li>
                        <li className="flex gap-1"><GiCheckMark className="text-green-700 "/>Get Genuine offers from Verifired Buyers</li>
                        <li className="flex gap-1"><GiCheckMark className="text-green-700 "/>Sell your car Fast at the best Price</li>
                    </ul><br/>
                    <button className="bg-red-600 text-sm md:text-lg text-white rounded-sm md:rounded-lg px-2 md:px-5 py-1 md:py-2 w-32 md:w-44">Post Your Ad</button>
                </div>
                <div className="text-sm md:text-2xl flex justify-center border md:border-y-2 border-y-0 border-x-2 md:border-x-0  h-48 md:h-60 py-20 md:py-16">OR</div>
                <div className="border border-b-2 border-x-2 md:border-y-2 md:border-l-0 md:border-r-2 h-48 md:h-60 py-3 md:py-6 pl-2">
                    <h1 className="text-sm md:text-lg text-blue-900"><b>Try PakWheels Sell It For Me</b></h1><br/>
                    <ul className="text-sm md:text-lg">
                        <li className="flex gap-1"><GiCheckMark className="text-green-700 "/>Dadicated Sales Expert to Sell your Car</li>
                        <li className="flex gap-1"><GiCheckMark className="text-green-700 "/>We Bargain for you and share the Best Offer</li>
                        <li className="flex gap-1"><GiCheckMark className="text-green-700 "/>We ensure Safe & Secure Transiction</li>
                    </ul><br/>
                    <button className="bg-blue-600 text-white text-sm md:text-lg rounded-sm md:rounded-lg px-2 md:px-5 py-1 md:py-2 w-32 md:w-44">Register Your Car</button>
                </div>
                </div>
            </div>
            <div >
            <div className="flex justify-between my-4 md:my-8 mx-12 md:mx-24">
            <h1 className="text-sm md:text-xl "><b>Features New Cars</b></h1>
            <h2 className="text-blue-600 text-sm md:text-xl">Views All New Cars</h2></div>
            <div className="flex gap-7 md:gap-20 mt-8 mb-4 mx-12 md:mx-24">
                <h1><b>Popular</b></h1>
                <h1>Upcomming</h1>
                <h1>Newly Launched</h1>
            </div>
            <div className="flex ">
                <hr className="md:ml-24 ml-11 w-12 md:w-20 h-1 bg-blue-600 border-0 dark:bg-blue-600"/>
                <hr className="w-24 md:w-96 h-1 bg-slate-200 dark:bg-slate-200"/>
                <hr className="w-24 md:w-96 h-1 bg-slate-200 dark:bg-slate-200"/>
                <hr className="w-24 md:w-80 h-1 bg-slate-200 dark:bg-slate-200"/>
                </div>
            <div >
                <section className="section gallery mt-6"> 
                    <div className="gallery-container flex-col md:flex-wrap "> 
                    <div className="gallery-item px-12 md:bg-clip-padding">   
                    <div className="@container flex flex-col md:flex-row items-justify justify-center gap-12">
                    <Link href="toyota"><div className="text-sm md:text-lg ring-2 ring-cyan-100 shadow-blue-900 bg-white shadow-xl hover: hover:scale-105 transition-transform 0.5s ease border h-500 w-300 rounded-xl ">
            
                    <img className="mt-8 ml-6 md:ml-0" src="toyotacorolla.jpg"
                    alt="Picture"
                    width={250}
                    height={145}
                    title="Click here for details" ></img>
                    <h1 className="text-center text-blue-600 mt-10"><b>Toyota Corolla</b></h1>
                    <h1 className="text-center text-green-600" >PKR 59.7 - 75.5 lacs</h1>
                    <div className="flex justify-center my-4"><h1 className="flex text-orange-600 mt-1"><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /><ImStarEmpty /></h1>
                    <h1 className="text-center text-blue-400 ml-2 ">620 Reviews</h1>
                    </div>
                    </div></Link>

                    <Link href="./suzuki"><div className="text-sm md:text-lg ring-2 ring-cyan-100 shadow-blue-900 bg-white shadow-xl hover: hover:scale-105 transition-transform 0.5s ease border h-500 w-300 rounded-xl ">
            
                    <img className="mt-8 ml-6 md:ml-0" src="suzukiswift.jpg"
                    alt="Picture"
                    width={250}
                    height={145}
                    title="Click here for details" ></img>
                    <h1 className="text-center text-blue-600 mt-10"><b>Suzuki Swift</b></h1>
                    <h1 className="text-center text-green-600" >PKR 43.4 - 47.2 lacs</h1>
                    <div className="flex justify-center my-4"><h1 className="flex text-orange-600 mt-1"><ImStarFull /><ImStarFull /><ImStarHalf /><ImStarEmpty /><ImStarEmpty /></h1>
                    <h1 className="text-center text-blue-400 ml-2 ">191 Reviews</h1>
                    </div>
                    </div></Link>

                    <Link href="./honda"><div className="text-sm md:text-lg ring-2 ring-cyan-100 shadow-blue-900 bg-white shadow-xl hover: hover:scale-105 transition-transform 0.5s ease border h-500 w-300 rounded-xl">
            
                    <img className="mt-8 ml-6 md:ml-0" src="hondacity.jpg"
                    alt="Picture"
                    width={250}
                    height={145}
                    title="Click here for details" ></img>
                    <h1 className="text-center text-blue-600 mt-10"><b>Honda City</b></h1>
                    <h1 className="text-center text-green-600" >PKR 46.5 - 58.5 lacs lacs</h1>
                    <div className="flex justify-center my-4"><h1 className="flex text-orange-600 mt-1"><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></h1>
                    <h1 className="text-center text-blue-400 ml-2 ">456 Reviews</h1>
                    </div>
                    </div></Link>

                    <Link href="./hundai"> <div className="text-sm md:text-lg ring-2 ring-cyan-100 shadow-blue-900 bg-white shadow-xl hover: hover:scale-105 transition-transform 0.5s ease  border h-500 w-300 rounded-xl">
            
                    <img className="mt-8 ml-6 md:ml-0" src="hundai.jpg"
                    alt="Picture"
                    width={250}
                    height={145}
                    title="Click here for details" ></img>
                    <h1 className="text-center text-blue-600 mt-10"><b>Hundai Elantra</b></h1>
                    <h1 className="text-center text-green-600" >PKR 71.8 - 97 lacs</h1>
                    <div className="flex justify-center my-4"><h1 className="flex text-orange-600 mt-1"><ImStarFull /><ImStarFull /><ImStarFull /><ImStarFull /><ImStarEmpty /></h1>
                    <h1 className="text-center text-blue-400 ml-2 ">357 Reviews</h1>
                    </div>
                    </div></Link>
                    </div>
                    </div>
                    </div>
                    </section>

            </div>
            </div><div className="m-16"></div>
            
        </div>
            )
        }