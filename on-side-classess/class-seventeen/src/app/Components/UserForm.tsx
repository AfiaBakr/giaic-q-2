'use client';

import React, {useState} from "react";
import { useRouter } from "next/navigation";

const UserForm =() => {
    const router = useRouter()
    const [name, setName] = useState('');
    const handleSubmit =async (e:any) =>{
        e.preventDefault()

    const url =await fetch ('/api/hello',
        {
            method: 'POST',
            headers:{'content-Type' : 'application/json'},
            body:JSON.stringify({name})
        }
    );
    await url.json()
    router.refresh()
    
    }
    return(
        <div >
            <form onSubmit={handleSubmit}>
            <input className="bg-slate-700 text-white text-xl w-auto h-14 rounded-md p-2"
            onChange={(e:any)=>setName(e.target.value)}
            type="text"
            placeholder="Enter Product" />
            <button className="text-xl border-2 rounded-md w-28 h-14 ml-6" type="submit">Submit</button>
            </form>
        </div>
    )
};
export default UserForm