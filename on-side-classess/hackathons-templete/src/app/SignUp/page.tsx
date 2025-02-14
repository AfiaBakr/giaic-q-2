import react from "react";
import Image from "next/image";
import Link from "next/link";

const SignUp =()=>{
    return(
        <div className=" flex flex-col lg:flex-row mt-0 lg:mt-10 ">
            <div className=" w-screen h-[425px] lg:w-[805px] lg:h-[781px] rounded-md">
                <Image src={"/signup/beatsnoop.png"}
                alt="Side Picture"
                width={805}
                height={781}/>
            </div>
            <div className="ml-0 lg:ml-24 font-poppins lg:mt-10 mt-0 text-left">
                <div >
                    <h1 className="mt-2 ml-8 lg:ml-0 lg:mt-10 text-4xl font-medium font-inter">Create an account</h1>
                    <h1 className="mt-2 ml-8 lg:ml-0 lg:mt-4 text-base font-regular">Enter your details below</h1>
                <div >
                    <form className=" flex gap-5 justify-center items-center flex-col" >
                        <input type="Name" className="w-[371px] h-[56px] border border-b-2 border-x-0 border-t-0 border-slate-400" placeholder="Name"/>
                        <input type="email" className="w-[371px] h-[56px] border border-b-2 border-x-0 border-t-0 border-slate-400" placeholder="Email or Phone Number"/>
                        <input type="pasword" className="w-[371px] h-[56px]  border border-b-2 border-x-0 border-t-0 border-slate-400 "
                        placeholder="Password"/>
                        <button className="w-[371px] h-[56px] mt-8 py-3 px-8 rounded-md text-center bg-red-500 text-white">Create Account</button>
                        <button className="w-[371px] h-[56px] py-3 px-8 rounded-md flex text-center justify-center gap-4 border border-slate-400 text-black">
                        <Image src={"/signup/icon-Google.png"}
                        alt="Google Logo"
                        width={24}
                        height={24}/>
                        Sign up with Google</button>
                    </form>
                <div className=" flex text-center justify-center gap-4 m-10 text-base font-regular">
                    <h1>Already have account?</h1>            
                    <h1><u><Link href={"/LogIn"}>Log In</Link></u></h1>            
                </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default SignUp;