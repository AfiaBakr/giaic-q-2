
import Link from "next/link"

export default function Hondacity (){
    return(
        <div className="bg-slate-100">
            <div className="text-center">
                <h1 className="text-5xl py-8 "><b><u>Honda City 2024 Price in Pakistan, Images, Reviews & <br/>Specs.</u></b></h1>
            </div>

            <div>
            <div className="flex justify-center">           
                <img className="ring-2 ring-slate-800 rounded-tl-xl rounded-bl-xl" src="./hondacity/hondacity1.jpg"
                alt="Honda City"
                width={450}
                height={300}/>
            
            <div>
                <img className="ring-2 ring-slate-800 mb-1 rounded-tr-xl" src="./hondacity/hondacity2.jpg"
                alt="Honda City"
                width={150}
                height={100}/>

                <img className="ring-2 ring-slate-800" src="./hondacity/hondacity3.jpg"
                alt="Honda City"
                width={150}
                height={100}/>

                <img className="ring-2 ring-slate-800 mt-1 rounded-br-xl" src="./hondacity/hondacity4.jpg"
                alt="Honda City"
                width={150}
                height={100}/>
            </div>
            </div>

            <div className="flex justify-center m-10 gap-14 ">
                <h1 className="border h-11 w-44 bg-blue-500 rounded-lg text-white text-center pt-2">Book a test drive</h1>
                <h1 className="border h-11 w-44 border-blue-500 rounded-lg text-blue-500 text-center pt-2">Request Bank Finance</h1>
                <h1 className="border h-11 w-44 border-blue-500 rounded-lg text-blue-500 text-center pt-2">Visit Place</h1>
                <h1 className="border h-11 w-44 border-blue-500 rounded-lg text-blue-500 text-center pt-2">Car Inspaction</h1>
            </div>

            <div className="text-center">
                <h1 className="text-3xl">Vihicle Discription</h1>
            </div>

            <div className="flex justify-center mt-6 gap-8">
                <h1><b>Number of Doors </b>4</h1>
                <h1><b>Engine </b>1497 cc</h1>
                <h1><b>Condition </b>7.5 / 10</h1>
                <h1><b>Diven </b>10.500 KM / 10</h1>
                <h1><b>Suspension type: </b>Soft suspension</h1>
            </div>

            <div className="flex justify-start pl-56 mt-4 gap-8">
                <h1><b>Avg </b>16 km per ltr</h1>
                <h1><b>Transmission </b>Automatic</h1>
                <h1><b>Fuel Type </b>Petrol</h1>
            </div>
                    
            <div className="text-center mt-10 ">
                <h1 className="text-2xl text-green-600">PKR 85,50,00 lac</h1>
            </div>
            </div>

            <div className="text-center py-10">
                <Link className=" bg-blue-600 rounded-lg py-2 px-5 text-white " href="/makepayment">Make Payment</Link>
            </div>
        </div>
    
    )
}