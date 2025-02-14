import react from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp =()=>{
    return(
        <div className=" flex flex-col lg:flex-row mt-0 lg:mt-10  ">
            <div className=" w-screen h-[425px] lg:w-[805px] lg:h-[781px] rounded-md">
                <Image src={"/signup/beatsnoop.png"}
                alt="Side Picture"
                width={805}
                height={781}/>
            </div>
            <div className="ml-0 lg:ml-24 font-poppins lg:mt-28 mt-0 text-left">
                <div >
                    <h1 className="mt-2 ml-8 lg:ml-0 lg:mt-10 text-4xl font-medium font-inter">Log in to Exclusive</h1>
                    <h1 className="mt-2 ml-8 lg:ml-0 lg:mt-4 text-base font-regular">Enter your details below</h1>
                <div >
                    <form className="mt-8 flex gap-5 justify-center items-center flex-col" >                        
                        <input type="email" className="w-[371px] h-[56px] border border-b-2 border-x-0 border-t-0 border-slate-400" placeholder="Email or Phone Number"/>
                        <input type="pasword" className="w-[371px] h-[56px]  border border-b-2 border-x-0 border-t-0 border-slate-400 "
                        placeholder="Password"/>
                        <div className=" flex items-center justify-between gap-20  mt-8">
                        <button className="w-[143px] h-[56px]  py-3 px-8 rounded-md text-center bg-red-500 text-white">
                        Log In</button>
                        <button className="w-[150px] h-[56px] py-3 text-right text-red-500">        
                        Forget Password?</button>
                        </div>
                    </form>                
                </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;